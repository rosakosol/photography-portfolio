// src/photos.js
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function imageLink(path, width, height, size, extension) {
  return `https://images.react-photo-album.com/hiking/${path}.${width}x${height}.${size}w.${extension}`;
}

const photos = [
  { src: "image01.0822d131.2400x1734.jpg", alt: "Hiking boots", title: "Whispers of the Forest", 
    description: "Captured in the Blue Mountains, 2023" },
  { src: "image02.7561b5a4.2400x3600.jpg", alt: "Purple petaled flowers near a mountain" },
  { src: "image03.334d8e07.2400x1600.jpg", alt: "A person pointing at a beige map" },
  // ... (other photos)
].map(({ src, ...rest }) => {
  const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/);
  const path = matcher[1];
  const width = parseInt(matcher[2], 10);
  const height = parseInt(matcher[3], 10);
  const extension = matcher[4];

  return {
    src: imageLink(path, width, height, width, extension),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: imageLink(path, width, height, breakpoint, extension),
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
    ...rest,
  };
});

export default photos;
