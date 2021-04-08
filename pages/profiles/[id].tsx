import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image'
import "tailwindcss/tailwind.css";
import { IProfile } from "@type/types";
import { MyLink } from "@components/link";
import { Rights } from "@components/rights";
import {getUser} from '../api/[user]'
export default function Id({ data }: { data: IProfile }) {
  const router = useRouter();
  // console.log(data);
  const { id } = router.query;
  const {
    title,
    links,
    image = "/person.png",
  } = data;

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-10 flex-col h-screen align-items flex">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{title} | Links</title>
        <link rel="icon" href={image} />
        <meta name="title" content={ title  + "| Links"} />
        <meta
          name="description"
          content="Put all your links in one place and use just one link "/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title  + " | Links"} />
        <meta
          property="og:description"
          content="Put all your links in one place and use just one link "/>
        <meta property="og:image" content={image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={ title  + " | Links"} />
        <meta
          property="twitter:description"
          content="Put all your links in one place and use just one link "/>
        <meta property="twitter:image" content={image}></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="text-center py-2 space-y-2">
        <div className="w-28 h-28 self-center rounded-full mx-auto my-auto border-white border-2">
        <Image
          // className="w-28 h-28 self-center rounded-full mx-auto my-auto border-white border-2"
          className="rounded-full"
          src={image}
          width={112}
          height={112}
          alt={title}
        />
        </div>
        <h1 className="font-medium  text-xl ">@{title}</h1>
      </div>
      <div className="space-y-5 m-10 align-middle ">
        {links.map((d, j) => (
          <MyLink key={j} {...d} />
        ))}
      </div>
      <Rights />
    </div>
  );
}

export async function getServerSideProps({ params }:{params:{id:string}}) {
  // const req = await fetch(`/profiles.json`);
  // const req = await fetch(
  //   `https://raw.githubusercontent.com/YogPanjarale/Profiles/main/public/profiles.json`
  // );
  // // console.log(params,req)
  // let result = await req.json();
  // if (params.id.toString() in result) {
  //   result = result[params.id.toString()];
  // } else {
  //   result = result["none"];
  // }

  // const req:Response = await fetch(`https://localhost:3000/api/${params.id.toString()}`)
  // let result =req.json()
  let result =await  getUser(params.id.toString())
  return {
    props: { data: result },
  };
}
