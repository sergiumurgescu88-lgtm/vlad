import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type BusinessStatus = 'setup' | 'active' | 'paused'
export type BusinessStage = 'idea' | 'mvp' | 'growth' | 'scale'

export interface Business {
  id: string
  name: string
  type: string
  stage: BusinessStage
  progress_step: number
  status: BusinessStatus
  stepData: Record<string, any>
}

interface AgentStore {
  businesses: Business[]
  dashboard: { live_feed: any[]; status: 'online' | 'offline' }
  ui: { theme: 'dark' }
  addBusiness: (name: string, type: string, stage?: BusinessStage) => string
  updateStepData: (businessId: string, section: string, data: any) => void
  setProgress: (businessId: string, step: number) => void
  deleteBusiness: (businessId: string) => void
  getBusiness: (id: string) => Business | undefined
}

export const useAgentStore = create<AgentStore>()(
  persist(
    (set, get) => ({
      businesses: [],
      dashboard: { live_feed: [], status: 'online' },
      ui: { theme: 'dark' },
      
      addBusiness: (name, type, stage = 'idea') => {
        const id = Math.random().toString(36).substr(2, 9)
        const newBiz: Business = {
          id, name, type, stage,
          progress_step: 0,
          status: 'setup',
          stepData: {}
        }
        set(state => ({ businesses: [...state.businesses, newBiz] }))
        return id
      },
      
      updateStepData: (businessId, section, data) => {
        set(state => ({
          businesses: state.businesses.map(b => 
            b.id === businessId 
              ? { 
                  ...b, 
                  stepData: { 
                    ...b.stepData, 
                    [section]: { 
                      ...(b.stepData[section] || {}), 
                      ...data 
                    } 
                  } 
                }
              : b
          )
        }))
      },
      
      setProgress: (businessId, step) => {
        set(state => ({
          businesses: state.businesses.map(b => 
            b.id === businessId ? { ...b, progress_step: step } : b
          )
        }))
      },
      
      deleteBusiness: (businessId) => {
        set(state => ({ 
          businesses: state.businesses.filter(b => b.id !== businessId) 
        }))
      },
      
      getBusiness: (id) => get().businesses.find(b => b.id === id)
    }),
    {
      name: 'agentulmeu-store',
      storage: createJSONStorage(() => {
        // Safe localStorage wrapper
        try {
          return localStorage
        } catch {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          }
        }
      })
    }
  )
)
