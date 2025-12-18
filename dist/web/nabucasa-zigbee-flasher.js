import{_ as e,n as o,e as t,s as n,x as a}from"./vendor-38224743.js";let s=class extends n{async openFlasherDialog(){import("./flashing-dialog-daa923b1.js");const e=await fetch(this.manifest),o=await e.json(),t=document.createElement("flashing-dialog");t.manifest=o,document.body.appendChild(t)}render(){const e="serial"in navigator;return a`
      ${e?a`<mwc-button raised @click=${this.openFlasherDialog}
            ><slot name="button">Connect</slot></mwc-button
          >`:a`<slot name="no-webserial"
            ><strong>
              Unfortunately, your browser does not support Web Serial. Open this
              page in Google Chrome or Microsoft Edge.
            </strong></slot
          >`}
    `}};e([o()],s.prototype,"manifest",void 0),s=e([t("nabucasa-zigbee-flasher")],s);
