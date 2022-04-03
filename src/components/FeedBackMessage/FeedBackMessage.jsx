import '../FeedBackMessage/FeedBackMessage.css'
function FeedBackMessage({ messageType, messageString }) {
    return (
        <>
            <div className="feedbackContainer">
                <div className={messageType}>
                    {messageString}
                </div>
            </div>
        </>
    )
}

export default FeedBackMessage

