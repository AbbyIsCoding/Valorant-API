import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';





const Agents = () => {



        const [savedVoiceLine, setSavedVoiceLine] = useState("")

        const [Data, setData] = useState({
          name: '',
          role: '',
          abilities: '',
          photoUrl: '',
          voiceLine: '',
          

        })

        useEffect(() => {
          axios.get('https://valorant-api.com/v1/agents')
            .then(res => {
              var randomNum= Math.floor(Math.random()*res.data.data.length) 
              console.log(randomNum)
              // console.log(randomNum); 
              var CharNum = randomNum; 
              console.log(CharNum);
              
              console.log('Response from main API: ', res) // All info
              console.log('Valorant Data: ', res.data.data) // just the data 
             
            
          
              setData({ 
                  name: res.data.data[CharNum].displayName,
                  role: res.data.data[CharNum].role.displayName,
                  abilities: res.data.data[CharNum].abilities[0].displayName + ", " + res.data.data[CharNum].abilities[1].displayName 
                  + ", " + res.data.data[CharNum].abilities[2].displayName + ", and " + res.data.data[CharNum].abilities[3].displayName,
                  photoUrl: res.data.data[CharNum].bustPortrait,
                  voiceLine: res.data.data[CharNum].voiceLine.mediaList[0].wave,  
               });

               console.log(Data.voiceLine);
               console.log('gatheredvoiceline',res.data.data[CharNum].voiceLine.mediaList[0].wave)
               setSavedVoiceLine(res.data.data[CharNum].voiceLine.mediaList[0].wave)
          
              })

            

            .catch(err => {
              console.log(err);
            })
        }, [])
      
        return (

          
  

          

          <div>
            
            {/* <button type="randomize" onclick=  >Click me!</button> */}
            <h1> Name: {Data.name}</h1>
            <h1> Role: {Data.role}</h1>
            <img src={Data.photoUrl} width = "300" height = "280" alt={Data.name} />
            
            <audio controls>
              {savedVoiceLine && (
                <source src= {savedVoiceLine} />  
              )}

            </audio>

            <h1>Abilities: {Data.abilities}</h1> 
          
            
      
          </div>
        );

        console.log(Data); 

      } 

     
    
    
    



export default Agents; 