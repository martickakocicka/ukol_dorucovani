//Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží.
//Požaduje ulici, číslo domu, město a PSČ.

const adresa = {
   ulice: prompt("zadejte ulici: "),
   cisloDomu: prompt ("zadejte cislo domu: "),
   mesto: prompt ("zadejte mesto: "),
   psc: prompt("zadejte psc: ")
}
console.log (adresa)
document.body.innerHTML += `<p> ${adresa.ulice} ${adresa.cisloDomu} </p>`
document.body.innerHTML += `<p> ${adresa.psc} ${adresa.mesto} </p>`