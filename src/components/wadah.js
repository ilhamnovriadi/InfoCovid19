class Wadah extends HTMLElement {
    connectedCallback() {
        this.render();
      }

    render(){
        this.innerHTML = `<div class="text-center d-flex justify-content-center bg-light py-5">
        <div class="container">
          <div id="infoNasional" class="row justify-content-center"></div>
        </div>
      </div>`
    }
}

customElements.define("app-wadah", Wadah);