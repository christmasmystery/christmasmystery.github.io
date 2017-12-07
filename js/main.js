var password = ["K","C","A","L","T","B","G","H","I"];
var info = "Correct!! Look under the tag of the shirt that shares the same letters";
var test = [];
function check(){
    var $inputs = $("#form :input");
    var i = 0;
    var values = [];
    $inputs.each(function(){
        if($(this).val() != ""){
            values[i] = $(this).val().toUpperCase();
            if(values[i] == password[i]){
                $(this).removeClass("wrong");
                $(this).addClass("correct");
                $(this).attr("disabled", true);
            }
            else if(values[i] != password[i]){
                $(this).addClass("wrong");
            } 
        }
        i++;
    });

    if(arraysEqual(values, password)) {
        $("#success").show();
        $("#success").html("<p>" + info + "</p>");
    }
}

function reveal(){
    $("#instructions").show();
    $("#form").show();
    $("#story").hide();
}

function sadFace(){
    $("#game").hide();
    $("#grinch").show();
}

function redFace(){
    $("#grinch").hide();
    $("#ruined").show();
}

function okay(){
    $("#grinch").hide();
    $("#game").show();
    reveal();
}

function arraysEqual(arr1, arr2){
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}