import { NextPage } from "next";
import Image from "next/image";
import styles from './default.module.scss'

interface Props{
    children:any,
    title:any,
    description:any,
    data:any
}

export const Default : NextPage<Props> = ({children, data}) => {

    console.log({data})

    return(
        <div className={styles.default}>
            <div className={styles.image}>
                <img src={data.image}/>
            </div>
            <div className={styles.meta}>
                <span>{data.readingTime} - </span><span>0 Views</span>
            </div>
            <div className={styles.content}>
                <h1>{data.title}</h1>
                {children}
            </div>
        </div>
    )
}

