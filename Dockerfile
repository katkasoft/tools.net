FROM golang

EXPOSE 80

COPY . /src/tools.net

WORKDIR /src/tools.net

CMD ["go", "run", "."]

