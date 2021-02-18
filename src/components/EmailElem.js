import React from 'react'
import {Button} from './Button'
import emailjs from "emailjs-com"
class EmailElem extends React.Component {
    
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
    
       
    
        //Email
        if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
        if(typeof fields["email"] !== "undefined"){
          let lastAtPos = fields["email"].lastIndexOf('@');
          let lastDotPos = fields["email"].lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }
    
    
    
        this.setState({errors: errors});
        return formIsValid;
      }
    
      contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
           emailjs.sendForm('service_tqcez7i', 'template_pvma65d', e.target, `${process.env.GATSBY_API_KEY}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
       
          alert("Thanks! Wait for your sales!");
          e.target.reset();
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
             
        <form  className="form FormEmail" onSubmit= {this.contactSubmit.bind(this)}
        >
            <div className="input-group">
            <input type="email" refs="email"  id="emailsale"  placeholder="john@gmail.com" name="email"  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                <label htmlFor="emailsale" style={{color: '#fff'}}>Email</label>
                <span className="error">{this.state.errors["email"]}</span>
            </div>
                  
            <Button 
            css={`
                        
            @media screen and (max-width: 768px){
                width: 100%;
                min-width: 250px;
                font-size: 0.7rem;
            }
            
            @media screen and (max-width: 400px){
                width: 100%;
                min-width: 100px;
                font-size: 0.5rem;
            }
            `}
             as="button" type="submit"  value="Submit">GET SALE NOW!</Button>
        </form>
    )   
        }
   
}

export default EmailElem
