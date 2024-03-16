
const SingleRecipe = ({ cookItem}) => {
    const { recipe_name, preparing_time, calories } = cookItem;
    return (
        <div className="flex gap-2 justify-around items-center rounded bg-gray-100 p-5">
            <p className="text-base ">{recipe_name}</p>
            <p className="text-base ">{preparing_time}</p>
            <p className="text-base ">{calories}</p>
            <button className="btn rounded-3xl px-4 border-none bg-green-400 text-base font-medium">Preparing</button>

        </div>
    );
};

export default SingleRecipe;