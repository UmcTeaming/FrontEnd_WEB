import styled from "styled-components";
import { useForm } from "react-hook-form";
import { getProject } from "../../api";
import axios from "axios";
import { useQuery } from "react-query";

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
  margin-left: 530px;
  margin-top: 5px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #194ac2;
  margin-right: 338px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  border-bottom: solid 1px #527ff5;
  width: 400px;
  height: 30px;
  outline: none;
`;

const Button = styled.button`
  color: white;
  background-color: #527ff5;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  width: 45px;
  height: 19px;
  font-family: "GmarketSans";
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

const AddMember = ({ onClose }) => {
  const { data: project } = useQuery(["project"], getProject);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (email) => {
    console.log(email);
    // axios.post(`/projects/${memberId}/${projectId}/invitations`, email);
  };
  const onValid = (data) => {
    onSubmit(data);
    reset();
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
          class="w-6 h-6"
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
            <Input type="email" {...register("email")} />
            <Button>추가</Button>
          </Label>
        </Form>
        <Members>
          {project?.members &&
            project?.members.map((member) => <Member>{member.email}</Member>)}
        </Members>
      </Container>
    </Wrapper>
  );
};
export default AddMember;
