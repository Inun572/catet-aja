import { createServerClient } from "@supabase/ssr"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(req: NextRequest) {
  let res = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("🔥 USER IN PROXY:", req.cookies.getAll())

  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard")
  const isLogin = req.nextUrl.pathname.startsWith("/login")

  if (!user && isDashboard) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (user && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
