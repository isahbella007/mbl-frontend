import { useEffect } from "react";
import "./Messages.css"
import { Link, useNavigate } from "react-router-dom";
import useDetail from "../../useDetails";
import Logout from "../../Component/Logout/Logout";
const Messages = () => {
    const navigate = useNavigate()
    const {everyMessage, allMessages} = useDetail()
    useEffect(() => { 
        everyMessage()
    }, [])

  return (
    <div className="all-messages-container">
      <h3>Messages</h3>
      <div className="all-messages-contentt">
        {allMessages.map((item) => (
            <div className={`all-message-every ${item.isRead == true ? 'read' : ''}`} key={item.id} onClick={() => {navigate(`/message-detail/${item.id}`)}}>
                <div  className="all-message-subject-every">
                    <h4>{item.subject}</h4>
                </div>
                <div className="all-message-text-every">
                    {item.content.substring(0,10) + '...'}
                </div> 
                <hr></hr>
            </div>
        ))}
      </div>
      <div className="button-container-h">
            <Link className="button-logout-p" to = "/inbox"><p>Go to Inbox</p></Link>
            <Logout></Logout>
      </div>
      
    </div>
  );
};
export default Messages;
