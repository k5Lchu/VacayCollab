
var searchlist = [
    'Chiang Mai',
    'Los Angeles',
    'San Diego',
    'New York',
    'Dubai',
    'Toronto',
    'Paris'
];

var locations = [
    {
        name: 'Chiang Mai',
        upvotes: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/chiangmai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Los Angeles',
        upvotes: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/LA-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'San Diego',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/sandiego-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'New York',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/newyork-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Dubai',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/dubai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Toronto',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/toronto-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Paris',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/paris-pic.jpg',
        displayed: false,
        voted: false
    }
];

var comments = [
    {
        author: 'Roronoa Zoro',
        content: 'Hey Luffy, trust me.If we go to Chiang Mai we can eat a lot of delicious food.',
        timestamp: 1
    },
    {
        author: 'Luffy',
        content: 'NAMI! WE"RE SETTING SAIL TO CHIANG MAI NOW!',
        timestamp: 2
    },
    {
        author: 'Nami',
        content: 'I want to see Hollywood!',
        timestamp: 3
    }
];

const Location = (props) => {
    let locationContainerStyle = {
        border: '2px solid gray',
        backgroundColor: 'lightgray',
        display: 'grid',
        gridTemplateAreas: 'left right'
    };

    let locationPicStyle = {
        gridArea: 'left',
        textAlign: 'center',
        margin: 'auto',
        backgroundColor: 'lightgray'
    };

    let locationDescStyle = {
        gridArea: 'right',
        backgroundColor: 'lightgray',
        margin: 'auto'
    };

    let locationNameStyle = {
        gridArea: 'right',
        textAlign: 'center',
        borderBottom: '2px solid gray',
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    let locationInfoStyle = {
        gridArea: 'right',
        textAlign: 'left',
        marginLeft: '10%',
        marginRight: '10%'
    };

    let upvoteButtonStyle = {
        position: 'relative'
    };

    let upvoteLocation = () => {
        if (props.voted == false) { props.upvotes = props.upvotes + 1; }
        props.voted = true;

    };

    return (
        <div style={locationContainerStyle}>
            <div style={locationPicStyle}><img src={props.pic} alt:"Picture Not Found" width='100%' height='100%'></div>
            <div style={locationDescStyle}>
                <div style={locationNameStyle}>{props.name}</div>
                <div style={locationNameStyle}>{props.upvotes}</div>
                <div style={locationNameStyle}><p>{props.description}</p></div>
                <div style={locationNameStyle} className="area-upvote"><button type="button" onclick={upvoteLocation}>UpVote</button> </div>
            </div>
        </div>
        )
};

class LocationList extends React.Component {


}