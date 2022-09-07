$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
   /*  e.preventDefault(); */

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});

 (() => {
     const refs = {
       openModalBtn: document.querySelector('[data-modal-open]'),
       closeModalBtn: document.querySelector('[data-modal-close]'),

       modal: document.querySelector('[data-modal]'),
       };
  
     refs.openModalBtn.addEventListener('click', toggleModal);
     refs.closeModalBtn.addEventListener('click', toggleModal);
        function toggleModal() {
     refs.modal.classList.toggle('is-hidden');
     }
    
     })();


