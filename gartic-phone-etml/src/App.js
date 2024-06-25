import './App.css'
import { useEffect } from 'react'

function changeColor(color) {
  const canva = document.querySelector('canvas')
  if (canva) {
    canva.style.backgroundColor = color
  }
}

function App() {
  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        changeColor(e.target.style.backgroundColor);
      });
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', (e) => {
          changeColor(e.target.style.backgroundColor);
        });
      });
    };
  }, []);

  return (
    <div className="App">
      <h1>Welcome back !</h1>
      <div id="game">
        <div style={{ display: 'flex' }}>
          <h2 id="phrase">Nom de la phrase</h2>
          <img src="" alt="Icone du joueur" id="avatar" />
        </div>
        <div style={{ display: 'flex' }}>
          <canvas style={{ backgroundColor: 'red', marginRight: '30px' }}></canvas>
          <div>
            <div style={{ display: 'flex', height: '50px' }}>
              <button id="Red" style={{ backgroundColor: 'red', width: '50px' }} />
              <button id="Green" style={{ backgroundColor: 'green', width: '50px' }} />
            </div>
            <div style={{ display: 'flex', height: '50px' }}>
              <button id="Blue" style={{ backgroundColor: 'blue', width: '50px' }} />
              <button id="White" style={{ backgroundColor: 'white', width: '50px' }} />
            </div>
            <div style={{ display: 'flex', height: '50px' }}>
              <button id="Black" style={{ backgroundColor: 'black', width: '50px' }} />
              <button id="Yellow" style={{ backgroundColor: 'yellow', width: '50px' }} />
            </div>
            <div style={{ display: 'flex', height: '50px' }}>
              <button id="Dark Green" style={{ backgroundColor: 'darkgreen', width: '50px' }} />
              <button id="Light Red" style={{ backgroundColor: 'lightcoral', width: '50px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
