import { LightningElement,track} from 'lwc';
import login from '@salesforce/apex/LoginUser.login';

export default class AmazonClone extends LightningElement {
 
    @track isError= false;
    errorMessage=' ';
    email;
     password;
    handleUsername(event)
    {
    this.email = event.target.value;
    }
    handlePassword(event)
    {
     this.password = event.target.value;
    }
    handleLogin()
    {
         if(this.email != null && this.password!= null)
         {
          login({username:this.email,password: this.password})
          .then((result)=>
            {
                 this.isError=false;
              console.log('result is',result);
            })
            .catch((error)=>{
                console.log('Error is Changes:',error);
                this.isError = true;
                this.errorMessage = error.body.message;
            })
         }
        console.log("Inside Login")
        console.log("Email val:",this.email)
        console.log("Password:",this.password)
    }
}