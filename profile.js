function changeAvatar() {
    const avatars = ["🎮", "🕹️", "👾", "🎲", "🧩"];
    const avatarElement = document.querySelector(".avatar");
    let currentAvatar = avatarElement.textContent;
    let newAvatar = avatars[(avatars.indexOf(currentAvatar) + 1) % avatars.length];
    avatarElement.textContent = newAvatar;
}
