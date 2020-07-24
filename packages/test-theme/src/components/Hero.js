import React from "react";
import { connect } from "frontity"


const Hero = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
    return(
        <h1>{page.acf.titulo}</h1>
    );
};



export default connect (Hero)