var elemetOnClick = [".btn-test",".btn-text"];
var asideContainer = ".aside-content";

document.addEventListener('DOMContentLoaded', function(){ 
    setTimeout(()=>{
        document.querySelector('body').addEventListener('click',onClick);
    },1000)
});

function onClick(e){

    var target = e.target;
    var flagActiveTemplate = false;
    
    for(var i=0;i<elemetOnClick.length;i++){
        if(target.matches(elemetOnClick[i])){
            flagActiveTemplate = true;
            break;
        }

    }


    if( flagActiveTemplate === false){
        return
    }
    
    var data = JSON.parse(target.dataset.param);
    var dataTemplateName = target.dataset.template;

    getTemlate(dataTemplateName,data,asideContainer);
    
}

window.unMountEventListenerTemplate = document.querySelector('body').removeEventListener('click',onClick);

window.getTemplateGlobal = function(e){
    var target = e.target;
    var data = JSON.parse(target.dataset.param);
    var dataTemplateName = target.dataset.template;
    getTemlate(dataTemplateName,data,asideContainer);
}

function getTemlate(templateName,data,asideContainer){
        document.querySelector(asideContainer).innerHTML = "";
        switch(templateName){
            case "widgetDiagram":
                return widgetDiagram(asideContainer,data);
            case "widgetText":
                return widgetText(asideContainer,data);
            default:
                console.error("not fond widget");
                break;
        }
}

function widgetText(asideContainer,data){
    console.log('data',data)
    var template = `
        <div>
            ${data.data.text}
        </div>
    `;

    document.querySelector(asideContainer).insertAdjacentHTML("afterBegin",template);
}

function widgetDiagram(asideContainer,data){
    var template = `
        <div class="diagram-container">
            <div class="diagram-info">
                <div class="diagram-info__item">
                    <div class="diagram-info__item-text">
                        <span class="diagram-info__item-color" style="background-color: #153870"></span>
                        <span class="diagram-info__title">
                            4G
                        </span>
                    </div>
                    <div class="diagram-info__item-value">
                        1400
                    </div>
                </div>
                <div class="diagram-info__item">
                    <div class="diagram-info__item-text">
                        <span class="diagram-info__item-color" style="background-color: #9EAEC8"></span>
                        <span class="diagram-info__title">
                            Other
                        </span>
                    </div>
                    <div class="diagram-info__item-value">
                        40
                    </div>
                </div>
            </div>
            <div class="diagram">
                <canvas id="bgs"></canvas>  
            </div>
        </div>
       

        <canvas id="bgs2"></canvas>
    `;

    document.querySelector(asideContainer).insertAdjacentHTML("afterBegin",template);

    setTimeout(()=>{

        new Chart(document.querySelector("#bgs"),
        {
            type:"pie",
            data:{
                "labels":["4G","Other"],
                "datasets":[
                    {   "label":"My First Dataset",
                        "data":data.data[0],
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

        new Chart(document.querySelector("#bgs2"),
        {
            type:"doughnut",
            data:{
                "labels":["Red","Blue","Yellow"],
                "datasets":[
                    {   "label":"My First Dataset",
                        "data":data.data[1],
                        "backgroundColor":["rgb(255, 99, 132)","#fff"]
                    }
                ]
            },
            options: {
               legend: {
                display: false
             },
            }
        });

    },100)

}