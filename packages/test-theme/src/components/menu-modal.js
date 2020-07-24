import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state,libraries }) => {
  const   menus  = state.source.data['menus/8/'];
  

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {menus.items.map((item) => {
          const pid           = item.id,
                parent        = item.parent,
                loner         = parent === 0,
                name          = item.title.rendered,
                link          = libraries.source.normalize(item.url),
                isCurrentPage = state.router.link.includes(link) && link !== '/' && link !== '/en/'  ;
          if(loner){
              return (
                  <MenuLink key={pid} link={link} aria-current={state.router.link === link ? "page" : undefined} >{name}</MenuLink>
            ); 
          }
        })}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #1f38c5;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
