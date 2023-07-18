$(document).ready(function(){
     $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 700,
        responsive:true,

      });
    var posts=[
        {
            title:'Post 1',
            date:"Publicado el "+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title:'Post 2',
            date:"Publicado el "+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title:'Post 3',
            date:"Publicado el "+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title:'Post 4',
            date:"Publicado el "+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ];
    posts.forEach((item,index)=>{
        var posting=`
                <article class="post">
                    <h2 id="postTitle">${item.title}</h2>
                    <span id="extra">${item.date}</span>
                    <p>${item.content}</p>
                </article>
                `;
                $('#posts').append(posting)
    });
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