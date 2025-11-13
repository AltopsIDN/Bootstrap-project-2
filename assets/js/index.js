function updateDashboard() {
    const reports = JSON.parse(localStorage.getItem('reports')) || [];


    const total = reports.length;
    const New = reports.filter(r => r.status === "New").length;
    const Processed = reports.filter(r => r.status === "Processed").length;
    const Finished = reports.filter(r => r.status === "Finished").length;


    document.getElementById('totalReports').innerText = total;
    document.getElementById('newReports').innerText = New;
    document.getElementById('processReports').innerText = Processed;
    document.getElementById('doneReports').innerText = Finished;
  }


  updateDashboard();