import React, { Component } from "react";
import styled from "styled-components";

const BarBody = styled.div`
  width: 100%;
  height: 35px;
  background: lavender;
`;
class LoginBar extends Component {
  render() {
    return <BarBody />;
  }
}

export default LoginBar;
