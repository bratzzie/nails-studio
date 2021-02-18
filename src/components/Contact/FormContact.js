import React from 'react'
import {Button} from '../Button'
import emailjs from 'emailjs-com'
class FormContact extends React.Component {
    
    constructor(props){
        super(props);
    
        this.state = {
          fields: {},
          errors: {}
        }
      }
    
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if(typeof fields["name"] !== "undefined"){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
          }      	
        }
    
        //Email
        if(!fields["phone"]){
          formIsValid = false;
          errors["phone"] = "Cannot be empty";
        }
    
        if(typeof fields["phone"] !== "undefined"){
          if(!fields["phone"].match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
            formIsValid = false;
            errors["phone"] = "Not valid number";
           }   
          }
        
    
    
    
        this.setState({errors: errors});
        return formIsValid;
      }
    
      contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
           emailjs.sendForm('service_tqcez7i', 'template_hglmjwt', e.target, `${process.env.GATSBY_API_KEY}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
       
          alert("Please, wait for your back call!");
         
        }else{
          alert("Try again!")
        }
    

      
      }
    
      handleChange(field, e){    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }




    

        render(){
          return (
             
        <form  className="form" onSubmit= {this.contactSubmit.bind(this)}>
            <div className="input-group">
            <input  ref="name" type="text" id="nameUser" placeholder="John" name="name" 
            onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                <label htmlFor="nameUser">Name</label>
                <span className="error">{this.state.errors["name"]}</span>
            </div>
                  <div className="input-group">
                  <input ref="phone" id="telUser" type="text" placeholder="+380962233111" name="phone"
                   onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                  <label htmlFor='telUser'>Telephone</label>
                  <span className="error">{this.state.errors["phone"]}</span>
                  </div>
            <Button primary="true" className="submit-button" as="button" type="submit"  id="submit" value="Submit">MAKE AN APPOINTMENT</Button>
        </form>
    )   
        }
   
}

export default FormContact
