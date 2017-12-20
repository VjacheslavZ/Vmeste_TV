// validation
$(document).ready(function () {

    function createHiddenInputs() {
        var inputs = $(".designer__builder-form input[type=radio]:checked, form input[type=radio]:checked");
        var price = $(".designer__price-finish").text();

        inputs.each(function (i, elem) {
            var form = $(".mfp-hide.white-popup form .callback__wrap");
            var hiddenInput = $('<input class="genereted">').attr('type','hidden');

            form.append(hiddenInput.val(elem.value));
        });

        if(price){
            $(".mfp-hide.white-popup form .callback__wrap").append($('<input class="genereted">').attr('type','hidden').val("Итого в месяц " + price + " Р"));
        }


        function removeHiddenElements() {
            var hiddenEl = $(".genereted");
            hiddenEl.remove()
        }
        
        $(document).on("click", ".mfp-close-btn-in .mfp-close, .mfp-auto-cursor .mfp-content", removeHiddenElements);
    }

    var btnForm = $(".designer .custom__btn-form");
    var btnFormTv = $("#form_tv_cable .custom__btn-form");
    var btnFormIp = $("#form_ip_tv .custom__btn-form");


    btnForm.on("click", createHiddenInputs);
    btnFormTv.on("click", createHiddenInputs);
    btnFormIp.on("click", createHiddenInputs);

    $.each($("form"), function () {
        $(this).validate({
            errorPlacement: function (error, element) {
            },

            submitHandler: function(e) {

                var specPage = $(".specials__page");
                var pageTv = $(".page_tv");

                if(specPage.length || pageTv.length){
                    return false
                }


                $("button[href='#callBack']").magnificPopup({
                    removalDelay: 300,
                    mainClass: 'mfp-fade'
                });

                $("button[href='#callBack']").magnificPopup("open");

            },

            rules: {
                router: {
                    required: true
                },
                tv:{
                    required: true
                },
                additional:{
                    required: true
                },
                street: {
                    required: true,
                    minlength: 1
                },
                fullName: {
                    required: true,
                    minlength: 2
                },
                house: {
                    required: true,
                    minlength: 1
                },
                flat: {
                    required: true,
                    minlength: 1
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                canals: {
                    required: true,
                },

                receiver: {
                    required: true,
                },
                equipment: {
                    required: true,
                },
            },

            messages:{
                router: {
                    required: true
                },
                tv:{
                    required: true
                },
                additional:{
                    required: true
                }
            },

        });
    });
});




$(document).ready(function () {
    $("#service__slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        margin: 30,
        autoplay: false,
        response: true,
        navText: ["<i class=\"fa fa-angle-left slider__btn\"></i>","<i class=\"fa fa-angle-right slider__btn\"></i>"],
        autoplayTimeout: 4000,
    });

    $("#standart-tarifs__slider").owlCarousel({
        loop: true,
        items: 4,
        nav: false,
        dots: true,
        margin: 0,
        // autoplay: true,
        response: true,
        navText: ["<i class=\"fa fa-angle-left slider__btn\"></i>","<i class=\"fa fa-angle-right slider__btn\"></i>"],
        autoplayTimeout: 4000,
        responsive: {
            1615: {
                items: 4
            },
            1200: {
                items: 3
            },
            992: {
                items: 2
            },
            0: {
                items: 1
            },
        }
    });


    let CustomNextBtn =  $('.standart-tarifs .customNextBtn');
    let CustomPrevBtn =  $('.standart-tarifs .customPrevBtn');

    CustomNextBtn.click(function() {
        $("#standart-tarifs__slider").trigger('next.owl.carousel', [700]);
    });

    CustomPrevBtn.click(function() {
        $("#standart-tarifs__slider").trigger('prev.owl.carousel', [700]);
    });


    var summ = $(".designer__price-finish");
    var priceSpeed = 10;

    $("#designer__set_speed").slider({
        tooltip: 'always',
        formatter: function(value) {
            summ.text(value * priceSpeed);
            return  value;
        },
        ticks_labels: ['0 Mbit/s', '25 Mbit/s', '50 Mbit/s', '75 Mbit/s', '100 Mbit/s'],
        min: 0,
        max: 100,
        step: 10,
        }

    );



    (function changeFinalPrice() {
        var mbit = $("<span></span>").text("Mbit/s");

        $(".tooltip-main").append(mbit);
        mbit.addClass("designer__current-speed_text")
    })();

    //попап
    $("a[href='#callBack']").magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    //video
    let playButton = $("#play-pause"),
        video = $("#video video"),
        videoBg = $(".video__bg");

    playButton.click(function() {
        video[0].volume = 0;

        if(video[0].paused){
            video[0].play();
            playButton.fadeOut();
            videoBg.css({"opacity":"0"});
        }else{
            video[0].pause();

        }
    });

    video.click(function() {
        if(this.play()){
            this.pause();
            playButton.fadeIn();
            videoBg.css({"opacity":"1"});
        }
    });

    $('.slider-shares__wrap').slick({
        centerMode: true,

        centerPadding: '290px',
        slidesToShow: 1,
        prevArrow: $('.slider-shares .customPrevBtn'),
        nextArrow: $('.slider-shares .customNextBtn'),
        responsive:[{

            breakpoint: 1600,
            settings:{
                centerPadding: '200px',
            },

            breakpoint: 1200,
            settings:{
                centerPadding: '30px',
                centerMode: false,
            },

        }]
    });

    $(".contacts__main-height").equalHeights();

    $(".hamburger").on("click", function () {
        $( ".header__mob-menu" ).toggleClass( "active" );
        $( ".hamburger.hamburger--collapse" ).toggleClass( "is-active" );
    });

});
$(document).ready(function () {
    $(".loader_inner").fadeOut("slow");
    $(".loader").fadeOut("slow");
});

document.addEventListener("DOMContentLoaded", function () {
    var map = document.getElementById("map");
    if(map){
        ymaps.ready(init);

        var myMap,
            myPlacemark
        ;

        function init(){
            myMap = new ymaps.Map ("map", {
                center: [57.11798757, 65.61958700],
                zoom: 16
            });


            myPin = new ymaps.GeoObjectCollection({}, {
                iconImageHref: 'img/marker_ic.png',
                iconImageSize: [30, 42],
                iconImageOffset: [-3, -42]
            });


            myPlacemark = new ymaps.Placemark([57.11798757, 65.61958700], {
                content: 'Москва!',
                balloonContent: 'Столица России'
            });

            myPin.add(myPlacemark);
            myMap.geoObjects.add(myPin);

        }
    }
});


;(function () {

    var swichCategotyCanalsBtn = document.querySelectorAll(".tv-list .tv-list__type-toggle a"),
        tvList = document.querySelector(".tv-list__list.tab-content");

    for(var i = 0, max = swichCategotyCanalsBtn.length; i < max;i++){
       swichCategotyCanalsBtn[i].addEventListener("click",swichCategoryCanals);
    }

    function swichCategoryCanals() {

        var self = this,
            selectedType = self.getAttribute("data-herf"),
            childrenEl = tvList.children,
            selecterEl = document.getElementById(selectedType);

        for(var i = 0, max = childrenEl.length; i < max; i++){

            if(childrenEl[i].classList.contains("active")){
                childrenEl[i].classList.remove("active")
            }
        }
        selecterEl.classList.add("active")
    };

})()

;(function () {

    var categoryCanal = document.querySelectorAll(".tv-list__channels-list ul li");



    for(var i = 0, max = categoryCanal.length; i < max; i++){
        categoryCanal[i].addEventListener("click", changeNamaPackage)
    }

    function changeNamaPackage(event) {
        var target = event.target;

        var selectetPackagetitle = document.querySelector(".tv-list__list .toggle.active");


        if(target.tagName === "A"){

            selectetPackagetitle.querySelector(".tv-list__selected-package span").innerHTML = target.innerHTML
        }
    }
})()


