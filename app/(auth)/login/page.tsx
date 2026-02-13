"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const supabase = createClient()

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Button onClick={login}>
        Login with Google
      </Button>
    </div>
  )
}
