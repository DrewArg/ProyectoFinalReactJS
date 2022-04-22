import { createContext, useState, useContext, useRef } from 'react'

const FeedbackMessageContext = createContext([]);

export const useFeedbackMessageContext = () => useContext(FeedbackMessageContext);

function FeedbackMessageContextProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const [messageId, setMessageId] = useState(1);

    const ref = useRef();
    ref.current = messages;

    const addId = () => {
        setMessageId(messageId + 1);

    }
    function addMessage({ caption, type = 'fmInfo', timeout = 3000 }) {
        const id = messageId;
        setMessages([...messages, {
            id,
            type,
            caption,
            timeout: setTimeout(() => {
                removeMessage(messageId);
            }, timeout),
        }]);

        addId();

    }

    const removeMessage = (id) => {
        setMessages(ref.current.filter((msg) => msg.id !== id))
    }

    return (
        <FeedbackMessageContext.Provider value={{ addMessage, removeMessage, messages }}>{children}
        </FeedbackMessageContext.Provider>
    )
}

export default FeedbackMessageContextProvider