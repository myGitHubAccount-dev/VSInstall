({
	getAllOpps : function(component, event, helper) {
		
        helper.callServerMethod(component, "c.getAllOpportunityServ", "v.allOpportunity","v.check");
        //1st Way : Synchoronous Calling of the controller method from other controller method
        helper.display(component, "c.display");
        
        //2nd Way : Asynchoronous Calling of the controller method from other controller method
        /*var methodRef = component.get("c.display");
        $A.enqueueAction(methodRef);*/
        
        //3rd Way :
        //component.show();
	},
    
    getWonOpps : function(component, event, helper) {
		
        helper.callServerMethod(component, "c.getWonOpportunityServ", "v.allOpportunity","v.check");
	},
    
    deleteTable : function(component, event, helper) {
     	component.set("v.check",false);
    },
    
    display : function(component, event, helper){
        alert("I'm called.....");
    },
})