$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var flatLink = $(".flat-link");
  var flatPath = $(".flats path");

  // Функция при наведении курсора на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счётчик
  });

  // Функция выбора квартиры по картинке
  flatPath.on("mouseover", function () {
    currentFlat = $(this).attr("data-flat");
    flatLink.removeClass("flat-link-active");
    $(`[data-flat-link=${currentFlat}]`).toggleClass("flat-link-active");
  });

  // Функция выбора квартиры из списка
  flatLink.on("mouseover", function () {
    currentFlat = $(this).attr("data-flat-link");
    flatPath.removeClass("current-flat");
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
  });

  flatPath.on("mouseleave", function () {
    flatLink.removeClass("flat-link-active");
  });

  flatLink.on("mouseleave", function () {
    flatPath.removeClass("current-flat");
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    // отслеживание клика по кнопке Up
    if (currentFloor < 18) {
      //проверка значения, не должно быть больше 18
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматирование вида значения на __
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function () {
    // отслеживание клика по кнопке Down
    if (currentFloor > 2) {
      //проверка значения, не должно быть меньше 2
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматирование вида значения на __
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
