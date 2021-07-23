import React, { useState, useEffect } from 'react'
import './Contacts.css'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import database from './firebase';
import { Link, useHistory } from 'react-router-dom';


function Contacts(){



    const [contact, setContact] = useState([]);

    

      useEffect(() => {

        database.collection("contact").onSnapshot(snapshot =>  {
            setContact(snapshot.docs.map(doc => doc.data()));
            })

      }, []);




 
    return(
        <div className="contacts__container">


            <div className="contact__head">

                <div style={{display: 'flex'}}>
                    <Link to="/">
                    <ContactPhoneIcon fontSize="large" style={{color: 'white'}}/>
                    </Link>
                    <h2 style={{marginTop: '0px', marginLeft: '5px'}} className="head__title">DemoChat</h2>
                    
                </div>

                <div className="search__box">
                    <input type="text" placeholder=" Search..." className="search"/>
                    <button className="search__button"><SearchIcon /></button>
                </div>

            </div>

            <div className="contact__list">



                {contact.map(person => (

                    
                    <div className="list__item" key={person.name}>
                        
                        <Link to="/chat">
                        <Avatar src={person.url}/>
                        </Link>
                        
                        <h3 className="item__name">{person.name}</h3>
                        <p className="item__time">{person.time}</p>

                        
                    </div>
                    
                    

                    
                    
                ))}



            </div>


        </div>
    );
}

export default Contacts