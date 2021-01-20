import { HeroImage } from '@/components/atoms/hero-image'
import { MemberIcon } from '@/components/atoms/member-icon'
import { useI18n } from '@/components/context/i18n'
import type { IndexQueryQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

interface IndexPageProps {
  data: IndexQueryQuery
}

const IndexPage = ({ data }: IndexPageProps): JSX.Element => {
  const { selectedLanguage, setLanguage } = useI18n()
  return (
    <div>
      <HeroImage />
      <p>
        Welcome to your new <strong>{data.site?.siteMetadata?.title}</strong>{' '}
        site.
      </p>
      <Link to="/members">メンバー一覧</Link>
      {' | '}
      <Link to="/teams">チーム一覧</Link>
      {' | '}
      <Link to="/activity_log">活動記録</Link>
      {' | '}
      <Link to="/about">Engineについて</Link>
      {' | '}
      <Link to="/portfolios">ポートフォリオ一覧</Link>
      <div>
        {selectedLanguage === 'ja' ? (
          <button onClick={() => setLanguage('en')}>en</button>
        ) : (
          <button onClick={() => setLanguage('ja')}>ja</button>
        )}
      </div>
      <MemberIcon
        memberName="TakashiNemoto"
        className="rounded-full"
        size="md"
      />
      <MemberIcon memberName="YutaUra" className="rounded-full" size="md" />
    </div>
  )
}

export default IndexPage
