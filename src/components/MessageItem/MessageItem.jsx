import '../../components/MessageItem/MessageItem.css'

function MessageItem({ message, removeMessage }) {
    return (
        <>
            <div className={`${message.type}`}>
                <div >{message.caption}</div>
                <button className="messageClose" onClick={() => {
                    removeMessage(message.id);
                }}>X</button>
            </div>
        </>

    )
}

export default MessageItem