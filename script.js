const notifications = document.querySelector('.notifications');
buttons = document.querySelectorAll('.buttons .btn');

const toastDetails = {
    timer: 5000,
    success: {
        icon: "fa-check-circle",
        text: "Success : This is a success toast."
    },
    error: {
        icon: "fa-times-circle",
        text: "Error : This is a error toast."
    },
    warning: {
        icon: "fa-exclamation-triangle",
        text: "Warning : This is a warning toast."
    },
    info: {
        icon: "fa-info-circle",
        text: "Info : This is a information toast."
    }
}

const removeToast = function(toast) {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); //clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500);//removing the toast after 500ms
}

const createToast = function (id) {
    //getting the icon and text for the toast based on the id passed
    const {icon, text} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    //setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                        <i class="fas ${icon}"></i>
                        <span>${text}</span>
                    </div>
                    <i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    //setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => createToast(btn.id));
})