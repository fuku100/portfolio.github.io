!function () {
  "use strict";
  function c() {
    s
      .classList
      .add(n),
      t
        .classList
        .add(n),
      i
        .classList
        .add(n)
  }
  function e() {
    s
      .classList
      .remove(n),
      t
        .classList
        .remove(n),
      i
        .classList
        .remove(n)
  }
  var s = document.querySelector("#c-circle-nav"),
    t = document.querySelector("#c-circle-nav__toggle"),
    i = document.createElement("div"),
    n = "is-active";
  i
    .classList
    .add("c-mask"),
    document
      .body
      .appendChild(i),
    t.addEventListener("click", function (s) {
      s.preventDefault(),
        t
          .classList
          .contains(n)
          ? e()
          : c()
    }),
    i.addEventListener("click", function () {
      e(),
        console.log("click")
    })
}();
