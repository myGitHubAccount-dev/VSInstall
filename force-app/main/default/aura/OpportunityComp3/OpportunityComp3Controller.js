({
	getAllOpps : function(component, event, helper) {
		
        helper.callServerMethod(component, "c.getAllOpportunityServ", "v.allOpportunity","v.check");
        helper.displayToast("Loading All Opportunities");
	},
    
    getWonOpps : function(component, event, helper) {
		
        helper.callServerMethod(component, "c.getWonOpportunityServ", "v.allOpportunity","v.check");
        helper.displayToast("Loading Won Opportunities");
	},
    
    deleteTable : function(component, event, helper) {
     	component.set("v.check",false);
        helper.displayToastError("Table deleted");
    },
    
    showSpinner : function(component, event, helper) {
        //Get spinner reference
     	var spinRef = component.find("spin");
        // Remove slds-hide
        $A.util.removeClass(spinRef,"slds-show");
    },
    
    hideSpinner : function(component, event, helper) {
        //Get spinner reference
     	var spinRef = component.find("spin");
        // Remove slds-hide
        $A.util.addClass(spinRef,"slds-hide");
    },
})