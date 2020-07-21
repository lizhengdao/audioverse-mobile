export default `mutation($email: String!, $password: String!) {
  login(input: { email: $email, password: $password }) {
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
