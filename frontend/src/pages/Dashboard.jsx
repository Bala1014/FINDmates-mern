import  { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { ChatContainer } from '../components/ChatContainer'




const Dashboard = ()=>{

    const characters = [{
        name: 'lewis hamilton',
        url: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/hamilton'
      },
      {
        name: 'max verstappen',
        url: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen'
      },
      {
        name: 'osama bin russel',
        url: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/russell'
      },
      {
        name: 'kartikeya dhaka',
        url: 'https://scontent.fdel3-4.fna.fbcdn.net/v/t39.30808-6/448360400_7983639345032776_2789577306498577247_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=b04a48&_nc_ohc=QHIAgoZK8P8Q7kNvgGANlvB&_nc_ht=scontent.fdel3-4.fna&gid=Aq8UCZE_fqLFNmc2D8c3mvv&oh=00_AYBjE1SOWSQ0-k8gu-Vpa30WATQDEhty7N4uHPQv5sl40w&oe=66B1B188'
      },
      { 
        name: 'charles leclerc',
        url: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/leclerc'
      }
  ]


  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

    return(
        <div className="dashboard">
            <ChatContainer/>
            <div className="swipe-container">
                <div className='card-container'>
                    {characters.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                        <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                    )}
                    <div className="swipe-info">
                      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
                    </div>
                </div>

            </div>
        </div>
    )
}

export {Dashboard};

