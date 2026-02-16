"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { LogoutButton } from "./logout-button"

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col justify-between border-r bg-sidebar p-4 gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-primary">CatetAja</h2>

        <Button className="rounded-2xl">
          <Plus className="w-4 h-4 mr-2" />
          Group Baru
        </Button>

        <Card className="p-3 max-h-6/8 rounded-2xl">
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
      </div>

      <LogoutButton />
    </aside>
  )
}
