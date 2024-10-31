import logo from '../../../public/images/logo.png'
import imgCoin from '../../../public/images/coin.png'

import Banner from '../Banner/Banner';

import PropTypes from 'prop-types';

import './Header.css';

const Header = ({selected, handleSelect, coin, handleCoin, playerSelected}) => {





    let num = playerSelected.length;

    return (
        <header className="">

            <div className="navbar bg-base-100 justify-between sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                </ul>
                </div>
                <img src={logo} alt="logo" className='w-14' />
            </div>
            <div className="navbar-end hidden lg:flex mr-10">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a href="#">Schedules</a></li>
                </ul>
            </div>
            <div className="navbar-end w-auto">
                <a className="btn bg-white border border-black/[.10]">{coin} Coin <img src={imgCoin} alt="coin" /></a>
            </div>
            </div>

            <Banner handleCoin={handleCoin}></Banner>

            <div className='flex justify-between items-end mt-12'>
                <h2 className='text-2xl'>{`${selected === 'btn-1' ? 'Available Players' : 'Selected Player ('+num+'/6)'}`} </h2>
                <div className="flex justify-center items-start">
                    <button className={`btn rounded-l-lg rounded-r-none ${selected === 'btn-1' ? 'active' : ''}`} onClick={() => {handleSelect('btn-1')}} >Available</button>
                    <button className={`btn bg-white rounded-r-lg rounded-l-none ${selected === 'btn-2' ? 'active' : ''}`} onClick={() => {handleSelect('btn-2')}}>Selected ({num})</button>
                </div>
            </div>


        </header>
    );
};

Header.propTypes ={
    selected: PropTypes.string.isRequired,
    handleSelect : PropTypes.func.isRequired,
    coin: PropTypes.number.isRequired,
    handleCoin: PropTypes.func.isRequired,
    playerSelected: PropTypes.array.isRequired
}

export default Header;