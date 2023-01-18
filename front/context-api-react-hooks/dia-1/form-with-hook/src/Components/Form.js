import React, {useState} from 'react';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [module, setModule] = useState('');
    return (
        <div>
            <h2>Formulário</h2>
            <form>
                <label htmlFor="name"> Nome Completo: 
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    >
                    </input>
                </label>
                <label htmlFor="age"> Idade: 
                    <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={({ target }) => setAge(target.value)}
                    >
                    </input>
                </label>
                <label htmlFor="city"> Cidade: 
                    <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={({ target }) => setCity(target.value)}
                    >
                    </input>
                </label>
                <br></br>
                <h3>Módulo que está aprendendo:</h3>
                <label htmlFor="fundamentos"> Fundamentos
                    <input
                    type="radio"
                    id="fundamentos"
                    value="Fundamentos"
                    checked={module === 'Fundamentos'}
                    onChange={({ target }) => setModule(target.value)}
                    >
                    </input>
                </label>
                <br></br>
                <label htmlFor="frontend"> Front-End
                    <input
                    type="radio"
                    id="frontend"
                    value="Frontend"
                    checked={module === 'Frontend'}
                    onChange={({ target }) => setModule(target.value)}
                    >
                    </input>
                </label>
                <br></br>
                <label htmlFor="backend"> Back-End
                    <input
                    type="radio"
                    id="backend"
                    value="Backend"
                    checked={module === 'Backend'}
                    onChange={({ target }) => setModule(target.value)}
                    >
                    </input>
                </label>
                <br></br>
                <label htmlFor="cs"> Ciência da Computação
                    <input
                    type="radio"
                    id="cs"
                    value="CS"
                    checked={module === 'CS'}
                    onChange={({ target }) => setModule(target.value)}
                    >
                    </input>
                </label>
                <br></br>
                <button
                type="submit"
                >Enviar</button>
            </form>
        </div>
    )
}

export default Form;