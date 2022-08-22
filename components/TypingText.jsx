import React from 'react'
import { useTypedText } from '../customHooks/useTypedText'


const TypingText = (typedArray) => {
    // this is where the magic happens, you give an array of strings and it will
    // type them out letter by letter
    let typedText = useTypedText(typedArray.typedArray)

    // just some styling to make it look pretty when there's no text
    if (!typedText) {
      typedText = <span className="invisible -ml-12">|</span>
    }

  return (
    <h2 className="text-gradient-tertiary text-center lg:text-left text-[clamp(1rem,4vw,1.25rem)] sm:text-[lg] md:text-lg font-bold md:leading-[min(72px,5vw)] transition-all duration-300 ease-in-out">
      {typedText}<span className="blinking-cursor font-semibold">|</span>
    </h2>
  )
}

export default TypingText