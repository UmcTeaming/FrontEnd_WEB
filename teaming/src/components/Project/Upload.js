import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GmarketSans";
  width: 752px;
  height: 141px;
  background-color: #e6e6e6;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    text-align: center;
    font-size: 12px;
  }
  svg {
    margin-left: 44%;
    margin-bottom: 11px;
  }
`;

const Input = styled.input`
  display: none;
`;

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const projectId = 1;
  const memberId = 1;

  const onSelectFile = (e) => {
    e.preventDefault();
    e.persist();

    const files = e.target.files;
    const fileUrlList = [...files];

    for (let i = 0; i < files.length; i++) {
      const fileUrl = URL.createObjectURL(files[i]);
      fileUrlList.push(fileUrl);
    }

    setSelectedFiles(fileUrlList);

    registApi(selectedFiles);
  };

  const registApi = async (selectedFiles) => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("file", selectedFiles[i]);
    }

    await axios({
      method: "POST",
      url: `/projects/${projectId}/files-upload?memberId=${memberId}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Wrapper>
      <Form>
        <label for="upload">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>프로젝트에 업로드할 파일을 선택해주세요</span>
          <Input
            type="file"
            id="upload"
            multiple={true}
            onChange={onSelectFile}
          />
        </label>
      </Form>
    </Wrapper>
  );
};
export default Upload;
