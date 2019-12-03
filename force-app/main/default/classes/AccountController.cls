public class AccountController {

     @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccountServ() {
       List<Account> acctLst = new List<Account>([SELECT Id, Name, Type, BillingState 
                                                         FROM Account
                                                 		 ORDER BY Name ASC]);
        return acctLst;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getCAAccountServ() {
       List<Account> acctLst = new List<Account>([SELECT Id,  Name, Type, BillingState 
                                                         FROM Account 
                                                         WHERE BillingState = 'CA'
                                                         ORDER BY Name ASC]);
        return acctLst;
    }
}