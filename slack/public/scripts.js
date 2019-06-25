const socket = io('http://localhost:4000');
let nsSocket = "";

socket.on('nsList', nsData => {

    let nameSpacesDiv = document.querySelector('.namespaces');
    nameSpacesDiv.innerHTML = "";
    nsData.forEach((ns) => {
        nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.img}" /></div>`
    });

    Array.from(document.getElementsByClassName('namespace')).forEach((elem) => {
        elem.addEventListener('click', e => {
            console.log(elem.getAttribute('ns'))
        })
    });
    joinNs('/wiki')
});
