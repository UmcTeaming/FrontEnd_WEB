import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getProfile = async (memberId, accessToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/member/${memberId}/mypage`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/mypage.json");
  // return response.data.data;
};

export const getProject = async (memberId, projectId, accessToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/Project-Search.json");
  // return response.data.data;
};

export const getProjectFiles = async (memberId, projectId, accessToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/files`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }
  // const response = await axios.get("/datas/Search-Files.json");
  // return response.data.data;
};

export const getFinalFiles = async (memberId, projectId, accessToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/final-files`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/Search-Final-Files.json");
  // return response.data.data;
};

export const getFileLink = async (memberId, projectId, fileId) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/files/${memberId}/${projectId}/files/${fileId}/download`,
      responseType: "blob",
    });
    const blob = new Blob([response.data]);
    const link = window.URL.createObjectURL(blob);
    return link;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getFile = async (memberId, projectId, fileId, accessToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/files/${fileId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/SingleFile-Search.json");
  // return response.data.data;
};

export const getComments = async (memberId, fileId, accessToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/files/${memberId}/${fileId}/comments`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Fetch Member Page Error:", error);
    throw error;
  }

  // const response = await axios.get("/datas/Comment-Search.json");
  // return response.data.data;
};
