
const Cooking = () => {
    return (
        <div>
            <div className="w-full">
                <div className="w-full bg-gray-100 border p-10 rounded-3xl">
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
    );
};

export default Cooking;