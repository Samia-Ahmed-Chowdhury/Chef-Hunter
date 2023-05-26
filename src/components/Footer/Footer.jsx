import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import './Footer.css'
import { FaPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className='text-gray-300 lg:px-16 py-10 md:py-20 mt-[100px] px-6 grid lg:gap-[100px] md:grid-cols-[.4fr,1fr]'>
      <div>
        <Link>
          <img className='object-fill mb-4' src={logo} alt="logo" />
        </Link>
        <p>Nothing brings people together like Good Food...
          Food is any substance consumed to provide nutritional support for an organism..
        </p>
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='grid grid-cols-2 lg:grid-cols-[.5fr,.5fr,1fr] lg:gap-[100px] mt-12 lg:mt-0 '>
          <ul>
            <h4>Product</h4>
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
          <ul>
            <h4>Support</h4>
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className='mt-8 lg:mt-0'>
          <ul>
            <h6 className='text-2xl font-medium text-gray-300'>Subscribe Newsroom</h6>
            <form className='my-5 flex'>
              <input type="email" name="email" placeholder="Email Address" />
              <button className="btn border-0 rounded-l-[0px] text-center bg-primaryColor" type="submit">
                <FaPaperPlane className='text-2xl text-white' />
              </button>
            </form>
          </ul>
        </div>
      </div>
    </footer>

  )
}

export default Footer