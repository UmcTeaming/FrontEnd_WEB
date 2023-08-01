import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getComments } from "../api";
import axios from "axios";

const Wrapper = styled.div`
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
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 12px;
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
  flex-direction: column;
  justify-content: flex-end;
`;

const CommentContainer = styled.div`
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

const Comment = () => {
  const [value, setValue] = useState("");
  const { data: comments } = useQuery(["comments"], getComments);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const clickedCancle = () => {
    setValue("");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    /* axios
      .post(`/files/${fileId}/${memberId}/comments`, {
        content: value,
      })
      .then((res) => console.log(res)); */

    setValue("");
  };

  const formatTime = (dateString) => {
    const date = new window.Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    let amPm = "오전";
    if (hours >= 12) {
      amPm = "오후";
      hours %= 12;
    }
    if (hours === 0) hours = 12;

    return `${year}. ${month}. ${day} ${amPm} ${hours} : ${minutes}`;
  };

  return (
    <Wrapper>
      <AddComment>
        <MyImg />
        <Input value={value} onChange={onChange} placeholder="댓글 추가..." />
      </AddComment>
      <Buttons>
        <CancleBtn onClick={clickedCancle}>취소</CancleBtn>
        <AddBtn onClick={onSubmit}>댓글</AddBtn>
      </Buttons>
      <Border />
      <Comments>
        {comments?.map((comment) => (
          <CommentContainer>
            <Profil>
              <UserImg src={comment.profile_image} />
              <p>{comment.writer}</p>
            </Profil>
            <Content>{comment.content}</Content>
            <Date>{formatTime(comment.create_at)}</Date>
          </CommentContainer>
        ))}
      </Comments>
    </Wrapper>
  );
};
export default Comment;
