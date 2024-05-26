import React from 'react'

export default function Aleart(props) {
    if(props.alert)
    {
        return (
            <>
             
          <div className={`alert alert-${props.alert.typ} alert-dismissible w-50 m-auto fade show position-absolute `} role="alert">
          <strong>{props.alert.typ}</strong>:{props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
              
        
            </>
          ) 
    }
 
}

