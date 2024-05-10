import { FaBell } from 'react-icons/fa6';
import { IoPersonCircle } from 'react-icons/io5';
import Nav from './nav/Nav';

const Header = () => {
  return (
    <header className="flex justify-between px-40 py-5 bg-blue-950 text-white">
      <Nav />
      <div className="flex gap-3 items-center">
        <FaBell className="hover:text-amber-200 transition-all cursor-pointer" />
        <IoPersonCircle className="text-2xl hover:text-amber-200 transition-all cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
