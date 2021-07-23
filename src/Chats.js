import React from 'react';
import './Chats.css'
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';

function Chats(){

    


    const [input, setInput] = useState('');


    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            message: 'Hello!',
            image: '',

        },


        
    ]);

    

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message : input}]); setInput("");

        setTimeout(function(){ setMessages([...messages, {name:"Akash",message : input}]); setInput("");
         }, 400);

        

        
    
    }



    return(
        <div className="chats__container">



            

            

            <div className="avatar_box">
                <div className="avatar__container">
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"/>
                    <h3 className="name">Mark</h3>
                
                </div>

                <p className="active">Active an hour ago</p>
            </div>





            <div className="chat__screen">
            {messages.map(message => (

                message.name ? (
                    <div>

                    <div className="chatScreen__message">

                    
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>


                    <div className="chatScreen__message">

                    <Avatar className="chatScreen__image"
                    src={message.image}
                    alt={message.name} />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>
                   
                    </div>

                ) : (

                    <div>
                    
                    <div className="chatScreen__message">

                    
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>

                    
                    </div>

                )

                

            ))}


         </div>





            <div className="input__field">


            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type your message..." className="input__message"></input>

            <button onClick={handleSend} type="submit" className="input__button"><SendIcon style={{color: 'white'}} fontSize="large"/></button>


            </div>


            



        </div>
    );
}

export default Chats
