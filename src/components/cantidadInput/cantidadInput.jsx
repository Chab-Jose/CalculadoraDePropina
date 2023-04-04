import './cantidadInput.css'

const CantidadInput = ({title, icon, estado, cambiarEstado, expresionRegular}) => {

    const changeInput = (e) =>{
        cambiarEstado({...estado, cantidad: e.target.value});
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

    return (
        <>
            <div className="right-monto">
                <p className='monto-title'>{title}</p>
                <span className={`${(estado.valido == 0)?'span-error':'error-disabled'}`}>Can't be zero</span>
                <div className={`monto-input ${(estado.valido == 0)?'error-input':''}`}>
                    <span>{icon}</span>
                    <input 
                        type="number" 
                        className='input' 
                        value={estado.cantidad} 
                        onChange={changeInput}
                        onKeyUp ={validaInput}
                    />
                </div>
            </div>
        </>
    )
}

export default CantidadInput