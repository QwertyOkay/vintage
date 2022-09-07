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

// (() => {
//     const refs = {
//       openModalBtn6: document.querySelector('[data-modal-open6]'),
//       closeModalBtn6: document.querySelector('[data-modal-close6]'),

//       modal6: document.querySelector('[data-modal6]'),
//       };
  
//     refs.openModalBtn6.addEventListener('click', toggleModal6);
//     refs.closeModalBtn6.addEventListener('click', toggleModal6);
      
//     function toggleModal6() {
//     refs.modal6.classList.toggle('is-hidden6');
//     }
    
//     })();


