({
	callServerMethod : function(component,methodName,attributeName,attributeCheck) {
		//1.Get apex method reference using component.get();
        var methodRef = component.get(methodName);
        
        //2.Register the callback function based on methodRef
        methodRef.setCallback(this, function(response){
            //3.Check the state of the response
            var state = response.getState();
            
            if(state == "SUCCESS") {
                var result = response.getReturnValue();
                component.set(attributeName,result);
                component.set(attributeCheck,true);
            }
        });
        
        //5. Put this call in framework queue so that server could take this request
        //and execute asynchronously.
        $A.enqueueAction(methodRef);

	}
})