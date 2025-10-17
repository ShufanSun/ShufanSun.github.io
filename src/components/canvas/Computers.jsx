import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./girl/girlModelNorm.gltf");
    
    const fireflyRef = useRef();
    const lightRef = useRef();
    const glowGroupRef = useRef();
    
    useFrame((state) => {
        const time = state.clock.elapsedTime;
        
        if (fireflyRef.current) {
            const pulseIntensity = 2 + Math.sin(time * 3) * 0.5 + Math.sin(time * 7) * 0.2;
            fireflyRef.current.material.emissiveIntensity = pulseIntensity;
        }
        
        if (lightRef.current) {
            const lightIntensity = 1.5 + Math.sin(time * 3) * 0.5 + Math.sin(time * 7) * 0.2;
            lightRef.current.intensity = lightIntensity;
        }
        
        if (glowGroupRef.current) {
            // Subtle scale animation for the glow
            const scale = 1 + Math.sin(time * 2) * 0.1;
            glowGroupRef.current.scale.set(scale, scale, scale);
        }
    });
    
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={0.5}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={0.5} />
            
            <group>
                <primitive
                    object={computer.scene}
                    scale={isMobile ? 0.4 : 0.5}
                    position={isMobile ? [0, -3, 0] : [0, -2.9, 0]}
                    rotation={[-0.01, -0.15, -0.01]}
                />
                
                {/* Core light source (small and bright) */}
                <mesh 
                    ref={fireflyRef}
                    position={[0, -0.4, -0.6]}
                >
                    <sphereGeometry args={[0.02, 16, 16]} />
                    <meshBasicMaterial 
                        color="#ffcc00"
                        transparent={true}
                        opacity={0.8}
                    />
                </mesh>
                
                {/* Volumetric glow using multiple layered spheres */}
                <group ref={glowGroupRef} position={[0, -0.4, -0.6]}>
                    {/* Inner glow layer */}
                    <mesh>
                        <sphereGeometry args={[0.06, 32, 32]} />
                        <meshBasicMaterial 
                            color="#ffaa00"
                            transparent={true}
                            opacity={0.3}
                            blending={THREE.AdditiveBlending}
                            depthWrite={false}
                        />
                    </mesh>
                    
                    {/* Middle glow layer */}
                    <mesh>
                        <sphereGeometry args={[0.1, 32, 32]} />
                        <meshBasicMaterial 
                            color="#ffaa00"
                            transparent={true}
                            opacity={0.15}
                            blending={THREE.AdditiveBlending}
                            depthWrite={false}
                        />
                    </mesh>
                    
                    {/* Outer glow layer */}
                    <mesh>
                        <sphereGeometry args={[0.16, 32, 32]} />
                        <meshBasicMaterial 
                            color="#ffaa00"
                            transparent={true}
                            opacity={0.08}
                            blending={THREE.AdditiveBlending}
                            depthWrite={false}
                        />
                    </mesh>
                </group>
                
                {/* Alternative: Single sphere with custom shader for smooth falloff */}
                <mesh position={[0, -0.4, -0.6]}>
                    <sphereGeometry args={[0.16, 64, 64]} />
                    <shaderMaterial
                        transparent={true}
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                        uniforms={{
                            glowColor: { value: new THREE.Color(0xffaa00) },
                            innerRadius: { value: 0.02 },
                            outerRadius: { value: 0.16 }
                        }}
                        vertexShader={`
                            varying vec3 vPosition;
                            void main() {
                                vPosition = position;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `}
                        fragmentShader={`
                            uniform vec3 glowColor;
                            uniform float innerRadius;
                            uniform float outerRadius;
                            varying vec3 vPosition;
                            
                            void main() {
                                float dist = length(vPosition);
                                float intensity = 1.0 - smoothstep(innerRadius, outerRadius, dist);
                                intensity *= intensity; // Quadratic falloff for more natural look
                                
                                gl_FragColor = vec4(glowColor, intensity * 0.3);
                            }
                        `}
                    />
                </mesh>
                
                {/* Point light for illumination */}
                <pointLight 
                    ref={lightRef}
                    position={[0, -0.4, -0.6]}
                    intensity={1.5}
                    color="#ffaa00"
                    distance={8}
                    decay={2}
                />
            </group>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='always'
            shadows
            dpr={[1, 2]}
            // camera={{ position: [5, 3, -20], fov: 25 }}
            // camera={{ position: [-10.607, 3, -17.677], fov: 25 }}
            // camera={{ position: [-7.382, 3, -19.255], fov: 25 }}
            camera={{ position: [-3.931, 3, -20.240], fov: 25 }}


            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;