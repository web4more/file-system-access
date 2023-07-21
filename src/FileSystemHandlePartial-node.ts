import FileSystemHandle_ from "@webfill/fs/FileSystemHandle-node.js";

interface FileSystemHandle extends FileSystemHandle_ {
  queryPermission(): Promise<void>;
  requestPermission(): Promise<void>;
}
const FileSystemHandle = {
  prototype: {
    async queryPermission() {},
    async requestPermission() {},
  },
};
export default FileSystemHandle;
