import { useCharacterAnimationsContext } from '@/context/CharacterAnimations';
import { Html } from '@react-three/drei';
import React from 'react'

const Interface = () => {
    const {animations, animationIndex, setAnimationIndex} = useCharacterAnimationsContext()
  return (
    
    <Html type='h6' className='fixed -bottom-52 flex -right-96 flex-col gap-3'>
       {animations.map((animation, index) => {
        return <button onClick={() => setAnimationIndex(index)} key={animation} type='button' className={`bg-blue-200 text-white rounded-md px-3 py-1 ${animationIndex === index ? "bg-black text-white" : "bg-blue-200"}`}>{animation}</button>
       })}
    </Html>
  )
}

export default Interface