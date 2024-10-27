import AccountResponse from "../models/AccountResponse";
import apiClient from "../services/api-client";

export const getAccountApi = () =>
  apiClient.get<AccountResponse>("/user/account");

export const deleteAccount = () => apiClient.delete("/user/account");
