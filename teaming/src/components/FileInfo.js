import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  width: 754px;
  height: 260px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  align-items: center;
  font-family: "GmarketSans";
`;

const Img = styled.img`
  width: 174px;
  height: 210px;
  margin-right: 35px;
  margin-left: 38px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 31px;
`;

const Uploader = styled.span`
  font-size: 14px;
  margin-bottom: 41px;
`;

const Description = styled.p`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 20px;
  margin-bottom: 15px;
`;

const Col = styled.div`
  display: flex;
  gap: 278px;
`;

const Format = styled.div`
  font-size: 10px;
`;

const Download = styled.button`
  width: 139px;
  height: 29px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: #527ff5;
  border-radius: 30px;
  font-family: "GmarketSans";
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;

function FileInfo() {
  return (
    <Wrapper>
      <Img src="../img/project_file.png" />
      <Details>
        <Title>OO교양 조별 과제 자료조사</Title>
        <Uploader>카리나님이 업로드</Uploader>
        <Description>
          프로젝트 명: OO교양 조별과제 <br /> 2023. 06. 20
        </Description>
        <Col>
          <Format>docx</Format>
          <Download>
            <Link to="/">파일 다운로드</Link>
          </Download>
        </Col>
      </Details>
    </Wrapper>
  );
}
export default FileInfo;
