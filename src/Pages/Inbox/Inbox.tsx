import { useEffect } from "react";
import "./Inbox.css";
import { useNavigate } from "react-router-dom";
import useDetail from "../../useDetails";
import Logout from "../../Component/Logout/Logout";
const Inbox = () => {
  const userName = localStorage.getItem("name");
  const navigate = useNavigate();
  const { getUnreadMessages, unReadMessages, totalMessages } = useDetail();
  useEffect(() => {
    getUnreadMessages();
  }, []);

  return (
    <div className="messages-container">
      <div className="messages-box">
        <h2>Hello {userName}</h2>
        <p>
           You have {unReadMessages} unread messages out of{" "}
          {totalMessages} total messages
        </p>

        <div className="button-container">
            <button onClick={() => navigate("/messages")}>View Messages</button>
            <Logout></Logout>
        </div>
        
      </div>
    </div>
  );
};

export default Inbox;
