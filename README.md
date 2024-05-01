# init project

1. npm create vite@latest
    > my-card + vue + ts

2. add router
    > npm install vue-router@4

   main.js使用对应代码

3. npm install @types/node --save-dev
   
   防止ts使用node时报错

4. 设置 @
   vite.config.ts 中添加
   > alias: [
   {
   find: '@',
   replacement: path.resolve(__dirname, 'src')
   }
   ]

   tsconfig.json 中添加
   >"paths": {
   "@/*": ["./src/*"]
   },

5. npm install eslint eslint-plugin-vue @vue/eslint-config-typescript @vue/eslint-config-prettier --save-dev
   添加 .eslintrc.cjs 文件

6. 添加scss
   > npm install -D sass
   
7. 添加 .prettierrc.json

8. 添加mock
   > npm install mockjs vite-plugin-mock
   > 在vite.config.js 里加配置
   > 在main.ts里引入

9. 使用组件库
   > npm i -D naive-ui

10. 使用xicons ,这里选择了ionicons5  https://xicons.org/#/
   > npm install @vicons/ionicons5 --save

11. 配置字体 npm i -D vfonts

