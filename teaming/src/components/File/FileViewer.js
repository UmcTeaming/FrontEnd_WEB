import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useQuery } from "react-query";
import { getFile } from "../../api";
import { memberIdState, tokenState } from "../atom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 670px;
  height: 1315px;
`;

const FileViewer = () => {
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
  const [downloadURL, setDownloadUrl] = useState(null);
  useEffect(() => {
    if (downloadURL === null) {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/files/${memberId}/${projectId}/files/${fileId}/download`,
        responseType: "blob",
      })
        .then((response) => {
          const blob = new Blob([response.data]);
          const link = window.URL.createObjectURL(blob);
          setDownloadUrl(link);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [downloadURL]);

  const docs = [
    {
      uri: downloadURL,
      fileType: `${file?.file_type}`,
      fileName: `${file?.file_name}`,
    },
  ];

  console.log(downloadURL);

  return (
    <Wrapper>
      {downloadURL !== null ? (
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};
export default FileViewer;
