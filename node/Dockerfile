FROM node:16 as builder

WORKDIR /var/www

COPY . .

RUN apt-get update -y && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for && \
    npm install

FROM node:16.0-alpine

COPY --from=builder /usr/bin/wait-for /usr/bin

WORKDIR /var/www

COPY --from=builder /var/www .

EXPOSE 8080

ENTRYPOINT [ "node" ,"index.js" ]