rm -rf dist &&
yarn build &&
git add . &&
git commit -m "初步部署" &&
git push -u origin new 
# echo https://atlfsj.github.io/tomato-monitor/dist/index.html