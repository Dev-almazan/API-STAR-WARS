
const cargando=()=>
{

    fetch('https://swapi.dev/api/vehicles',{
        method : 'GET'
    }).then((response)=>
    {

        console.log(response.ok)

                response.json().then((data)=>
                {

                    let conteo = data.results.length;
                    
                    const images = [1,2,3,4,5,6,7,8,9,0]

                    let contenido = document.getElementById('tarjetas');

                        for(a =0 ; a < conteo; a++)
                        {


                            if (data.results[a].cost_in_credits == "unknown")
                            {
                                data.results[a].cost_in_credits = 0;
                            }

                            contenido.innerHTML += 
                            `
                                        <div class="col-md-4 mb-5">
                                            <div class="card " style="width: 100%">
                                                <img src="img/${images[a]}.jpg" class="card-img-top" alt="..." style="height:300px;">
                                                <div class="card-body">
                                                    <h5 class="card-title">${data.results[a].name}</h5>
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item"><b>Model: </b>${data.results[a].model} </li>
                                                    <li class="list-group-item"><b>Price: </b>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.results[a].cost_in_credits)} </li>
                                                    <li class="list-group-item"><b>Company: </b>${data.results[a].manufacturer} </li>
                                                </ul>
                                            </div>
                                    </div>
                            `;
                           
                        }
                })

    }).catch((error)=>{
                console.log(error)
    })

}


document.getElementById('cargando').addEventListener('load',cargando());