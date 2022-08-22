import { useEffect, useState } from 'react'

const TypePhase = [
  "Typing",
  "Pausing",
  "Deleting",
]

// default values for the typing interval

const TYPING_INTERVAL_MIN = 20
const TYPING_INTERVAL_MAX = 35
const TYPING_PAUSE_MS = 2000
const DELETING_INTERVAL = 20
const DELETING_PAUSE_MS = 500

const getRandomTypingInterval = () => {
  return Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) + TYPING_INTERVAL_MIN
}

export const useTypedText = (typedArray) => {
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(TypePhase[0])
  const [typedText, setTypedText] = useState(' ')

  useEffect(() => {
    switch (phase) {
      case "Typing" : {
        const nextTypedText = typedArray[selectedIndex].slice(
          0,
          typedText.length + 1
        )

        if (nextTypedText === typedText) {
          setPhase("Pausing")
          return
        }

        const timeout = setTimeout(() => {
          setTypedText(nextTypedText)
        }, getRandomTypingInterval())

        return () => clearTimeout(timeout)
      }
      case "Deleting": {
        if (!typedText ) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1
            setSelectedIndex(typedArray[nextIndex] ? nextIndex : 0)
            setPhase("Typing")
          }, DELETING_PAUSE_MS)
          return () => clearTimeout(timeout)
        }

        const nextRemaining = typedArray[selectedIndex].slice(
          0,
          typedText.length - 1
        )
        if (nextRemaining.length === 1) {
            nextRemaining = ' '
        }

        const timeout = setTimeout(() => {
          setTypedText(nextRemaining)
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
  }, [typedArray, typedText, selectedIndex, phase])

  if (!typedArray.length) {
    return ' '
  }

  return typedText
}