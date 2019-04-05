import Resource from "../models/Resource";

export function addStaticResource(
  filename: string,
  buffer: Uint8Array
): Resource {
  const extenstion = parseExtension(filename);
  const resource = new Resource(buffer, extenstion);
  resource.persistResource();
  return resource;
}

function parseExtension(filename: string): string {
  const dotIndex = filename.lastIndexOf(".");
  if (dotIndex === -1) {
    throw new TypeError("unknown extension");
  }

  return filename.substr(dotIndex + 1);
}
