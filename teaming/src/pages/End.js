import styled from "styled-components";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
  color: white;
  font-size: 12px;
  margin-bottom: 10px;
  svg {
    margin-right: 3px;
  }
  margin-left: 380px;
  margin-bottom: 45px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Date = styled.div`
  text-align: center;
  color: white;
  font-size: 15px;
  padding-bottom: 3px;
  margin-bottom: 11px;
`;

const Calendars = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;

const CalendarItem = styled(Calendar)`
  font-family: "GmarketSans";

  border: none;

  .react-calendar__month-view__weekdays__weekday abbr {
    font-weight: 500;
    text-decoration: none;
    border-bottom: none;
  }

  .react-calendar__month-view__weekdays {
    background: rgba(151, 151, 151, 0.2);
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
  a {
    text-decoration: none;
    color: white;
    font-size: 10px;
    font-weight: 700;
    font-family: "GmarketSans";
  }
`;

const End = () => {
  const formatShortWeekday = (locale, date) => {
    const options = { weekday: "short" };
    return new Intl.DateTimeFormat(locale, options).format(date).slice(0, 1);
  };
  return (
    <Wrapper>
      <Main>
        <Path>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
            width="12px"
            height="12px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          &gt;진행중인 프로젝트&gt; OO교양 조별과제
        </Path>
        <Col>
          <Illust>
            <Title>수고하셨습니다!</Title>
            <Description>
              종료된 프로젝트는 포트폴리오에 저장됩니다.
            </Description>
            <Img src="../img/close.png" />
          </Illust>
          <Container>
            <Calendars>
              <CalendarContainer>
                <Date>2023.07.01</Date>
                <CalendarItem
                  locale="en-US"
                  formatShortWeekday={formatShortWeekday}
                />
              </CalendarContainer>
              <CalendarContainer>
                <Date>2023.08.29</Date>
                <CalendarItem
                  locale="en-US"
                  formatShortWeekday={formatShortWeekday}
                />
              </CalendarContainer>
            </Calendars>
            <Button>
              <Link to="/">프로젝트 종료하기</Link>
            </Button>
          </Container>
        </Col>
      </Main>
    </Wrapper>
  );
};
export default End;
