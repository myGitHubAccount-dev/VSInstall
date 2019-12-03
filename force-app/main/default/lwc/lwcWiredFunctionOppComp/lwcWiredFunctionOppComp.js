import { LightningElement,wire,track } from 'lwc';
import getOpps from '@salesforce/apex/OpportunityController.getAllOpportunityServ';

export default class LwcWiredFunctionOppComp extends LightningElement {
    
    @track 
    oppsLst;

    @track
    error;

    @wire(getOpps)
    displayOpps({error,data}){
        if(data){
            this.oppsLst = data;
            this.error = undefined; // MUST ** If you have not mentioned value for a property, it will give an error. 
        }
        else if(error){
            this.error = error;
            this.oppsLst = undefined; // MUST ** If you have not mentioned value for a property, it will give an error. 
        }
    }
}