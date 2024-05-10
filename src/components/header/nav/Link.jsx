const Link = ({ linkTitle }) => {
  return (
    <a
      href="#"
      className="hover:border-b hover:border-b-amber-200 hover:text-amber-200 transition-all"
    >
      {linkTitle}
    </a>
  );
};

export default Link;
