const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="logo text-xl font-bold">LOGO</div>
      <nav className="space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/" className="hover:text-gray-400">About Us</a>
        <a href="/" className="hover:text-gray-400">Portfolio</a>
        <a href="/" className="text-yellow-500">News</a>
        <a href="/" className="hover:text-gray-400">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
