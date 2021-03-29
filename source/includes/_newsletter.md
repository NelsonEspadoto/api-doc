# APIs de Newsletter

## Listagem de Newsletter#get

Requisição para a consulta de diversos newsletter.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/newsletter/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/newsletter/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/newsletter/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/newsletter/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/newsletter/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

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
        "created",
        "modified"
    ],
    "appliedFilters": [],
    "Newsletters": [
        {
            "Newsletter": {
                "id": "123",
                "name": "Nome do Cliente",
                "email": "emaildo@cliente.com.br",
                "status": "0",
                "created": "2016-08-15 11:39:28",
                "modified": "2016-08-15 11:39:28",
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
Newsletters	|Object[ ]|	Lista de newsletters
Newsletter	|Object|	Dados do newsletter
id	|Number|	Código do newsletters
name	|String|	Nome do cliente
email	|String|	Email do cliente
status	|String|	Newsletter ativo (Veja Tabela A)
created	|String|	Data de criação
modified	|String|	Data de modificação

## Confirmar Cadastro de Newsletter#post

Requisição para confirmar a inclusão de um newsletter. Deverá enviar o JSON com o email para a confirmação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/newsletter/confirmation/?access_token={{access_token}}' \
--data-urlencode '"email"=emaildo@cliente.com.br'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/newsletter/confirmation/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '"email"' => 'emaildo@cliente.com.br'
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
var client = new RestClient("https://{api_address}/newsletter/confirmation/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("\"email\"", "emaildo@cliente.com.br");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "\"email\"=emaildo@cliente.com.br");
Request request = new Request.Builder()
  .url("https://{api_address}/newsletter/confirmation/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "email": "emaildo@cliente.com.br"
}
</pre>

### Método POST
`https://{api_address}/newsletter/confirmation/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Newsletter	|JSON|	Dados do newsletter
email	|String|	Email do cliente

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "code": 200,
    "message": "Email emaildo@cliente.com.br confirmed"
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
code	|Number|	Código do retorno (200)
message	|String|	Mensagem de retorno

## Cadastrar Newsletter#post

Requisição para inclusão de um newsletter. Deverá enviar o JSON com os dados do newsletter para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/newsletter/?access_token={{access_token}}' \
--data-urlencode '["Newsletter"]["name"]=Nome do Cliente' \
--data-urlencode '["Newsletter"]["email"]=emaildo@cliente.com.br'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/newsletter/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Newsletter"]["name"]' => 'Nome do Cliente',
  '["Newsletter"]["email"]' => 'emaildo@cliente.com.br'
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
var client = new RestClient("https://{api_address}/newsletter/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Newsletter\"][\"name\"]", "Nome do Cliente");
request.AddParameter("[\"Newsletter\"][\"email\"]", "emaildo@cliente.com.br");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Newsletter\"][\"name\"]=Nome do Cliente&[\"Newsletter\"][\"email\"]=emaildo@cliente.com.br");
Request request = new Request.Builder()
  .url("https://{api_address}/newsletter/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "Newsletter":{
        "name": "Nome do Cliente",
        "email": "emaildo@cliente.com.br"
    }
}
</pre>

### Método POST
`https://{api_address}/newsletter/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Newsletter	|JSON|	Dados do newsletter
name	|String|	Nome do cliente
email	|String|	Email do cliente

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
id	|Number|	Código do newsletter
code	|Number|	Código do retorno (201)

### Tabelas Auxiliares de Newsletter

### Tabela A - Newsletter ativo (campo status)
Valor|Descrição
-----|---------
0|Newsletter inativo
1|Newsletter ativo