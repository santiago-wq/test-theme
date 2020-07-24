import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import SubMenu from "./subMenu";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({ state, libraries }) => {
const   menus  = state.source.data['menus/8/'];
  // console.log(state.source.data['menus/8/']);
  // console.log(menus.items);  

  return(
    <NavContainer>
    {menus.items.map((item) => {
      const pid           = item.id,
            parent        = item.parent,
            loner         = parent === 0,
            name          = item.title.rendered,
            link          = libraries.source.normalize(item.url),
            //TODO - Refinar comportamiento de isCurrentPage
            isCurrentPage = state.router.link.includes(link) && link !== '/' && link !== '/en/'  ;

      
      if(loner){
        return (
        <NavItem key={pid}>
        
        {parent !== 0 ? "" : <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>}
          {menus.items.map((item) => {
              let c = 0;
              if(pid === item.parent){
                return(
                  <SubMenu key={++c} link={libraries.source.normalize(item.url)} name={item.title.rendered} id={item.id}/>
                );
              }
          })}
        </NavItem>
      ); 
      }
    })}
  </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  &:hover{
    & .subMenu{
      display:flex;
    }
  }
  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
