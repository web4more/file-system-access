import type FilePickerAcceptType from "./FilePickerAcceptType.js";
import type StartInDirectory from "./StartInDirectory.js";

export default interface FilePickerOptions {
  types?: Iterable<FilePickerAcceptType>;
  excludeAcceptAllOption?: boolean;
  id?: string;
  startIn?: StartInDirectory;
}
