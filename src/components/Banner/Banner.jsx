
const Banner = () => {
    return (
        <div className="w-full md:w-3/4 lg:w-8/12 mx-auto pb-12 px-4 lg:px-0 mb-14">
            <div className="slider bg-img rounded-3xl h-[400px] lg:h-[600px]  flex flex-col items-center justify-center">
                {/* banner text container  */}
                <div className="text-center text-white ">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-7 px-1 lg:px-60">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-lg mb-10 px-1 lg:px-80">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="flex gap-5 items-center justify-center">
                        <button className="btn rounded-3xl px-8 border-none bg-green-400 text-xl font-semibold"><a
                            >Explore Now</a></button>
                        <button className="btn btn-outline rounded-3xl px-8 border text-white border-white text-xl font-semibold">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;