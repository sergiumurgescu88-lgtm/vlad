import { Card, CardContent } from '@/components/ui/card'

export default function Wizard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">🧙 Wizard</h1>
      <p className="text-muted-foreground">Configurează-ți agentul AI în 10 pași.</p>
      <Card>
        <CardContent className="p-6">
          <p>Placeholder: Pașii 2-10 vor fi implementați în Faza 3.</p>
        </CardContent>
      </Card>
    </div>
  )
}
