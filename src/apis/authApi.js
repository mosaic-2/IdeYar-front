import apiClient from "../services/api-client";
export const codeVerificationApi = (signUpToken, code) => apiClient.post("/auth/code-verification", {
    signUpToken,
    code,
});
// Export the Axios instance if needed elsewhere
export default apiClient;
