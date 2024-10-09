class Factura {

    constructor() {

        this.clientName = "";
        this.clientJob = "";
        this.clientHour = 0;
        this.clientPrice = 0;
        this.ivaTax = 1.21;

        this.getData;

    }

  
    getData = () => {

        let checkBoxPay = document.getElementById("checkBoxPay");
        let btnSend = document.getElementById("btnSend");
        let textImport = document.getElementById("clientImport");

        document.getElementById("checkBoxPay").addEventListener('change', () => {

            if (checkBoxPay.checked == true) {
                
                    btnSend.disabled = false;
                } else {
                    // Si no está marcado, deshabilita el botón
                    btnSend.disabled = true;
                }
        });

        document.getElementById("btnSend").addEventListener('click', () => {

            this.clientName = document.getElementById("clientName").value;
            this.clientJob = document.getElementById("clientJob").value;
            this.clientHour = parseFloat(document.getElementById("clientHour").value);
            this.clientPrice = parseFloat(document.getElementById("clientPrice").value);

            let nHours = document.getElementById("clientHour").value;
            let pPrice = document.getElementById("clientPrice").value;

            let calcPrice = nHours * pPrice

            this.printImport(calcPrice, this.ivaTax);
            
        });

        document.getElementById("clientHour").addEventListener('input', this.updatePrice);
        document.getElementById("clientPrice").addEventListener('input', this.updatePrice);

        
    }

    printImport = (price, iva) => {

    //get the p labels id to print the result
    let textImport = document.getElementById("clientImport");
    let textValueIva = document.getElementById("clientIvaTax");
    let textTotalPrice = document.getElementById("clientTotalPrice");

    //get the iva che for calculate the type of price
    let ivaTaxCheck = document.getElementById("ivaTaxCheck");

    //get the confirmation pay check

    let finalPrice = 0;

    if (ivaTaxCheck.checked) {

        console.log("el iva esta puesto");

        finalPrice = price * iva;

        textImport.innerText = price.toFixed(2);

        textValueIva.innerText = (finalPrice - price).toFixed(2);

        textTotalPrice.innerText = finalPrice.toFixed(2);

        this.showSummary();

    } else {

        console.log("el iva no esta puesto");

        finalPrice = price;

        textImport.innerText = price.toFixed(2);

        textValueIva.innerText = `El desgraciado este no paga impuestos`;

        textTotalPrice.innerText = finalPrice.toFixed(2);

        this.showSummary();
    }

    }

    // Actualiza el importe en tiempo real
    updatePrice = () => {
        console.log("inicia funcion updatePrice");
        let textImport = document.getElementById("clientImport");

        let nHours = parseFloat(document.getElementById("clientHour").value) || 0;
        console.log(`${nHours}`);

        let pPrice = parseFloat(document.getElementById("clientPrice").value) || 0;
        console.log(`${pPrice}`);

        if (nHours > 0 && pPrice > 0) {

            let calcPrice = nHours * pPrice;

            textImport.innerText = calcPrice;
        }
    }
    // Mostrar resumen de los datos del cliente con estructura <label> y <p>
    showSummary() {
        document.getElementById("clientSummary").innerHTML = `
            <div class="mb-3">
                <label for="clientNameSummary" class="form-label">Nombre del Cliente:</label>
                <p class="form-text" id="clientNameSummary">${this.clientName}</p>
            </div>
            <div class="mb-3">
                <label for="clientJobSummary" class="form-label">Trabajo:</label>
                <p class="form-text" id="clientJobSummary">${this.clientJob}</p>
            </div>
            <div class="mb-3">
                <label for="clientHourSummary" class="form-label">Horas trabajadas:</label>
                <p class="form-text" id="clientHourSummary">${this.clientHour}</p>
            </div>
            <div class="mb-3">
                <label for="clientPriceSummary" class="form-label">Precio por hora:</label>
                <p class="form-text" id="clientPriceSummary">$${this.clientPrice.toFixed(2)}</p>
            </div>
        `;
    }
}

let newFact = new Factura();

newFact.getData();