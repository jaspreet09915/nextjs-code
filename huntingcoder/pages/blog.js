import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const blog = () => {
  return (
    // step1 : collecting all the files from blogdata directory
    // step2 : Iterate through them and display them
    <div className={styles.container}>
       <main className={styles.main}>
          <div className={styles.blogItems}>
          <Link href={"/blogpost/learn-javascript"}>
            <h3>How to learn javascript in 2022</h3></Link>
            <p>javascript is the language used to design the logic for the web</p>
          </div>
          <div className={styles.blogItems}>
            <h3>How to learn javascript in 2022</h3>
            <p>javascript is the language used to design the logic for the web</p>
          </div>
          <div className= {styles.blogItems}>
            <h3>How to learn javascript in 2022</h3>
            <p>javascript is the language used to design the logic for the web</p>
          </div>
        </main>
      </div>
  )
}

export default blog