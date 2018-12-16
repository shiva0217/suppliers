const http = require('http');
const productinfo = [
    {id:1, name: "Neiman Marcus Limited Edition Fighter", price: "$11 million"},
    {id:2, name: "1949 E90 AJS Porcupine", price: "$7 Million"},
    {id:3, name: "Ecosse ES1 Spirit", price: "$3.6 million"},
    {id:4, name: "Hildebrand & Wolfmuller", price: "$3.5 million"},
    {id:5, name: "BMS Nehmesis", price: "$03 million"},
    {id:6, name: "Harley Davidson Cosmic Starship", price: "$1.5 million"},
    {id:7, name: "Dodge Tomahawk V10 Superbike", price: "$5,55000"},
    {id:8, name: "Ecosse FE Ti XX Titanium Series", price: "$300000"},
    {id:9, name: "Ducati Desmosedici D16RR NCR M16", price: "$232500"},
    {id:10, name: "Ducati Testa Stretta NCR Macchia Nera Concept", price: "$225000"}
]
// let searchPic;
// function LoadImages() {
//     // searchPic = new Image(100,100);
//     searchPic.src = "C:\Users\jay krishna\Downloads\shiva.jpg";
// }
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("Welcome to the HARLEY DAVIDSON Bike showroom")
        res.end();
    }
    if (req.url === "/products"){
        res.write(JSON.stringify(productinfo))
        res.end();
    }
    if (req.url === "/user"){
        res.write(JSON.stringify({id: 12345,name : "shiva kumar", address : "17 rue paris"}))
        res.end();
}})
server.listen(2417);
console.log("server started and listening on port 2417");