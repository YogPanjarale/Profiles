import * as React from "react";
import {ILink} from '@type/types'
import 'tailwindcss/tailwind.css'

export const  MyLink: React.FC<ILink> = ({title,url})=> {
    return (
        <div className="max-w-10 p-2 mx-auto flex flex-col shadow-lg space-y-4 bg-gray-50 rounded-xl text-center max-w-prose">
            {/* <h3>{title}</h3> */}
            <a href={url}>{title}</a>
        </div>
    )
}