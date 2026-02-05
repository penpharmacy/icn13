function compareDrug() {
  const a = document.getElementById("drugA").value.trim();
  const b = document.getElementById("drugB").value.trim();

  if (!a || !b) {
    alert("กรอกข้อมูลยาให้ครบ");
    return;
  }

  const result = `
  <h3>📊 ผลการเปรียบเทียบ</h3>
  <b>ยาชุดที่ 1:</b><br>${a}<br><br>
  <b>ยาชุดที่ 2:</b><br>${b}<br><br>
  ⚠️ กรุณาตรวจสอบชื่อยา ขนาดยา และวิธีใช้
  `;

  document.getElementById("result").innerHTML = result;
}
