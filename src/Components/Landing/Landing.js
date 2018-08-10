import React, { Component } from "react";
import styled from "styled-components";

const LandingBody = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: lavender;
`;

class Landing extends Component {
  render() {
    return (
      <LandingBody>
        <div>Landing</div>
      </LandingBody>
    );
  }
}

export default Landing;
