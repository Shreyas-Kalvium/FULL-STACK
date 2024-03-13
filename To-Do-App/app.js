var activities =[];
var inputFromUser = document.getElementById("input");
var toDolist = document.getElementById("todolist");

document.getElementById("button").onclick= click;

function click()
{
    activities.push(inputFromUser.value);
    console.log(activities);
    inputFromUser.value = "";
    showList();
}

function showList()
{
    toDolist.innerHTML =" ";
    activities.forEach(function(activity, pos)
    {
        toDolist.innerHTML+=
        "<li>" + 
        activity+
        "<a onclick='editToDo("+
        pos+
        ")'>Edit</a>" +
        "<a onclick='deleteToDO(" +
        pos +
        ")'>&times;</a></li>";
    });
}
function deleteActivity(pos) {
    activities.splice(pos, 1);
    showList();
  }

  
  function editItem(i) {
    var newActivity = prompt("Please insert your new value");
    activities.splice(pos, 1, newActivity);
    showList();
  }