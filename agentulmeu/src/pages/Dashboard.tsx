import { Card, CardContent } from '@/components/ui/card'

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">📊 Dashboard</h1>
      <p className="text-muted-foreground">Centrul de comandă pentru agenții tăi AI.</p>
      <Card>
        <CardContent className="p-6">
          <p>Placeholder: Business grid + Live feed va fi adăugat în Faza 4.</p>
        </CardContent>
      </Card>
    </div>
  )
}
