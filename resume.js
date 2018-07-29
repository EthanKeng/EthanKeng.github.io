var item = document.getElementById("VacationPlanner");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{   
   document.getElementById("hover-img").setAttribute("style", "display:block;")
}

function func1()
{  
    document.getElementById("hover-img").setAttribute("style", "display:none;")
}
var item2 = document.getElementById("ToDo-Text");
item2.addEventListener("mouseover", func3, false);
item2.addEventListener("mouseout", func4, false);

function func3()
{   
   document.getElementById("hover-img2").setAttribute("style", "display:block;")
}

function func4()
{  
    document.getElementById("hover-img2").setAttribute("style", "display:none;")
}

var item3 = document.getElementById("ITI");
item3.addEventListener("mouseover", func5, false);
item3.addEventListener("mouseout", func6, false);

function func5()
{   
   document.getElementById("img10").setAttribute("style", "display:block;")
}

function func6()
{  
    document.getElementById("img10").setAttribute("style", "display:none;")
}
