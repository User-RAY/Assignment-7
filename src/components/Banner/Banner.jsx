import PropTypes from 'prop-types';

const Banner = ({handleCoin}) => {
    return (
        <div className='bg-black rounded-2xl my-8'>
            <div className="bg-[url('https://i.ibb.co.com/2Mj3BzM/bg-shadow.png')] bg-cover bg-no-repeat rounded-2xl">
                <div className='flex flex-col justify-center items-center p-16 text-white'>
                    <img src="./images/banner-main.png" alt="logo" className='mb-4' />
                    <h1 className='text-4xl font-bold my-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='my-4 font-medium text-2xl text-[#FFFFFF]/[.7]'>Beyond Boundaries Beyond Limits</p>
                    <div className='p-1 border border-[#E7FE29] rounded-lg'><button className='btn bg-[#E7FE29]' onClick={handleCoin}>Claim Free Credit</button></div>
                </div>
            </div>
        </div>
    );
};


Banner.propTypes ={
  handleCoin : PropTypes.func.isRequired
}


export default Banner;