import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'

const articlesPath = path.join(process.cwd(), 'content')

export async function getSlugs() {
  const paths:any[] = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export async function getArticleFromSlug(slug:string) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  const { content, data } = matter(source)
  const frontMatter = {
    data:{
      readingTime: readingTime(content).text,
      ...data,
    }
  }
  console.log(frontMatter)
  
  const options = {
    theme:"one-dark-pro",
    onVisitHighlightedLine(node:any) {
      node.properties.className.push("line--highlighted")
    },
  }
  
  const mdxSource = await serialize(content, { parseFrontmatter: true, scope:frontMatter, mdxOptions:{rehypePlugins: [[rehypePrettyCode,options]]}})

  return {
      source:mdxSource,
      frontMatter:frontMatter.data 
  }

}

export async function getAllArticles() {
    const articles = fs.readdirSync(path.join(process.cwd(), 'content'))

    return articles.reduce((allArticles:any, articleSlug:any) => {
      // get parsed data from mdx files in the "articles" dir
      const source = fs.readFileSync(
        path.join(process.cwd(), 'content', articleSlug),
        'utf-8'
      )
      const { data } = matter(source)

      return [
        {
          ...data,
          slug: articleSlug.replace('.mdx', ''),
          readingTime: readingTime(source).text,
        },
        ...allArticles,
      ]
    }, [])
}