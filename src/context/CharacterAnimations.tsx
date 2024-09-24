"use client"
import React, { createContext, useContext, useState } from "react"
import * as THREE from 'three'


type AnimationContextType = {
    animationIndex: number;
    setAnimationIndex: React.Dispatch<React.SetStateAction<number>>;
    animations: string[];
    setAnimations: React.Dispatch<React.SetStateAction<string[]>>

}

const CharacterAnimationContext = createContext<AnimationContextType | null>(null)

export const CharacterAnimationContextProvider = ({children}:{children: React.ReactNode}) => {
    const [animationIndex, setAnimationIndex] = useState(0)
    const [animations, setAnimations] = useState<string[]>([])
    return (<CharacterAnimationContext.Provider value={{
        animationIndex, setAnimationIndex, setAnimations,animations
    }}>
        {children}
    </CharacterAnimationContext.Provider>)
}


export const useCharacterAnimationsContext = () => {
    const context = useContext(CharacterAnimationContext)
    if(!context){
        throw new Error("useCharacterAnimations context can only be used within CharacterAnimationContextProvider")
    }

    return context
}