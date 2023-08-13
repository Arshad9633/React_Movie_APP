import Card from './Card/Card'
import classes from './Contact.module.css';

function ContactPage (props) {
    return(
        <>
          <h1>Contact</h1>
          <Card className={classes.login}>
            <div className={classes['form-group']}>               
                <input placeholder='Name' />
            </div>
            <div className={classes['form-group']}>         
                <input placeholder='Email'/>
            </div>
            <div className={classes['form-group']}>              
                <input placeholder='Subject'/>
            </div>
            <div className={classes['form-group']}>
                <input placeholder='Enter Message'/>
            </div>
            <div>
                <button className={classes.button}>Contact Me</button>
            </div>
          </Card>
        </>
    );
};

export default ContactPage;