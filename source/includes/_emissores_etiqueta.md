# API de Emissores de Etiqueta

## Criando a Etiqueta#post

Requisição para criar a etiqueta

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
id	|Number|	Código da etiqueta
code	|Number|	Código do retorno (201)

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
id	|Number|	Código da etiqueta
code	|Number|	Código do retorno (201)