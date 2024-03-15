import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Cooking from './components/Recipes/Cooking'
import Recipes from './components/Recipes/Recipes'
import RecipesTitle from './components/Recipes/RecipesTitle'
import RecipesUI from './components/Recipes/RecipesUI'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipesTitle></RecipesTitle>

      <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0">
        <div className="">
          <Recipes></Recipes>
          
        </div>

      </div>

      {/* <RecipesUI></RecipesUI> */}

    </>
  )
}

export default App
