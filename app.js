document.addEventListener("click", (e) => {
    const snowflake = document.createElement("span");
    snowflake.className = "snowflake";
    snowflake.style.left = e.offsetX + "px";
    snowflake.style.top = e.offsetY + "px";
    const size = Math.random() * 80 + 20;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 1000);
});