// entry form lightbox
  $(function(){
    $("#entry-button").click(function() {
      $("#entry-form").lightbox_me({
        centered: true,
        overlaySpeed: "fast",
        overlayDisappearSpeed: "fast"
        });
      return false;
    });
    $("#supporter-button").click(function() {
      $("#supporter-list").lightbox_me({
        centered: true,
        overlaySpeed: "fast",
        overlayDisappearSpeed: "fast"
        });
      return false;
    });
  });
