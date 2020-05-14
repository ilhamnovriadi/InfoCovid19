class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div>
        <div class="text-center bg-white pt-5">
          <div class="jumbotron bg-white pb-4">
            <img id="dokter" height="200" alt="Covid Dokter" />
            <h1 class="display-4 mt-4 font-weight-bold">
              DATA PANTAUAN <span class="text-danger">COVID-19</span>
            </h1>
            <p class="lead">
              Data yang ditampilkan adalah data terkini
              <strong class="text-danger">se-Indonesia</strong>.
            </p>
          </div>
        </div>
      </div>`;
  }
}


customElements.define("app-banner", Banner);
