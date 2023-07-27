export default function loadBalancer(chinaDownload, USDownload) {
  const data = Promise.any([chinaDownload, USDownload]).then((value) => value);
  return data;
}
