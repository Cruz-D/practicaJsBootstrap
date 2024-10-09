function lanzarDados() {

    let dadoA = 0

    let dadoB = 0

    let min = 1;

    let max = 6;

    let result = 0

    let resultArray = [];

    for (let i = 0; i < 6; i++) {

        dadoA = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(`---> dadoA: ${dadoA}`);

        dadoB = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(`---> dadoB: ${dadoB}`);

        result = parseInt(dadoA + dadoB);
        console.log(`---> resultado: ${result}`);

        resultArray.push(result);
    }

    // Ordenar el array de mayor a menor
    resultArray.sort((a, b) => b - a);

    // Mostrar el array ordenado
    console.log("Resultados ordenados de mayor a menor:", resultArray);
}