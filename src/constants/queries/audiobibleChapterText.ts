export default `query audiobible($id: ID!, $bookId: ID!, $chapterId: ID!) {
  audiobible(id: $id) {
    book(id: $bookId) {
      chapter(id: $chapterId) {
        text
      }
    }
  }
}
`;
