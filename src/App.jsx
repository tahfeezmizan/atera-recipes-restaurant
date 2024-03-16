import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Cooking from './components/Recipes/Cooking'
import Recipes from './components/Recipes/Recipes'
import RecipesTitle from './components/Recipes/RecipesTitle'
import RecipesUI from './components/Recipes/RecipesUI'


function App() {

  const [cookItem, setCookItem] = useState([])

  const handleAddToCook = recipes => {
    const newRecipes = [...cookItem, recipes];
    setCookItem(newRecipes)
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipesTitle></RecipesTitle>

      <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0">
        {/* w-full lg:w-7/12 */}
        <div className="flex gap-10 justify-between border border-red-700">
          <Recipes handleAddToCook={handleAddToCook}></Recipes>
          <Cooking cookItem={cookItem}></Cooking>
        </div>
      </div>

      {/* <RecipesUI></RecipesUI> */}

    </>
  )
}

export default App
