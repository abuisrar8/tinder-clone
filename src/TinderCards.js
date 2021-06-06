import { SwipeableDrawer } from '@material-ui/core'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards'

function TinderCards() {
    const [people, setpeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://pbs.twimg.com/media/EtiOegrVEAMCgZE?format=jpg&name=large"
        },
        {
            name: 'Jeff Bezos',
            url: "https://pbs.twimg.com/media/EtiOegrVEAMCgZE?format=jpg&name=large"
        }
    ]);

    const swiped =(direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame =(name) => {
        console.log(name + " left the screen!");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardCointainer">
            {    
            people.map(
                    (person)=>(
                        <TinderCard
                            className="swipe"
                            key="{person.name}"
                            preventSwipe={["up","down"]}
                            onSwipe={(dir)=>SwipeableDrawer(dir,person.name)}
                            oncardLeftScreen={() => outOfFrame(person.name)}
                            >

                        </TinderCard>
                        
                    )
                )
            }

            </div>
          
            
        </div>
    )
}

export default TinderCards
