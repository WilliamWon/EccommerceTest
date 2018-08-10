import React, { Component } from "react";
import styled from "styled-components";

const NavMain = styled.div`
  height: 90px;
  width: 100%;
  /* background: pink; */
  box-sizing: border-box;
  padding: 20px 40px;
`;
const InnerNav = styled.div`
  height: 100%;
  width: 100%;
  background: lightblue;
`;
class NavBar extends Component {
  render() {
    return (
      <NavMain>
        <InnerNav>Nav</InnerNav>
      </NavMain>
    );
  }
}

export default NavBar;
