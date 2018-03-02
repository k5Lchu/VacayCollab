
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
        pic: '../assets/images/chiangmai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Los Angeles',
        upvotes: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '../assets/images/LA-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'San Diego',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '../assets/images/sandiego-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'New York',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '../assets/images/newyork-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Dubai',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '../assets/images/dubai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Toronto',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '../assets/images/toronto-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Paris',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '../assets/images/paris-pic.jpg',
        displayed: false,
        voted: false
    }
];

var locMap = new Map();
for(let i=0; i<locations.length; i++){
    let loc = locations[i];
    if(!locMap.has(loc.name)){
        locMap.set(loc.name, [i]);
    }else{
        locMap.get(loc.name).push(i);
    }
}

var comments = [
    {
        author: 'Roronoa Zoro',
        commentContent: 'Hey Luffy, trust me.If we go to Chiang Mai we can eat a lot of delicious food.',
        timestamp: 1
    },
    {
        author: 'Luffy',
        commentContent: 'NAMI! WE"RE SETTING SAIL TO CHIANG MAI NOW!',
        timestamp: 2
    },
    {
        author: 'Nami',
        commentContent: 'I want to see Hollywood!',
        timestamp: 3
    }
];

let messagesData = [
    {
        sender: 'user',
        message: 'I have a question'
    },
    {
        sender: 'agent',
        message: 'Sure thing! What\'s your question?'
    },
    {
        sender: 'user',
        message: 'Do you happen to know any places to visit in ChiangMai?'
    },
    {
        sender: 'agent',
        message: 'Not really'
    },
    {
        sender: 'user',
        message: '...'
    },
    {
        sender: 'user',
        message: 'Thank you...?'
    },
    {
        sender: 'agent',
        message: 'No problem'
    },
    {
        sender: 'agent',
        message: 'It\'s been a pleasure'
    }
];

class VacayLocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upvotes: props.location.upvotes,
            voted: props.location.voted
        }
        this.upvoteLocation = this.upvoteLocation.bind(this);
    }

    upvoteLocation(){
        console.log('upvoted '+this.props.location.name+' from vacayloc');
        if (this.state.voted == false) { 
            this.props.onUpvote(this.props.location.name);
            this.state.upvotes += 1;
        }
        this.state.voted = true;

        this.setState({
            upvotes: this.state.upvotes,
            voted: this.state.voted
        });
        
    }

    render(){
        return (
            <full-area>
                <area-pic><img src={this.props.location.pic}></img></area-pic>
                <area-desc>
                    <area-name>{this.props.location.name}</area-name>
                    <upvote-count>{this.state.upvotes}</upvote-count>
                    <area-info><p>{this.props.location.description}</p></area-info>
                    <area-upvote><button type="button" onClick={this.upvoteLocation}>UpVote</button> </area-upvote>
                </area-desc>
            </full-area>
            )
    }
};

const DropdownItem = (props) => {
    let getLoc = function() {
        props.addLocation(props.name);
    };

    return(
        <a id={props.name} onClick={getLoc}>{props.name}</a>
    );
}

class LocationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locList: new Map(),
            displayed: [],
            data: props.data,
            map: props.map,
            list: props.list,
            matches: []
        }

        for(let i=0; i<props.data.length; i++){
            let loc = props.data[i];
            if(!this.state.locList.has(loc.name)){
                this.state.locList.set(loc.name, [loc]);
            }else{
                this.state.locList.get(loc.name).push(loc);
            }
        }

        let iter = this.state.locList.keys();
        let curr = iter.next();
        let names = [];
        while(!curr.done){
            names.push(curr.value);
            curr = iter.next();
        }
        names.sort((a,b) =>{
            return (this.state.locList.get(b)[0].upvotes - this.state.locList.get(a)[0].upvotes);
        });
        
        for(let i=0; i<names.length; i++){
            if(this.state.locList.get(names[i])[0].upvotes > 0){
                this.state.displayed.push(this.state.locList.get(names[i])[0]);
            }
        }
        
        this.searchList = this.searchList.bind(this);
        this.dropdownShow = this.dropdownShow.bind(this);
        this.updateVoted = this.updateVoted.bind(this);
        this.addLocation = this.addLocation.bind(this);
        
    }

    addLocation(name){
        if(this.state.locList.get(name)[0]){
            let there = false;
            for(let i=0; i<this.state.displayed.length; i++){
                if(this.state.displayed[i].name == this.state.locList.get(name)[0].name){
                    there = true;
                }
                if(there){ break; }
            }
            if(!there){this.state.displayed.push(this.state.locList.get(name)[0]);}
        }
        this.setState({
            locList: this.state.locList,
            displayed: this.state.displayed,
            data: this.state.data,
            map: this.state.map,
            list: this.state.list,
            matches: this.state.matches
        });
    }

    updateVoted(name){
        console.log('upVoted '+name);
        this.props.upVoteLoc(name);
    }
    
    dropdownShow(){
        let dropdown = document.getElementById('dropcon');
        dropdown.classList.toggle("show");
    }

    searchList(){
        let value = document.getElementById('search-input').value.toLowerCase();
        let dropdown = document.getElementById('dropcon');
        this.state.matches = [];
        for(let i=0; i<searchlist.length; i++){
            if(this.state.list[i].toLowerCase().includes(value)){
                this.state.matches.push(this.state.list[i]);
            }
        }
        console.log("searchList setState");
        this.setState({
            locList: this.state.locList,
            displayed: this.state.displayed,
            data: this.state.data,
            map: this.state.map,
            list: this.state.list,
            matches: this.state.matches
        });
    }

    render(){
        
        return(
            <div>
                <div id="search-filter" className="dropdown">
                    <input id="search-input" type="text" placeholder="Search For Destinations...." onKeyUp={this.searchList}></input>
                    <button id="filter-button" onClick={this.dropdownShow} className="dropbtn">Search</button>
                    <div id="dropcon" className="dropdown-content">
                        {this.state.matches.map(loc => <DropdownItem name={loc} addLocation={this.addLocation}/>)}
                    </div>
                </div>
                <area-container>
                    {this.state.displayed.map(vacayLoc => <VacayLocation location={vacayLoc} id={vacayLoc.name} onUpvote={this.updateVoted}/>)}
                </area-container>
            </div>
        );
    }

};

const LocationSelectContent = (props) => {
    return(
        <div>
            <div id="progress-bar"><div></div></div>
            <div id="location-container">
                <div id="top-prompt">
                    <h1>Where does everyone want to go?</h1>
                    <h4>Vote on where you want to go! Leave comments for the group with you opinions on your vacation destination</h4>
                </div>
                <LocationList data={props.data} map={props.map} list={props.list} upVoteLoc={props.upVoteLoc}/>
                <CommentComponent comments={props.comments}/>
                <ChatContainer data={props.messages} />
            </div>
        </div>
    );
};

let upvoteLoc = function(name){
    locations[locMap.get(name)].upvotes += 1;
    locations[locMap.get(name)].voted = true;
};

ReactDOM.render(<LocationSelectContent data={locations} map={locMap} list={searchlist} upVoteLoc={upvoteLoc} comments={comments} messages={messagesData}/>, document.getElementById('content'));
