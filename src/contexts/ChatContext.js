import {fb} from 'service';
import { createContext, useState } from 'react';
import { newChat, deleteChat, leaveChat } from 'react-chat-engine';

export const ChatContext = createContext();

export const chatProvider = ({children, authUser})=>{
    const [myChats, setMychats]=useState();
    const[chatConfig,setChatConfig]=useState();
    const[selectedChat,setSelectedChat]=useState();
}

const createChatClick = ()=>{
    newChat(chatConfig,{title:''});
};

const deleteChatClick = chat => {
    deleteChat(chatConfig, chat.id);
}