import SingleRecipe from "./SingleRecipe";

const Cooking = ({ cookItem }) => {
    return (
        <div className="">
            <div className="grid grid-cols-1 gap-10">
                <div className="w-96 bg-white border border-gray-200 py-10 rounded-3xl text-center">
                    <h2 className="text-2xl font-semibold pb-4 border-b border-black mb-6 mx-10">Want to cook: {cookItem.length}</h2>
                    {
                       cookItem.map((Cooking) => <SingleRecipe cookItem={Cooking} key={cookItem.recipe_id}></SingleRecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cooking;