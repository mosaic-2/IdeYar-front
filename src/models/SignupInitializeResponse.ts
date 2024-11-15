// ./src/models/SignupInitializeResponse.ts
export default interface SignupInitializeResponse {
  message: string;
  // Add other relevant fields if any
}

// ./src/models/SignupCompleteResponse.ts
export default interface SignupCompleteResponse {
  account: AccountResponse;
  jwtToken: string;
  refreshToken: string;
}

// ./src/models/AuthResponse.ts
import AccountResponse from "./AccountResponse";

export default interface AuthResponse {
  account: AccountResponse;
  jwtToken?: string;
  refreshToken?: string;
}
