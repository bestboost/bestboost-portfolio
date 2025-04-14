export const cacheImages = (req, res, next) => {
  const maxAgeSeconds = 60 * 60 * 24 * 30; // 30 днів

  res.setHeader("Cache-Control", `public, max-age=${maxAgeSeconds}`);
  res.setHeader(
    "Expires",
    new Date(Date.now() + maxAgeSeconds * 1000).toUTCString()
  );

  next();
};
