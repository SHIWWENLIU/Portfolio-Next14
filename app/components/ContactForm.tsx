import React from "react";
import { IconType } from 'react-icons/lib';
import { SiLinkedin,SiGithub } from 'react-icons/si';

const ContactForm = () => {
  return (
    // <form>
    //   <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
    //   <div className="mb-3">
    //     <input
    //       type="text"
    //       placeholder="Your name"
    //       name="name"
    //       className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       name="email"
    //       className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <input
    //       placeholder="Your message"
    //       name="message"
    //       className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
    //     />
    //   </div>
    //   <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
    //     Send a message
    //   </button>
    // </form>
    <div className='mt-2 flex flex-col items-center text-white mb-44'>
    <div className='text-xl font-bold mb-2'>
      Find me on
    </div>
    <div className='flex space-x-4'>
      {socials.map((social) => (
        <div key={social.href} className='mx-2'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={social.href}
          >
            {social.text}
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};

type Social = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
};
const socials: Social[] = [
  {
    href: 'https://www.linkedin.com/in/shiwen-liu-170169154/',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
      <span className='font-medium'>Linkedin</span>
      </>
    ),
  },
  {
    href: 'https://github.com/SHIWWENLIU?tab=repositories',
    icon: SiGithub,
    id: 'github',
    text: (
      <>
      <span className='font-medium'>Github</span>
      </>
    ),
  }
]

export default ContactForm;
