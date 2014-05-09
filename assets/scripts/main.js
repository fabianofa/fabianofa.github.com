/* 
        .---.
       /o   o\
    __(=  "  =)__
     //\'-=-'/\\
        )   (_
       /      `"=-._
      /       \     ``"=.
     /  /   \  \         `=..--.
 ___/  /     \  \___      _,  , `\
`-----' `""""`'-----``"""`  \  \_/
                             `-`
*/

var PORTFOLIO = {
    common: {
        init: function(){
        }
    },

    home: {
        index: function(){
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);

                        return false;
                    }
                }
            });

            $(window).scroll(function(e){
                if (e.currentTarget.pageYOffset > 70){
                    $('header').addClass('undock');
                    $('.content').addClass('md-gap-top-p');
                } else {
                    $('header').removeClass('undock');
                    $('.content').removeClass('md-gap-top-p');
                }
            });
        }
    }
};

/* 
*  DOM-READY EXECUTION 
*/

UTIL = {

    exec: function( controller, action ) {
        
        var ns = PORTFOLIO,
        action = ( action === undefined ) ? 'init' : action;

        if ( controller !== '' && ns[controller] && typeof ns[controller][action] == 'function' ) {
            ns[controller][action]();
        }

    },
    init: function() {
        
        //Controller var is replacing '-' for '_' to maintain the existent page slug without modifying whole code above.
        var body = document.body,
            controller = body.getAttribute( 'data-controller' ),
            action     = body.getAttribute( 'data-action' );

        UTIL.exec( 'common' );
        UTIL.exec( controller );
        UTIL.exec( controller, action );
    
    }

};

$(document).ready( UTIL.init );