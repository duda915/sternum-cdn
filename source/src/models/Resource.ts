import ResourceType from "./ResourceTypes";

class Resource {
  private _resourceType: ResourceType;
  private _resource: Int8Array;

  constructor(resourceType: ResourceType, resource: Int8Array) {
    this._resourceType = resourceType;
    this._resource = resource;
  }

  get resourceType(): ResourceType {
    return this._resourceType;
  }

  get resource(): Int8Array {
    return this._resource;
  }
}
