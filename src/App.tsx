import { useState } from 'react'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");


  //função para criar o prompt de texto da IA
  async function handlePrompt(prompt: string) {
    const session = await window.ai.createTextSession();

    const result = await session.prompt(prompt);

    console.log(result);

    return result;

  }

  //código para habilitar a tecla "enter" no click do botão
  const input = document.getElementById("promptInput");
  input?.addEventListener("keypress", function (evt) {
    if (evt.key === "Enter") {
      evt.preventDefault;
      document.getElementById("promptBtn")?.click()
    }
  })

  return (
    <>
      <div className='box'>
        <p className='title'>Digite o que quiser abaixo!</p>
        <div className='prompt'>
          <input id="promptInput" style={{width: "100%"}} placeholder='Digite aqui...' value={prompt} onChange={(evt) => setPrompt(evt.target.value)}></input>
          <button id="promptBtn" onClick={async () => {
            const result = await handlePrompt(prompt);
            setResponse(result);
          }}
          >Enviar</button>
        </div>
        {
          response &&
          <p className='response'>{response}</p>
        }
      </div>
    </>
  )
}

export default App
