var _targettedModal,
    _triggers = document.querySelectorAll('[data-modal-trigger]'),
    _dismiss = document.querySelectorAll('[data-modal-dismiss]'),
    modalActiveClass = "is-modal-active";

function showModal(el) {
    _targettedModal = document.querySelector('[data-modal-name="' + el + '"]');
    _targettedModal.classList.add(modalActiveClass);
}

function hideModal(event) {
    if (event === undefined || event.target.hasAttribute('data-modal-dismiss')) {
        _targettedModal.classList.remove(modalActiveClass);
    }
}

function bindEvents(el, callback) {
    for (i = 0; i < el.length; i++) {
        (function (i) {
            el[i].addEventListener('click', function (event) {
                callback(this, event);
            });
        })(i);
    }
}

function triggerModal() {
    bindEvents(_triggers, function (that) {
        showModal(that.dataset.modalTrigger);
    });
}

function dismissModal() {
    bindEvents(_dismiss, function (that) {
        hideModal(event);
    });
}

function initModal() {
    triggerModal();
    dismissModal();
}

initModal();


$("#tile-1 .nav-tabs a").click(function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#tile-1 .slider").css({ "left": + position.left, "width": width });
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({ "left": + actPosition.left, "width": actWidth });


var past = document.getElementById('past-events');
var upcoming = document.getElementById('upcoming-events');
var ongoing = document.getElementById('ongoing-events');

function disable_all() {
    // console.log("I am disabling all events");
    past.style.display = "none";
    upcoming.style.display = "none";
    ongoing.style.display = "none";
}

function past_events_loader_default() {
    // console.log("I ran");

    $('.loader').show();

    setTimeout(function () {
        $('.loader').hide();
        past.classList.add("show");
        past.classList.add("active");
    }, 3000);

    // disable_all();
}

function past_events_loader_click() {
    // console.log("I ran in past onclick");

    disable_all();

    $('.loader').show();

    setTimeout(function () {
        $('.loader').hide();
        past.style.display = "block";
    }, 3000);
}

function ongoing_events_loader_click() {
    // console.log("I ran in ongoing onclick");

    disable_all();

    $('.loader').show();

    setTimeout(function () {
        $('.loader').hide();
        ongoing.style.display = "block";
    }, 3000);
}

function upcoming_events_loader_click() {
    // console.log("I ran in upcoming onclick");

    disable_all();

    $('.loader').show();

    setTimeout(function () {
        $('.loader').hide();
        upcoming.style.display = "block";
    }, 3000);
}