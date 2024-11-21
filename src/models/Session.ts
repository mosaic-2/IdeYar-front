export default interface Session {
  isLoggedIn: boolean;
  jwtToken: string;
  refreshToken: string;
}
