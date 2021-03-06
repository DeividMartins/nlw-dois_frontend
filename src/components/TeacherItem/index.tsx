import React from 'react'


import whatsapIcon  from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFFWdPRGw4xBQ/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=O0LlWg4PWsg0VDwfQbPknPECcp8oGDanFeBgZ5pVgDA" alt="Deivid Martins" />
            <div>
                <strong>
                    Deivid Daniel Martins
        </strong>
                <span>Quimica</span>
            </div>
        </header>

        <p>Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
        <footer>
            <p>
                Preço/hora
           
            <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatsapIcon} alt="whatsapIcon"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;