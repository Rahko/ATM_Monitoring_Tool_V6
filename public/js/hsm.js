//number on input field 
$('input[type=number][max]:not([max=""])').on('input', function(ev) {
    var $this = $(this);
    var maxlength = $this.attr('max').length;
    var value = $this.val();
    if (value && value.length >= maxlength) {
      $this.val(value.substr(0, maxlength));
    }

  });



var pattern = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
x = 46;
$('#acqIp').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
    }
}).keyup(function () {
    var this1 = $(this);
    if (!pattern.test(this1.val())) {
        $('#validate_ip').text('Not Valid IP');
        while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
			$('#validate_ip').text(' ');
			$('#validate_ip_acquirer').text(' ');
			
        }
    }
});

$('#cbsInterfaceIp').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
    }
}).keyup(function () {
    var this1 = $(this);
    if (!pattern.test(this1.val())) {
        $('#validate_ip1').text('Not Valid IP');
        while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
			$('#validate_ip1').text(' ');
			$('#validate_ip_cbsinterfaceip').text(' ');
			
        }
    }
});

$('#cbsInterfaceIp_1').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
    }
}).keyup(function () {
    var this1 = $(this);
    if (!pattern.test(this1.val())) {
        $('#validate_ip2').text('Not Valid IP');
        while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
			$('#validate_ip2').text(' ');
			$('#validate_ip_cbsInterfaceIp_1').text(' ');
			
        }
    }
});


$('#hsmIp').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
    }
}).keyup(function () {
    var this1 = $(this);
    if (!pattern.test(this1.val())) {
        $('#validate_ip3').text('Not Valid IP');
        while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
			$('#validate_ip3').text(' ');
			$('#validate_ip3_isRequiredFlaghsmIp').text(' ');
			
        }
    }
});


$('#hwHsmIp').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
    }
}).keyup(function () {
    var this1 = $(this);
    if (!pattern.test(this1.val())) {
        $('#validate_ip4').text('Not Valid IP');
        while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
			$('#validate_ip4').text(' ');
			$('#validate_ip4_isRequiredFlaghwHsmIp').text(' ');
			
        }
    }
});


$('#nfsIp').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
    }
}).keyup(function () {
    var this1 = $(this);
    if (!pattern.test(this1.val())) {
        $('#validate_ip5').text('Not Valid IP');
        while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
			$('#validate_ip5').text(' ');
			$('#validate_ip5_isRequiredFlagnfsIp').text(' ');
			
        }
    }
});



$('#posEcomIp').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
    }
}).keyup(function () {
    var this1 = $(this);
    if (!pattern.test(this1.val())) {
        $('#validate_ip6').text('Not Valid IP');
        while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
			$('#validate_ip6').text(' ');
			$('#validate_ip6_isRequiredFlagposEcomIp').text(' ');
			
        }
    }
});
