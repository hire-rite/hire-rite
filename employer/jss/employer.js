document.addEventListener("DOMContentLoaded", () => {
  const chart = document.getElementById('performanceChart');
  if (chart && typeof Chart !== 'undefined') {
    new Chart(chart, {
      type: 'line',
      data: { labels: ['Jan','Feb','Mar','Apr'], datasets: [{label:'Hires', data:[3,4,7,9], borderColor:'#0052cc', fill:false}] }
    });
  }

  const uploadArea = document.getElementById('pdfUploadArea');
  const fileInput = document.getElementById('pdfFile');
  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragging'); });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragging'));
    uploadArea.addEventListener('drop', e => {
      e.preventDefault();
      uploadArea.classList.remove('dragging');
      fileInput.files = e.dataTransfer.files;
    });
  }

  const form = document.getElementById('candidateForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('successModal').style.display='block';
    });
  }
});
