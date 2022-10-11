// /*global $ */

// $(function () {
//     'use strict';
//     $('.info-list li').click(function () {
//         $(this).addClass('selected').siblings('li').removeClass('selected');
//         $('.info-content div').hide();
//         $('.' + $(this).data('class')).fadeIn();
//     });
// });

let lists = document.querySelectorAll(".info-list li");
let content = document.querySelectorAll(".info-content div");

lists.forEach((li) => {
  li.addEventListener("click", (e) => {
    li.parentElement.querySelectorAll(".selected").forEach((li) => {
      li.classList.remove("selected");
    });
    e.target.classList.add("selected");
    content.forEach((cont) => {
      if (cont.className === e.target.dataset.class) {
        cont.parentElement.querySelectorAll("div").forEach((div) => {
          div.style.display = "none";
        });
        cont.style.display = "block";
      }
    });
  });
});
