export const svg2img = (id: string) => {
  const svg = document.getElementById(id);
  const xml = new XMLSerializer().serializeToString(svg as Node);
  const svg64 = btoa(xml);
  const b64start = "data:image/svg+xml;base64,";
  const image64 = b64start + svg64;

  return image64;
};
