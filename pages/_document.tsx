import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document{
    render(){
        return (
            <Html>
                <Head lang='en'></Head>
                <body>
                    <Main/>
                </body>
                <NextScript/>
            </Html>
        )
    }
}