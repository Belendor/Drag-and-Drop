const boxes = document.querySelectorAll(".box")
const containers = document.querySelectorAll(".drag-box")

let draggedBox = null

for(let i =0;i<boxes.length;i++){
    const currentBox = boxes[i]
    currentBox.addEventListener("dragstart",function(e){
        draggedBox = e.target
        console.log("pickedUp", e.target, draggedBox)
        setTimeout(function(){
            draggedBox.style.display = "none"
        },0)
    })
    currentBox.addEventListener("dragend", function(e){
        console.log("PutDown", e.target)
        setTimeout(function(){
            e.target.style.display = "inline-block"
            draggedBox = null
        },0)
    })
    for(let j =0;j<containers.length;j++){
        const currentContainer = containers[j]
        currentContainer.addEventListener("dragover", function(e){
            e.preventDefault()
        })
        currentContainer.addEventListener("dragenter", function(e){
            e.preventDefault()
            console.log(e.target);
            this.style.backgroundColor = "red"
            
        })
        currentContainer.addEventListener("dragleave",function(e){
            this.style.backgroundColor = "lightcoral"
        })
        currentContainer.addEventListener("drop", function(e){
            this.style.backgroundColor = "lightcoral"
           this.append(draggedBox)
        })
    }
}