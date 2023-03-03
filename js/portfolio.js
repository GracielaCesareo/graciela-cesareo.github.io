const Portfolio = {

  url_base: function(){

    var pathArray = location.href.split( '/' );
    var protocol = pathArray[0];
    var host = pathArray[2];
    var url = protocol + '//' + host;


    return url;

  },

    /*
    Definicion de route para imagenes
    * Solo para ambiente de desarrollo *
  */
  route_templates: function(){
    var imagePath = 'http://sstatic.net/so/img/',
        route, host;

    host = Portfolio.url_base();

    if( host  === "https://thisisgrace.page" ){
      route = "https://thisisgrace.page";
    }else{
      route = "http://localhost:5501";
      
    }

    return route;

  },

 

  isEven: function(n) {
     return n % 2 == 0;
  },

  isOdd: function(n) {
     return Math.abs(n % 2) == 1;
  },


    load_component: function( component, fn, cb ){


        var d = document.getElementsByClassName('comp-'+component),
                 route = Portfolio.route_templates(),
                 imagenes;
    
             for( var i = 0; i < d.length ; i++ ){
    
               if(d[i].children.length < 1){
                 var xmlhttp = new XMLHttpRequest(),
                     reponse;
    
                 xmlhttp.open("GET", route+'/components/'+component+'.html', false);
                 xmlhttp.send();
    
                 reponse = xmlhttp.responseText;
                 // d[i].innerHTML = reponse;
                 var node = document.createRange().createContextualFragment(reponse);
                 d[i].appendChild(node);
    
                 //Si viene desde components cambia la route a las imagenes para una correcta renderizacion
                 if( String(window.location).indexOf( "/components/" ) !== -1 ){
                   imagenes = $('.comp-'+component+' img');
                   if( imagenes.length > 0 ){
                     for(var k = 0; k < imagenes.length; k++) {
                       var index = imagenes[k].src.lastIndexOf("/") + 1;
                       var imagen = imagenes[k].src.substr(index);
                       imagenes[k].src = route+'/components/'+component+'/img/'+imagen;
                     }
                   }
                 }
                 //Si viene desde components cambia la route a las imagenes para una correcta renderizacion
    
                 break;
               }
    
        }
    
        if( fn ){
          for( var j = 0 ; j < fn.length ; j++ ){
            for( var prop in fn[j] ){
                Portfolio.load_component( prop , fn[j][prop] );
            }
          }
        }
    
        if( cb ) cb();
    
      },


};