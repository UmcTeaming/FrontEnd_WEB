import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homeongoingproject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { GoChevronRight } from "react-icons/go";

// datas > home.json데이터 가져와야 함
// 데이터 적용 관련
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState } from "../../components/atom";

//========================================================================
// 메인 페이지의 진행 중인 프로젝트 관련 컴포넌트

export const Homeongoingproject = () => {
  // Recoil을 이용한 회원 정보 상태 관리
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  // 진행 중인 프로젝트 정보를 저장하는 상태 
  const [progressProject, setprogressProject] = useState([]);

  useEffect(() => {
    // 여기서 외부 데이터를 가져오고 progressProject 상태를 설정하세요
    axios
      .get(`${process.env.REACT_APP_API_URL}/member/${memberId}/home`)
      .then((response) => {
        const data = response.data.data;

        // 가져온 데이터로 진행 중인 프로젝트 상태 설정
        if (data.progressProject !== null)
          setprogressProject(data.progressProject);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const maxItemsToShow = 8; // 최대로 보여줄 아이템 개수

  return (
    <div className="OngoingProjApp">
      {/* 진행 중인 프로젝트 타이틀과 "진행중인프로젝트"페이지 링크 */}
      <div className="OngoingProjtitle">
        <Link to="/ongoingProject">
          <p>진행 중인 프로젝트</p>
        </Link>
        <span className="ml-2">
          <GoChevronRight size="27" />
        </span>
      </div>
      <div className="OngoingProjsubtitle">
        프로젝트의 상태가 '진행중인' 프로젝트입니다
      </div>

      {progressProject.length === 0 ? (
        // 진행 중인 프로젝트가 없을 때
        <div className="Ongoingempty">
          <div className="Ongoingemptycontent">
            <div className="emptytitle">
              <span className="emptytitlelineone">진행 중인</span>
              <br />
              프로젝트가 없어요
            </div>
            <div className="emptyimg"></div>
            <div className="emptysubtitle">
              <span className="emptysubtitlelineone">프로젝트를 마감하면</span>
              <br />
              지난 활동들을 모아볼 수 있어요!
            </div>
          </div>
        </div>
      ) : (
        // 진행 중인 프로젝트가 있을 때
        <div className="OngoingProjContent">
          <div className="grid-container">
            {progressProject.slice(0, maxItemsToShow).map((item, index) => (
              <div key={index} className="content">
                <Link to={`/${item.projectId}/project-files`}>
                  {/* 프로젝트의 상태(진행중 or 마감)와 아이콘을 표시 */}
                  {item.projectStatus === "ING" ? (
                    <span className="contentprogress">
                      진행중 <FontAwesomeIcon icon={faCircle} color="#527FF5" />
                    </span>
                  ) : (
                    <span className="contentprogress">
                      마감{" "}
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ color: "yellow" }}
                      />
                    </span>
                  )}
                  <div className="contentimgs">
                    {item.projectImage && (
                      <img src={item.projectImage} alt={item.projectName} />
                    )}
                  </div>
                  <div className="contenttxt">
                    <div className="contenttitle">
                      {" "}
                      {item.projectName.length > 9
                        ? `${item.projectName.slice(0, 9)}...`
                        : item.projectName}
                    </div>
                    <div className="contentsubtitle">{`${item.projectStartDate} ~ ${item.projectEndDate}`}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
