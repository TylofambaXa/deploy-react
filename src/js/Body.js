import React, { Component } from 'react';
import CostCalculator from './CostCalculator';
import TimeCalculator from './TimeCalculator';
import Summary from './Summary';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            costInfo: null,
            timeInfo: null,
            credits: null,
            creditsPerSem: null,


            tuition: null,
            housing: null,
            bookCost: null,
            food: null,
            mealPlan: null,
            gas: null,
            parking: null,
            carInsurance: null,
            rent: null,
            utilities: null,
            rentInsurance: null,

            scholarships: null,
            income: null,
            moneyFromParents: null,
            loans: null,

            classHours: 120,
            sleepHours: 560,
            studyHours: 250,
            workHours: 120,
            eatHours: 140,
            commuteHours: 50,
            selfTime: 70,
            prepTime: 70,

            anticipatedSalary: 40000
        };    
    }

    costInfo = (dataFromChild) => {
        this.setState({ costInfo: dataFromChild });
    }

    timeInfo = (dataFromChild) => {
        this.setState({ timeInfo: dataFromChild });
    }

    credits = (dataFromChild) => {
        this.setState({ credits: dataFromChild });
    }

    creditsPerSem = (dataFromChild) => {
        this.setState({ creditsPerSem: dataFromChild });
    }
    tuition = (dataFromChild) => {
        this.setState({ tuition: dataFromChild });
    }
    housing = (dataFromChild) => {
        this.setState({ housing: dataFromChild });
    }
    bookCost = (dataFromChild) => {
        this.setState({ bookCost: dataFromChild });
    }
    food = (dataFromChild) => {
        this.setState({ food: dataFromChild });
    }
    mealPlan = (dataFromChild) => {
        this.setState({ mealPlan: dataFromChild });
    }
    gas = (dataFromChild) => {
        this.setState({ gas: dataFromChild });
    }
    parking = (dataFromChild) => {
        this.setState({ parking: dataFromChild });
    }
    carInsurance = (dataFromChild) => {
        this.setState({ carInsurance: dataFromChild });
    }
    rent = (dataFromChild) => {
        this.setState({ rent: dataFromChild });
    }
    utilities = (dataFromChild) => {
        this.setState({ utilities: dataFromChild });
    }
    rentInsurance = (dataFromChild) => {
        this.setState({ rentInsurance: dataFromChild });
    }
    scholarships = (dataFromChild) => {
        this.setState({ scholarships: dataFromChild });
    }
    income = (dataFromChild) => {
        this.setState({ income: dataFromChild });
    }
    moneyFromParents = (dataFromChild) => {
        this.setState({ moneyFromParents: dataFromChild });
    }
    loans = (dataFromChild) => {
        this.setState({ loans: dataFromChild });
    }

    classHours = (dataFromChild) => {
        this.setState({ classHours: dataFromChild });
    }
    sleepHours = (dataFromChild) => {
        this.setState({ sleepHours: dataFromChild });
    }
    studyHours = (dataFromChild) => {
        this.setState({ studyHours: dataFromChild });
    }
    workHours = (dataFromChild) => {
        this.setState({ workHours: dataFromChild });
    }
    eatHours = (dataFromChild) => {
        this.setState({ eatHours: dataFromChild });
    }
    commuteHours = (dataFromChild) => {
        this.setState({ commuteHours: dataFromChild });
    }
    selfTime = (dataFromChild) => {
        this.setState({ selfTime: dataFromChild });
    }
    prepTime = (dataFromChild) => {
        this.setState({ prepTime: dataFromChild });
    }
    anticipatedSalary = (dataFromChild) => {
        this.setState({ anticipatedSalary: dataFromChild });
    }

    render() { 
        return (
        <div className="container pt-4 pb-4">
            <div className="row">
                <div className="col-md-6 mt-3">
                    <CostCalculator callbackFromParent={this.costInfo} 
                    yearTotal={this.yearTotal} 
                    credits={this.credits}
                    creditsPerSem={this.creditsPerSem}
                    tuition={this.tuition}
                    housing={this.housing}
                    bookCost={this.bookCost}
                    food={this.food}
                    mealPlan={this.mealPlan}
                    gas={this.gas}
                    parking={this.parking}
                    carInsurance={this.carInsurance}
                    rent={this.rent}
                    utilities={this.utilities}
                    rentInsurance={this.rentInsurance}
                    scholarships={this.scholarships}
                    income={this.income}
                    moneyFromParents={this.moneyFromParents}
                    loans={this.loans}
                    anticipatedSalary={this.anticipatedSalary}/>
                </div>
                <div className="col-md-6 mt-3">
                    <TimeCalculator callbackFromParent={this.timeInfo}
                                        classHours={this.classHours}
                                        sleepHours={this.sleepHours}
                                        studyHours={this.studyHours}
                                        workHours={this.workHours}
                                        eatHours={this.eatHours}
                                        commuteHours={this.commuteHours}
                                        selfTime={this.selfTime}
                                        prepTime={this.prepTime}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-5">
                    <Summary costInfo={this.state.costInfo} 
                    timeInfo={this.state.timeInfo} 
                    yearTotal={this.state.yearTotal}
                    semToGrad={Math.ceil(this.state.credits / (2*this.state.creditsPerSem))}
                    yearTotal={this.state.tuition 
                        + this.state.housing 
                        + this.state.bookCost 
                        + this.state.food
                        + this.state.mealPlan
                        + this.state.gas
                        + this.state.parking
                        + this.state.carInsurance
                        + this.state.rent
                        + this.state.utilities
                        + this.state.rentInsurance}
                    yearRemainingCost={(this.state.tuition 
                        + this.state.housing 
                        + this.state.bookCost 
                        + this.state.food
                        + this.state.mealPlan
                        + this.state.gas
                        + this.state.parking
                        + this.state.carInsurance
                        + this.state.rent
                        + this.state.utilities
                        + this.state.rentInsurance)
                        - this.state.scholarships
                        - this.state.income
                        - this.state.moneyFromParents
                        - this.state.loans}
                    remainingHours={
                        168-((this.state.classHours 
                            + this.state.sleepHours 
                            + this.state.studyHours 
                            + this.state.workHours 
                            + this.state.eatHours
                            + this.state.commuteHours
                            + this.state.prepTime
                            + this.state.selfTime)/10)}
                    sleepHours={this.state.sleepHours/10}
                    selfTime={this.state.selfTime/10}
                    studyHours={this.state.studyHours/10}
                    classHours={this.state.classHours/10}
                    parking={this.state.parking}
                    gas={this.state.gas}
                    anticipatedSalary = {this.state.anticipatedSalary}
                    tuition={this.state.tuition}
                    income={this.state.income}

                    />
                </div>

            </div>
        </div>
         );
    }
}
 
export default Body;