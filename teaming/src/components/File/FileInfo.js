import { useQuery } from "react-query";
import styled from "styled-components";
import { getFile, getProject } from "../../api";
import { MdUpload } from "react-icons/md";
import { memberIdState, tokenState } from "../atom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import React from "react";

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

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 174px;
  margin-right: 35px;
  margin-left: 38px;
`;

const FileType = styled.span`
  position: absolute;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 20px;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
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
  gap: 300px;
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
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
`;

function FileInfo({ url }) {
  const downloadURL = url;
  const memberId = useRecoilValue(memberIdState);
  const accessToken = useRecoilValue(tokenState);
  const { projectId, fileId } = useParams();
  const { data: project } = useQuery(["project"], () =>
    getProject(memberId.toString(), projectId.toString(), accessToken)
  );
  const { data: file } = useQuery(["file"], () =>
    getFile(
      memberId.toString(),
      projectId.toString(),
      fileId.toString(),
      accessToken
    )
  );
  const formattedDate = file?.upload_date.split(" ")[0].replace(/-/g, ".");
  const handleDownload = () => {
    if (downloadURL) {
      const link = document.createElement("a");
      link.href = downloadURL;
      link.download = file?.file_name; // 다운로드될 파일 이름
      link.click();
    }
  };
  return (
    <Wrapper>
      <ImgContainer>
        <Img
          src={
            project?.projectStatus === "ING"
              ? "../../img/fileImg/project_file.png"
              : project?.projectStatus === "END"
              ? "../../img/fileImg/final_file.png"
              : null
          }
        />
        <FileType>{file?.file_type}</FileType>
      </ImgContainer>
      <Details>
        <Title>{file?.file_name}</Title>
        <Uploader>{file?.uploader}님이 업로드</Uploader>
        <Description>
          프로젝트 명: {project?.name} <br /> {formattedDate}
        </Description>
        <Col>
          <Format>
            <svg width="15px" height="15px">
              <circle
                cx="5"
                cy="5"
                r="5"
                fill={
                  project?.projectStatus === "ING"
                    ? "#527FF5"
                    : project?.projectStatus === "END"
                    ? "#FFD008"
                    : null
                }
              />
            </svg>
            {file?.file_type}
          </Format>
          <Download onClick={handleDownload}>
            <MdUpload size="15" color="white" transform="rotate(180)" />
            <span>파일 다운로드</span>
          </Download>
        </Col>
      </Details>
    </Wrapper>
  );
}
export default FileInfo;
