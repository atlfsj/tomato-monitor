rm -rf dist &&
yarn build &&
git add . &&
git commit -m "换视频，修改进度条" &&
git push -u origin new 
# echo https://atlfsj.github.io/tomato-monitor/dist/index.html
