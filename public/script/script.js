function buscarCidade()
{
    let cidade = document.getElementById('city').value
    cidade = cidade.toLowerCase()

   

    fetch(`https://goweather.herokuapp.com/weather/${cidade}`).then(res =>
    {
       return res.json()
    }).then( json =>
        {
            const temperatura  = json.temperature
            const estadoAtual = json.description
           
            const elemento = `<h1> Temperatura: ${temperatura}<h1>
                              <h1> clima: ${estadoAtual}</h1>  `
            document.getElementById('previsao').innerHTML=elemento
        })
}