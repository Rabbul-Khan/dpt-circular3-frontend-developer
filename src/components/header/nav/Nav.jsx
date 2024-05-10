import Link from './Link';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-7 font-semibold ">
        <li>
          <Link linkTitle="Dashboard" />
        </li>
        <li>
          <Link linkTitle="Master Price" />
        </li>
        <li>
          <Link linkTitle="Custom Price" />
        </li>
        <li>
          <Link linkTitle="Calender" />
        </li>
        <li>
          <Link linkTitle="Reports" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
