import React, { useEffect, useState } from "react";
import axios from 'axios';

const Agents = () => {
    

        const [Data, setData] = useState({
          name: '',
          role: '',
          abilities: '', 
          photoUrl: '',
          voiceLine: "",
      
      
        })
        useEffect(() => {
          axios.get('https://valorant-api.com/v1/agents')
            .then(res => {
              console.log('Response from main API: ', res) // All info
              console.log('Valorant Data: ', res.data.data) // just the data 
              console.log('portraitURL', res.data.data[0].bustPortrait);
              console.log('voiceLine', res.data.data[0].voiceLine.mediaList[0].wave) 
              console.log('abilities', res.data.data[0].abilities)
              
           
              
              
              setData({ 
                  name: res.data.data[0].displayName,
                  role: res.data.data[0].role.displayName,
                  abilities: '', 
                  photoUrl: res.data.data[0].bustPortrait,
                  voiceLine: res.data.data[0].voiceLine.mediaList[0].wave,  

               });
            })
            .catch(err => {
              console.log(err);
            })
        }, [])
        let sound = "https://media.valorant-api.com/sounds/464327068.wav";
       //let sound = Data.voiceLine;
        console.log('sound', sound); 
        console.log('from api', Data.voiceLine); 
        console.log(typeof sound)
        if(sound === Data.voiceLine)
        {
          console.log('yay');
        }
        return (

          <div>
            <h1> Name: {Data.name}</h1>
            <h1> Role: {Data.role}</h1>
            <img src={Data.photoUrl} width = "300" height = "280" alt={Data.name} />
            {/* <audio controls> 
              <source src = {Data.voiceLine} type = "audio/wav" />
            
            </audio> */}
            <audio controls>
              < source src= {sound}/>
          {/* <source src= "https://media.valorant-api.com/sounds/464327068.wav" /> */}
            </audio>
      
            
      
          </div>
        );

        console.log(Data); 

      } 

     
    
    
    



export default Agents; 