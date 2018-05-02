
// create a function to hide all divs
function hideAllDiv(){
$('.aboutMe, .featuredPage, .generalProjectsImages, .contactsPage').each(function() {
	$(this).hide();
});
}
// // Make only the landing page show up.

// // When a link is clicked, hide the currently visible page and display the clicked pg

hideAllDiv();
$('#landingPage').show();

$(document).on("click", '.nav-link', function() {
   hideAllDiv();
   var pageId = $(this).data().page;
   console.log(pageId);
   $(pageId).show();
});



