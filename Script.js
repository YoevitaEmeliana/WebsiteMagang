function toggleMenu() {
  const nav = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger');
  const closeBtn = document.getElementById('close-btn');

  nav.classList.toggle('active');

  if (window.innerWidth <= 768) {
    const isOpen = nav.classList.contains('active');
    hamburger.style.display = isOpen ? 'none' : 'block';
    closeBtn.style.display = isOpen ? 'block' : 'none';
  }
}

function tambahBaris() {
  const table = document.getElementById("tabelPermohonan").getElementsByTagName("tbody")[0];
  const rowCount = table.rows.length;
  const newRow = table.insertRow();
  newRow.setAttribute("contenteditable", "true");
  newRow.innerHTML = `
    <td>${rowCount + 1}</td>
    <td class="left"></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="left"></td>
    <td></td>
  `;
}

  function tambahBaris() {
    const table = document.querySelector(".tabel-permohonan tbody");
    const rowCount = table.rows.length;
    const newRow = table.insertRow();

    newRow.setAttribute("contenteditable", "true");
    newRow.innerHTML = `
      <td>${rowCount + 1}</td>
      <td class="left"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td class="left"></td>
      <td></td>
      <td><button class="hapus-btn">Hapus</button></td>
    `;

    newRow.querySelector(".hapus-btn").addEventListener("click", function () {
      newRow.remove();
      updateNomor();
    });
  }

  function updateNomor() {
    const rows = document.querySelectorAll(".tabel-permohonan tbody tr");
    rows.forEach((row, index) => {
      row.cells[0].textContent = index + 1;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initialBtn = document.querySelector(".hapus-btn");
    if (initialBtn) {
      initialBtn.addEventListener("click", function () {
        const row = this.closest("tr");
        row.remove();
        updateNomor();
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 10; i++) {
    tambahBarisJurnal();
  }
});

function tambahBarisJurnal() {
  const tabel = document.getElementById("tabelJurnal").getElementsByTagName("tbody")[0];
  const barisBaru = tabel.insertRow();
  const no = tabel.rows.length;

  const isi = [
    no,
    '<input type="date" />',
    '<div contenteditable="true" class="left"></div>',
    '<input type="file" accept="image/*" />',
    '<div contenteditable="true" class="left"></div>',
    '<div contenteditable="true" class="left"></div>',
    '<div contenteditable="true"></div>',
    `<button class="hapus-btn" onclick="hapusBaris(this)">Hapus</button>`
  ];

  isi.forEach((val, idx) => {
    const sel = barisBaru.insertCell(idx);
    sel.innerHTML = val;
    if ([2, 4, 5].includes(idx)) sel.classList.add("left");
  });
}

function hapusBaris(button) {
  const row = button.closest("tr");
  row.remove();
  updateNomor();
}

function updateNomor() {
  const rows = document.querySelectorAll("#tabelJurnal tbody tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

function ubahJumlahEntri(jumlah) {
  alert("Fitur ini hanya placeholder. Anda memilih untuk menampilkan " + jumlah + " entri.");
}

function tambahBarisPresensi() {
  const tabel = document.getElementById("tabelPresensi").getElementsByTagName("tbody")[0];
  const no = tabel.rows.length + 1;
  const row = tabel.insertRow();

  const isi = [
    no,
    '<input type="text" placeholder="">',
    '<input type="date">',
    '<input type="text" placeholder="">',
    `<select class="kehadiran-dropdown">
    <option value="" hidden selected disabled></option>
    <option>Hadir</option>
    <option>Tidak Hadir</option>
    </select>`
    ,
    `<button class="hapus-btn" onclick="hapusBaris(this)">Hapus</button>`
  ];

  isi.forEach((val, idx) => {
    const cell = row.insertCell(idx);
    cell.innerHTML = val;
    if (idx === 0) cell.contentEditable = false;
  });
  updateNomorPresensi();
}

window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 10; i++) {
    tambahBarisPresensi();
  }
});

function hapusBaris(button) {
  const row = button.closest("tr");
  row.remove();
  updateNomorPresensi();
}

function updateNomorPresensi() {
  const rows = document.querySelectorAll("#tabelPresensi tbody tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

function cariPresensi() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#tabelPresensi tbody tr");
  rows.forEach(row => {
    const namaInput = row.cells[1].querySelector("input");
    const nama = namaInput ? namaInput.value.toLowerCase() : '';
    row.style.display = nama.includes(input) ? '' : 'none';
  });
}

function ubahJumlahEntri(jumlah) {
  alert(`Fitur 'Show Entries' hanya placeholder. Jumlah entri dipilih: ${jumlah}`);
}

function tambahBarisKunjungan() {
  const tabel = document.getElementById("tabelKunjungan").getElementsByTagName("tbody")[0];
  const no = tabel.rows.length + 1;
  const row = tabel.insertRow();

  const sel = [
    no,
    '<input type="date" style="border:none; background:transparent; width:100%;">',
    '<input type="text" style="border:none; background:transparent; width:100%;">',
    `<button class="hapus-btn" onclick="hapusBaris(this)">Hapus</button>`
  ];

  sel.forEach((val, idx) => {
    const cell = row.insertCell(idx);
    cell.innerHTML = val;
    if (idx === 0) cell.contentEditable = false;
  });

  updateNomorKunjungan();
}

window.addEventListener("DOMContentLoaded", () => {
  const tabelKunjungan = document.getElementById("tabelKunjungan");
  if (tabelKunjungan) {
    for (let i = 0; i < 10; i++) tambahBarisKunjungan();
  }
});

function hapusBaris(button) {
  const row = button.closest("tr");
  row.remove();
  updateNomorKunjungan();
}

function updateNomorKunjungan() {
  const rows = document.querySelectorAll("#tabelKunjungan tbody tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

function cariKunjungan() {
  const input = document.getElementById("searchKunjungan").value.toLowerCase();
  const rows = document.querySelectorAll("#tabelKunjungan tbody tr");

  rows.forEach(row => {
    const catatan = row.cells[2].querySelector("input")?.value?.toLowerCase() || "";
    row.style.display = catatan.includes(input) ? "" : "none";
  });
}

function ubahJumlahEntri(jumlah) {
  alert("Fitur 'Show Entries' hanya placeholder.\nJumlah entri dipilih: " + jumlah);
}

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

function loginDummy(event) {
  event.preventDefault();
  alert("Login berhasil (dummy). Arahkan ke halaman dashboard.");
  window.location.href = "index.html";
}

function loginGoogleDummy() {
  alert("Login dengan Google berhasil (dummy).");
  window.location.href = "index.html";
}
