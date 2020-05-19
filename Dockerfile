FROM node:10.0

# 在容器中创建一个目录
RUN mkdir -p /home/project

# 定位到容器的工作目录
WORKDIR /home/project

COPY package*.json ./

RUN npm install --registry=https://registry.npm.taobao.org

COPY . ./

EXPOSE 3002
CMD npm start