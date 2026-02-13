"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-sidebar p-4 gap-4">
      <h2 className="text-xl font-bold text-primary">CatetAja</h2>

      <Card className="p-3 rounded-2xl">
        <div className="text-sm font-medium">Group Aktif</div>
        <div className="mt-2 space-y-2">
          <div className="p-2 rounded-xl bg-accent cursor-pointer">
            Kosan Rame
          </div>
          <div className="p-2 rounded-xl hover:bg-accent cursor-pointer">
            Trip Bali
          </div>
        </div>
      </Card>

      <Button className="rounded-2xl">
        <Plus className="w-4 h-4 mr-2" />
        Group Baru
      </Button>
    </aside>
  )
}
