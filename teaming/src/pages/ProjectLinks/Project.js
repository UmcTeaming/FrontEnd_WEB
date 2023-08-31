import styled from "styled-components";
import { Link, useMatch, useParams } from "react-router-dom";
import ProjectInfo from "../../components/Project/ProjectInfo";
import Upload from "../../components/Project/Upload";
import AddMember from "../../components/Project/AddMember";
import { useState } from "react";
import ProjectFiles from "./ProjectFiles";
import FinalFiles from "./FinalFiles";
import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import { getProject } from "../../api";
import { memberIdState, tokenState } from "../../components/atom";

const Wrapper = styled.div`
  font-family: "GmarketSans";
`;

const Main = styled.div`
  background: linear-gradient(rgba(3, 63, 255, 0.5), transparent);
  padding: 45px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoCotainer = styled.div`
  margin-bottom: 46px;
`;

const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: white;
  font-size: 12px;
  margin-bottom: 10px;
  svg {
    margin-right: 3px;
  }
`;

const Border = styled.div`
  padding-top: 21px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 748px;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 424px;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  width: 271px;
  height: 26px;
  border-radius: 33px;
  background-color: #ececec;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  width: 130px;
  height: 22px;
  margin: 0 3px;
  border-radius: 33px;
  background-color: ${(props) => (props.isActive ? "white" : "transparent")};
  text-decoration: none;
  color: ${(props) => (props.isActive ? "black" : "rgba(0, 0, 0, 0.5)")};
  box-shadow: ${(props) =>
    props.isActive ? "2px 2px 2px rgba(0, 0, 0, 0.2)" : null};
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const CardBtn = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    fill: ${(props) => (props.isActive ? "#ffd008" : "rgba(0, 0, 0, 0.3)")};
  }
`;

const ListBtn = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    stroke: ${(props) => (props.isActive ? "#ffd008" : "rgba(0, 0, 0, 0.3)")};
  }
`;

const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Project = () => {
  const memberId = useRecoilValue(memberIdState);
  const accessToken = useRecoilValue(tokenState);
  const { projectId } = useParams();
  const matchProjectTab = useMatch("/:projectId/project-files");
  const matchFinalTab = useMatch("/:projectId/final-files");
  const [currentView, setCurrentView] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: project } = useQuery(["project"], () =>
    getProject(memberId.toString(), projectId.toString(), accessToken)
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      {isModalOpen ? (
        <Container>
          <AddMember onClose={() => closeModal()} />
        </Container>
      ) : null}
      <Main>
        <InfoCotainer>
          <Path>
            <Link to="/">
              <svg
                width="12px"
                height="12px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
            &gt;<Link to="/ongoingProject">진행중인 프로젝트</Link>&gt;
            <span>{project?.name}</span>
          </Path>
          <ProjectInfo onOpen={() => openModal()} />
        </InfoCotainer>
        <Upload />
        <Border />
      </Main>
      <SubHeader>
        <Layout>
          <ListBtn
            onClick={() => setCurrentView("list")}
            isActive={currentView === "list"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              width="17px"
              height="17px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </ListBtn>
          <CardBtn
            onClick={() => setCurrentView("grid")}
            isActive={currentView === "grid"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="15px"
              height="15px"
            >
              <path
                fillRule="evenodd"
                d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                clipRule="evenodd"
              />
            </svg>
          </CardBtn>
        </Layout>
        <Tabs>
          <Link to={`/${projectId}/project-files`}>
            <Tab isActive={matchProjectTab}>프로젝트 파일</Tab>
          </Link>

          <Link to={`/${projectId}/final-files`}>
            <Tab isActive={matchFinalTab}>최종 파일</Tab>
          </Link>
        </Tabs>
      </SubHeader>
      {matchProjectTab ? (
        <ProjectFiles currentView={currentView} />
      ) : matchFinalTab ? (
        <FinalFiles currentView={currentView} />
      ) : null}
    </Wrapper>
  );
};
export default Project;
