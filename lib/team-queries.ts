import { gql } from "graphql-request"

export const GET_ALL_TEAM_MEMBERS = gql`
  query GetAllTeamMembers {
    teams {
      id
      name
      slug
      position
      bio
      expertise
      education
      avatarImage {
        url
      }
      heroImage {
        url
      }
      project {
        id
        title
        slug
      }
    }
  }
`

export const GET_TEAM_MEMBER_BY_SLUG = gql`
  query GetTeamMemberBySlug($slug: String!) {
    team(where: { slug: $slug }) {
      id
      name
      slug
      position
      bio
      expertise
      education
      avatarImage {
        url
      }
      heroImage {
        url
      }
      project {
        id
        title
        slug
      }
    }
  }
`
