+$(document).ready(function(){


        // Start Back To Top
        $(".btn-backtotops").hide();
        $(window).scroll(function(){
                getscrollTopZero = $(this).scrollTop();
                // console.log(getscrollTopZero);

                if(getscrollTopZero >= 370) {
                        $(".btn-backtotops").fadeIn(1000);

                }else {
                        $(".btn-backtotops").fadeOut(1000);

                }
        });

        // End Back To Top


        // Start Header

                // Start nav
                // for bugger
                $(".navbuttons").click(function(){
                        $(".navbuttons").toggleClass("crossxs")
                });

                // for nav
                $(window).scroll(function(){
                        let getscrollTop = $(this).scrollTop();
                        // console.log(getscrollTop);

                        if(getscrollTop >= 200) {
                                $(".navbar").addClass("navmenus");
                        }else {
                                $(".navbar").removeClass("navmenus");
                        }


                        });


                 // End nav


          // End Header

        //   Start Properties

        $(".propertylists").click(function(){

                // for activeitems
                $(this).addClass("activeitems").siblings().removeClass("activeitems");   // notice that without dot notation in activeitems

                // $(this).addClass("activeitems");
                // $(this).siblings().removeClass("activeitems");


        // for filter
        let getattvalue = $(this).attr("data-filter");
        // console.log(getattvalue);


        if(getattvalue === "all") {
                $(".filters").show("slide",1000);

        }else{
                $(".filters").hide();
                $(".filters").not("."+getattvalue).hide("slide",1000);
                $(".filters").filter("."+getattvalue).show("slide",1000);


        }

        });


        // for image overlaay (or) lightbox 2
        lightbox.option({

                showImageNumberLabel:false

              });




 //   End Properties

//  Start Adv section

$(window).scroll(function() {
        let getscrollTop2 = $(this).scrollTop();
        // console.log(getscrollTop2);

        if(getscrollTop2 >= 900) {
                $(".advimages").addClass("fromlefts");
                $(".advtexts").addClass("fromrights");


        }else {
                $(".advimages").removeClass("fromlefts");
                $(".advtexts").removeClass("fromrights");


        }
});


// End Adv Section



});




// Start Footer Section

const getyear = $("#getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.text(getfullyear);
// End Footer Section

