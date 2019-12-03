({
	handleMessage : function(component, event, helper) {
        //Get the event attribute 
		var message = event.getParam("message");
        alert(message);
        
	}
})