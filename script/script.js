$(function () {

    const example = $('.d-none').eq(0); //example
    for (const actor of actors) {
        let newCard = example.clone(); //clone
        newCard.find('.card-title').text(actor.name);
        newCard.find('img').attr("src", actor.picture);
        newCard.addClass(actor.category);
        newCard.removeClass('d-none');
        newCard.appendTo($('.card-columns')); //new card

        const female = $('.female').hide();
        const baby = $('.baby').hide();


    }


    $('input[type="radio').click(function () {
        let radioValue = $("input[name='options']:checked").val();
        $(".card").hide();
        $("." + radioValue).show();
        $('#inputGroupSelect01').val(radioValue);
    })

});