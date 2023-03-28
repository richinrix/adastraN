import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getProducts, getProductIds } from "@/services";

export default function prod() {
  return <div></div>;
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
//   const paths = getProductIds();
//   console.log(paths);
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   const products = getProducts();
// }
export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  // const res = await fetch('https://api-ap-south-1.hygraph.com/v2/clff1o5m61jhz01te56nl9ub4/master')
  const res = getProducts();
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
