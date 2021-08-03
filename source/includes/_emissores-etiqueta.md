# API de Emissores de Etiqueta

## Cadastrando a URL da Etiqueta#post

Requisição para cadastrar a url da etiqueta

<aside class="notice">OBS: somente é possivel ter 1 aplicativo para impressão de etiqueta por pedido.</aside>

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

<aside class="notice">OBS: Neste momento a impressão da etiqueta é somente via ADM, sendo aberto o IFRAME.</aside>

## Vinculando a URL da Etiqueta no Pedido#post

Requisição para vincular a url da etiqueta no pedido.

Nos pedidos que o aplicativo deseja realizar a impressão da etiqueta, deverá ser "marcado" o pedido, devendo apenas realizar a requisição, passando o ID do pedido.

> Estrutura do Json:

<pre>
{
    Não é enviado dado algum, apenas feito a requisição.
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


Após criar a URL e Vincular ao Pedido, poderá ser recuperado os dados enviado na URL, na [API de Pedidos](#dados-completo-do-pedido-get)

<aside class="success">
OBS: O formato e o layout da etiqueta, fica por conta do aplicativo de impressão.
</aside>

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