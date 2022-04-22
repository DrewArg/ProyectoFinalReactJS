import '../FeedBackMessage/FeedBackMessage.css'
import LinkButton from '../LinkButton/LinkButton'
function FeedBackMessage({ messageType, messageString, buttonTitle, buttonStyle, buttonLinkTo }) {
    return (
        <>
            <div className="feedbackContainer">
                <div className={messageType}>
                    {messageString}
                </div>
            </div>
            <div>
                <LinkButton title={buttonTitle} style={buttonStyle} linkTo={buttonLinkTo} />
            </div>

        </>
    )
}

export default FeedBackMessage