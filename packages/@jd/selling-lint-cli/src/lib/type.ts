interface FlatJson {
  [key: string]: string;
}

export interface PackageJson {
  name: string,
  version: string,
  dependencies: FlatJson,
  devDependencies: FlatJson
}
