import { AsyncFileDialog, FileHandle } from "@bindrs/rfd";
import FileSystemFileHandle, {
  key,
} from "@webfill/fs/FileSystemFileHandle-node.js";
import type OpenFilePickerOptions from "./OpenFilePickerOptions.js";

export default async function showOpenFilePicker(
  options: OpenFilePickerOptions = {}
): Promise<FileSystemFileHandle[]> {
  const { multiple = false, excludeAcceptAllOption = false } = options;

  const builder = await new AsyncFileDialog();

  if (!excludeAcceptAllOption) {
    builder.addFilter("All Files", ["*"]);
  }

  let fileHandles: FileHandle[] | null;
  if (multiple) {
    fileHandles = builder.pickFiles();
  } else {
    const x = builder.pickFile();
    fileHandles = x && [x];
  }
  if (!fileHandles) {
    throw new DOMException("The user closed the dialog", "AbortError");
  }

  return (
    await Promise.allSettled(
      fileHandles.map((x) => new FileSystemFileHandle(key, x))
    )
  )
    .filter(
      (x): x is PromiseFulfilledResult<FileSystemFileHandle> =>
        x.status === "fulfilled"
    )
    .map((x) => x.value);
}
