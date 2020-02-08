aws s3 rm s3://www.alfredchoi.com --recursive
aws s3 cp ./build/ s3://www.alfredchoi.com --recursive --acl public-read  --exclude ".htaccess"