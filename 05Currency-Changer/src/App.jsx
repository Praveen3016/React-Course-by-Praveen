import { useState } from 'react'
import './App.css'
import Inputbox from './compo/Inputbox'
import useCurrencyInfo from './hook/usecurrencyinfo'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrencyInfo(from);
  const options = Object.keys(currencyinfo)

  const swap =()=>{
    setfrom(to);
    setto(from);
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }
const convert =()=>{
  setConvertedAmount(amount * currencyinfo[to])
}
 

  return (
    <>
     <h1 className='heading text-white text-center' >Currency-Changer | <span className='text-primary'>React</span></h1>
     <form className="container p-3 w-50 rounded "  onSubmit={(e)=>{
      e.preventDefault();
      convert();
     }}>
     <Inputbox 
       lable="From"
       amount={amount}
       currencyOptions={options}
       onCurrencyChange={(currency)=>
        setamount(amount)
       }
       selectCurrency={from}
       onAmountChange={(amount)=> setamount(amount)}
       
       />
     <div className="swap position-relative">
     <button onClick={swap} className='btn btn-primary px-4 position-absolute border-white '>Swap</button>
     </div>
     <Inputbox
       lable="To"
       amount={convertedAmount}
       currencyOptions={options}
       onCurrencyChange={(currency)=>
        setto(amount)
       }
       selectCurrency={from}
       
     />
     <button className='btn btn-primary w-100 t'> Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
     </form>

    </>
  )
}

export default App
