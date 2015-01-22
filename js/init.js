/*global jQuery, window, console, can, document */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';


	var init = function () {
		$(function () {
			$(".p2pu-tab").p2puSlider({
				navbarContainer: '.navbar',
				icon: '.p2pu-tab-icon',
				iconUp: 'fa fa-chevron-down',
				iconDown: 'fa fa-chevron-up'
			});

            var signupForm = $('#id-form-signup');
            if (signupForm.length){
                signupForm.submit(function(event){
                    $('#signup-form-error').addClass('hidden');
                    event.preventDefault();
                    $('#id-form-signup :submit').button('loading')
                    $.post(signupForm.attr('action'), signupForm.serialize()).done(function() {
                        window.location = '/signedup/';
                    })
                    .fail(function() {
                        $('#signup-form-error').removeClass('hidden');
                    })
                    .always(function() {
                        $('#id-form-signup :submit').button('reset')
                    });
                });
            }

		});
	};

	P2PU.ciab = {};
	P2PU.ciab.init = init;

}(jQuery, P2PU));
