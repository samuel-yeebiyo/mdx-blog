import { NextPage } from "next";
import {serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import {useEffect, useState} from 'react'
import styles from './default.module.scss'

interface Props{
    children:any,
    title:any,
    description:any,
    data:any
}

export const Default : NextPage<Props> = ({children, data, title,description }) => {

    console.log({data, title, description})

    return(
        <div className={styles.default}>
           {children}
        </div>
    )
}

