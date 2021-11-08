FROM fusuf/whatsasena:latest

RUN git clone https://github.com/AshenNethsara/MalSara /root/MalSara
WORKDIR /root/MalSara/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
