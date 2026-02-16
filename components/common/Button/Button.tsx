"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"

type CustomButtonProps = React.ComponentProps<typeof Button> & {
  isLoading?: boolean
}

export default function CustomButton({
  className,
  variant = "default",
  size = "default",
  disabled,
  isLoading = false,
  children,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      className={cn("relative", className)}
      {...props}
    >
      {isLoading && (
        <Spinner data-icon="inline-start" />
      )}
      {children}
    </Button>
  )
}
