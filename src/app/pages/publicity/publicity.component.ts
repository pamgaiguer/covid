import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { publicity } from './publicity'

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.scss']
})
export class PublicityComponent implements OnInit {
  
  allpublicity = publicity;
  
  constructor() { }
  
  ngOnInit(): void {
    
    
    // console.log(
    //   this.allpublicity.sort((a, b) => ref[a.data] - ref[b.data])
    // )
    
    function sortByProperty(property){  
      return function(a,b){  
        if(a[property] > b[property])  
        return 1;  
        else if(a[property] < b[property])  
        return -1;  
        
        return 0;  
      }  
    }
    // const jsonOrdered = this.allpublicity.sort(sortByProperty("data")).reverse();
    
    // console.log(jsonOrdered)
    
  }
  
}
