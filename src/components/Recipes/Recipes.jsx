
import { useEffect } from 'react';
import { useState } from 'react';
import RecipesUI from './RecipesUI';

const Recipes = ({handleAddToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {
                recipes.map(reci => <RecipesUI key={reci.recipe_id} recipe={reci} handleAddToCook={handleAddToCook}></RecipesUI>)
            }
        </div>
    );
};

export default Recipes;
