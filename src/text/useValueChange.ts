import { useRef } from "react"

export function useValueChange(value: string | number | undefined) {
  const prevRef = useRef<string | number | undefined>(undefined)
  const changed = prevRef.current !== undefined && prevRef.current !== value
  const prev = prevRef.current
  prevRef.current = value
  return { changed, prev, current: value } as const
}
