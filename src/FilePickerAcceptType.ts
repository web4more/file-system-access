export default interface FilePickerAcceptType {
  description?: string;
  accept?: Record<string, string | Iterable<string>>;
}
