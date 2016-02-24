// First jQuery app.js
// Demographic Info goes here

// also can be done this way
// $(document).ready(function() {

// });

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];

$(function() {
  console.log("Everyting is ready.  Let's go!");

  $("#addHome").removeClass("btn-danger").addClass("btn-success");

  $("h1").addClass("text-center");

  // hmm we gotta do the single quotes not the double quotes here or it'll go nuts
  var newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );

  newLink.appendTo("body");
  // or $("body").append(newLink);

  $("#zillowLink").attr("target", "_blank");
  $("#zillowLink").attr("href", "http://www.google.com");

  // can turn the above into an object in the attribute

  // $("#zillowLink").attr({
  //   target: "_blank",
  //   href: "http://www.google.com"
  // });

  // or freaking-a chain those as well.  $("#zillowLink").attr("target", "_blank").attr("href", "http://www.google.com");

  // Events

  // $("#addHome").on("click", function() {
  //   // alert("add home was clicked");

  //   // or a bo liao NEO-GEO style animation
  //   $(this).slideUp(1000).slideDown(1000);

  // });

  // Use .off to turn it off

  // $("#addHome").off("click", function() {
  //   alert("add home was clicked");
  // });

  // Delegate responsibility of remove button functionality

  function removeHome() {
    console.log(this);
    // this refers to the raw DOM element but we need a jQuery version of it
    // $(this).remove();

    // or
    // $(this).parent().parent().remove();, plus change the pointer below to "button" instead of "tr"

    // or use parents to return all the parents but select only the "tr" parents
    // you can also say closest("tr");
    // $(this).parents("tr").remove();

    // or this fadeOut thing that looks like a powerpoint animation
    $(this).parents("tr").fadeOut(1000, function() {
      $(this).remove();
    });
  }

  // find id homes on the table body below that, on click, for the table row, call removeHome
  // or make the selector tr instead of button
  $("#homes tbody").on("click", "button", removeHome);


  // styling.  cells is an object not an array so square brackets don't work on it.
  var $cells = $("#homes thead tr").children();
  $cells.eq(0).css("color", "blue");
  $cells.eq(4).css("color", "green");
  console.log(typeof($cells));

  /*
  so the addHome function will have to:

  - find the tbody element, and add a new tr with 6tds => Done-ded, lah, brudder...
  - populate the 6 tds with the information from the newHomes array
  - do this in a loop for the number of elements there are

  */


  function addHome() {
    // this populates everything at once

    // for (var i=0; i<newHomes.length; i++) {
    //   $("tbody").append("<tr><td>" + newHomes[i].address + "</td><td>" + newHomes[i].sf + "</td><td>" + newHomes[i].bedrooms + "</td><td>" + newHomes[i].baths + "</td><td>" + newHomes[i].price + "</td><td>" + "<button class='btn btn-xs btn-danger'>Remove</button>" + "</td></tr>");
    // }

    // this version only does one at a time

    if (newHomes.length>0) {

    var homeElement = newHomes.shift();

    $("tbody").append("<tr><td>" + homeElement.address + "</td><td>" + homeElement.sf + "</td><td>" + homeElement.bedrooms + "</td><td>" + homeElement.baths + "</td><td>" + homeElement.price + "</td><td>" + "<button class='btn btn-xs btn-danger'>Remove</button>" + "</td></tr>");
    }

    else {
      alert("Sorry, there are no homes left to add.");
    }

  }

  $("#addHome").on("click", addHome);


});


// saving the working code for a single row

// $("tbody").append("<tr><td>" + newHomes[0].address + "</td><td>" + newHomes[0].sf + "</td><td>" + newHomes[0].bedrooms + "</td><td>" + newHomes[0].baths + "</td><td>" + newHomes[0].price + "</td><td>" + "<button class='btn btn-xs btn-danger'>Remove</button>" + "</td></tr>");

