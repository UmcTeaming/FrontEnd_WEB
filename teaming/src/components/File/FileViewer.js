import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useQuery } from "react-query";
import { getFile } from "../../api";
import { memberIdState, tokenState } from "../atom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

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

  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: `docx`, // `${file?.file_type}`
    },
  ];

  return (
    <Wrapper>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </Wrapper>
  );
};
export default FileViewer;
