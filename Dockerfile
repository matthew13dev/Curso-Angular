FROM ubuntu:22.04

RUN apt-get update

RUN curl -fsSL https://fnm.vercel.app/install | bash
RUN fnm use --install-if-missing 20
RUN node -v
RUN  npm -v # should print `10.7.0`

RUN npm install -g angular-cli@14.2

WORKDIR /meu-primeiro-angular
COPY . /meu-primeiro-angular/

EXPOSE 4200

CMD [ "ng", "serve" ]
