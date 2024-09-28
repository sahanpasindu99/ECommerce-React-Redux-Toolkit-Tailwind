import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import yellow from "/assets/images/yellow.jpg";

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellow,
  })

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if(size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2
      })
    }

    if(size ==='small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2
      })
    }
  }, [size])

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, []);

  return (
    <section className="relative overflow-hidden common-padding">
      <div className="screen-max-width !py-8 md:!py-0">
        <h1 id="heading" className="section-heading ">
          Take a closer look.
        </h1>
        <p className="font-normal text-gray-300 text-md md:text-lg md:pt-4 animate-slide-up">
  Touch to rotate the phone 360<span className="ml-1 text-white/70">🖐️</span>
</p>


        <div className="flex flex-col items-center mt-5 overflow-hidden ">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 blur-xs  border-2 rounded-full w-[15rem] h-[25rem] md:w-[20rem] md:h-[30rem] border-gray-100/5 top-1/2 left-1/2 -z-30" />
<div className="absolute transform -translate-x-1/2 -translate-y-1/2 border-2 blur-xs  rounded-full w-[25rem] h-[35rem] md:w-[35em] md:h-[45rem] border-gray-100/5 top-1/2 left-1/2 -z-40" />
<div className="absolute transform -translate-x-1/2 -translate-y-1/2 border-2 blur-xs  rounded-full w-[35rem] h-[45rem] md:w-[50rem] md:h-[60rem] border-gray-100/5 top-1/2 left-1/2 -z-50" />
<div className="absolute transform -translate-x-1/2 -translate-y-1/2 border-2 blur-xs  rounded-full w-[45rem] h-[55rem] md:w-[65rem] md:h-[75rem] border-gray-100/5 top-1/2 left-1/2 -z-50" />

        {/* <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-inner blur-xl bg-gradient-to-br from-purple-200 to-pink-200 shadow-pink-500/5 md:w-96 md:h-96 top-1/2 left-1/2 -z-20" />

<div className="absolute w-48 h-48 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg bg-gradient-to-br from-purple-300 to-pink-300 shadow-purple-500/10 md:w-80 md:h-80 top-1/2 left-1/2 -z-10" /> */}

          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView 
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />  

            <ModelView 
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="w-full mx-auto">
            <p className="mb-5 text-sm font-light text-center">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li key={i} className="w-6 h-6 mx-2 rounded-full cursor-pointer" style={{ backgroundColor: item.color[0] }} onClick={() => setModel(item)} />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span key={label} className="size-btn" style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white'}} onClick={() => setSize(value)}>
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model