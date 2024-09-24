
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useRef } from 'react'
import { WomanModel } from './Woman'
import Three from '../three'
import { BackSide, Group, MathUtils } from 'three'
import { OrbitControls as OrbitControlsImpl, } from 'three-stdlib';
import { useFrame } from '@react-three/fiber'
import Interface from './Interface';


const Experience = () => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null)
  const womanRef = useRef<Group>(null)
  
  // useFrame((state) => {

  //   if(orbitControlsRef.current){
      
  //   console.log(state.camera.position)
  //   }


  // })
  return (
    <>
      
          {/* <Three /> */}
           {/* Floor */}
           <PerspectiveCamera fov={20}   makeDefault position={[0,1,20]} />
           <OrbitControls ref={orbitControlsRef} />
           <ambientLight />
           <directionalLight shadow-mapSize-width={1024}  castShadow position={[-5,5,5]}  shadow-mapSize-height={1024} />
           
           <group position={[0,-1,0]}>
           <WomanModel ref={womanRef}/>
           </group>
           <mesh rotation={[-0.3 * Math.PI, 0, 0]} position={[0,-1,0]} receiveShadow>
            <planeGeometry args={[10,10,1,1]} />
            <shadowMaterial transparent opacity={0.2} />
           </mesh>
           
          <Environment background>
        <mesh>
        <sphereGeometry args={[50,100,100]} />
        <meshBasicMaterial side={BackSide} color={"#2280cc"} />
        </mesh>
    </Environment>
    
    {/* <mesh>
      <boxGeometry/>
      <meshNormalMaterial/>
    </mesh> */}

    </>
  )
}

export default Experience