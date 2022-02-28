const Header = () => {
  return (
    <div className="fixed z-10 w-full flex justify-between items-center px-14 py-5 bg-[#ffe605]">
      <div className="font-medium xl:text-[1.2vw]">Bang Studios</div>
      <ul className="flex space-x-8 font-medium xl:text-[1.2vw]">
        <li>Home</li>
        <li>About</li>
        <li>Art</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
