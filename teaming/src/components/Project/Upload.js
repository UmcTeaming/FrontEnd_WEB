import styled from "styled-components";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { useMatch } from "react-router";
import { useRecoilValue } from "recoil";
import { memberIdState } from "../atom";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  width: 752px;
  height: 141px;
  background-color: #e6e6e6;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.3);
  span {
    font-size: 12px;
  }
`;

const Upload = () => {
  const memberId = useRecoilValue(memberIdState);
  const { projectId } = useParams();
  const matchProject = useMatch("/:projectId/project-files");
  const matchFinal = useMatch("/:projectId/final-files");
  const queryClient = useQueryClient();

  const handleChange = (data) => {
    if (data !== null) {
      handleUpload(data);
    }
  };

  const handleUpload = (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    if (matchProject) {
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/files-upload`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
        transformRequest: (data, headers) => {
          return data;
        },
      })
        .then((response) => {
          console.log(response.data);
          queryClient.invalidateQueries("project-files");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (matchFinal) {
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/final-file`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
        transformRequest: (data, headers) => {
          return data;
        },
      })
        .then((response) => {
          console.log(response.data);
          queryClient.invalidateQueries("final-files");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <FileUploader handleChange={handleChange} name="file">
      <Wrapper>
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
      </Wrapper>
    </FileUploader>
  );
};
export default Upload;
