import React from 'react';
import CommentComponent from './comments.jsx';
import ChatContainer from './agent_chat.jsx';
import ProgressButtons from './progress_bottom_bar.jsx';

const CalenderCell = (props) => {
    let day = props.day;
    if(props.day == 0){
        day = '';
    }
    let selectDay = function(){
        if(props.day != ''){
            props.selectDay(props.day);
        }
    };
    return(
        <td id={props.id} onClick={selectDay} style={props.shade}> {day} </td>
    );
};

const CalenderRow = (props) =>{
    let row = props.row;
    let cellCount = props.rowNum*7;
    let shadedStyle = [];
    let save = props.save;
    let pass = props.pass;
    
    let selectDay = function(day) {
        let contains = save.indexOf(day);
        if(contains == -1){save.push(day);}
        else{save.splice(contains, 1);}
        reStyle();
        props.selectDay(day);
    }

    let reStyle = function(){
        shadedStyle = [];
        for(let i=0; i<row.length; i++){
            if(row[i] == 0){
                shadedStyle.push({
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderCollapse: "collapse"
                });
                continue;
            }
            let passIn = pass.indexOf(row[i]);
            let saveIn = save.indexOf(row[i]);
            if(passIn != -1 && saveIn != -1){
                shadedStyle.push({
                    backgroundColor: "teal",
                    border: "1px solid black",
                    borderCollapse: "collapse"
                });
            }else if(saveIn != -1){
                shadedStyle.push({
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                    borderCollapse: "collapse"
                });
            } else if(passIn != -1){
                shadedStyle.push({
                    backgroundColor: "gray",
                    border: "1px solid black",
                    borderCollapse: "collapse"
                });
            } else{
                shadedStyle.push({
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderCollapse: "collapse"
                });
            }
        }
    };
    reStyle();
    let x = 0;
    return(  
        <tr> 
             {row.map(day => <CalenderCell id={'cell'+(cellCount++)} day={day} selectDay={selectDay} shade={shadedStyle[x++]}/>)}
        </tr>
    );
};

const MonthSelect = (props) => {
    let newMonth = props.month;
    let changeMonth = function(){
        props.changeMonth(newMonth);
    };

    return(
        <button type="button" onClick={changeMonth}> {props.months[newMonth]} </button>
    );
};

class CalenderContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            monthMap: this.props.monthMap,
            currentMonth: this.props.currentMonth,
            months: this.props.months,
            week: this.props.daysInWeek,
            monthselect: [],
            rows: [],
            rowNum: 0,
            saved: this.props.saveDays,
            passed: this.props.passedDays,
            monthSaved: [],
            monthPassed: []
        };
        let monthName = this.state.months[this.state.currentMonth];
        let currMonthMap = this.state.monthMap.get(monthName);
        let numWeek = Math.ceil((currMonthMap[1]+currMonthMap[2])/7);
        let currday = 1;
        for(let weeks=0; weeks<numWeek; weeks++){
            this.state.rows.push([]);
            for(let days=0; days<7; days++){
                if(weeks==0){
                    if(days < currMonthMap[1]){
                        this.state.rows[weeks].push(0);
                    }else{
                        this.state.rows[weeks].push(currday++);
                    }
                }else{
                    if(currday <= currMonthMap[2]){
                        this.state.rows[weeks].push(currday++);
                    }else{
                        this.state.rows[weeks].push(0);
                    }
                }
            }
        }
        let newMonth = this.state.currentMonth;
        let bM = newMonth-1;
        let nM = newMonth+1;
        if(newMonth < 0){
            newMonth = 11;
            bM = 10;
            nM = 0;
        }
        else if(newMonth == 0){
            bM = 11;
        }
        else if(newMonth == 11){
            nM = 0;
        }
        else if(newMonth > 11){
            newMonth = 0;
            bM = 11;
            nM = 1;
        }
        this.state.monthselect = [bM, newMonth, nM];

        let floor = 0;
        let i = 0;
        while(i<this.state.currentMonth){
            floor += this.state.monthMap.get(this.state.months[i])[2];
            i+=1;
        }
        let ceiling = floor+this.state.monthMap.get(this.state.months[i])[2];
        let ret = [];
        let pass = [];
        for(let x=0; x<this.state.saved.length; x++){
            let val = this.state.saved[x];
            if(val > floor && val <= ceiling) { ret.push((val-floor));}
        }
        for(let y =0; y<this.state.passed.length; y++){
            let val = this.state.passed[y];
            if(val > floor && val <= ceiling) { pass.push((val-floor));}
        }
        this.state.monthSaved = ret;
        this.state.monthPassed = pass;

        this.changeMonth = this.changeMonth.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.monthSelect = this.monthSelect.bind(this);
        this.saveDaysInMonth = this.saveDaysInMonth.bind(this);
    }

    changeMonth(newMonth){
        let curr = newMonth;
        let monthName = this.state.months[curr];
        let currMonthMap = this.state.monthMap.get(monthName);
        let numWeek = Math.ceil((currMonthMap[1]+currMonthMap[2])/7);
        this.state.rows = [];
        let nrows = [];
        let currday = 1;
        for(let weeks=0; weeks<numWeek; weeks++){
            nrows.push([]);
            for(let days=0; days<7; days++){
                if(weeks==0){
                    if(days < currMonthMap[1]){
                        nrows[weeks].push(0);
                    }else{
                        nrows[weeks].push(currday++);
                    }
                }else{
                    if(currday <= currMonthMap[2]){
                        nrows[weeks].push(currday++);
                    }else{
                        nrows[weeks].push(0);
                    }
                }
            }
        }
        this.state.currentMonth = curr;
        this.state.rows = nrows;
        this.setState({
            monthMap: this.state.monthMap,
            currentMonth: this.state.currentMonth,
            months: this.props.months,
            week: this.props.daysInWeek,
            monthselect: this.state.monthselect,
            rows: this.state.rows,
            rowNum: this.state.rowNum,
            saved: this.state.saved,
            passed: this.state.passed,
            monthSaved: this.state.monthSaved,
            monthPassed: this.state.monthPassed
        });
        this.monthSelect(this.state.currentMonth);
        this.saveDaysInMonth();
    }

    selectDay(day){
        let i = 0;
        let select = 0;
        while(i < this.state.currentMonth){
            select += this.state.monthMap.get(this.state.months[i])[2];
            i+=1;
        }
        select += day;
        let contains = this.state.saved.indexOf(select);
        if(contains == -1) {
            this.state.saved.push(select);
            console.log("added day: "+select);
        }
        else{
            this.state.saved.splice(contains, 1);
            console.log("removed day: "+select);
        }
        this.setState({
            monthMap: this.state.monthMap,
            currentMonth: this.state.currentMonth,
            months: this.props.months,
            week: this.props.daysInWeek,
            monthselect: this.state.monthselect,
            rows: this.state.rows,
            rowNum: this.state.rowNum,
            saved: this.state.saved,
            passed: this.state.passed,
            monthSaved: this.state.monthSaved,
            monthPassed: this.state.monthPassed
        });
        this.props.selectDay(this.state.saved);
    }

    monthSelect(mon){
        this.state.monthselect = [];
        let newMonth = mon;
        let bM = newMonth-1;
        let nM = newMonth+1;
        if(newMonth < 0){
            newMonth = 11;
            bM = 10;
            nM = 0;
        }
        else if(newMonth == 0){
            bM = 11;
        }
        else if(newMonth == 11){
            nM = 0;
        }
        else if(newMonth > 11){
            newMonth = 0;
            bM = 11;
            nM = 1;
        }
        this.state.monthselect = [bM, newMonth, nM];
        this.setState({
            monthMap: this.state.monthMap,
            currentMonth: this.state.currentMonth,
            months: this.props.months,
            week: this.props.daysInWeek,
            monthselect: this.state.monthselect,
            rows: this.state.rows,
            rowNum: this.state.rowNum,
            saved: this.state.saved,
            passed: this.state.passed,
            monthSaved: this.state.monthSaved,
            monthPassed: this.state.monthPassed
        });
    }

    saveDaysInMonth(){
        this.state.monthSaved = [];
        this.state.monthPassed = [];
        let floor = 0;
        let i = 0;
        while(i<this.state.currentMonth){
            floor += this.state.monthMap.get(this.state.months[i])[2];
            i+=1;
        }
        let ceiling = floor+this.state.monthMap.get(this.state.months[i])[2];
        let ret = [];
        let pass = [];
        for(let x=0; x<this.state.saved.length; x++){
            let val = this.state.saved[x];
            if(val > floor && val <= ceiling) { ret.push((val-floor));}
        }
        for(let y =0; y<this.state.passed.length; y++){
            let val = this.state.passed[y];
            if(val > floor && val <= ceiling) { pass.push((val-floor));}
        }
        this.state.monthSaved = ret;
        this.state.monthPassed = pass;
        this.setState({
            monthMap: this.state.monthMap,
            currentMonth: this.state.currentMonth,
            months: this.props.months,
            week: this.props.daysInWeek,
            monthselect: this.state.monthselect,
            rows: this.state.rows,
            rowNum: this.state.rowNum,
            saved: this.state.saved,
            passed: this.state.passed,
            monthSaved: this.state.monthSaved,
            monthPassed: this.state.monthPassed
        });
    }

    render(){
        let rowNum = 0;
        return(
            <div id="calender">
                <div id="month-select">
                    <h1>
                        {this.state.monthselect.map(select => <MonthSelect months={this.state.months} month={select} changeMonth={this.changeMonth}/>)}
                    </h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                        </tr>
                        {this.state.rows.map(week => <CalenderRow row={week} rowNum={rowNum++} selectDay={this.selectDay} save={this.state.monthSaved} pass={this.state.monthPassed}/>)}
                    </tbody>
                </table>
            </div>
    )};
}

class DecideDateContent extends React.Component {
    constructor(props){
        super(props);
        //this.backRouteRef = '/markavailability';
        this.backRouteRef = '/';
        this.nextRouteRef = '/location';
    }
    render(){
        return(
            <div>
                <div id="progress-bar"><div></div></div>

                <div id="calender-container">
                    <div id="top-prompt">
                        <h1>Decide the Date</h1>
                        <h4>As the leader of this group, use the available dates of all participants to finalize the vacation start and end dates</h4>
                    </div>
                    <CalenderContent monthMap={this.props.monthMap} currentMonth={this.props.currentMonth} months={this.props.months} daysInWeek={this.props.daysInWeek} saveDays={this.props.saveDays} passedDays={this.props.passedDays} selectDay={this.props.selectDay}/>
                </div>
                <ChatContainer data={this.props.messages} />
                <ProgressButtons backRoute={this.backRouteRef} nextRoute={this.nextRouteRef}/>
            </div>
        );
    }
};

export default DecideDateContent;

//ReactDOM.render(<DecideDateContent monthMap={monthMap} currentMonth={currentMonth} months={months} daysInWeek={daysInWeek} saveDays={saveDays} passedDays={passedDays} selectDay={selectDay} messages={messagesData}/>, document.getElementById('content'));
