import React, { useState } from 'react'
import propTypes from 'prop-types'
export default function About(props) {
    // let myStyle = {
    //     color: 'white', backgroundColor : 'black'
    // }

    const [myStyle, setmyStyle] = useState({
        color: 'Black', backgroundColor: 'white'
    })

    const [text, setTxt] = useState("Enable Dark Mode");


    const toggleChange = () => {
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white', backgroundColor: 'black'
            })
            setTxt("Enable Light Mode");
        }
        else {
            setmyStyle({
                color: 'black', backgroundColor: 'white'
            })
            setTxt("Enable Dark Mode");

        }
    }

    return (
        <div>
            <div class="card" style={myStyle}>
                <div class="card-body">
                    <h5 class="card-title">{props.heading}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  dipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos corporis inventore mollitia! Impedit iure quaerat odit neque doloremque saepe. Distinctio atque debitis fugiat vitae in alias nulla, eos quod quia.
                    

                    </p>

                    <a href="#" class="btn btn-primary" onClick={toggleChange}>{text}</a>
                </div>
            </div>



        </div>
    )
}
