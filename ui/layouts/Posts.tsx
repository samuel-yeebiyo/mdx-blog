import { NextPage } from "next";
import {serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import {useEffect, useState} from 'react'

interface Props{
    children:any,
}

export const Post : NextPage<Props> = ({children}) => {

    return(
        <div className={"SDSD"}>
            <p>This is a layout for the blog</p>
           {children}
        </div>
    )
}

