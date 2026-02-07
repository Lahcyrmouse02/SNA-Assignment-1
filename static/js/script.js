(function () {
  function updateTime() {
    const timeElement = document.getElementById("liveTime");

    if (timeElement) {
      const now = new Date();
      const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];
      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      const dayName = days[now.getDay()];
      const monthName = months[now.getMonth()];
      const date = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      timeElement.textContent = `${dayName}, ${date} ${monthName} ${now.getFullYear()} • ${hours}:${minutes}:${seconds} WIB`;
    }
  }

  // Initial update and set interval
  updateTime();
  setInterval(updateTime, 1000);
})();

// Current Year Function
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
