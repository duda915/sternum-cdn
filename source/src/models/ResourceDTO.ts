import ResourceType from "./ResourceTypes";

class ResourceDTO {
  private _resourceType: ResourceType;
  private _extension: string;

  constructor(resourceType: ResourceType, extension: string) {
    this._resourceType = resourceType;
    this._extension = extension;
  }

  get resourceType() {
    return this._resourceType;
  }

  get extension() {
    return this._extension;
  }
}
