import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useQuery } from "react-query";
import { getFile } from "../../api";
import { memberIdState, tokenState } from "../atom";
import { useRecoilValue } from "recoil";
import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 670px;
  height: 941px;
`;

const FileViewer = ({ url }) => {
  const types = [
    "bmp",
    "csv",
    "gif",
    "htm",
    "html",
    "jpg",
    "jpeg",
    "pdf",
    "png",
    "tiff",
    "txt",
  ];
  const downloadURL = url;
  const [isLoad, setIsLoad] = useState(false);
  const [docs, setDocs] = useState([]);
  const memberId = useRecoilValue(memberIdState);
  const accessToken = useRecoilValue(tokenState);
  const { projectId, fileId } = useParams();
  const { data: file } = useQuery(["file"], () =>
    getFile(
      memberId.toString(),
      projectId.toString(),
      fileId.toString(),
      accessToken
    )
  );
  const location = useLocation();
  const parts = location.pathname.split("/");

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

  return (
    <Wrapper>
      {isLoad ? (
        types.some((type) => file?.file_type === type) ? (
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        ) : (
          <img
            src={
              parts.includes("project-files")
                ? "../../img/viewerImg/project.jpg"
                : parts.includes("final-files")
                ? "../../img/viewerImg/final.jpg"
                : null
            }
          />
        )
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};
export default FileViewer;
