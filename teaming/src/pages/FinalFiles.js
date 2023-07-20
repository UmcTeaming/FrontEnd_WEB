import styled from "styled-components";
import CardFile from "../components/CardFile";
import ListFile from "../components/ListFile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.span`
  font-size: 16px;
  padding-left: 13px;
  margin-bottom: 20px;
`;

const ListFiles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CardFiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 27px;
  row-gap: 15px;
  margin-bottom: 40px;
`;

function FinalFiles(props) {
  const { isCard } = props;
  return (
    <Wrapper>
      <Container>
        <Date>2023.06.20</Date>
        {isCard ? (
          <CardFiles>
            <CardFile />
            <CardFile />
            <CardFile />
            <CardFile />
          </CardFiles>
        ) : (
          <ListFiles>
            <ListFile />
            <ListFile />
            <ListFile />
            <ListFile />
          </ListFiles>
        )}
      </Container>
    </Wrapper>
  );
}
export default FinalFiles;
