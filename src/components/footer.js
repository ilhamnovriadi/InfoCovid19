class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container">
    <div class="row py-3">
      <div class="col-md-1" style="padding-top: 10px;">
        <div class="float-left">
          <img
            id="logoFooter"
            alt="logo"
            width="200"
            class="align-self-center"
          />
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8 pl-3">
        <p class="text-small text-muted">
          © <strong>2020 Covid Info</strong> • Create by Ilham Novriadi •
          Love From Palembang.
        </p>
      </div>

      <div class="col-md-4">
        <div class="float-right">
          <a href="https://twitter.com/ilham_novriadi2"
            ><img class="mr-2" id="tw" alt="twitter"
          /></a>
          <a href="https://www.facebook.com/ilhamnovriadi/"
            ><img class="mr-2" id="fb" alt="facebook"
          /></a>
          <a href="https://www.instagram.com/ilhamnovriadi/"
            ><img
              class="mr-2"
              id="ig"
              alt="instagram"
          /></a>
        </div>
      </div>
    </div>
  </div>`;
  }
}


customElements.define("app-footer", Footer);
