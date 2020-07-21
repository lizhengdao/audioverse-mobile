export default `query featuredBlogPosts($language: Language!) {
  featuredBlogPosts(language: $language) {
    nodes {
      id
      title
      image {
        url(size: 740)
      }
    }
  }  
}
`;
