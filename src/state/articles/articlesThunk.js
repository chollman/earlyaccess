import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllArticlesThunk = async (_, thunkAPI) => {
  let url = `${API_URL}/articles`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};
