import { useEffect } from 'react'

export function useKeyDown(key, callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}

export function useAltKeyDown(key, callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.alt && event.key === key) {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback, key])
}
