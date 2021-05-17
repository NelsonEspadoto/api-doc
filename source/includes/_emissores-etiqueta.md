# API de Emissores de Etiqueta

## Criando a Etiqueta#post

Requisição para criar a etiqueta

Nos pedidos que o aplicativo deseja realizar a impressão da etiqueta, deverá ser "marcado" o pedido.

<aside class="success">OBS: somente é possivel ter 1 aplicativo para impressão de etiqueta por pedido.</aside>

> Estrutura do Json:

<pre>
{
    "ShippingLabel": {
        "configuration_url" : "www.urldoadeemissaodeetiquetadoaplicativo.com"
    }
}
</pre>

### Método POST
`https://{api_address}/shipping_labels?access_token={{access_token}}`

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

<aside class="warning">Obs. Neste momento a impressão da etiqueta é somente via ADM, sendo aberto o IFRAME.</aside>

## Criando a URL da Etiqueta#post

Requisição para criar a url da etiqueta

> Estrutura do Json:

<pre>
{
    "ShippingLabel": {
        "name": "Nome",
        "configuration_url" : "www.urldoadeemissaodeetiquetadoaplicativo.com"
    }
}
</pre>

### Método POST
`https://{api_address}/orders/{:id}/shipping_label?access_token={{access_token}}`

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

## Excluindo a URL da Etiqueta#delete

Requisição para excluir a url da etiqueta

### Método DELETE
`https://{api_address}/orders/{:id}/shipping_label?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pedido

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
id	|Number|	Código da tabela
code	|Number|	Código do retorno (200)