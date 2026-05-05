import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Settings as SettingsIcon, LayoutDashboard, Wand2 } from 'lucide-react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🦞</span>
            <span className="font-semibold">AgentulMeu</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Online
            </Badge>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/settings"><SettingsIcon className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-14 pb-20 md:pb-6">
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-border/50 bg-background/80 backdrop-blur-md pb-safe">
        <div className="flex justify-around py-3 text-xs text-muted-foreground">
          <Link to="/" className="flex flex-col items-center gap-1">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <Link to="/wizard" className="flex flex-col items-center gap-1">
            <Wand2 className="w-4 h-4" />
            <span>Wizard</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
