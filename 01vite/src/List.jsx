import React from 'react'



function Lists(props){
    const num = props.numbers
   
    const Listitem = num.map((number)=>
        <li key={number.toString()} >{number}</li>
    );
     console.log(Listitem)
return(
    <ul>
 {Listitem}
 </ul>

)
}

function Blog(props)
{
    

    // return(
    //    {
    //     props.posts.map((post)=>
    //     <p>{post.title}</p>
    //     )
    //    }  
    // )

}

function Wholelist(props) {
    const numbers = [1,2,3,4,5]
    posts =props.posts
  return (
<>
 <Lists numbers={numbers}></Lists>
 <Blog  posts={posts} />
</>
   
  )
}

export default Wholelist

