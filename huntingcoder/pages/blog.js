import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import react , {useEffect,useState} from 'react'
import * as fs from 'fs';


// step1 : collecting all the files from blogdata directory
// step2 : Iterate through them and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  console.log(props)
  return (
    <div className={styles.container}>
       <main className={styles.main}>
         {/* blog is the name of blog api in the api folder */}
         {blogs.map((blogitem) => {
        return <div className={styles.blogItems} key={blogitem.slug}>
          <Link href={`/blogpost/${blogitem.slug}`}>
            <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
          <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
        </div>
      })}
         {/* {blogs.map((blogItems)=>{
           console.log(blogItems);
           return<div className={styles.blogItems}  key={blogItems.title}>
           <Link href={`/blogpost/${blogItems.slug}`}>
             <h3  >{blogItems.title}</h3></Link>
             <p   >{blogIte ms.content.substr(0,400)}</p>
           </div>
         })} */}
        </main>
      </div>
  )
}
// server side rendering 
// export async function getServerSideProps(context) {
//    let data = await fetch('http://localhost:3000/api/blogs')
//    let allBlogs = await data.json();
//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

// static rendering
export async function getStaticProps(context) { 
  let data = await fs.promises.readdir("blogdata");
  let myfile; 
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8') 
        allBlogs.push(JSON.parse(myfile))
    }

  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog