FROM nginx:1.21 as builder

RUN apt-get update -y && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

FROM nginx:1.21-alpine

COPY --from=builder /usr/bin/wait-for /usr/bin

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d