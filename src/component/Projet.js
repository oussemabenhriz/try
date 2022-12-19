import React from "react";

import Projet1 from "./projet/Projet1.js";
import Projet2 from "./projet/Projet2.js";
import Projet3 from "./projet/Projet3.js";
import Projet4 from "./projet/Projet4.js";


const Projet = () =>{
    return(
       <div id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        <Projet1 />
        <Projet2 />
        <Projet3 />
        <Projet4 />
        </div>
       </div>
    )
}



export default Projet
