class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container py-1">
          <div class="container d-flex justify-content-between">
            <img id="logo" height="50" alt="Covid Info" />
            <div class="align-self-center">
              <a class="h5 text-danger px-2" id="buttonNasional" href="#"
                >Nasional</a
              >
              <a class="h5 text-danger px-2" id="buttonProvinsi" href="#"
                >Provinsi</a
              >
            </div>
          </div>
        </div>
        </nav>`;
  }
}

customElements.define("nav-bar", Navbar);
