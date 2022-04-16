import React from 'react'
import { useRouter } from 'next/router' 
import styles from '../../styles/BlogPost.module.css'
// dynamic route in nextjs
// step 1: find the file corresponding to the slug
// step2 : populate them inside the page
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className={styles.container}>
     <main className={styles.main}>
        <div>
          <h1>Title of the page {slug}</h1>
          <hr />
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto. Consequatur impedit, doloribus placeat quia ad consequuntur quo, sit commodi quaerat porro pariatur nihil! Odit ullam ratione quae consequatur, sunt facilis accusantium doloribus, libero modi sapiente voluptates, ipsa facere sint nobis suscipit id unde obcaecati! Vitae vero ex ullam similique autem. Cum, expedita! Ipsum?</h3>
      </div>
    </main>
  </div>
  )
};

export default slug