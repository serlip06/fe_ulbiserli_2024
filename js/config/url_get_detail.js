//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = " https://ws-serli2024-48bfd02e8f8c.herokuapp.com/presensi/" + presensiId;