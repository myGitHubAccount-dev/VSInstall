({
	getAllOpps : function(component, event, helper) {
		
        //1.Get apex method reference using component.get();
        var methodRef = component.get("c.getAllOpportunityServ");
        
        //2.Register the callback function based on methodRef
        methodRef.setCallback(this, function(response){
            //3.Check the state of the response
            var state = response.getState();
            
            if(state == "SUCCESS") {
                var result = response.getReturnValue();
                component.set("v.allOpportunity",result);
                component.set("v.check",true);
            }
        });
        
        //5. Put this call in framework queue so that server could take this request
        //and execute asynchronously.
        $A.enqueueAction(methodRef);
	},
    
    getWonOpps : function(component, event, helper) {
		//1.Get apex method reference using component.get();
        var methodRef = component.get("c.getWonOpportunityServ");
        
        //2.Register the callback function based on methodRef
        methodRef.setCallback(this, function(response){
            //3.Check the state of the response
            var state = response.getState();
            
            if(state == "SUCCESS") {
                var result = response.getReturnValue();
                component.set("v.allOpportunity",result);
                component.set("v.check",true);
            }
        });
        
        //5. Put this call in framework queue so that server could take this request
        //and execute asynchronously.
        $A.enqueueAction(methodRef);
	},
})