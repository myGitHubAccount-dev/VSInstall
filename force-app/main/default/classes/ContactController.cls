public class ContactController {
	
    @AuraEnabled(cacheable=true)
    public static String getPhoneNumber(String id) {
        List<Contact> conLst = new List<Contact>([SELECT Id, Phone 
                                                  FROM Contact 
                                                  WHERE Id = :id]);
       
        return conLst[0].Phone;
    }
    
    @AuraEnabled
    public static String createContact(Contact con) {
        
        try{
           insert con;
           return 'Contact created successfully';
        }
        catch(Exception ex){
            return 'Could not create Contact ' +ex.getMessage();
        }
        
    }
}