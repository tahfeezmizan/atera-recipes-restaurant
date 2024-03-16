
const SingleRecipe = ({ cookItem }) => {
    const { recipe_name, preparing_time, calories } = cookItem;
    return (
        <div className="flex gap-2 justify-around bg-gray-200 p-5">
            <p className="text-base ">{recipe_name}</p>
            <p className="text-base ">{preparing_time}</p>
            <p className="text-base ">{calories}</p>
        </div>
    );
};

export default SingleRecipe;