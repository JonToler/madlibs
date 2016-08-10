$(document).ready(function() {
  $("#blanks form").submit(function(event) {
      var person1Input=$("input#person1").val();
      var person2Input=$("input#person2").val();
      var animal1Input=$("input#animal1").val();
      var car1Input=$("input#car1").val();
      var city1Input=$("input#city1").val();


      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal1").text(animal1Input);
      $(".car1").text(car1Input);
      $(".city1").text(city1Input);

      $("#story").show();

      event.preventDefault();
    });
});
