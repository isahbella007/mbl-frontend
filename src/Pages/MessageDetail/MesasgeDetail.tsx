import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import useDetail from "../../useDetails"
import "./MessageDetail.css"
import Logout from "../../Component/Logout/Logout"
const MessageDetail = () => {
    const {id} = useParams()
    const {singleMessage, messageDetail} = useDetail()
    useEffect(() => { 
        singleMessage(id)
    }, [])
    return (
        <div className="all-messages-container">
            <h3>Messages</h3>
            <div className="all-messages-content">
                {messageDetail.map((item) => (
                    <div className="all-message" key={item.id}>
                        <div  className="all-message-subject">
                            <h4>{item.subject}</h4>
                        </div>
                        <div className="all-message-text">
                            {item.content}
                        </div> 
                    </div>
                ))}
            </div>
            <div className="button-container-h">
            <Link className="button-logout-p" to = "/inbox"><p>Go to Inbox</p></Link>
            <Logout></Logout>
      </div>
        </div>
    )
}

export default MessageDetail