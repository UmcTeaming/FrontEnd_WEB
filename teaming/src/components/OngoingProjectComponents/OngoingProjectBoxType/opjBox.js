import React, {useState} from "react";
import "../../../pages/OngoingProject/OngoingProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FiTrash2 } from 'react-icons/fi';
import styled from "styled-components";
import axios from "axios";

const Delete = styled.button`
  margin-bottom:5px;
  color: ${props => props.isDeleting ? "red" : "inherit"};
  cursor: ${props => (props.isDeleting ? "not-allowed" : "pointer")}; // 커서 변경
`;

const OPjBox = ({ project }) => {
  const defaultImage = "/img/projectImg/project_img.jpg"; // 기본 이미지 경로 설정
  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = (e) => {
    e.preventDefault();

    if (
      window.confirm(
        "삭제한 프로젝트는 되돌릴 수 없습니다. 그래도 삭제하시겠습니까? "
      )
    ) {
      console.log ("확인")
      setIsDeleting(true); // 삭제 진행 중임을 표시
      axios
        .delete(
          //`${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/files/${file.file_id}`
        )
        .then((response) => {
          //console.log(response);
          //if (matchProject) {
            //queryClient.invalidateQueries("project-files");
          //} else if (matchFinal) {
            //queryClient.invalidateQueries("final-files");
          //}
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setIsDeleting(false); // 삭제 완료 또는 실패 시 상태 변경
        });
    }
  };


  return (
    <Link to={`/${project.projectId}/project-files`}>
      <div className="box">
        <div className="thumbNail">
          <img
            className="thumbNailPic"
            src={project.projectImage || defaultImage} // 이미지가 null일 때 기본 이미지 사용
            alt={project.projectName}
          />
          <span className="progressing">
            <span className="circle ">
              <FontAwesomeIcon color="#527FF5" icon={faCircle} />
            </span>
          </span>
        </div>
        <div className="projectInfo">
          <p className="h4">{project.projectName}</p>
          <br />
          <p className="p">
            {project.projectStartDate}~{project.projectEndDate}
            <Delete onClick={onDelete} isDeleting={isDeleting}>
              <FiTrash2 size="19"/>
            </Delete>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OPjBox;
