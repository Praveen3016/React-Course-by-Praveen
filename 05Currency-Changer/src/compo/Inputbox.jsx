import React from 'react'
import { useId } from 'react'


function Inputbox({
    lable ,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency ="usd"    
}) {
    const useid = useId();
  return (
    <div className='w-100 h-100 bg-white rounded p-2 my-2'>
     <div className="row">
        <div className="col-9 ">
            <label htmlFor={useid} className='lable p-2'>{lable}</label><br />
            <input id={useid} className='input p-2' type="number" name="" onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} value={amount}  placeholder='Amount' />
        </div>
        <div className="col-3 d-flex flex-column float-end">
            <label htmlFor="" className=' p-2'>Currency Type</label>
            
            <select value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} className='select float-end w-50 rounded ' name="" id="">
              

                {
                    currencyOptions.map((currency)=> 
                    (
                        <option className='float-end ' key={currency} value={currency}>
                            {currency}
                            </option>
                    ))}
                
            </select>
        </div>
     </div>
    </div>
  )
}

export default Inputbox
