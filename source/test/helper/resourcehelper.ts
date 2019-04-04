import { TextEncoder } from "util";
import Resource from "../../src/models/Resource";
import ResourceType from "../../src/models/ResourceTypes";

export function createTestResource(): Resource {
  const textEncoder = new TextEncoder();
  const resource = new Resource(ResourceType.File, textEncoder.encode("test"));
  return resource;
}
