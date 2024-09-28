import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import hero from '/videos/hero.mp4';
import smallHero from '/videos/smallHero.mp4';

const FeatureIphone = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHero : hero);
  const [isVideoVisible, setIsVideoVisible] = useState(false); // For lazy loading
  const videoRef = useRef(null); // Reference for IntersectionObserver

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHero);
    } else {
      setVideoSrc(hero);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet); // Fixed typo
    };
  }, []);

  // Lazy load video using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect(); // Stop observing after video is loaded
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="relative w-full bg-black nav-height">
      <div className="flex flex-col items-center justify-center w-full h-5/6">
        <p id="hero" className="mt-8 font-bold text-center text-white/80 hero-title">IPhone 16 Pro</p>
        <div className="flex justify-center w-9/12 md:w-10/12">
          <video
            ref={videoRef} 
            className="pointer-events-none"
            autoPlay={isVideoVisible} 
            muted
            loop
            playsInline={true}
            key={videoSrc}
          >
            {isVideoVisible && <source src={videoSrc} type="video/mp4" />} {/* Only load the source if the video is visible */}
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center translate-y-20 opacity-0">
        <a
          href="#"
          className="text-center  w-[80px] h-[36px] bg-blue-600 btn rounded-full text-white/90"
        >
          Buy
        </a>

        <p className="!mt-2 text-xl font-normal text-white/60">From $199/month or $1299</p>
      </div>
    </section>
  );
};

export default FeatureIphone;
