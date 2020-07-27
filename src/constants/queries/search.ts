import recordingFragment from './fragments/recording';

export default `query search($language: Language!, $term: String!) {
  conferences(language: $language, search: $term) {
    nodes {
      id
      title
      logoImage: logoImageWithFallback {
        url(size: 86)
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  presenters(language: $language, search: $term) {
    nodes {
      id
      name
      description
      photo: photoWithFallback {
        url(size: 86)
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  sermons(language: $language, search: $term) {
    nodes {
      ...recordingFragment
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  serieses(language: $language, search: $term) {
    nodes {
      id
      title
      logoImage: logoImageWithFallback {
        url(size: 86)
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  sponsors(language: $language, search: $term) {
    nodes {
      id
      title
      logoImage: logoImageWithFallback {
        url(size: 86)
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
${recordingFragment}
`;