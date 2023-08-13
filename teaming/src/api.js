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

export const getProject = async () => {
  // const response = await axios.get(`/projects/${memberId}/${projectId}`);
  // return response.data;
  return {
    project_name: "TeamProject1",
    project_status: "ING",
    start_date: "2023-07-08 10:30:45.123456",
    end_date: "2023-07-09 10:30:45.123456",
    members: [
      {
        name: "닝닝",
        profile_image: null,
        email: "test@gamil.com",
      },
      {
        name: "윈터",
        profile_image: null,
        email: "test@gmail.com",
      },
      {
        name: "지젤",
        profile_image: null,
        email: "test@gmail.com",
      },
    ],
  };
};

export const getProjectFiles = async () => {
  return [
    {
      createdAt: "2023-07-28T00:00:00",
      filesDetails: [
        {
          file_id: 1,
          file_type: "hwp",
          file_name: "GCP계정발급신청서.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\", // 서버에 파일이 저장되어 있는 경로
          comment: 4,
        },
        {
          file_id: 2,
          file_type: "hwp",
          file_name: "umc.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 2,
        },
      ],
    },
    {
      createdAt: "2023-07-27T00:00:00",
      filesDetails: [
        {
          file_id: 3,
          file_type: "hwp",
          file_name: "text.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 0,
        },
        {
          file_id: 4,
          file_type: "png",
          file_name: "jihee.png",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 0,
        },
      ],
    },
  ];
};

export const getFinalFiles = async () => {
  // const response = await axios.get(`/projects/${memberId}/${projectId}/final-files`);
  // return response.data;
  return [
    {
      createdAt: "2023-07-28T00:00:00",
      filesDetails: [
        {
          file_id: 5,
          file_type: "hwp",
          file_name: "GCP계정발급신청서.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\", // 서버에 파일이 저장되어 있는 경로
          comment: 4,
        },
        {
          file_id: 6,
          file_type: "hwp",
          file_name: "umc.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 2,
        },
      ],
    },
    {
      createdAt: "2023-07-27T00:00:00",
      filesDetails: [
        {
          file_id: 7,
          file_type: "hwp",
          file_name: "text.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 0,
        },
        {
          file_id: 8,
          file_type: "png",
          file_name: "jihee.png",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 0,
        },
      ],
    },
  ];
};

export const getProfile = async () => {
  // const response = await axios.get(`/member/${memberId}/mypage`);
  // return response.data;
  return {
    memberId: 25,
    name: "한소희",
    email: "test@naver.com",
    profileImage: null,
  };
};
