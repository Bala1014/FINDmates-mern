import { useState } from "react";


const ChatInput = ()=>{
    const [TextArea,SetTextArea] = useState(null);
    return (
            <div className="chat-input">
                <textarea name="" id="" value={""} onChange={(e) => SetTextArea(e.target.value)}/>
                <button className="secondary-button">submit</button>
            </div>
                    
    )
}


export default ChatInput;
