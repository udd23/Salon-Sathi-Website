import sharp from "sharp";

const input = "public/salonsathi-logo.png";
const output = "public/salonsathi-logo-transparent.png";
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const seen = new Uint8Array(width * height);
const queue = new Int32Array(width * height);
let read = 0;
let write = 0;

function isBackground(pixel) {
  const i = pixel * channels;
  return data[i] >= 235 && data[i + 1] >= 235 && data[i + 2] >= 235;
}
function add(pixel) {
  if (!seen[pixel] && isBackground(pixel)) {
    seen[pixel] = 1;
    queue[write++] = pixel;
  }
}

for (let x = 0; x < width; x++) { add(x); add((height - 1) * width + x); }
for (let y = 0; y < height; y++) { add(y * width); add(y * width + width - 1); }

while (read < write) {
  const pixel = queue[read++];
  const x = pixel % width;
  const y = (pixel - x) / width;
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    if (!dx && !dy) continue;
    const nx = x + dx, ny = y + dy;
    if (nx >= 0 && nx < width && ny >= 0 && ny < height) add(ny * width + nx);
  }
}

for (let pixel = 0; pixel < seen.length; pixel++) {
  if (!seen[pixel]) continue;
  const i = pixel * channels;
  const alpha = Math.max(0, 255 - Math.min(data[i], data[i + 1], data[i + 2]));
  if (alpha < 255) {
    for (let c = 0; c < 3; c++) data[i + c] = alpha === 0 ? 255 : Math.min(255, Math.round((data[i + c] - 255 + alpha * 255) / alpha));
  }
  data[i + 3] = alpha;
}

await sharp(data, { raw: { width, height, channels } }).png().toFile(output);
console.log(`Saved ${output}; removed ${write} connected background pixels.`);
