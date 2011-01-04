// entry form lightbox
  $(function(){
    $("#entry-button").click(function() {
      $("#entry-form").lightbox_me({centered: true});
      return false;
    });
  });
