// ==UserScript==
// @name         CMSMS Product's Module Alias Generator
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       eryksikora.pl
// @include     *nycz.pl/admin/moduleinterface.php?mact=Products,m1_,editproduct*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    if (document.querySelector('input[name=m1_product_name]').value == '' || document.querySelector('#m1_customfield\\[field-12\\]').value == ''){

        alert('error - at least one of the indicated fields is empty');

    } else {

        /* customfields have their own IDs, generated after creation by CMSMS */

        var pllink = document.querySelector('input[name=m1_product_name]').value; //get the field value
        document.querySelector('#m1_customfield\\[field-22\\]').value = aliasfy(pllink.toLowerCase()); //convert the field value

        var enlink = document.querySelector('#m1_customfield\\[field-12\\]').value; //get the field value
        document.querySelector('#m1_customfield\\[field-21\\]').value = aliasfy(enlink.toLowerCase()); //convert the field value

        // NOTE BELOW: only when the price isn't used => visible in the list (means success)
        document.querySelector('[name=m1_price]').value = 1;

        document.querySelector('[name=m1_submit]').click(); //click simulator

    }

    function aliasfy(s){
        //make a nice link
        s = s.replace(/ /g, "-");
        s = s.replace(/_/g, "-");
        s = s.replace(/ą/g, "a");
        s = s.replace(/ę/g, "e");
        s = s.replace(/ń/g, "n");
        s = s.replace(/ż/g, "z");
        s = s.replace(/ź/g, "z");
        s = s.replace(/ł/g, "l");
        s = s.replace(/ć/g, "c");
        s = s.replace(/ó/g, "o");
        s = s.replace(/ś/g, "s");
        return s;
    }

})();