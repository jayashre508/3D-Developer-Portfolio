import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        {/*<img src={logo} alt='logo' className='w-18 h-18 object-contain' />*/}
          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-sky-500 font-semibold text-[2rem]">JK</span>
          </div>

      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
        {/*<nav className="flex gap-8 text-lg font-medium">*/}
        {/*    <NavLink*/}
        {/*        to="/about"*/}
        {/*        className={({ isActive }) =>*/}
        {/*            `pb-1 border-b-2 ${*/}
        {/*                isActive ? "border-blue-600 text-blue-600" : "border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-600"*/}
        {/*            }`*/}
        {/*        }*/}
        {/*    >*/}
        {/*        About*/}
        {/*    </NavLink>*/}

        {/*    <NavLink*/}
        {/*        to="/projects"*/}
        {/*        className={({ isActive }) =>*/}
        {/*            `pb-1 border-b-2 ${*/}
        {/*                isActive ? "border-blue-600 text-blue-600" : "border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-600"*/}
        {/*            }`*/}
        {/*        }*/}
        {/*    >*/}
        {/*        Projects*/}
        {/*    </NavLink>*/}
        {/*</nav>*/}

    </header>
  );
};

export default Navbar;