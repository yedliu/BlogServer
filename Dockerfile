FROM node:10.0

# 在容器中创建一个目录
RUN mkdir -p /home/project

# 定位到容器的工作目录
WORKDIR /home/project

# RUN/COPY 是分层的，package.json 提前，只要没修改，就不会重新安装包
COPY package.json /home/project/package.json
RUN cd /home/project
RUN npm i

# 把当前目录下的所有文件拷贝到 Image 的 /usr/src/nodejs/ 目录下
COPY . /home/project

EXPOSE 3002
CMD npm start