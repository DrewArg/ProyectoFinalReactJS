import MessageItem from '../../components/MessageItem/MessageItem'
import '../FeedbackMessageContainer/FeedbackMessageQueueContainer.css'

function FeedbackMessageQueueContainer({ messages = [], removeMessage }) {

  return (
    <div className="fmContainer">
      {messages.map((msg) =>
        <MessageItem key={msg.id} message={msg} removeMessage={removeMessage} />)}</div>
  )
}

export default FeedbackMessageQueueContainer