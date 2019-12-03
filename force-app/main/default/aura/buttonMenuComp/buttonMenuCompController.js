({
	handleSelect : function(component, event, helper) {
        var btnClicked = event.getParam("value");
        
        //alert(btnClicked);
        if(btnClicked == 'View') {
            	helper.performAction("e.force:navigateToSObject",component.get("v.recordId"));
        }
        else if(btnClicked == 'Edit') {
                helper.performAction("e.force:editRecord",component.get("v.recordId"));
        }
        else {
            $A.createComponent("c:modalComp",
                           {
                               "title" : "Menu Message",
                               "body"  : "This feature is not available"
                           },
                           function(myBox){
                               //1. Get div reference
                               var modalDivRef = component.find("modalDiv");
                               //2. Set body of the div with myBox
                                modalDivRef.set("v.body",myBox);
                           });
        }
        
	}
})