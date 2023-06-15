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
  query GetPostsWithRelayCursor($first: Int = 18, $after: String = null) {
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

export const GET_POST_DETAILS = gql`
  query GetPostById($postId: ID!) {
    post(where: { id: $postId }) {
      id
      title
      synopsis
      body {
        html
      }
      thumbnailUrl
      authUser {
        username
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
  query getCourseById($courseId: ID!) {
    course(where: { id: $courseId }) {
      id
      name
      lecturers {
        firstName
        lastName
      }
      studyPoints
      description
      amountOfHoursPerWeek
      ectsUrl
    }
  }
`;

export const GET_ALL_TEAMMEMBERS = gql`
  query GetAllTeamMembers(
    $first: Int = 20
    $after: String = null
    $memberType_in: [TeamMemberType] = [Student, Lecturer, Alumni]
  ) {
    teamMembersConnectionRelayCursor: teamMembersConnection(
      first: $first
      after: $after
      where: { memberType_in: $memberType_in }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          firstName
          lastName
          memberType
          picture {
            url
          }
        }
      }
    }
  }
`;

export const GET_TEAMMEMBER_BY_ID = gql`
  query GetTeamMemberById($teamId: ID = "") {
    teamMember(where: { id: $teamId }) {
      firstName
      lastName
      jobTitle
      memberType
      picture {
        url
      }
    }
  }
`;

export const GET_PORTFOLIO_BY_ID = gql`
  query GetProjectById($id: ID = "") {
    projects(where: { authUsers_some: { id: $id } }) {
      title
      body {
        markdown
      }
      coverImage
      description
      updatedAt
      authUsers {
        username
        id
      }
    }
  }
`;

export const GET_PROFILE_BY_USER = gql`
  query GetAuthUser($userId: ID!) {
    authUser(where: { id: $userId }) {
      username
      email
      avatar {
        url
      }
      profile {
        firstName
        lastName
        dayOfBirth
        geoLocation {
          latitude
          longitude
        }
      }
    }
  }
`;
