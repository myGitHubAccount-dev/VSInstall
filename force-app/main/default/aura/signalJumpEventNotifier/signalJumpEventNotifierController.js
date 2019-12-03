({
	sendMessage : function(component, event, helper) {
		//1. Get event reference using component.getEvent();
			var eventRef = component.getEvent("signalJump");
		//2. Set event attribute value using setParams(); and in JSON format
            eventRef.setParams({
                "message" : "Sharath has jumped the signal, fine him"
            });
        
        //3. Fire the event 
        	eventRef.fire();
	}
})