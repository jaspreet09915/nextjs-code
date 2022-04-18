import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import react, { useEffect, useState } from "react";
import * as fs from 'fs';

// dynamic route in nextjs
// step 1: find the file corresponding to the slug
// step2 : populate them inside the page
const Slug = (props) => {
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


// server side rendering
// export async function getServerSideProps(context) {
//   // console.log(context.query)
//   // const router = useRouter();
//   const { slug } = context.query;

//   let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
//   let myBlog = await data.json()
//   return {
//     props: { myBlog }, // will be passed to the page component as props
//   }
// }

// static rendering
export async function getStaticPaths() {
  return {
    // params is the name of file which indicate the path where the json file is exist 
    paths: [
      { params: { slug : "How-to-learn-flash" } },
      { params: { slug : "How-to-learn-javascript" } },
      { params: { slug : "How-to-learn-nextjs" } },
    ],
    fallback: true // false or 'blocking'
  };
}
 
export async function getStaticProps(context) {
  console.log(context)
  const { slug } = context.params;

  let myBlog =  await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');

  return {
    props: { myBlog : JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}
export default Slug;
