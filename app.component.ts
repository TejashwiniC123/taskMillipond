import { Component, ViewChild, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
 
  imageUrl: any = "https://i.ibb.co/fDWsn3G/buck.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  employeeForm: FormGroup;
  
 name:any;
 email:any;
 phone:any;
 location:any;
 address:any;
  employeeDetails=[];
  image: any;
constructor()
{
}
ngOnInit()
{
  this.employeeDetails=[{name:"Tejashwini",email:"tejushekar@gmail.com",image:"https://i.ibb.co/fDWsn3G/buck.jpg",phone:"9874563214",location:"Bengaluru",address:"Binnypete"}]
  this.employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required,
      Validators.minLength(4),
]),
email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
phone:new FormControl(''),
location:new FormControl(''),
address:new FormControl('')
});
  
  }

  get Name() {
    return this.employeeForm.get('name');
} 
get Email() {
  return this.employeeForm.get('email');
}
uploadFile(event) {
  let reader = new FileReader(); // HTML5 FileReader API
  let file = event.target.files[0];
  if (event.target.files && event.target.files[0]) {
    reader.readAsDataURL(file);

    // When file uploads set it to file formcontrol
    reader.onload = () => {
      this.imageUrl = reader.result;
      this.employeeForm.patchValue({
        file: reader.result
      });
      this.editFile = false;
      this.removeUpload = true;
    }
      
  }
}

viewData(item){
console.log(item);
this.name=item.name;
this.image=item.image;
this.email=item.email;
this.phone=item.phone;
this.location=item.location;
this.address=item.address;
}
save(){
  if(this.employeeForm.value!=null){
  
  this.employeeDetails.push({name:this.name,email:this.email,image:this.imageUrl,phone:this.phone,location:this.location,address:this.address})
console.log(this.employeeDetails);}
this.employeeForm.reset();
}

}
