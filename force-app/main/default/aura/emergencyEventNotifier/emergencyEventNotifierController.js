({
	dial911 : function(component, event, helper) {
		
      	//1. Get event reference using $A.get
        //application event will be referenced via e.namespace:event
        	var eventRef = $A.get("e.c:emergencyEvent");
        	var input = component.get("v.inputFromUser");
        //2. Set event attributes
        	eventRef.setParams({
                "message" : input
            });
        //3. Fire the event
        	eventRef.fire();
	}
})