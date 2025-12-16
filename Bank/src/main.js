
let saldoKonta = 1000;


function wyplacPieniadze(kwota) {
    return new Promise((resolve, reject) => {
        console.log("⏳ Trwa łączenie z bankiem...");

        setTimeout(() => {
            if (kwota <= 0) {
                reject(new Error("Kwota musi być większa niż 0."));
                return;
            }
            
            if (kwota > saldoKonta) {
                reject(new Error("Brak środków na koncie! Masz tylko " + saldoKonta));
                return;
            }

            saldoKonta -= kwota;
            resolve(`✅ Wypłacono ${kwota} PLN. Pozostało: ${saldoKonta} PLN.`);
        }, 2000);
    });
}

async function uruchomBankomat() {
    try {

        const wynik1 = await wyplacPieniadze(500);
        console.log(wynik1);

        const wynik2 = await wyplacPieniadze(800);
        console.log(wynik2);

    } catch (error) {

        console.error(error.message);
    } finally {

        console.log("--- Dziękujemy za skorzystanie z usług ---");
    }
}

uruchomBankomat();
