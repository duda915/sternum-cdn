import UUID from "uuid";
import ResourceType from "./ResourceTypes";

class Resource {
  private _resourceType: ResourceType;
  private _resourceName: string;
  private _resource: Uint8Array;

  constructor(
    resourceType: ResourceType,
    resource: Uint8Array,
    extension: string
  ) {
    this._resourceType = resourceType;
    this._resource = resource;
    this._resourceName = `${UUID.v4().toString()}.${extension}`;
  }

  get resourceType(): ResourceType {
    return this._resourceType;
  }

  get resource(): Uint8Array {
    return this._resource;
  }

  get resourceName(): string {
    return this._resourceName;
  }
}

export default Resource;
