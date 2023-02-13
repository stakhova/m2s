const openMenu  = () =>{
    $('.header__burger').toggleClass("header__burger-open");
    $('.header__menu').toggleClass('header__menu-show')
    $('body').toggleClass('overflow')
};


const Drop = () =>{
    function handleOpenClose(e){
        $(this).next('.header__button-drop').slideToggle();
    }
    $(document).on('click', '.header__button', handleOpenClose)

    $(document).click(function(e) {
        let target = e.target;
        if (!$(target).is('.header__button') && !$(target).parents().is('.header__button'))
        { $('.header__button-drop').slideUp(); }
    });
};


const validateForm = (modal,form) => {
    $.validator.addMethod("goodEmail", function(value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(value);
    }, "Enter valid email");

    form.validate({
        rules: {

            email: {
                required:true,
                goodEmail: true,
                email: true
            },
        },
        messages: {
            email: {
                required: "Enter your email",
                email: "Enter valid email"
            }
        },
        submitHandler: function () {
            modal.fancybox();
            modal.trigger('click');
            form[0].reset();
        }
    });
}




const accordion  = () =>{

    function handleOpenCloseAcc(e){
        if(!$(this).next().hasClass('show')){
            return $(this).next().addClass("show");
        }

        if($(this).next().hasClass('show')) {
            $(this).next().removeClass("show");
            return $('.header__drop-right').removeClass("show");
        }
    }

    $(document).on('click', '.drop__toggle', handleOpenCloseAcc)
}


$(document).ready(function(){
    accordion();
    Drop();
});

$(window).load(function(){
    $('.header__burger').on('click', openMenu);
    let formSubs = $('.footer__subs-form'),
        modalSubs = $('.subs__modal')
    validateForm(modalSubs,formSubs)
});

$(window).resize(function(){

});