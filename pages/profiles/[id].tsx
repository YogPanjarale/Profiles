import { useRouter } from "next/router";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { IProfile } from "@type/types";
export default function Car({ data }: { data: IProfile }) {
  const router = useRouter();
  console.log(data);
  const { id } = router.query;
  
  return (
    <div className="bg-red-100">
        <pre>{JSON.stringify(data)}</pre>
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
