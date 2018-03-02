import React from 'react';

const Message = (props) => {
    let messageContainerStyles = {
        padding: '0px 10px',
        borderRadius: '8px',
        margin: '10px 0px',
        overflow: 'hidden'
    };

    let messageStyles = {
        margin: '0px',
        padding: '10px',
        maxWidth: '200px',
        borderRadius: '7px'
    };

    if (props.sender === 'agent') {
        messageStyles.float = 'left';
        messageStyles.backgroundColor = 'aliceblue';
    } else {
        messageStyles.float = 'right';
        messageStyles.backgroundColor = 'antiquewhite';
    }

    return(
        <div style={messageContainerStyles}>
            <p style={messageStyles}>{props.message}</p>
        </div>
    );
};

class ChatInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.msgInputStyles = {
            display: 'block',
            margin: 'auto',
            border: 'none',
            width: '95%',
            padding: '10px 5px',
            borderTop: '1px solid lightgray',
            position: 'relative',
            bottom: '0'
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    sendMessage(e) {
        e.preventDefault();

        if (this.state.value === '') {
            return;
        }

        let newMsg = {
            sender: 'user',
            message: this.state.value,
            key: Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
        };

        console.log(newMsg);

        this.props.displayNewMessage(newMsg);
        this.setState({
            value: ''
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.sendMessage}>
                    <input style={this.msgInputStyles} onChange={this.handleChange} type="text" value={this.state.value} placeholder="Type message..." />
                </form>
            </div>
        );
    }
}

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };

        this.addNewMessage = this.addNewMessage.bind(this);
    }

    addNewMessage(newMsg) {
        this.state.data.push(newMsg);
        this.setState({
            data: this.state.data
        });
    }

    componentDidMount() {
        this.chatList.scrollTop = this.chatList.scrollHeight;
    }

    componentDidUpdate() {
        this.chatList.scrollTop = this.chatList.scrollHeight;
    }

    render() {
        return(
            <div style={{height: '90%'}}>
                <div ref={(el) => {this.chatList = el;}} style={{height: '90%', position: 'relative', overflowY: 'scroll'}}>
                    {this.state.data.map(msg => <Message {...msg} />)}
                </div>
                <ChatInput displayNewMessage={this.addNewMessage} />
            </div>
        );
    }
}

class ChatHeader extends React.Component {
    constructor(props) {
        super(props);

        this.chatHeaderStyles = {
            backgroundColor: 'dodgerblue',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        };

        this.chatTitleStyles = {
            gridColumn: '1/2',
            margin: 'auto',
            marginLeft: '15px',
            color: 'white',
            padding: '15px 0px'
        };

        this.chatToggleImgStyles = {
            height: '30px',
            width: '30px',
            gridColumn: '2/3',
            display: 'block',
            margin: 'auto',
            marginRight: '0px',
            paddingRight: '15px',
            cursor: 'pointer'
        };
    }

    render() {
        return(
            <div style={this.chatHeaderStyles}>
                <h3 style={this.chatTitleStyles}>Chat With us</h3>
                <img style={this.chatToggleImgStyles} src="https://bcscallprocessing.com/wp-content/uploads/2016/04/chevron-down-300x300.png" alt="hide" onClick={this.props.onToggleChat}/>
            </div>
        );
    }
}

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };

        this.toggleChatVisibility = this.toggleChatVisibility.bind(this);
    }

    toggleChatVisibility() {
        if (this.state.hidden) {
            this.state.hidden = false;
        } else {
            this.state.hidden = true;
        }
        this.setState({
            hidden: this.state.hidden
        });
    }

    render() {
        let containerStyles = {
            zIndex: '1',
            width: '350px',
            height: '500px',
            border: '1px solid lightgray',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            overflow: 'hidden',
            position: 'fixed',
            bottom: '0',
            left: '0',
            backgroundColor: 'white'
        };

        if (this.state.hidden) {
            containerStyles.display = 'none';
        }

        return(
            <div>
                <div style={containerStyles}>
                    <ChatHeader onToggleChat={this.toggleChatVisibility} />
                    <MessageList data={this.props.data} />
                </div>
                <img id="chatToggle" src="http://iconshow.me/media/images/ui/ios7-icons/png/512/chatbubble-outline.png" alt="chat" onClick={this.toggleChatVisibility} />
            </div>
        );
    }
};

export default ChatContainer;
