
export function getInputFileAsBase64(file, onLoad) {
  const reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = onLoad && (() => onLoad(reader.result));
}