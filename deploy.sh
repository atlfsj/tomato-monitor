rm -rf dist &&
yarn build &&
git add . &&
git commit -m "后端部署到服务器" &&
git push -u origin new 
# echo https://atlfsj.github.io/tomato-monitor/dist/index.html
