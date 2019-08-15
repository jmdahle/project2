//jd - added document.ready to wait for page to load
$(document).ready( () => {
// jd - handle click events on page
  $(document).on('click', '#btn-link-menu', linkToMenu);
  $(document).on('click', '#btn-link-create-your-own', linkToCreate);

  function linkToMenu (event) {
    event.preventDefault();
    // Simulate an HTTP redirect:
    window.location.replace("/menu");
  }

  function linkToCreate (event) {
    event.preventDefault();
    // Simulate an HTTP redirect:
    window.location.replace("/choose-your-own");
  }

});