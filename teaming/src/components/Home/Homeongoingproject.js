import React from "react";
import "./Homeongoingproject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const Homeongoingproject = () => {
  const items = ["item1", "item2", "item3"]; // 리스트가 비어있는 경우
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
                <span className="contentprogress">
                  진행 중
                  <FontAwesomeIcon className="progressicon" icon={faCircle} style={{ color: "blue" }}/>
                </span>
                <div className="contentimgs"></div>
                <div className="contenttxt">
                  <div className="contenttitle">프로젝트 이름을 적어주세요</div>
                  <div className="contentsubtitle">프로젝트 진행 날짜를 적어주세요</div>
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
