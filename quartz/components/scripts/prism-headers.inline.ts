
function setupPrismHeaders() {
    const headers = document.querySelectorAll(".page-title a") as NodeListOf<HTMLElement>

    headers.forEach((header) => {
        // Add the class for styling
        header.classList.add("prism-header")

        header.addEventListener("mouseenter", () => {
            header.classList.add("prism-active")
        })

        header.addEventListener("mousemove", (e) => {
            const rect = header.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            header.style.setProperty("--x", x + "%")
            header.style.setProperty("--y", y + "%")
        })

        header.addEventListener("mouseleave", () => {
            header.classList.remove("prism-active")
        })
    })
}

document.addEventListener("nav", setupPrismHeaders)
