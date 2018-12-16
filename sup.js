const suppliers=[
    {id:1,name: "durga suppliers", add: "noisy le sec"},
    {id:2,name: "VT cash & carry", add: "gare du nord"},
    {id:3,name: "carrefour", add: "la courneuve"},
    {id:4,name: "Auchan", add: "opera"},
    {id:5,name: "franprix", add: "creteil le-chat"}
]
function getSuppliers(){
    return suppliers;
}
// const k = getSuppliers();
// console.log(k);
module.exports.getSupplier = getSuppliers;
