import { NextPage } from "next";
import {ReactNode} from 'react'

interface Props{
    children:any,
    meta:{
        author:string
    },
    toc:string[],
    source?:string
}

export const Posts : NextPage<Props> = ({children, meta, toc, source}) => {
    return(
        <div>
            <p>{meta.author}</p>
            <p>This is my post but with a layout</p>
            {children}
            <div>{toc.map((item)=>(
                <p>{item}</p>
            ))}</div>
            <p>{source}</p>
        </div>
    )
}

