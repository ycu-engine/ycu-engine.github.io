import { SeoQuery } from '@gql'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet'

type SEOProps = {
  title: string
  description?: string
  lang?: string
  image?: string
  keywords?: (string | undefined | null)[] | undefined | null
}

export const SEO = ({
  title,
  image,
  lang,
  description,
  keywords,
}: SEOProps): JSX.Element => {
  const { site } = useStaticQuery<SeoQuery>(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
          keywords
        }
      }
    }
  `)
  const { pathname } = useLocation()

  const seo = useMemo(
    () => ({
      title: title,
      description: description || site?.siteMetadata?.defaultDescription,
      image: `${site?.siteMetadata?.siteUrl}${
        image || site?.siteMetadata?.defaultImage
      }`,
      lang: lang || 'ja',
      url: `${site?.siteMetadata?.siteUrl}${pathname}`,
      keywords: (site?.siteMetadata?.keywords || []).concat(
        keywords?.filter?.((v): v is string => !!v) || []
      ),
    }),
    [site, title, description, image, lang, keywords, pathname]
  )
  return (
    <Helmet titleTemplate={site?.siteMetadata?.titleTemplate || undefined}>
      <title>{seo.title}</title>
      <html lang={seo.lang} />
      <meta name="description" content={seo.description || undefined} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords.join(',')} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title || undefined} />
      <meta property="og:description" content={seo.description || undefined} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:site"
        content={site?.siteMetadata?.twitterUsername || undefined}
      />
      <meta name="twitter:title" content={seo.title || undefined} />
      <meta name="twitter:description" content={seo.description || undefined} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}
