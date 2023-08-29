import styled from "styled-components";
import { useForm } from "react-hook-form";
import { getProject } from "../../api";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { memberIdState, tokenState } from "../atom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 558px;
  min-height: 252px;
  background-color: white;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
`;

const Delete = styled.div`
  margin-left: 520px;
  margin-top: 10px;
  margin-bottom: 35px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #194ac2;
  margin-right: 352px;
  margin-bottom: 8px;
`;

const Form = styled.form`
  margin-bottom: 30px;
`;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: solid 1px #527ff5;
  border-radius: 5px;
  width: 401px;
  height: 36px;
  outline: none;
  font-size: 11px;
  padding-left: 5px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 11px;
  }
`;

const Button = styled.button`
  color: #527ff5;
  background-color: white;
  border: solid 1px #527ff5;
  border-radius: 30px;
  font-size: 12px;
  width: 38.8px;
  height: 19px;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 5px;
`;

const Members = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 5px;
`;

const Member = styled.span`
  font-size: 11px;
  color: #527ff5;
  border: solid 1px #527ff5;
  border-radius: 30px;
  height: 19px;
  width: 200px;
  text-align: center;
  vertical-align: middle;
`;

const Error = styled.div`
  font-size: 11px;
  color: rgba(255, 79, 79, 0.5);
  margin-top: 3px;
  padding-left: 10px;
`;

const AddMember = ({ onClose }) => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const memberId = useRecoilValue(memberIdState);
  const accessToken = useRecoilValue(tokenState);
  const { projectId } = useParams();
  const { data: project } = useQuery(["project"], () =>
    getProject(memberId.toString(), projectId.toString(), accessToken)
  );
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (email) => {
    console.log(email);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/invitations`,
        email
      )
      .then((response) => {
        console.log(response);
        queryClient.invalidateQueries("project");
      })
      .catch((error) => setInvalidEmail(true));
  };

  const onValid = (email) => {
    console.log(email);

    onSubmit(email);
    reset();
    setInvalidEmail(false);
  };

  return (
    <Wrapper>
      <Delete onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#bcbcbc"
          width="20px"
          height="20px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Delete>
      <Container>
        <Title>팀원 추가</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <Label>
            <Input
              {...register("email", { required: true })}
              placeholder="이메일을 입력해주세요."
            />
            {errors.email?.type === "required" || invalidEmail ? (
              <Error>
                이메일에 오류가 있거나 팀원이 티밍에 가입하지 않았어요.
              </Error>
            ) : null}
            <Button>추가</Button>
          </Label>
        </Form>
        <Members>
          {project.memberListDtos &&
            project.memberListDtos.map((member) => (
              <Member>{member.email}</Member>
            ))}
        </Members>
      </Container>
    </Wrapper>
  );
};
export default AddMember;
