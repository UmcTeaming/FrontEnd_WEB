import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useQuery } from "react-query";
import { getFile, getProject, getView } from "../../api";
import { memberIdState } from "../atom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 670px;
  height: 941px;
`;

const Error = styled.div`
  width: 670px;
  height: 941px;
  display: flex;
`;

const FileName = styled.div`
  background-color: white;
  width: 670px;
  height: 50px;
  display: flex;
  p {
    font-weight: 700;
    margin: 15px;
  }
  position: absolute;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  height: 941px;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 700;
  }
  gap: 20px;
`;

const FileViewer = () => {
  const types = [
    "bmp",
    "csv",
    "odt",
    "doc",
    "docx",
    "gif",
    "htm",
    "html",
    "jpg",
    "jpeg",
    "pdf",
    "png",
    "ppt",
    "pptx",
    "tiff",
    "txt",
    "xls",
    "xlsx",
  ];
  const currentUrl = window.location.href;
  const [isLoad, setIsLoad] = useState(false);
  const [docs, setDocs] = useState([]);
  const memberId = useRecoilValue(memberIdState);
  const { projectId, fileId } = useParams();
  const { data: file } = useQuery(["file"], () =>
    getFile(memberId.toString(), projectId.toString(), fileId.toString())
  );
  const { data: downloadURL } = useQuery(["view"], () =>
    getView(memberId.toString(), projectId.toString(), fileId.toString())
  );

  useEffect(() => {
    if (downloadURL) {
      setDocs([
        {
          uri: downloadURL,
          fileType: `${file?.file_type}`,
          fileName: `${file?.file_name}`,
        },
      ]);
      setIsLoad(true);
    }
  }, [downloadURL, file]);
  console.log(downloadURL);
  return (
    <Wrapper>
      {isLoad ? (
        types.some((type) => file?.file_type === type) ? (
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        ) : (
          <Error>
            <FileName>
              <p>{file?.file_name}</p>
            </FileName>
            <img
              src={
                currentUrl.includes("project-files")
                  ? "../../img/viewerImg/project.jpg"
                  : currentUrl.includes("final-files")
                  ? "../../img/viewerImg/final.jpg"
                  : null
              }
            />
          </Error>
        )
      ) : (
        <Loading>
          <img src="../../img/viewerImg/loading.png" />
          <span style={{ color: "#527ff5" }}>Loading</span>
        </Loading>
      )}
    </Wrapper>
  );
};
export default FileViewer;
