#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
S3_BUCKET="s3://www.alfredchoi.com"
OUT_DIR="$PROJECT_DIR/out"

if [[ -z "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  echo "Error: CLOUDFRONT_DISTRIBUTION_ID env variable is not set." >&2
  exit 1
fi

echo "==> Building..."
cd "$PROJECT_DIR"
npm run build

if [[ ! -d "$OUT_DIR" ]]; then
  echo "Error: Build output directory not found at $OUT_DIR" >&2
  exit 1
fi

echo "==> Uploading to S3..."
aws s3 sync "$OUT_DIR" "$S3_BUCKET" --delete --profile personal

echo "==> Invalidating CloudFront cache..."
aws cloudfront create-invalidation --profile personal \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/*"

echo "==> Done."
