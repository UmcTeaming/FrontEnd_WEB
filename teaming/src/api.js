import axios from "axios";
import { getCookie } from "./components/Cookie";

/* axios.interceptors.request.use(
  function (config) {
    const token = getCookie("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
); */

export const getProfile = async (memberId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/member/${memberId}/mypage`
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/mypage.json");
  // return response.data.data;
};

export const getProject = async (memberId, projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/Project-Search.json");
  // return response.data.data;
};

export const getProjectFiles = async (memberId, projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/files`
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }
  // const response = await axios.get("/datas/Search-Files.json");
  // return response.data.data;
};

export const getFinalFiles = async (memberId, projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/final-files`
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/Search-Final-Files.json");
  // return response.data.data;
};

export const getFile = async (memberId, projectId, fileId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/files/${fileId}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/SingleFile-Search.json");
  // return response.data.data;
};

export const getComments = async (memberId, fileId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/files/${memberId}/${fileId}/comments`
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/Comment-Search.json");
  // return response.data.data;
};

export const getView = async (memberId, projectId, fileId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/files/${memberId}/${projectId}/files/${fileId}/view`
    );
    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/Comment-Search.json");
  // return response.data.data;
};
