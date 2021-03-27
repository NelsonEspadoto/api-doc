# API de Categorias

As APIs de Categorias disponibiliza a manutenção das categorias dentro da plataforma Tray, possiblilitando criar, atualizar e excluir as categorias por aplicações externas.

## Consultar Árvore de Categorias#get

Requisição para consultar os dados das categorias de forma estruturada.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/categories/tree/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/categories/tree/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/categories/tree/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/categories/tree/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/categories/tree/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do categoria

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "Category": [
      {
          "Category": {
              "slug": "categoria-teste",
              "id": "123",
              "parent_id": "",
              "name": "Categoria Teste",
              "description": "Descrição da Categoria de Teste",
              "title": "",
              "small_description": "",
              "link": {
                  "http": "http://loja.commercesuite.com.br/categoria-teste",
                  "https": "https://loja.commercesuite.com.br/categoria-teste"
              },
              "images": [
                  {
                      "http": "http://images.tcdn.com.br/img/img_prod/123/categoria_img_1_123.png",
                      "https": "https://images.tcdn.com.br/img/img_prod/123/categoria_img_1_123.png"
                  }
              ],
              "has_product": "1",
              "children": [
                  {
                      "Category": {
                          "slug": "subcategoria-teste",
                          "id": "456",
                          "parent_id": "",
                          "name": "Subcategoria Teste",
                          "description": "Descrição da Categoria de Teste",
                          "title": "",
                          "small_description": "",
                          "link": {
                              "http": "http://loja.commercesuite.com.br/subcategoria-teste",
                              "https": "https://loja.commercesuite.com.br/subcategoria-teste"
                          },
                          "images": [
                              {
                                  "http": "http://images.tcdn.com.br/img/img_prod/123/categoria_img_1_456.png",
                                  "https": "https://images.tcdn.com.br/img/img_prod/123/categoria_img_1_456.png"
                              }
                          ],
                          "has_product": "1",
                          "children": null
                      }
                  }
              ]
          }
      }
  ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Category	|Object|	Lista da categoria
slug	|String|	Final da URL da categoria
id	|Number|	Código da categoria
parent_id	|Number|	Código da categoria pai
name	|String|	Nome da categoria
description	|String|	Descrição da categoria
title	|String|	Titulo da categoria
small_description	|String|	Descrição resumida da categoria
link	|Object|	URLs da categoria
http	|String|	URL da categoria
https	|String|	URL segura da categoria
images	|Object|	Imagens da categoria
http	|Number|	URL da imagem da categoria
https	|Number|	URL segura da imagem da categoria
has_product	|Number|	Categoria com produto relacionado 0|1
children	|Object|	Subcategoria do produto (com os mesmos dados deste Object Category)

## Consultar Dados das Categorias#get

Requisição para consultar os dados das categorias.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/categories/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/categories/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/categories/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/categories/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/categories/`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Token de acesso
attrs	|String|	Atributos da categoria
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
      "name",
      "parent_id"
  ],
  "appliedFilters": [],
  "Categories": [
      {
          "Category": {
              "id": "123",
              "parent_id": "",
              "name": "Categoria Teste",
              "description": "Descrição da Categoria de Teste",
              "small_description": "",
              "Images": [
                  {
                      "http": "http://images.tcdn.com.br/img/img_prod/123/categoria_img_1_123.png",
                      "https": "https://images.tcdn.com.br/img/img_prod/123/categoria_img_1_123.png"
                  }
              ]
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
sort	|Object|	Ordenação
availableFilters	|String|	Filtros disponíveis
appliedFilters	|String|	Filtros utilizados
Categories	|Object|	Lista de categorias
Category	|Object|	Dados da categoria
id	|Number|	Código da categoria
parent_id	|Number|	Código da categoria pai
name	|String|	Nome da categoria
description	|String|	Descrição da categoria
small_description	|String|	Descrição resumida da categoria
Images	|Object|	Imagens da categoria
http	|Number|	URL da imagem da categoria
https	|Number|	URL segura da imagem da categoria

## Consultar Dados da Categoria-por :id#get

Requisição para consultar os dados de uma categoria.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/categories/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/categories/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/categories/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/categories/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/categories/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da categoria

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "Category": {
      "slug": "categoria-teste",
      "id": "123",
      "parent_id": "",
      "name": "Categoria Teste",
      "description": "Descrição da Categoria de Teste",
      "order": "2",
      "title": "",
      "small_description": "",
      "link": {
          "http": "http://loja.commercesuite.com.br/categoria-teste",
          "https": "https://loja.commercesuite.com.br/categoria-teste"
      },
      "has_acceptance_term": "",
      "acceptance_term": "",
      "Images": [
          {
              "http": "http://images.tcdn.com.br/img/img_prod/123/categoria_img_1_123.png",
              "https": "https://images.tcdn.com.br/img/img_prod/123/categoria_img_1_123.png"
          }
      ]
  }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Category	|Object|	Dados da categoria
slug	|String|	Final da URL da categoria
id	|Number|	Código da categoria
parent_id	|Number|	Código da categoria pai
name	|String|	Nome da categoria
description	|String|	Descrição da categoria
order	|Number|	Ordem de exibição da categoria
small_description	|String|	Descrição resumida da categoria
link	|Object|	URLs da categoria
http	|String|	URL da categoria
https	|String|	URL segura da categoria
has_acceptance_term	|Number|	Categoria com termo de aceitação ( 0 / 1)
acceptance_term	|String|	Texto com os termos a ser aceito na categoria
Images	|Object|	Imagens da categoria
http	|String|	URL da imagem da categoria
https	|String|	URL segura da imagem da categoria

## Cadastrar Categoria#post

Requisição para criação de uma categoria. Deverá enviar o JSON com os dados da categoria para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/categories/?access_token={{access_token}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode '["Category"]["name"]=Categoria Teste' \
--data-urlencode '["Category"]["description"]=Categoria de Teste da Loja' \
--data-urlencode '["Category"]["slug"]=categoria-teste' \
--data-urlencode '["Category"]["order"]=2' \
--data-urlencode '["Category"]["title"]=Categoria de Teste' \
--data-urlencode '["Category"]["small_description"]=Categoria de Teste da Loja' \
--data-urlencode '["Category"]["has_acceptance_term"]=1' \
--data-urlencode '["Category"]["acceptance_term"]=Eu aceito os termos de uso ...' \
--data-urlencode '["Category"]["metatag"]["keywords"]=categoria teste' \
--data-urlencode '["Category"]["metatag"]["description"]=categoria teste da loja' \
--data-urlencode '["Category"]["property"]=Característica Teste 1","Característica Teste 2'
```
```php
var client = new RestClient("https://{api_address}/categories/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
request.AddParameter("[\"Category\"][\"name\"]", "Categoria Teste");
request.AddParameter("[\"Category\"][\"description\"]", "Categoria de Teste da Loja");
request.AddParameter("[\"Category\"][\"slug\"]", "categoria-teste");
request.AddParameter("[\"Category\"][\"order\"]", "2");
request.AddParameter("[\"Category\"][\"title\"]", "Categoria de Teste");
request.AddParameter("[\"Category\"][\"small_description\"]", "Categoria de Teste da Loja");
request.AddParameter("[\"Category\"][\"has_acceptance_term\"]", "1");
request.AddParameter("[\"Category\"][\"acceptance_term\"]", "Eu aceito os termos de uso ...");
request.AddParameter("[\"Category\"][\"metatag\"][\"keywords\"]", "categoria teste");
request.AddParameter("[\"Category\"][\"metatag\"][\"description\"]", "categoria teste da loja");
request.AddParameter("[\"Category\"][\"property\"]", "Característica Teste 1\",\"Característica Teste 2");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```csharp
var client = new RestClient("https://{api_address}/categories/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
request.AddParameter("[\"Category\"][\"name\"]", "Categoria Teste");
request.AddParameter("[\"Category\"][\"description\"]", "Categoria de Teste da Loja");
request.AddParameter("[\"Category\"][\"slug\"]", "categoria-teste");
request.AddParameter("[\"Category\"][\"order\"]", "2");
request.AddParameter("[\"Category\"][\"title\"]", "Categoria de Teste");
request.AddParameter("[\"Category\"][\"small_description\"]", "Categoria de Teste da Loja");
request.AddParameter("[\"Category\"][\"has_acceptance_term\"]", "1");
request.AddParameter("[\"Category\"][\"acceptance_term\"]", "Eu aceito os termos de uso ...");
request.AddParameter("[\"Category\"][\"metatag\"][\"keywords\"]", "categoria teste");
request.AddParameter("[\"Category\"][\"metatag\"][\"description\"]", "categoria teste da loja");
request.AddParameter("[\"Category\"][\"property\"]", "Característica Teste 1\",\"Característica Teste 2");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
RequestBody body = RequestBody.create(mediaType, "[\"Category\"][\"name\"]=Categoria Teste&[\"Category\"][\"description\"]=Categoria de Teste da Loja&[\"Category\"][\"slug\"]=categoria-teste&[\"Category\"][\"order\"]=2&[\"Category\"][\"title\"]=Categoria de Teste&[\"Category\"][\"small_description\"]=Categoria de Teste da Loja&[\"Category\"][\"has_acceptance_term\"]=1&[\"Category\"][\"acceptance_term\"]=Eu aceito os termos de uso ...&[\"Category\"][\"metatag\"][\"keywords\"]=categoria teste&[\"Category\"][\"metatag\"][\"description\"]=categoria teste da loja&[\"Category\"][\"property\"]=Característica Teste 1\",\"Característica Teste 2");
Request request = new Request.Builder()
  .url("https://{api_address}/categories/?access_token={{access_token}}")
  .method("POST", body)
  .addHeader("Content-Type", "application/x-www-form-urlencoded")
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/categories/`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
  "Category": {
      "name": "Categoria Teste", 
      "description": "Categoria de Teste da Loja",
      "slug": "categoria-teste",
      "order":"2",
      "title": "Categoria de Teste",
      "small_description":"Categoria de Teste da Loja",
      "has_acceptance_term":"1",
      "acceptance_term": "Eu aceito os termos de uso ...",
      "metatag": {
          "keywords": "categoria teste 123",
          "description": "categoria teste da loja 123"
      },
      "property": [
          "Característica Teste 1 123",
          "Característica Teste 2 123"
      ]
  }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Category	|JSON|	Dados da categoria
name	|String (255)|	Nome da categoria
description	|String|	Descrição da categoria
slug	|String (255)|	Final da URL da categoria
order	|Number|	Posição na Ordenação das Categorias
title	|String (255)|	Title da pagina de categorias
small_description	|String|	Descrição detalhada da Categoria
has_acceptance_term	|Number|	Categoria com termo de aceitação ( 0 / 1)
acceptance_term	|String|	Texto com os termos a ser aceito na categoria
Metatag	|Object|	Meta Tag
keywords	|String (256)|	Palavras-Chaves de Meta Tag
description	|String (256)|	Descrição de Meta Tag
property	|String|	Características

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "456",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da categoria
code	|Number|	Código do retorno (201)

### Observação:

Para cadastrar uma sub categoria, deverá ser realizado os mesmos procedimento para o cadastro da categoria pai, tendo como única informação adicional no corpo da requisição do json, o campo "parent_id" (categoria pai).

## Atualizar Dados da Categoria#put

Requisição para alterar os dados de uma categoria. Deverá enviar o JSON com os dados do categoria para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/categories/?access_token={{access_token}}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode '["Category"]["name"]=Categoria Teste' \
--data-urlencode '["Category"]["description"]=Categoria de Teste da Loja' \
--data-urlencode '["Category"]["slug"]=categoria-teste' \
--data-urlencode '["Category"]["order"]=2' \
--data-urlencode '["Category"]["title"]=Categoria de Teste' \
--data-urlencode '["Category"]["small_description"]=Categoria de Teste da Loja' \
--data-urlencode '["Category"]["has_acceptance_term"]=1' \
--data-urlencode '["Category"]["acceptance_term"]=Eu aceito os termos de uso ...' \
--data-urlencode '["Category"]["metatag"]["keywords"]=categoria teste' \
--data-urlencode '["Category"]["metatag"]["description"]=categoria teste da loja' \
--data-urlencode '["Category"]["property"]=Característica Teste 1","Característica Teste 2'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/categories/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/x-www-form-urlencoded'
));
$request->addPostParameter(array(
  '["Category"]["name"]' => 'Categoria Teste',
  '["Category"]["description"]' => 'Categoria de Teste da Loja',
  '["Category"]["slug"]' => 'categoria-teste',
  '["Category"]["order"]' => '2',
  '["Category"]["title"]' => 'Categoria de Teste',
  '["Category"]["small_description"]' => 'Categoria de Teste da Loja',
  '["Category"]["has_acceptance_term"]' => '1',
  '["Category"]["acceptance_term"]' => 'Eu aceito os termos de uso ...',
  '["Category"]["metatag"]["keywords"]' => 'categoria teste',
  '["Category"]["metatag"]["description"]' => 'categoria teste da loja',
  '["Category"]["property"]' => 'Característica Teste 1","Característica Teste 2'
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
var client = new RestClient("https://{api_address}/categories/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
request.AddParameter("[\"Category\"][\"name\"]", "Categoria Teste");
request.AddParameter("[\"Category\"][\"description\"]", "Categoria de Teste da Loja");
request.AddParameter("[\"Category\"][\"slug\"]", "categoria-teste");
request.AddParameter("[\"Category\"][\"order\"]", "2");
request.AddParameter("[\"Category\"][\"title\"]", "Categoria de Teste");
request.AddParameter("[\"Category\"][\"small_description\"]", "Categoria de Teste da Loja");
request.AddParameter("[\"Category\"][\"has_acceptance_term\"]", "1");
request.AddParameter("[\"Category\"][\"acceptance_term\"]", "Eu aceito os termos de uso ...");
request.AddParameter("[\"Category\"][\"metatag\"][\"keywords\"]", "categoria teste");
request.AddParameter("[\"Category\"][\"metatag\"][\"description\"]", "categoria teste da loja");
request.AddParameter("[\"Category\"][\"property\"]", "Característica Teste 1\",\"Característica Teste 2");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
RequestBody body = RequestBody.create(mediaType, "[\"Category\"][\"name\"]=Categoria Teste&[\"Category\"][\"description\"]=Categoria de Teste da Loja&[\"Category\"][\"slug\"]=categoria-teste&[\"Category\"][\"order\"]=2&[\"Category\"][\"title\"]=Categoria de Teste&[\"Category\"][\"small_description\"]=Categoria de Teste da Loja&[\"Category\"][\"has_acceptance_term\"]=1&[\"Category\"][\"acceptance_term\"]=Eu aceito os termos de uso ...&[\"Category\"][\"metatag\"][\"keywords\"]=categoria teste&[\"Category\"][\"metatag\"][\"description\"]=categoria teste da loja&[\"Category\"][\"property\"]=Característica Teste 1\",\"Característica Teste 2");
Request request = new Request.Builder()
  .url("https://{api_address}/categories/?access_token={{access_token}}")
  .method("PUT", body)
  .addHeader("Content-Type", "application/x-www-form-urlencoded")
  .build();
Response response = client.newCall(request).execute();
```


### Método PUT
`https://{api_address}/categories/:id`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
  "Category": {
      "name": "Categoria Teste", 
      "description": "Categoria de Teste da Loja",
      "slug": "categoria-teste",
      "order":"2",
      "title": "Categoria de Teste",
      "small_description":"Categoria de Teste da Loja",
      "has_acceptance_term":"1",
      "acceptance_term": "Eu aceito os termos de uso ...",
      "metatag": {
          "keywords": "categoria teste 123",
          "description": "categoria teste da loja 123"
      },
      "property": [
          "Característica Teste 1 123",
          "Característica Teste 2 123"
      ]
  }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da categoria (pai)
Category	|JSON|	Dados da categoria
description	|String|	Descrição da categoria
slug	|String|	Final da URL da categoria
order	|Number|	Posição na Ordenação das Categorias
title	|String|	Title da pagina de categorias
small_description	|String|	Descrição detalhada da Categoria
has_acceptance_term	|Number|	Categoria com termo de aceitação ( 0 | 1)
acceptance_term	|String|	Texto com os termos a ser aceito na categoria
Metatag	|Object|	Meta Tag
keywords	|String|	Palavras-Chaves de Meta Tag
description	|String|	Descrição de Meta Tag
property	|String|	Características

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "456",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da categoria
code	|Number|	Código do retorno (201)

### Observação:

Para atualizar uma sub categoria, deverá ser realizado os mesmos procedimento acima, no entanto, na url o id informado deverá ser o id da subcategoria

E no corpo da requisição, deverá ser informado o campo `"parent_id"`, que será o id da categoria pai onde se encontra atualmente a subcategoria

## Excluir Categoria#delete

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/categories/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/categories/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/categories/:id?access_token={{access_token}}");
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
  .url("https://{api_address}/categories/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método Delete
`https://{api_address}/categories/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da categoria

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "message": "Deleted",
  "id": "456",
  "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da categoria
code	|Number|	Código do retorno (200)