import { LitElement } from 'lit';
import type { PyodideInterface } from 'pyodide';
import type { Manifest } from './const';
import './usf-file-upload';
import './usf-icon';
import '@material/mwc-dialog';
import '@material/mwc-button';
import '@material/mwc-formfield';
import '@material/mwc-radio';
import '@material/mwc-circular-progress';
type GBLImage = any;
export declare function parseFirmwareBuffer(
  pyodide: PyodideInterface,
  buffer: ArrayBuffer
): Promise<GBLImage>;
export declare class FirmwareSelector extends LitElement {
  pyodide: PyodideInterface;
  manifest: Manifest;
  private firmwareUploadIndex;
  private firmwareLoaded;
  firstUpdated(): void;
  private firmwareUploadTypeChanged;
  private customFirmwareChosen;
  private loadFirmware;
  render(): import('lit-html').TemplateResult<1>;
  static styles: import('lit').CSSResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'firmware-selector': FirmwareSelector;
  }
}
export {};
