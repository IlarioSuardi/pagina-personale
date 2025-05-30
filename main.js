//0. genera numeri casuali
//1. visualizza matrice
//2. controllo celle
//3. nascondi celle se non sono uguali
//4. confronta celle


function generaCoppieRandom(numCelle){
let valori=[]
    for(i=0; i<numCelle/2; i++){
        valori.push(i, i)
        }
    return valori
    
}

function creaMatrice(n,val){
    let matrice=[]
    for (i=0; i<n; i++){
        matrice[i]=[]
        for (j=0; j<n; j++){
            let random=Math.floor(Math.random()*val.length)
            let x=val[random]
            val.splice(random,1)
            matrice[i][j]=x
            console.log (val)
        }
    }
    return matrice
}

function main(){
    let n=4
    let numCelle=n*n
    let val = generaCoppieRandom(numCelle)
    let matrice = creaMatrice(n, val)
    console.log(matrice)

    let targetDiv=document.getElementById("target")
    let table=document.createElement("table")
    for (i=0; i<matrice.length; i++){
        const row = document.createElement("tr")
        for (j=0; j<matrice[i].length; j++){
            const cell = document.createElement("td")
            cell.textContent = matrice[i][j]
            cell.setAttribute("style", "background-color: black; color: black;")
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    targetDiv.appendChild(table)

    table.setAttribute("style", "width: 200px; height: 200px; text-align: center;")
    table.setAttribute("border", "1")
}