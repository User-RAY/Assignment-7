import { RiDeleteBinLine } from "react-icons/ri";

import PropTypes from 'prop-types';


const Select = ({playerSelect, handleDelete}) => {

    const { img_url, name, playertype, price} = playerSelect;

    return (
        <div>

        <div className="navbar bg-base-100 justify-between border my-4 rounded-xl">
            <div className="navbar-start">

                <img src={img_url} alt="logo" className='object-cover w-16 h-16 rounded-xl' />
                <div className='flex flex-col justify-center items-start ml-4'>
                    <h1 className="font-semibold text-xl">{name}</h1>
                    <h2 className="text-black/[.6]">{playertype}</h2>
                    <h2 className="text-sm text-black/[.6]">{`${price}$`}</h2>
                </div>
            </div>
            <div className="navbar-end w-auto">
                <a className="btn bg-white border-none shadow-none text-red-600" onClick={()=>handleDelete(playerSelect)}> <RiDeleteBinLine /></a>
            </div>
        </div>
            
        </div>
    );
};

Select.propTypes ={
    playerSelect: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default Select;