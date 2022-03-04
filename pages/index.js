// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Link from "next/link";

import Link from "next/link";
import UserList from "./userslist";

// import {useRouter} from "next/router";
export default function Home() {
  // const router =useRouter();
  // const orderHander = () =>{
  //  router.push("/product");
  // }
  // return ( <>
  //   <Link href="/product">
  //   <a>product</a>
  //   </Link>
  //   <br/>
  //   <Link href="/blog">
  //   <a>blog</a>
  //   </Link>
  //   <br/>
  //   <button onClick={orderHander}>Place Order</button>
  //   </>
  // )
  return <>
  <h1>NextJS Prerendering</h1>
  <Link href="./userslist">
  <a>userslist</a>
  </Link>
  <br/>
  <Link href="/posts">posts</Link>
  {/* <UserList/> */}
  </>
};

