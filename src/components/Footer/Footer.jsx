import Newsletter from "../Newsletter/Newsletter";

import img from '../../../public/images/logo-footer.png'

const Footer = () => {
    return (

        <footer className="bg-[#06091A] mt-72">

            <div className='mt-4 w-11/12 md:w-10/12 mx-auto'>

                <div className="-translate-y-1/2">
                    <Newsletter></Newsletter>
                </div>

                <div className="-translate-y-1/3">
                    <div className="flex justify-center items-center my-8">
                        <img src={img} alt="" />
                    
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-start text-center lg:text-left py-8 text-white">

                        {/* column-1 ONE */}
                        <div className="flex flex-col justify-center items-center lg:items-start w-1/3">
                            <h1 className="font-semibold text-lg mb-4">About Us</h1>
                            <p className="w-4/6 text-white/[.6]">We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>

                        {/* column-2 TWO */}
                        <div className="flex justify-start items-start flex-col text-left my-12 lg:my-0 mr-52">
                            <div>
                                <h3 className="font-bold text-xl mb-8">Quick Links</h3>
                                <ul className="text-base text-white/[.6] lg:justify-items-start text-center lg:text-left list-disc ml-4">
                                    <li><a href="#">Home</a></li>
                                    <li className="my-2"><a href="#">Services</a></li>
                                    <li><a href="#">About</a></li>
                                    <li className="my-2"><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* column-3 THREE */}
                        <form>
                            <h6 className="footer-title font-semibold text-white opacity-100">Subscribe</h6>
                            <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white/[.6] mb-4">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                                <button className="btn join-item bg-gradient-to-r from-rose-400 to-amber-200">Subscribe</button>
                            </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
            
            <div className="-translate-y-24">
                <hr />
            </div>
            <div className="-translate-y-12">
                <p className="text-center text-white/[.6]">@2024 Your Company All Rights Reserved.</p>
            </div>



            
        </footer>

        
        

    );
};

export default Footer;