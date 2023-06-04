const screenD = document.getElementById("screenD")

window.addEventListener("load", () => {
    screenD.innerHTML = `
        <table>
            <tr>
                <td> window.innerWidth </td>
                <td> ${window.innerWidth} </td>
            </tr>
            <tr>
                <td> window.innerHeight </td>
                <td> ${window.innerHeight} </td>
            </tr>
            <tr>
                <td> screen.width </td>
                <td> ${screen.width} </td>
            </tr>
            <tr>
                <td> screen.height </td>
                <td> ${screen.height} </td>
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
            <tr>
                <td> screen.width </td>
                <td> ${screen.width} </td>
            </tr>
            <tr>
                <td> screen.height </td>
                <td> ${screen.height} </td>
            </tr>
        </table>
    `
})