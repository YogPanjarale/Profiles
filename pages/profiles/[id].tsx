import { useRouter } from "next/router";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { IProfile } from "@type/types";
// import {MyLink} from '@components/link'
import { MyLink } from "../../components/link";
import { Rights } from "../../components/rights";
export default function Id({ data }: { data: IProfile }) {
  const router = useRouter();
  // console.log(data);
  const { id } = router.query;
  const {
    title,
    links,
    image = "https://img.icons8.com/pastel-glyph/2x/person-male--v3.png",
  } = data;

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-10 flex-col h-screen align-items flex">
      <Head>
        <title>{title} | Links</title>
        <link rel="icon" href={image} />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="text-center py-2 space-y-2">
        <img
          src={image}
          className="w-28 h-28 self-center rounded-full mx-auto my-auto border-white border-2"
        />
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

// export async function getServerSideProps({ params }) {
export async function getInitialProps({ params }) {
  // const req = await fetch(`/profiles.json`);
  const req = await fetch(
    `https://raw.githubusercontent.com/YogPanjarale/Profiles/main/public/profiles.json`
  );
  // console.log(params,req)
  let result = await req.json();
  if (params.id.toString() in result) {
    result = result[params.id.toString()];
  } else {
    result = result["none"];
  }
  return {
    props: { data: result },
  };
}
