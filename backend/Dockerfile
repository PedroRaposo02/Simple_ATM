# backend/Dockerfile

FROM golang:1.23.0-alpine3.20 as builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download
RUN go mod vendor

COPY . .

RUN go build -o main .


# Create final lightweight image
FROM alpine:edge

WORKDIR /root/

COPY --from=builder /app/main .

EXPOSE 8080

CMD ["./main"]
