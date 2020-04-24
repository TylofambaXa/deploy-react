import React, { Component } from 'react';
import Slider from 'rc-slider';
import Popover from './Popover';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle
} from "@fortawesome/free-regular-svg-icons";
import 'rc-slider/assets/index.css';

const classHours = {
    0: '5',
    10: '6',
    20: '7',
    30: '8',
    40: '9',
    50: '10',
    60: '11',
    70: '12',
    80: '13',
    90: '14',
    100: '15'
  };

  const studyHours = {
    0: '5',
    10: '10',
    20: '15',
    30: '20',
    40: '25',
    50: '30',
    60: '35',
    70: '40',
    80: '45',
    90: '50',
    100: '55'
  };

  const workHours = {
    0: '0',
    10: '4',
    20: '8',
    30: '12',
    40: '16',
    50: '20',
    60: '24',
    70: '28',
    80: '32',
    90: '36',
    100: '40'
  };

const sleepHours = {
    0: '5',
    20: '6',
    40: '7',
    60: '8',
    80: '9',
    100: '10'
  };

  const eatHours = {
    0: '1',
    33.33333333333334: '2',
    66.66666666666667: '3',
    100: '4'
  };

  const commuteHours = {
    0: '0',
    25: '1',
    50: '2',
    75: '3',
    100: '4'
  };

class TimeCalculator extends Component {
    constructor(props){
        super(props)
        this.state = { 
            classHours: 120,
            sleepHours: 560,
            studyHours: 250,
            workHours: 120,
            eatHours: 140,
            commuteHours: 50,
            selfTime: 70,
            prepTime: 70
        }
    }
    render() { 
        const totalHours = (this.state.classHours 
            + this.state.sleepHours 
            + this.state.studyHours 
            + this.state.workHours 
            + this.state.eatHours
            + this.state.commuteHours
            + this.state.prepTime
            + this.state.selfTime)/10;
        return ( 
            <div className="card">
                <div className="card-body">
                    <p className="card-text mb-5">
                    There are 168 hours in a week for you to invest as you see fit. Use this calculator to see how balancing your academics, 
                    life, work and family will impact your schedule. You can adjust each slider as much as you like. The summary at the top 
                    will alert you when you run out of time. However over each question mark for tips and suggestions. When you are done we 
                    provide a summary at the bottom with suggestions.
                    </p>
                    <h6>1 Week = 168 Hours</h6>
                    <h5 id="totalHours" className={168- totalHours <= 0 ? "cardTitle red mb-4" : "cardTitle mb-4"}>Weekly Hours Left: {168- totalHours}</h5>
                    <div id="classHourDiv">
                        <h6>Hours in class per week:
                        <FontAwesomeIcon id="classHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="classHours" 
                                        title="Hours In Class" 
                                        body="You will spend one hour in class for every credit. A three credit class means
                                        three class hours each week. A 15 credit class load means you will be in class 15
                                        hours each week."
                                    />  
                        </h6>
                        <Slider marks={classHours} step={10} defaultValue={70} name="classHours" onChange={this.handleClassChange}/>

                    </div>
                    <br/>
                    <div id="studyHourDiv">
                        <h6 className={this.state.studyHours/10 <= 10 ? "red" : ""}>Hours studying per week:
                        <FontAwesomeIcon id="studyHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="studyHours" 
                                        title="Hours Studying" 
                                        body="A general rule is that you should spend 2 hours studying, reading, 
                                        writing and working on projects outside of each hour spent in class. 
                                        That would mean 6 hours of time outside of class for the typical 3 credit class."
                                        link="https://www.umflint.edu/advising/surviving_college"
                                    />  
                        </h6>
                        <Slider marks={studyHours} step={10} defaultValue={40} name="studyHours" onChange={this.handleStudyChange}/>
                    </div>
                    <br/>
                    <div id="sleepHourDiv">
                        <h6 className={this.state.sleepHours/10 <= 42 ? "red" : ""}>Hours sleeping per day:
                        <FontAwesomeIcon id="sleepHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="sleepHours" 
                                        title="Hours Sleeping" 
                                        body="Adults generally need 7-9 hours of sleep each night. 
                                        Reduced sleep can impact your phsyical, emotoinal, cognitive, 
                                        and mental health. Make sure you are priotizing your health and sleep."
                                        link="https://www.mayoclinic.org/healthy-lifestyle/adult-health/expert-answers/how-many-hours-of-sleep-are-enough/faq-20057898"
                                    />  
                        </h6>
                        <Slider marks={sleepHours} step={20} defaultValue={60} name="sleepHours" onChange={this.handleSleepChange}/>
                    </div>
                    <br/>
                    <div id="workHourDiv">
                        <h6>Hours working per week:
                        <FontAwesomeIcon id="workHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="workHours" 
                                        title="Hours Working" 
                                        body="Enter the number of hours do you anticipate working outside of class? 
                                        Working can be great to help pay for expenses and gain relevant experience. 
                                        You will also need to weigh how to balance your time with work and succeeding academically?"
                                        link="http://www.css.edu/the-sentinel-blog/working-while-in-college-weighing-the-pros-and-cons.html"
                                    />  
                        </h6>
                        <Slider marks={workHours} step={10} defaultValue={30} name="workHours" onChange={this.handleWorkChange}/>
                    </div>
                    <br/>
                    <div id="eatHourDiv">
                        <h6 className={this.state.eatHours/10 <= 7 ? "red" : ""}>Hours eating per day:
                        <FontAwesomeIcon id="eatHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="eatHours" 
                                        title="Hours Eating" 
                                        body="Enter the amount of time you will need to prep your get groceries, meals, and eat."
                                    />  
                        </h6>
                        <Slider marks={eatHours} step={100/3} defaultValue={100/3} name="eatHours" onChange={this.handleEatChange}/>
                    </div>
                    <br/>
                    <div id="commuteHourDiv">
                        <h6>Hours commuting per day:
                        <FontAwesomeIcon id="commuteHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="commuteHours" 
                                        title="Hours Commuting" 
                                        body="Enter the amount of time you plan to spend driving back and forth to 
                                        campus each day. Remember to account for time in the library, study groups, 
                                        or using the writing center and/or math lab."
                                    />  
                        </h6>
                        <Slider marks={commuteHours} step={25} defaultValue={25} name="commuteHours" onChange={this.handleCommuteChange}/>
                    </div>
                    <br/>
                    <div id="prepHourDiv">
                        <h6 className={this.state.prepTime/10 < 7 ? "red" : ""}>Hours getting ready per day:
                        <FontAwesomeIcon id="prepHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="prepHours" 
                                        title="Hours Getting Ready" 
                                        body="Enter the time you need each day to get ready and prep before you get going."
                                    />  
                        </h6>
                        <Slider marks={commuteHours} step={25} defaultValue={25} name="prepHours" onChange={this.handlePrepChange}/>
                    </div>
                    <br/>
                    <div id="selfHourDiv">
                        <h6 className={this.state.selfTime/10 < 7 ? "red" : ""}>Hours for self care per day:
                        <FontAwesomeIcon id="selfHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="selfHours" 
                                        title="Hours For Self Care" 
                                        body="Eneter the number of hours you need for spending social time with 
                                        family, friends, exercising, or spending time in nature."
                                    />  
                        </h6>
                        <Slider marks={commuteHours} step={25} defaultValue={25} name="selfHours" onChange={this.handleSelfChange}/>
                    </div>
                    <br/>

                </div> 
            </div>
         );
    }

    handleClassChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 50; break;
            case 10: retVal = 60; break;
            case 20: retVal = 70; break;
            case 30: retVal = 80; break;
            case 40: retVal = 90; break;
            case 50: retVal = 100; break;
            case 60: retVal = 110; break;
            case 70: retVal = 120; break;
            case 80: retVal = 130; break;
            case 90: retVal = 140; break;
            case 100: retVal = 150; break;
            default: break;

        }
        this.setState({
            classHours: retVal
        });
        this.props.classHours(parseFloat(retVal));
    }

    handleStudyChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 50; break;
            case 10: retVal = 100; break;
            case 20: retVal = 150; break;
            case 30: retVal = 200; break;
            case 40: retVal = 250; break;
            case 50: retVal = 300; break;
            case 60: retVal = 350; break;
            case 70: retVal = 400; break;
            case 80: retVal = 450; break;
            case 90: retVal = 500; break;
            case 100: retVal = 550; break;
            default: break;

        }
        this.setState({
            studyHours: retVal
        });
        this.props.studyHours(parseFloat(retVal));
    }

    handleSleepChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 50; break;
            case 20: retVal = 60; break;
            case 40: retVal = 70; break;
            case 60: retVal = 80; break;
            case 80: retVal = 90; break;
            case 100: retVal = 100; break;
            default: break;
        }
        this.setState({
            sleepHours: retVal*7
        });
        this.props.sleepHours(parseFloat(retVal*7));
    }

    handleWorkChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 0; break;
            case 10: retVal = 40; break;
            case 20: retVal = 80; break;
            case 30: retVal = 120; break;
            case 40: retVal = 160; break;
            case 50: retVal = 200; break;
            case 60: retVal = 240; break;
            case 70: retVal = 280; break;
            case 80: retVal = 320; break;
            case 90: retVal = 360; break;
            case 100: retVal = 400; break;
            default: break;

        }
        this.setState({
            workHours: retVal
        });
        this.props.workHours(parseFloat(retVal));
    }

    handleEatChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 10; break;
            case 33.33333333333334: retVal = 20; break;
            case 33.333333333333336: retVal = 20; break;
            case 66.66666666666667: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;
        }
        this.setState({
            eatHours: retVal*7
        });
        this.props.eatHours(parseFloat(retVal*7));
    }

    handleCommuteChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 0; break;
            case 25: retVal = 10; break;
            case 50: retVal = 20; break;
            case 75: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;

        }
        this.setState({
            commuteHours: retVal*5
        });
        this.props.commuteHours(parseFloat(retVal*5));
    }
    handlePrepChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 0; break;
            case 25: retVal = 10; break;
            case 50: retVal = 20; break;
            case 75: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;

        }
        this.setState({
            prepTime: retVal*7
        });
        this.props.prepTime(parseFloat(retVal*7));
    }
    handleSelfChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 0; break;
            case 25: retVal = 10; break;
            case 50: retVal = 20; break;
            case 75: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;

        }
        this.setState({
            selfTime: retVal*7
        });
        this.props.selfTime(parseFloat(retVal*7));
    }

}
 
export default TimeCalculator;