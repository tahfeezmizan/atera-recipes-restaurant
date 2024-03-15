
const Recipes = () => {
    return (
        <div className='py-14'>
            <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-semibold mb-6">Our Recipes</h2>
                    <p className="text-lg px-8 lg:px-40 xl:px-72 text-black text-opacity-60 ">share diverse perspectives, and foster a sense of community through open dialogue on various topics of interest, Join the discussion.</p>
                </div>


                {/* <!-- post container --> */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* <!-- dynamic data load container  --> */}
                    <div id="post-container" className="w-full lg:w-7/12 flex flex-col gap-10">

                        <div className="card w-96 bg-white border border-gray-200">
                            <figure className="p-6">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="px-6 pb-6">
                                <h2 className="card-title text-xl font-semibold pb-4">Spaghetti Bolognese</h2>
                                <p className='fira-sans text-base text-gray-400 pb-4'>Classic Italian pasta dish with savory meat sauce.</p>
                                <hr />
                                <div className="py-4">
                                    <h4 className='text-lg font-medium mb-4'>Ingredients: 6</h4>
                                    <ul className="list-inside fira-sans text-lg text-gray-400 pl-2">
                                        <li>500g ground beef</li>
                                        <li>onion, chopped</li>
                                        <li>cloves garlic, minced</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="flex gap-4 py-5">
                                    <h4 className='fira-sans text-base text-gray-400'>30 minutes</h4>
                                    <h4 className='fira-sans text-base text-gray-400'>600 calories</h4>
                                </div>
                                <button className="btn rounded-3xl px-6 border-none bg-green-400 text-lg font-medium"><a
                                >Explore Now</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12">
                        <div className="bg-gray-100 border p-10 rounded-3xl">
                            <div className="flex justify-between mb-4">
                                <h3 className="mulish primarycolor text-xl font-bold">Title</h3>
                                <div className="flex gap-3 justify-between">
                                    {/* <img className="w-7" src="images/read-icon.svg" alt=""> */}
                                    <p className="inter text-base font-medium text-black opacity-60">Mark as read
                                        (<span id="totalReadForum">0</span>)
                                    </p>
                                </div>
                            </div>

                            <div id="finished-read" className="space-y-5">
                                {/* <div className="flex gap-4 items-center bg-white rounded-2xl p-4"></div> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
