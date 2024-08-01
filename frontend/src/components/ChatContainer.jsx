import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";



const ChatContainer = ()=>{
    return (
        <div className="chat-container">
            <ChatHeader/>

            <div>
                <button className="option">matches</button>

                <button className="option">chat</button>
            </div>

            <MatchesDisplay/>
            <ChatDisplay/>


        </div>
    )
}

export {ChatContainer};