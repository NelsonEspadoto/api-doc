# API de Lista de Preço B2B

## Listar todas as listas de preços#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/price_list?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_list?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/price_list?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/price_list?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/price_list?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

> Retorno em caso de sucesso (status code 200 ou 201)

<pre>
{
    "paging": {
        "total": 6,
        "page": 1,
        "offset": 0,
        "limit": 30,
        "maxLimit": 50
    },
    "sort": [
        []
    ],
    "availableFilters": [
        "name",
        "status"
    ],
    "appliedFilters": [],
    "PriceLists": [
        {
            "PriceList": {
                "status": "1",
                "id": "4",
                "name": "Lista de Preços Teste 123",
                "PriceValueList": [
                    {
                        "product_id": "",
                        "category_id": "9",
                        "value": "300",
                        "type": "R"
                    },
                    {
                        "product_id": "",
                        "category_id": "",
                        "value": "60",
                        "type": "R"
                    },
                    {
                        "product_id": "71",
                        "category_id": "",
                        "value": "6",
                        "type": "R"
                    }
                ]
            }
        }
    ]
}
</pre>

## Retorna uma lista de preços#get

Necessário informar um parâmetro **ID** na url

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/price_list/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_list/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/price_list/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/price_list/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/price_list/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da lista

> Retorno em caso de sucesso (status code 200 ou 201)

<pre>
{
    "PriceList": {
        "status": "1",
        "id": "4",
        "name": "Lista de Preços Teste 123",
        "PriceValueList": [
            {
                "product_id": "",
                "category_id": "3",
                "value": "30",
                "type": "R"
            },
            {
                "product_id": "",
                "category_id": "5",
                "value": "55",
                "type": "R"
            },
            {
                "product_id": "",
                "category_id": "9",
                "value": "300",
                "type": "R"
            },
            {
                "product_id": "",
                "category_id": "",
                "value": "60",
                "type": "R"
            },
            {
                "product_id": "71",
                "category_id": "",
                "value": "6",
                "type": "R"
            }
        ]
    }
}
</pre>

## Cria uma Lista de Preços#post

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/price_list?access_token={{access_token}}' \
--data-raw '{
    "name":  "Lista de Preços Teste",
    "status": 1
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_list?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n    "name":  "Lista de Preços Teste",\n    "status": 1\n}');
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
var client = new RestClient("https://{api_address}/price_list?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n    \"name\":  \"Lista de Preços Teste\",\n    \"status\": 1\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n    \"name\":  \"Lista de Preços Teste\",\n    \"status\": 1\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/price_list?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "name":  "Lista de Preços Teste",
    "status": 1
}
</pre>

### Método POST
`https://{api_address}/price_list?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
name	|String|	Nome da Lista
status	|Number|	Status da Lista

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "16",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da lista
code	|Number|	Código da lista (201)

## Atualiza uma Lista de Preços#put

Necessário informar um parâmetro **ID** na url

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/price_list/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_list/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
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
var client = new RestClient("https://{api_address}/price_list/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://{api_address}/price_list/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "name":  "Lista de Preços",
    "status": 1
}
</pre>

### Método PUT
`https://{api_address}/price_list/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da lista
name	|String|	Nome da Lista
status	|Number|	Status da Lista

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Saved",
    "code": 200,
    "id": "15"
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
code	|Number|	Código da lista (200)
id	|Number|	Código da lista

## Exclui uma Lista de Preços#delete

Necessário informar um parâmetro **ID** na url

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/price_list/:id?access_token={{access_token}}' \
--data-raw ''
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_list/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_DELETE);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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
var client = new RestClient("https://{api_address}/price_list/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.DELETE);
request.AddParameter("text/plain", "",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://{api_address}/price_list/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/price_list/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da lista

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Deleted",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
code	|Number|	Código do retorno (201)

## Listar valores de uma Lista de Preços#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/price_value_list?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_value_list?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/price_value_list?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/price_value_list?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/price_value_list?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

> Retorno em caso de sucesso (status code 200 ou 201)

<pre>
{
    "paging": {
        "total": 22,
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
    "availableFilters": [],
    "appliedFilters": [],
    "PriceValueLists": [
        {
            "PriceValueList": {
                "id": "10",
                "price_list_id": "6",
                "product_id": "",
                "category_id": "",
                "value": "12",
                "type": "R"
            }
        },
        {
            "PriceValueList": {
                "id": "14",
                "price_list_id": "8",
                "product_id": "",
                "category_id": "",
                "value": "25",
                "type": "P"
            }
        },
        {
            "PriceValueList": {
                "id": "18",
                "price_list_id": "8",
                "product_id": "",
                "category_id": "35",
                "value": "10",
                "type": "R"
            }
        }
    ]
}
</pre>

## Retorna um valor#get

Necessário informar um parâmetro **ID** na url

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/price_value_list/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_value_list/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/price_value_list/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/price_value_list/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/price_value_list/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da lista de valores

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "PriceValueList": {
        "id": "61",
        "price_list_id": "13",
        "product_id": "230",
        "category_id": "",
        "value": "50",
        "type": "P"
    }
}
</pre>

## Cria um valor na Lista de Preços#post

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/price_value_list?access_token={{access_token}}' \
--data-raw '{
    "price_list_id":  15,
    "category_id": 11,
    "value":  25,
    "type": "P"
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_value_list?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n    "price_list_id":  15,\n    "category_id": 11,\n    "value":  25,\n    "type": "P"\n}');
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
var client = new RestClient("https://{api_address}/price_value_list?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n    \"price_list_id\":  15,\n    \"category_id\": 11,\n    \"value\":  25,\n    \"type\": \"P\"\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n    \"price_list_id\":  15,\n    \"category_id\": 11,\n    \"value\":  25,\n    \"type\": \"P\"\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/price_value_list?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "price_list_id":  15,
    "category_id": 11,
    "value":  25,
    "type": "P"
}
</pre>

### Método POST
`https://{api_address}/price_value_list?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

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
id	|Number|	Código da Lista de Preços
code	|Number|	Código do retorno (201)

## Atualiza um valor#put

Necessário informar um parâmetro **ID** na url

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/price_value_list/:id?access_token={{access_token}}' \
--data-raw '{
    "price_list_id":  15,
    "category_id": 11,
    "value":  25,
    "type": "P"
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_value_list/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n    "price_list_id":  15,\n    "category_id": 11,\n    "value":  25,\n    "type": "P"\n}');
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
var client = new RestClient("https://{api_address}/price_value_list/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("text/plain", "{\n    \"price_list_id\":  15,\n    \"category_id\": 11,\n    \"value\":  25,\n    \"type\": \"P\"\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n    \"price_list_id\":  15,\n    \"category_id\": 11,\n    \"value\":  25,\n    \"type\": \"P\"\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/price_value_list/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "price_list_id":  15,
    "category_id": 11,
    "value":  25,
    "type": "P"
}
</pre>

### Método PUT
`https://{api_address}/price_value_list/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do Valor

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Saved",
    "code": 200,
    "id": "62"
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do Valor
code	|Number|	Código do retorno (201)

## Exclui um valor#delete

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/price_value_list/:id?access_token={{access_token}}' \
--data-raw '{
    "price_list_id":  15,
    "category_id": 11,
    "value":  25,
    "type": "P"
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/price_value_list/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_DELETE);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n    "price_list_id":  15,\n    "category_id": 11,\n    "value":  25,\n    "type": "P"\n}');
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
var client = new RestClient("https://{api_address}/price_value_list/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.DELETE);
request.AddParameter("text/plain", "{\n    \"price_list_id\":  15,\n    \"category_id\": 11,\n    \"value\":  25,\n    \"type\": \"P\"\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n    \"price_list_id\":  15,\n    \"category_id\": 11,\n    \"value\":  25,\n    \"type\": \"P\"\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/price_value_list/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/price_value_list/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do valor

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Deleted",
    "id": "62",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do valor
code	|Number|	Código do retorno (201)