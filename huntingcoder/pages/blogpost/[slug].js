import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import react, { useEffect, useState } from "react";
import * as fs from 'fs';

 
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(c) {
    return {__html: c};
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h1> {blog && blog.title} </h1>
          <hr />
           {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>} 
        </div>
      </main>
    </div>
  );
};


 
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
  const { slug } = context.params;

  let myBlog =  await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');

  return {
    props: { myBlog : JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}
export default Slug;
