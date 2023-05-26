import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SingleRecipeCard({ singleItem }) {
    const [fav, setFav] = useState(false)

    const { strMeal, strMealThumb, strInstructions, rating } = singleItem
    // console.log(singleItem)

    //filter the object to get ingredient keys from object as they starts With strIngredient like strIngredient1,strIngredient2 etc..
    const ingredientKeys = Object.keys(singleItem).filter(k => k.startsWith('strIngredient'))
    const ingredientArr = []
    //loop through the array and put the value of each ingredient into an array
    for (const i of ingredientKeys) {
        const ingredientValue = singleItem[i]
        ingredientArr.push(ingredientValue)
    }

    //filter the object to get measure keys from object as they starts With strMeasure like strMeasure1,strMeasure2 etc..
    const measureKeys = Object.keys(singleItem).filter(k => k.startsWith('strMeasure'))
    const measureArr = []
    //loop through the array and put the value of each ingredient into an array
    for (const i of measureKeys) {
        const measureValue = singleItem[i]
        measureArr.push(measureValue)
    }

    const addToFav = () => {
        toast("Added to Fav!!");
        setFav(true)
    }

    return (
        <div className="card bg-base-100 shadow-xl rounded-none mb-5">
            <figure ><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body p-0 md:p-5 mt-5">
                <div className='flex justify-between'>
                    <h2 className="card-title">{strMeal}
                    </h2>

                    <div>
                        <button onClick={addToFav} disabled={fav}>
                            <FaHeart className={`${fav ? 'text-red-600' : ''}`} />
                        </button>
                        <ToastContainer />
                    </div>
                </div>

                <p className='font-bold mt-2'>
                    <Rating className='text-primaryColor'
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalfAlt />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                        readonly
                    /> {rating}
                </p>

                <div className='bg-base-100 rounded-box my-2 '>
                    <p className=" text-lg font-medium bg-accordion_header p-4">
                        Ingredient List :
                    </p>
                    <div className=" bg-accordion_body flex py-4 md:p-4">
                        {/* loop through the arrays to display side by side ingredient and measure  */}
                        <span>  {
                            ingredientArr.map((ele, index) => <li key={index}>{ele} -</li>
                            )
                        }</span>
                        <span>  {
                            measureArr.map((ele, index) => <li key={index} className='list-none'>- {ele}</li>)
                        }</span>

                    </div>
                </div>
                <div className='bg-base-100 rounded-box my-2'>
                    <p className=" text-lg font-medium bg-accordion_header p-4">
                        Cooking Method :
                    </p>
                    <div className=" bg-accordion_body flex p-4">
                        {strInstructions}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default SingleRecipeCard