$(document).ready(function(){
    consultar();
})
function consultbtn(){
    $("#table tbody tr").remove();
    consultar();
}

function consultar() {

    typeNoti = $("#tipeNoti").val();

    const fecha = new Date();
    const anio = fecha.getFullYear();
    const month = fecha.getMonth()+1;
    const day = fecha.getDate();
    dat = anio+"/"+month+"/"+day;
    console.log(dat)

    console.log(typeNoti.length);
    if(typeNoti.length <= 0){
        typeNoti = 'Apple';
    }

    var url = 'https://newsapi.org/v2/everything?' +
        'q='+typeNoti+'&' +
        'from='+dat+'&' +
        'sortBy=popularity&' +
        'apiKey=1a69a34783384b039f616a58c4207800';
    
    $.ajax({
        url:url,
        method:"GET",
        data:{},
        success:function(response){
            console.log(response);
            resp = response.articles;
            console.log(resp);
            arreg = Array.from(resp);

            var cont = 1;
            arreg.forEach(element=>{
                console.log(element);
                autor = element.author;
                titulo = element.title;
                desc = element.description;
                enlace = element.url;
                $("#table").append("<tr><td>"+cont+"</td><td>"+autor+"</td><td>"+
                titulo+"</td><td>"+desc+"<a href='"+enlace+"'>Ver más</a></td></tr>");
                cont++;
            });
        }
    })
}