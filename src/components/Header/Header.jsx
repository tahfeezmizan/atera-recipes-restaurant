
const Header = () => {
    return (
        <div>
            <div className="navbar w-full md:w-8/12 mx-auto py-12 px-4 lg:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabindex="0"
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-lg font-medium text-secondaryColor opacity-70">Home</li>
                            <li className="text-lg font-medium text-secondaryColor opacity-70">Recipes</li>
                            <li className="text-lg font-medium text-secondaryColor opacity-70">About</li>
                            <li className="text-lg font-medium text-secondaryColor opacity-70">Search</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Atera Recipe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <li className="text-lg font-medium text-secondaryColor opacity-70 hover:bg-transparent">Home
                        </li>
                        <li className="text-lg font-medium text-secondaryColor opacity-70 hover:bg-transparent">Recipes
                        </li>
                        <li className="text-lg font-medium text-secondaryColor opacity-70 hover:bg-transparent">About
                        </li>
                        <li className="text-lg font-medium text-secondaryColor opacity-70 hover:bg-transparent">Search
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input rounded-3xl bg-gray-100 border-none w-24 md:w-auto" />
                    </div> */}


                    <div className="">
                        <input type="text" placeholder="Search" className=" input rounded-3xl bg-gray-100 w-24 md:w-auto"/>
                        <img src="../../assets/Frame 5.png" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;