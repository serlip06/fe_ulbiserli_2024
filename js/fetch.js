import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-serli2024-48bfd02e8f8c.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}