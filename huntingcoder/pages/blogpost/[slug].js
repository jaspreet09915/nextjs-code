import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import react, { useEffect, useState } from "react";
// dynamic route in nextjs
// step 1: find the file corresponding to the slug
// step2 : populate them inside the page
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

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
  );
};

 

export async function getServerSideProps(context) {
  // console.log(context.query)
  // const router = useRouter();
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  let myBlog = await data.json()
  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}
export default slug;
