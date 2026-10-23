# Sysgrano

Landing page do app Sysgrano: https://sysgrano.app

## Executar com Docker

Requisitos: Docker Engine com o plugin Docker Compose.

Na raiz do projeto, construa a imagem e inicie o serviço:

```bash
docker compose up -d --build
```

A aplicação ficará disponível em `http://127.0.0.1:3030`. A porta é vinculada
ao loopback para que, em uma VPS, o Nginx possa atuar como proxy reverso sem
expor diretamente a porta da aplicação à internet.

Para acompanhar os logs:

```bash
docker compose logs -f sysgrano
```

Para parar o serviço:

```bash
docker compose down
```

Para usar outra porta local, crie um arquivo `.env` com `APP_PORT=3031` e
reinicie o serviço. Nesse caso, ajuste também o `proxy_pass` do Nginx para
`http://127.0.0.1:3031`.

Exemplo de configuração do Nginx para a VPS:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name sysgrano.app www.sysgrano.app;

    location / {
        proxy_pass http://127.0.0.1:3030;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Configure HTTPS no Nginx com Certbot e permita as portas 80 e 443 no firewall
da VPS. Não exponha a porta 3030 publicamente.
