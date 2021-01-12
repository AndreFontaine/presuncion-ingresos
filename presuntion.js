// ESCO = Escolaridad
// Si EDUC = 1, entonces ESCO = ULTI
// Si EDUC = 2, entonces ESCO = 5 + ULTI 
// Si EDUC = 3, entonces ESCO = 11 + ULTI 
// Si EDUC = 4, entonces ESCO = 16 + ULTI 
const getEscolaridad = (educacion, ultimoCursado) => {
    
    let escolaridad = 0;

    if( educacion === 1){
        escolaridad = ultimoCursado;
    }
    else if( educacion === 2){
        escolaridad = ultimoCursado + 5;
    }
    else if( educacion === 3){
        escolaridad = ultimoCursado + 11;
    }
    else if( educacion === 4){
        escolaridad = ultimoCursado + 16;
    }

    return escolaridad;
};

const getExperiencia = (edad, escolaridad) => {
    const NORMAL = 5;
    return edad - NORMAL - escolaridad;
};

const getErrorEstimado = (zona) => {
    return zona === 1 ? 0.861330 : 0.826700;
};

const getSalarioMinimo = (year) => {

    const salarios = new Map([ [2021, 908526], [2020, 877803], [2019, 828116], [2018, 781242], [2017, 737717],
        [2016, 689455], [2015, 644350], [2014, 616000], [2013, 589500], [2012, 566700], [2011, 535600],
        [2010, 515000], [2009, 496900], [2008, 461500], [2007, 433700], [2006, 408000], [2005, 381500],
        [2004, 358000], [2003, 332000], [2002, 309000], [2001, 286000], [2000, 260100], ]);

    return salarios.get(year)
};


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

formatter.format(2500);

const getIndices = (data) => {

    const indices = { b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0 };

    if(data.zona === 1 ){
        if(data.sexo === 1){
            if(data.agro === 1){
                // caso 1
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 1');
                    indices.b0 = 1.017804;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001245;
                }
                // caso 2
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 2');
                    indices.b0 = 1.742944;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001245;
                }
                // caso 3
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 3');
                    indices.b0 = 1.448469;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001245;
                }
            }
            else if(data.agro === 2){
                // caso 4
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 4');
                    indices.b0 = 0.601108;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001245;
                }
                // caso 5
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 5');
                    indices.b0 = 1.326248;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001245;
                }
                // caso 6
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 6');
                    indices.b0 = 1.031773;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001245;
                }
            }

        }
        else if(data.sexo === 2){
            if(data.agro === 1) {
                // caso 7
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 7');
                    indices.b0 = 1.568088;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001989;
                }
                // caso 8
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 8');
                    indices.b0 = 2.293228;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001989;
                }
                // caso 9
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 9');
                    indices.b0 = 1.998753;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001989;
                }            
            }
            else if(data.agro === 2) {
                // caso 10
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 10');
                    indices.b0 = 1.151392;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001989;
                }
                // caso 11
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 11');
                    indices.b0 = 1.876532;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001989;
                }
                // caso 12
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 12');
                    indices.b0 = 1.582057;
                    indices.b1 = 0.513693;
                    indices.b2 = 0.051598;
                    indices.b3 = -0.000623;
                    indices.b4 = 0.073806;
                    indices.b5 = 0.001989;
                }
            }
        }
    }
    else if( data.zona === 2) {
        if( data.sexo === 1) {
            if( data.agro === 1) {
                // caso 13
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 13');
                    indices.b0 = 0.895381;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 14
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 14');
                    indices.b0 = 1.610078;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 15
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 15');
                    indices.b0 = 1.385119;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
            }
            else if( data.agro === 2) {
                // caso 16
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 16');
                    indices.b0 = 0.577764;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 17
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 17');
                    indices.b0 = 1.292461;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 18
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 18');
                    indices.b0 = 1.067502;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
            }
        }
        else if( data.sexo === 2) {
            if( data.agro === 1) {
                // caso 19
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 19');
                    indices.b0 = 1.503824;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 20
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 20');
                    indices.b0 = 2.2118521;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 21
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 21');
                    indices.b0 = 1.993562;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
            }
            else if( data.agro === 2) {
                // caso 22
                if(data.ocup === 3 && (data.empr === 1 || data.empr === 2 || data.empr === 3)){
                    console.log('caso 22');
                    indices.b0 = 1.186207;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 23
                else if(data.ocup === 4 && data.empr === 1){
                    console.log('caso 23');
                    indices.b0 = 1.900904;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
                // caso 24
                else if(data.ocup === 4 && (data.empr === 2 || data.empr === 3)){
                    console.log('caso 24');
                    indices.b0 = 1.675945;
                    indices.b1 = 0.000000;
                    indices.b2 = 0.044697;
                    indices.b3 = -0.000490;
                    indices.b4 = 0.066555;
                    indices.b5 = 0.002660;
                }
            }
        }
    }

    return indices;

}

const calcSalary = (data) => {

    const esco = getEscolaridad(data.educ, data.ulti);    
    const exp = getExperiencia(data.edad, esco);
    const estErr = getErrorEstimado(data.zona);
    const index = getIndices(data);

    console.log("index", index);

    const totalK = (index.b0 +  
        (index.b1 * data.vivi) + 
        (index.b2 * exp) + 
        (index.b3 * (exp * exp)) + 
        (index.b4 * esco) + 
        (index.b5 * (esco * esco)) + 
        (0.5*(estErr * estErr)));

    const yearSalary = getSalarioMinimo(data.year);

    console.log('totalK', totalK);    
    // console.log('exp', exp);    
    // console.log('yearSalary', yearSalary);

    const salary = exp * totalK * yearSalary;
    
    return {
        salary,
        message: "OK"
    };
}

const validate = () => {

    const sexo = parseInt(document.getElementById("sexo").value);
    const edad = parseInt(document.getElementById("edad").value);
    const vivi = parseInt(document.getElementById("vivienda").value);
    const educ = parseInt(document.getElementById("educacion").value);
    const ulti = parseInt(document.getElementById("ultimo").value);
    const agro = parseInt(document.getElementById("agro").value);
    const zona = parseInt(document.getElementById("zona").value);
    const ocup = parseInt(document.getElementById("ocupacion").value);
    const empr = parseInt(document.getElementById("empr").value);
    const year = parseInt(document.getElementById("year").value);

    // console.log(`sexo: ${sexo}, edad: ${edad}, vivienda: ${vivi}, educacion: ${educ}, ultimo: ${ulti}, 
       // agro: ${agro}, zona: ${zona}, ocupacion: ${ocup}, empr: ${empr}, year: ${year}`);
    
    const data = { sexo, vivi, educ, ulti, agro, edad, zona, ocup, empr, year };

    var anual = document.getElementById("anual");
    var mensual = document.getElementById("mensual");
    
    const res = calcSalary(data);    
    const anualRes = formatter.format(res.salary);
    const mensualRes = formatter.format(res.salary/12);

    anual.innerHTML = anualRes;
    mensual.innerHTML = mensualRes;
}