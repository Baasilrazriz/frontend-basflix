import React, { useEffect, useState, startTransition } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

function LandingPage() {
  const bg = useSelector((state) => state.landing.bg);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const sections = useSelector((state) => state.landing.sections);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const userDropdownOpen = useSelector((state) => state.login.userDropdownOpen);
  const userDropdownRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if scrolled past top
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  const handleSignInClick = () => {
    startTransition(() => {
if(isLoggedIn)
  navigate('/home');
else
navigate('/login');
}
  
  )
  };

  return (
    <div id="Landing" className="bg-gray-600 relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="w-screen h-[99vh]" style={{ backgroundImage: `${bg}` }}>
        <header className={`z-50 w-screen p-6 px-20 flex justify-between items-center ${isScrolled ? 'backdrop-blur-xl' : 'backdrop-blur-xs'} bg-transparent fixed top-0`}>
          <NavLink to='/' className="text-red-600 text-4xl font-bold">BASFLIX</NavLink>
          {isLoggedIn?<>
            <div className="relative flex-col " ref={userDropdownRef}>
          <button
            className="w-10 h-10 rounded-full overflow-hidden"
            onClick={handleOpenLoginModal}
          >
              <img
                className="h-full w-full object-fill"
                src={profilepic}
                alt=""
                 
              />
            ) 
          </button>
          {userDropdownOpen && (
            <div class="  absolute right-0  z-[999] px-fit   my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 text-nowrap dark:text-white">
                  {username}
                </span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <button 
                                    onClick={handleFavClick}
                  class="block text-nowrap w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Your Favourite Movie
                  </button>
                </li>
                <li>
                  <button  
                  onClick={handlehistoryClick}
                  class="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    History
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleSignOut}
                    class="w-full block text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
          </>:<button onClick={handleSignInClick} className="bg-gradient-to-r from-red-800 to-red-600 text-white font-bold hover:scale-95 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 px-4 py-2 rounded">Sign In</button>}
        </header>
        <main className="flex flex-col items-center mt-64">
          <h1 className="text-5xl font-bold text-center">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-2xl font-semibold text-center mt-4">
            Watch anywhere. Cancel anytime.
          </h2>
          <div className="mt-6">
            <button onClick={handleSignInClick} className="bg-gradient-to-r from-red-800 to-red-600 text-white font-bold px-10 py-4 rounded-md hover:scale-95 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500">
              Get Started
            </button>
          </div>
        </main>
      </div>
      <div className='w-screen'>
        <div className='mt-2'>
          {sections.map((sec) => (
            <div className='bg-black' id={sec.name} key={sec.name}>
              <img className='h-full w-full object-cover' src={sec.image} alt={sec.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
