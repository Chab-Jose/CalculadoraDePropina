import { useState } from 'react';
import CantidadInput from './components/cantidadInput/cantidadInput';
import Botones from './components/botones/botones';
import ResultLeft from './components/resultLeft/resultLeft';
import './App.css';




//trabajar con el boton custom(validacion y funcionamiento)
// mejorar el codigo de operacion con useefect(si se puede)
//cambiar los iconos 
//mejorar el funcionamiento del boton reset al desabilitarlo

function App() {
  const [dinero, setDinero] = useState({cantidad: '', valido:null });
  const [personas, setPersonas] = useState({cantidad: '', valido:null })
  const [porcentaje, setPorcentaje] = useState({cantidad: '', valido:null })  

  const expresionDecimal = /^[0-9]{1,9}$|^[0-9]{1,9}\.[0-9]{1,2}$/;
  const expresionEnteros = /^[0-9]{1,3}$/;


  
  let pagoPersona = 0;
  let porcentTip = 0;
  let pagoTotal = 0;

  if(dinero.valido == 1){
    if(personas.valido == 1){
      pagoPersona = dinero.cantidad / personas.cantidad;
      porcentTip = (pagoPersona / 100) * porcentaje.cantidad;
      pagoTotal = pagoPersona + porcentTip;
    }
  }


  const resetButton = () => {
    setDinero({...dinero, cantidad:"", valido: ""});
    setPersonas({...personas, cantidad:"", valido: ""});
    setPorcentaje({...porcentaje, cantidad:"", valido: ""});
  }


  return (
   <>
   <div className="container">
      <div className="body-right">

        <CantidadInput
          title = 'Bill'
          icon = '$'
          estado = {dinero}
          cambiarEstado = {setDinero}
          expresionRegular={expresionDecimal}
         />
         <Botones
          estado = {porcentaje}
          cambiarEstado = {setPorcentaje}
          expresionRegular = {expresionEnteros}
         />
         <CantidadInput
          title = 'Number of People'
          icon = 'TT'
          estado = {personas}
          cambiarEstado = {setPersonas}
          expresionRegular={expresionDecimal}
         />
      </div>
      <div className="body-left">
        <ResultLeft
          pagoTip = {porcentTip.toFixed(2)}
          pagoTotal = {pagoTotal.toFixed(2)}
        />
        <button className='boton-reset' type="submit" disabled={!dinero.cantidad} onClick={resetButton} >RESET</button>
      </div>

   </div>
   </>
  )
}

export default App
