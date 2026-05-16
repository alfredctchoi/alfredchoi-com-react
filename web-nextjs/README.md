# web-nextjs

Personal portfolio site for [alfredchoi.com](https://www.alfredchoi.com). Built with Next.js (App Router), TypeScript, and Tailwind CSS. Exported as a fully static site and deployed to AWS S3 + CloudFront.

## Development

```bash
npm run dev       # dev server on http://localhost:3010
npm run build     # production build (static export to out/)
npm run lint      # ESLint
```

## Deploy

Requires the [AWS CLI](https://aws.amazon.com/cli/) configured with a `personal` profile that has access to the S3 bucket and CloudFront distribution.

```bash
aws sso login --profile personal
CLOUDFRONT_DISTRIBUTION_ID=<id> ./scripts/deploy.sh
```

This will:
1. Build the project (`npm run build`)
2. Sync the `out/` directory to `s3://www.alfredchoi.com`
3. Invalidate the CloudFront cache
