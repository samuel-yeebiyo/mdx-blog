import styles from './toc.module.scss'

export const TOC = ({source}:any) => {

    const getTOC = (children:any[]):any[] => {
        const headings = children.filter((item:any)=> item.type.name =='h2')
        const table = headings.map((item:any)=>{
            return {
                name:item.props.children,
                tag:item.props.children.replace(/ /g, "-").toLowerCase()
            }
        })
        return table
    }

    const headings = getTOC(source)
    
    return(
        <div className={styles.toc}>
            <h2>Table of Content</h2>
            {headings.map((item)=>(
                <p>
                    <a href={`#${item.tag}`}>{item.name}</a>
                </p>
            ))}
        </div>
    )
}