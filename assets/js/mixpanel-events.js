document.getElementById("experienceLinkHeader").addEventListener("click", function(){
    mixpanel.track('Experience Link Header');
});
document.getElementById("educationLinkHeader").addEventListener("click", function(){
    mixpanel.track('Education Link Header');
});
document.getElementById("skillsLinkHeader").addEventListener("click", function(){
    mixpanel.track('Skills Link Header');
});
document.getElementById("contactLinkHeader").addEventListener("click", function(){
    mixpanel.track('Modal Header');
});

document.getElementById("experienceLinkFooter").addEventListener("click", function(){
    mixpanel.track('Experience Link Footer');
});
document.getElementById("educationLinkFooter").addEventListener("click", function(){
    mixpanel.track('Education Link Footer');
});
document.getElementById("skillsLinkFooter").addEventListener("click", function(){
    mixpanel.track('Skills Link Footer');
});
document.getElementById("contactLinkFooter").addEventListener("click", function(){
    mixpanel.track('Modal Footer');
});