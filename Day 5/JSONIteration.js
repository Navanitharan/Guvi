var obj=[{"Name":"Navanitharan","Course":"FSD","Batch":"B54FSDT"},
        {"Name":"Navanitharan1","Course":"DataScience","Batch":"B54FSDT"}
];
for(var i=0;i<obj.length;i++){
    console.log(obj[i]);
}

for(var key in obj){
    console.log(obj[key]);
}

for(var key of obj){
    console.log(key);
}

obj.forEach((obj)=>{
    console.log(obj);
})
