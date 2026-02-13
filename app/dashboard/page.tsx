import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Kosan Rame</h1>
          <p className="text-muted-foreground">
            Total bulan ini: Rp 1.250.000
          </p>
        </div>

        <Button className="rounded-2xl">
          <Users className="w-4 h-4 mr-2" />
          Invite
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">
              Total Pengeluaran
            </div>
            <div className="text-xl font-bold">
              Rp 3.200.000
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">
              Pengeluaranmu
            </div>
            <div className="text-xl font-bold">
              Rp 850.000
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">
              Member
            </div>
            <div className="text-xl font-bold">
              4 Orang
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expense List */}
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Makan Ayam Geprek</div>
              <div className="text-sm text-muted-foreground">
                Ditambahkan oleh Helmi
              </div>
            </div>
            <div className="font-semibold text-primary">
              Rp 75.000
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Bayar Listrik</div>
              <div className="text-sm text-muted-foreground">
                Ditambahkan oleh Andi
              </div>
            </div>
            <div className="font-semibold text-primary">
              Rp 400.000
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Floating Button Mobile */}
      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full shadow-lg md:hidden"
      >
        <Plus className="w-5 h-5" />
      </Button>

    </div>
  )
}
