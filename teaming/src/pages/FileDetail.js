import styled from "styled-components";
import FileInfo from "../components/FileInfo";
import FileViewer from "../components/FileViewer";

const Wrapper = styled.div`
  font-family: "GmarketSans";
`;

const Main = styled.div`
  background: linear-gradient(rgba(3, 63, 255, 0.5), transparent);
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoCotainer = styled.div`
  margin-bottom: 53px;
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
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  gap: 27px;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddComment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const MyImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 276px;
  height: 43px;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-family: "GmarketSans";
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
`;

const CancleBtn = styled.button`
  color: #527ff5;
  width: 48px;
  height: 28px;
  border: solid 1px #527ff5;
  margin: 0;
  padding: 0;
  background-color: white;
  border-radius: 30px;
  font-family: "GmarketSans";
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const AddBtn = styled.button`
  color: white;
  width: 48px;
  height: 28px;
  border: solid 1px #527ff5;
  margin: 0;
  padding: 0;
  background-color: #527ff5;
  border-radius: 30px;
  font-family: "GmarketSans";
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const Border = styled.hr`
  width: 317px;
  border: solid 1.5px black;
  margin: 26px 0;
`;

const Comments = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 316px;
  height: 91px;
  margin-bottom: 7px;
`;

const Profil = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 7px;
  margin-left: 13px;
  p {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const UserImg = styled.img`
  width: 23px;
  height: 23px;
  background-color: #d9d9d9;
  border-radius: 12px;
  margin-right: 7px;
`;

const Content = styled.div`
  margin-left: 13px;
  font-size: 12px;
  width: 230px;
  height: 42px;
`;

const Date = styled.span`
  margin-left: 187px;
  font-size: 8px;
  color: rgba(0, 0, 0, 0.5);
`;

const Details = () => {
  return (
    <Wrapper>
      <Main>
        <InfoCotainer>
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
          <FileInfo />
        </InfoCotainer>
      </Main>
      <Col>
        <FileViewer />
        <CommentsContainer>
          <AddComment>
            <MyImg />
            <Input placeholder="댓글 추가..." />
          </AddComment>
          <Buttons>
            <CancleBtn>취소</CancleBtn>
            <AddBtn>댓글</AddBtn>
          </Buttons>
          <Border />
          <Comments>
            <Comment>
              <Profil>
                <UserImg />
                <p>카리나</p>
              </Profil>
              <Content>
                좋아요! pdf말고 word로 이수만 교수님께 전달 부탁드립니다!
              </Content>
              <Date>2023. 06. 20 오후 6 : 13</Date>
            </Comment>
          </Comments>
        </CommentsContainer>
      </Col>
    </Wrapper>
  );
};
export default Details;
