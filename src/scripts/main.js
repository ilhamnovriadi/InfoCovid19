function main() {
  const dataNasional = async () => {
    await fetch("https://indonesia-covid-19.mathdro.id/api/harian")
      .then((response) => response.json())
      .then((responseJson) => renderInfo(responseJson))
      .catch((error) => alert(error));
  };

  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const renderInfo = (info) => {
    const infoData = info.data;
    const infoUpdate = infoData[299];
    const {
      jumlahPasienSembuh,
      jumlahKasusKumulatif,
      jumlahPasienMeninggal,
      odp,
      pdp,
    } = infoUpdate;
    const infoNasionalElement = document.querySelector("#infoNasional");
    infoNasionalElement.innerHTML = `<info-nasional class="row">
    <div class="px-4 py-2 mx-5">
  <h3 class="font-weight-bold text-dark">SEMBUH</h3>
  <h4 class="text-danger font-weight-bold">${formatNumber(
    jumlahPasienSembuh
  )} Orang</h4>
</div>
<div class="px-4 py-2 mx-5">
  <h3 class="font-weight-bold text-dark">JUMLAH KASUS</h3>
  <h4 class="text-danger font-weight-bold">${formatNumber(
    jumlahKasusKumulatif
  )} Orang</h4>
</div>
<div class="px-4 py-2 mx-5">
  <h3 class="font-weight-bold text-dark">MENINGGAL</h3>
  <h4 class="text-danger font-weight-bold">${formatNumber(
    jumlahPasienMeninggal
  )} Orang</h4>
</div></info-nasional>
<info-nasional class="row pt-5">
    <div class="px-4 py-2 mx-5">
  <h3 class="font-weight-bold text-dark">ODP</h3>
  <h4 class="text-danger font-weight-bold">${formatNumber(odp)} Orang</h4>
</div>
<div class="px-4 py-2 mx-5">
  <h3 class="font-weight-bold text-dark">PDP</h3>
  <h4 class="text-danger font-weight-bold">${formatNumber(pdp)} Orang</h4>
</div>
</info-nasional>`;
  };

  const dataProvinsi = async () => {
    await fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((response) => response.json())
      .then((responseJson) => {
        const response = responseJson.data;
        renderInfoProv(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const renderInfoProv = (data) => {
    const listElement = document.querySelector("#infoNasional");
    listElement.innerHTML = "";
    const exceptIndex = 31;
    const filteredItems = data.filter((data, index) => exceptIndex !== index);
    filteredItems.forEach(
      (data) =>
        (listElement.innerHTML += `
             <card-prov class="col-sm-4 pb-4">
                <div class="card bg-danger text-light shadow border-none" width="30px" style="border-radius: .50rem; border: 0">
                  <div class="card-body text-left">
                  <h4>${data.provinsi}</h4>
                    <div class="text-light small"> Kasus Positif <strong>${formatNumber(
                      data.kasusPosi
                    )} Orang</strong></div>
                    <div class="text-light small"> Sembuh <strong>${formatNumber(
                      data.kasusSemb
                    )} Orang</strong></div>
                    <div class="text-light small"> Meninggal <strong>${formatNumber(
                      data.kasusMeni
                    )} Orang</strong></div>
                  </div>
                </div>
             </card-prov>
              `)
    );
  };

  dataNasional();
  document.getElementById("buttonProvinsi").onclick = () => {
    dataProvinsi();
  };
  document.getElementById("buttonNasional").onclick = () => {
    dataNasional();
  };
}

export default main;
