import apiClient from "../services/api-client";

export interface PostResponse {
  id: number;
  userId: number;
  username: string;
  profileImageUrl: string;
  title: string;
  description: string;
  minimumFund: number;
  fundRaised: number;
  deadlineDate: string;
  image: string;
  createdAt: Date;
}

export interface PostDetail {
  title: string;
  description: string;
  order?: number;
  image?: string;
}

export interface FetchPostResponse {
  post: PostResponse;
  postDetails: PostDetail[];
}

export const fetchPost = async (id: number): Promise<FetchPostResponse> => {
  const response = await apiClient.get(`/api/post/${id}`);
  return response.data;
};
