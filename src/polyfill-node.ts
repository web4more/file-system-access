import "@webfill/fs/polyfill-node.js";
import FileSystemHandlePartial from "./FileSystemHandlePartial-node.js";
import showOpenFilePicker_ from "./showOpenFilePicker-node.js";
import type FilePickerAcceptType_ from "./FilePickerAcceptType.js";
import type FilePickerOptions_ from "./FilePickerOptions.js";
import type OpenFilePickerOptions_ from "./OpenFilePickerOptions.js";
import type WellKnownDirectory_ from "./WellKnownDirectory.js";

declare global {
  interface FileSystemHandle {
    queryPermission(): Promise<void>;
    requestPermission(): Promise<void>;
  }
  var showOpenFilePicker: typeof showOpenFilePicker_;
  type FilePickerAcceptType = FilePickerAcceptType_;
  type FilePickerOptions = FilePickerOptions_;
  type OpenFilePickerOptions = OpenFilePickerOptions_;
  type WellKnownDirectory = WellKnownDirectory_;
}

const s: any = Object.getOwnPropertyDescriptors(FileSystemHandlePartial);
delete s.prototype;
delete s.name;
delete s.length;
Object.defineProperties(FileSystemHandle, s);

const p: any = Object.getOwnPropertyDescriptors(
  FileSystemHandlePartial.prototype
);
delete p.constructor;
delete p[Symbol.toStringTag];
Object.defineProperties(FileSystemHandle.prototype, p);

globalThis.showOpenFilePicker = showOpenFilePicker;
