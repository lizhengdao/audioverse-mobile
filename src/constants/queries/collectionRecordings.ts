import recordingFragment from './fragments/recording';

export default `query collectionRecordings($language: Language!, $collectionId: ID, $afterCursor: String) {
  recordings(
    language: $language
    collectionId: $collectionId
    first: 25
    after: $afterCursor
    orderBy: [{ field: CREATED_AT, direction: DESC }]
  ) {
    nodes {
      ...recordingFragment
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
${recordingFragment}
`;
