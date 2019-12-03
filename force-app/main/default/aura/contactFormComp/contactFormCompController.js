({
	saveRecord : function(component, event, helper) {
		helper.callServerMethod(component,
                                "c.createContact",
                                "v.status",
                                "v.check",
                                {"con" : component.get("v.contact")});
        component.set("v.status");
	},
    changeOnLastName : function(component, event, helper) {
        var con = component.get("v.contact");
        var btn = component.find("btn");
        if(con.LastName.length >= 2){
            btn.set("v.disabled",false);
        }
        else{
            btn.set("v.disabled",true);
        }
    },
})