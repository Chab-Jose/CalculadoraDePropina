import { useRef } from 'react';
import './botones.css'

const Botones = ( {estado, cambiarEstado, expresionRegular }) =>{


    const customChange = (event) => {
        console.log('custom', event.target.value);
        cambiarEstado({...estado, cantidad: event.target.value});
    }

    const validaInput = () =>{     
        if(!expresionRegular.test(estado.cantidad)){
            return cambiarEstado({...estado, valido: 0});
        }
        if(estado.cantidad <= 0){ 
            return cambiarEstado({...estado, valido: 0});
        }
        return cambiarEstado({...estado, valido: 1});;
    }

    const inputCustom = useRef(null);
    
    const onButtonClick = () => {
        inputCustom.current.value = "";
        cambiarEstado({...estado, valido: 1});
    };

    

    return(
        <>
            <div className='porcent'>
                <p className='monto-title'>Select Tip %</p>
                <div className='buttons'>
                    <label className={`${(estado.cantidad == 5)?'input-select':'propina'}`} onClick={onButtonClick}>
                        <input type="radio" id="5porcent" value="5" onChange={customChange} name="tip"/>5%
                    </label>
                    <label className={`${(estado.cantidad == 10)?'input-select':'propina'}`} onClick={onButtonClick}>
                        <input type="radio" id="10porcent" value="10" onChange={customChange} name="tip"/>10%
                    </label>
                    <label className={`${(estado.cantidad == 15)?'input-select':'propina'}`} onClick={onButtonClick}>
                        <input type="radio" id="15porcent" value="15" onChange={customChange} name="tip"/>15%
                    </label>
                    <label className={`${(estado.cantidad == 25)?'input-select':'propina'}`} onClick={onButtonClick}>
                        <input type="radio" id="25porcent" value="25" onChange={customChange} name="tip"/>25%
                    </label>
                    <label className={`${(estado.cantidad == 50)?'input-select':'propina'}`} onClick={onButtonClick}>
                        <input type="radio" id="50porcent" value="50" onChange={customChange} name="tip"/>50%
                    </label>
                    <input type="number" className={`custom ${(estado.valido === 0)?'custom-error':''}`}  ref={inputCustom} placeholder='Custom' onChange={customChange} onKeyUp={validaInput}/>
                </div>
            </div>
        </>
    );
}

export default Botones