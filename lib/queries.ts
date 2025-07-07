import { gql } from "graphql-request"

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects {
      id
      slug
      title
      categories
      year
      location
      client
      description
      coverImage {
        url
      }
      gallery {
        url
      }
    }
  }
`

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      categories
      year
      location
      client
      description
      coverImage {
        url
      }
      gallery {
        url
      }
    }
  }
`

export const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: ID!) {
    project(where: { id: $id }) {
      id
      slug
      title
      categories
      year
      location
      client
      description
      coverImage {
        url
      }
      gallery {
        url
      }
    }
  }
`
