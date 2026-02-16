"use client"

import Button from "@/components/common/Button/Button"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Sparkles } from "lucide-react"
import { Icon } from "@iconify-icon/react";

export default function HomePage() {
  const supabase = createClient()
  const router = useRouter()

  const [isLogging, setIsLogging] = useState(false)
  const [isCheckingSession, setIsCheckingSession] = useState(true)
  const [hasLoggedBefore, setHasLoggedBefore] = useState(false)

  useEffect(() => {
    const init = async () => {
      // cek pernah login di device ini
      const logged = localStorage.getItem("hasLoggedBefore")
      if (logged === "true") {
        setHasLoggedBefore(true)
      }

      // cek session supabase
      const { data } = await supabase.auth.getSession()

      if (data.session) {
        router.replace("/dashboard")
        return
      }

      setIsCheckingSession(false)
    }

    init()
  }, [])

  const login = async () => {
    try {
      setIsLogging(true)

      localStorage.setItem("hasLoggedBefore", "true")

      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${location.origin}/auth/callback`,
        },
      })
    } catch (e) {
      setIsLogging(false)
    }
  }

  // while checking session → jangan render flicker
  if (isCheckingSession) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Checking session...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        
        <div className="flex justify-center">
          <div className="p-4 rounded-2xl bg-primary/10">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          Catet Aja
        </h1>

        <p className="text-muted-foreground text-lg">
          Your calm productivity space.
          <br />
          Organize smarter. Focus deeper.
        </p>

        <div className="pt-4">
          <Button 
            size="lg"
            className="px-8 text-base"
            onClick={login}
            isLoading={isLogging}
          >
            {isLogging && "Logging in..."}
            {!isLogging &&
              (<div className="flex items-center">
                <Icon icon="material-icon-theme:google" width="16" height="16" className="me-2" />
                {hasLoggedBefore ? 'Continue with Google' : 'Login with Google'}
              </div>)
            }
          </Button>
        </div>
      </div>
    </main>
  )
}
