import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import { useQuery } from "react-query";
import { getProject } from "../../api";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { memberIdState } from "../../components/atom";

const Wrapper = styled.div`
  font-family: "GmarketSans";
`;

const Main = styled.div`
  background: linear-gradient(rgba(24, 74, 206, 1), transparent);
  padding: 45px 0 300px;
  display: flex;
  flex-direction: column;
`;

const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: white;
  font-size: 12px;
  margin-bottom: 45px;
  padding-left: 23em;
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Illust = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 414px;
  height: 280px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 5px;
`;

const Description = styled.span`
  font-size: 8px;
  color: white;
  padding-right: 30px;
`;

const Img = styled.img`
  position: absolute;
  width: 414px;
  height: 273px;
  top: 25px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const Date = styled.div`
  text-align: center;
  color: white;
  font-size: 15px;
  text-decoration: underline;
  text-underline-position: under;
  padding-bottom: 3px;
  margin-bottom: 11px;
`;

const Calendars = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CalendarItem = styled(Calendar)`
  font-family: "Pretendard";

  border: none;
  width: 231px;

  .react-calendar__tile--active {
    color: white !important;
    background-color: #527ff5;
    border-radius: 16px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    font-size: 11px;
    font-weight: 500;
    text-decoration: none;
    border-bottom: none;
  }

  .react-calendar__month-view__weekdays {
    background: #f5f7fa;
  }

  .react-calendar__navigation {
    margin: 0;
    height: 40px;
    font-size: 14px;
  }

  .react-calendar__month-view__days {
    font-size: 11px;
    padding: 5px;
  }

  .react-calendar__month-view__days > button {
    margin: 0;
    padding: 0;
    height: 32px;
  }

  .react-calendar__tile {
    color: #494e50;
  }

  .react-calendar__tile--now {
    border-radius: 16px;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 212px;
  height: 30px;
  background-color: #527ff5;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  font-size: 10px;
  font-weight: 700;
  font-family: "GmarketSans";
`;

const End = () => {
  const memberId = useRecoilValue(memberIdState);
  const { projectId } = useParams();
  const { data: project } = useQuery(["project"], () =>
    getProject(memberId.toString(), projectId.toString())
  );

  const formatDate = (date) => {
    if (date === undefined) {
      return "";
    } else {
      return date.replace(/-/g, ".");
    }
  };
  const formatShortWeekday = (locale, date) => {
    const options = { weekday: "short" };
    return new Intl.DateTimeFormat(locale, options).format(date).slice(0, 1);
  };
  const onClose = () => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/status`,
        {
          project_status: "END",
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Wrapper>
      <Main>
        <Path>
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
          &gt;<Link to="/onGoingProject">진행중인 프로젝트</Link>&gt;
          <Link to={`/${projectId}/project-files`}>{project?.name}</Link> &gt;
          <span>프로젝트 마감</span>
        </Path>
        <Col>
          <Illust>
            <Title>수고하셨습니다!</Title>
            <Description>
              종료된 프로젝트는 포트폴리오에 저장됩니다.
            </Description>
            <Img src="../img/finalImg/final_img.png" />
          </Illust>
          <Container>
            <Calendars>
              <CalendarContainer>
                <Date>{formatDate(project?.startDate)}</Date>
                <CalendarItem
                  next2Label={null}
                  prev2Label={null}
                  locale="en-US"
                  formatShortWeekday={formatShortWeekday}
                  value={project?.startDate}
                />
              </CalendarContainer>
              <span style={{ color: "white" }}>~</span>
              <CalendarContainer>
                <Date>{formatDate(project?.endDate)}</Date>
                <CalendarItem
                  next2Label={null}
                  prev2Label={null}
                  locale="en-US"
                  formatShortWeekday={formatShortWeekday}
                  value={project?.endDate}
                />
              </CalendarContainer>
            </Calendars>
            <Link to="/portfolio">
              <Button onClick={onClose}>프로젝트 종료하기</Button>
            </Link>
          </Container>
        </Col>
      </Main>
    </Wrapper>
  );
};
export default End;
