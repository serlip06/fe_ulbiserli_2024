function deleteData(IDHAPUS) {
    var presensiId = IDHAPUS;
    var target_url = "https://ws-serli2024-48bfd02e8f8c.herokuapp.com/delete/" + presensiId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}
//fungtion yang berfungsi untuk mengkonfirmasi apakah datanya inggin di hapus 
function confirmDelete(IDHAPUS) {
    if (confirm("Apakah ingin menghapus data ID " + IDHAPUS + "?")) {
        deleteData(IDHAPUS);
    }
}