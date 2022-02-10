import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

// api.getPublicGistsApi
export const getGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());

    const { data } = await api.getPublicGistsApi(page);

    dispatch(getGistsSuccess(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};
