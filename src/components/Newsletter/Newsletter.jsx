

const Newsletter = () => {
    return (
        <div className="bg-white/[.15] border-white border-2 p-4 rounded-2xl">

            <div className="bg-white rounded-2xl">
                <div className="bg-[url('../images/bg-shadow.png')] bg-cover bg-no-repeat rounded-2xl">
                    <div className="flex flex-col justify-center items-center p-24">
                        <h1 className="font-bold text-4xl">Subscribe to our Newsletter</h1>
                        <h2 className="font-medium text-xl text-black/[.7] my-4">Get the latest updates and news right in your inbox!</h2>
                        <form className="w-3/6 text-center">
                            <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered mr-4 w-2/3" />
                            <button className="btn py-4 px-8 bg-gradient-to-r from-rose-400 to-amber-200">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Newsletter;