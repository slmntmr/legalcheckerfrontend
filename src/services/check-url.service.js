import axios from "axios";

export const checkUrl = async (url) => {
  try {
    const response = await axios.post("/api/check-url", { url });
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw new Error(error.response?.data || "An unexpected error occurred.");
  }
};
