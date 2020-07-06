// $(function () {
//     $("#example1").DataTable({
//       "responsive": true,
//       "autoWidth": false,
//       "bDestroy": true,
//       "paging": true,
//     });
//     $('#example2').DataTable({
//       "paging": true,
//       "lengthChange": false,
//       "searching": false,
//       "ordering": true,
//       "info": true,
//       "autoWidth": false,
//       "responsive": true,
//     });

//     $( 'table#dt-sample' ).dataTable({
// 			// select: true,
// 			dom: "<'row ml-0 mr-0 pt-2 pb-1 '<'col-sm-12 col-md-6 pt-1'l><'col-sm-12 col-md-6 pt-1'f>> <'row'<'col-sm-12'tr>><'row ml-0 mr-0 pt-3 pb-3'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 text-right'p>>",
// 			// dom:"<'row'<'col-sm-12'tr>>" +
// 			// 	// "<'dt-footer'<'row'<'col-12 col-md-2'l><'col-12 col-md-6 exportlinks'><'col-12 col-md-4'p>>>",
// 			// 	"<'dt-footer'<'row'<'col-12'<'dt-download' l <' '>><'dt-pagination' ip>>>>",
// 			select: true,
// 			responsive: true,
//       bDestroy: true,
// 			language: {
// 				// search: "Search in table:", 
// 				zeroRecords: "No matching records found,<br/>try another search term",
// 				processing: "Loading...", 
// 				lengthMenu: "Showing _MENU_",
// 				info: "Showing _START_ to _END_ of <b>_TOTAL_</b> entries",
// 			}
//     });
  
// 	$("div.exportlinks").html('<div class="dt-extras">'
// 						+ '<div class="dt-exports">'
// 							// + '<em>Export to :<span class="chevron"></span></em>'
// 							 + '<a class="button"><img src="../images/icon/download.png"><em>Download</em></a>'
// 								+ '<div class="export-content">'
// 									// + '<button class="linkbutton exp-excel">Excel <b>(.xlsx)</b></button>'
// 									+ '<button class="linkbutton exp-pdf">Pdf <b>(.pdf)</b></button>'
// 									//+ '<button class="linkbutton exp-word">word <b>(.docx)</b></button>'
// 								//	+ '<button class="linkbutton exp-xml">XML <b>(.xml)</b></button>'
// 								//	+ '<button class="linkbutton exp-csv">csv <b>(.csv)</b></button>'
// 								+ '</div><!-- .export-content-->'
// 					+ '</div><!--.dt-extras-->');
// 	// dtsetResponsive();
//   $( 'table#dt-sample' ).wrap( '<div class="restable-box"></div>' );

//   });




$(function () {
    // $("#example1").DataTable({
    //   "responsive": true,
    //   "autoWidth": false,
    //   "bDestroy": true,
    // });
    // $('#example2').DataTable({
    //   "paging": true,
    //   "lengthChange": false,
    //   "searching": false,
    //   "ordering": true,
    //   "info": true,
    //   "autoWidth": false,
    //   "responsive": true,
    // });




    
		var tdTblae = $( 'table#dt-sample' ).dataTable({
			// select: true,
			dom: "<'row ml-0 mr-0 pt-2 pb-1 '<'col-sm-12 col-md-6 pt-1'l><'col-sm-12 col-md-6 pt-1'f>> <'row'<'col-sm-12'tr>><'row ml-0 mr-0 pt-3 pb-3'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 text-right'p>>",
			// dom:"<'row'<'col-sm-12'tr>>" +
			// 	// "<'dt-footer'<'row'<'col-12 col-md-2'l><'col-12 col-md-6 exportlinks'><'col-12 col-md-4'p>>>",
			// 	"<'dt-footer'<'row'<'col-12'<'dt-download' l <' '>><'dt-pagination' ip>>>>",
			select: true,
			responsive: true,
      bDestroy: true,
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
  







  });





  
  
  $( 'body' ).on( 'click', '.global-nav .main-nav .lst-main-nav li > a.dropnav, .global-nav .main-nav .lst-main-nav li:first-child a', function (e) {	
    
    $('.header-items .lst-header-items li a.item-user').removeClass('dp-open'); 
		$('.header-items .lst-header-items li .bm-userprofile').removeClass('dp-showing'); 	
		if($(this).hasClass("testnav") && $(this).hasClass("dropnav") && !($(this).hasClass("s-dropnav"))) {
    	$('.global-nav .main-nav .lst-main-nav li:first-child a').removeClass('mn-open');
			if ( !$(this).hasClass('mn-open') ) {
    		$('.global-nav .main-nav .lst-main-nav li div.sub-nav ul.lst-sub-nav li a.s-dropnav').removeClass("smn-open");
				$('.global-nav .main-nav .lst-main-nav li div.sub-nav ul.lst-sub-nav li div.super-sub-nav').removeClass("ssn-open");
        $(this).closest('.lst-main-nav').find('a.dropnav').removeClass('mn-open');
        $(this).closest('.lst-main-nav').find('a.testnav').removeClass('mn-open');
				$(this).closest('.lst-main-nav').find('div.sub-nav').removeClass('sn-open');
				$(this).addClass('mn-open');
				$( 'div.nav-overlay' ).show();
				$( 'body' ).css({'overflow':'hidden'}); 
				$(this).siblings('div.sub-nav').addClass('sn-open').find('ul.lst-sub-nav li:first-child a.s-dropnav').trigger("click"); 						
			} else {
    		if(!$(this).siblings('div.sub-nav').hasClass('sn-open')){
					$( 'div.nav-overlay' ).show();
					$( 'body' ).css({'overflow':'hidden'}); 
					$(this).siblings('div.sub-nav').addClass('sn-open').find('ul.lst-sub-nav li:first-child a.s-dropnav').trigger("click"); 
				}
				else{	
    			$(this).removeClass('mn-open');		
					$( 'div.nav-overlay' ).hide();
					$( 'body' ).css({'overflow':'auto'});
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







