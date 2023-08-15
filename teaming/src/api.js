import axios from "axios";

export const getDownloadLink = async () => {
  // const response = await axios.get(`/projects/${projectId}/files/${fileId}/download`);
  // return response.data;
  return {
    download_link: "https://calibre-ebook.com/downloads/demos/demo.docx",
  };
};

export const getFileView = async () => {
  // const response = await axios.get(`/files/${fileId}/view`);
  // return response.data;
  return {
    view_link: "https://calibre-ebook.com/downloads/demos/demo.docx",
  };
};

export const getFileInfo = async () => {
  // const response = await axios.get(`/projects/${projectId}/files/${fileId}`);
  // return response.data;
  const response = await axios.get("/datas/SingleFile-Search.json");
  return response.data.data;
};

export const getComments = async () => {
  // const response = await axios.get(`/files/${memberId}/${fileId}/comments`);
  // return response.data;
  const response = await axios.get("/datas/Comment-Search.json");
  return response.data.data;
};

export const getProject = async () => {
  // const response = await axios.get(`/projects/${memberId}/${projectId}`);
  // return response.data;
  const response = await axios.get("/datas/Project-Search.json");
  return response.data.data;
};

export const getProjectFiles = async () => {
  const response = await axios.get("/datas/Search-Files.json");
  return response.data.data;
};

export const getFinalFiles = async () => {
  // const response = await axios.get(`/projects/${memberId}/${projectId}/final-files`);
  // return response.data;
  const response = await axios.get("/datas/Search-Final-Files.json");
  return response.data.data;
};

export const getProfile = async () => {
  // const response = await axios.get(`/member/${memberId}/mypage`);
  // return response.data;
  const response = await axios.get("/datas/mypage.json");
  return response.data.data;
};
