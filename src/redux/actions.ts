import { GET_DATA } from "./types";

export const addData = (data: any) => ({
  type: GET_DATA,
  payload: data,
});
