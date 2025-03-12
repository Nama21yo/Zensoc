import React, { useState } from "react";
import {
  MessageCircle,
  Instagram,
  Facebook,
  Activity,
  PlusCircle,
  Settings,
  Twitter,
  Linkedin,
  Paperclip,
  Send,
  Search,
  MoreHorizontal,
  Phone,
  Video,
} from "lucide-react";
import { Avatar } from "@mui/material"; // Import the Avatar component from Material UI

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messages] = useState([
    {
      id: 1,
      sender: "Krishangi",
      username: "content creator",
      content:
        "Hi, I'm Krishangi, a content creator with over 20k followers. I love your skin care products and would love to collaborate! Do you have any partnership opportunities? 😊",
      timestamp: "10:03 AM",
      avatar: "K", // Use initials or any icon you prefer
      date: "08 Nov 24",
      platform: "instagram",
    },
    {
      id: 2,
      sender: "James",
      username: "dknknkjxbkjsakjs",
      content:
        "Hi Krishangi! Thanks for reaching out! ❤️ Your content looks great. Can you share your audience details and any collab ideas you have in mind?",
      timestamp: "10:15 AM",
      avatar: "J", // Use initials or any icon you prefer
      date: "08 Nov 24",
      platform: "instagram",
    },
  ]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-black via-blue-950 to-black">
      <style jsx global>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>

      {/* Left Sidebar */}
      <div className="w-full md:w-20 bg-black/40 backdrop-blur-sm flex flex-col items-center py-6 border-r border-blue-500/10 md:h-full">
        <div className="mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center transform hover:scale-105 transition-all duration-300">
            <span className="text-xl font-bold">ZS</span>
          </div>
        </div>

        <nav className="flex flex-col gap-6 items-center flex-1">
          {[
            { icon: MessageCircle, count: null },
            { icon: Instagram, count: 15 },
            { icon: Facebook, count: 5 },
            { icon: Twitter, count: 9 },
            { icon: Linkedin, count: 15 },
          ].map((item, index) => (
            <button
              key={index}
              className="group relative w-12 h-12 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500/10 transition-all duration-300"
            >
              <item.icon
                size={22}
                className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
              />
              {item.count && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-xs flex items-center justify-center">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <button className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500/10 transition-all duration-300">
            <PlusCircle
              size={22}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            />
          </button>
          <button className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500/10 transition-all duration-300">
            <Settings
              size={22}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            />
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="w-full md:w-96 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Messages
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-black/20 backdrop-blur-sm rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 placeholder-blue-400/30"
            />
            <Search
              size={18}
              className="absolute left-3 top-3.5 text-blue-400"
            />
          </div>
        </div>

        <div className="overflow-y-auto hide-scrollbar h-[calc(100vh-140px)]">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => setSelectedChat(message.id)}
              className={`p-4 mx-4 mb-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-blue-500/10 ${
                selectedChat === message.id
                  ? "bg-blue-500/10 backdrop-blur-sm"
                  : ""
              }`}
            >
              <div className="flex gap-4">
                <div className="relative">
                  <Avatar
                    sx={{
                      bgcolor:
                        message.sender === "Krishangi" ? "blue" : "green",
                    }}
                  >
                    {message.avatar} {/* Display initials or any icon here */}
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-black" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-blue-100">
                      {message.sender}
                    </h3>
                    <span className="text-xs text-blue-400/60">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-blue-300/60 mt-1 truncate">
                    {message.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-sm flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-blue-500/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar sx={{ bgcolor: "blue" }}>K</Avatar>{" "}
            {/* Current chat avatar */}
            <div>
              <h2 className="font-bold text-blue-100">Krishangi</h2>
              <p className="text-sm text-blue-400">Online</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-blue-500/10 rounded-xl transition-all duration-300">
              <Phone size={20} className="text-blue-400" />
            </button>
            <button className="p-2 hover:bg-blue-500/10 rounded-xl transition-all duration-300">
              <Video size={20} className="text-blue-400" />
            </button>
            <button className="p-2 hover:bg-blue-500/10 rounded-xl transition-all duration-300">
              <MoreHorizontal size={20} className="text-blue-400" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto hide-scrollbar">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "James" ? "justify-end" : "justify-start"
                } group`}
              >
                <div
                  className={`max-w-[70%] ${
                    message.sender === "James"
                      ? "bg-gradient-to-r from-blue-600 to-blue-400"
                      : "bg-black/40 backdrop-blur-sm"
                  } rounded-2xl p-4 shadow-lg shadow-blue-500/10`}
                >
                  <p className="text-sm mb-2">{message.content}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-blue-200/60">
                      {message.timestamp}
                    </p>
                    {message.platform === "instagram" && (
                      <Instagram size={14} className="text-blue-300 ml-2" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6">
          <div className="flex gap-4 bg-black/40 backdrop-blur-sm rounded-xl p-3">
            <button className="p-2 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
              <Paperclip size={20} className="text-blue-400" />
            </button>
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent focus:outline-none text-blue-100 placeholder-blue-400/30"
            />
            <button className="p-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg hover:opacity-90 transition-all duration-300">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
