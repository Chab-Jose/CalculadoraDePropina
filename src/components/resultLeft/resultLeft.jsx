import './resultLeft.css'

const ResultLeft = ({pagoTip, pagoTotal}) => {
    return (
        <>
            <div className="left-result">
                <div className='card-result'>
                    <p className='title-result'>Tip Amount</p>
                    <span className='span-result'>/ person</span>
                </div>
                <div className='cantidad-result'><small>$</small>{pagoTip}</div>
            </div>
            <div className="left-result">
                <div className='card-result'>
                    <p className='title-result'>Total</p>
                    <span className='span-result'>/ person</span>
                </div>
                <div className='cantidad-result'><small>$</small>{pagoTotal}</div>
            </div>
        </>
    )
}

export default ResultLeft