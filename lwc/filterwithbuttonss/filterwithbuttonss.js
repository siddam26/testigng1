import { LightningElement,wire,track } from 'lwc';
import { getPicklistValues } from "lightning/uiObjectInfoApi";
import FAMILY_FIELD from "@salesforce/schema/Product2.Family";
import BRANDS_FIELD from "@salesforce/schema/Product2.Brand__c";
import SIZES_FIELD from "@salesforce/schema/Product2.Size__c";

export default class Filterwithbuttonss extends LightningElement {

   istoggle=false;
   
   
    
   
    

    toggleclick(event)
  {
      this.istoggle=true
      
      
        
      
  }
 
  

  families = [];
    brand;
    size;

    @wire(getPicklistValues, {
        recordTypeId: "012000000000000AAA",
        fieldApiName: FAMILY_FIELD
    })
    familyPicklistValues;

    @wire(getPicklistValues, {
        recordTypeId: "012000000000000AAA",
        fieldApiName: BRANDS_FIELD
    })
    brandsPicklistValues;

    @wire(getPicklistValues, {
        recordTypeId: "012000000000000AAA",
        fieldApiName: SIZES_FIELD
    })
    sizesPicklistValues;

    handleChange(event) {
        this[event.target.name] = event.detail.value;
        console.log(event.detail.value);
        this.publishChange();
       
    }

    
    publishChange() {
        const message = {
            filtersData: {
                families: this.families,
                size: this.size,
                brand: this.brand
            }
        };
    }
}