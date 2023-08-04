import styled from "styled-components";
import { Link } from "react-router-dom";

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

const FileImg = styled.img`
  width: 117px;
  height: 127px;
  margin-bottom: 12px;
`;

const FileTitle = styled.h1`
  width: 123px;
  font-size: 14px;
  margin-bottom: 3px;
`;

const Col = styled.div`
  display: flex;
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
`;

const CardFile = () => {
  const Deletefile = () => {
    if (
      !window.confirm(
        "삭제한 파일은 되돌릴 수 없습니다. 그래도 삭제하시겠습니까? "
      )
    )
      return false;
  };

  return (
    <File>
      <Delete onClick={Deletefile}>
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
      <Link to="/:id/files/fileId">
        <FileContent>
          <FileImg src="../img/fileImg/file_img.png" />
          <FileTitle>OO교양 조별과제 ppt</FileTitle>
        </FileContent>
      </Link>
      <Col>
        <Comment>
          comment <span>3</span>
        </Comment>
        <Download></Download>
      </Col>
    </File>
  );
};
export default CardFile;
