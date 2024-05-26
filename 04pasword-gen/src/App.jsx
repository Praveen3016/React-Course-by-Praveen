import { useState , useCallback , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const[number , setnumber] = useState(false);
  const [character, setcharacter] = useState(false)
  const [password , setpassword ] = useState("w");
  let pass = "";
  const mainfunc = useCallback(()=>{
   
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "1234567890";
    let char = "!@#$%^&*()_+"

    if(number == true) str += num;
    if(character == true) str += char;
    for(let i = 1 ;i<= length ;i++)
    {
     let pos = Math.random() * str.length + 1;

pass += str.charAt(pos);
    }
    setpassword(pass)
  
  }, [length , number , character])
  
  useEffect(()=>{
    mainfunc()
  }, [length , number , character]  )
  
  const copico = useCallback(()=>{
window.navigator.clipboard.writeText(password);
console.log("copied")
  },[password])

  return (
    <>
   <div className="containerr border  ">
    <span className="in bg-white ">
      <p className='inbox text-black bg-white'>{password}</p>
      <button onClick={copico} className='btn text-white bg-blue-700 px-2 py-1'>copi</button>
    </span>
    <div className='flex gap-x-8 my-4'>
      <div className="range "><input type="range" min={6} max={100} onChange={(e) => setlength(e.target.value )} />
     <br /> <label className='text-white'>length :{length}</label>
      </div>
      <div className='check'>
<input type="checkbox" value={number} onChange={()=>{setnumber((prew) => !prew )}} />
<label className='text-white'>Number</label>
      </div>
      <div className='check'>
<input type="checkbox"  value={character} onChange={()=>{setcharacter((prew) => !prew )}}  /><label className='text-white'>Character</label>
      </div>
    </div>
   </div>
    </>
  )
}

export default App
