import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import react , {useEffect,useState} from 'react'

// step1 : collecting all the files from blogdata directory
// step2 : Iterate through them and display them
const blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    console.log("useEffect is running!");
    fetch('http://localhost:3000/api/blogs').then((a)=>{
    return a.json();
    })
    .then((parsed)=>{
      console.log(parsed);
      setBlogs(parsed);
    })
  },[])
  return (
    <div className={styles.container}>
       <main className={styles.main}>
         {/* blog is the name of blog api in the api folder */}
         {blogs.map((blogItems)=>{
           return<div className={styles.blogItems}  key={blogItems.title}>
           <Link href={`/blogpost/${blogItems.slug}`}>
             <h3  >{blogItems.title}</h3></Link>
             <p   >{blogItems.content.substr(0,400)}</p>
           </div>
         })}
        </main>
      </div>
  )
}

export default blog