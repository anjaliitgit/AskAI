import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
const API_URL = import.meta.env.VITE_API_URL;

function ChatWindow() {
    const {
        prompt,
        setPrompt,
        reply,
        setReply,
        currThreadId,
        setPrevChats,
        setNewChat,
    } = useContext(MyContext);

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const getReply = async () => {
        if (!prompt.trim()) return;

        setLoading(true);
        setNewChat(false);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId,
            }),
        };

        try {
            const response = await fetch(`${API_URL}/api/chat`, options);
            const res = await response.json();

            if (res.reply) {
                setReply(res.reply);
            }
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    };

    useEffect(() => {
        if (prompt && reply) {
            setPrevChats((prevChats) => [
                ...prevChats,
                {
                    role: "user",
                    content: prompt,
                },
                {
                    role: "assistant",
                    content: reply,
                },
            ]);
        }

        setPrompt("");
    }, [reply]);

    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chatWindow">

            {/* Navbar */}
            <div className="navbar">

                <div className="navLeft">
                    <span className="online">🟢 Powered by Gemini</span>
                </div>

                <div className="userIconDiv" onClick={handleProfileClick}>
                    <div className="userIcon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                </div>

            </div>

            {/* Profile Dropdown */}
            {isOpen && (
                <div className="dropDown">
                    <div className="dropDownItem">
                        <i className="fa-solid fa-gear"></i> Settings
                    </div>

                    <div className="dropDownItem">
                        <i className="fa-solid fa-cloud-arrow-up"></i> Upgrade Plan
                    </div>

                    <div className="dropDownItem">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out
                    </div>
                </div>
            )}

            {/* Chat Messages */}
            <Chat />

            {/* Loader */}
            <div style={{ margin: "15px auto" }}>
                <ScaleLoader color="#6366F1" loading={loading} />
            </div>

            {/* Chat Input */}
            <div className="chatInput">

                <div className="inputBox">

                    <input
                        type="text"
                        placeholder="💬 Ask AskAI anything..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                getReply();
                            }
                        }}
                    />

                    <button id="submit" onClick={getReply}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>

                </div>

                <p className="info">
                    AskAI may generate inaccurate information. Please verify important responses.
                </p>

            </div>

        </div>
    );
}

export default ChatWindow;