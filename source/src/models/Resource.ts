import fs from "fs";
import path from "path";
import UUID from "uuid";
import { dataDir } from "../filesystem/directorysetup";

class Resource {
  private _resourceName: string;
  private _buffer: Uint8Array;
  private _resourceURL: string = null;

  constructor(buffer: Uint8Array, extension: string) {
    this._buffer = buffer;
    this._resourceName = `${UUID.v4().toString()}.${extension}`;
  }

  get buffer(): Uint8Array {
    return this._buffer;
  }

  get resourceName(): string {
    return this._resourceName;
  }

  get isResourcePersisted(): boolean {
    return this._resourceURL !== null;
  }

  get resourceURL(): string {
    return this._resourceURL;
  }

  public persistResource() {
    fs.writeFileSync(this.getTargetPhysicalPath(), this._buffer);
    this._resourceURL = this.buildResourceURL();
  }

  public getTargetPhysicalPath(): string {
    return path.join(dataDir, this._resourceName);
  }

  private buildResourceURL(): string {
    return path.join("/static", this._resourceName);
  }
}

export default Resource;
