import * as types from "./types.js";
import axios from "axios";

const API_URL = "BLABLABLA.BLA";

export const fetchPostcodeRequest = () => ({
  type: types.FETCH_POSTCODE_REQUEST
});

export const fetchPostcodeSuccess = () => ({
  type: types.FETCH_POSTCODE_SUCCESS
});

export const fetchPostcodeFailure = () => ({
  type: types.FETCH_POSTCODE_FAILURE
});

export default () => {
  return dispatch => {
    dispatch(fetchPostcodeRequest());
    return axios
      .get(`${API_URL}`)
      .then(res => {
        dispatch(fetchPostcodeSuccess(res.data.postcode));
      })
      .catch(error => {
        dispatch(fetchPostcodeFailure(error.message));
      });
  };
};
