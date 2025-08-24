const canvas = document.getElementById("certificateCanvas");
const ctx = canvas.getContext("2d");
const template = new Image();
template.src = "rjd.png"; // Template image

function generateMembershipNo() {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return "RJD" + randomNum;
}

function generateCertificate() {
  template.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const membership = generateMembershipNo();

    ctx.fillStyle = "#7c3e17";
    ctx.font = "800 25px Arial";

    ctx.fillText(name, 250, 653);
    ctx.fillText(membership, 375, 735);
    ctx.fillText(address, 260, 806);

    const photoInput = document.getElementById("photoInput").files[0];
    if (photoInput) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          const x = 140, y = 234, radius = 160;
          ctx.save();
          ctx.beginPath();
          ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(img, x, y, radius * 2, radius * 2);
          ctx.restore();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(photoInput);
    }

    saveToDatabase(name, phone, membership);
  };

  if (template.complete) template.onload();
}

function downloadCertificate() {
  const link = document.createElement("a");
  link.download = "RJD_Certificate.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function saveToDatabase(name, phone, membership) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "save.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Server response:", xhr.responseText);
    }
  };
  xhr.send(`name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&membership=${encodeURIComponent(membership)}`);
}