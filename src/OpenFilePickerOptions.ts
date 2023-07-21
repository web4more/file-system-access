import type FilePickerOptions from "./FilePickerOptions.js";

export default interface OpenFilePickerOptions extends FilePickerOptions {
  multiple?: boolean;
}
