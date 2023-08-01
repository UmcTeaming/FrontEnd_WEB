import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useQuery } from "react-query";
import { getFileView, getFileInfo } from "../../api";

const Wrapper = styled.div`
  width: 670px;
  height: 1315px;
`;

const FileViewer = () => {
  const { data: file } = useQuery(["fileInfo"], getFileInfo);
  const { data: view } = useQuery(["fileView"], getFileView);

  const docs = [
    {
      uri: `${view?.view_link}`,
      fileType: `${file?.file_type}`,
    },
  ];

  return (
    <Wrapper>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </Wrapper>
  );
};
export default FileViewer;
