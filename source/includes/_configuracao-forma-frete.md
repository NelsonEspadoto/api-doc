# API de Configuração de Forma de Frete

## Criação de forma de envio com integração externa#post

Ao clicar no pedido para gerar a etiqueta, iremos abrir um IFRAME do aplicativo, onde deverá conter neste iframe a opção de [imprimir a etiqueta](?shell#api-de-emissores-de-etiqueta).

Dessa forma o aplicativo deverá cadastrar na loja a URL que deverá ser chamada para abrir o iframe.

<aside class="warning">OBS: é apenas uma URL para a loja toda.</aside>

> Estrutura do Json:

<pre>
{
    "Shipping": {
        "active": "1",
        "name": "Gateway Teste",
        "product_rate": "4",
        "additional_order": "7",
        "shipping_rate": "9",
        "type": "6",
        "customer_message": "Oi",
        "settings": {
            "url": "www.gatewayteste.com.br",
            "token": "abc123def4567"
        }
    }
}
</pre>

### Método POST
`https://{api_address}/shippings/method/gateway?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "2659",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da tabela
code	|Number|	Código do retorno (201)

## Alteração da forma de envio com integração externa pelo ID#put

> Estrutura do Json:

<pre>
{
    "Shipping": {
        "name": "Tabela de CEP Teste",
        "active": 1,
        "product_rate": "10",
        "additional_order": "12",
        "delivery_days": {
            "min": "7",
            "max": "12"
        },
        "customer_message": "Teste",
        "store_display": 1,
        "cart_display": 0,
        "payment_display": 1
    }
}
</pre>

### Método PUT
`https://{api_address}/shippings/method/gateway/:id?access_token?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da tabela

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Saved",
    "id": "123",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da etiqueta
code	|Number|	Código do retorno (200)

## Exclusão da forma de envio com integração externa pelo ID#delete

### Método DELETE
`https://{api_address}/shippings/method/gateway/:id?access_token?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da tabela

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Deleted",
    "id": "123",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da etiqueta
code	|Number|	Código do retorno (201)

## Criação de tabela de CEP#post

> Estrutura do Json:

<pre>
{
    "Shipping": {
        "name": "Tabela de CEP Teste",
        "active": 1,
        "product_rate": "10",
        "additional_order": "12",
        "delivery_days": {
            "min": "7",
            "max": "12"
        },
        "customer_message": "Teste",
        "store_display": 1,
        "cart_display": 0,
        "payment_display": 1
    }
}
</pre>

### Método POST
`https://{api_address}/shippings/method/zipcode_table?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pedido

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "123",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da tabela
code	|Number|	Código do retorno (201)

## Alteração de tabela de CEP pelo ID#put

> Estrutura do Json:

<pre>
{
    "Shipping": {
        "name": "Tabela de CEP Teste",
        "active": 1,
        "product_rate": "10",
        "additional_order": "12",
        "delivery_days": {
            "min": "7",
            "max": "12"
        },
        "customer_message": "Teste",
        "store_display": 1,
        "cart_display": 0,
        "payment_display": 1
    }
}
</pre>

### Método PUT
`https://{api_address}/shippings/method/zipcode_table/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da tabela

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Saved",
    "id": "123",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da etiqueta
code	|Number|	Código do retorno (200)

## Exclusão de tabela de CEP pelo ID#delete

### Método DELETE
`https://{api_address}/shippings/method/zipcode_table/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da tabela

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Deleted",
    "id": "123",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da etiqueta
code	|Number|	Código do retorno (200)