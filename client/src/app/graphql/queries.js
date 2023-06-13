import { gql } from "@apollo/client";

export const GET_ALL_COMMUNITIES = gql`
query GetAllCommunities {
  communities {
    name
    description
    type
    authUsers {
      username
    }
  }
}
`;

export const GET_ALL_POSTS_SMALL = gql`
query GetAllPosts {
  posts {
    id
    title
  }
}
`;

export const GET_POSTS_BY_AMOUNT = gql`
query MyQuery($first: Int = 3) {
  posts(first: $first) {
    id
    title
    thumbnailUrl
  }
}
`;

export const GET_POSTS_WITH_RELAY_CURSOR = gql`
query GetPostsWithRelayCursor($first: Int = 20, $after: String = null) {
  postsConnectionRelayCursor: postsConnection(first: $first, after: $after) {
    pageInfo {
      hasNextPage 
      endCursor  
    }
    edges {
      node {
        id
        title
      }
    }
  }
}
`;

export const GET_POSTS_WITH_PAGINATION = gql`
query GetPostsWithPagination($first: Int = 20, $skip: Int = 0) {
  postsConnectionPagination: postsConnection(first: $first, skip: $skip) {
    pageInfo {
      hasNextPage
      endCursor
      pageSize
      hasPreviousPage
    }
    aggregate {
      count
    }
    edges {
      node {
        id
        title
      }
    }
  }
}
`;

export const GET_POST_DETAILS = gql`
query GetPostById ($postId: ID!) {
  post(where: {id: $postId}) {
    id
    title
    synopsis
    body {
      html
    }
    thumbnailUrl
    authUser {
      username,
      profile {
        firstName
        lastName
      }
    }
    tags {
      name
    }
    categories {
      name
    }
  }
}
`;

export const GET_ALL_COURSES = gql`
query getCourses {
  courses(first: 25) {
    id
    name
    studyPoints
    amountOfHoursPerWeek
    year
    semester
    period
    description
    ectsUrl
  }
}
`;

export const GET_COURSE_BY_ID = gql`
query MyQuery($semester: Semester = Semester_1) {
  courses(where: {semester: $semester}) {
    name
  }
}`;