let image = document.getElementById('eagle')

const hiddenEagle =()=> {
    image.hidden ?
    image.hidden = false : 
    image.hidden = true;
}

const switchEagle =()=> {
    let link1 = "https://images.unsplash.com/photo-1557401620-67270b61ea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVhZ2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    let link2 = "https://images.unsplash.com/photo-1575350126138-9259890f965a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVhZ2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    image.src == link1 ?
    image.src = link2 :
    image.src = link1
}