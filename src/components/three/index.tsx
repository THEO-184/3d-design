import { Environment, OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { MathUtils, BackSide,Mesh,Group, Material, NormalBufferAttributes, Object3DEventMap } from 'three'
import { OrbitControls as OrbitControlsImpl, } from 'three-stdlib';
import gsap from "gsap"
import { CarModel } from './CarModel';
import { WomanModel } from '../3d-carshow/Woman';


const Three = () => {
    // textures
    const basketballMapTexture = useTexture("/images/basketball.jpg")


    // console.log(a)
    // code to move the camera around
    const orbitControlsRef = useRef<OrbitControlsImpl>(null)
    const ballRef = useRef<Mesh>(null)
    const carRef  = useRef<Group>(null)
    


    // useFrame((state) => {
    //     if(!!orbitControlsRef.current){
    //         const {x, y} = state.pointer;
    //         orbitControlsRef.current.setAzimuthalAngle(-x * MathUtils.degToRad(90));
    //         orbitControlsRef.current.setPolarAngle((y + 0.6) * MathUtils.degToRad(60))
            
    //         orbitControlsRef.current.update()

    //     }
    //     const {} = state
    //     // console.log(state.pointer.x, state.pointer.y)
    // })

    // useEffect(() => {
    //     if(!!orbitControlsRef.current){
    //         console.log(orbitControlsRef.current)
    //     }
    // },[orbitControlsRef.current])

    // animation
    useEffect(() => {
        if(!!ballRef.current){
            console.log("ball ref", ballRef.current)
            const timeline = gsap.timeline()
            // x-axis animation
            timeline.to(ballRef.current.position, {
                x:0.5,
                duration:2
            })

            // y-axis motion
            timeline.to(ballRef.current.position, {
                y:0.5,
                duration:0.5,
                ease:"power2.in"
            }, "<")

            let height = 1.5;
            const coefficient = 0.8;

            for(let i =1; i <= 3; i++){
                // Goingn up
                timeline.to(ballRef.current.position, {
                    y: Math.pow(coefficient, i) * 1.5,
                    duration:0.5,
                    ease:"power2.out"
                }, ">")

                // come down
                timeline.to(ballRef.current.position, {
                    y:0.5,
                    duration:0.5,
                    ease:"power2.in"
                }, ">")
            }

            timeline.play()
        }
    },[ballRef.current])


    // animat car
    useEffect(() => {

        if(!!carRef.current){
            gsap.from(carRef.current.position, {
             
            x:-7.5,
                duration:3
            })
        }
        
    }, [carRef.current])

    
  return (
   <>
   {/* Camera */}
   
   <PerspectiveCamera  fov={50} makeDefault position={[0,1,20]} />
   <OrbitControls   ref={orbitControlsRef} minPolarAngle={MathUtils.degToRad(60)} maxPolarAngle={MathUtils.degToRad(80)} />

   {/* Car */}
   <CarModel ref={carRef} scale={0.5} position={[-2.5,0,-1.5]} rotation={[0,Math.PI / 4,0]}  />

   {/* Ball */}
   <mesh position={[-1,1.75,0]}  castShadow ref={ballRef as unknown as any}>
    <sphereGeometry args={[0.5,32,32]}  />
    <meshStandardMaterial color={"#fff"} metalness={0} roughness={0} map={basketballMapTexture} />
   </mesh>

   {/* Floor */}
   <mesh rotation={[-(MathUtils.degToRad(90)),0,0]} receiveShadow>
    <planeGeometry args={[20,20]} />
    <meshStandardMaterial color={"#1ea3d8"} />
   </mesh>

   {/* Ambient light */}
   <ambientLight args={["#fff",0.25]} />

   {/* Directional Light */}
   {/* <directionalLight args={["#ffffff",2]} position={[-2,1,0]} /> */}
   {/* <pointLight args={["#ffffff",2]} position={[-2,1,0]} /> */}
   {/* sport Light */}
   <spotLight args={["#ffffff",5,7, MathUtils.degToRad(45),0.4]} position={[-1.8,1,0]} castShadow/>

   {/* Environment */}
    <Environment background>
        <mesh>
        <sphereGeometry args={[50,100,100]} />
        <meshBasicMaterial side={BackSide} color={"#2280cc"} />
        </mesh>
    </Environment>
   </>
  )
}

export default Three