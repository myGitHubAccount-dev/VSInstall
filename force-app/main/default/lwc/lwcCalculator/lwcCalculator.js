import { LightningElement, track } from 'lwc';

export default class LwcCalculator extends LightningElement {
    
    firstNumber = 20;
    secondNumber = 10;
    @track
    result = 0;

    add() {
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }

    subtract() {
        this.result = this.firstNumber - this.secondNumber;
    }

    multiplication() {
        this.result = this.firstNumber * this.secondNumber;
    }

    division() {
        this.result = this.firstNumber / this.secondNumber;
    }

    inputFirstNumber(event){
        this.firstNumber = event.target.value;
    }

    inputSecondNumber(event) {
        this.secondNumber = event.target.value;
    }
}