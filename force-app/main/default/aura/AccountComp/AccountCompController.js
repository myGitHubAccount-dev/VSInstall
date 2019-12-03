({
	getAllAccts : function(component, event, helper) {
		
        helper.callServerMethod(component, "c.getAllAccountServ", "v.allAccount","v.check");
	},
    
    getCaAccts : function(component, event, helper) {
		
        helper.callServerMethod(component, "c.getCAAccountServ", "v.allAccount","v.check");
	},
    
    deleteTable : function(component, event, helper) {
     	component.set("v.check",false);
    },
})