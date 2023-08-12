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

export const getProject = async () => {
  // const response = await axios.get(`/projects/${memberId}/${projectId}s`);
  // return response.data;
  return {
    project_id: 1,
    project_name: "TeamProject1",
    start_date: "2023-07-08 10:30:45.123456",
    end_date: "2023-07-09 10:30:45.123456",
    members: [
      {
        name: "닝닝",
        profile_image: "이미지 링크",
      },
      {
        name: "윈터",
        profile_image: "이미지 링크",
      },
      {
        name: "지젤",
        profile_image: "이미지 링크",
      },
    ],
    projects_files_all: [
      // 날짜별 프로젝트 파일 목록
      {
        uploade_date: "2023-07-08 10:30:45.123456",
        files_by_date: [
          {
            file_id: 1,
            files_name: "ㅇㅇ 교양 조별 과제 자료조사",
            comment_num: 3,
            file: "MultipartFile 형식",
          },
          {
            file_id: 2,
            files_name: "ㅇㅇ 교양 조별 과제 ppt",
            comment_num: 3,
            file: "MultipartFile 형식",
          },
        ],
      },
      {
        uploade_date: "2023-07-09 10:30:45.123456",
        files_by_date: [
          {
            file_id: 3,
            files_name: "ㅇㅇ 교양 조별 과제 ppt 2",
            comment_num: 3,
            file: "MultipartFile 형식",
          },
          {
            file_id: 4,
            files_name: "ㅇㅇ 교양 - 신화 관련 자료조사",
            comment_num: 3,
            file: "MultipartFile 형식",
          },
        ],
      },
    ],
  };
};

export const getFinalFiles = async () => {
  // const response = await axios.get(`/projects/${memberId}/${projectId}/final-files`);
  // return response.data;
  return [
    {
      createdAt: "2023-07-28T00:00:00",
      filesDetails: [
        {
          file_type: "hwp",
          file_name: "GCP계정발급신청서.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\", // 서버에 파일이 저장되어 있는 경로
          comment: 4,
        },
        {
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
          file_type: "hwp",
          file_name: "text.hwp",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 0,
        },
        {
          file_type: "png",
          file_name: "jihee.png",
          file: "C:\\Users\\82103\\Desktop\\UMC\\",
          comment: 0,
        },
      ],
    },
  ];
};
