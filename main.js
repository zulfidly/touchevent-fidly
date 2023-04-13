const infoBoard = document.getElementById("infoBoard")
const msgBoard = document.getElementById("touchEventMsg")
const isTouchCancel = document.getElementById("isTouchCancel")

window.addEventListener("touchstart", (e) => {
    isTouchCancel.textContent = ""
    msgBoard.textContent = e.type
    getTouchCount(e)
})
window.addEventListener("touchmove", (e) => {
    isTouchCancel.textContent = ""
    msgBoard.textContent = e.type
    getTouchCount(e)
})
window.addEventListener("touchend", (e) => {
    isTouchCancel.textContent = ""
    msgBoard.textContent = e.type
    getTouchCount(e)
})
window.addEventListener("touchcancel", (e) => {
    isTouchCancel.textContent = e.type
    getTouchCount(e)
})

function getTouchCount(e) {
    infoBoard.innerHTML = ""

    let touchObj = new Map(Object.entries(e.touches))

    if(touchObj.size > 0) {
        touchObj.forEach((v, k) => {
            let identifier = v.identifier + 1
            let clientX = Math.floor(v.clientX)
            let clientY = Math.floor(v.clientY)
            let pageX = Math.floor(v.pageX)
            let pageY = Math.floor(v.pageY)
            let radiusX = Math.floor(v.radiusX)
            let radiusY = Math.floor(v.radiusY)
            let screenX = Math.floor(v.screenX)
            let screenY = Math.floor(v.screenY)

            infoBoard.innerHTML += `
                <table>
                    <tr> <th colspan="2"> touches[<span class="touchID"> ${identifier} </span>] </th> </tr>
                    <tr>
                        <td> clientX </td>
                        <td> ${clientX} </td>
                    </tr>
                    <tr>
                        <td> clientY </td>
                        <td> ${clientY} </td>
                    </tr>
                    <tr>
                        <td> pageX </td>
                        <td> ${pageX} </td>
                    </tr>
                    <tr>
                        <td> pageY </td>
                        <td> ${pageY} </td>
                    </tr>
                    <tr>
                        <td> radiusX </td>
                        <td> ${radiusX} </td>
                    </tr>
                    <tr>
                        <td> radiusY </td>
                        <td> ${radiusY} </td>
                    </tr>
                    <tr>
                        <td> screenX </td>
                        <td> ${screenX} </td>
                    </tr>
                    <tr>
                        <td> screenY </td>
                        <td> ${screenY} </td>
                    </tr>
                </table>
            `
        })
    }
}


