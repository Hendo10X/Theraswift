import axios from "axios";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: "https://theraswift-api.onrender.com", // Replace with your API base URL
});

// Function to handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { data, status } = error.response;
    toast.error(`Error: ${status} - ${data.message}`);
  } else if (error.request) {
    // The request was made but no response was received
    toast.error("No response from server");
  } else {
    // Something happened in setting up the request that triggered an Error
    toast.error("Error in request");
  }
};

// Function to perform GET request
export const getData = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Function to perform POST request
export const postData = async (url, payload) => {
  try {
    const response = await api.post(url, payload);
    toast.success("Data created successfully");
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Function to perform PUT request
export const updateData = async (url, payload) => {
  try {
    const response = await api.put(url, payload);
    toast.success("Data updated successfully");
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Function to perform DELETE request
export const deleteData = async (url) => {
  try {
    const response = await api.delete(url);
    toast.success("Data deleted successfully");
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
