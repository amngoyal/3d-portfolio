import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative mx-auto w-full h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="bg-[#915eff] rounded-full w-5 h-5" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {"Hi, I'm "}
            <span className="text-[#915eff]">Aman</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            {"I'm a full stack developer with a  passion for creating"}
            <br className="hidden sm:block" /> web applications having 5+ years
            of experience.
          </p>
        </div>
      </div>

      {isMobile ? (
        <img
          src="/model.webp"
          alt="Computers Canvas"
          className="bottom-[30%] absolute w-full h-auto"
        />
      ) : (
        <ComputersCanvas />
      )}

      <div className="bottom-[70px] xs:bottom-10 absolute flex justify-center items-center w-full">
        <a href="#about">
          <div className="flex justify-center items-start p-2 border-4 border-secondary rounded-3xl w-[35px] h-[64px]">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary mb-1 rounded-full w-3 h-3"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
