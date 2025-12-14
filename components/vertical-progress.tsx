"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface VerticalProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  indicatorClassName?: string
}

const VerticalProgress = React.forwardRef<HTMLDivElement, VerticalProgressProps>(
  ({ className, value = 0, max = 100, indicatorClassName, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div
        ref={ref}
        className={cn("relative h-full w-4 overflow-hidden rounded-full bg-secondary", className)}
        {...props}
      >
        <div
          className={cn("w-full bg-primary transition-all duration-300 ease-in-out", indicatorClassName)}
          style={{
            height: `${percentage}%`,
            position: "absolute",
            bottom: 0,
          }}
        />
      </div>
    )
  },
)
VerticalProgress.displayName = "VerticalProgress"

export { VerticalProgress }
