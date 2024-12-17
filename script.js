document.addEventListener("DOMContentLoaded", () => {
    const formSection = document.getElementById("form-section");
    const resultSection = document.getElementById("result-section");
    const nameInput = document.getElementById("name");
    const customMessageInput = document.getElementById("custom-message");
    const mainMessage = document.getElementById("main-message");
    const additionalMessage = document.getElementById("additional-message");
    const generateButton = document.getElementById("generate-button");
    const shareButton = document.getElementById("share-button");
    // Générer le message personnalisé
    generateButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const customMessage = customMessageInput.value.trim();
        if (!name) {
            alert("Veuillez entrer votre nom.");
            return;
        }
        // Afficher les messages
        mainMessage.textContent = `${name} vous souhaite joyeux Noël 🎅`;
        additionalMessage.textContent = customMessage ? customMessage : "";
        // Basculer vers la section résultat
        formSection.classList.add("hidden");
        resultSection.classList.remove("hidden");
    });
    // Partage sur WhatsApp
    shareButton.addEventListener("click", () => {
        const message =
            encodeURIComponent(`${mainMessage.textContent}\n\n${additionalMessage.textContent}`)
            ;
        const whatsappLink = `https://wa.me/?text=${message}`;
        window.open(whatsappLink, "_blank");
    });
});