import axios from "axios";

export const getAllFeedback = async ({ name, email, reason, msg }) => {
  try {
    const { data } = await axios.post("/api/v1/feedbacks", {
      name,
      email,
      reason,
      msg,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
