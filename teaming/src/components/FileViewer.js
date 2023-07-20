import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Wrapper = styled.div`
  width: 835px;
  height: 1315px;
`;

const FileViewer = () => {
  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
    },
    {
      uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
      fileType: "xls",
    },
    {
      uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
      fileType: "ppt",
    },
    {
      uri: require("../files/test.pdf"),
      fileType: "pdf",
      fileName: "test.pdf",
    },
    {
      uri: require("../files/project_img.jpg"),
      fileType: "jpg",
    },
  ];

  return (
    <Wrapper>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </Wrapper>
  );
};
export default FileViewer;
