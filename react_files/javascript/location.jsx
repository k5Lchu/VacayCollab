
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

class VacayLocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upvotes: props.upvotes,
            voted: props.voted
        }
        this.upvoteLocation = this.upvoteLocation.bind(this);
    }

    upvoteLocation(){
        if (this.state.voted == false) { this.state.upvotes += 1; }
        this.state.voted = true;

        this.setState({
            upvotes: this.state.upvotes,
            voted: this.state.voted
        });
        this.props.onUpvote();
    }

    render(){
        return (
            <full-area>
                <area-pic><img src={this.props.pic}></img></area-pic>
                <area-desc>
                    <area-name>{this.props.name}</area-name>
                    <upvote-count>{this.state.upvotes}</upvote-count>
                    <area-info ><p>{this.props.description}</p></area-info>
                    <area-upvote><button type="button" onClick={this.upvoteLocation}>UpVote</button> </area-upvote>
                </area-desc>
            </full-area>
            )
    }
};

class LocationList extends React.Component {
    constructor(props) {
        console.log('LocationList constructor')
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
        this.createLocList();
        this.createSearchFilter = this.createSearchFilter.bind(this);
    }

    createLocList(){
        console.log('createLocList');

        this.state.displayed = [];
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
        /*this.setState({
            locList: this.state.locList,
            displayed: this.state.displayed,
            data: this.state.data
        });*/
    }

    createSearchFilter(){
        let search = '';
        let filter = '';
        let dropdown = '';

        search = '<input id="search-input" type="text" placeholder="Search For Destinations...." onkeyup={this.searchList}>';
        filter = '<button id="filter-button" onclick={this.dropdownShow} class="dropbtn">Search</button></div>';
        dropdown = '<div id="dropcon" class="dropdown-content">';
        for(let i=0; i<searchList.length; i++){
            let place = searchList[i];
            dropdown += '<a onclick={this.addLocation('+place+')}>'+place+'</a>';
        }
        dropdown += '</div>';
        return search+filter+dropdown;
    }

    dropdownShow(){
        let dropdown = document.getElementById('dropcon');
        dropdown.classList.toggle("show");
    }

    searchList(){
        let value = document.getElementById('search-input').value.toLowerCase();
        let dropdown = document.getElementById('dropcon');
        dropdown.innerHTML = '';
        for(let i=0; i<searchlist.length; i++){
            if(searchlist[i].toLowerCase().includes(value)){
                dropdown.innerHTML += '<a onclick="{this.addLocation('+searchlist[i]+')}">'+searchlist[i]+'</a>';
            }
        }
    }

    addLocation(name){
        if(this.state.locList.get(name)[0]){
            this.state.displayed.push(this.state.locList.get(name));
        }
        this.setState({
            locList: this.state.locList,
            displayed: this.state.displayed,
            data: this.state.data
        });
    }

    upVoted(name){
        console.log('upVoted');
        
    }

    render(){
        console.log(this.state.displayed.length);
        return(
            <div>
                
                <area-container>
                    {this.state.displayed.map(vacayLoc => <VacayLocation {...vacayLoc} onUpvote={this.upVoted(vacayLoc.name)}/>)}
                </area-container>
            </div>
        );
    }

};

ReactDOM.render(<LocationList data={locations}/>, document.getElementById('content'));
