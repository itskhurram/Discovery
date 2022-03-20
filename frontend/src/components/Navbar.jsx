import logo from '../assets/images/logo.svg';
const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        <a
          className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
          href="index.html"
        >
          <img
            src={logo}
            alt="welty"
            className="h-16"
          />
        </a>
        <button
          className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
        </button>

        <div
          className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
          id="navbarsExampleDefault"
        >
          <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
            <li>
              <a className="nav-link page-scroll active" href="#header">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#features">
                Sign In
              </a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#details">
                Sign up
              </a>
            </li>
          
          </ul>
          {/* <span className="block lg:ml-3.5">
            <a className="no-underline" href="#your-link">
              <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
            </a>
            <a className="no-underline" href="#your-link">
              <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
            </a>
          </span> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
