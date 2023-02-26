function loadCmnt(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayCmnt(data))
}

function displayCmnt(cmnts){
    const cmntContainer = document.getElementById('cmnt-container');
    for(const cmnt of cmnts){
        const div = document.createElement('div');
        div.classList.add('cmnt')
        div.innerHTML = `
        <h3>Post Id:${cmnt.postId}</h3>
        <h3>Id:${cmnt.id}</h3>
        <h4>Name: ${cmnt.name}</h4>
        <h4>Email: ${cmnt.email}</h4>
        <h5>Description: ${cmnt.body}</h5>
        `;
        cmntContainer.appendChild(div)
    }
}

loadCmnt()