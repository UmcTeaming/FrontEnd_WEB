import React from "react";
import "./Homeportfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// datas > home.json데이터 가져와야 함

export const Homeportfolio = () => {
  const items = [
    {
      projectName: "Skynoodle",
      projectStartDate: "2022-09-08",
      projectEndDate: "2023-07-13",
      projectStatus: "END",
      member_name: "이 정보 어디서 가져와",
    },
    {
      projectName: "Jaxbean",
      projectStartDate: "2023-05-16",
      projectEndDate: "2023-06-13",
      projectStatus: "END",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Flashdog",
      projectStartDate: "2023-03-26",
      projectEndDate: "2023-04-14",
      projectStatus: "END",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Eadel",
      projectStartDate: "2023-03-26",
      projectEndDate: "2023-04-14",
      projectStatus: "END",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Thoughtbridge",
      projectStartDate: "2023-05-12",
      projectEndDate: "2023-01-26",
      projectStatus: "END",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "PQuinu",
      projectStartDate: "2022-09-05",
      projectEndDate: "2022-11-20",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Voomm",
      projectStartDate: "2022-11-26",
      projectEndDate: "2022-11-12",
      projectStatus: "END",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "Yabox",
      projectStartDate: "2022-10-05",
      projectEndDate: "2022-08-18",
      projectStatus: "END",
      member_name: "팀원 정보를 알려주세요",
    }
  ]; 
  // const items = ['item1', 'item2', 'item3']; // 리스트에 내용이 있는 경우
  const maxItemsToShow = 8; // 최대로 보여줄 아이템 개수

  return (
    <div className="PortfolioApp">
      <div className="Portfoliotitle">
        <a href="/portfolio">포트폴리오 &#62;</a>
      </div>
      <div className="Portfoliosubtitle">
        000님의 프로젝트를 한눈에 모아보세요!
      </div>

      {items.length === 0 ? (
        // 진행 중인 프로젝트가 없을 때
        <div className="Portfolioempty">
          <div className="Portfolioemptycontent">
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
        <div className="Portfoliocontent">
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
