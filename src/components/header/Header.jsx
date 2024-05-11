import { FaBell } from 'react-icons/fa6';
import { IoPersonCircle } from 'react-icons/io5';
import Nav from './nav/Nav';

const Header = () => {
  return (
    <header className="flex justify-between py-5 text-white lg:px-10 xl:px-40 bg-blue-950">
      <Nav />
      <div className="flex items-center gap-3">
        <FaBell className="transition-all cursor-pointer hover:text-amber-200" />
        <IoPersonCircle className="text-2xl transition-all cursor-pointer hover:text-amber-200" />
      </div>
    </header>
  );
};

export default Header;
