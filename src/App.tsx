import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import ErrorPage from "./Pages/404/Error"
import Inbox from "./Pages/Inbox/Inbox"
import Messages from "./Pages/Messages/Messages"
import MessageDetail from "./Pages/MessageDetail/MesasgeDetail"

const App = () => { 
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/inbox" element = { <Inbox/> }></Route>
        <Route path="/messages" element = {<Messages/> }></Route>
        <Route path="/message-detail/:id" element={<MessageDetail/>}></Route>
        <Route path="*" element = {<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
