fetchRegioner()

function fetchRegioner() {
    fetch("http://localhost:3333/getregioner")
        .then(result => {
            if (result >= 400) {
                throw new Error();
            }
            return result.json()
        }).then(body => {
        console.log(body)

        populateRegionTable(body)
    })

    function populateRegionTable(body) {
        console.log(body)
        const regioner = document.getElementById("tbody")

        regioner.innerHTML = "";
        body.forEach(region => {

            const row = document.createElement("tr")
            const nameCell = document.createElement("td")
            nameCell.textContent = region.navn
            row.appendChild(nameCell)

            const kodeCell = document.createElement("td")
            kodeCell.textContent = region.kode
            row.appendChild(kodeCell)

            const hrefCell = document.createElement("td")
            hrefCell.textContent = region.href
            row.appendChild(hrefCell)
            regioner.appendChild(row)

        })

    }
}