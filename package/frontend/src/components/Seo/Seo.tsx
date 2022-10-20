import * as React from "react"
import { Helmet } from "react-helmet"
interface IProps {
  title: string
  description: string
  twitterDescription: string
  twitterTitle: string
}
const Seo: React.FC<IProps> = ({
  title,
  description,
  twitterDescription,
  twitterTitle,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: twitterTitle || title,
        },
        {
          name: `twitter:description`,
          content: twitterDescription || description,
        },
      ].concat([])}
    />
  )
}

export default Seo
