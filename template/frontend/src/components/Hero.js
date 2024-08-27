import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

// const Hero = () => {
//   const container = useRef(null);

//   useEffect(() => {
//     Lottie.loadAnimation({
//       container: container.current,
//       renderer: 'svg',
//       loop: true,
//       autoplay: true,
//       animationData: require('./astronaout.json'),
//     });
//     animate.setSpeed(0.5);
//   }, []);

//   return (
//     <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
//       <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
//         <div className='container' ref={container}></div>
//       </div>
//       <div className='max-w-md mb-auto space-y-5'>
//         <h1 className='text-5xl font-bold md:text-7xl'>Hello. I’m Sejoon Kim</h1>
//         <p className='tracking-wide leading-relaxed'>
//         I'm a passionate DevOps | MLOps | Cloud Engineer, transforming complex systems into efficient, scalable solutions. With a background in military aviation and cutting-edge tech projects, I bring a unique blend of discipline and innovation to every challenge.{' '}
//         </p>
//       </div>
//     </section>
//   );
// };

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-48 md:w-72 lg:w-1/3'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-xl lg:max-w-2xl xl:max-w-3xl mb-auto space-y-5'> {/* 너비 증가 */}
        <h1 className='text-5xl font-bold md:text-7xl'>Hello. I'm Sejoon Kim</h1>
        <p className='tracking-wide leading-relaxed text-lg md:text-xl'>
        I'm a passionate DevOps | MLOps | Cloud Engineer, transforming complex systems into efficient, scalable solutions. With a background in military aviation and cutting-edge tech projects, I bring a unique blend of discipline and innovation to every challenge.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;