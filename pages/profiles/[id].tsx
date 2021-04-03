import { useRouter } from "next/router";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { IProfile } from "@type/types";
// import {MyLink} from '@components/link'
import { MyLink } from "../../components/link";
export default function Id({ data }: { data: IProfile }) {
  const router = useRouter();
  // console.log(data);
  const { id } = router.query;
  const { title, links,image="https://avatars.githubusercontent.com/u/64301340" } = data;

  return (
    <div className="bg-yellow-100 py-10 flex-col h-screen align-items flex" >
      <Head>
        <title>{title} | Links</title>
        <link rel="icon" href={image} />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
      </Head>
      <div className="text-center py-2 space-y-2">
      <img src={image} className="w-28 h-28 rounded-full mx-auto my-auto border-white border-2"/>
        <h1 className="font-medium  text-xl ">@{title}</h1>
      </div>
      <div className="space-y-5 m-10 align-middle ">
      {links.map((d, j) => (
        <MyLink key={j} {...d} />
      ))}
      </div>
      {/* <div className="h-screen"></div> */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/profiles.json`);
  // console.log(params,req)
  let result = await req.json();
  result = result[params.id.toString()];
  return {
    props: { data: result },
  };
}
