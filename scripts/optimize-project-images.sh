#!/bin/sh
# Requires cwebp. Keep source PNGs for future exports.
set -eu
find public/images/projects -name '*.png' -type f | while IFS= read -r source; do
  cwebp -quiet -q 82 -m 6 -resize 1600 0 "$source" -o "${source%.png}.webp"
done
