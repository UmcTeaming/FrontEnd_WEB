import styled from "styled-components";
import { Link } from "react-router-dom";

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

const FileImg = styled.img`
  width: 90px;
  height: 104px;
  margin-left: 12px;
  margin-right: 21px;
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
  gap: 42px;
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
`;

const ListFile = () => {
  return (
    <File>
      <Link to="/:id/files/fileId">
        <FileImg src="../img/fileImg/file_img.png" />
      </Link>
      <Link to="/:id/files/fileId">
        <Content>
          <FileTitle>기말 최종 발표</FileTitle>
          <Comment>
            comment <span>3</span>
          </Comment>
        </Content>
      </Link>
      <Buttons>
        <Delete>
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
        <Download>다운로드</Download>
      </Buttons>
    </File>
  );
};
export default ListFile;
