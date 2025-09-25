// ---------- Date to PNG mapping ----------
const dateMap = {
  "2025-09-25": "9.png", // Tritiya
  "2025-09-26": "8.png", // Chaturthi
  "2025-09-27": "1.png", // Panchami
  "2025-09-28": "2.png", // Shashthi
  "2025-09-29": "3.png", // Saptami
  "2025-09-30": "4.png", // Ashtami
  "2025-10-01": "5.png", // Navami
  "2025-10-02": "6.png"  // Dashami
};

const templateBg = document.getElementById("template-bg");
const downloadBtn = document.getElementById("download-btn");

// ---------- Get today's date in UTC ----------
const todayUTC = new Date();
const year = todayUTC.getUTCFullYear();
const month = String(todayUTC.getUTCMonth() + 1).padStart(2, '0'); // Months 0–11
const day = String(todayUTC.getUTCDate()).padStart(2, '0');

const todayKey = `${year}-${month}-${day}`;

// Determine which PNG to show
const pngToShow = dateMap[todayKey] || "default.png"; // fallback if not in map
templateBg.src = pngToShow;

// ---------- Download button ----------
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = pngToShow;
  link.download = pngToShow;
  link.click();
});
