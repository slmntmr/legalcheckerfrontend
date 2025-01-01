const API_URL = process.env.BASE_URL || "http://localhost:8080"; // Backend URL'si dinamik olarak alınır

import axios from "axios";

export const checkUrl = async (url) => {
  try {
    const response = await axios.post(`${API_URL}/api/check-url`, { url }); // API_URL burada kullanılıyor
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw new Error(error.response?.data || "An unexpected error occurred.");
  }
};
