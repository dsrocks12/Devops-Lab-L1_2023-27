const roles = [
    "Backend Engineer",
    "Distributed Systems Builder",
    "AI Infrastructure Engineer",
    "Cloud Systems Developer"
];

const typingTarget = document.getElementById("typing");
let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeRole() {
    if (!typingTarget) {
        return;
    }

    const currentRole = roles[roleIndex];
    typingTarget.textContent = currentRole.slice(0, characterIndex);

    if (!isDeleting && characterIndex < currentRole.length) {
        characterIndex += 1;
        setTimeout(typeRole, 80);
        return;
    }

    if (!isDeleting && characterIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, 1300);
        return;
    }

    if (isDeleting && characterIndex > 0) {
        characterIndex -= 1;
        setTimeout(typeRole, 40);
        return;
    }

    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 260);
}

typeRole();
