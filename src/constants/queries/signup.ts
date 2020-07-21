export default `mutation($email: String!, $password: String!) {
  signup(input: { email: $email, password: $password }) {
    authenticatedUser {
      user {
        id
      }
      sessionToken
    }
    errors {
      message
    }
  }
}`;
