import styled from "styled-components/native";
import { colorTheme } from "./colors";
import { useState } from "react";

export default function App() {
  const [header, setHeader] = useState("work");

  const travel = () => setHeader("travel");
  const work = () => setHeader("work");

  console.log(header);

  return (
    <Container>
      <HeaderView style={{ paddingHorizontal: 20 }}>
        <TouchableSection onPress={work}>
          <WorkText header={header}>Work</WorkText>
        </TouchableSection>
        <TouchableSection onPress={travel}>
          <TravelText header={header}>Travel</TravelText>
        </TouchableSection>
      </HeaderView>
      <TitleText>Open up App.js to start working on your app!</TitleText>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${colorTheme.background};
`;

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  font-size: 44px;
`;

const TouchableSection = styled.TouchableOpacity``;

const HeaderText = styled.Text`
  font-size: 48px;
  font-weight: 600;
`;

const WorkText = styled(HeaderText)`
  color: ${({ header }) => (header === "work" ? "white" : colorTheme.grey)};
`;

const TravelText = styled(HeaderText)`
  color: ${({ header }) => (header === "travel" ? "white" : colorTheme.grey)};
`;

const TitleText = styled.Text`
  color: crimson;
`;
