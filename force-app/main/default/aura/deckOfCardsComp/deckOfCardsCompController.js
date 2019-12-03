({
	handleClick : function(component, event, helper) {
		//Set all the button's variant as neutral
        for(var i = 1; i<=2; i++) {
            var btn = component.find(i);
            btn.set("v.variant","neutral");
        }
        
        //Set varaint of button that has been clicked to variant as brand
        var btnClicked = event.getSource();
        var btnLabel = btnClicked.get("v.label");
        btnClicked.set("v.variant","brand");
        
        //Get div tags reference using component.find() 
        var sunDivRef = component.find("sunDiv");
        var moonDivRef = component.find("moonDiv");
        
        //Check the label to see which button has been clicked
        if(btnLabel == "Sun") {
            $A.util.removeClass(sunDivRef,"slds-hide");
            $A.util.addClass(moonDivRef,"slds-hide");
            
        }
        else {
            $A.util.removeClass(moonDivRef,"slds-hide");
            $A.util.addClass(sunDivRef,"slds-hide");
        }
        
        
	}
})