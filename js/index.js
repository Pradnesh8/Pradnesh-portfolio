$(document).ready(function () {
    $(".burger").click(()=>{
        $("nav").toggle();
        $(".burger").toggleClass("toggle");
    })
    $("#profile-link").click(function () {
        $(".profile-card").css('display', 'flex');
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link").addClass("underlined");
        $("#projects-link").removeClass("underlined");
        $("#skills-link").removeClass("underlined");
        $("#education-link").removeClass("underlined");
        $("#contact-link").removeClass("underlined");
        $("#resume-link").removeClass("underlined");
    });
    $("#projects-link").click(function () {
        $(".profile-card").hide();
        $(".projects-card").css('display', 'flex');
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link").removeClass("underlined");
        $("#projects-link").addClass("underlined");
        $("#skills-link").removeClass("underlined");
        $("#education-link").removeClass("underlined");
        $("#contact-link").removeClass("underlined");
        $("#resume-link").removeClass("underlined");
    });
    $("#skills-link").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").css('display', 'flex');
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link").removeClass("underlined");
        $("#projects-link").removeClass("underlined");
        $("#skills-link").addClass("underlined");
        $("#education-link").removeClass("underlined");
        $("#contact-link").removeClass("underlined");
        $("#resume-link").removeClass("underlined");
    });
    $("#education-link").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").css('display', 'flex');
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link").removeClass("underlined");
        $("#projects-link").removeClass("underlined");
        $("#skills-link").removeClass("underlined");
        $("#education-link").addClass("underlined");
        $("#contact-link").removeClass("underlined");
        $("#resume-link").removeClass("underlined");
    });
    $("#contact-link").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").css('display', 'flex');
        $(".resume-card").hide();
        $("#profile-link").removeClass("underlined");
        $("#projects-link").removeClass("underlined");
        $("#skills-link").removeClass("underlined");
        $("#education-link").removeClass("underlined");
        $("#contact-link").addClass("underlined");
        $("#resume-link").removeClass("underlined");
    });
    $("#resume-link").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").css('display', 'flex');
        $("#profile-link").removeClass("underlined");
        $("#projects-link").removeClass("underlined");
        $("#skills-link").removeClass("underlined");
        $("#education-link").removeClass("underlined");
        $("#contact-link").removeClass("underlined");
        $("#resume-link").addClass("underlined");
    });
    // Toggler for Responsive design
    $("#profile-link-res").click(function () {
        $(".profile-card").css('display', 'flex');
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link-res").addClass("underlined");
        $("#projects-link-res").removeClass("underlined");
        $("#skills-link-res").removeClass("underlined");
        $("#education-link-res").removeClass("underlined");
        $("#contact-link-res").removeClass("underlined");
        $("#resume-link-res").removeClass("underlined");
    });
    $("#projects-link-res").click(function () {
        $(".profile-card").hide();
        $(".projects-card").css('display', 'flex');
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link-res").removeClass("underlined");
        $("#projects-link-res").addClass("underlined");
        $("#skills-link-res").removeClass("underlined");
        $("#education-link-res").removeClass("underlined");
        $("#contact-link-res").removeClass("underlined");
        $("#resume-link-res").removeClass("underlined");
    });
    $("#skills-link-res").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").css('display', 'flex');
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link-res").removeClass("underlined");
        $("#projects-link-res").removeClass("underlined");
        $("#skills-link-res").addClass("underlined");
        $("#education-link-res").removeClass("underlined");
        $("#contact-link-res").removeClass("underlined");
        $("#resume-link-res").removeClass("underlined");
    });
    $("#education-link-res").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").css('display', 'flex');
        $(".contact-card").hide();
        $(".resume-card").hide();
        $("#profile-link-res").removeClass("underlined");
        $("#projects-link-res").removeClass("underlined");
        $("#skills-link-res").removeClass("underlined");
        $("#education-link-res").addClass("underlined");
        $("#contact-link-res").removeClass("underlined");
        $("#resume-link-res").removeClass("underlined");
    });
    $("#contact-link-res").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").css('display', 'flex');
        $(".resume-card").hide();
        $("#profile-link-res").removeClass("underlined");
        $("#projects-link-res").removeClass("underlined");
        $("#skills-link-res").removeClass("underlined");
        $("#education-link-res").removeClass("underlined");
        $("#contact-link-res").addClass("underlined");
        $("#resume-link-res").removeClass("underlined");
    });
    $("#resume-link-res").click(function () {
        $(".profile-card").hide();
        $(".projects-card").hide();
        $(".skills-card").hide();
        $(".education-card").hide();
        $(".contact-card").hide();
        $(".resume-card").css('display', 'flex');
        $("#profile-link-res").removeClass("underlined");
        $("#projects-link-res").removeClass("underlined");
        $("#skills-link-res").removeClass("underlined");
        $("#education-link-res").removeClass("underlined");
        $("#contact-link-res").removeClass("underlined");
        $("#resume-link-res").addClass("underlined");
    });
});

