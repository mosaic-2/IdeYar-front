export default interface Session {
  isLoggedIn: boolean;
  jwtToken: string | null;
  refreshToken: string | null;
}
