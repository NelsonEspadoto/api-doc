# API de Nota Fiscal

## Listagem de Notas Fiscais#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/orders/invoices?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/invoices?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/orders/invoices?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/orders/invoices?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/orders/invoices`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

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
    "OrderInvoices": [
        {
            "OrderInvoice": {
                "id": "123",
                "order_id": "123",
                "issue_date": "2016-08-15",
                "number": "213123213213",
                "serie": "123",
                "value": "50.85",
                "key": "12345678901234567890123456789012345678901234",
                "link": "http://www.link.com.br/12345678901234567890123456789012345678901234",
                "xml_danfe": "### XML DANFE ###",
                "created": "2016-08-16 16:19:40",
                "updated": "2016-08-17 16:15:39",
                "ProductCfop": [
                    {
                        "product_id": "123",
                        "variation_id": "0",
                        "cfop": "1234"
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
OrderInvoices	|Object|	Listagem das notas fiscais
OrderInvoice	|Object|	Dados da nota fiscal
id	|Number|	Código da nota fiscal
order_id	|String|	Código do pedido
issue_date	|Date|	Data de emissão
Number	|String|	Número da nota fiscal
serie	|String|	Série da nota fiscal
value	|Decimal|	Valor total da nota fiscal
key	|String|	Chave da nota fiscal
link	|String|	URL de acesso da nota fiscal
xml_danfe	|String|	XML Danfe
created	|Date|	Data de criação
updated	|Date|	Data de atualização
ProductCfop	|Object|	Dados dos produtos CFOP
product_id	|Number|	Código do produto
variation_id	|Number|	Código da variação
cfop	|Number|	Código CFOP
order_invoice_id	|Number|	Código da nota fiscal

## Consultar Dados da Nota Fiscal#get

Requisição para a consulta de dados de uma nota fiscal do pedido utilizando o código do pedido e o código da nota fical.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/orders/:order_id/invoices/:invoice_id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:order_id	|Number|	Código do pedido
:invoice_id	|Number|	Código do Nota Fiscal

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "OrderInvoices": [
        {
            "OrderInvoice": {
                "id": "123",
                "order_id": "123",
                "issue_date": "2016-08-15",
                "number": "213123213213",
                "serie": "123",
                "value": "50.85",
                "key": "12345678901234567890123456789012345678901234",
                "link": "http://link.com.br/12345678901234567890123456789012345678901234",
                "xml_danfe": "### XML DANFE ###"
            },
            "ProductCfop": [
                {
                    "product_id": "123",
                    "variation_id": "0",
                    "cfop": "1234",
                    "order_invoice_id": "123"
                }
            ]
        }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
OrderInvoices	|Object|	Listagem das notas fiscais
OrderInvoice	|Object|	Dados da nota fiscal
id	|Number|	Código da nota fiscal
order_id	|String|	Código do pedido
issue_date	|Date|	Data de emissão
Number	|String|	Número da nota fiscal
serie	|String|	Série da nota fiscal
value	|Decimal|	Valor total da nota fiscal
key	|String|	Chave da nota fiscal
link	|String|	URL de acesso da nota fiscal
xml_danfe	|String|	XML Danfe
ProductCfop	|Object|	Dados dos produtos CFOP
product_id	|Number|	Código do produto
variation_id	|Number|	Código da variação
cfop	|Number|	Código CFOP
order_invoice_id	|Number|	Código da nota fiscal

## Consultar Nota por Pedido#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/orders/:id/invoices?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/:id/invoices?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/orders/:id/invoices?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/orders/:id/invoices?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/orders/:id/invoices`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pedido

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "OrderInvoices": [
        {
            "OrderInvoice": {
                "id": "123",
                "order_id": "123",
                "issue_date": "2016-08-15",
                "number": "213123213213",
                "serie": "123",
                "value": "50.85",
                "key": "12345678901234567890123456789012345678901234",
                "link": "http://link.com.br/12345678901234567890123456789012345678901234",
                "xml_danfe": "### XML DANFE ###"
            },
            "ProductCfop": [
                {
                    "product_id": "123",
                    "variation_id": "0",
                    "cfop": "1234",
                    "order_invoice_id": "123"
                }
            ]
        }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
OrderInvoices	|Object|	Listagem das notas fiscais
OrderInvoice	|Object|	Dados da nota fiscal
id	|Number|	Código da nota fiscal
order_id	|String|	Código do pedido
issue_date	|Date|	Data de emissão
Number	|String|	Número da nota fiscal
serie	|String|	Série da nota fiscal
value	|Decimal|	Valor total da nota fiscal
key	|String|	Chave da nota fiscal
link	|String|	URL de acesso da nota fiscal
xml_danfe	|String|	XML Danfe
ProductCfop	|Object|	Dados dos produtos CFOP
product_id	|Number|	Código do produto
variation_id	|Number|	Código da variação
cfop	|Number|	Código CFOP
order_invoice_id	|Number|	Código da nota fiscal

## Cadastrar Nota Fiscal#post

Requisição para inclusão dos dados de nota fiscal de pedidos. Deverá enviar o JSON com os dados da nota fiscal para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/orders/:id/invoices?access_token={{access_token}}' \
--data-urlencode '["issue_date"]=2021-01-15' \
--data-urlencode '["number"]=213123213213' \
--data-urlencode '["serie"]=123' \
--data-urlencode '["value"]=50.90' \
--data-urlencode '["key"]=12345678901234567890123456789012345678901234' \
--data-urlencode '["link"]=http://www.link.com.br/12345678901234567890123456789012345678901234' \
--data-urlencode '["xml_danfe"]=### XML DANFE ###' \
--data-urlencode '["ProductCfop"]["product_id"]=123' \
--data-urlencode '["ProductCfop"]["variation_id"]=0' \
--data-urlencode '["ProductCfop"]["cfop"]=1234'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/:id/invoices?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["issue_date"]' => '2021-01-15',
  '["number"]' => '213123213213',
  '["serie"]' => '123',
  '["value"]' => '50.90',
  '["key"]' => '12345678901234567890123456789012345678901234',
  '["link"]' => 'http://www.link.com.br/12345678901234567890123456789012345678901234',
  '["xml_danfe"]' => '### XML DANFE ###',
  '["ProductCfop"]["product_id"]' => '123',
  '["ProductCfop"]["variation_id"]' => '0',
  '["ProductCfop"]["cfop"]' => '1234'
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
var client = new RestClient("https://{api_address}/orders/:id/invoices?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"issue_date\"]", "2021-01-15");
request.AddParameter("[\"number\"]", "213123213213");
request.AddParameter("[\"serie\"]", "123");
request.AddParameter("[\"value\"]", "50.90");
request.AddParameter("[\"key\"]", "12345678901234567890123456789012345678901234");
request.AddParameter("[\"link\"]", "http://www.link.com.br/12345678901234567890123456789012345678901234");
request.AddParameter("[\"xml_danfe\"]", "### XML DANFE ###");
request.AddParameter("[\"ProductCfop\"][\"product_id\"]", "123");
request.AddParameter("[\"ProductCfop\"][\"variation_id\"]", "0");
request.AddParameter("[\"ProductCfop\"][\"cfop\"]", "1234");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"issue_date\"]=2021-01-15&[\"number\"]=213123213213&[\"serie\"]=123&[\"value\"]=50.90&[\"key\"]=12345678901234567890123456789012345678901234&[\"link\"]=http://www.link.com.br/12345678901234567890123456789012345678901234&[\"xml_danfe\"]=### XML DANFE ###&[\"ProductCfop\"][\"product_id\"]=123&[\"ProductCfop\"][\"variation_id\"]=0&[\"ProductCfop\"][\"cfop\"]=1234");
Request request = new Request.Builder()
  .url("https://{api_address}/orders/:id/invoices?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/orders/:id/invoices`

> Estrutura do Json:

<pre>
{
    "issue_date": "2021-01-15",
    "number": "213123213213",
    "serie": "123",
    "value": "50.85",
    "key": "12345678901234567890123456789012345678901234",
    "link": "http://www.link.com.br/12345678901234567890123456789012345678901234",
    "xml_danfe": "### XML DANFE ###",
    "ProductCfop": [
        {
            "product_id": "123",
            "variation_id": "123",
            "cfop": "1234"
        }
    ]
}
</pre>

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pedido
issue_date	|Date|	Data de emissão
number	|String|	Número da nota fiscal
serie	|String|	Série da nota fiscal
value	|Decimal|	Valor total da nota fiscal
key	|String|	Chave da nota fiscal
link	|String|	URL de acesso da nota fiscal
xml_danfe	|String|	XML Danfe
ProductCfop	|Object|	Dados dos produtos CFOP
product_id	|Number|	Código do produto
variation_id	|Number|	Código da variação
cfop	|Number|	Código CFOP

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
id	|Number|	Código da nota fiscal
code	|Number|	Código do retorno (201)

## Atualizar Dados da Nota Fiscal#put

Requisição para alterar os dados de uma nota fiscal de pedidos. Deverá enviar o JSON com os dados da nota fiscal para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}' \
--data-urlencode '["issue_date"]=2021-01-15' \
--data-urlencode '["number"]=213123213213' \
--data-urlencode '["serie"]=123' \
--data-urlencode '["value"]=50.90' \
--data-urlencode '["key"]=12345678901234567890123456789012345678901234' \
--data-urlencode '["link"]=http://www.link.com.br/12345678901234567890123456789012345678901234' \
--data-urlencode '["xml_danfe"]=### XML DANFE ###' \
--data-urlencode '["ProductCfop"]["product_id"]=123' \
--data-urlencode '["ProductCfop"]["variation_id"]=0' \
--data-urlencode '["ProductCfop"]["cfop"]=1234'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["issue_date"]' => '2021-01-15',
  '["number"]' => '213123213213',
  '["serie"]' => '123',
  '["value"]' => '50.90',
  '["key"]' => '12345678901234567890123456789012345678901234',
  '["link"]' => 'http://www.link.com.br/12345678901234567890123456789012345678901234',
  '["xml_danfe"]' => '### XML DANFE ###',
  '["ProductCfop"]["product_id"]' => '123',
  '["ProductCfop"]["variation_id"]' => '0',
  '["ProductCfop"]["cfop"]' => '1234'
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
var client = new RestClient("https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"issue_date\"]", "2021-01-15");
request.AddParameter("[\"number\"]", "213123213213");
request.AddParameter("[\"serie\"]", "123");
request.AddParameter("[\"value\"]", "50.90");
request.AddParameter("[\"key\"]", "12345678901234567890123456789012345678901234");
request.AddParameter("[\"link\"]", "http://www.link.com.br/12345678901234567890123456789012345678901234");
request.AddParameter("[\"xml_danfe\"]", "### XML DANFE ###");
request.AddParameter("[\"ProductCfop\"][\"product_id\"]", "123");
request.AddParameter("[\"ProductCfop\"][\"variation_id\"]", "0");
request.AddParameter("[\"ProductCfop\"][\"cfop\"]", "1234");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"issue_date\"]=2021-01-15&[\"number\"]=213123213213&[\"serie\"]=123&[\"value\"]=50.90&[\"key\"]=12345678901234567890123456789012345678901234&[\"link\"]=http://www.link.com.br/12345678901234567890123456789012345678901234&[\"xml_danfe\"]=### XML DANFE ###&[\"ProductCfop\"][\"product_id\"]=123&[\"ProductCfop\"][\"variation_id\"]=0&[\"ProductCfop\"][\"cfop\"]=1234");
Request request = new Request.Builder()
  .url("https://{api_address}/orders/:order_id/invoices/:invoice_id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método PUT
`https://{api_address}/orders/:order_id/invoices/:invoice_id`


### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pedido
issue_date	|Date|	Data de emissão
number	|String|	Número da nota fiscal
serie	|String|	Série da nota fiscal
value	|Decimal|	Valor total da nota fiscal
key	|String|	Chave da nota fiscal
link	|String|	URL de acesso da nota fiscal
xml_danfe	|String|	XML Danfe
ProductCfop	|Object|	Dados dos produtos CFOP
product_id	|Number|	Código do produto
variation_id	|Number|	Código da variação
cfop	|Number|	Código CFOP

> Estrutura do Json:

<pre>
{
    "issue_date": "2021-01-15",
    "number": "213123213213",
    "serie": "123",
    "value": "50.90",
    "key": "12345678901234567890123456789012345678901234",
    "link": "http://www.link.com.br/12345678901234567890123456789012345678901234",
    "xml_danfe": "### XML DANFE ###",
    "ProductCfop": [
        {
            "product_id": "123",
            "variation_id": "123",
            "cfop": "1234"
        }
    ]
}
</pre>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Saved",
    "id": "1234",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código da nota fiscal
code	|Number|	Código do retorno (200)

### Considerações:
Com relação ao processo de nota fiscal via API, atualmente apenas informamos como deverá ser enviada a estrutura dos campos dentro da API. A Tray não disponibiliza nenhum exemplo de XML, pois o conteúdo do mesmo, ficará à cargo do integrador que está emitindo a nota fiscal, os dados á serem inseridos no xml, irá depender da configuração entre lojista x ERP.

O conteúdo do XML e os caracteres, o integrador deverá validar diretamente em sua aplicação. O integrador poderá fazer uso de um validador online de xml, para validar e ajustar o envio dos seus dados.

Quando se tratar de um pedido do Mercado Livre, é muito importante o integrador validar junto ao lojista, o fluxo da utilização do Faturar do ML, para que não venha ocorrer problemas de duplicação de notas fiscais.

Sendo assim, é de suma importância que o integrador contemple em sua rotina, a checagem do pedido, para averiguar se o mesmo já possui nota emitida ou não, pois é muito comum retornar um erro genérico do Mercado Livre na API, devido ao pedido já possuir uma nota fiscal e o integrador ficar tentando criar uma nota que já existe. Por este motivo, o fluxo do Faturador do ML deverá ser acertado entre ERP X LOJISTA.