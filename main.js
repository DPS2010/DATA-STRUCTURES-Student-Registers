var students_Array = []
 function submit () {
     var student1 = document.getElementById("input1").value
     var student2 = document.getElementById("input2").value
     var student3 = document.getElementById("input3").value
     var student4 = document.getElementById("input4").value
     var student5 = document.getElementById("input5").value

    students_Array.push(student1)
    students_Array.push(student2)
    students_Array.push(student3)
    students_Array.push(student4)
    students_Array.push(student5)
    
    document.getElementById("output").innerHTML = students_Array
    document.getElementById("submit").style.display = "none"
    document.getElementById("sort").style.display = "inline-block"
    
    
 }
 function sort () {
    students_Array.sort()
    document.getElementById("output").innerHTML = students_Array
 }