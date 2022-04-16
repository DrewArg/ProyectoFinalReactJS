import '../FloatingFeedbackMessage/FloatingFeedbackMessage.css'
function FloatingFeedbackMessage({ typeOfMessage, show, message }) {

    return (
        <>
            <div className={`${typeOfMessage} ${show}`} >
                <span className="symbol"></span>
                <span className="message">{message}</span>

                <button className="closeBtn__X">X</button>

            </div>
        </>
    )
}

export default FloatingFeedbackMessage

