import styled from "styled-components";
import { Link, useMatch, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getDownloadLink, getProject } from "../../api";

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
  const matchProject = useMatch("/:id/project-files");
  const matchFinal = useMatch("/:id/final-files");
  const { file } = data;
  const { data: download } = useQuery(["download"], getDownloadLink);
  const projectId = matchProject && matchProject.params.id;
  const finalId = matchFinal && matchFinal.params.id;

  const onDelete = (e) => {
    e.preventDefault();

    if (
      window.confirm(
        "삭제한 파일은 되돌릴 수 없습니다. 그래도 삭제하시겠습니까?"
      )
    ) {
      // axios.delete(`/projects/${memberId}/${projectId}/files/${fileId}`);
      console.log("삭제되었습니다.");
    } else {
      console.log("취소되었습니다.");
    }
    return;
  };

  const onDownload = (e) => {
    e.preventDefault();
    if (download && download.download_link) {
      window.open(download.download_link, "_blank");
    }
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
          <Download onClick={onDownload}>다운로드</Download>
        </Buttons>
      </File>
    </Link>
  );
};
export default ListFile;
