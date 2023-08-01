import axios from "axios";

export const getFile = async () => {
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
  return {
    file_type: "docx",
    file_name: "ㅇㅇ교양 조별과제 자료조사",
    uploader: "John Doe",
    upload_date: "2023-07-08 10:30:45.123456",
  };
};

export const getComments = async () => {
  // const response = await axios.get(`/files/${memberId}/${fileId}/comments`);
  // return response.data;
  return [
    {
      writer: "John Doe",
      content: "오늘까지 하자자",
      create_at: "2023-07-23T20:57:41.874734",
      profile_image: "image.png",
    },
    {
      writer: "Jane",
      content: "오늘까지 해봅시다다",
      create_at: "2023-07-23T20:57:49.744635",
      profile_image: "image1.png",
    },
  ];
};
