# APIs de Parceiros

## Listagem de Parceiros#get

Requisição para a consulta de diversos Parceiros.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/partners?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/partners?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/partners?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/partners?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/partners?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
attrs	|String|	Atributos do parceiro
limit	|Number|	Limite de registros
page	|Number|	Página corrente
sort	|String|	Ordenação ex.: [campo]_[asc/desc]

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
            "id": "desc"
        }
    ],
    "availableFilters": [
        "id",
        "name"
    ],
    "appliedFilters": [],
    "Partners": [
        {
            "Partner": {
                "id": "123",
                "name": "Nome do Parceiro",
                "site": "http://www.sitedoparceiro.com.br",
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
Partners	|Object[ ]|	Lista de parceiros
Partner	|Object|	Dados do parceiro
id	|Number|	Código do parceiro
name	|String|	Nome do parceiro
site	|String|	Site do parceiro

## Consultar Dados do Parceiro#get

Requisição para a consulta de dados de um parceiro.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/partners/:id?={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/partners/:id?={{access_token}}');
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
var client = new RestClient("https://{api_address}/partners/:id?={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/partners/:id?={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/partners/:id?={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do parceiro

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "Partner":{
        "id": "123",
        "name": "Nome do Parceiro",
        "site": "http://www.sitedoparceiro.com.br",
        "commission": "0.20"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Partner	|Object|	Dados do parceiro
id	|Number|	Código do parceiro
name	|String|	Nome do parceiro
site	|String|	Site do parceiro
commission	|Decimal|	Valor de comissão do parceiro

## Cadastrar Parceiro#post

Requisição para inclusão de um parceiro. Deverá enviar o JSON com os dados do parceiro para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/partners?access_token={{access_token}}' \
--data-urlencode '["Partner"]["name"]=Nome do Parceiro' \
--data-urlencode '["Partner"]["site"]=http://www.sitedoparceiro.com.br' \
--data-urlencode '["Partner"]["commission"]=0.20'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/partners?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Partner"]["name"]' => 'Nome do Parceiro',
  '["Partner"]["site"]' => 'http://www.sitedoparceiro.com.br',
  '["Partner"]["commission"]' => '0.20'
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
var client = new RestClient("https://{api_address}/partners?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Partner\"][\"name\"]", "Nome do Parceiro");
request.AddParameter("[\"Partner\"][\"site\"]", "http://www.sitedoparceiro.com.br");
request.AddParameter("[\"Partner\"][\"commission\"]", "0.20");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Partner\"][\"name\"]=Nome do Parceiro&[\"Partner\"][\"site\"]=http://www.sitedoparceiro.com.br&[\"Partner\"][\"commission\"]=0.20");
Request request = new Request.Builder()
  .url("https://{api_address}/partners?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "Partner":{
        "name": "Nome do Parceiro",
        "site": "http://www.sitedoparceiro.com.br",
        "commission": "0.20"
    }
}
</pre>

### Método POST
`https://{api_address}/partners?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Partner	|JSON|	Dados do parceiro
name	|String|	Nome do parceiro
site	|String|	Site do parceiro
commission	|Decimal|	Valor de comissão do parceiro

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
id	|Number|	Código do parceiro
code	|Number|	Código do retorno (201)

## Atualizar Dados do Parceiro#put

Requisição para alterar os dados de um parceiro. Deverá enviar o JSON com os dados do parceiro para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/partners/:id?access_token={{access_token}}' \
--data-urlencode '["Partner"]["name"]=Nome do Parceiro' \
--data-urlencode '["Partner"]["site"]=http://www.sitedoparceiro.com.br' \
--data-urlencode '["Partner"]["commission"]=0.20'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/partners/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Partner"]["name"]' => 'Nome do Parceiro',
  '["Partner"]["site"]' => 'http://www.sitedoparceiro.com.br',
  '["Partner"]["commission"]' => '0.20'
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
var client = new RestClient("https://{api_address}/partners/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"Partner\"][\"name\"]", "Nome do Parceiro");
request.AddParameter("[\"Partner\"][\"site\"]", "http://www.sitedoparceiro.com.br");
request.AddParameter("[\"Partner\"][\"commission\"]", "0.20");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Partner\"][\"name\"]=Nome do Parceiro&[\"Partner\"][\"site\"]=http://www.sitedoparceiro.com.br&[\"Partner\"][\"commission\"]=0.20");
Request request = new Request.Builder()
  .url("https://{api_address}/partners/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "Partner":{
        "name": "Nome do Parceiro",
        "site": "http://www.sitedoparceiro.com.br",
        "commission": "0.20"
    }
}
</pre>

### Método PUT
`https://{api_address}/partners/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do parceiro
Partner	|JSON|	Dados do parceiro
name	|String|	Nome do parceiro
site	|String|	Site do parceiro
commission	|Decimal|	Valor de comissão do parceiro

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
id	|Number|	Código do parceiro
code	|Number|	Código do retorno (200)

## Excluir Parceiro#delete

Requisição para excluir um parceiro.

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/partners/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/partners/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/partners/:id?access_token={{access_token}}");
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
  .url("https://{api_address}/partners/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/partners/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do parceiro

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
id	|Number|	Código do parceiro
code	|Number|	Código do retorno (200)