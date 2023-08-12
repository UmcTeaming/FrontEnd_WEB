import styled from "styled-components";
import CardFile from "../../components/Project/CardFile";
import ListFile from "../../components/Project/ListFile";
import { useQuery } from "react-query";
import { getProject, getProjectFiles } from "../../api";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.span`
  font-size: 16px;
  padding-left: 13px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ListFiles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 26px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

const CardFiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 27px;
  row-gap: 15px;
  padding-bottom: 40px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

const ProjectFiles = (props) => {
  const { data: projectFiles } = useQuery(["project-files"], getProjectFiles);
  const { currentView } = props;

  const formatDate = (date) => {
    if (date === undefined) {
      return "";
    } else {
      return date.split("T")[0].replace(/-/g, ".");
    }
  };

  return (
    <Wrapper>
      <Container>
        {projectFiles?.map((files) => {
          return (
            <>
              <Date>{formatDate(files?.createdAt)}</Date>
              {currentView === "grid" ? (
                <CardFiles>
                  {files?.filesDetails.map((file) => (
                    <CardFile file={file} />
                  ))}
                </CardFiles>
              ) : currentView === "list" ? (
                <ListFiles>
                  {files?.filesDetails.map((file) => (
                    <ListFile file={file} />
                  ))}
                </ListFiles>
              ) : null}
            </>
          );
        })}
      </Container>
    </Wrapper>
  );
};
export default ProjectFiles;
