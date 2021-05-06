(function($){
 $(function(){
  $('nav ul li > a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  });
 });
 $('html').click(function() {
  $('.nav-dropdown').hide();
 });
 document.querySelector('#nav-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
 });
 $('#nav-toggle').click(function() {
  $('nav ul').toggle();
 });
})(jQuery);


$(".tab_content").hide();
    $(".tab_content:first").show();
    $("ul.nav-list li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.nav-list li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });


    $("ul.footer-links li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.footer-links li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });

    $("ul.back-links li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.back-links li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });


	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.nav-list li").removeClass("active");
	  $("ul.nav-list li[rel^='"+d_activeTab+"']").addClass("active");
    });

	$('ul.nav-list li').last().addClass("tab_last");



    $("ul.back-dropdown li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.back-dropdown li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.back-dropdown li").removeClass("active");
	  $("ul.back-dropdown li[rel^='"+d_activeTab+"']").addClass("active");
    });

	$('ul.back-dropdown li').last().addClass("tab_last");





(function($) {

  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');
    
    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });

})(jQuery);

$(document).ready(function() {
    $('.table').DataTable({
      "columnDefs": [
        { "orderable": false, "targets": 5 }
      ],
      language: {
        'paginate': {
          'previous': '<span class="fa fa-chevron-left"></span>',
          'next': '<span class="fa fa-chevron-right"></span>'
        },
        "lengthMenu": 'Display <select class="form-control input-sm">'+
        '<option value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option>'+
        '<option value="40">40</option>'+
        '<option value="50">50</option>'+
        '<option value="-1">All</option>'+
        '</select> results'
      }
    })  
} );

$(document).ready(function(){

if (typeof window.ethereum !== 'undefined') {
  const connectAccount = document.querySelector('.connectAccount');
  const metaMaskInstall = document.querySelector('.metaMaskInstall');
  metaMaskInstall.style = "display: none !important";
    connectAccount.style = "display: block !important";
	$('#nav-toggle').click();
	
}

	
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
const ethereumButton = document.querySelector('.metaMask');
const showAccount = document.querySelector('.showAccount');
const connectAccount = document.querySelector('.connectAccount');

const nav1 = document.getElementById("nav1");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const motto = document.querySelector('.motto');
const page = document.querySelector('.page');
const metaMaskRequired = document.querySelector('.metaMaskRequired');
const search = document.querySelector('.search-container');


ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    var logIn = String(accounts);
    var front = logIn.substring(0, 6);
    var middle = "...";
    var back = logIn.substring(38, 42);
    var fullLogIn = front.concat(middle, back)
    showAccount.innerHTML = fullLogIn;
    connectAccount.innerHTML = "";
    nav1.style = "display: block !important";
    nav3.style = "display: block !important";
    nav4.style = "display: block !important";
    motto.style = "display: none !important";
    page.style = "display: flex !important";
    metaMaskRequired.style = "display: none !important";
    search.style = "display: block !important";
}


$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");
      //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    /*
    $(".loading-page .counter h1.color").css("width", c + "%");
    */
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
        $('.loading-page').fadeOut();
	$('.navigation').show();
	$('.pages').show();
	$('.site-footer').show();
	    
    }
  }, 15);
});


$('#search-bar').keyup(function(){
    $('.project-item').hide();
    var txt = $('#search-bar').val();
    $('.project-item').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});
