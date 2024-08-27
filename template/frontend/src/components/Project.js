// import React from 'react';
// import projects from '../projectData';

// const Project = () => {
//   return (
//     <>
//       <section className='my-28 px-5' id='projects'>
//         <header className='text-2xl font-bold pt-10'>
//           <h2>Projects</h2>
//         </header>
//         <div className='my-7 space-y-24'>
//           {projects.map((project, index) => (
//             <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
//               <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg ' : 'w-full md:w-6/12 shadow-lg md:order-1'}>
//                 <source
//                   srcSet={`${project.image}-1280.webp 1920w,
//                         ${project.image}-768.webp 768w,
//                         ${project.image}-320.webp 320w`}
//                   sizes='(min-width: 768px) 50vw, 100vw'
//                   type='image/webp'
//                 />
//                 <source srcSet={`${project.image}-768.jpg 768w,`} sizes='(min-width: 768px) 50vw, 100vw' type='image/jpg' />

//                 <img width='768px' height='575px' loading='lazy' alt={project.title} className='rounded-lg' />
//               </picture>
//               <div className='flex flex-col overflow-auto space-y-3 my-3 mx-1 w-full md:w-5/12 '>
//                 <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                
//                 {/* 새로 추가된 부분: 기간과 역할 */}
//                 <div className='flex justify-between items-center'>
//                   <span className='text-sm font-semibold text-blue-600'>{project.duration}</span>
//                   <span className='text-sm font-semibold bg-gray-200 rounded-full px-3 py-1'>{project.role}</span>
//                 </div>
                
//                 <p>{project.description}</p>
//                 <div className='flex overflow-auto space-x-3 pb-2'>
//                   {project.tools.map((disc, index) => (
//                     <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index}>
//                       {disc}
//                     </span>
//                   ))}
//                 </div>
//                 <div className='w-auto flex space-x-5 relative'>
//                   <a href={project.github} target='_blank' rel='noreferrer'>
//                     <img src='./images/icons/github.svg' alt='link to github page' width='24px' height='24px' />
//                   </a>
//                   <a href={project.link} target='_blank' rel='noreferrer'>
//                     <img src='./images/icons/external-link.svg' alt='link to live website' width='24px' height='24px' />
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//       <div className='mx-5'>
//         <a href='https://github.com/sejoonkimmm' target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>
//           <span>See more on Github</span>
//         </a>
//       </div>
//     </>
//   );
// };

// export default Project;
import React from 'react';
import projects from '../projectData';

const Project = () => {
  return (
    <>
      <section className='my-28 px-5' id='projects'>
        <header className='text-2xl font-bold pt-10'>
          <h2>Projects</h2>
        </header>
        <div className='my-7 space-y-24'>
          {projects.map((project, index) => (
            <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg ' : 'w-full md:w-6/12 shadow-lg md:order-1'}>
                <source
                  srcSet={`${project.image}-1280.webp 1920w,
                        ${project.image}-768.webp 768w,
                        ${project.image}-320.webp 320w`}
                  sizes='(min-width: 768px) 50vw, 100vw'
                  type='image/webp'
                />
                <source srcSet={`${project.image}-768.jpg 768w,`} sizes='(min-width: 768px) 50vw, 100vw' type='image/jpg' />
                <img width='768px' height='575px' loading='lazy' alt={project.title} className='rounded-lg' />
              </picture>
              <div className='flex flex-col overflow-auto space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                <div className='text-sm font-semibold text-gray-400'>
                  {project.affiliation} | {project.duration}
                </div>
                <div className='text-sm font-semibold text-gray-400'>{project.role}</div>
                <p>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2'>
                  {project.tools.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className='w-auto flex space-x-5 relative'>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <img src='./images/icons/github.svg' alt='link to github page' width='24px' height='24px' />
                  </a>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <img src='./images/icons/external-link.svg' alt='link to live website' width='24px' height='24px' />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className='mx-5'>
          <a href='https://github.com/sejoonkimmm' target='_blank' rel='noreferrer' className='bg-gray-900 block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>
            <span>See more on Github</span>
          </a>
        </div>
      </section>


      <section className='my-28 px-5' id='certifications'>
        <header className='text-2xl font-bold pt-10'>
          <h2>Certifications</h2>
        </header>
        <div className='my-7 grid gap-5 grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col items-center bg-gray-800 rounded-lg p-4' tabIndex='0' role='img' aria-label='AWS DevOps Professional Certification'>
            <img src='./images/icons/dop-c02.png' alt='AWS DevOps Professional' loading='lazy' className='w-32 mb-3' width='128px' height='128px' />
            <span className='text-lg font-semibold'>AWS Certified DevOps Engineer - Professional</span>
            <span className='text-sm text-gray-300 mt-2'>Obtained: Sep 2024</span>
          </div>
          <div className='flex flex-col items-center bg-gray-800 rounded-lg p-4' tabIndex='0' role='img' aria-label='CKA Certification'>
            <img src='./images/icons/cka.png' alt='CKA Certification' loading='lazy' className='w-32 mb-3' width='128px' height='128px' />
            <span className='text-lg font-semibold'>Certified Kubernetes Administrator (CKA)</span>
            <span className='text-sm text-gray-300 mt-2'>Obtained: July 2024</span>
          </div>
        </div>
      </section>

      <section className='my-28 px-5' id='education'>
        <header className='text-2xl font-bold pt-10'>
          <h2>Education</h2>
        </header>
        <div className='my-7 space-y-4'>
          <div className='bg-gray-800 rounded-lg p-4'>
            <h3 className='text-xl font-semibold'>Bachelor of Computer Science</h3>
            <p className='text-gray-300 mt-2'>Mar 2021 - Feb 2024</p>
          </div>
          <div className='bg-gray-800 rounded-lg p-4'>
            <h3 className='text-xl font-semibold'>42Wolfsburg</h3>
            <p className='text-gray-300 mt-2'>Member | Jul 2024 - Present</p>
          </div>
          <div className='bg-gray-800 rounded-lg p-4'>
            <h3 className='text-xl font-semibold'>42Seoul</h3>
            <p className='text-gray-300 mt-2'>Member & Student Council President | Nov 2022 - Jun 2024</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;