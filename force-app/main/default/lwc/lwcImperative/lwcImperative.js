import { LightningElement,track } from 'lwc';
import getOpps from '@salesforce/apex/OpportunityController.getAllOpportunityServ';
export default class LwcImperative extends LightningElement {
    @track oppsLst;
    @track error;

    handleLoad(){
        getOpps()
            .then(result => {
                this.oppsLst = result;
                this.error = undefined;
            })
            .catch(result => {
                this.error = result;
                this.oppsLst = undefined;
            });
    }
}