setTimeout(()=>{
    console.log("=====> dadadawd")
    new Chart(document.querySelector("#bgs"),
    {
        type:"pie",
        data:{
            "labels":["4G","Other"],
            "datasets":[
                {   "label":"My First Dataset",
                    "data":[[85,15],[85,10,5]],
                    "backgroundColor":["#153870","#9EAEC8"]
                }
            ]
        },
        options: {
            legend: {
            display: false
        },
        }
    });
},3000)