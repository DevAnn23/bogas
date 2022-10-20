import * as React from "react"
import Layout from '../containers/Layout/Layout';
interface IPostProps {
  [key: string]: any
}

const BlogPostTemplate: React.FC<IPostProps> = ({ pageContext }) => {
  const text = pageContext.content ? pageContext.content : "";
  return (
   
    <section className="block-hero-basic center">
            {text} 
    </section>

  )
}

export default BlogPostTemplate