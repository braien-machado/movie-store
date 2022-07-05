import {
  Heart,
  MagnifyingGlass,
  Popcorn,
  ShoppingCart,
} from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cart from './Cart';

export default function Header() {
  const [isCartHidden, setIsCartHidden] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsCartHidden(true);
  }, [pathname]);

  const toggleCart = () => setIsCartHidden(!isCartHidden);

  return (
    <>
      <header
        className="flex w-full h-16 bg-teal-400 justify-between items-center px-8"
      >
        <Link
          to="/"
          className={ `${pathname === '/' ? 'animate-bounce pointer-events-none' : ''}
        hover:animate-pulse hover:text-gray-800 transition-colors` }
        >
          {/* here goes logo replacing Popcorn icon */}
          <Popcorn size={ 32 } weight="fill" />
        </Link>
        <label
          className={ `flex items-center bg-white h-[80%] text-gray-800 rounded 
          px-3 border border-gray-400 min-w-fit w-1/3 gap-3` }
          htmlFor="search-input"
        >
          <input
            className="focus:outline-none w-full"
            id="search-input"
            placeholder="Pesquisa"
            type="text"
          />
          <MagnifyingGlass className="text-gray-800" size={ 32 } />
        </label>
        <div className="flex gap-4">
          <Link
            to="/favorites"
            className={ `${pathname === '/favorites'
              ? 'animate-bounce pointer-events-none text-red-500' : ''}
              hover:animate-pulse hover:text-red-500 transition-colors` }
          >
            <Heart size={ 32 } weight="fill" />
          </Link>
          <button
            className="relative hover:animate-pulse hover:text-gray-800 transition-colors"
            onClick={ toggleCart }
            type="button"
          >
            <span
              className={ `absolute -top-3 -right-3 text-gray-800 text-sm w-6 h-6
              bg-amber-200 rounded-full flex items-center justify-center` }
            >
              2
            </span>
            <ShoppingCart size={ 32 } weight="fill" />
          </button>
        </div>
      </header>
      {
        !isCartHidden && <Cart />
      }
    </>
  );
}
