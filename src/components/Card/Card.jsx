import PropTypes from 'prop-types';

import { MdAccountCircle } from "react-icons/md";
import { FaFlag } from "react-icons/fa";




const Card = ({card, handlePlayerSelection}) => {

    const {name, img_url, country, playertype, bat, bowl, price} = card;

    return (
        <div>

            <div className="card bg-base-100 border">
            <figure className="px-10 pt-10">
                <img
                src={img_url}
                alt={`image of ${name}`}
                className="rounded-xl object-cover h-48 w-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-left w-full"><MdAccountCircle className='text-2xl' />{name}</h2>
                <div className="flex justify-between items-center w-full">
                    <div className='w-1/2 text-left flex justify-start items-center sm:text-xs xl:text-base'><FaFlag className='mr-2'/>{country}</div> 
                    <div className="bg-gray-100 xl:py-2 sm:px-2 sm:py-1 xl:px-4 rounded-lg sm:text-sm xl:text-base ">{playertype} </div>
                </div>
                <hr className="border border-solid w-full" />
                <h2 className='text-left w-full'>Rating</h2>
    
                <div className="flex flex-col justify-between items-center w-full">
                    <div className='flex justify-between items-center w-full'>
                        <h3 className='sm:text-sm xl:text-base'>{bat}</h3>
                        <h3 className='sm:text-sm xl:text-base'>{bowl}</h3>
                    </div>
                    
                    <div className='flex justify-between items-center w-full mt-4'>
                        <h3 className='sm:text-sm xl:text-base'>Price: {price}$</h3>
                        <button className="btn btn-sm" onClick={() => handlePlayerSelection(card)}>Choose Player</button>
                    </div>
                </div>
            </div>
            </div>


        </div>
    );
};

Card.propTypes ={
  card : PropTypes.object.isRequired,
  handlePlayerSelection: PropTypes.func.isRequired
}

export default Card;