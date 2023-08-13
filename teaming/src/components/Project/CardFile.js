import styled from "styled-components";
import { MdUpload } from "react-icons/md";
import { Link, useMatch } from "react-router-dom";
import { useQuery } from "react-query";
import { getDownloadLink, getProject } from "../../api";
import axios from "axios";

const File = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 166px;
  height: 231px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  a {
    text-decoration: none;
    color: black;
  }
  position: relative;
`;

const Delete = styled.button`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  margin-top: 3px;
  margin-left: 143px;
  padding: 0;
  cursor: pointer;
`;

const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const FileImg = styled.img`
  width: 117px;
  height: 127px;
  margin-bottom: 12px;
`;

const FileType = styled.span`
  position: absolute;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 12px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const FileTitle = styled.h1`
  width: 123px;
  font-size: 14px;
  margin-bottom: 3px;
`;

const Col = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  gap: 57px;
`;

const Comment = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 11px;
  margin-left: 20px;
  span {
    color: rgba(255, 0, 0, 0.5);
  }
`;

const Download = styled.button`
  width: 15px;
  height: 15px;
  background-color: #527ff5;
  border: none;
  border-radius: 8px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardFile = (data) => {
  const matchProject = useMatch("/:id/project-files");
  const matchFinal = useMatch("/:id/final-files");
  const { file } = data;
  const { data: download } = useQuery(["download"], getDownloadLink);

  const onDelete = (e) => {
    e.preventDefault();

    if (
      window.confirm(
        "삭제한 파일은 되돌릴 수 없습니다. 그래도 삭제하시겠습니까? "
      )
    ) {
      // axios.delete(`/projects/${memberId}/${projectId}/files/${fileId}`);
      console.log("삭제되었습니다.");
    } else {
      console.log("취소되었습니다.");
    }
    return;
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log("download...");
  };

  return (
    <Link to={`${file.file_id}`}>
      <File>
        <Delete onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke-width="2"
            stroke="#bcbcbc"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Delete>
        <FileContent>
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
          <FileTitle>{file.file_name}</FileTitle>
        </FileContent>
        <Col>
          <Comment>
            comment <span>{file.comment}</span>
          </Comment>
          <a href={download?.download_link} download>
            <Download onClick={onClick}>
              <MdUpload size="13" color="white" transform="rotate(180)" />
            </Download>
          </a>
        </Col>
      </File>
    </Link>
  );
};
export default CardFile;
