
const RecipesUI = ({ recipe }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div id="post-container" className="w-full lg:w-7/12 flex flex-col gap-10">
                <div className="card w-96 bg-white border border-gray-200">
                    <figure className="p-6">
                        <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="px-6 pb-6">
                        <h2 className="card-title text-xl font-semibold pb-4">{recipe_name}</h2>
                        <p className='fira-sans text-base text-gray-400 pb-4'>{short_description}</p>
                        <hr />
                        <div className="py-4">
                            <h4 className='text-lg font-medium mb-4'>Ingredients: {ingredients.length}</h4>
                            <ul className="list-inside fira-sans text-lg text-gray-400 pl-2">
                                {
                                    ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className="flex gap-4 py-5">
                            <h4 className='fira-sans text-base text-gray-400'>{preparing_time} minutes</h4>
                            <h4 className='fira-sans text-base text-gray-400'>{calories} calories</h4>
                        </div>
                        <button className="btn rounded-3xl px-6 border-none bg-green-400 text-lg font-medium"><a
                        >Explore Now</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesUI;