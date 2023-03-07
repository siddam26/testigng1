import { LightningElement,track,wire } from 'lwc';
import getAcc1 from '@salesforce/apex/accountIndustry.getAccount1';
import getAcc2 from '@salesforce/apex/accountIndustry.getAccount2';

export default class AccounDataUsingApex extends LightningElement {
    @track columns = [{
        label: 'Account name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Annual Revenue',
        fieldName: 'AnnualRevenue',
        type: 'Currency',
        sortable: true
    },
    {
        label: 'Industry',
        fieldName: 'Industry',
        type: 'text',
        sortable: true
    }];
    @track accountList;
    @track accountList1;

    @track data 
     
    
    
    @wire(getAcc1) getAccount1({error,data}){
        if (data) {
            this.accountList = data;
        } else if (error) {
            this.data = undefined;
        }
    }
    @wire(getAcc2) getAccount2({error,data}){
        if (data) {
            this.accountList1 = data;
        } else if (error) {
            this.data = undefined;
        }
    }
    
}