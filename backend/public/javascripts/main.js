
function moveToEdit(id){
    const form = document.createElement('form');
    form.method = 'get';
    form.action = '/routes/sneaker/read/'+id;
    document.body.appendChild(form);
    form.submit();
}


//삭제 요청 함수
function deleteSneaker(id){
    // let list = document.getElementById('movielist');

    let deletedSneaker = document.getElementById("sneaker"+id);
    // list.appendChild(deletedMovie);
    deletedSneaker.remove();

    const form = document.createElement('form');
    form.method = 'post';
    form.action = '/routes/sneaker/delete/'+id;
    document.body.appendChild(form);
    form.submit();
}