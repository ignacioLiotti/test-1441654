import { useCallback, useEffect, useState } from 'react'

const TypePhase = [
  "Typing",
  "Pausing",
  "Deleting",
]

const TYPING_INTERVAL_MIN = 80
const TYPING_INTERVAL_MAX = 150
const TYPING_PAUSE_MS = 2000
const DELETING_INTERVAL = 50
const DELETING_PAUSE_MS = 500

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
  TYPING_INTERVAL_MIN

export const useTypedSuperpower = (typedArray) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(TypePhase[0])
  const [typedSuperpower, setTypedSuperpower] = useState(' ')

  useEffect(() => {
    switch (phase) {
      case "Typing" : {
        const nextTypedSuperPower = typedArray[selectedIndex].slice(
          0,
          typedSuperpower.length + 1
        )

        if (nextTypedSuperPower === typedSuperpower) {
          setPhase("Pausing")
          return
        }

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextTypedSuperPower)
        }, getRandomTypingInterval())

        return () => clearTimeout(timeout)
      }
      case "Deleting": {
        if (!typedSuperpower ) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1
            setSelectedIndex(typedArray[nextIndex] ? nextIndex : 0)
            setPhase("Typing")
          }, DELETING_PAUSE_MS)
          return () => clearTimeout(timeout)
        }

        const nextRemaining = typedArray[selectedIndex].slice(
          0,
          typedSuperpower.length - 1
        )
        if (nextRemaining.length === 1) {
            nextRemaining = ' '
            console.log('si')
        }

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextRemaining)
        }, DELETING_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case "Pausing":
      default:
        const timeout = setTimeout(() => {
          setPhase("Deleting")
        }, TYPING_PAUSE_MS)

        return () => clearTimeout(timeout)
    }
  }, [typedArray, typedSuperpower, selectedIndex, phase])

  if (!typedArray.length) {
    return ' '
  }

  return typedSuperpower
}