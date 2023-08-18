import React from "react";
import "./Homeongoingproject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// datas > home.json데이터 가져와야 함

export const Homeongoingproject = () => {
  const items = [
    {
      projectName: "Trilia",
      projectStartDate: "2023-02-01",
      projectEndDate: "2022-09-21",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Fivespan",
      projectStartDate: "2023-06-21",
      projectEndDate: "2022-12-01",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Flashdog",
      projectStartDate: "2023-01-12",
      projectEndDate: "2023-02-17",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Project 1",
      projectStartDate: "2023-07-01",
      projectEndDate: "2023-07-31",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Project 1",
      projectStartDate: "2023-07-01",
      projectEndDate: "2023-07-31",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Project 1",
      projectStartDate: "2023-07-01",
      projectEndDate: "2023-08-31",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Project 1",
      projectStartDate: "2023-07-01",
      projectEndDate: "2023-08-31",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Project 1",
      projectStartDate: "2023-07-01",
      projectEndDate: "2023-08-31",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    }
  ]; 
  // const items = ['item1', 'item2', 'item3']; // 리스트에 내용이 있는 경우
  const maxItemsToShow = 8; // 최대로 보여줄 아이템 개수

  return (
    <div className="OngoingProjApp">
      <div className="OngoingProjtitle">
        <a href="/ongoingProject">진행중인 프로젝트&#62;</a>
      </div>
      <div className="OngoingProjsubtitle">
        프로젝트의 상태가 '진행중인' 프로젝트입니다
      </div>

      {items.length === 0 ? (
        // 진행 중인 프로젝트가 없을 때
        <div className="Ongoingempty">
          <div className="Ongoingemptycontent">
            <div className="emptytitle">
              <span className="emptytitlelineone">마감된</span>
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
            {items.slice(0, maxItemsToShow).map((item, index) => (
              <div key={index} className="content">
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
                <div className="contentimgs"></div>
                <div className="contenttxt">
                  <div className="contenttitle">{item.projectName}</div>
                  <div className="contentsubtitle">{`${item.projectStartDate} ~ ${item.projectEndDate}`}</div>
                  <div className="contentmember">팀원 정보를 알려주세요</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
