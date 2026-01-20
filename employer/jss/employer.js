document.addEventListener("DOMContentLoaded", () => {
  // Chart on Dashboard
  const chartEl = document.getElementById("performanceChart");
  if (chartEl && typeof Chart !== 'undefined') {
    new Chart(chartEl, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{ label: "Hires", data: [3,6,8,5,9], borderColor: "#0052cc", fill: false }]
      }
    });
  }

  // Drag & Drop Upload
  const uploadArea = document.getElementById('pdfUploadArea');
  const fileInput = document.getElementById('pdfFile');
  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', ()=>fileInput.click());
    uploadArea.addEventListener('dragover', e=>{e.preventDefault();uploadArea.classList.add('dragging');});
    uploadArea.addEventListener('dragleave', ()=>uploadArea.classList.remove('dragging'));
    uploadArea.addEventListener('drop', e=>{
      e.preventDefault();
      uploadArea.classList.remove('dragging');
      fileInput.files = e.dataTransfer.files;
    });
  }

  // Candidate form confirmation
  const form = document.getElementById('candidateForm');
  if (form) {
    form.addEventListener('submit', e=>{
      e.preventDefault();
      document.getElementById('successModal').style.display='block';
    });
  }

  // Cancel button on upload
  const cancelBtn = document.getElementById('cancelUpload');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', ()=>{
      const sure = confirm('Cancel upload and return to dashboard?');
      if (sure) window.location.href = 'dashboard.html';
    });
  }
});
