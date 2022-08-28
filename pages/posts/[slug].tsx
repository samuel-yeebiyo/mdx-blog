import { NextPage } from "next";
import {getArticleFromSlug} from '../../lib/mdx'
import {MDXRemote} from 'next-mdx-remote'

interface Props{
    children:any,
    meta:{
        author:string
    },
    toc:string[],
    source?:string,
    post:any
}

const Posts = ({children, meta, toc, source, post}:Props) => {
    return(
        <div>
            <p>{meta?.author}</p>
            <p>This is my post but with a layout</p>
            {children}
            <div>{toc?.map((item)=>(
                <p>{item}</p>
            ))}</div>
            <p>{post.content}</p>
        </div>
    )
}

export default Posts

export async function getStaticPaths(){

    return{
        paths: [{ params: { slug: 'hello' }}],
        fallback:false
    }

}

export async function getStaticProps({params}:any) {
    // MDX text - can be from a local file, database, anywhere
    const {content, frontmatter} = await getArticleFromSlug(params.slug)
    

    return { 
        props: {
            post:{
                content,
            }
    }}
}

