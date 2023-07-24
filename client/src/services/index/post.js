import axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/v1/posts");
    console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getSinglePost = async (id) => {
  console.log(id);
  try {
    const { data } = await axios.get(`/api/v1/post/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
