import React from 'react';
import '../Styles/Skill.css'

const Skill = () =>{
    return (
        <section id='skill' className='skill-container'>
            <span className='skill-title'><h3>Skill</h3></span>
            <div className='cards'>
                <div className='card'><img src={require('../Images/c.png')} alt="C Programming"/></div>
                <div className='card'><img src={require('../Images/java.png')} alt="Java"/></div>
                <div className='card'><img src={require('../Images/html.png')} alt="HTML"/></div>
                <div className='card'><img src={require('../Images/css.png')} alt="CSS"/></div>
                <div className='card'><img src={require('../Images/javascript.png')} alt="JavaScript"/></div>
                <div className='card'><img src={require('../Images/php.png')} alt="PHP"/></div>
                <div className='card'><img src={require('../Images/mysql.png')} alt="MySQL"/></div>
                <div className='card'><img src={require('../Images/csharp.png')} alt="C# Programming"/></div>
                <div className='card'><img src={require('../Images/typescript.png')} alt="TypeScript"/></div>
            </div>
        </section>
    )
}

export default Skill;