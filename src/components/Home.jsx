import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Header from "./Header";

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        img="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        img="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        img="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        img="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarentee"
        img="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solor Roof Costs Less Than a New Roof Plus Solar Panels"
        img="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        img="accessories.jpg"
        leftButtonText="Shop Now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
