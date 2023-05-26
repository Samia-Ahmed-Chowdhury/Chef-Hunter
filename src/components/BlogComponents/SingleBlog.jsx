import React from 'react'

function SingleBlog({blog}) {
  return (
    <>
    <div tabIndex="0" className='mb-6 collapse collapse-open collapse-arrow  bg-base-100 rounded-box'>
        <div className="collapse-title text-xl md:text-2xl font-medium bg-accordion_header">
            {blog.ques}
        </div>
        <div className="collapse-content bg-accordion_body pt-5">
            <div className='mt-2 text-lg md:text-xl'>
            {blog.ans} 
             </div>
        </div>
    </div>
</>
  )
}

export default SingleBlog