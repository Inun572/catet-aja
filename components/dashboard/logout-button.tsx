"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useModal } from "../common/modal/ModalProvider"

export function LogoutButton() {
  const supabase = createClient()
  const router = useRouter()
  const { openModal } = useModal();

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const onConfirmLogout = () => {
    openModal({
        title: "Konfirmasi Log Out",
        size:'sm',
        description: "Yakin akan log out?",
        confirmText: "Log Out",
        cancelText: "Batal",
        onConfirm: handleLogout
    })
  }

  return (
    <Button variant="outline" onClick={onConfirmLogout}>
      Logout
    </Button>
  )
}
