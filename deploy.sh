rm -rf dist &&
yarn build &&
git add . &&
git commit -m "解决Mixed Content问题" &&
git push -u origin new 
# echo https://atlfsj.github.io/tomato-monitor/dist/index.html
