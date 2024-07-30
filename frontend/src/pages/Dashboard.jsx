import  { useState } from 'react'
import TinderCard from 'react-tinder-card'

const Dashboard = ()=>{

    const characters = [{
        name: 'Richard Hendricks',
        url: './img/richard.jpg'
      },
      {
        name: 'Erlich Bachman',
        url: './img/erlich.jpg'
      },
      {
        name: 'Monica Hall',
        url: './img/monica.jpg'
      },
      {
        name: 'Jared Dunn',
        url: './img/jared.jpg'
      },
      {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg'
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
            {/* <ChatContainer/> */}
            <div className="swipe-container">
                <div className='cardContainer'>
                    {characters.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                        <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                    )}
                </div>
                {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
            </div>
        </div>
    )
}

export {Dashboard};

