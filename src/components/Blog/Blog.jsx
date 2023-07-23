import React from "react"

import BlogCard from "./BlogCard"
import "./blog.css"
import Back from "../Common/back/Back"

const Blog = () => {
  return (
    <>
     <Back title='Blog Posts'/>
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog