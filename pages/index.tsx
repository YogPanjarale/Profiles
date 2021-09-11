import Head from "next/head";
import { MyForm } from '../components/form'
import ID from './profiles/[id]'

export default function Page({data}) {
    return <Id data={data}></Id>
    // return (
    //     <div className="pt-12">
    //         <Head>
    //             <title>Login Form</title>
    //             <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    //             <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    //             <link rel="icon" href="/favicon.ico" />
    //         </Head>
    //         <MyForm onSubmit={(value)=>{ console.log(value)}}/>
    //     </div>
    // )
}
export async function getServerSideProps({ params }:{params:{id:string}}) {
    let result =await  getUser('yog')
    return {
      props: { data: result },
    };
  }
  