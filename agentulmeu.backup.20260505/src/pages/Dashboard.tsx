import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAgentStore } from '@/store/useAgentStore'
import { useNavigate } from 'react-router-dom'
import { Plus, Activity, Users, DollarSign } from 'lucide-react'

export default function Dashboard() {
  const { businesses, dashboard, addBusiness } = useAgentStore()
  const navigate = useNavigate()

  // Simulare live feed
  useEffect(() => {
    const messages = [
      "🎯 HUNTER a găsit un lead nou",
      "✍️ WRITER a postat conținut",
      "📞 CLOSER a trimis o ofertă",
      "🛎️ SUPPORT a rezolvat un tichet"
    ]
    const interval = setInterval(() => {
      console.log("[Feed]", messages[Math.floor(Math.random() * messages.length)])
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  if (businesses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="text-6xl">🦞</div>
        <h2 className="text-2xl font-bold">Bine ai venit în AgentulMeu!</h2>
        <p className="text-muted-foreground max-w-md">
          Configurează primul tău business și pornește armata de agenți AI.
        </p>
        <Button size="lg" onClick={() => {
          addBusiness("Noul Meu Business", "service")
          navigate('/wizard')
        }}>
          <Plus className="w-4 h-4 mr-2" />
          [+] Adaugă Business
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📊 Dashboard</h1>
        <Badge variant={dashboard.status === 'online' ? 'default' : 'destructive'}>
          {dashboard.status === 'online' ? '🟢 Online' : '🔴 Offline'}
        </Badge>
      </div>

      {/* Business Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {businesses.map(biz => (
          <Card key={biz.id} className="hover:shadow-lg transition">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{biz.name}</CardTitle>
                <Badge variant="outline">{biz.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span>12 leads</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-blue-500" />
                  <span>4.5k RON</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span>3 agenți</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1" onClick={() => navigate('/wizard')}>
                  Deschide
                </Button>
                <Button size="sm" variant="outline">⏸️</Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="border-dashed hover:bg-muted/50 cursor-pointer" onClick={() => navigate('/wizard')}>
          <CardContent className="flex flex-col items-center justify-center h-40 gap-2">
            <Plus className="w-8 h-8 text-muted-foreground" />
            <span className="text-muted-foreground">Adaugă Business</span>
          </CardContent>
        </Card>
      </div>

      {/* Live Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">🧠 Activitate Agenți (Live)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground italic">Se conectează la feed...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
