const presupuestoTotal=[];

class presupuesto {
    constructor(kwh,kw,mes){
        this.energia=parseInt(kwh);
        this.potencia=parseInt(kw);
        this.mes=mes;    
    
   }
};
presupuestoTotal.push(new presupuesto("1000","100","enero"));
presupuestoTotal.push(new presupuesto("2000","100","febrero"));
presupuestoTotal.push(new presupuesto("3000","100","marzo"));
presupuestoTotal.push(new presupuesto("4000","100","abril"));
presupuestoTotal.push(new presupuesto("5000","100","mayo"));
presupuestoTotal.push(new presupuesto("6000","100","junio"));


 const inicio = () =>{
        let desdePeriodoKwh=parseInt(prompt("ingrese mes de inicio de periodo \n0)enero\n1)febrero\n2)marzo\n3)abril\n4)mayo\n5)junio"))
        switch (desdePeriodoKwh) {
            case 0:
            return presupuestoTotal[0]    
            case 1:
            return presupuestoTotal[1]          
            case 2:
            return presupuestoTotal[2]       
            case 3:
            return presupuestoTotal[3]       
            case 4:
            return presupuestoTotal[4]      
            case 5:
            return presupuestoTotal[5] 
        };
        };

    
        function fin(){
        let hastaPeriodoKwh=parseInt(prompt("ingrese mes de fin de periodo \n0)enero\n1)febrero\n2)marzo\n3)abril\n4)mayo\n5)junio"))
        switch (hastaPeriodoKwh) {
            case 0:
            return presupuestoTotal[0];
            case 1:
            return presupuestoTotal[1];
            case 2:
            return presupuestoTotal[2];
            case 3:
            return presupuestoTotal[3];
            case 4:
            return presupuestoTotal[4];
            case 5:
            return presupuestoTotal[5];
            
        };
        }; 

const presupuestoTotal2=(a,b,c,)=>{ 
   
    const mesesDeConsumoKWH=[1000,2000,3000,4000,5000,6000];
    
   
    let sumaMeses=0;

    if(object1.mes=="enero" && object2.mes=="enero"){sumaMeses=1000};
    
    if(object1.mes=="enero" && object2.mes=="febrero"){
        for (let i = 0; i <= 2; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
        }
    
    };
    
    if(object1.mes=="enero" && object2.mes=="marzo"){
        for (let i = 0; i <= 3; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };
    
    if(object1.mes=="enero" && object2.mes=="abril"){
        for (let i = 0; i <= 4; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };
    
    if(object1.mes=="enero" && object2.mes=="mayo"){
        for (let i = 0; i <= 4; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };
    
    if(object1.mes=="enero" && object2.mes=="junio"){
        for (let i = 0; i <= 5; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
            console.log(sumaMeses)
        }
    };
    
    if(object1.mes=="febrero" && object2.mes=="febrero"){sumaMeses=2000};

    if(object1.mes=="febrero" && object2.mes=="marzo"){
        for (let i = 1; i <= 2; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };
    
    if(object1.mes=="febrero" && object2.mes=="abril"){
        for (let i = 1; i <= 3; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };
    
    if(object1.mes=="febrero" && object2.mes=="mayo"){
        for (let i = 1; i <= 4; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    }
    
    if(object1.mes=="febrero" && object2.mes=="junio"){
         for (let i = 1; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
        console.log(sumaMeses);
    }
    };
    if(object1.mes=="marzo" && object2.mes=="marzo"){sumaMeses=3000}
    if(object1.mes=="marzo" && object2.mes=="abril"){
        for (let i = 2; i <= 3; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    }
    if(object1.mes=="marzo" && object2.mes=="mayo"){
        for (let i = 2; i <= 4; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    }
    if(object1.mes=="marzo" && object2.mes=="junio"){
        for (let i = 2; i <= 5; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };
    
    if(object1.mes=="abril" && object2.mes=="abril"){sumaMeses=4000}

    if(object1.mes=="abril" && object2.mes=="mayo"){
        for (let i = 3; i <= 4; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };
    if(object1.mes=="abril" && object2.mes=="junio"){
        for (let i = 3; i <= 5; i++) {
            sumaMeses+=mesesDeConsumoKWH[i];
        }
    };

    if(object1.mes=="mayo" && object2.mes=="mayo"){sumaMeses=5000};
    
    if(object1.mes=="mayo" && object2.mes=="junio"){ 
        for (let i = 4; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
    };

    if(object1.mes=="junio" && object2.mes=="junio"){sumaMeses=6000}
 
    return (sumaMeses*valor); 
    };
    
let inicio1=inicio();
let fin1=fin();
let valor=2;
object1=inicio1;
object2=fin1;


var mostrarValor= document.getElementById("titulo2");
mostrarValor.innerText=`El consumo en KWH desde  ${object1.mes} a ${object2.mes} es $` + 
presupuestoTotal2(object1.mes,object2.mes,valor);

var titulo=document.getElementById("titulo");
titulo.innerHTML="<p>Presione F5 para volver a Calcular</p>";
titulo.className="pepe";

let agregado=document.createElement("h4");
agregado.innerHTML="<p>elemento agregado</p>";
document.body.append(agregado);
