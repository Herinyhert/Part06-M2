$('#boton').click(()=>{
    let lista = $('#lista')
    lista.empty();//me permite borrar y cargar la lista de neuvo sin que se repitan
    $.get(`http://localhost:5000/amigos`, response => {
        for (let i = 0; i < response.length; i++) {
            let li = `<li>${response[i].name}</li>`;
            lista.append(li);
        }
    })
})

$('#search').click(()=>{
    let valueInput = $('#input').val();
    $.get(`http://localhost:5000/amigos/${valueInput}`, response =>{
        //console.log(response);
        $('#amigo').text(response.name);
    } )
})
$('#delete').click(()=>{
    let valueInput = $('#inputDelete').val();
    $.ajax({
        url:`http://localhost:5000/amigos/${valueInput}`,
        type: 'delete', 
        success: () =>{
            $('#success').text('Eliminado');
        } 
    })
});