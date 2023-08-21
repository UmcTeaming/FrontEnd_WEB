import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homeongoingproject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// datas > home.json데이터 가져와야 함
// 데이터 적용 관련
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState } from "../../components/atom";

export const Homeongoingproject = () => {
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [progressProject, setprogressProject] = useState([]);

  useEffect(() => {
    // 여기서 외부 데이터를 가져오고 progressProject 상태를 설정하세요
    axios
      .get(`${process.env.REACT_APP_API_URL}/member/${memberId}/home`)
      .then((response) => {
        const data = response.data.data;

        // setMemberId(data.memberId);
        if (data.progressProject !== null)
          setprogressProject(data.progressProject);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const items = [
  //   {
  //     projectName: "Trilia",
  //     projectStartDate: "2023-02-01",
  //     projectEndDate: "2022-09-21",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   },
  //   {
  //     projectName: "Fivespan",
  //     projectStartDate: "2023-06-21",
  //     projectEndDate: "2022-12-01",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   },
  //   {
  //     projectName: "Flashdog",
  //     projectStartDate: "2023-01-12",
  //     projectEndDate: "2023-02-17",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   },
  //   {
  //     projectName: "Project 1",
  //     projectStartDate: "2023-07-01",
  //     projectEndDate: "2023-07-31",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   },
  //   {
  //     projectName: "Project 1",
  //     projectStartDate: "2023-07-01",
  //     projectEndDate: "2023-07-31",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   },
  //   {
  //     projectName: "Project 1",
  //     projectStartDate: "2023-07-01",
  //     projectEndDate: "2023-08-31",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   },
  //   {
  //     projectName: "Project 1",
  //     projectStartDate: "2023-07-01",
  //     projectEndDate: "2023-08-31",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   },
  //   {
  //     projectName: "Project 1",
  //     projectStartDate: "2023-07-01",
  //     projectEndDate: "2023-08-31",
  //     projectStatus: "ING",
  //     member_name: "팀원 정보를 알려주세요",
  //   }
  // ];

  const maxItemsToShow = 8; // 최대로 보여줄 아이템 개수

  return (
    <div className="OngoingProjApp">
      <div className="OngoingProjtitle">
        <Link to="/ongoingProject">진행중인 프로젝트 &#62;</Link>
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
                <Link to={`/${item.projectId}/final-files`}>
                  {item.projectStatus === "ING" ? (
                    <span className="contentprogress">
                      진행중{" "}
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ color: "blue" }}
                      />
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
                    <div className="contenttitle">{item.projectName}</div>
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
