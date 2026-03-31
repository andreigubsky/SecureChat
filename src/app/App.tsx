import { useState } from "react";
import { useMessages, useSendMessage } from '@/features/messages/hooks/useMessages';

export default function App() {
    const { data: messages, isLoading, isError } = useMessages();
    const sendMessage = useSendMessage();

    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim()) return;

        sendMessage.mutate({ text, userId: 1 });
        setText("");
    };

    return (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
            <h1>SecureChat</h1>

            <div style={{ border: "1px solid #ccc", padding: 10, height: 400, overflowY: "auto" }}>
                {isLoading && <div>Loading messages...</div>}
                {isError && <div>Error loading messages</div>}
                {messages?.map((msg) => (
                    <div key={msg.id} style={{ marginBottom: 8 }}>
                        <strong>User {msg.userId}:</strong> {msg.text}
                    </div>
                ))}
            </div>


            <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
                <input
                    type="text"
                    placeholder="Enter message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ flex: 1, padding: 8 }}
                />
                <button onClick={handleSend} disabled={sendMessage.isLoading}>
                    {sendMessage.isLoading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
}