// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.RquestionOne = ko.observable("0");
    this.RquestionTwo = ko.observable("0");
    this.RquestionThree = ko.observable("0");
    this.RquestionFour = ko.observable("0");
    this.RquestionFive = ko.observable("0");
    this.RquestionSix = ko.observable("0");
    this.RquestionSeven = ko.observable("0");
    this.Rquestions = ko.computed(function(){
        return (Number(this.RquestionOne()) + Number(this.RquestionTwo()) + Number(this.RquestionThree()) + Number(this.RquestionFour()) + Number(this.RquestionFive()) + Number(this.RquestionSix()) + Number(this.RquestionSeven()))/7;
    }, this);
    this.RquestionsFormatted = ko.computed(function(){
    	return Number(this.Rquestions()).toFixed(2);
    }, this);


    this.DquestionOne = ko.observable("0");
    this.DquestionTwo = ko.observable("0");
    this.DquestionThree = ko.observable("0");
    this.DquestionFour = ko.observable("0");
    this.DquestionFive = ko.observable("0");
    this.DquestionSix = ko.observable("0");
    this.DquestionSeven = ko.observable("0");
    this.Dquestions = ko.computed(function(){
        return (Number(this.DquestionOne()) + Number(this.DquestionTwo()) + Number(this.DquestionThree()) + Number(this.DquestionFour()) + Number(this.DquestionFive()) + Number(this.DquestionSix()) + Number(this.DquestionSeven()))/7;
    }, this);
    this.DquestionsFormatted = ko.computed(function(){
    	return Number(this.Dquestions()).toFixed(2);
    }, this);


    this.EquestionOne = ko.observable("0");
    this.EquestionTwo = ko.observable("0");
    this.EquestionThree = ko.observable("0");
    this.EquestionFour = ko.observable("0");
    this.EquestionFive = ko.observable("0");
    this.EquestionSix = ko.observable("0");
    this.EquestionSeven = ko.observable("0");
    this.Equestions = ko.computed(function(){
        return (Number(this.EquestionOne()) + Number(this.EquestionTwo()) + Number(this.EquestionThree()) + Number(this.EquestionFour()) + Number(this.EquestionFive()) + Number(this.EquestionSix()) + Number(this.EquestionSeven()))/7;
    }, this);
    this.EquestionsFormatted = ko.computed(function(){
    	return Number(this.Equestions()).toFixed(2);
    }, this);


    this.LquestionOne = ko.observable("0");
    this.LquestionTwo = ko.observable("0");
    this.LquestionThree = ko.observable("0");
    this.LquestionFour = ko.observable("0");
    this.LquestionFive = ko.observable("0");
    this.LquestionSix = ko.observable("0");
    this.LquestionSeven = ko.observable("0");
    this.Lquestions = ko.computed(function(){
        return (Number(this.LquestionOne()) + Number(this.LquestionTwo()) + Number(this.LquestionThree()) + Number(this.LquestionFour()) + Number(this.LquestionFive()) + Number(this.LquestionSix()) + Number(this.LquestionSeven()))/7;
    }, this);
    this.LquestionsFormatted = ko.computed(function(){
    	return Number(this.Lquestions()).toFixed(2);
    }, this);


    this.HquestionOne = ko.observable("0");
    this.HquestionTwo = ko.observable("0");
    this.HquestionThree = ko.observable("0");
    this.HquestionFour = ko.observable("0");
    this.HquestionFive = ko.observable("0");
    this.HquestionSix = ko.observable("0");
    this.HquestionSeven = ko.observable("0");
    this.Hquestions = ko.computed(function(){
        return (Number(this.HquestionOne()) + Number(this.HquestionTwo()) + Number(this.HquestionThree()) + Number(this.HquestionFour()) + Number(this.HquestionFive()) + Number(this.HquestionSix()) + Number(this.HquestionSeven()))/7;
    }, this);
    this.HquestionsFormatted = ko.computed(function(){
    	return Number(this.Hquestions()).toFixed(2);
    }, this);


    this.IquestionOne = ko.observable("0");
    this.IquestionTwo = ko.observable("0");
    this.IquestionThree = ko.observable("0");
    this.IquestionFour = ko.observable("0");
    this.IquestionFive = ko.observable("0");
    this.IquestionSix = ko.observable("0");
    this.IquestionSeven = ko.observable("0");
    this.Iquestions = ko.computed(function(){
        return (Number(this.IquestionOne()) + Number(this.IquestionTwo()) + Number(this.IquestionThree()) + Number(this.IquestionFour()) + Number(this.IquestionFive()) + Number(this.IquestionSix()) + Number(this.IquestionSeven()))/7;
    }, this);
    this.IquestionsFormatted = ko.computed(function(){
    	return Number(this.Iquestions()).toFixed(2);
    }, this);


    this.OquestionOne = ko.observable("0");
    this.OquestionTwo = ko.observable("0");
    this.OquestionThree = ko.observable("0");
    this.OquestionFour = ko.observable("0");
    this.OquestionFive = ko.observable("0");
    this.OquestionSix = ko.observable("0");
    this.OquestionSeven = ko.observable("0");
    this.Oquestions = ko.computed(function(){
        return (Number(this.OquestionOne()) + Number(this.OquestionTwo()) + Number(this.OquestionThree()) + Number(this.OquestionFour()) + Number(this.OquestionFive()) + Number(this.OquestionSix()) + Number(this.OquestionSeven()))/7;
    }, this);
    this.OquestionsFormatted = ko.computed(function(){
    	return Number(this.Oquestions()).toFixed(2);
    }, this);


    this.AquestionOne = ko.observable("0");
    this.AquestionTwo = ko.observable("0");
    this.AquestionThree = ko.observable("0");
    this.AquestionFour = ko.observable("0");
    this.AquestionFive = ko.observable("0");
    this.AquestionSix = ko.observable("0");
    this.AquestionSeven = ko.observable("0");
    this.Aquestions = ko.computed(function(){
        return (Number(this.AquestionOne()) + Number(this.AquestionTwo()) + Number(this.AquestionThree()) + Number(this.AquestionFour()) + Number(this.AquestionFive()) + Number(this.AquestionSix()) + Number(this.AquestionSeven()))/7;
    }, this);
    this.AquestionsFormatted = ko.computed(function(){
    	return Number(this.Aquestions()).toFixed(2);
    }, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());