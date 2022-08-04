var filter=document.getElementById("filter");
var itemList=document.getElementById('items');
//filter event
filter.addEventListener("keyup",filterItems);

//filter items
function filterItems(e){
    //convert to lowercase
var text=e.target.value.toLowerCase();
// get all li
var items=itemList.getElementsByTagName('li');
// convert to array 
// console.log(items);
Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    // console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) !=-1){
        item.style.display="block"
    }else {
        item.style.display="none";
    }
})
}