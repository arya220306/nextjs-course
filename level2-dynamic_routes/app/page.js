import Image from "next/image";
import { resolve } from "styled-jsx/css";

export default async function Home() {

await new Promise((resolve)=>setTimeout(resolve, 3000));


  return (
   <div>Home page</div>
  );
}
