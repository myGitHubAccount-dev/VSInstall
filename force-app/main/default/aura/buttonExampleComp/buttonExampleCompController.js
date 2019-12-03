({
	handleClick : function(component, event, helper) {
		//Set all the button's variant as neutral
        for(var i = 1; i<=4; i++) {
            var btn = component.find(i);
            btn.set("v.variant","neutral");
        }
        
        //Set varaint of button that has been clicked to variant as brand
        var btnClicked = event.getSource();
        var btnLabel = btnClicked.get("v.label");
        btnClicked.set("v.variant","brand");
	}
})