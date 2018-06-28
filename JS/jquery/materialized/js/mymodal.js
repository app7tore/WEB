$(".box p img").click(function() {
  var smallPictureSrc = $(this).prop("src");
  var newPicture = $("<img>");
  newPicture.prop("src", smallPictureSrc);
  $(".mymodalbox").append(newPicture);
  $(".mymodal").css({"display":"flex"})
});

$(".mymodal").click(function() {
  $(".mymodal").css({"display":"none"});
  $(".mymodalbox").empty();
});
