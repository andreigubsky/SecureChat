import { useState } from 'react';
import { useMessages, useSendMessage } from '@/features/messages/hooks/useMessages';

export const Chat = () => {
    const { data: messages, isLoading } = useMessages();
    const sendMessage = useSendMessage();
    const [text, setText] = useState('');

    const handleSend = () => {
        if (!text) return;
        sendMessage.mutate({ text, userId: 1 });
        setText('');
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <ul>
                {messages?.map((msg) => (
                    <li key={msg.id}>
                        <strong>{msg.userId}:</strong> {msg.text}
                    </li>
                ))}
            </ul>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter message" />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};