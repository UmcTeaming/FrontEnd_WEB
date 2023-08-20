import styled from "styled-components";
import { Link, useMatch, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
import { getProject } from "../../api";
import { useQuery } from "react-query";
import { memberIdState, tokenState } from "../atom";

const Wrapper = styled.div`
  display: flex;
  background-color: #fafafa;
  width: 754px;
  height: 260px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  align-items: center;
  font-family: "GmarketSans";
`;

const ImgContainer = styled.div`
  width: 356px;
  height: 200px;
  margin-right: 20px;
  margin-left: 29px;
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Img = styled.img`
  width: 356px;
  height: 200px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 11px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Description = styled.div`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 4px;
  & p {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const UserContainer = styled.div`
  display: flex;
`;

const Users = styled.div`
  display: flex;
  gap: 13px;
  max-width: 192px;
  margin-bottom: 15px;
  margin-right: 13px;
  flex-wrap: nowrap;
  padding-bottom: 5px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #fafafa;
  }
  &::-webkit-scrollbar-thumb {
    background: #fafafa;
    border-radius: 3px;
  }
  &:hover {
    &::-webkit-scrollbar {
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const User = styled.img`
  flex: 0 0 auto;
  width: 37px;
  height: 37px;
  background-color: #d9d9d9;
  border-radius: 18px;
`;

const AddUser = styled.button`
  width: 37px;
  height: 37px;
  background-color: white;
  border: 3px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;

const Check = styled.button`
  background-color: white;
  color: #527ff5;
  width: 146px;
  height: 33px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 12px;
  border: 2px solid #527ff5;
  cursor: pointer;
  font-family: "GmarketSans";
`;

const Close = styled.button`
  background-color: ${(props) =>
    props.status === "ING"
      ? "#527ff5"
      : props.status === "END"
      ? "#d3d3d3"
      : null};
  color: white;
  width: 145px;
  height: 33px;
  border-radius: 23px;
  font-weight: 700;
  font-size: 12px;
  border: 2px solid
    ${(props) =>
      props.status === "ING"
        ? "#527ff5"
        : props.status === "END"
        ? "#d3d3d3"
        : null};
  cursor: pointer;
  text-decoration: none;
  font-family: "GmarketSans";
`;

const Setting = styled.div`
  padding-bottom: 220px;
  padding-left: 16px;
`;

const ProjectInfo = ({ onOpen }) => {
  const memberId = useRecoilValue(memberIdState);
  const accessToken = useRecoilValue(tokenState);
  const { projectId } = useParams();
  const { data: project } = useQuery(["project"], () =>
    getProject(memberId.toString(), projectId.toString(), accessToken)
  );

  const formatDate = (date) => {
    if (date === undefined) {
      return "";
    } else {
      return date.split(" ")[0].replace(/-/g, ".");
    }
  };

  return (
    <Wrapper>
      <ImgContainer>
        <Circle>
          <svg width="15px" height="15px">
            <circle
              cx="7"
              cy="7"
              r="7"
              fill={
                project?.projectStatus === "ING"
                  ? "#527ff5"
                  : project?.projectStatus === "END"
                  ? "#ffd008"
                  : null
              }
            />
          </svg>
        </Circle>
        <Img
          src={
            project?.image === null
              ? "../img/projectImg/project_img.jpg"
              : project?.image
          }
        />
      </ImgContainer>
      <Details>
        <Description>
          <Title>{project?.name}</Title>
          <p>
            진행 기간: {formatDate(project?.startDate)} ~
            {formatDate(project?.endDate)}
          </p>
          <p>
            상태:{" "}
            {project?.projectStatus === "ING"
              ? "진행중"
              : project?.projectStatus === "END"
              ? "마감"
              : null}
          </p>
        </Description>
        <UserContainer>
          <Users>
            {project?.memberListDtos.map((member) => (
              <User
                src={
                  member?.member_image === null
                    ? "../img/profileImg/profile_img.jpg"
                    : member?.member_image
                }
              />
            ))}
          </Users>
          <AddUser>
            <svg
              onClick={onOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 25 25"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </AddUser>
        </UserContainer>
        <Buttons>
          <Link to="/calendar">
            <Check>팀플 일정 확인하기</Check>
          </Link>
          <Link to={`/${projectId}/end`}>
            {project.projectStatus === "END" ? (
              <Close status={project.projectStatus} disabled>
                프로젝트 마감하기
              </Close>
            ) : project.projectStatus === "ING" ? (
              <Close status={project.projectStatus}>프로젝트 마감하기</Close>
            ) : null}
          </Link>
        </Buttons>
      </Details>
      <Setting>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="rgba(17, 24, 39, 0.2)"
            width="18px"
            height="18px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
      </Setting>
    </Wrapper>
  );
};
export default ProjectInfo;
