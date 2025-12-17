import{_ as e,n as o,e as t,s as n,x as s}from"./vendor-38224743.js";let a=class extends n{async openFlasherDialog(){import("./flashing-dialog-3f53e6b4.js");const e=await fetch(this.manifest),o=await e.json(),t=document.createElement("flashing-dialog");t.manifest=o,document.body.appendChild(t)}render(){const e="serial"in navigator;return s`
      ${e?s`<mwc-button raised @click=${this.openFlasherDialog}
            ><slot name="button">Connect</slot></mwc-button
          >`:s`<slot name="no-webserial"
            ><strong>
              Unfortunately, your browser does not support Web Serial. Open this
              page in Google Chrome or Microsoft Edge.
            </strong></slot
          >`}
    `}};e([o()],a.prototype,"manifest",void 0),a=e([t("nabucasa-zigbee-flasher")],a);
