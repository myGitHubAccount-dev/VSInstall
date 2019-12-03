import { LightningElement,wire } from 'lwc';
import getOpps from '@salesforce/apex/OpportunityController.getAllOpportunityServ';

export default class LwcOppComp extends LightningElement {
    @wire(getOpps)
     oppsLst;
}