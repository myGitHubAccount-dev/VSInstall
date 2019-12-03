({
	callServerMethod : function(component,methodName,attributeName,attributeCheck,parameters) {
		//1.Get apex method reference using component.get();
        var methodRef = component.get(methodName);
        
        //2.Check to see if there are any parameters, if so set them
        if(parameters){
            methodRef.setParams(parameters);
        }
    
        //3.Register the callback function based on methodRef
        methodRef.setCallback(this, function(response){
            //4.Check the state of the response
            var state = response.getState();
            
            if(state == "SUCCESS") {
                var result = response.getReturnValue();
                component.set(attributeName,result);
                component.set(attributeCheck,true);
                //alert(result);
            }
        });
        
        //6. Put this call in framework queue so that server could take this request
        //and execute asynchronously.
        $A.enqueueAction(methodRef);

	},
    
    displayToast : function(message) {
        //Get the event reference
        	var eventRef = $A.get("e.force:showToast");
        //Set the event attribute
            if(eventRef) {
                eventRef.setParams({
                    "title" : "Success",
                    "duration" : 6000,
                    "type" : "Success",
                    "message" : message,
                    
                });
            }
            else{
                alert(message);
            }
        //Fire
        	eventRef.fire();
    },
    
    displayToastError : function(message) {
        //Get the event reference
        	var eventRef = $A.get("e.force:showToast");
        //Set the event attribute
            if(eventRef) {
                eventRef.setParams({
                    "title" : "Table Deleted",
                    "duration" : 6000,
                    "type" : "Error",
                    "message" : message,
                    "mode" : "sticky"
                });
            }
            else{
                alert(message);
            }
        //Fire
        	eventRef.fire();
    },
    

})