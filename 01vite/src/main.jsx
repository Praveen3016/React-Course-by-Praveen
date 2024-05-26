import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Wholelist from './List.jsx'
import Calculator from './Calculator.jsx'
import Inputhandle from './Inputhandle.jsx'

const posts = [
  {id: 1, name: 'praveen', content: 'im developre'},
  {id: 2, name: 'manish', content: 'im a charted Accountant'}
];

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <div>
      {
        posts.map((post) =>{
          return(
       <li>{post.id} . : hello im {post.name} and also {post.content}</li>
          )
        })
      }
    {/* <App /> */}
    {/* <Wholelist posts={posts} /> */}
    {/* <Calculator/> */}
    <Inputhandle/>
    </div>
  
)
