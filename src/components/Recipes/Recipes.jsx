
import { useEffect } from 'react';
import { useState } from 'react';
import RecipesUI from './RecipesUI';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className=''>
            {
                recipes.map(reci => <RecipesUI key={reci.recipe_id} recipe={reci}></RecipesUI>)
            }
        </div>
    );
};

export default Recipes;
