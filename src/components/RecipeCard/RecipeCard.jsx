import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleRecipeCard from './SingleRecipeCard'


function RecipeCard({ name }) {
    const recipeItems = useLoaderData()

    return (
        <div className='my-20'>
            <h2 className="text-3xl font-medium text-center text-primaryColor mb-10 l">Top 3 Recpies of {name}</h2>

         <div className='grid lg:grid-cols-3 gap-4 mx-5 lg:mx-12'>
            {
                recipeItems.map(singleItem=><SingleRecipeCard key={singleItem.idMeal} singleItem={singleItem} />)
            }
         </div>

        </div>
    )
}

export default RecipeCard