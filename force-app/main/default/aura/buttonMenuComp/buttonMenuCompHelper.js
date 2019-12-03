({
	performAction : function(eventName,recordId) {
		var eventRef = $A.get(eventName); 
        if(eventRef) {
            eventRef.setParams({
                "recordId" : recordId
        	});
            eventRef.fire();
        }
        
        else {
            alert("Please use LEX or Salesforce Mobile App to perform this operation");
        }
	}
})