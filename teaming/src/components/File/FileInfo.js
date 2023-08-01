import { useQuery } from "react-query";
import styled from "styled-components";
import { getFile, getFileInfo } from "../../api";

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
  display: flex;
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
  text-decoration: none;
  color: white;
`;

function FileInfo() {
  const { data: file } = useQuery(["fileInfo"], getFileInfo);
  const { data: download } = useQuery(["download"], getFile);
  const formattedDate = file?.upload_date.split(" ")[0].replace(/-/g, ".");

  return (
    <Wrapper>
      <Img src="../img/fileImg/file_img.png" />
      <Details>
        <Title>{file?.file_name}</Title>
        <Uploader>{file?.uploader}님이 업로드</Uploader>
        <Description>
          프로젝트 명: OO교양 조별과제 <br /> {formattedDate}
        </Description>
        <Col>
          <Format>
            <svg width="15px" height="15px">
              <circle cx="5" cy="5" r="5" fill="#527ff5" />
            </svg>
            {file?.file_type}
          </Format>
          <Download>
            <a href={download?.download_link} download>
              파일 다운로드
            </a>
          </Download>
        </Col>
      </Details>
    </Wrapper>
  );
}
export default FileInfo;
