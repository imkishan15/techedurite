import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://3.7.81.243/projects/plie-api/public/api";
export const API_URL = "http://3.7.81.243/projects/plie-api/public/api/events-listing";
export const AUTH_TOKEN = "Bearer 148|QwsMFixT9w9MgleAbukZtghUuKNZGxgR1SYDOVMk";

interface ErrorResponse {
  message?: string;
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    return response.data;
  } catch (error: any) {
    return error.response?.data || { success: false, message: "Something went wrong!" };
  }
};

export const fetchEvents = createAsyncThunk<
  any[], // Successful response type (array of events)
  void, // No arguments needed for this thunk
  { rejectValue: string } // Define rejected value as a string
>("events/fetchEvents", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, {
      headers: { Authorization: AUTH_TOKEN },
    });

    if (response.data.success) {
      return response.data.data.events;
    } else {
      return rejectWithValue(response.data.message || "Failed to fetch events");
    }
  } catch (error) {
    return rejectWithValue(
      (error as AxiosError<ErrorResponse>).response?.data?.message ||
        "Network Error"
    );
  }
});