import { NextPage } from "next";
import {getArticleFromSlug, getSlugs} from '../../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import {components} from '../../ui/mdxComponents'
import styles from 'styles/post.module.scss'

interface Props{
    source?:any,
    frontMatter:any
}

const Posts = ({source,frontMatter}:Props) => {

    //add the head component for the SEO using

    return(
        <div className={styles.wrapper}>
            <MDXRemote {...source} components={components} frontmatter={frontMatter}/>
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

