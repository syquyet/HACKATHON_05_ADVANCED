import axios from "axios";
import { API } from "../commont/commont";

export const getData = async (resource: string) => {
  try {
    const response = await axios.get(API + resource);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const postData = async (resource: string, data: any) => {
  try {
    const response = await axios.post(API + resource, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const putData = async (resource: string, data: any) => {
  try {
    const response = await axios.put(API + resource, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteData = async (resource: string, id: any) => {
  try {
    const response = await axios.delete(API + resource + `/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
