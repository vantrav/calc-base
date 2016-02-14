//written by Joceylyn (Saw Siow Hung)
$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
	  var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    //Add your last .click() here!
    $('#equals').click(function(){
        if (operator === "+"){
            finale = parseInt(newnumber,10) +
            parseInt(number,10);
            number.toString();
        }
        else if (operator === "-"){
            finale = parseInt(newnumber,10) -
            parseInt(number,10);
            number.toString();
        }
       else if (operator === "/"){
            finale = parseInt(newnumber,10) /
            parseInt(number,10);
            number.toString();
        }
        else if (operator === "*"){
            finale = parseInt(newnumber,10) *
            parseInt(number,10);
            number.toString();
        };
        totaldiv.text(finale);
        testNumLength(finale);
        number = "";
        newnumber = "";

    });
});
/** This is a description of the foo function. */
/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {
}
/**
 * Represents a book.
 * @constructor
 * @param {string} title - Vipul's  book.
 * @param {string} author - Vipul Anand.
 */
function Book(title, author) {
}
