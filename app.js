


const cargando=()=>
{

    fetch('https://swapi.dev/api/vehicles',{
        method : 'GET'
    }).then((response)=>
    {
                response.json().then((data)=>
                {
                    console.log(data.results)
                })

    }).catch((error)=>{
                console.log(error)
    })

}


document.getElementById('cargando').addEventListener('load',cargando());