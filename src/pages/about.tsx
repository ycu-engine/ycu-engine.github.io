import { useI18n } from '@/components/context/i18n'
import type { AboutPageQuery } from '@gql'
import { graphql, Link, navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
    aboutJa: file(
      sourceInstanceName: { eq: "meta" }
      name: { eq: "about.ja" }
    ) {
      childMdx {
        body
        excerpt
      }
    }

    aboutEn: file(
      sourceInstanceName: { eq: "meta" }
      name: { eq: "about.en" }
    ) {
      childMdx {
        body
        excerpt
      }
    }
  }
`

interface AboutPageProps {
  data: AboutPageQuery
}

const AboutPage = ({ data }: AboutPageProps): JSX.Element => {
  const { selectedLanguage, setLanguage } = useI18n()
  const mdx = React.useMemo(() => {
    if (selectedLanguage === 'en') {
      if (data.aboutEn?.childMdx) {
        return data.aboutEn.childMdx
      }
    }
    return data.aboutJa?.childMdx || undefined
  }, [selectedLanguage, data])

  if (!mdx) {
    navigate('/404', { replace: true })
    return <div>遷移中...</div>
  }

  return (
    <>
      <Helmet>
        <title>{`About | ${data.site?.siteMetadata?.title}`}</title>
      </Helmet>
      <div>
        <button onClick={() => setLanguage('ja')}>ja</button>
        <button onClick={() => setLanguage('en')}>en</button>
      </div>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <Link to="/">Go to Home</Link>
    </>
  )
}

export default AboutPage
