import React from 'react'
import ChefCard from '../ChefCard/ChefCard'
import { useLoaderData } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'

function ChefContainer() {
    const chefData = useLoaderData()
    const { state } = useNavigation();
  
    if (state === 'loading') {
      return (
        <div className='text-center flex justify-center my-16'>
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )
    }

    return (
        <div className='my-5 lg:mx-16 mx-5'>
            <h2 className="text-4xl md:text-5xl font-semibold text-center text-primaryColor mb-10">World Class Chefs</h2>
            <p className='font-normal text-lg text-[#757575] my-6 md:w-1/2 mx-auto text-center'>Must Say, Being a chef never seems like a job, it becomes a true passion .. CheckOut our World Top Class Chefs</p>
            <div className='grid lg:grid-cols-3 gap-3 mt-2'>
                {
                    chefData.map((singleChefData) => <ChefCard key={singleChefData.id} singleChefData={singleChefData}></ChefCard>)
                }
            </div>
        </div>
    )
}

export default ChefContainer