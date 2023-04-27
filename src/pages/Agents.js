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

          slot1: '', 
          slot2: '', 
          slot3: '', 
          slot4: '', 

          slot1name: '', 
          slot2name: '', 
          slot3name: '', 
          slot4name: '',
          
          slot1Desc: '',
          slot2Desc: '', 
          slot3Desc: '', 
          slot4Desc: '',  

          description: '',
       
        })

        useEffect(() => {
          axios.get('https://valorant-api.com/v1/agents')
            .then(res => {
              var randomNum= Math.floor(Math.random()*res.data.data.length) 
              console.log(randomNum)
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

                  // slot names 
                  slot1: res.data.data[CharNum].abilities[0].slot, 
                  slot2: res.data.data[CharNum].abilities[1].slot, 
                  slot3: res.data.data[CharNum].abilities[2].slot, 
                  slot4: res.data.data[CharNum].abilities[3].slot, 

                  // slot names 
                  slot1name: res.data.data[CharNum].abilities[0].displayName, 
                  slot2name: res.data.data[CharNum].abilities[1].displayName, 
                  slot3name: res.data.data[CharNum].abilities[2].displayName, 
                  slot4name: res.data.data[CharNum].abilities[3].displayName,

                  slot1Desc: res.data.data[CharNum].abilities[0].description, 
                  slot2Desc: res.data.data[CharNum].abilities[1].description, 
                  slot3Desc: res.data.data[CharNum].abilities[2].description, 
                  slot4Desc: res.data.data[CharNum].abilities[3].description, 
                  
                  description: res.data.data[CharNum].description,

                  
               });


               
               console.log(Data.voiceLine);
               console.log('gatheredvoiceline',res.data.data[CharNum].voiceLine.mediaList[0].wave);
               setSavedVoiceLine(res.data.data[CharNum].voiceLine.mediaList[0].wave);
               
          
              })

            

            .catch(err => {
              console.log(err);
            })
        }, [])
      
        return (

          
  

          
//This is the big container - the 'one parent' 
          <div> 
            
            <h1> {Data.name}</h1>
            <h1> {Data.role}</h1>
             
            <div class="container">
              <div class="pcontainer">
                  <p>{Data.description}</p>
              </div>
              

              <img 
              src={Data.photoUrl} 
              width = "450" 
              height = "450" 
              alt={Data.name} />
              
              <div class="abilcontainer"> 
                <h1>Abilities:</h1> 
              {/* all of the names of the abilities:  */}
              <div>
                <span style={{ fontWeight:'bold'}}> {Data.slot1name + ": "}</span>
                {Data.slot1Desc}
              </div>
              <div>
                <span style={{ fontWeight:'bold'}}> {Data.slot2name + ": "}</span>
                {Data.slot2Desc}
              </div>
              <div>
                <span style={{ fontWeight:'bold'}}> {Data.slot3name + ": "}</span>
                {Data.slot3Desc}
              </div>
              <div>
                <span style={{ fontWeight:'bold'}}> {Data.slot4name + ": "}</span>
                {Data.slot4Desc}
              </div>
                
              </div>
            </div>
          
            <audio controls>
                {savedVoiceLine && (
                  <source src= {savedVoiceLine} />  
                )}
            </audio>
          </div>
        );


      } 

     


export default Agents; 