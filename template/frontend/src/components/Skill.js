import React from 'react';

const Skill = () => {
  return (
    <div>
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/go-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Go Language
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='React Js'>
          <img src='./images/icons/python-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Python
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/aws-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          AWS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='MongoDB'>
          <img src='./images/icons/cplusplus-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          C++
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='HTML 5'>
          <img src='./images/icons/docker-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Docker
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/kubernetes-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Kubernetes
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/google-cloud-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Google cloud
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/prometheus-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Prometheus
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/grafana-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Grafana
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/terraform-icon-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Terraform
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/elasticsearch-logo-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          ELK Stack
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/jenkins-svgrepo-com.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Jenkins
        </div>
      </div>
    </section>
    </div>
  );
};

export default Skill;
