// import { logoMain } from "../assets/images";
import { logoMain } from "../assets/images";
// import { navLinks } from "../constants";

// const Nav = () => {
//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="/"><img src={logoMain} alt="Logo" width={180} height={15} /></a>
//         <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a href={item.href} className='font-anton leading-normal text-3xl text-black'>{item.label}</a>
//             </li>
//           ))}
//         </ul>
//         {/* <div className="hidden max-lg:  ">
//             <img src={hamburger} alt="Hamburger" width={25} height={25}/>
//         </div> */}
//       </nav>
//     </header>
//   )
// }

// export default Nav;

import React from 'react';
// import logo from '../assets/images/logo.png'; // Update with the path to your logo image

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 py-4 bg-transparent z-50">
      <div className="flex justify-center">
        <img src={logoMain} alt="Logo" className="h-16" />
      </div>
    </nav>
  );
};

export default Nav;

