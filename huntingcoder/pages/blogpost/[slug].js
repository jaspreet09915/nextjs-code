import React from 'react'
import { useRouter } from 'next/router' 
import styles from '../../styles/BlogPost.module.css'
import react , {useEffect,useState} from 'react'
// dynamic route in nextjs
// step 1: find the file corresponding to the slug
// step2 : populate them inside the page
const slug = () => {
  const [blog, setBlog] = useState()
  const router = useRouter();
    useEffect(() => {
      if(!router.isReady)return;
      const {slug} = router.query;
      fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a)=>{
        return a.json();
      })
      .then((parsed)=>{
        setBlog(parsed);
      })
    }, [router.isReady])
    

  return (
    <div className={styles.container}>
     <main className={styles.main}>
        <div>
          <h1> {blog && blog.title} </h1>
          <hr />
          <h3>{blog && blog.content}</h3>
      </div>
    </main>
  </div>
  )
};

export default slug