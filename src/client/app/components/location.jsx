import React from 'react';
import CommentComponent from './comments.jsx';
import ChatContainer from './agent_chat.jsx';
import ProgressButtons from './progress_bottom_bar.jsx';

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
            list: [],
            matches: []
        }
        

        for(let i=0; i<props.data.length; i++){
            let loc = props.data[i];
            if(!this.state.locList.has(loc.name)){
                this.state.locList.set(loc.name, [loc]);
            }else{
                this.state.locList.get(loc.name).push(loc);
            }
            this.state.list.push(loc.name);
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
        for(let i=0; i<this.state.list.length; i++){
            if(this.state.list[i].toLowerCase().includes(value)){
                this.state.matches.push(this.state.list[i]);
            }
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
    let backRouteRef = props.starPathName + '/';
    let nextRouteRef = props.starPathName + '/itenerary';
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
            <ProgressButtons backRoute={backRouteRef} nextRoute={nextRouteRef}/>
        </div>
    );
};

export default LocationSelectContent;

//ReactDOM.render(<LocationSelectContent data={locations} map={locMap} upVoteLoc={upvoteLoc} comments={comments} messages={messagesData}/>, document.getElementById('content'));
