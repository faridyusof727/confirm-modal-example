function addConfirmButton(modal, btnId) {
    let btn = document.getElementById(btnId);
    const btnYes = document.getElementById("yesBtn");
    const btnNo = document.getElementById("noBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function (event) {
        modal.style.visibility = "visible";
        modal.style.opacity = 1;
        modal.dataset.src = event.target.id
    }

    btnYes.onclick = function () {
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
        const event = new CustomEvent('confirm.onConfirm', {
            detail: {
                status: true,
                btnId: modal.dataset.src
            }
        });
        document.dispatchEvent(event);
    }

    btnNo.onclick = function () {
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
        const event = new CustomEvent('confirm.onConfirm', {
            detail: {
                status: false,
                btnId: modal.dataset.src
            }
        });
        document.dispatchEvent(event);
    }

    span.onclick = function () {
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = 0;
        }
    }
}

function confirmInit(modalId) {
    let modal = document.getElementById(modalId);
    if (!modal) {
        document.write(`<div id="${modalId}" data-src="" class="modal"><div class="modal-content"><span class="close">&times;</span><p>Are you sure you want to continue?</p><button id="yesBtn">Yes</button><button id="noBtn">Cancel</button></div></div>`);
        modal = document.getElementById(modalId);
    }

    return modal
}


