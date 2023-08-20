import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useQuery } from "react-query";
import { getFile } from "../../api";
import { memberIdState, tokenState } from "../atom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 670px;
`;

const FileViewer = ({ url }) => {
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
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};
export default FileViewer;
