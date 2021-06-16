#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build

# 进入生成的文件夹
cd build/packages/

rm -rf *

cd ../../

cd packages
# cp -rf packages /build/
cp -rf * ../build/packages/ 

cd ..

cd build

npm run build
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

cd -