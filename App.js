import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <HeaderView style={{ paddingHorizontal: 20 }}>
        <HeaderWorkText>Work</HeaderWorkText>
        <HeaderTravelText>Travel</HeaderTravelText>
      </HeaderView>
      <TitleText>Open up App.js to start working on your app!</TitleText>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const HeaderView = styled.View`
  flex-direction: row;
  margin-top: 100px;
`;

const HeaderWorkText = styled.Text`
  color: white;
`;

const HeaderTravelText = styled.Text`
  color: white;
`;

const TitleText = styled.Text`
  color: crimson;
`;
