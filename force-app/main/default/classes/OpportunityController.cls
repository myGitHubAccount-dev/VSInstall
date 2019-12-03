public class OpportunityController {

    //Method to retrieve all Opportunities
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpportunityServ() {
       List<Opportunity> oppLst = new List<Opportunity>([SELECT Id, Name, Amount, StageName 
                                                         FROM Opportunity]);
        return oppLst;
    }
    
    //Method to retrieve only Won Opportunities
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getWonOpportunityServ() {
       List<Opportunity> oppLst = new List<Opportunity>([SELECT Id, Name, Amount, StageName 
                                                         FROM Opportunity 
                                                         WHERE StageName = 'Closed Won']);
        return oppLst;
    }
    
}