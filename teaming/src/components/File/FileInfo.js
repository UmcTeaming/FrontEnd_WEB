import { useQuery } from "react-query";
import styled from "styled-components";
import { getDownloadLink, getFileInfo, getProject } from "../../api";
import { MdUpload } from "react-icons/md";
import { useLocation } from "react-router";

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
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
`;

function FileInfo() {
  const location = useLocation();
  const { data: project } = useQuery(["project"], getProject);
  const { data: file } = useQuery(["fileInfo"], getFileInfo);
  const { data: download } = useQuery(["download"], getDownloadLink);
  const formattedDate = file?.upload_date.split(" ")[0].replace(/-/g, ".");
  const parts = location.pathname.split("/");

  return (
    <Wrapper>
      <ImgContainer>
        <Img
          src={
            parts.includes("project-files")
              ? "../../img/fileImg/project_file.png"
              : parts.includes("final-files")
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
          프로젝트 명: {project?.project_name} <br /> {formattedDate}
        </Description>
        <Col>
          <Format>
            <svg width="15px" height="15px">
              <circle
                cx="5"
                cy="5"
                r="5"
                fill={
                  project?.project_status === "ING"
                    ? "#527FF5"
                    : project?.project_status === "END"
                    ? "#FFD008"
                    : null
                }
              />
            </svg>
            {file?.file_type}
          </Format>
          <a href={download?.download_link} download>
            <Download>
              <MdUpload size="15" color="white" transform="rotate(180)" />
              <span>파일 다운로드</span>
            </Download>
          </a>
        </Col>
      </Details>
    </Wrapper>
  );
}
export default FileInfo;
