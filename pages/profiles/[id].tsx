import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Car({ data }) {

    const router = useRouter()
    const { id } = router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>{data.color} {data.id}</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {id}
                </h1>

                <img src={data.image} width="300px" />

            </main>
        </div>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/profiles.json`);
    const result = await req.json()[params.id];

    return {
        props: { data: result},
    }
}
