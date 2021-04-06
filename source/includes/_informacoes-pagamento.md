# APIs de Informações de Pagamento

## Listagem de Pagamentos#get

Requisição para consultar os dados de pagamentos.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/payments/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/payments/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
```csharp
var client = new RestClient("https://{api_address}/payments/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/payments/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/payments/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Token de acesso
attrs	|String|	Atributos do pagamento
limit	|Number|	Limite de registros
page	|Number|	Página corrente
sort	|String|	Ordenação ex.: [campo]_[asc/desc]

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 39,
        "page": 1,
        "offset": 0,
        "limit": 30,
        "maxLimit": 50
    },
    "sort": [
        {
            "id": "asc"
        }
    ],
    "availableFilters": [
        "id",
        "order_id",
        "created",
        "modified"
    ],
    "appliedFilters": [],
    "Payments": [
        {
            "Payment": {
                "id": "1",
                "order_id": "123",
                "payment_method_id": "12",
                "payment_place": "",
                "value": "50.85",
                "note": "",
                "created": "2016-08-16 16:17:38",
                "modified": "2016-08-16 16:17:38"
            }
        }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
paging	|Object|	Dados de paginação
total	|Number|	Total de registros
page	|Number|	Página corrente
offset	|Number|	Registro inicial da página
limit	|Number|	Limite de registros
maxLimit	|Number|	Máximo de registros
sort	|Object[ ]|	Ordenação
availableFilters	|String[ ]|	Filtros disponíveis
appliedFilters	|String[ ]|	Filtros utilizados
Payments	|Object|	Lista de pagamentos
Payment|	Object|	Dados do pagamento
id	|Number|	Código do pagamento
order_id	|Number|	Código do pedido
payment_method_id	|Number|	Código do meio de pagamento
payment_place	|String|	Local de pagamento
value	|Decimal|	Valor pago
note	|String|	Informações adicionais do pagamento
created	|Date|	Data de criação
modified	|Date|	Data de modificação

## Consultar Dados de Pagamento#get

Requisição para consultar os dados de um pagamento do pedido.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/payments/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/payments/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
```csharp
var client = new RestClient("https://{api_address}/payments/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/payments/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/payments/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pagamento

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "Payment": {
        "id": "1",
        "order_id": "123",
        "payment_method_id": "12",
        "method": "Boleto Bancário",
        "payment_place": "",
        "value": "50.85",
        "date": "2016-08-15",
        "note": "",
        "created": "2016-08-16 16:17:38",
        "modified": "2016-08-16 16:17:38"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Payment	|Object|	Dados do pagamento
id	|Number|	Código do pagamento
order_id	|Number|	Código do pedido
payment_method_id	|Number|	Código do meio de pagamento
method	|String|	Descrição do meio de pagamento
payment_place	|String|	Local de pagamento
value	|Decimal|	Valor pago
date	|Date|	Data do pagamento
note	|String|	Informações adicionais do pagamento
created	|Date|	Data de criação
modified	|Date|	Data de modificação

## Cadastrar pagamento#post

requisição para cadastro de um pagamento do pedido. deverá enviar o json com os dados do pagamento para o cadastro.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/payments/?access_token={{access_token}}' \
--data-urlencode '["payment"]["order_id"]=123' \
--data-urlencode '["payment"]["method"]=cartão de crédito' \
--data-urlencode '["payment"]["value"]=50.90' \
--data-urlencode '["payment"]["date"]=2021-04-05' \
--data-urlencode '["payment"]["note"]=pagamento realizado com sucesso'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/payments/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["payment"]["order_id"]' => '123',
  '["payment"]["method"]' => 'cartão de crédito',
  '["payment"]["value"]' => '50.90',
  '["payment"]["date"]' => '2021-04-05',
  '["payment"]["note"]' => 'pagamento realizado com sucesso'
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
```csharp
var client = new RestClient("https://{api_address}/payments/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"payment\"][\"order_id\"]", "123");
request.AddParameter("[\"payment\"][\"method\"]", "cartão de crédito");
request.AddParameter("[\"payment\"][\"value\"]", "50.90");
request.AddParameter("[\"payment\"][\"date\"]", "2021-04-05");
request.AddParameter("[\"payment\"][\"note\"]", "pagamento realizado com sucesso");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"payment\"][\"order_id\"]=123&[\"payment\"][\"method\"]=cartão de crédito&[\"payment\"][\"value\"]=50.90&[\"payment\"][\"date\"]=2021-04-05&[\"payment\"][\"note\"]=pagamento realizado com sucesso");
Request request = new Request.Builder()
  .url("https://{api_address}/payments/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "payment": {
        "order_id": "123", 
        "method": "cartão de crédito", 
        "value": "50.85",
        "date": "2016-08-15"
        "note": "pagamento realizado com sucesso"
    }
}
</pre>

### Método POST
`https://{api_address}/payments/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|string|	chave de acesso
payment	|json|	dados do pagamento
order_id	|number|	código do pedido
method	|string|	descrição da forma de pagamento
value	|decimal|	valor pago
date	|date|	data do pagamento
note	|string|	informações adicionais do pagamento

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
id	|Number|	Código do pagamento
code	|Number|	Código do retorno (201)

## atualizar dados de pagamento#put

requisição para alterar os dados de pagamento de um pedido. deverá enviar o json com os dados do pagamento para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/payments/:id?access_token={{access_token}}' \
--data-urlencode '["payment"]["order_id"]=123' \
--data-urlencode '["payment"]["method"]=cartão de crédito' \
--data-urlencode '["payment"]["value"]=50.90' \
--data-urlencode '["payment"]["date"]=2021-04-05' \
--data-urlencode '["payment"]["note"]=pagamento realizado com sucesso'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/payments/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["payment"]["order_id"]' => '123',
  '["payment"]["method"]' => 'cartão de crédito',
  '["payment"]["value"]' => '50.90',
  '["payment"]["date"]' => '2021-04-05',
  '["payment"]["note"]' => 'pagamento realizado com sucesso'
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
```csharp
var client = new RestClient("https://{api_address}/payments/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"payment\"][\"order_id\"]", "123");
request.AddParameter("[\"payment\"][\"method\"]", "cartão de crédito");
request.AddParameter("[\"payment\"][\"value\"]", "50.90");
request.AddParameter("[\"payment\"][\"date\"]", "2021-04-05");
request.AddParameter("[\"payment\"][\"note\"]", "pagamento realizado com sucesso");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"payment\"][\"order_id\"]=123&[\"payment\"][\"method\"]=cartão de crédito&[\"payment\"][\"value\"]=50.90&[\"payment\"][\"date\"]=2021-04-05&[\"payment\"][\"note\"]=pagamento realizado com sucesso");
Request request = new Request.Builder()
  .url("https://{api_address}/payments/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "payment": {
        "order_id": "123", 
        "method": "cartão de crédito", 
        "value": "50.85",
        "date": "2016-08-15"
        "note": "pagamento realizado com sucesso"
    }
}
</pre>

### Método PUT
`https://{api_address}/payments/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|string|	chave de acesso
:id	|number|	código do pagamento
payment	|json|	dados do pagamento
order_id	|number|	código do pedido
method	|string|	descrição da forma de pagamento
value	|decimal|	valor pago
date	|date|	data do pagamento
note	|string|	informações adicionais do pagamento

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "saved",
    "id": "123",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do pagamento
code	|Number|	Código do retorno (200)

## Excluir pagamento#delete

requisição para excluir um pagamento do pedido.

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/payments/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/payments/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_DELETE);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
```csharp
var client = new RestClient("https://{api_address}/payments/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.DELETE);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://{api_address}/payments/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/payments/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pagamento

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "deleted",
    "id": "123",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do pagamento
code	|Number|	Código do retorno (200)

## Opções de pagamentos#get

requisição para consultar as opções de pagamentos para um carrinho de compra / pedido.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/payments/options?access_token={{access_token}}&order_id=123'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/payments/options?access_token={{access_token}}&order_id=123');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
```csharp
var client = new RestClient("https://{api_address}/payments/options?access_token={{access_token}}&order_id=123");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/payments/options?access_token={{access_token}}&order_id=123")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/payments/options?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|string|	token de acesso
cart_session_id	|string|	código da sessão do carrinho
order_id	|number|	código do pedido

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
   "paymentoptions":[
        {
         "id":"1",
         "integrator_id":"123",
         "facilitator_id":"",
         "name":"cartão de crédito",
         "image":"pag_cartacredito.png",
         "thumbnail":"pag_peqcartacredito.png",
         "additional":"0",
         "min_splot":"12",
         "max_splot":"0",
         "application_value":"1",
         "integration_code":"3",
         "facilitator":"0",
         "text":"cartão de crédito",
         "text_pag":"cartão de crédito",
         "finalize_action":"",
         "card":"1",
         "discount_value":"50.85",
         "increase_value":"0",
         "plots":{
            "1":{
               "value":"50.85",
               "interest":"0",
               "interest_value":"0",
               "discount_value":"0",
               "base_value":"50.85",
               "order_total":"5"
            }
         },
         "increase":"1",
         "display_increase":"1",
         "deactivate":"1",
         "total_base":"50.85",
         "tax_value":"0.00",
         "is_intermediator":"1",
         "interest_formula":"price",
         "equivalent":[
            "4",
            "2",
            "5",
            "16",
            "18"
        ]
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
paymentoptions	|object[ ]|	lista de opções de pagamento
id	|number|	código da opção de pagamento
integrator_id	|number|	código do integrador
facilitator_id	|number|	código do facilitador
name	|string|	nome
image	|string|	imagem
thumbnail	|string|	ícone
additional	|number|	informações adicionais
min_splot	|number|	número máximo de parcelas
max_splot	|number|	número mínimo de parcelas
application_value	|decimal|	valor de
integration_code	|number|	referência do integrador
facilitator	|number|	facilitador (veja tabela a)
text	|string|	texto
text_pag	|string|	texto do pagamaento
finalize_action	|string|	ação de finalização
card	|number|	cartão de crédito (veja tabela b)
discount_value	|decimal|	valor de desconto
increase_value	|decimal|	valor adicional
plots	|object|	parcelamentos
:id	|number|	código da parcelamento
value	|decimal|	valor de parcelamento
interest	|number|	informações de acréscimo / taxa
interest_value	|decimal|	valor de acréscimo / taxa
discount_value	|decimal|	valor de desconto
base_value	|decimal|	valor base
order_total	|decimal|	valor total
increase	|number|	acréscimo no pagamento (veja tabela c)
display_increase	|number|	exibir valor de acréscimo (veja tabela d)
deactivate	|number|	opção de pagamento desativada (veja tabela e)
total_base	|decimal|	valor total base
tax_value	|decimal|	valor da taxa
is_intermediator	|number|	intermediador de pagamento (veja tabela f)
interest_formula	|string|	formulá do calculo de acréscimo
equivalent	|number[ ]|	opções de pagamento equivalentes

## Configurações de pagamento#get

requisição para consultar as configurações da forma de pagamentos para um carrinho de compra / pedido.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/payments/methods/settings/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/payments/methods/settings/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```
```csharp
var client = new RestClient("https://{api_address}/payments/methods/settings/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/payments/methods/settings/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/payments/methods/settings/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da forma de pagamento

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "settings": {
        "sub_store": "nome da loja",
        "reseller_token": "123abc456def789",
        "seller_code": "123abc456def7890123abc456def7890",
        "secure_url": "https://loja.commercesuite.com.br"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
settings	|object|	dados da configuração da forma de pagamento
sub_store	|string|	nome da loja
reseller_token	|string|	token de revendedor
seller_code	|string|	token de vendedor
secure_url	|string|	url de ambiente seguro da loja

### Tabelas Auxiliares de Pagamentos

### Tabela A - Identificar se é um facilitador (campo facilitator)
Valor|Descrição
-----|---------
0|Não é um facilitador
1|É um facilitador

### Tabela B - Disponibilidade de cartão de crédito (campo card)
Valor|Descrição
-----|---------
0|Pagamento sem cartão de crédito
1|Pagamento com cartão de crédito

### Tabela C - Produto com frete grátis (campo free_shipping)
Valor|Descrição
-----|---------
0|Pagamento sem acréscimo
1|Pagamento com acréscimo

### Tabela D - Lançamento de produto (campo release)
Valor|Descrição
-----|---------
0|Ocultar valor de acréscimo
1|Exibir valor de acréscimo

### Tabela E - Produto em destaque (campo hot)
Valor|Descrição
-----|---------
0|Pagamento ativo
1|Pagamento desativado

### Tabela F - Produto com variação (campo has_variation)
Valor|Descrição
-----|---------
0|Não é um intermediador de pagamento
1|É um intermediador de pagamento