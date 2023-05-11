import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth-token");
  const [unReadMessages, setUnReadMessages] = useState(Number);
  const [totalMessages, setTotalMessages] = useState(Number);
  const [allMessages, setMessages] = useState<messages[]>([]);
  const [messageDetail, setMessageDetail] = useState<messages[]>([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const Login = (name: string, password: string) => {
    axios
      .post(`${BASE_URL}/login/`, {
        name: name,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("name", response.data.name);
        if (response.status == 200) {
          navigate("/inbox");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUnreadMessages = () => {
    axios
      .get(`${BASE_URL}/messages/`, {
        headers: {
          "Content-Type": "application/json, text/plain, */*",
          "auth-token": token,
        },
      })
      .then((response) => {
        setUnReadMessages(response.data.unreadMessages);
        setTotalMessages(response.data.totalMessages);
      })
      .catch((error) => console.log(error));
  };

  const everyMessage = () => {
    axios
      .get(`${BASE_URL}/messages/all`, {
        headers: {
          "Content-Type": "application/json, text/plain, */*",
          "auth-token": token,
        },
      })
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => console.log(error));
  };

  const singleMessage = (id: string | undefined) => {
    axios
      .get(`${BASE_URL}/messages/${id}`, {
        headers: {
          "Content-Type": "application/json, text/plain, */*",
          "auth-token": token,
        },
      })
      .then((response) => {
        setMessageDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    Login,
    getUnreadMessages,
    unReadMessages,
    totalMessages,
    everyMessage,
    allMessages,
    singleMessage,
    messageDetail,
  };
};
export default useDetail;
