import { MemberName, members } from '@/data/member'
import { PortfolioName, portfolios } from '@/data/portfolio'
import { TeamName, teams } from '@/data/team'
import { Link } from 'gatsby'
import * as React from 'react'

type MarkdownTeamProps = {
  name: TeamName
}

export const MarkdownTeam = ({ name }: MarkdownTeamProps): JSX.Element => {
  const team = React.useMemo(
    () => teams.find((team) => team.name === name),
    [name]
  )

  if (!team) {
    return (
      <>
        {' '}
        <span>{`@${name}`}</span>{' '}
      </>
    )
  }
  return (
    <>
      {' '}
      <span>{`@${name}`}</span>{' '}
    </>
  )
}

type MarkdownUserProps = {
  name: MemberName
}

export const MarkdownUser = ({ name }: MarkdownUserProps): JSX.Element => {
  const user = React.useMemo(
    () => members.find((member) => member.name === name),
    [name]
  )

  if (!user) {
    return (
      <>
        {' '}
        <span>{`${name}`}</span>{' '}
      </>
    )
  }
  return (
    <>
      {' '}
      <Link
        className="text-gray-900 hover:text-gray-700 hover:underline"
        to={`/members/${user.name}`}
      >{`@${user.nameJa}`}</Link>{' '}
    </>
  )
}

type MarkdownPortfolioProps = {
  name: PortfolioName
}

export const MarkdownPortfolio = ({
  name,
}: MarkdownPortfolioProps): JSX.Element => {
  const portfolio = React.useMemo(
    () => portfolios.find((portfolio) => portfolio.name === name),
    [name]
  )

  if (!portfolio) {
    return (
      <>
        {' '}
        <span>{`${name}`}</span>{' '}
      </>
    )
  }
  return (
    <>
      {' '}
      <span>{`${name}`}</span>{' '}
    </>
  )
}
