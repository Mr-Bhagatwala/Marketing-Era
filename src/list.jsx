import React, { useEffect, useState } from "react";
// import NavbarAd from "./adminnavbar";


const List = ()=>{
    useEffect(()=>{
        data(); 
    },[])
    const [item,setItem] = useState([])
    const data =async ()=>{
        let result = await fetch("http://localhost:8000/getData",{
            method:'post',
            body:JSON.stringify({}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json()
        setItem(result);
    }
    return(<>
            {/* <NavbarAd/>  */}
            
            
                    
        <div style={{fontSize:"xx-large"}} className="tab">
       <table class="table" style={{color:"#fa7225"}}>
<thead>
              <tr >
                <th scope="col">index</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">gender</th>
                <th scope="col">city</th>
                <th scope="col">course</th>

              </tr>
            </thead>
<tbody>{
item.map((it,index)=>{
                // <NavbarAd/>
                
                return(
<tr>
<th scope="row">{index+1}</th>
<td>{it.name1}</td>     
<td>{it.email}</td>
<td>{it.phone}</td>
<td>{it.gender}</td>
<td>{it.city}</td>
<td>{it.course}</td>


</tr>
)
})
}
</tbody>
</table>
</div>
</>

    ) 


    

}
export default List;

