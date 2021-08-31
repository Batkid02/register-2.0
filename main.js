 name_of_the_student_array=[];

function submit()
{
    var display_student_array=[];

    for ( var n=1; n<=4;n++)
{
    var name_of_student=document.getElementById("student_"+n).value;
    console.log(name_of_student);
    name_of_the_student_array.push(name_of_student);
}

console.log(name_of_the_student_array);
var lenght_name_student_array=name_of_the_student_array.length;
console.log(lenght_name_student_array);

    for (var k=0;k<lenght_name_student_array;k++)
{
display_student_array.push("<h4>name- "+name_of_the_student_array[k]+"</h4>");
console.log(display_student_array);
}

console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commmas=display_student_array.join("");
console.log(remove_commmas);
document.getElementById("display_name_without_commas").innerHTML=remove_commmas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}


function sorting()
{
name_of_the_student_array.sort();
console.log(name_of_the_student_array);
var display_student_array_sorting=[];
var lenght_name_student_array=name_of_the_student_array.length;
console.log(lenght_name_student_array);

    for (var k=0;k<lenght_name_student_array;k++)
{
display_student_array_sorting.push("<h4>name- "+name_of_the_student_array[k]+"</h4>");
console.log(display_student_array_sorting);
}
var remove_commmas=display_student_array_sorting.join("");
console.log(remove_commmas);
document.getElementById("display_name_without_commas").innerHTML=remove_commmas;
}