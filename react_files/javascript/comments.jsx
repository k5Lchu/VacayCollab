let data = [
    {
        author: 'Scott',
        commentContent: '...',
        key: '5'
    },
    {
        author: 'Kevin',
        commentContent: 'Eww Fabian territory',
        key: '4'
    },
    {
        author: 'David',
        commentContent: 'Shut up Kevin. How does Tijuana sound?',
        key: '3'
    },
    {
        author: 'Scott',
        commentContent: 'David where do you want to go?',
        key: '2'
    },
    {
        author: 'Kevin',
        commentContent: 'David why aren\'t you saying anything?',
        key: '1'
    }
];

const Comment = (props) => {
    let commentContainerStyles = {
        margin: 'auto',
        marginBottom: '5px',
        border: '1px solid white',
        borderRadius: '5px',
        backgroundColor: 'white'
    };

    let commentAuthorStyles = {
        marginLeft: '2%',
        paddingBottom: '5px',
        fontWeight: 'bold'
    };

    let commentContentStyles = {
        marginLeft: '8%',
        marginBottom: '10px'
    };

    return (
        <div style={commentContainerStyles}>
            <div style={commentAuthorStyles}>{props.author}:</div>
            <div style={commentContentStyles}>{props.commentContent}</div>
        </div>
    );
};

class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commentsData: props.comments,
            validComment: true
        };

        this.containerStyles = {
            margin: 'auto',
            padding: '10px'
        };

        this.listStyles = {
            height: '300px',
            paddingTop: '10px',
            overflow: 'auto'
        };

        this.addNewComment = this.addNewComment.bind(this);
    };

    addNewComment(e, newComment) {
        console.log(newComment);
        this.state.commentsData.unshift(newComment);
        this.setState({
            commentsData: this.state.commentsData,
            validComment: true
        });
        e.target.scrollTop = 0;
    };

    render() {
        return (
            <div style={this.containerStyles}>
                <CommentInput onNewComment={this.addNewComment} />
                <div style={this.listStyles}>
                    {this.state.commentsData.map(comment => <Comment {...comment} />)}
                </div>
            </div>
        );
    };
};

class CommentInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            inputStyles: {
                width: '90%',
                display: 'block',
                margin: 'auto',
                padding: '5px',
                borderRadius: '5px',
                border: 'none'
            }
        };

        this.formStyles = {
            padding: '10px'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.keyCount = 6;
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value === '') {
            this.setState({
                value: '',
                inputStyles: {
                    width: '90%',
                    display: 'block',
                    margin: 'auto',
                    padding: '5px',
                    borderRadius: '5px',
                    border: '3px solid red'
                }
            });
        } else {
            this.setState({
                value: '',
                inputStyles: {
                    width: '90%',
                    display: 'block',
                    margin: 'auto',
                    padding: '5px',
                    borderRadius: '5px',
                    border: 'none'
                }
            });

            this.props.onNewComment(e,{
                author: 'David',
                commentContent: this.state.value,
                key: ('' + this.keyCount++)
            });
        }
    }

    render() {
        return (
            <form style={this.formStyles} onSubmit={this.handleSubmit}>
                <input style={this.state.inputStyles} onChange={this.handleChange} type="text" value={this.state.value} placeholder="Enter comment here" />
            </form>
        );
    }
};

const CommentComponent = (props) => {
    let containerStyles = {
        backgroundColor: 'lightgray',
        borderRadius: '10px'
    };

    let headerStyles = {
        margin: '0',
        marginLeft: '10px',
        marginRight: '10px',
        paddingTop: '10px',
        marginBottom: '5px',
        borderBottom: '1px solid black'
    };

    return (
        <div style={containerStyles}>
            <h3 style={headerStyles}>Comments</h3>
            <CommentList comments={props.comments} />
        </div>
    );
};
