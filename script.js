function sendMessage() {
  if (
    !document.forms["messageForm"]["userName"].value == "" &&
    !document.forms["messageForm"]["userEmail"].value == "" &&
    !document.forms["messageForm"]["userMessage"].value == ""
  ) {
    alert("Thank You For Your Feedback!");
    document.forms["messageForm"]["userName"]["userEmail"][
      "userMessage"
    ].focus();
    return false;
  }
}
// jQuery and SweetAlert2
// PAYMENT
$(document).ready(function () {
  $(".payment").click(function () {
    Swal.fire({
      title: $(this).html(),
      text: "Do you want to buy this bundle?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#8e2de2",
      cancelButtonColor: "#888",
      confirmButtonText: "Buy",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Thank You!!", "Your Payment Was Successful!", "success");
      }
    });
  });
});

// jQuery UI
// SIDE NOTIFICATION
$("#notification").dialog({
  autoOpen: true,
  draggable: false,
  resizable: false,
  width: 300,
  height: 100,
  dialogClass: "ui-dialog-side-notification",
  position: {
    my: "left bottom",
    at: "left bottom",
    of: window,
  },
  show: {
    effect: "slide",
    direction: "left",
    duration: 1000,
  },
  hide: {
    effect: "slide",
    direction: "left",
    duration: 800,
  },
});
function showNotification(message) {
  $("#notification").text(message);
  $("#notification").dialog("open");
  setTimeout(function () {
    $("#notification").dialog("close");
  }, 5000);
}
showNotification(
  "You are logged in as a guest, try to log in with your account or register your account."
);
//jQuery UI Tabs=
$(function () {
  $("#tabs").tabs();
});
