import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sho-hide',
  templateUrl: './sho-hide.component.html',
  styleUrls: ['./sho-hide.component.css']
})
export class ShoHideComponent implements OnInit {
  studentList:any[]=[];  //store static data
  filteredLangList:any[]=[]; //filter lang and push to list
  langList:any[]=[]; //store the lang
  flag:boolean=false; 
  visibleIndex:number = -1;
  ListOfLang=[];
  listOfStudent=[];
  count:number=0;
  visibleLang:any[]=[]
  constructor() { }
  langlistData=[
    {
        id:23,
        name:"Saswat",
        age:24,
        languages:[
        {
            id:1,
            name:"English"
        },
        {
            id:2,
            name:"Odia"
        },
        {
            id:3,
            name:"Hindi"
        }	
        ]
    },
    {
        id:24,
        name:"Jayant",
        age:24,
        languages:[
        {
            id:2,
            name:"Odia"
        },
        {
            id:3,
            name:"Hindi"
        }	
        ]
    },
    {
        id:25,
        name:"Rachit",
        age:28,
        languages:[
        {
            id:1,
            name:"English"
        },
        {
            id:2,
            name:"Odia"
        },
        {
            id:3,
            name:"Hindi"
        }	
        ]
    },
    {
        id:26,
        name:"Tanmaya",
        age:31,
        languages:[
        {
            id:1,
            name:"English"
        }	
        ]
    },
    {
        id:27,
        name:"Sushant",
        age:61,
        languages:[]
    },
    {
        id:28,
        name:"Datta",
        age:31,
        languages:[
        {
            id:2,
            name:"Odia"
        }	
        ]
    },
    {
        id:29,
        name:"Rakesh",
        age:29,
        languages:[
        {
            id:1,
            name:"English"
        },
        {
            id:3,
            name:"Hindi"
        }	
        ]
    },
    {
        id:30,
        name:"Kanha",
        age:17,
        languages:[
        {
            id:1,
            name:"English"
        }	
        ]
    },  
    ]
  ngOnInit() {
   this.studentList=this.langlistData;    
    
     this.getLangList();
  }
 getLangList(){
    this.langList=[];
    this.studentList.forEach((dataObj) => {     
       dataObj.languages.forEach((langobj,index) => {
    
     for(let i=0;i<this.langList.length;i++){
      this.flag = false;
       if(langobj.name === this.langList[i]){
         this.flag = true;
         break;
       }
     }
     if(!this.flag){
       this.langList.push(langobj.name); 
     }
    });     
   });
   console.log(this.langList);
  }

  onclickEnglishDiv(clickLang,index){
    // console.log(index); 
    // console.log(clickLang);
    if (this.visibleIndex === index) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = index;
    }
    this.visibleLang[clickLang] = !this.visibleLang[clickLang];
    // if(this.visibleIndex !== index){
    //   this.visibleIndex=index;
    // }
    // if(this.visibleIndex === index){
    //   this.visibleIndex = -1;
    // }

    this.filteredLangList=[];   
     this.studentList.forEach((dataObj) => {
       if(dataObj.age > 20 && dataObj.age < 60){
        dataObj.languages.forEach((langobj) => {    
          if(langobj.name == clickLang){
            this.filteredLangList.push(dataObj);
          }      
       });
       }    
    });
    // console.log(this.filteredLangList);
  }
  listAccordingTOLang(){  
    this.langList.forEach(langName => {
      this.ListOfLang=[];
      this.studentList.forEach((dataObj) => {     
        dataObj.languages.forEach((langobj,index) => {
       if(langobj.name == langName){
         let studObj={
           id:dataObj.id,
           name:dataObj.name,
           age:dataObj.age
         }
          this.ListOfLang.push(studObj);
       }    
     });     
    });

    let studentLangObj={
      id:this.count,
      name:langName,
      student:this.ListOfLang
    }
    this.listOfStudent.push(studentLangObj);
    this.count++;
    });
    console.log(this.listOfStudent);

  
  }

}