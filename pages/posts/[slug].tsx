import { NextPage } from "next";
import {getArticleFromSlug, getSlugs} from '../../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import {components} from '../../ui/mdxComponents'

interface Props{
    source?:any,
    frontMatter:any
}

const Posts = ({source,frontMatter}:Props) => {
    return(
        <div>
            <p>{frontMatter.title}</p>
            <MDXRemote {...source} components={components}/>
        </div>
    )
}

export default Posts

export async function getStaticPaths(){

    const slugs = await getSlugs()
    const paths = slugs.map((item)=>({
        params:{slug:item}
    }))
    return{
        paths: paths,
        fallback:false
    }
}

export async function getStaticProps({params}:any) {
    // MDX text - can be from a local file, database, anywhere
   const {source, frontMatter} = await getArticleFromSlug(params.slug)

    return { 
        props: { 
            source,
            frontMatter
        } 
    }
}

