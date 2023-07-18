$(document).ready(function(){
    var theme=$('#theme');
    $('#selectBlue').click(function(){
        theme.attr('href','css/blue.css');
    });
    $('#selectGreen').click(function(){
        theme.attr('href','css/green.css');
    });
    $('#selectRed').click(function(){
        theme.attr('href','css/red.css');
    });
    $('#goUp').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500)
    });
    $('#formLogin').submit(function(){
        var nombre=$('#formName').val();
        localStorage.setItem('name',nombre);
        location.reload();
    });
    var form_name=localStorage.getItem('name');
    console.log(form_name)
    if(form_name!=null && form_name!="undefined"){
        var slideParagraph=$('#side p');
        slideParagraph.html('<strong>Bienvenido '+form_name+'</strong>  ');
        slideParagraph.append('<a href="#" id="logOut">Cerrar sesion</a>')
        $('#register').hide();
        $('#logOut').click(function(){
            localStorage.clear();
            location.reload();
        });
    }
});