import recordingFragment from './fragments/recording';

export default `query musicTracks($language: Language!, $sponsorId: ID, $afterCursor: String) {
  musicTracks(
    language: $language
    sponsorId: $sponsorId
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
