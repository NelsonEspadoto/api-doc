# API de Informação Adicional (additional_info)

## Atualizar as informações adicionais#put

Requisição para atualizar as informações adicionais.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/additional_info/:id?access_token={{access_token}}' \
--data-urlencode '["AdditionalInfo"]["type"]=1' \
--data-urlencode '["AdditionalInfo"]["name"]=Time do coração?' \
--data-urlencode '["AdditionalInfo"]["display_value"]=1' \
--data-urlencode '["AdditionalInfo"]["required"]=1' \
--data-urlencode '["AdditionalInfo"]["add_total"]=1' \
--data-urlencode '["AdditionalInfo"]["max_length"]=12' \
--data-urlencode '["AdditionalInfo"]["value"]=11.90' \
--data-urlencode '["AdditionalInfo"]["active"]=1'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/additional_info/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["AdditionalInfo"]["type"]' => '1',
  '["AdditionalInfo"]["name"]' => 'Time do coração?',
  '["AdditionalInfo"]["display_value"]' => '1',
  '["AdditionalInfo"]["required"]' => '1',
  '["AdditionalInfo"]["add_total"]' => '1',
  '["AdditionalInfo"]["max_length"]' => '12',
  '["AdditionalInfo"]["value"]' => '11.90',
  '["AdditionalInfo"]["active"]' => '1'
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
var client = new RestClient("https://{api_address}/additional_info/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"AdditionalInfo\"][\"type\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"name\"]", "Time do coração?");
request.AddParameter("[\"AdditionalInfo\"][\"display_value\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"required\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"add_total\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"max_length\"]", "12");
request.AddParameter("[\"AdditionalInfo\"][\"value\"]", "11.90");
request.AddParameter("[\"AdditionalInfo\"][\"active\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"AdditionalInfo\"][\"type\"]=1&[\"AdditionalInfo\"][\"name\"]=Time do coração?&[\"AdditionalInfo\"][\"display_value\"]=1&[\"AdditionalInfo\"][\"required\"]=1&[\"AdditionalInfo\"][\"add_total\"]=1&[\"AdditionalInfo\"][\"max_length\"]=12&[\"AdditionalInfo\"][\"value\"]=11.90&[\"AdditionalInfo\"][\"active\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/additional_info/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "AdditionalInfo": {
        "type": 1,
        "name": "Time do coração?",
        "display_value": 1,
        "required": 1,
        "add_total": 1,
        "max_length": 12,
        "value": "11.90",
        "active": 1
    }
}
</pre>

### Método PUT
`https://{api_address}/additional_info/:id(additional_info)?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
AdditionalInfo	|JSON|	Informações adicionais do produto
type	|String|	Correspondo a forma como será exibida a informação adicional. Tabela A
name	|String|	Nome da informação adicional
display_value	|Number|	Se o valor será exibido. Tabela B
required	|Number|	Se será obrigatório ou não no momento da compra. Tabela C
add_total	|Number|	Se o valor será somado ou não ao produto. Tabela D
max_length	|Number|	Corresponde a quantidade de caracter que poderá ser inserido na informação adicional. Exemplo: Camisa de torcedor (possuirá dois dígitos)
value	|Decimal|	Valor do produto que estiver setado com a informação adicional
active	|Number|	Se a informação adicional estará ativa ou inativa. Tabela E

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Saved",
    "id": "17",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cliente
code	|Number|	Código do retorno (201)

## Atualizar as informações adicionais relacionadas ao Produto#put

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/products/:id/additional_info/?access_token={{access_token}}' \
--data-raw '{
    "AdditionalInfo": {
        "info_id": 17,
        "inherit_deadline": 1,
        "deadline": 3,
        "order": 1
    }
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/:id/additional_info/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n    "AdditionalInfo": {\n        "info_id": 17,\n        "inherit_deadline": 1,\n        "deadline": 3,\n        "order": 1\n    }\n}');
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
var client = new RestClient("https://{api_address}/products/:id/additional_info/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("text/plain", "{\n    \"AdditionalInfo\": {\n        \"info_id\": 17,\n        \"inherit_deadline\": 1,\n        \"deadline\": 3,\n        \"order\": 1\n    }\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n    \"AdditionalInfo\": {\n        \"info_id\": 17,\n        \"inherit_deadline\": 1,\n        \"deadline\": 3,\n        \"order\": 1\n    }\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/products/:id/additional_info/?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método PUT
`https://{api_address}/products/:id(do_produto)/additional_info/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cliente

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
code	|Number|	Código do retorno (200)

### Tabelas Auxiliares de Informações Adicionais (additional_info)

### Tabela A - Correspondo a forma como será exibida a informação adicional (campo type)
Valor|Descrição
-----|---------
0|Linha de texto (input text)
1|Caixa de seleção (select)
2|Caixa de Texto (textarea)

### Tabela B - Se o valor será exibido (campo display_value)
Valor|Descrição
-----|---------
0|não exibir valor
1|exibir valor

### Tabela C - Se será obrigatório ou não no momento da compra (campo required)
Valor|Descrição
-----|---------
0|não é obrigatório
1|obrigatório

### Tabela D - Se o valor será somado ou não ao produto (campo add_total)
Valor|Descrição
-----|---------
0|não somar com o valor do preço do produto
1|somar com o total do preço do produto

### Tabela E - Se a informação adicional estará ativa ou inativa (campo active)
Valor|Descrição
-----|---------
0|inativa
1|ativa

### Tabela F - Se herdará o prazo a ser inserido no frete (campo inherit_deadline)
Valor|Descrição
-----|---------
0|não herdar prazo
1|herdar prazo

## Listagem Geral das Informações Adicionais#get

Requisição para a consultar dados da additional_info.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/additional_info/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/additional_info/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/additional_info/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/additional_info/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/additional_info/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
AdditionalInfo	|JSON|	Informações adicionais do produto
Id	|String|	Id da AdditionalInfo
type	|String|	Corresponde ao tipo de exibição da informação adicional. Tabela A
display_as	|String|	Corresponde a forma como será exibida a informação adicional.
name	|String|	Nome da informação adicional
display_value	|Number|	Se o valor será exibido. Tabela B
required	|Number|	Se será obrigatório ou não no momento da compra. Tabela C
add_total	|Number|	Se o valor será somado ou não ao produto. Tabela D
max_length	|Number|	Corresponde a quantidade de caracter que poderá ser inserido na informação adicional. Exemplo: Camisa de torcedor (possuirá dois dígitos)
value	|Decimal|	Valor do produto que estiver setado com a informação adicional
active	|Number|	Se a informação adicional estará ativa ou inativa. Tabela E

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 3,
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
        "type",
        "name",
        "display_value",
        "required",
        "add_total",
        "active",
        "order",
        "display_as",
        "max_length",
        "value",
        "height"
    ],
    "appliedFilters": [],
    "AdditionalInfos": [
        {
            "AdditionalInfo": {
                "id": "5",
                "type": "imput text",
                "name": "Time do coração?",
                "display_value": 0,
                "required": 0,
                "add_total": 0,
                "max_length": 0,
                "value": "1",
                "active": 1
            }
        },
        {
            "AdditionalInfo": {
                "id": "31",
                "type": "textarea",
                "name": "Time do coração?",
                "display_value": 1,
                "required": 1,
                "add_total": 1,
                "max_length": 12,
                "value": 11.9,
                "active": 1,
                "height": 0
            }
        },
        {
            "AdditionalInfo": {
                "id": "33",
                "type": "select",
                "display_as": "select",
                "name": "Time do coração?",
                "display_value": 1,
                "required": 1,
                "add_total": 1,
                "active": 1
            }
        }
    ]
}
</pre>

## Consultar Dados das Informações Adicionais#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/additional_info/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/additional_info/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/additional_info/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/additional_info/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/additional_info/:id(additional_info)/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
AdditionalInfo	|JSON|	Informações adicionais do produto
Id	|String|	Id da AdditionalInfo
type	|String|	Corresponde ao tipo de exibição da informação adicional. Tabela A
display_as	|String|	Corresponde a forma como será exibida a informação adicional.
name	|String|	Nome da informação adicional
display_value	|Number|	Se o valor será exibido. Tabela B
required	|Number|	Se será obrigatório ou não no momento da compra. Tabela C
add_total	|Number|	Se o valor será somado ou não ao produto. Tabela D
max_length	|Number|	Corresponde a quantidade de caracter que poderá ser inserido na informação adicional. Exemplo: Camisa de torcedor (possuirá dois dígitos)
value	|Decimal|	Valor do produto que estiver setado com a informação adicional
active	|Number|	Se a informação adicional estará ativa ou inativa. Tabela E

> Retorno de Sucesso:

<pre>
{
    "AdditionalInfo": {
        "id": "33",
        "type": "select",
        "display_as": "select",
        "name": "Time do coração?",
        "display_value": "1",
        "required": "1",
        "add_total": "1",
        "active": "1"
    }
}
</pre>

### Tabelas Auxiliares de Informações Adicionais (additional_info)

### Tabela A - Correspondo a forma como será exibida a informação adicional (campo type)
Valor|Descrição
-----|---------
0|Linha de texto (input text)
1|Caixa de seleção (select)
2|Caixa de Texto (textarea)

### Tabela B - Se o valor será exibido (campo display_value)
Valor|Descrição
-----|---------
0|não exibir valor
1|exibir valor

### Tabela C - Se será obrigatório ou não no momento da compra (campo required)
Valor|Descrição
-----|---------
0|não é obrigatório
1|obrigatório

### Tabela D - Se o valor será somado ou não ao produto (campo add_total)
Valor|Descrição
-----|---------
0|não somar com o valor do preço do produto
1|somar com o total do preço do produto

### Tabela E - Se a informação adicional estará ativa ou inativa (campo active)
Valor|Descrição
-----|---------
0|inativa
1|ativa

## Cadastrar Informação Adicional#post

Requisição para cadastrar informação adicional. É possível inserir as Informações Adicionais ao Produto, via API.

Para acrescentar informações, além da descrição, sobre os seus produtos, você tem a opção de cadastrar as informações adicionais.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/additional_info/?access_token={{access_token}}' \
--data-urlencode '["AdditionalInfo"]["type"]=1' \
--data-urlencode '["AdditionalInfo"]["name"]=Time do coração?' \
--data-urlencode '["AdditionalInfo"]["display_value"]=1' \
--data-urlencode '["AdditionalInfo"]["required"]=1' \
--data-urlencode '["AdditionalInfo"]["add_total"]=1' \
--data-urlencode '["AdditionalInfo"]["max_length"]=12' \
--data-urlencode '["AdditionalInfo"]["value"]=11.90' \
--data-urlencode '["AdditionalInfo"]["active"]=1'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/additional_info/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["AdditionalInfo"]["type"]' => '1',
  '["AdditionalInfo"]["name"]' => 'Time do coração?',
  '["AdditionalInfo"]["display_value"]' => '1',
  '["AdditionalInfo"]["required"]' => '1',
  '["AdditionalInfo"]["add_total"]' => '1',
  '["AdditionalInfo"]["max_length"]' => '12',
  '["AdditionalInfo"]["value"]' => '11.90',
  '["AdditionalInfo"]["active"]' => '1'
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
var client = new RestClient("https://{api_address}/additional_info/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"AdditionalInfo\"][\"type\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"name\"]", "Time do coração?");
request.AddParameter("[\"AdditionalInfo\"][\"display_value\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"required\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"add_total\"]", "1");
request.AddParameter("[\"AdditionalInfo\"][\"max_length\"]", "12");
request.AddParameter("[\"AdditionalInfo\"][\"value\"]", "11.90");
request.AddParameter("[\"AdditionalInfo\"][\"active\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"AdditionalInfo\"][\"type\"]=1&[\"AdditionalInfo\"][\"name\"]=Time do coração?&[\"AdditionalInfo\"][\"display_value\"]=1&[\"AdditionalInfo\"][\"required\"]=1&[\"AdditionalInfo\"][\"add_total\"]=1&[\"AdditionalInfo\"][\"max_length\"]=12&[\"AdditionalInfo\"][\"value\"]=11.90&[\"AdditionalInfo\"][\"active\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/additional_info/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "AdditionalInfo": {
        "type": 0,
        "name": "Time do coração?",
        "display_value": 1,
        "required": 1,
        "add_total": 1,
        "max_length": 12,
        "value": "11.90",
        "active": 1
    }
}
</pre>

> Haverá uma diferença no envio do Json, quando o tipo escolhido for 1 ("type": 1)

<pre>
{
    "AdditionalInfo": {
        "type": 1,
        "name": "Time do coração?",
        "display_value": 1,
        "required": 1,
        "add_total": 1,
        "max_length": 12,
        "value": "11.90",
        "active": 1,
        "options": [
            {
                "name": "São Paulo",
                "value": "15.00"
            },
            {
                "name": "Vasco",
                "value": "30.00"
            }
        ]
    }
}
</pre>

### Método POST
`https://{api_address}/additional_info/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
AdditionalInfo	|JSON|	Informações adicionais do produto
type	|String|	Correspondo a forma como será exibida a informação adicional. Tabela A
name	|String|	Nome da informação adicional
display_value	|Number|	Se o valor será exibido. Tabela B
required	|Number|	Se será obrigatório ou não no momento da compra. Tabela C
add_total	|Number|	Se o valor será somado ou não ao produto. Tabela D
max_length	|Number|	Corresponde a quantidade de caracter que poderá ser inserido na informação adicional. Exemplo: Camisa de torcedor (possuirá dois dígitos)
value	|Decimal|	Valor do produto que estiver setado com a informação adicional
active	|Number|	Se a informação adicional estará ativa ou inativa. Tabela E

### Parâmetros enviados quando "type:" 1:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
AdditionalInfo	|JSON|	Informações adicionais do produto
type	|String|	Correspondo a forma como será exibida a informação adicional. Tabela A
name	|String|	Nome da informação adicional
display_value	|Number|	Se o valor será exibido. Tabela B
required	|Number|	Se será obrigatório ou não no momento da compra. Tabela C
add_total	|Number|	Se o valor será somado ou não ao produto. Tabela D
max_length	|Number|	Corresponde a quantidade de caracter que poderá ser inserido na informação adicional. Exemplo: Camisa de torcedor (possuirá dois dígitos)
value	|Decimal|	Valor do produto que estiver setado com a informação adicional
active	|Number|	Se a informação adicional estará ativa ou inativa. Tabela E
options	|Array|	Opções do select
name	|String|	Nome da opção a ser selecionada
value	|String|	Valor da opção a ser selecionada

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "17",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do AdditionalInfo
code	|Number|	Código do retorno (201)

## Vincular a informação adicional ao produto, por meio do POST#post

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/products/:id/additional_info/?access_token={{access_token}}' \
--data-raw '{
    "AdditionalInfo": {
        "info_id": 17,
        "inherit_deadline": 1,
        "deadline": 3,
        "order": 1
    }
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/:id/additional_info/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n    "AdditionalInfo": {\n        "info_id": 17,\n        "inherit_deadline": 1,\n        "deadline": 3,\n        "order": 1\n    }\n}');
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
var client = new RestClient("https://{api_address}/products/:id/additional_info/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n    \"AdditionalInfo\": {\n        \"info_id\": 17,\n        \"inherit_deadline\": 1,\n        \"deadline\": 3,\n        \"order\": 1\n    }\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n    \"AdditionalInfo\": {\n        \"info_id\": 17,\n        \"inherit_deadline\": 1,\n        \"deadline\": 3,\n        \"order\": 1\n    }\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/products/:id/additional_info/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "AdditionalInfo": {
        "info_id": 17,
        "inherit_deadline": 1,
        "deadline": 3,
        "order": 1
    }
}
</pre>

### Método POST
`https://{api_address}/products/:id(do_produto)/additional_info/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
AdditionalInfo	|String|	Informações adicionais do produto
info_id	|String|	id da informação adicional gerada
inherit_deadline	|Number|	Se herdará o prazo a ser inserido no frete. Tabela F
deadline	|Number|	prazo que será adicionado ao frete, caso seja necessário para preparação da personalização do produto
order	|Number|	Ordem de exibição da informação adicional na loja virtual

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
code	|Number|	Código do retorno (201)

### Tabelas Auxiliares de Informações Adicionais (additional_info)

### Tabela A - Correspondo a forma como será exibida a informação adicional (campo type)
Valor|Descrição
-----|---------
0|Linha de texto (input text)
1|Caixa de seleção (select)
2|Caixa de Texto (textarea)

### Tabela B - Se o valor será exibido (campo display_value)
Valor|Descrição
-----|---------
0|não exibir valor
1|exibir valor

### Tabela C - Se será obrigatório ou não no momento da compra (campo required)
Valor|Descrição
-----|---------
0|não é obrigatório
1|obrigatório

### Tabela D - Se o valor será somado ou não ao produto (campo add_total)
Valor|Descrição
-----|---------
0|não somar com o valor do preço do produto
1|somar com o total do preço do produto

### Tabela E - Se a informação adicional estará ativa ou inativa (campo active)
Valor|Descrição
-----|---------
0|inativa
1|ativa

### Tabela F - Se herdará o prazo a ser inserido no frete (campo inherit_deadline)
Valor|Descrição
-----|---------
0|não herdar prazo
1|herdar prazo

## Excluir Informação Adicional Relacionada ao Produto#delete

Requisição para excluir uma informação adicional.

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/products/:id/additional_info/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/:id/additional_info/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/:id/additional_info/:id/?access_token={{access_token}}");
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
  .url("https://{api_address}/products/:id/additional_info/:id/?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/products/:id(do_produto)/additional_info/:id(additional_info)/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

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
code	|Number|	Código do retorno (200)

## Excluitr uma Informação Adicional#delete

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/additional_info/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/additional_info/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/additional_info/:id/?access_token={{access_token}}");
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
  .url("https://{api_address}/additional_info/:id/?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/additional_info/:id(additional_info)/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Deleted",
    "id": "35",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da informação adicional
code	|Number|	Código do retorno (200)