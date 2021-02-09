import { FETCH_PRODUCTS } from "./types";
import axios from "axios";

export const fetchProducts = () => (dispatch) => {
  const URL = `https://d17btosbk6wddi.cloudfront.net/v1/search?q=bag`;

  axios.get(URL).then((response) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data.data,
    });
  });
};

export const testfetchProducts = () => {
  const URL = `https://d17btosbk6wddi.cloudfront.net/v1/search?q=bag`;

  return axios.get(URL).then(({ data }) => {
    return data;
  });
};
