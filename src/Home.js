import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import ValImage from './ValMainImage.jpg';


// the main page with the little intro 
function Home(){
    return(
        
        <div>
            <h1> Abby's Freshly Baked Valorant API </h1>
            <img src={ValImage} width = "430" height = "280" alt='val image' />
            <p>Welcome to my website! I have used a published API from one of my favorite video games, Valorant. If you click on the hyper link titled Agents, you will be directed to a random character from the Valorant game! </p> 
            <p>You'll be able to find the name of each character, their role on the team, their different abilities, and a voiceline! To get a new character, just refresh the agents page!</p>
         </div>

    )
       

        
        
    
}

export default Home; 