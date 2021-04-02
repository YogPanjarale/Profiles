import Head from "next/head";
import { MyForm } from '../components/form'
export default function Page() {
    return (
        <div>
            <Head>
                <title>Login Form</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyForm onSubmit={(value)=>{ console.log(value)}}/>
        </div>
    )
}
