// import App from "./App.js
// const { useState } = React


const root = ReactDOM.createRoot(document.getElementById("praveen"));
 

 function Hello(props){

    
    const element = <div>
        <h1>hello praveen</h1>
        <h1>time is {new Date().toLocaleTimeString()}</h1>
        </div>

        root.render(element)
    
 }

 setInterval(Hello,1000);
