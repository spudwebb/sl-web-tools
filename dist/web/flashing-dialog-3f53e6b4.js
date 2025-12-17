import{i as e,_ as r,n as t,e as n,s as o,x as s,a as i,I as a,b as l,m as c,c as p,d,t as f,f as m,o as u,g as _,h,j as g,k as w,l as y,p as E}from"./vendor-38224743.js";let b=class extends o{render(){return s`
      <svg
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <g>
          <path d=${this.icon}></path>
        </g>
      </svg>
    `}};b.styles=e`
    :host,
    svg {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    svg {
      vertical-align: baseline;
    }
  `,r([t()],b.prototype,"icon",void 0),b=r([n("usf-icon")],b);let L=class extends a{};L.styles=[i],L=r([n("usf-icon-button")],L);let I=class extends o{constructor(){super(...arguments),this.disabled=!1}fileChanged(e){this.requestUpdate(),this.dispatchEvent(new Event(e.type,e))}buttonClicked(){this.fileInput.click()}get files(){return this.fileInput?this.fileInput.files:null}render(){return s`
      <input
        id="file"
        type="file"
        accept=${this.accept}
        hidden
        @change=${this.fileChanged}
      />

      <mwc-button
        raised
        ?disabled=${this.disabled}
        @click=${this.buttonClicked}
      >
        <slot></slot>
      </mwc-button>

      ${this.files?s`<span
            >${this.files.length>0?this.files[0].name:"No file selected"}</span
          >`:""}
    `}};I.styles=e`
    mwc-button {
      vertical-align: middle;
    }
  `,r([l("#file")],I.prototype,"fileInput",void 0),r([t({type:Boolean})],I.prototype,"disabled",void 0),r([t()],I.prototype,"accept",void 0),I=r([n("usf-file-upload")],I);const N="M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z";var O;!function(e){e.GECKO_BOOTLOADER="bootloader",e.CPC="cpc",e.EZSP="ezsp",e.SPINEL="spinel",e.ROUTER="router"}(O||(O={}));const S={[O.GECKO_BOOTLOADER]:"Bootloader (recovery)",[O.CPC]:"Multi-PAN (RCP)",[O.EZSP]:"Zigbee (EZSP)",[O.SPINEL]:"OpenThread (RCP)",[O.ROUTER]:"Zigbee Router"};var R,P;!function(e){e.ZIGBEE_NCP="zigbee_ncp",e.ZIGBEE_ROUTER="zigbee_router",e.OPENTHREAD_RCP="openthread_rcp",e.BOOTLOADER="bootloader",e.MULTIPAN="multipan",e.UNKNOWN="unknown"}(R||(R={})),function(e){e.RTS_DTR="rts_dtr",e.BAUDRATE="baudrate"}(P||(P={}));const v={"ncp-uart-hw":R.ZIGBEE_NCP,"ncp-uart-sw":R.ZIGBEE_NCP,"rcp-uart-802154":R.MULTIPAN,"ot-rcp":R.OPENTHREAD_RCP,"gecko-bootloader":R.BOOTLOADER},k={[R.ZIGBEE_NCP]:c,[R.ZIGBEE_ROUTER]:p,[R.MULTIPAN]:d,[R.OPENTHREAD_RCP]:"M12 0C5.383 0 0 5.384 0 12.002 0 18.574 5.31 23.928 11.865 24V12.012H7.938A2.12 2.12 0 0 0 5.82 14.13a2.12 2.12 0 0 0 2.116 2.117v2.616a4.738 4.738 0 0 1-4.731-4.733 4.738 4.738 0 0 1 4.731-4.734h3.928V8.074a3.943 3.943 0 0 1 3.938-3.94 3.944 3.944 0 0 1 3.94 3.94 3.944 3.944 0 0 1-3.94 3.939H14.48v11.731C19.911 22.598 24 17.77 24 12.002 24 5.384 18.617 0 12 0Zm5.127 8.073a1.325 1.325 0 0 0-1.324-1.324 1.325 1.325 0 0 0-1.323 1.324v1.323h1.323a1.325 1.325 0 0 0 1.324-1.323z",[R.BOOTLOADER]:N,[R.UNKNOWN]:N},T={[R.ZIGBEE_NCP]:"Zigbee (EZSP)",[R.ZIGBEE_ROUTER]:"Zigbee Router",[R.MULTIPAN]:"Multi-PAN (RCP)",[R.OPENTHREAD_RCP]:"OpenThread (RCP)",[R.BOOTLOADER]:"Gecko Bootloader",[R.UNKNOWN]:"Unknown"},A={[O.CPC]:R.MULTIPAN,[O.EZSP]:R.ZIGBEE_NCP,[O.ROUTER]:R.ZIGBEE_ROUTER,[O.SPINEL]:R.OPENTHREAD_RCP,[O.GECKO_BOOTLOADER]:R.BOOTLOADER},C=9999;async function D(e,r){const{GBLImage:t}=e.pyimport("universal_silabs_flasher.firmware");return await t.from_bytes.callKwargs(e.toPy(r),{})}let G=class extends o{constructor(){super(...arguments),this.firmwareUploadIndex=0}firmwareLoaded(e){this.dispatchEvent(new CustomEvent("firmwareLoaded",{detail:{firmware:e},bubbles:!0,composed:!0}))}firstUpdated(){this.renderRoot.querySelector("mwc-radio").dispatchEvent(new Event("change"))}async firmwareUploadTypeChanged(e){if(this.firmwareUploadIndex=parseInt(e.target.value,10),this.firmwareUploadIndex===C)return void this.firmwareLoaded(void 0);const r=this.manifest.firmwares[this.firmwareUploadIndex],t=await fetch(r.url);if(!t.ok)return void alert(`Failed to download firmware: ${t}`);const n=await t.arrayBuffer();await this.loadFirmware(n)}async customFirmwareChosen(e){const r=e.target.files[0],t=await async function(e){return new Promise(((r,t)=>{const n=new FileReader;n.onload=()=>r(n.result),n.onerror=e=>t(e),n.readAsArrayBuffer(e)}))}(r);await this.loadFirmware(t)}async loadFirmware(e){let r;try{r=await D(this.pyodide,e)}catch(e){r=void 0,alert(`Failed to parse firmware: ${e}`)}this.firmwareLoaded(r)}render(){return s`
      ${this.manifest.firmwares.map(((e,r)=>s`
            <div>
              <mwc-formfield label="${e.name}">
                <mwc-radio
                  name="firmware"
                  .value=${r}
                  @change=${this.firmwareUploadTypeChanged}
                  ?checked=${0===r}
                ></mwc-radio>

                <usf-icon .icon=${k[e.type]}></usf-icon>
              </mwc-formfield>
            </div>
          `))}
      ${this.manifest.allow_custom_firmware_upload?s`
            <div>
              <mwc-formfield label="Upload your own firmware">
                <mwc-radio
                  name="firmware"
                  .value="${C}"
                  @change=${this.firmwareUploadTypeChanged}
                  ?checked=${0===this.manifest.firmwares.length}
                ></mwc-radio>

                <usf-icon .icon=${m}></usf-icon>
              </mwc-formfield>

              <usf-file-upload
                class=${u({hidden:this.firmwareUploadIndex!==C})}
                accept=".gbl"
                ?disabled=${this.firmwareUploadIndex!==C}
                @change=${this.customFirmwareChosen}
                >Upload</usf-file-upload
              >
            </div>
          `:""}
    `}};G.styles=e`
    .hidden {
      display: none;
    }

    mwc-formfield {
      display: block;
    }

    usf-icon {
      margin-right: 1em;
    }
  `,r([t()],G.prototype,"pyodide",void 0),r([t()],G.prototype,"manifest",void 0),r([f()],G.prototype,"firmwareUploadIndex",void 0),G=r([n("firmware-selector")],G);const $=[{package:"aiosignal",module:"aiosignal"},{package:"aiohttp",module:"aiohttp"},{package:"aiohappyeyeballs",module:"aiohappyeyeballs"},{package:"cffi",module:"cffi"},{package:"aiosqlite",module:"aiosqlite"},{package:"cryptography",module:"cryptography"},{package:"frozenlist",module:"frozenlist"},{package:"multidict",module:"multidict"},{package:"pycparser",module:"pycparser"},{package:"yarl",module:"yarl"},{package:"jsonschema",module:"jsonschema"},{package:"jsonschema-specifications",module:"jsonschema_specifications"},{package:"click",module:"click"},{package:"click-log",module:"click_log"},{package:"pure-pcapy3",module:"pure_pcapy3"},{package:"idna",module:"idna"},{package:"typing_extensions",module:"typing_extensions"},{package:"gpiod",module:"gpiod"},{package:"rpds",module:"rpds"},{package:"rpds-py",module:"rpds-py"},{package:"referencing",module:"referencing"},{package:"ssl",module:"ssl",version:"1.0.0"}];var x,F,B;async function U(e){e(x.LOADING_PYODIDE);const r=await _({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.29.0/full/"});e(x.INSTALLING_DEPENDENCIES),await r.loadPackage("micropip");const t=r.pyimport("micropip"),n=function(e){e.startsWith("data:text/plain;base64,")&&(e=atob(e.substring(23)));const r=new Map,t=e.includes("\r\n")?"\r\n":"\n";for(const n of e.trim().split(t)){let e,t;n.startsWith("./")?(e=n.trim(),t="0.0.0"):[e,t]=n.split("=="),r.set(e,t)}return r}("aiohappyeyeballs==2.6.1\r\naiohttp==3.13.2\r\naiosignal==1.4.0\r\naiosqlite==0.21.0\r\nattrs==25.4.0\r\nbellows==0.48.0\r\ncffi==2.0.0\r\nclick==8.3.1\r\nclick-log==0.4.0\r\ncoloredlogs==15.0.1\r\ncrc==7.1.0\r\ncrccheck==1.3.1\r\ncryptography==46.0.3\r\nfrozendict==2.4.7\r\nfrozenlist==1.8.0\r\nhumanfriendly==10.0\r\nidna==3.11\r\njsonschema==4.25.1\r\njsonschema-specifications==2025.9.1\r\nmultidict==6.7.0\r\npropcache==0.4.1\r\npycparser==2.23\r\npyserial==3.5\r\npyserial-asyncio-fast==0.16\r\nreferencing==0.37.0\r\nrpds-py==0.29.0\r\ntyping_extensions==4.15.0\r\nvoluptuous==0.15.2\r\nyarl==1.22.0\r\nzigpy==0.87.0\r\n");for(const e of $)t.add_mock_package.callKwargs({name:e.package,version:e.version||n.get(e.package),modules:new Map([[e.module,'import sys\r\nfrom unittest.mock import MagicMock\r\nfrom importlib.machinery import ModuleSpec\r\n\r\n\r\nclass DummyFinderLoader:\r\n    """Combined module loader and finder that recursively returns Mock objects."""\r\n\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def create_module(self, spec):\r\n        return MagicMock(__path__=[])\r\n\r\n    def exec_module(self, module):\r\n        pass\r\n\r\n    def find_spec(self, fullname, path, target=None):\r\n        if fullname.startswith(self.name):\r\n            return ModuleSpec(fullname, self)\r\n\r\n        return None\r\n\r\n\r\ndef __getattr__(name):\r\n    """Mock out all attribute access for this module."""\r\n    return MagicMock()\r\n\r\n\r\nsys.meta_path.append(DummyFinderLoader(__name__))\r\n']])});t.add_mock_package.callKwargs({name:"webserial_transport",version:"1.0.0",modules:new Map([["webserial_transport",'from __future__ import annotations\r\n\r\nimport asyncio\r\nimport collections.abc\r\nimport logging\r\nimport contextlib\r\nimport sys\r\nfrom typing import final, Any, Callable\r\n\r\nimport js\r\n\r\n# Patch some built-in modules so that pyserial imports\r\ntry:\r\n    import fcntl  # noqa: F401\r\nexcept ImportError:\r\n    sys.modules["fcntl"] = object()  # type: ignore[assignment]\r\n\r\ntry:\r\n    import termios  # noqa: F401\r\nexcept ImportError:\r\n    sys.modules["termios"] = object()  # type: ignore[assignment]\r\n\r\n\r\ntry:\r\n    import sqlite3  # noqa: F401\r\nexcept ImportError:\r\n\r\n    class MockSqlite3:\r\n        sqlite_version = "3.31.1"\r\n        sqlite_version_info = (3, 31, 1)\r\n\r\n    sys.modules["sqlite3"] = MockSqlite3()  # type: ignore[assignment]\r\n\r\n\r\n_WRITE_FLUSH_TIMEOUT = 5.0  # seconds\r\n\r\n_SERIAL_PORT = None\r\n_SERIAL_PORT_CLOSING_TASKS: list[asyncio.Task[Any]] = []\r\n\r\n_LOGGER = logging.getLogger(__name__)\r\n\r\n\r\n@final\r\nclass ExitSentinel:\r\n    """A sentinel object to signal writer loop exit."""\r\n\r\n\r\nclass WebSerialTransport(asyncio.Transport):\r\n    def __init__(\r\n        self,\r\n        loop: asyncio.BaseEventLoop,\r\n        protocol: asyncio.Protocol,\r\n        port,\r\n    ) -> None:\r\n        super().__init__()\r\n        self._loop: asyncio.BaseEventLoop = loop\r\n        self._protocol: asyncio.Protocol | None = protocol\r\n        self._port = port\r\n\r\n        self._write_queue: asyncio.Queue[bytes | type[ExitSentinel]] = asyncio.Queue()\r\n        self._is_closing = False\r\n        self._close_port_task: asyncio.Task[None] | None = None\r\n\r\n        self._js_reader = self._port.readable.getReader()\r\n        self._js_writer = self._port.writable.getWriter()\r\n\r\n        self._reader_task = loop.create_task(self._reader_loop())\r\n        self._writer_task = loop.create_task(self._writer_loop())\r\n\r\n        self._loop.call_soon(self._protocol.connection_made, self)\r\n\r\n    async def _writer_loop(self) -> None:\r\n        while True:\r\n            chunk = await self._write_queue.get()\r\n\r\n            if chunk is ExitSentinel:\r\n                _LOGGER.debug("Received exit sentinel, exiting")\r\n                return\r\n\r\n            try:\r\n                await self._js_writer.write(js.Uint8Array.new(chunk))\r\n            except Exception as e:\r\n                _LOGGER.error("Error writing to serial port", exc_info=e)\r\n                self._cleanup(e)\r\n                break\r\n\r\n    async def _reader_loop(self) -> None:\r\n        while True:\r\n            result = await self._js_reader.read()\r\n            if result.done:\r\n                self._cleanup(RuntimeError("Other side has closed"))\r\n                return\r\n\r\n            assert self._protocol is not None\r\n            self._protocol.data_received(bytes(result.value))\r\n\r\n    async def set_signals(\r\n        self, rts: bool | None = None, dtr: bool | None = None, **kwargs: bool | None\r\n    ) -> None:\r\n        other_signals = {k: v for k, v in kwargs.items() if v is not None}\r\n        if other_signals:\r\n            _LOGGER.warning(\r\n                "Ignoring unsupported flow control signals: %s", other_signals\r\n            )\r\n\r\n        signals = {}\r\n\r\n        if rts is not None:\r\n            signals["requestToSend"] = rts\r\n\r\n        if dtr is not None:\r\n            signals["dataTerminalReady"] = dtr\r\n\r\n        if signals:\r\n            await self._port.setSignals(**signals)\r\n\r\n    def write(self, data: bytes) -> None:\r\n        self._write_queue.put_nowait(data)\r\n\r\n    def set_protocol(self, protocol: asyncio.Protocol) -> None:  # type: ignore[override]\r\n        self._protocol = protocol\r\n\r\n    def get_protocol(self) -> asyncio.BaseProtocol:\r\n        assert self._protocol is not None\r\n        return self._protocol\r\n\r\n    def is_closing(self) -> bool:\r\n        return self._is_closing\r\n\r\n    def __del__(self):\r\n        self._cleanup(RuntimeError("Transport was not closed!"))\r\n\r\n    async def _close_port(self, exception: Exception | None) -> None:\r\n        _LOGGER.debug("Flushing pending writes")\r\n\r\n        # First, wait for writes to finish\r\n        try:\r\n            async with asyncio.timeout(_WRITE_FLUSH_TIMEOUT):\r\n                _LOGGER.debug("Waiting for pending writes to finish")\r\n                self._write_queue.put_nowait(ExitSentinel)\r\n                await self._writer_task\r\n        except asyncio.TimeoutError:\r\n            _LOGGER.debug("Write task did not exit in time, cancelling it")\r\n            with contextlib.suppress(asyncio.CancelledError):\r\n                self._writer_task.cancel()\r\n                await self._writer_task\r\n\r\n        if self._js_writer is not None:\r\n            self._js_writer.releaseLock()\r\n            self._js_writer = None\r\n\r\n        if self._port is not None:\r\n            _LOGGER.debug("Closing serial port")\r\n            await self._port.close()\r\n            self._port = None\r\n\r\n        assert self._close_port_task is not None\r\n\r\n        # If the task cannot be removed, we should still call `connection_lost`\r\n        try:\r\n            _SERIAL_PORT_CLOSING_TASKS.remove(self._close_port_task)\r\n        except ValueError:\r\n            pass\r\n\r\n        # Only now do we call `connection_lost`\r\n        _LOGGER.debug("Calling protocol connection_lost(%r)", exception)\r\n        if self._protocol is not None:\r\n            self._protocol.connection_lost(exception)\r\n            self._protocol = None\r\n\r\n    def _cleanup(self, exception: Exception | None) -> None:\r\n        self._is_closing = True\r\n\r\n        # The reader task should be cancelled. We do not cancel the writer task, we wait\r\n        # for it to cleanly exit.\r\n        self._reader_task.cancel()\r\n\r\n        if self._js_reader is not None:\r\n            self._js_reader.releaseLock()\r\n            self._js_reader = None\r\n\r\n        if self._port is not None and self._close_port_task is None:\r\n            self._close_port_task = asyncio.create_task(self._close_port(exception))\r\n            _SERIAL_PORT_CLOSING_TASKS.append(self._close_port_task)\r\n        elif self._protocol is not None:\r\n            # If we have no serial port but have a connected protocol, we still need to\r\n            # notify the protocol that the connection is lost\r\n            self._protocol.connection_lost(exception)\r\n\r\n    def close(self) -> None:\r\n        self._cleanup(None)\r\n\r\n\r\ndef set_global_serial_port(serial_port) -> None:\r\n    global _SERIAL_PORT\r\n    _SERIAL_PORT = serial_port\r\n\r\n\r\nasync def create_serial_connection(\r\n    loop: asyncio.BaseEventLoop,\r\n    protocol_factory: Callable[[], asyncio.Protocol],\r\n    url: str,\r\n    *,\r\n    parity=None,\r\n    stopbits=None,\r\n    baudrate: int,\r\n    rtscts=False,\r\n    xonxoff=False,\r\n) -> tuple[WebSerialTransport, asyncio.Protocol]:\r\n    _LOGGER.debug("Opening a serial connection at %d with rtscts=%s", baudrate, rtscts)\r\n\r\n    while _SERIAL_PORT_CLOSING_TASKS:\r\n        _LOGGER.warning(\r\n            "Serial connection was not closed before a new one was opened!"\r\n            " Waiting before opening a new one."\r\n        )\r\n        await _SERIAL_PORT_CLOSING_TASKS.pop()\r\n\r\n    if _SERIAL_PORT is None:\r\n        raise RuntimeError("Global serial port is not set")\r\n\r\n    # `url` is ignored, `_SERIAL_PORT` is used instead\r\n    await _SERIAL_PORT.open(\r\n        baudRate=baudrate,\r\n        flowControl="hardware" if rtscts else "none",\r\n    )\r\n\r\n    protocol = protocol_factory()\r\n    transport = WebSerialTransport(loop, protocol, _SERIAL_PORT)\r\n\r\n    return transport, protocol\r\n\r\n\r\n# Directly patch zigpy-serial\r\nimport zigpy.serial\r\n\r\nzigpy.serial.create_serial_connection = create_serial_connection\r\n']])});const o=[];for(const[e,r]of n)if(!$.find((r=>r.package===e)))if(e.startsWith("./")){const r=new URL(e,window.location.href);o.push(r.href)}else o.push(`${e}==${r}`);await t.install.callKwargs({requirements:"./universal_silabs_flasher-0.1.2-py3-none-any.whl",deps:!1}),await t.install.callKwargs({requirements:o,deps:!1});return r.pyimport("coloredlogs").install.callKwargs({level:"DEBUG"}),e(x.READY),r}!function(e){e[e.LOADING_PYODIDE=0]="LOADING_PYODIDE",e[e.INSTALLING_DEPENDENCIES=1]="INSTALLING_DEPENDENCIES",e[e.READY=2]="READY"}(x||(x={})),function(e){e[e.IDLE=0]="IDLE",e[e.CONNECTING=1]="CONNECTING",e[e.FLASHING=2]="FLASHING"}(F||(F={})),function(e){e[e.IDLE=0]="IDLE",e[e.SELECTING_PORT=1]="SELECTING_PORT",e[e.PORT_SELECTION_CANCELLED=2]="PORT_SELECTION_CANCELLED",e[e.LOADING_PYODIDE=3]="LOADING_PYODIDE",e[e.PROBING=4]="PROBING",e[e.PROBING_COMPLETE=5]="PROBING_COMPLETE",e[e.PROBING_FAILED=6]="PROBING_FAILED",e[e.SELECT_FIRMWARE=7]="SELECT_FIRMWARE",e[e.INSTALLING=8]="INSTALLING",e[e.INSTALL_FAILED=9]="INSTALL_FAILED",e[e.DONE=10]="DONE"}(B||(B={}));let M=class extends o{constructor(){super(...arguments),this.flashingStep=B.IDLE,this.pyodideLoadState=x.LOADING_PYODIDE,this.debugLog="",this.uploadProgress=0,this.progressState=F.IDLE}firstUpdated(e){super.firstUpdated(e),this.mwcDialog.addEventListener("close",this.close),this.selectSerialPort()}getFirmwareMetadata(){if(!this.selectedFirmware)return s``;let e;try{e=this.selectedFirmware.get_nabucasa_metadata()}catch(e){return s``}const r=e.fw_type.value;return r in v&&(e.fw_type=v[r]),s`
      <table>
        <tbody>
          <tr>
            <th>Type</th>
            <td>
              ${T[e.fw_type.value]||"unknown"}
            </td>
          </tr>
          <tr>
            <th>SDK Version</th>
            <td>${this.simpleVersion(e.sdk_version)}</td>
          </tr>
          <tr>
            <th>EZSP Version</th>
            <td>${this.simpleVersion(e.ezsp_version)||"-"}</td>
          </tr>
        </tbody>
      </table>
    `}async selectSerialPort(){this.flashingStep=B.SELECTING_PORT;const e={};this.manifest.usb_filters&&(e.filters=this.manifest.usb_filters.map((e=>({usbProductId:e.pid,usbVendorId:e.vid}))));try{this.serialPort=await navigator.serial.requestPort(e)}catch(e){return console.log(e),this.mwcDialog.open=!0,this.serialPort=void 0,void(this.flashingStep=B.PORT_SELECTION_CANCELLED)}this.mwcDialog.open=!0,this.flashingStep=B.LOADING_PYODIDE,this.pyodide=await U((e=>{this.pyodideLoadState=e})),await this.onPyodideLoaded()}async onPyodideLoaded(){const e=this.pyodide;e.setStdout({batched:e=>{console.log(e),this.debugLog+=`${e}\n`}}),e.setStderr({batched:e=>{console.warn(e),this.debugLog+=`${e}\n`}}),e.pyimport("webserial_transport").set_global_serial_port(this.serialPort);const r=e.pyimport("universal_silabs_flasher.const").ApplicationType,t=e.pyimport("universal_silabs_flasher.const").ResetTarget,n=e.pyimport("universal_silabs_flasher.flasher").Flasher;this.pyFlasher=n.callKwargs({probe_methods:e.toPy(this.manifest.probe_methods.map((e=>[r(e.protocol),e.baudrate]))),device:"/dev/webserial",bootloader_reset:e.toPy(this.manifest.bootloader_reset.map((e=>t(e))))}),await this.detectRunningFirmware()}async detectRunningFirmware(){this.flashingStep=B.PROBING;try{await this.pyFlasher.probe_app_type()}catch(e){return console.error("Probing failed: ",e),this.pyFlasher=void 0,this.serialPort=void 0,void(this.flashingStep=B.PROBING_FAILED)}this.flashingStep=B.PROBING_COMPLETE}selectFirmware(){this.flashingStep=B.SELECT_FIRMWARE}onFirmwareLoaded(e){this.selectedFirmware=e.detail.firmware}async flashFirmware(){this.flashingStep=B.INSTALLING,this.uploadProgress=0,await this.pyFlasher.enter_bootloader();try{await this.pyFlasher.flash_firmware.callKwargs(this.selectedFirmware,{progress_callback:(e,r)=>{this.uploadProgress=e/r}}),this.flashingStep=B.DONE}catch(e){this.flashingStep=B.INSTALL_FAILED}}async close(){this.serialPort&&await this.serialPort.close(),this.parentNode.removeChild(this)}showDebugLog(){!function(e,r=""){const t=document.createElement("a");t.target="_blank",t.href=e,t.download=r,document.body.appendChild(t),t.dispatchEvent(new MouseEvent("click")),document.body.removeChild(t)}(`data:text/plain;charset=utf-8,${encodeURIComponent(this.debugLog)}`,"silabs_flasher.log")}formatHeadingText(e){return e.length<20?e:e+" ".repeat(8)}simpleVersion(e){return e?Array.from(e.components.toJs()).map((e=>e.data)).join(""):null}render(){let e=s``,r="Connecting",t=!0,n=!0,o=!1;if(this.flashingStep===B.SELECTING_PORT)this.mwcDialog&&(this.mwcDialog.open=!1),o=!0,t=!1,r="Select a serial port",e=s`<p>
        <p class="spinner"><mwc-circular-progress indeterminate density=8></mwc-circular-progress></p>
        <p>Plug in and select your ${this.manifest.product_name}</p>
      </p>`;else if(this.flashingStep===B.PORT_SELECTION_CANCELLED)t=!1,r="Serial port was not selected",e=s`<p>
          If you didn't select a serial port because the
          ${this.manifest.product_name} was missing, make sure the USB port it's
          plugged into works and the ${this.manifest.product_name} is detected
          by your operating system.
        </p>
        <p>
          If you are using Windows or macOS, install the
          <a
            href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads"
            target="_blank"
            rel="noreferrer noopener"
            >Silicon Labs CP2102 driver</a
          >.
        </p>

        <mwc-button slot="primaryAction" @click=${this.selectSerialPort}>
          Retry
        </mwc-button> `;else if([B.LOADING_PYODIDE,B.PROBING].includes(this.flashingStep))o=!0,t=!1,r="",e=s`<p>
        <p class="spinner">
          <mwc-circular-progress
            density=8
            ?indeterminate=${this.pyodideLoadState===x.LOADING_PYODIDE||this.flashingStep===B.PROBING}
            .progress=${this.pyodideLoadState/(2*x.READY)}
          >
          </mwc-circular-progress>
        </p>
        <p class="centered">
          Connecting...
          <br />
          This can take a few seconds.
        </p>
      </p>`;else if(this.flashingStep===B.PROBING_FAILED){const t=navigator.userAgent.includes("Mac OS"),n=this.manifest.usb_filters.find((e=>4292==e.vid&&6e4==e.pid));r="Connection failed",e=s`${t&&n?s`<section class="warning">
              <h2><usf-icon .icon=${h}></usf-icon> macOS Driver Bug</h2>

              <p>
                The built-in drivers on macOS do not work properly with the
                ${this.manifest.product_name}. Install the updated
                <a
                  href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads"
                  target="_blank"
                  rel="noreferrer noopener"
                  >Silicon Labs CP2102 driver</a
                >
                and re-connect to the serial port titled
                <strong
                  >CP210x USB to UART Bridge Controller
                  (cu.SLAB_USBtoUART)</strong
                >.
              </p>
            </section>`:""}
        <p>The running firmware could not be detected.</p>

        <p>
          Make sure the USB port works and if you are using a USB extension
          cable, make sure the cable can transfer data. Unplug the
          ${this.manifest.product_name} and plug it back in to reset and try
          again.
        </p>

        <mwc-button slot="primaryAction" @click=${this.selectSerialPort}>
          Retry
        </mwc-button>`}else if(this.flashingStep===B.PROBING_COMPLETE){o=!0,t=!1,r=this.manifest.product_name;const{Version:n}=this.pyodide.pyimport("universal_silabs_flasher.common"),i=this.pyFlasher.app_type.value,a=A[i],l=this.manifest.firmwares.find((e=>e.type===a&&n(e.version)>this.pyFlasher.app_version&&!n(e.version).compatible_with(this.pyFlasher.app_version)));let c;l&&(c=s`<mwc-button
          @click=${async()=>{const e=await fetch(l.url),r=await e.arrayBuffer();this.selectedFirmware=await D(this.pyodide,r),this.flashFirmware()}}
        >
          <usf-icon .icon=${g}></usf-icon>
          Upgrade to &nbsp;<strong>${l.version}</strong>
        </mwc-button>`),e=s`
        <p>
          <table>
            <tbody>
              <tr>
                <td><usf-icon .icon=${N}></usf-icon></td>
                <td>${S[i]||"unknown"} ${this.simpleVersion(this.pyFlasher.app_version)}</td>
              </tr>
              <tr>
                <td><usf-icon .icon=${w}></usf-icon></td>
                <td>${this.manifest.product_name}</td>
              </tr>
            </tbody>
          </table>
        </p>

        <div id="firmwareInstallButtons">
          ${c||""}
          <mwc-button @click=${this.selectFirmware}>
            <usf-icon .icon=${y}></usf-icon>
            Change firmware
          </mwc-button>
        </div>`}else this.flashingStep===B.SELECT_FIRMWARE?(r=this.manifest.product_name,e=s`
        <p>Select new firmware to install.</p>

        <firmware-selector
          .pyodide=${this.pyodide}
          .manifest=${this.manifest}
          @firmwareLoaded=${this.onFirmwareLoaded}
        ></firmware-selector>

        ${this.selectedFirmware?s`<p class="firmware-metadata">${this.getFirmwareMetadata()}</p>`:""}

        <mwc-button
          slot="primaryAction"
          @click=${this.flashFirmware}
          .disabled=${!this.selectedFirmware}
        >
          Install
        </mwc-button>
      `):this.flashingStep===B.INSTALLING?(o=!0,n=!1,r="Installing firmware",e=s`
        <p>
          The new firmware is now installing. Do not disconnect the
          ${this.manifest.product_name} or close this browser window.
        </p>
        <p>
          <span class="progress-text"
            >Progress: ${(100*+this.uploadProgress).toFixed(1)}%</span
          >
          <mwc-linear-progress
            .progress=${this.uploadProgress}
            ?indeterminate=${this.uploadProgress<.01}
          ></mwc-linear-progress>
        </p>
      `):this.flashingStep===B.INSTALL_FAILED?(r="Installation failed",e=s`
        <p>
          Firmware installation failed. Unplug your
          ${this.manifest.product_name} and plug it back in to retry.
        </p>

        <mwc-button slot="primaryAction" @click=${this.selectSerialPort}>
          Retry
        </mwc-button>
      `):this.flashingStep===B.DONE&&(r="Installation success",e=s`
        <p>Firmware has been successfully installed.</p>

        <mwc-button slot="primaryAction" @click=${this.detectRunningFirmware}>
          Continue
        </mwc-button>
      `);return s`
      <mwc-dialog
        heading="${this.formatHeadingText(r)}"
        scrimClickAction=""
        escapeKeyAction=""
        ?hideActions=${o}
      >
        ${n?s`
              <usf-icon-button id="closeButton" dialogAction="close">
                <usf-icon .icon=${E}></usf-icon>
              </usf-icon-button>
            `:""}
        ${e}
        ${t?s`
              <mwc-button slot="secondaryAction" @click=${this.showDebugLog}>
                Debug Log
              </mwc-button>
            `:""}
      </mwc-dialog>
    `}};M.styles=e`
    :host {
      --mdc-theme-primary: #03a9f4;
    }

    a {
      color: var(--mdc-theme-primary);
    }

    .metadata {
      font-size: 0.8em;
    }

    img {
      vertical-align: middle;
    }

    #closeButton {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    p.spinner {
      text-align: center;
      font-size: 2em;
    }

    p.firmware-metadata {
      font-size: 0.8em;
      line-height: 1.2;
      overflow: auto;
    }

    span.progress-text {
      font-size: 0.8em;
    }

    mwc-button usf-icon {
      margin-right: 0.2em;
    }

    #firmwareInstallButtons {
      margin-left: -3px;

      text-align: left;
    }

    #firmwareInstallButtons mwc-button {
      display: block;
    }

    #firmwareInstallButtons mwc-button:not(:last-child) {
      margin-bottom: 0.3em;
    }

    .centered {
      text-align: center;
    }

    td usf-icon {
      vertical-align: bottom;
    }

    section.warning {
      background-color: hsl(38, 96%, 90%);

      font-size: 0.9em;

      margin-left: -24px;
      margin-right: -24px;

      padding-left: 24px;
      padding-right: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
    }

    section.warning h2 usf-icon {
      vertical-align: text-bottom;
    }

    section.warning code {
      font-weight: bold;
    }
  `,r([f()],M.prototype,"flashingStep",void 0),r([t()],M.prototype,"pyodide",void 0),r([f()],M.prototype,"pyodideLoadState",void 0),r([t()],M.prototype,"manifest",void 0),r([f()],M.prototype,"selectedFirmware",void 0),r([f()],M.prototype,"serialPort",void 0),r([f()],M.prototype,"uploadProgress",void 0),r([f()],M.prototype,"progressState",void 0),r([l("mwc-dialog")],M.prototype,"mwcDialog",void 0),M=r([n("flashing-dialog")],M);export{M as FlashingDialog};
