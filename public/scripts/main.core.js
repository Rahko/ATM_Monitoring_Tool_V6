// document ready starts header

$(document).ready(function(){

	// On scroll reduce header size
	/* -- header compress when scroll */
	// $( window ).on( 'scroll', function ( e ) {
	// 	if ( $(window).scrollTop() > 80 ) {
	// 		$( 'header.global-header' ).addClass( 'tiny-header' );
	// 		//setMainContentTop();
	// 	} else {
	// 		$( 'header.global-header' ).removeClass( 'tiny-header' );
	// 	}
	// 	setTimeout(function () {
	// 		setMainContentTop();
	// 	}, 500);
	// });

	
	// Navigation Script
	
	$( 'body' ).on( 'click', '.global-nav .main-nav .lst-main-nav li > a.dropnav, .global-nav .main-nav .lst-main-nav li:first-child a', function (e) {	
		
		$('.header-items .lst-header-items li a.item-user').removeClass('dp-open'); 
		$('.header-items .lst-header-items li .bm-userprofile').removeClass('dp-showing'); 	
		if($(this).hasClass("dropnav") && !($(this).hasClass("s-dropnav"))) {
			$('.global-nav .main-nav .lst-main-nav li:first-child a').removeClass('mn-open');
			if ( !$(this).hasClass('mn-open') ) {
				$('.global-nav .main-nav .lst-main-nav li div.sub-nav ul.lst-sub-nav li a.s-dropnav').removeClass("smn-open");
				$('.global-nav .main-nav .lst-main-nav li div.sub-nav ul.lst-sub-nav li div.super-sub-nav').removeClass("ssn-open");
				$(this).closest('.lst-main-nav').find('a.dropnav').removeClass('mn-open');
				$(this).closest('.lst-main-nav').find('div.sub-nav').removeClass('sn-open');
				$(this).addClass('mn-open');
				// $( 'div.nav-overlay' ).show();
				// $( 'body' ).css({'overflow':'hidden'}); 
				$(this).siblings('div.sub-nav').addClass('sn-open').find('ul.lst-sub-nav li:first-child a.s-dropnav').trigger("click"); 						
			} else {
				if(!$(this).siblings('div.sub-nav').hasClass('sn-open')){
					// $( 'div.nav-overlay' ).show();
					// $( 'body' ).css({'overflow':'hidden'}); 
					$(this).siblings('div.sub-nav').addClass('sn-open').find('ul.lst-sub-nav li:first-child a.s-dropnav').trigger("click"); 
				}
				else{					
					$(this).removeClass('mn-open');		
					// $( 'div.nav-overlay' ).hide();
					// $( 'body' ).css({'overflow':'auto'});
					$(this).siblings('div.sub-nav').removeClass('sn-open');					
				}			
			}
		} 
		else if($(this).hasClass('dashboard')){ 			
				$(this).closest('.lst-main-nav').find('a.dropnav').removeClass('mn-open');
				$(this).closest('.lst-main-nav').find('div.sub-nav').removeClass('sn-open');
				$(this).closest('.lst-main-nav').find('div.sub-nav').find('ul.lst-sub-nav li a.s-dropnav').removeClass('smn-open');
				$(this).closest('.lst-main-nav').find('div.sub-nav .lst-sub-nav li div.super-sub-nav').removeClass('ssn-open');
				$( 'div.nav-overlay' ).hide();
				$( 'body' ).css({'overflow':'auto'});
				$(this).addClass('mn-open');
			}

		else if($(this).parent().parents('ul').hasClass("lst-super-sub-nav")){ 
			if(!$(this).hasClass("ssn-active")){
				$(this).addClass("ssn-active"); 
			}
			else{
				$(this).removeClass("ssn-active");
			}	
		}	
	});

	$('[data-toggle="tooltip"]').tooltip({
		trigger : 'hover'
	});  

	$('[data-toggle="tooltip"]').click(function () {
        $('[data-toggle="tooltip"]').tooltip("hide");
	 });
	 
 
		
	// Extended super Sub Menu

	$('body').on('click', '.global-nav .in-glnav .main-nav ul.lst-main-nav li .sub-nav a.s-dropnav', function (e) { 
		if ( !$(this).hasClass('smn-open') ) {
			$(this).closest('.lst-sub-nav').find('a.s-dropnav').removeClass('smn-open');
			$(this).closest('.lst-sub-nav').find('div.super-sub-nav').removeClass('ssn-open');
			$(this).addClass('smn-open');
			$(this).siblings('div.super-sub-nav').addClass('ssn-open');
		} else { 
			$(this).removeClass('smn-open');
			$(this).siblings('div.super-sub-nav').removeClass('ssn-open');
		}
	});

	// Close Navigation Sub Menu on click of overlay

	$( 'body' ).on( 'click', '.nav-overlay', function (e) {
		$('.global-nav .main-nav .lst-main-nav li a.dropnav').removeClass('mn-open');		
		$( 'div.nav-overlay' ).hide();
		$( 'body' ).css({'overflow':'auto'});
		$('.global-nav .main-nav .lst-main-nav li a.dropnav').siblings('div.sub-nav').removeClass('sn-open');
	});

	// Dropdown for User Profile

	$( 'body' ).on( 'click', '.header-items .lst-header-items li a.item-user', function (e) {
	   $('.global-nav .main-nav .lst-main-nav li a.dropnav, .header-items .lst-header-items li.hil-notification').removeClass('mn-open, nf-open');
	   $('.global-nav .main-nav .lst-main-nav li a.dropnav, .header-items .lst-header-items li.hil-alert').removeClass('mn-open, nf-open');
	   $('.global-nav .main-nav .lst-main-nav li div.sub-nav, .header-items .lst-header-items li .bm-notification').removeClass('sn-open, nf-showing');
		$('.grid-container .grid-header ul.dt-buttons li').removeClass('.fs-active');
		$('.slidefilter-container').removeClass('.slide-showing');

		$( 'div.nav-overlay' ).hide();
		$( 'body' ).css({'overflow':'auto'});
		if ( !$(this).parent('li').hasClass('dp-open') ) {
		    $(this).parent('li').addClass('dp-open');
			$(this).siblings('div.bm-userprofile').addClass('dp-showing');
		}
		else{
			$(this).parent('li').removeClass('dp-open');
			$(this).siblings('div.bm-userprofile').removeClass('dp-showing');
		}
	 });

	

	// Notification Script

	$( 'body' ).on( 'click', '.header-items .lst-header-items li a.item-notification', function (e) {
		e.stopPropagation();
		$('.header-items .lst-header-items li.hil-user-name').removeClass('dp-open');
		$('.header-items .lst-header-items li.hil-alert').removeClass('nf-open');	
	    $('.header-items .lst-header-items li.hil-alert div.bm-notification').removeClass('nf-showing');
		$('.header-items .lst-header-items li .bm-userprofile').removeClass('dp-showing');
		if ( !$(this).parent('li').hasClass('nf-open') ) {
			$(this).parent('li').addClass('nf-open');
			// $( 'body' ).css({'overflow':'hidden'});
			$(this).siblings('div.bm-notification').addClass('nf-showing');
		} else {
			$(this).parent('li').removeClass('nf-open');		
			// $( 'body' ).css({'overflow':'auto'});
			$(this).siblings('div.bm-notification').removeClass('nf-showing');
		}
	});

	// Alert Script

	$( 'body' ).on( 'click', '.header-items .lst-header-items li a.item-alert', function (e) {
		e.stopPropagation();
		$('.header-items .lst-header-items li.hil-user-name').removeClass('dp-open');
		$('.header-items .lst-header-items li.hil-notification').removeClass('nf-open');	
		$('.header-items .lst-header-items li.hil-notification div.bm-notification').removeClass('nf-showing');	
		$('.header-items .lst-header-items li .bm-userprofile').removeClass('dp-showing');
		if ( !$(this).parent('li').hasClass('nf-open') ) {
			$(this).parent('li').addClass('nf-open');
			// $( 'body' ).css({'overflow':'hidden'});
			$(this).siblings('div.bm-notification').addClass('nf-showing');
		} else {
			$(this).parent('li').removeClass('nf-open');		
			// $( 'body' ).css({'overflow':'auto'});
			$(this).siblings('div.bm-notification').removeClass('nf-showing');
		}
	});
 
	// $(document).on('click', '.bm-notification' , function(e){
	// 	e.stopPropagation();
    // })

	// $(document).on('click', 'html' , function(e){
	// 	e.stopPropagation();
	//    $('div.bm-notification').removeClass('nf-showing');
	//    $('div.bm-notification').removeClass('nf-open');
	// })

	// Notification close Script
	// $( 'body' ).on( 'click', '.header-items .lst-header-items li .bm-notification .nf-header span.nf-close', function (e) {
	// 	$('.header-items .lst-header-items li a.item-notification').removeClass('nf-open');
	// 	$('.header-items .lst-header-items li a.item-notification').siblings('div.bm-notification').removeClass('nf-showing');

	// });

	/* -- form control click */

	$( 'body' ).on( 'click', 'div.form-controller', function ( e ) {
		$( this ).children( 'input' ).focus();
		$( this ).children( 'select' ).focus();
		$( this ).children( 'textarea' ).focus();
    } );
	 

	/* -- form control for input text */

	$( 'body' ).on( 'focus', 'div.form-controller>input', function ( e ) {
		if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'disabled' ) ) {
			if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'control-active' ) ) {
				$( this ).closest( 'div.form-controller' ).addClass( 'control-active' );
			}
		} else {
			$( this ).attr( 'disabled', 'disabled' );
		}
	} );
	$( 'body' ).on( 'blur', 'div.form-controller>input', function ( e ) {
		$( this ).parent( 'div.form-controller' ).removeClass( 'control-active' );
	} );


	/* -- form control for select */

	$( 'body' ).on( 'focus', 'div.form-controller>div>select', function ( e ) {
		if ( !$( this ).closest( 'div.form-controller' ).hasClass( 'disabled' ) ) {
			if ( !$( this ).closest( 'div.form-controller' ).hasClass( 'control-active' ) ) {
				$( this ).closest( 'div.form-controller' ).addClass( 'control-active' );
			}
		} else {
			$( this ).attr( 'disabled', 'disabled' );
		}
	} );
	$( 'body' ).on( 'blur', 'div.form-controller>div>select', function ( e ) {
		$( this ).closest( 'div.form-controller' ).removeClass( 'control-active' );
	} );

	/* -- form control for textarea text */

	$( 'body' ).on( 'focus', 'div.form-controller>textarea', function ( e ) {
		if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'disabled' ) ) {
			if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'control-active' ) ) {
				$( this ).closest( 'div.form-controller' ).addClass( 'control-active' );
			}
		} else {
			$( this ).attr( 'disabled', 'disabled' );
		}
	} );
	$( 'body' ).on( 'blur', 'div.form-controller>textarea', function ( e ) {
		$( this ).parent( 'div.form-controller' ).removeClass( 'control-active' );
	} );

	/* -- form control for textarea text */

	$( 'body' ).on( 'focus', 'div.form-controller>input.hasDatepicker', function ( e ) {
		if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'disabled' ) ) {
			if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'control-active' ) ) {
				$( this ).closest( 'div.form-controller' ).addClass( 'control-active' );
			}
		} else {
			$( this ).attr( 'disabled', 'disabled' );
		}
	} );
	$( 'body' ).on( 'blur', 'div.form-controller>input.hasDatepicker', function ( e ) {
		$( this ).parent( 'div.form-controller' ).removeClass( 'control-active' );
	} );

	/* -- Input field animation --*/

	$('.ux-component input, .ux-component textarea').on('focusin', function() { 
		if ( !$( this ).parent('.ux-component').is( '.ux-disabled' ) ) {
			$(this).parent('.ux-component').addClass('ux-active');
			// $(this).parent('.ux-component').removeClass('ux-success');
			// $(this).parent('.ux-component').removeClass('ux-error');
			$(this).parent('.ux-component').find('label').addClass('field-active');
			// console.log('clicking...');
		}
	});

	$('.ux-component select').on('focusin', function() { 
		if ( !$( this ).parent('.ux-component').is( '.ux-disabled' ) ) {
			$(this).parent('.ux-component').addClass('ux-active');
			  // $(this).parent('.ux-component').removeClass('ux-success');
			// $(this).parent('.ux-component').removeClass('ux-error');
			 
		}
	});
 
	$('.ux-component select').on('focusout', function() {
		$(this).parent('.ux-component').removeClass('ux-active'); 
		if (!this.value) {
			if ( !$( this ).parent('.ux-component').is( '.ux-disabled, .ux-readonly' ) ) {
				$(this).parent('.ux-component').removeClass('ux-active');
				 
         	}
		}
	});

	$('.ux-component input, .ux-component textarea').on('focusout', function() {
		$(this).parent('.ux-component').removeClass('ux-active'); 
		if (!this.value) {
			if ( !$( this ).parent('.ux-component').is( '.ux-disabled, .ux-readonly' ) ) {
				$(this).parent('.ux-component').removeClass('ux-active');
				$(this).parent().find('label').removeClass('field-active');
			}
		}
	});

	// $('.ux-component label').on('click', function() {
	// 	if ($(this).siblings('select').length) {
	// 		$(this).siblings('select').trigger('click');
	// 	}
	// });

	$('label.toggle').click(function() {
		if (! $(this).find('input').is(':checked')) {
			$(this).closest('label').addClass("label-inactive");
		}
		else{
			$(this).closest('label').removeClass("label-inactive");

		}
	});

	// select date

	$( "#datepicker, #datefrom, #dateto, #datepicker1, #datefrom1, #dateto1, #pcCDate, #pcChqDate, #pcCBnDate" ).datepicker({
		changeMonth: true,
		changeYear: true,	
		 onClose: function() {
			$(this).prev().addClass("field-active");
		 }	
	});

	$( ".datepicker1" ).datepicker({
		 
	  });
	  
	  $( ".datepicker2" ).datepicker({
		  
		changeMonth: true,
		changeYear: true,
		dateFormat: 'MM yy',

		onClose: function() {
			var iMonth = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
			var iYear = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
			$(this).datepicker('setDate', new Date(iYear, iMonth, 1));		  
		 },	
		 
		  
		beforeShow: function() {
		  if ((selDate = $(this).val()).length > 0) 
		  {
			 iYear = selDate.substring(selDate.length - 4, selDate.length);
			 iMonth = jQuery.inArray(selDate.substring(0, selDate.length - 5), $(this).datepicker('option', 'monthNames'));
			 $(this).datepicker('option', 'defaultDate', new Date(iYear, iMonth, 1));
			  $(this).datepicker('setDate', new Date(iYear, iMonth, 1));
		  }
	   },
	   
	});


	$(".datepicker2").focus(function () { 
		//$(".ui-datepicker-year").hide();
		$(".ui-datepicker-calendar").hide();
	});

	$('#gt_datefrom, #gt_dateto, div.gt-add-form a.calendar').datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: 'MM yy',
		  
		onClose: function() {
		   var iMonth = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
		   var iYear = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
		   $(this).datepicker('setDate', new Date(iYear, iMonth, 1));		  
		},	
		  
		beforeShow: function() {
		  if ((selDate = $(this).val()).length > 0) 
		  {
			 iYear = selDate.substring(selDate.length - 4, selDate.length);
			 iMonth = jQuery.inArray(selDate.substring(0, selDate.length - 5), $(this).datepicker('option', 'monthNames'));
			 $(this).datepicker('option', 'defaultDate', new Date(iYear, iMonth, 1));
			  $(this).datepicker('setDate', new Date(iYear, iMonth, 1));
		  }
	   }
	 });

	 $("#gt_datefrom, #gt_dateto").focus(function () { 
		//$(".ui-datepicker-year").hide();
		$(".ui-datepicker-calendar").hide();
	});



	// datatables row selection

	$('table#dt-sample tbody').on( 'click', 'tr', function () {

		if ( !$(this).hasClass('row-locked') ) {
	        if ( !$(this).hasClass('selected') ) {
	        	$('this').addClass('selected');
	            $('.grid-container .grid-header .dt-buttons .dt-edit').addClass('edit-enable');
	            $('.grid-container .grid-header .dt-buttons .dt-view').addClass('view-enable');
	            $('.grid-container .grid-header .dt-buttons .dt-copy').addClass('copy-enable');
	        }
	        else{
	        	$('this').removeClass('selected');
	            $('.grid-container .grid-header .dt-buttons .dt-edit').removeClass('edit-enable');
	            $('.grid-container .grid-header .dt-buttons .dt-view').removeClass('view-enable');
	            $('.grid-container .grid-header .dt-buttons .dt-copy').removeClass('copy-enable');
	        }
        }
    } );

	
	// custom filter

	 var select2Init = function() {
		$("select.chosen-select").select2({
			dropdownAutoWidth: true,
			 // minimumResultsForSearch: -1,
			allowClear: false,

		});

	};

	var dtSearchInit = function() {
		$("#select_multi").change(function() {
			dtSearchAction($(this), 1);
		});
		
	};

	dtSearchAction = function(selector, columnId) {
		var fv = selector.val();
		if (fv == "" || fv == null) {
			dataTable
			.api()
			.column(columnId)
			.search("", true, false)
			.draw();
		} else {
			dataTable
			.api()
			.column(columnId)
			.search(fv, true, false)
			.draw();
		}
	};
	// $(document).ready(function() {
		select2Init();
		// tdTblae();
		dtSearchInit();
	// });

});
// document ready ends header

// Set TOP for MAIN-CONTENT

function setMainContentTop() {
	var globalHeaderHeight = $( 'header.global-header' ).height();
	$( 'div.main-content' ).css( {
		'padding-top': globalHeaderHeight
	} );
	$( 'nav.global-nav' ).css( {
		'top': globalHeaderHeight
	} );
	$( '.sub-nav' ).css( {
		'top': globalHeaderHeight
	} );
	$( '.bm-notification' ).css( {
		'top': globalHeaderHeight
	} );
};

// Set Navigation menu for small resolution

function pageOnsmall () {
    if ($(window).width () < 768) {
		if ( !$('a.item-nav').hasClass('item-active') ) {
			$(this).addClass( 'item-active' );
			$( 'div.global-nav' ).removeClass( 'nav-active' );

		} else {
			// $( this ).removeClass( 'item-active' );
			// $( 'div.global-nav' ).removeClass( 'nav-active' );

		}
	 }
	 else {
		
	}
};


// datatables

function dtSample () {
		var tdTblae = $( 'table#dt-sample' ).dataTable({
			// select: true,
			dom: "<'row ml-0 mr-0 pt-2 pb-1 '<'col-sm-12 col-md-6 pt-1'l><'col-sm-12 col-md-6 pt-1'f>> <'row'<'col-sm-12'tr>><'row ml-0 mr-0 pt-3 pb-3'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 text-right'p>>",
			// dom:"<'row'<'col-sm-12'tr>>" +
			// 	// "<'dt-footer'<'row'<'col-12 col-md-2'l><'col-12 col-md-6 exportlinks'><'col-12 col-md-4'p>>>",
			// 	"<'dt-footer'<'row'<'col-12'<'dt-download' l <' '>><'dt-pagination' ip>>>>",
			select: true,
			responsive: true,

			language: {
				// search: "Search in table:", 
				zeroRecords: "No matching records found,<br/>try another search term",
				processing: "Loading...", 
				lengthMenu: "Showing _MENU_",
				info: "Showing _START_ to _END_ of <b>_TOTAL_</b> entries",
			}
		});
	$("div.exportlinks").html('<div class="dt-extras">'
						+ '<div class="dt-exports">'
							// + '<em>Export to :<span class="chevron"></span></em>'
							 + '<a class="button"><img src="../images/icon/download.png"><em>Download</em></a>'
								+ '<div class="export-content">'
									// + '<button class="linkbutton exp-excel">Excel <b>(.xlsx)</b></button>'
									+ '<button class="linkbutton exp-pdf">Pdf <b>(.pdf)</b></button>'
									//+ '<button class="linkbutton exp-word">word <b>(.docx)</b></button>'
								//	+ '<button class="linkbutton exp-xml">XML <b>(.xml)</b></button>'
								//	+ '<button class="linkbutton exp-csv">csv <b>(.csv)</b></button>'
								+ '</div><!-- .export-content-->'
					+ '</div><!--.dt-extras-->');
	// dtsetResponsive();
	$( 'table#dt-sample' ).wrap( '<div class="restable-box"></div>' );
};

 

function dtSample1 () {
	var tdTblae = $( 'table#dt-sample1' ).dataTable({
		// select: true,
		dom:"<'row'<'col-sm-12'tr>>" +
			// "<'dt-footer'<'row'<'col-12 col-md-2'l><'col-12 col-md-6 exportlinks'><'col-12 col-md-4'p>>>",
			"<'dt-footer'<'row'<'col-12'<'dt-download' l <' exportlinks'>><'dt-pagination' ip>>>>",
		select: true,
		responsive: true,

		language: {
			// search: "Search in table:", 
			zeroRecords: "No matching records found,<br/>try another search term",
			processing: "Loading...", 
			lengthMenu: "Showing _MENU_",
			info: "Showing _START_ to _END_ of <b>_TOTAL_</b> entries",
		}
	});
$("div.exportlinks").html('<div class="dt-extras">'
					+ '<div class="dt-exports">'
						// + '<em>Export to :<span class="chevron"></span></em>'
						 + '<a class="button"><img src="../images/icon/download.png"><em>Download</em></a>'
							+ '<div class="export-content">'
								// + '<button class="linkbutton exp-excel">Excel <b>(.xlsx)</b></button>'
								+ '<button class="linkbutton exp-pdf">Pdf <b>(.pdf)</b></button>'
								//+ '<button class="linkbutton exp-word">word <b>(.docx)</b></button>'
							//	+ '<button class="linkbutton exp-xml">XML <b>(.xml)</b></button>'
							//	+ '<button class="linkbutton exp-csv">csv <b>(.csv)</b></button>'
							+ '</div><!-- .export-content-->'
				+ '</div><!--.dt-extras-->');
// dtsetResponsive();
$( 'table#dt-sample1' ).wrap( '<div class="restable-box"></div>' );
};

function dtSample2 () {
	var tdTblae = $( 'table#dt-sample2' ).dataTable({
		// select: true,
		dom:"<'row'<'col-sm-12'tr>>" +
			// "<'dt-footer'<'row'<'col-12 col-md-2'l><'col-12 col-md-6 exportlinks'><'col-12 col-md-4'p>>>",
			"<'dt-footer'<'row'<'col-12'<'dt-download' l <' exportlinks'>><'dt-pagination' ip>>>>",
		select: true,
		responsive: true,

		language: {
			// search: "Search in table:", 
			zeroRecords: "No matching records found,<br/>try another search term",
			processing: "Loading...", 
			lengthMenu: "Showing _MENU_",
			info: "Showing _START_ to _END_ of <b>_TOTAL_</b> entries",
		}
	});
$("div.exportlinks").html('<div class="dt-extras">'
					+ '<div class="dt-exports">'
						// + '<em>Export to :<span class="chevron"></span></em>'
						 + '<a class="button"><img src="../images/icon/download.png"><em>Download</em></a>'
							+ '<div class="export-content">'
								// + '<button class="linkbutton exp-excel">Excel <b>(.xlsx)</b></button>'
								+ '<button class="linkbutton exp-pdf">Pdf <b>(.pdf)</b></button>'
								//+ '<button class="linkbutton exp-word">word <b>(.docx)</b></button>'
							//	+ '<button class="linkbutton exp-xml">XML <b>(.xml)</b></button>'
							//	+ '<button class="linkbutton exp-csv">csv <b>(.csv)</b></button>'
							+ '</div><!-- .export-content-->'
				+ '</div><!--.dt-extras-->');
// dtsetResponsive();
$( 'table#dt-sample2' ).wrap( '<div class="restable-box"></div>' );
};

dtSample1 () 
dtSample2 ()

$("#export div.exportlinks ").html('<div class="dt-extras">'
					+ '<div class="dt-exports">'
						// + '<em>Export to :<span class="chevron"></span></em>'
						 + '<a class="button"><img src="../images/icon/download.png"><em>Download</em></a>'
							+ '<div class="export-content">'
								// + '<button class="linkbutton exp-excel">Excel <b>(.xlsx)</b></button>'
								+ '<button class="linkbutton exp-pdf">Pdf <b>(.pdf)</b></button>'
								//+ '<button class="linkbutton exp-word">word <b>(.docx)</b></button>'
							//	+ '<button class="linkbutton exp-xml">XML <b>(.xml)</b></button>'
							//	+ '<button class="linkbutton exp-csv">csv <b>(.csv)</b></button>'
							+ '</div><!-- .export-content-->'
				+ '</div><!--.dt-extras-->');

function tableExpander(){
	$( 'body' ).on( 'click', '.grid-container .grid-header .dt-buttons .expand-cont', function (e) { 
		if ( !$(this).parent('li').hasClass('expand-active') ) {
			$(this).parent('li').addClass('expand-active');
			$( 'html, body' ).animate( {scrollTop : $( ".grid-container" ).offset().top - 2000 }, 10 );
			// $(this).animate({scrollTop: $(".datatable-box").offset().top});
			$(this).parents().find('div.grid-container').addClass('expander-active');
		} else {
			$(this).parent('li').removeClass('expand-active');
			// $( 'body' ).css({'overflow':'hidden'});
			$('html, body').animate({scrollTop:$(document).height()}, 'slow');
			$(this).parents().find('div.grid-container').removeClass('expander-active');
		}
	});
};

// remove padding for full screen modal

function fullModal(){
	$('.modal').on('shown.bs.modal', function (e) {
		 // $("body").css("padding-right","0");
		 if (!$(this).find('.modal-dialog').hasClass('modal-full')) {
		 	// console.log('clicking...');
		 	$(this).css("padding-right","auto");
		 	$('body').css("padding-right","auto");
		 }
		 else{
		 	$(this).css("padding-right","0");
		 	$('body').css("padding-right","0");
		 }
	});
}

function slideFilter(){
	$( 'body' ).on( 'click', '.grid-container .grid-header .dt-buttons a.filter-slide', function (e) {
		e.stopPropagation();
		// $('.header-items .lst-header-items li.hil-user-name').removeClass('dp-open');
		// $('.header-items .lst-header-items li .bm-userprofile').removeClass('dp-showing');
		if ( !$(this).parent('li').hasClass('fs-active') ) {
			$(this).parent('li').addClass('fs-active');
			$(this).siblings('div.slidefilter-container').addClass('slide-showing');
		} else {
			$(this).parent('li').removeClass('fs-active');		
			// $( 'body' ).css({'overflow':'auto'});
			$(this).siblings('div.slidefilter-container').removeClass('slide-showing');
			
		}


	});

	// $( 'body' ).on( 'click', '.slidefilter-container .filter-header .fh-title a', function (e) {
	// 	// $( 'body' ).css({'overflow':'auto'});
	// 	$('.slidefilter-container').removeClass('selected');
	
	// });
}

$(document).on('click', 'div.slidefilter-container' , function(e){
	e.stopPropagation();
})



// $(document).on('click', 'html' , function(e){
// 	e.stopPropagation();
// 	$('div.slidefilter-container').removeClass('slide-showing');
// })

loginContaner();

// Prelogin container vertically center

function loginContaner(){
	var GheaderH = $( 'header.global-header' ).height(),
		LcontainerH = $( 'div.login-container' ).height(),
		pageHeight    = window.innerHeight -1 ;

		$( 'div.login-container' ).css( {
			'height': LcontainerH

		} );

		$( 'div.full-container' ).css( {
			'height': pageHeight - GheaderH

		} );
};

loginContaner1();

// Prelogin container vertically center

function loginContaner1(){
	var GheaderH = $( 'header.global-header' ).height(),
		LcontainerH = $( 'div.login-container1' ).height(),
		pageHeight    = window.innerHeight -1 ;

		$( 'div.login-container1' ).css( {
			'height': LcontainerH

		} );

		$( 'div.full-container' ).css( {
			'height': pageHeight - GheaderH

		} );
};

function detectIE () {
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1 ){
		$( 'head' ).append( '<link rel="stylesheet" type="text/css" href="../styles/bahmas.min.ie.css" />' );
	}
};

/* //export dataTable files format for mobile dropdown */

$( 'body' ).on( 'click', 'div.dt-exports>a.button', function() {
    $(this).parent().addClass('clicked');
   if ( !$( this ).parent( 'div.dt-exports' ).hasClass( 'expdrop-showing' ) ) {
		$("div.dt-exports.clicked").removeClass('expdrop-showing');
	    $( this ).parent( 'div.dt-exports' ).addClass( 'expdrop-showing' );
	//    $(' .export-content').addClass('content-showing');
	   $('div.dt-exports.clicked div.export-content').addClass('content-showing');
	} else {
		$( this ).parent( 'div.dt-exports' ).removeClass( 'expdrop-showing' );
		$('div.dt-exports').removeClass('clicked')
		// $(".export-content").removeClass('content-showing');
		$('div.dt-exports  div.export-content').removeClass('content-showing');

	}
} );

function createFancyScrollbarForNav () {
    $( '.global-nav' ).mCustomScrollbar({
        theme: 'minimal'
    });
    document.querySelector( '.global-nav' ).scrollIntoView({
        behavior: 'smooth'
    });

};

setMainContentTop();
$( window ).on( 'resize', function ( e ) {
	setMainContentTop();
	// setGSubNavigationTop();
	pageOnsmall();
	fullModal();
	loginContaner();
});

// Toast Message

function showToastMessage (messageText, messageType, autoDismiss, messageDuration) { 
	var messageHTML = '<div class="msg-toast msg-'+ messageType +'"><em>'+ messageText +'</em></div>';
	$( 'div.toast-messages' ).html( messageHTML );
	setTimeout(function () {
		$( 'div.toast-messages' ).find( '.msg-toast' ).addClass( 'msg-showing' );
	}, 300);
	
	if (typeof messageDuration === "undefined" || messageDuration === null) { 
		messageDuration = 5000;
	}

	if ( autoDismiss ) {
		setTimeout(function () {
			$( 'div.toast-messages' ).find( '.msg-toast' ).removeClass( 'msg-showing' );
		}, messageDuration);
		setTimeout(function () {
			$( 'div.toast-messages' ).html( '' );
		}, messageDuration + 400);
	} else {
		$( 'div.toast-messages' ).find( '.msg-toast' ).addClass( 'msg-close' );
	}
};

$( 'body' ).on( 'click', 'div.toast-messages div.msg-toast', function() {
	setTimeout(function () {
		$( 'div.toast-messages' ).find( '.msg-toast' ).removeClass( 'msg-showing' );
	}, 300);
});

//tax 

function addDynTaxSlab(){        
	var dynTaxSlab=$('.dyn_tax_slb_parent').find(".dyn_tax_slb:last-of-type").parent().html();   
	//console.log(dynTaxSlab);
	$("a.add-more-slb").on("click",function(){	
		var $divBody = $(".dyn_tax_slb_parent .dyn_tax_slb:last-of-type"); // console.log($divBody.html());
		$divBody.after(dynTaxSlab); 	
		var removeBtn = '<div class="col-6 col-sm-6 col-md-1 mt-3 col-lg-1 col-xl-1"><a href="javascript:;" class="del-dyn-slb remove-dyn-elem" title="Remove">x</a></div>';		
		
		if($divBody.next().is("h6")){
			$divBody.next().remove();
		}				
		$divBody.next().find("div.input-box:first-child").parent().append(removeBtn);	
		
		$divBody.next().find(".ux-component:first-child").removeClass("ux-readonly").find("label").removeClass("data-disabled");
		$divBody.next().find(".ux-component:first-child").find("input").removeAttr("disabled").val("");
		$divBody.next().find(".ux-component").find("label").addClass("field-active").next().removeAttr("value");
});
}
 

$(document).on("click",".del-dyn-slb",function(){
	$( this ).closest(".dyn_tax_slb").remove();
});


//Role master add/edit
//Check all child checkboxes on checking parent checkbox

function checkBox(){ 
	 $('#accordion .card .card-body table thead tr th label.selection input.selectAll').click(function(e) {
		var parentBox = e.target;
	   if(!parentBox.classList.contains("view") && !parentBox.classList.contains("add") && !parentBox.classList.contains("edit")){
		if ($(this).is(':checked')) {
			$(this).parents("thead").next().find("tr td label.selection input.justOne:not(:disabled)").prop('checked', true);
		} else {
			$(this).parents("thead").next().find("tr td label.selection input.justOne:not(:disabled)").prop('checked', false);
		}
	   }
	   else{ 
		var actionClass = parentBox.classList.item(1); 
		   if ($(this).is(':checked')) {
				$(this).parents("thead").next().find("tr td label.selection input.justOne."+actionClass+":not(:disabled)").prop('checked', true);                 
		 
		} else { 
			$(this).parents("thead").next().find("tr td label.selection input.justOne."+actionClass+":not(:disabled)").prop('checked', false);
		}        
	   }
	});
	
	$("#accordion .card .card-body table tbody tr td label.selection input.justOne").change(function(e){
		var childBox = e.target; 
		if(!childBox.classList.contains("view") && !childBox.classList.contains("add") && !childBox.classList.contains("edit")){
		var total = $(this).parents("tbody").find("label.selection input.justOne").length;           
		var checked = $(this).parents("tbody").find("label.selection input.justOne:checked").length; 
		
		if(total == checked){
			$(this).parents("tbody").prev().find("label.selection input.selectAll").prop('checked', true);
		}
		else {
			$(this).parents("tbody").prev().find("label.selection input.selectAll").prop('checked', false);
		}
		}
		else{ 
			var c_actionClass = childBox.classList.item(1);                  
			var total = $(this).parents("tbody").find("label.selection input.justOne."+c_actionClass+":not(:disabled)").length;           
		var checked = $(this).parents("tbody").find("label.selection input.justOne."+c_actionClass+":checked").length; 
		
		if(total == checked){
			$(this).parents("tbody").prev().find("label.selection input.selectAll."+c_actionClass+":not(:disabled)").prop('checked', true);
		}
		else {
			$(this).parents("tbody").prev().find("label.selection input.selectAll."+c_actionClass+":not(:disabled)").prop('checked', false);
		}
		}          
	});
}



 

/*=========Wizard Next Previous Script::=========*/


$(document).ready(function () {

	var navListItems = $('div.setup-panel div a'),
		allWells = $('.setup-content'),
		allNextBtn = $('.nextBtn'),
		allprevBtn = $('.prevBtn');

	allWells.hide();

	navListItems.click(function (e) {
		e.preventDefault();
		var $target = $($(this).attr('href')),
		$item = $(this);

		if (!$item.hasClass('disabled')) {
			navListItems.removeClass('btn-primary').addClass('btn-default');
			$item.addClass('btn-primary');
			allWells.hide();
			$target.show();
		    // $target.find('input:eq(0)').focus();
		}
	});

	allNextBtn.click(function(){
		var curStep = $(this).closest(".setup-content"),
			curStepBtn = curStep.attr("id"),
			nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
			curInputs = curStep.find("input[type='text'],input[type='url']"),
			isValid = true;

		if (isValid)
			nextStepWizard.removeAttr('disabled').trigger('click');
	});
	allprevBtn.click(function(){
		var curStep1 = $(this).closest(".setup-content"),
			curStepBtn1 = curStep1.attr("id"),
			prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn1 + '"]').parent().prev().children("a"),
			curInputs1 = curStep1.find("input[type='text'],input[type='url']"),
			isValid = true;

		if (isValid)
			prevStepWizard.removeAttr('disabled').trigger('click');
	});

	$('div.setup-panel div a.btn-primary').trigger('click');

	
});	


/*=========Wizard Next Previous Script End Here::=========*/

	
 /* -- component - tabs */

 $( 'body' ).on( 'click', 'nav.tab-pills div.tabs>ul.lst-tabs>li>a', function ( e ) {	
    if ( !$( this ).hasClass( 'tab-selected' ) ) {	
        var selectedIndex = $( this ).parent( 'li' ).index();	
        $( this ).closest( 'nav.tab-pills' ).find( 'div.tabs-container' ).children( 'div.tab-content' ).removeClass( 'tc-showing' );	
        $( this ).closest( 'ul.lst-tabs' ).find( 'a' ).removeClass( 'tab-selected' );	
        $( this ).addClass( 'tab-selected' );	
        $( this ).closest( 'nav.tab-pills' ).find( 'div.tabs-container' ).children( 'div.tab-content' ).eq( selectedIndex ).addClass( 'tc-showing' );	
    }	
} );

$(' .menutabs-container .menutabs-content .resultall').click(function(){
	 $(this).parents(".grid-box1").next().remove( );
	 $(this).parents(".grid-box1").next().show();	
});

 //menu tabs 

 $('body').on('click', 'div.menu-tabs ul.lst-menu-tabs>li>a', function () {
	if ( !$(this).hasClass('tab-selected') ) {
		var seltabindex = $(this).parent('li').index();
		$(this).closest('div.menu-tabs').find('ul.lst-menu-tabs>li>a').removeClass('tab-selected');
		$(this).closest('div.menu-tabs').find('div.menutabs-content').removeClass('showing');
		$(this).addClass('tab-selected');
		$(this).closest('div.menu-tabs').find('div.menutabs-content').eq(seltabindex).addClass('showing');
	}
}); 

/* -- component - tabs */

$( 'body' ).on( 'click', 'nav.tab-controller div.tabs>ul.lst-tabs>li>a', function ( e ) {
	if ( !$( this ).hasClass( 'tab-selected' ) ) {
		var selectedIndex = $( this ).parent( 'li' ).index();
		$( this ).closest( 'nav.tab-controller' ).find( 'div.tabs-container' ).children( 'div.tab-content' ).removeClass( 'tc-showing' );
		$( this ).closest( 'ul.lst-tabs' ).find( 'a' ).removeClass( 'tab-selected' );
		$( this ).addClass( 'tab-selected' );
		$( this ).closest( 'nav.tab-controller' ).find( 'div.tabs-container' ).children( 'div.tab-content' ).eq( selectedIndex ).addClass( 'tc-showing' );
	}
} );

//script for arrow toggle accordian start

$(".acc-slide .arrow-toggle").click(function(event) {

	if (!$(this).parent(".acc-slide").hasClass('slide-active')){
		$(".acc-slide").removeClass('slide-active');
	}
	if (!$(this).parent(".acc-slide").hasClass('slide-active')){
		$(this).parent(".acc-slide").addClass('slide-active');
		$('.acc-slide-content').slideUp();
		$(".acc-slide").children('.acc-slide-content').slideUp();
		$(this).parent(".acc-slide").children('.acc-slide-content').slideDown();
	}
	else if ($(this).parent(".acc-slide").hasClass('slide-active'))
	{
		$(this).parent(".acc-slide").removeClass('slide-active');
		$('.acc-slide-content').slideUp();
	}
});

//script for arrow toggle accordian end


//script for arrow toggle accordian start

$(".acc-slide .arrow-toggle1").click(function(event) {

	if (!$(this).parent(".acc-slide").hasClass('slide-active')){
		$(".acc-slide").removeClass('slide-active');
	}
	if (!$(this).parent(".acc-slide").hasClass('slide-active')){
		$(this).parent(".acc-slide").addClass('slide-active');
		$('.acc-slide-content').slideUp();
		$(".acc-slide").children('.acc-slide-content').slideUp();
		$(this).parent(".acc-slide").children('.acc-slide-content').slideDown();
	}
	else if ($(this).parent(".acc-slide").hasClass('slide-active'))
	{
		$(this).parent(".acc-slide").removeClass('slide-active');
		$('.acc-slide-content').slideUp();
	}
});

$(document).on('change' , '#selectAllInterest', function(){

	if($(this).prop("checked")){
	
		$('.individualInterest').find('input').prop('checked' , true)

	}else{
		$('.individualInterest').find('input').prop('checked' , false)
	}

})


$(document).on('change' , '.individualInterest input', function(){

		if($('.individualInterest input:checkbox:not(:checked)').length  >  0 ){
			$('#selectAllInterest').prop('checked' , false)

		}else{
			$('#selectAllInterest').prop('checked' , true)
		}

})

$(document).on('change' , '#selectAllInterest', function(){

	if($(this).prop("checked")){
	
		$('.individualInterest').find('input').prop('checked' , true)

	}else{
		$('.individualInterest').find('input').prop('checked' , false)
	}

})


$(document).on('change' , '.individualInterest input', function(){

		if($('.individualInterest input:checkbox:not(:checked)').length  >  0 ){
			$('#selectAllInterest').prop('checked' , false)

		}else{
			$('#selectAllInterest').prop('checked' , true)
		}

})


//script for arrow toggle accordian end
 

		$('.resultall').click(function(){	
			$(".noresult1").hide();	
			$(".result1").show( ); 	
		});
		

		$('.btn-toggle').click(function() {
			$(this).find('.btn').toggleClass('active');  
			
			if ($(this).find('.btn-primary').length>0) {
				$(this).find('.btn').toggleClass('btn-primary');
			}
			if ($(this).find('.btn-danger').length>0) {
				$(this).find('.btn').toggleClass('btn-danger');
			}
			if ($(this).find('.btn-success').length>0) {
				$(this).find('.btn').toggleClass('btn-success');
			}
			if ($(this).find('.btn-info1').length>0) {
				$(this).find('.btn').toggleClass('btn-info1');
			}
			
			$(this).find('.btn').toggleClass('btn-default');
			   
		});
		
		$('form').submit(function(){
		  var radioValue = $("input[name='options']:checked").val();
		  if(radioValue){
			 alert("You selected - " + radioValue);
		   };
			return false;
		});

		$( 'body' ).on( 'click', 'div.modal-footer button.next1', function () {
			$('.modal-backdrop').removeClass('show');
			$('.modal').removeClass('show');
			$('.modal-backdrop').fadeOut(0);
			$( 'body' ).css({'overflow':'auto'});
         } );

		// $( 'body' ).on( 'click', 'div.grid-footer button.prevBtn1', function () {
		// 	$('.modal').removeClass('show');
		// 	$('.modal').fadeOut(0);
		//  } ); 
 
  
	// Notification Script

	$( 'body' ).on( 'click', '.widget-box2  a.item-notification', function (e) {
		e.stopPropagation();
		 // $('.header-items .lst-header-items li.hil-alert div.bm-notification').removeClass('nf-showing');
		  if ( !$( '.widget-box2 div.bm-notification').hasClass('nf-showing') ) {
			 $( '.widget-box2 div.bm-notification').addClass('nf-showing');
			 $( 'div.nav-overlay').fadeIn(100);
			  
			 
		 } else {
			 $( '.widget-box2 div.bm-notification').removeClass('nf-showing');
			 $( 'div.nav-overlay').fadeOut(100);
			 
		 }
	 });
 
	 $('body').on( 'click', '.widget-box2 div.nav-overlay', function (e) {
		 e.stopPropagation();
			 $( 'div.nav-overlay').fadeOut(100);
			 $( '.widget-box2 div.bm-notification').removeClass('nf-showing');
			 
	   });		
	 
	
	   //show reports button - FOR DEMO PURPOSE
	   
$('#btn-show-top').on('click', function(){
	var reportPosition = $('div.report-content').offset().top - 52;
	$('html, body').animate({ scrollTop: reportPosition }, 'slow');
	return false;
});


$("ul li a.button1.secondary").on("click", function(){ 
  $("ul li a.button1.secondary").removeClass("active");
	  if ( !$(this).hasClass("active") ) {
			$(this).addClass("active");
		  }
     });


	 