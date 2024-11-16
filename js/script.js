let arr = [];
for (let i = 1; i <= 10; i++) {
    const length = Math.floor(Math.random() * 100); 
    arr.push(length);
}
console.log(arr);


const arrayContainer = document.querySelector('.array');

for (let i = 0; i < arr.length; i++) {
    let length = arr[i];
    let box = document.createElement("div");
    box.style.height = `${length * 3}px`;
    box.classList.add("block");
    box.textContent = length;
    arrayContainer.appendChild(box);
}


let btn = document.querySelector("button");
let ans = document.querySelector(".ans")
btn.addEventListener("click",()=>{
    let allHeights = document.querySelectorAll(".block");
    let elementToSearch = document.querySelector("input").value;
    let index = allHeights.length-1;

    let myTimer = setInterval(() => {
        if(index <= 0){
            clearInterval(myTimer)
            ans.textContent = "Element not found";
            ans.style.color = "red";
        }
        if(allHeights[index].textContent == elementToSearch){
            allHeights[index].style.background = "lime";
            clearInterval(myTimer)
            ans.textContent = "Element Found";
            ans.style.color = "lime";
        }
        else{
            allHeights[index].style.background = "red"  
            allHeights.forEach((element,thisIndex)=>{
                if(index != thisIndex){
                    element.style.background = "white";
                }
            })          
        }
        index--;
    }, 700);
})





