import { useEffect } from 'react'

export const useWindowEvent = <T extends keyof WindowEventMap>(
  event: T,
  callback: () => void
): void => {
  useEffect(() => {
    window.addEventListener(event, callback)

    return () => {
      window.removeEventListener(event, callback)
    }
  }, [event, callback])
}
