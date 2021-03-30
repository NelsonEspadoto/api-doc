# API de Status do Pedido

## Listagem de Status#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/orders/statuses?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/statuses?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/orders/statuses?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/orders/statuses?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/orders/statuses?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
attrs	|Number|	Atributos do status
limit	|Number|	Limite de registros
page	|Number|	Página corrente
sort	|String|	Ordenação ex.: [campo]_[asc/desc]

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 6,
        "page": 1,
        "offset": 0,
        "limit": 1,
        "maxLimit": 50
    },
    "sort": [
        {
            "id": "desc"
        }
    ],
    "availableFilters": [],
    "appliedFilters": [],
    "OrderStatuses": [
        {
            "OrderStatus": {
                "status": "ENVIADO",
                "id": "1",
                "show_backoffice": "1"
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
OrderStatuses	|Object[ ]|	Lista de produtos
OrderStatus	|Object|	Dados do status
id	|Number|	Código do status
status	|String|	Nome do status
show_backoffice	|Number|	Exibir na área administrativa

## Consultar Dados do Status#get

Requisição para a consulta de dados de um status de pedidos.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/orders/statuses/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/statuses/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/orders/statuses/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/orders/statuses/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/orders/statuses/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do status

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "OrderStatus":{
        "status":"ENVIADO",
        "id":"1",
        "default":"1"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
OrderStatus	|Object|	Dados do status
id	|Number|	Código do status
status	|String|	Nome do status
default	|Number|	Status padrão (Veja Tabela A)

## Cadastrar Status#post

Requisição para inclusão de um novo status de pedidos. Deverá enviar o JSON com os dados do status para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/orders/statuses?access_token={{access_token}}' \
--data-urlencode '["OrderStatus"]["status"]=NOVO STATUS' \
--data-urlencode '["OrderStatus"]["default"]=1'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/statuses?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["OrderStatus"]["status"]' => 'NOVO STATUS',
  '["OrderStatus"]["default"]' => '1'
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
var client = new RestClient("https://{api_address}/orders/statuses?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"OrderStatus\"][\"status\"]", "NOVO STATUS");
request.AddParameter("[\"OrderStatus\"][\"default\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"OrderStatus\"][\"status\"]=NOVO STATUS&[\"OrderStatus\"][\"default\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/orders/statuses?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "OrderStatus":{
        "status":"A ENVIAR TESTE1",
        "description": "criação de um novo status",
        "background": "#FFFFFF",
        "default":"1"
    }
}
</pre>

### Método POST
`https://{api_address}/orders/statuses?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
OrderStatus	|JSON|	Dados do status
status	|String|	Nome do status
default	|Number|	Status padrão (Veja Tabela A)

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
id	|Number|	Código do status
code	|Number|	Código do retorno (201)

## Atualizar Dados do Status#put

Requisição para alterar os dados de um status de pedidos. Deverá enviar o JSON com os dados do status para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/orders/statuses/:id?access_token={{access_token}}' \
--data-urlencode '["OrderStatus"]["status"]=STATUS ALTERADO' \
--data-urlencode '["OrderStatus"]["default"]=1'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/statuses/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["OrderStatus"]["status"]' => 'STATUS ALTERADO',
  '["OrderStatus"]["default"]' => '1'
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
var client = new RestClient("https://{api_address}/orders/statuses/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"OrderStatus\"][\"status\"]", "STATUS ALTERADO");
request.AddParameter("[\"OrderStatus\"][\"default\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"OrderStatus\"][\"status\"]=STATUS ALTERADO&[\"OrderStatus\"][\"default\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/orders/statuses/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "OrderStatus":{
        "status":"STATUS ALTERADO",
        "default":"1"
    }
}
</pre>

### Método PUT
`https://{api_address}/orders/statuses/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|String|	Código do status
OrderStatus	|JSON|	Dados do status
status	|String|	Nome do status
default	|Number|	Status padrão (Veja Tabela A)

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
id	|Number|	Código do cliente
code	|Number|	Código do retorno (200)

## Excluir Status#delete

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/orders/statuses/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/statuses/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/orders/statuses/:id?access_token={{access_token}}");
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
  .url("https://{api_address}/orders/statuses/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/orders/statuses/:id?access_token={{access_token}}`

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
    "id": "1",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do status
code	|Number|	Código do retorno (200)

### Tabelas Auxiliares de Pedidos

### Tabela A - Tipo de status do pedido (campo OrderStatus.default)
Valor|Descrição
-----|---------
1|Status adicional