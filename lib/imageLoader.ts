"use client";

export default function imageLoader({
  src,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  // For local development
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return src;
  }
  // For GitHub Pages deployment
  return `/portfolio${src}`;
}
