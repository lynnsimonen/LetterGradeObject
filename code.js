$(document).ready(function() {
    //set up form function and button
    $("button#StudentData").on("click", studentResults);
});

//  When the form is submitted, create an object that contains the data.
// event.preventDefault() since form is not submitting to Database, need data to stay on screen
function studentResults(event) {
    event.preventDefault()

    //Gather input
    //var sizeCharge = parseFloat($("select#size option:selected").data("price"));
    //let size = $("select#size option:selected").val();
    //calculate value of percent grade
    let pointsEarned = parseFloat($("input#pointsEarned").val());
    let pointsPossible = parseFloat($("input#pointsPossible").val());
    //calculate number grade to two decimal points
    let pointsPercent = ((pointsEarned / pointsPossible) * 100).toFixed(2);

    //determine letter grades based on number grade... if else:
    if (pointsPercent < 60) {
        letterGrade = "F";
    }
    else if (pointsPercent < 70) {
        letterGrade = "D";
    }
    else if (pointsPercent < 80) {
       letterGrade = "C";
    }
    else if (pointsPercent <= 90) {
       letterGrade = "B";
    }
    else {
        letterGrade = "A"
    }
    //set up object and fill it with properties of the student and their grade
    let studentInfo = {
        firstName: $("input#firstName").val(),
        lastName: $("input#lastName").val(),
        pointsPercent: pointsPercent,
        grade: letterGrade
    };

    /* use the object's properties to output the following:
    first name
    last name
    percentage <-- calculated from points earned / points possible
    letter grade <-- A, B, C, etc. based on percent */
    //console.log(propName);   <----prints list of all left side of colon in object format
    // 	console.log([propName]);  <----prints list of all right side of colon

$("p#results").text(studentInfo.firstName + " " + studentInfo.lastName
+ " received a grade of " + studentInfo.grade + " which is " + studentInfo.pointsPercent + "%.");

}



