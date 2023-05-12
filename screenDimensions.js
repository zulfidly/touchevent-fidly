const screenD = document.getElementById("screenD")

window.addEventListener("load", () => {
    screenD.innerHTML = `
        <table>
            <tr>
                <td> innerWidth </td>
                <td> ${window.innerWidth} </td>
            </tr>
            <tr>
                <td> innerHeight </td>
                <td> ${window.innerHeight} </td>
            </tr>
        </table>
    `
}, {once:true})

window.addEventListener("resize", () => {
    screenD.innerHTML = `
        <table>
            <tr>
                <td> innerWidth </td>
                <td> ${window.innerWidth} </td>
            </tr>
            <tr>
                <td> innerHeight </td>
                <td> ${window.innerHeight} </td>
            </tr>
        </table>
    `
})