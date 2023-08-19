import styled from "styled-components";
import { MdUpload } from "react-icons/md";
import { Link, useMatch, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { memberIdState } from "../atom";
import { useRecoilValue } from "recoil";

const File = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  width: 746px;
  height: 122px;
  box-shadow: 1px 5px 3px rgba(0, 0, 0, 0.2);
  a {
    text-decoration: none;
    color: black;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const FileImg = styled.img`
  width: 90px;
  margin-left: 12px;
  margin-right: 21px;
`;

const FileType = styled.span`
  position: absolute;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 11px;
  bottom: 18%;
  left: 36%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 110px;
`;

const FileTitle = styled.h1`
  width: 400px;
  font-size: 15px;
  margin-bottom: 11px;
`;

const Comment = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  span {
    color: rgba(255, 0, 0, 0.5);
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Delete = styled.button`
  width: 18px;
  height: 18px;
  background-color: transparent;
  margin-left: 78px;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Download = styled.button`
  width: 98px;
  height: 29px;
  border-radius: 30px;
  border: none;
  background-color: #527ff5;
  color: white;
  font-size: 12px;
  font-weight: 700;
  font-family: "GmarketSans";
  cursor: pointer;
  margin-bottom: 5px;
`;

const ListFile = (data) => {
  const memberId = useRecoilValue(memberIdState);
  const { projectId } = useParams();
  const matchProject = useMatch("/:projectId/project-files");
  const matchFinal = useMatch("/:projectId/final-files");
  const { file } = data;
  const queryClient = useQueryClient();

  const onDelete = (e) => {
    e.preventDefault();

    if (
      window.confirm(
        "삭제한 파일은 되돌릴 수 없습니다. 그래도 삭제하시겠습니까?"
      )
    ) {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/files/${file.file_id}`
        )
        .then((response) => {
          console.log(response);
          if (matchProject) {
            queryClient.invalidateQueries("project-files");
          } else if (matchFinal) {
            queryClient.invalidateQueries("final-files");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const downloadUrl = `${process.env.REACT_APP_API_URL}/files/${memberId}/${projectId}/files/${file.file_id}/download`;

    axios({
      method: "GET",
      url: downloadUrl,
      responseType: "blob",
    })
      .then((response) => {
        const blob = new Blob([response.data]);
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = file?.file_name;
        link.click();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Link to={`${file.file_id}`}>
      <File>
        <ImgContainer>
          <FileImg
            src={
              matchProject
                ? "../img/fileImg/project_file.png"
                : matchFinal
                ? "../img/fileImg/final_file.png"
                : null
            }
          />
          <FileType>{file.file_type}</FileType>
        </ImgContainer>
        <Content>
          <FileTitle>{file.file_name}</FileTitle>
          <Comment>
            comment <span>{file.comment}</span>
          </Comment>
        </Content>

        <Buttons>
          <Delete onClick={onDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#bcbcbc"
              class="w-6 h-6"
              width="20px"
              height="20px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Delete>
          <Download onClick={handleDownload}>다운로드</Download>
        </Buttons>
      </File>
    </Link>
  );
};
export default ListFile;
