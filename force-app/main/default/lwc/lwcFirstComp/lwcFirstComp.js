import { LightningElement, api } from 'lwc';

export default class LwcFirstComp extends LightningElement {
    @api
     message = 'Good Afternoon, time to go home';

    changeMessage() {
       this.message = 'Good Evening';
    }
}