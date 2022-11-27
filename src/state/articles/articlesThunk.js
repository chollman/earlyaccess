import axios from 'axios';

const API_URL = 'https://earlyaccess-api.onrender.com/api/v1';

export const getAllArticlesThunk = async (_, thunkAPI) => {
  let url = `${API_URL}/articles`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};
