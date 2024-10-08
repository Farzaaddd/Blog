import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query MyQuery {
    posts(first: 15) {
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
      datePublished
      category
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query MyQuery {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      id
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          avatar {
            url
          }
          name
          field
        }
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
      datePublished
    }
  }
`;

const GET_POST_COMMENT = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { Post: { slug: $slug } } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_POST_INFO,
  GET_POST_COMMENT,
};
