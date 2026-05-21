import { useRef } from "react"

export function useValueChange(val: string | number | undefined) {
  const prevRef = useRef<string | number | undefined>(undefined)
  const changed = prevRef.current !== undefined && prevRef.current !== val
  const prev = prevRef.current
  prevRef.current = val
  return { changed, prev, current: val }
}
