({
	add : function(component, event, helper) {
		var firstNumber = component.get("v.firstNumber");
        var secondNumber = component.get("v.secondNumber");
        
        var result = parseInt(firstNumber) + parseInt(secondNumber);
        component.set("v.result",result);
        //alert("The value is = "+result);
	},
    
    subtract : function(component, event, helper) {
		var firstNumber = component.get("v.firstNumber");
        var secondNumber = component.get("v.secondNumber");
        
        var result = firstNumber - secondNumber;
        component.set("v.result",result);
        
        //alert("The value is = "+result);
	},
    
    multiply : function(component, event, helper) {
		var firstNumber = component.get("v.firstNumber");
        var secondNumber = component.get("v.secondNumber");
        
        var result = firstNumber * secondNumber;
        component.set("v.result",result);
        //alert("The value is = "+result);
	},
    
    division : function(component, event, helper) {
		var firstNumber = component.get("v.firstNumber");
        var secondNumber = component.get("v.secondNumber");
        
        var result = firstNumber / secondNumber;
        component.set("v.result",result);
        //alert("The value is = "+result);
	},
    
})