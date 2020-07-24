import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const SubMenu = ({ state, link ,name ,id }) => {
const   menus  = state.source.data['menus/8/'];
  // console.log(state.source.data['menus/8/']);
  // console.log(menus.items);  

  return(
        <NavItem key={id} className="subMenu">
          <TransitionBar >
          <Link link={link}>{name}</Link>
            <div className="mask"></div>
          </TransitionBar>
        </NavItem>
  );
};

export default connect(SubMenu);
const TransitionBar = styled.div`
  position:relative;
  width:100%;
  height:100%;
  padding: 0 16px;
  & .mask{
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:0%;
    background-color: #1f38c5;
    transition: all .5s;
    z-index:1;
  }
  & > a {
    position:relative;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    color:#1f38c5;
    transition: all .5s;
    z-index:2;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }
  &:hover{
    & .mask{
      width:100%;
    }
    & > a{
      color:white;
    }
  }
`;
const NavItem = styled.div`
  padding:0;
  color: #1f38c5;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  display:none;
  position:absolute;
  background:white;
`;
