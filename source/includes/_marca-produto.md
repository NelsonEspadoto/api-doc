# API de Marca do Produto

## Listagem de Marcas#get

Requisição para consultar os dados de diversas marcas.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products/brands/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/brands/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/brands/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products/brands/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/products/brands/`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
attrs	|String|	Filtro de campos disponíveis na listagem
sort	|String|	Ordenação de listagem, ex.: [campo]_[asc/desc]
limit	|Number|	Quantidade de registros (max. 50)
page	|Number|	Número da página da consulta

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 1,
        "page": 1,
        "offset": 0,
        "limit": 1,
        "maxLimit": 50
    },
    "sort": [
        {
            "id": "asc"
        }
    ],
    "availableFilters": [
        "id",
        "brand"
    ],
    "appliedFilters": [ ],
    "Brands": [
        {
          "Brand": {
            "id": "1",
            "slug": "marca-teste",
            "brand": "Marca Teste"
          }
        }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
paging	|Object|	Dados de paginação
total	|Number|	Total de registros
page	|Number|	Páginas corrente
offset	|Number|	Registro inicial da página
limit	|Number|	Limite de registros
maxLimit	|Number|	Máximo de registros
sort	|Object|	Ordenação
availableFilters	|String|	Filtros disponíveis
appliedFilters	|String|	Filtros utilizados
Brands	|Object|	Dados da marcas dos produtos
Brand	|Object|	Dados da marca
id	|Number|	Código da marca
brand	|String|	Nome da marca
slug	|String|	Final da URL da marca

## Consultar Dados da Marca#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products/brands/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/brands/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/brands/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products/brands/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/products/brands/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da marca do produto

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "Brand": {
        "id": "9",
        "slug": "marca-produto",
        "brand": "Marca Produto"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Brand	|Object|	Dados da marca
id	|Number|	Código da marca
slug	|String|	Final da URL da marca
brand	|String|	Nome da marca

## Cadastrar Marca#post

Requisição para inclusão de marca do produto. Deverá enviar o JSON com os dados da marca para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/products/brands/?access_token={{access_token}}' \
--data-urlencode '["Brand"]["slug"]=new-brand' \
--data-urlencode '["Brand"]["brand"]=Nova Marca'
```
```php
<?php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/brands/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Brand"]["slug"]' => 'new-brand',
  '["Brand"]["brand"]' => 'Nova Marca'
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
var client = new RestClient("https://{api_address}/products/brands/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Brand\"][\"slug\"]", "new-brand");
request.AddParameter("[\"Brand\"][\"brand\"]", "Nova Marca");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Brand\"][\"slug\"]=new-brand&[\"Brand\"][\"brand\"]=Nova Marca");
Request request = new Request.Builder()
  .url("https://{api_address}/products/brands/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/products/brands/`

### Parâmetros enviados:

> Json:

<pre>
{
    "Brand": {
        "slug": "new-brand",
        "brand": "Nova Marca"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Brand	|JSON|	Dados da marca
brand	|String|	Nome da marca
slug	|String|	Final da URL da marca

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
id	|Number|	Código da marca
code	|Number|	Código do retorno (201)

## Atualizar Dados da Marca#put

Requisição para alterar os dados da marca. Deverá enviar o JSON com os dados da marca para alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/products/brands/:id?access_token={{access_token}}' \
--data-urlencode '["Brand"]["slug"]=new-brand' \
--data-urlencode '["Brand"]["brand"]=Nova Marca'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/brands/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Brand"]["slug"]' => 'new-brand',
  '["Brand"]["brand"]' => 'Nova Marca'
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
var client = new RestClient("https://{api_address}/products/brands/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"Brand\"][\"slug\"]", "new-brand");
request.AddParameter("[\"Brand\"][\"brand\"]", "Nova Marca");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Brand\"][\"slug\"]=new-brand&[\"Brand\"][\"brand\"]=Nova Marca");
Request request = new Request.Builder()
  .url("https://{api_address}/products/brands/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método PUT
`https://{api_address}/products/brands/:id`

### Parâmetros enviados:

> Json:

<pre>
{
    "Brand": {
        "slug": "new-brand",
        "brand": "Nova Marca"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da marca
Brand	|JSON|	Dados da marca
brand	|String|	Nome da marca
slug	|String|	Final da URL da marca

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
id	|Number|	Código da marca
code	|Number|	Código do retorno (200)

## Excluir Marca#delete

Requisição para excluir uma marca do produto.

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/products/brands/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/brands/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/brands/:id?access_token={{access_token}}");
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
  .url("https://{api_address}/products/brands/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/products/brands/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da marca

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
id	|Number|	Código da marca
code	|Number|	Código do retorno (200)