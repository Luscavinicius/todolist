document.getElementById('Add').addEventListener("click", addTask);

let cont = 0;

function addTask(){
  cont++;
  const item = document.createElement("li");
  const text = document.getElementById("myText").value;
  const node = document.createTextNode(text);
  item.appendChild(node);

  const rmv = document.createElement("button");
  item.appendChild(rmv);

  rmv.className = "remove";
  rmv.setAttribute("id", "item-"+cont);
  rmv.setAttribute("onClick", "rmvTask(this.id)")

  item.setAttribute("id", "item-"+cont);
  item.className = "item";

  document.getElementById("list").appendChild(item);

}

function rmvTask(clicked_id){
  const item = document.getElementById(clicked_id);
  item.parentNode.removeChild(item);
  cont--;
}
