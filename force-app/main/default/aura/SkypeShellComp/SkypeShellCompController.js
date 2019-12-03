({
	getPhone : function(component, event, helper) {
        helper.callServerMethod(component,
                                "c.getPhoneNumber",
                                "v.phoneNumber",
                                "v.check",
                                {"id" : component.get("v.recordId")});
	}
})