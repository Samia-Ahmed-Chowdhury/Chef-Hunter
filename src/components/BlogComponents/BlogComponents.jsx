import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleBlog from './SingleBlog'
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function BlogComponents() {
  const blogsData = useLoaderData()
  // console.log(blogsData)
  return (
    <>
      <div className='flex justify-between items-center mx-5 lg:mx-16'>
        <h2 className='text-3xl font-semibold my-10 mx-auto'>FAQ Questions</h2>


        <Pdf targetRef={ref} filename="Food Hunter">
          {({ toPdf }) => <button onClick={toPdf}><FaDownload /></button>}
        </Pdf>
    </div>

      <div className='my-3 mx-5 lg:mx-16' ref={ref}>
        {
          blogsData.map(blog => <SingleBlog key={blog.id} blog={blog} />)
        }
      </div>
    </>
  )
}

export default BlogComponents