
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

var listedLocs = [];

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

const VacayLocation = (props) => {
    /*let locationContainerStyle = {
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
    */
    let upvoteLocation = () => {
        if (props.voted == false) { props.upvotes = props.upvotes + 1; }
        props.voted = true;

    };

    return (
        <full-area /*style={locationContainerStyle}*/>
            <area-pic /*style={locationPicStyle}*/><img src={props.pic}></img></area-pic>
            <area-desc /*style={locationDescStyle}*/>
                <area-name /*style={locationNameStyle}*/>{props.name}</area-name>
                <upvote-count /*style={locationNameStyle}*/>{props.upvotes}</upvote-count>
                <area-info /*style={locationNameStyle}*/><p>{props.description}</p></area-info>
                <area-upvote /*style={locationNameStyle}*/ className="area-upvote"><button type="button" onclick={upvoteLocation}>UpVote</button> </area-upvote>
            </area-desc>
        </full-area>
        )
};

class LocationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locList: new Map(),
            displayed: [],
            data: props.data
        }

        for(let i=0; i<props.data.length; i++){
            let loc = props.data[i];
            if(!this.state.locList.has(loc.name)){
                this.state.locList.set(loc.name, [loc]);
            }else{
                this.state.locList.get(loc.name).push(loc);
            }
        }

        this.createLocList = this.createLocList.bind(this);
        this.createSearchFilter = this.createSearchFilter.bind(this);
    }

    createLocList(){
        this.state.displayed = [];
        let iter = this.state.locList.keys();
        let curr = iter.next();

        let names = [];

        while(!curr.done){
            names.push(curr.value);
            curr = iter.next();
        }

        names.sort((a,b) =>{
            return (this.state.locList.get(b).upvotes - this.state.locList.get(a).upvotes);
        });

        for(let i=0; i<names.length; i++){
            if(locList.get(names[i]).upvotes > 0){
                this.state.displayed.push(locList.get(names[i]));
            }
        }
        
        this.setState({
            locList: this.state.locList,
            displayed: this.state.displayed,
            data: this.state.data
        });
    }

    createSearchFilter(){
        let search = '';
        let filter = '';
        let dropdown = '';

        search = '<input id="search-input" type="text" placeholder="Search For Destinations...." onkeyup={searchList()}>';
        filter = '<button id="filter-button" onclick={dropdownShow()} class="dropbtn">Search</button></div>';
        dropdown = '<div id="dropcon" class="dropdown-content">';
        for(let i=0; i<searchList.length; i++){
            let place = searchList[i];
            dropdown += '<a onclick={addLocation('+place+')}>'+place+'</a>';
        }
        dropdown += '</div>';
        return search+filter+dropdown;
    }

    dropdownShow(){
        let dropdown = document.getElementById('dropcon');
        dropdown.classList.toggle("show");
    }

    addLocation(name){
        if(this.state.locList.get(name)){
            this.state.displayed.push(this.state.locList.get(name));
        }
        this.setState({
            locList: this.state.locList,
            displayed: this.state.displayed,
            data: this.state.data
        });
    }

    render(){
        return(
            <div>
                <div id="search-filter" class="dropdown">
                    {this.createSearchFilter()}
                </div>
                <area-container>
                    {this.displayed.map(vacayLoc => <VacayLocation {...vacayLoc} id={vacayLoc.key}/>)}
                </area-container>
            </div>
        );
    }

};

