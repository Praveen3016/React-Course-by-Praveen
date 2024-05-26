function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
  const messages = ['praveen', 'tilak', 'sumit', 'manish'];
  
  const root = ReactDOM.createRoot(document.getElementById('one')); 
  root.render(<Mailbox unreadMessages={messages} />);