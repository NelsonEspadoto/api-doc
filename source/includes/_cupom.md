# API de Cupom

## Alteração dos Cupons#put

Requisição para alterar dados do cupom.

### Método PUT

**Adicionar produtos, categorias, marcas, clientes ou frete**

Assim como demonstrado no tópico de criação do cupom, basta enviar o PUT do cupom com os dados que deseja adicionar.

**Modificações no cupom que são conflitantes**

O cupom da Tray não é possível utilizar ao mesmo tempo “produtos específicos” + “marcas especificas” + “categorias especificas”, dessa forma caso seu cupom esteja configurado como “categoria especifica” e seja enviado “produtos específicos”, o cupom será alterado para “produtos específicos” e as categorias que estavam antes selecionadas será excluída do cupom.

## Consultar Cupom#get

Requisição para a consulta de dados do cupom.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/discount_coupons/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "paging": {
    "total": 32,
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
    "code",
    "type",
    "description",
    "status",
    "used",
    "accumulated_discount_start",
    "accumulated_discount_end"
  ],
  "appliedFilters": [],
  "DiscountCoupons": [
    {
      "DiscountCoupon": {
        "id": "7",
        "created": "2019-08-22 15:55:42",
        "updated": "2019-08-22 15:55:42",
        "code": "CUPOM",
        "description": "Cupom criado pela API",
        "starts_at": "2019-08-01",
        "ends_at": "2019-08-30",
        "value": "10.00",
        "usage_counter": "0",
        "usage_sum": "0.00",
        "type": "$",
        "value_start": "10.00",
        "value_end": "100.00",
        "usage_sum_limit": "10.00",
        "usage_counter_limit": "0",
        "coupon_type": "loja",
        "local_application": "loja",
        "freight_application": "nao_aplicavel",
        "usage_counter_limit_customer": "10",
        "cumulative_discount": "1"
      }
    }
  ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
DiscountCoupon	|JSON|	Dados do cupom
id	|String|	id do cupom
created	|Date|	Data de criação do cupom
updated	|Date|	Data da última atualização do cupom
code	|String|	Nome do cupom. Obs: Neste campo não é aceito espaço e acentuação nas palavras
description	|String|	Descrição do cupom
starts_at	|Date|	Data de início da validade do cupom 0000-00-00
ends_at	|Date|	Data final da validade do cupom 0000-00-00
value	|Decimal|	Valor de desconto do cupom
usage_counter	|String|	
usage_sum	|Number|	
value_start	|Decimal|	Valor mínimo do produto para ser aplicado o desconto
value_end	|Decimal|	Valor máximo do produto para ser aplicado o desconto
usage_sum_limit	|Decimal|	Limita o valor do cupom
usage_counter_limit	|String|	Limita a quantidade de vezes que o cupom poderá ser usado no geral
usage_counter_limit	|String|	Limita a quantidade de vezes que o cupom poderá ser utilizado por cliente
coupon_type	|String|	
local_application	|String|	
freight_application	|String|	
usage_counter_limit_customer	|String|	
cumulative_discount	|Number|	Permitir que o cupom acumule o desconto com o desconto progressivo. Tabela B

## Consultar Dados do Cupom#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/discount_coupons/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cupom

> Retorno de Sucesso:

<pre>
{
    "DiscountCoupon": {
        "id": "7",
        "created": "2019-08-22 15:55:42",
        "updated": "2019-08-22 15:55:42",
        "code": "CUPOM",
        "description": "Cupom criado pela API",
        "starts_at": "2019-08-01",
        "ends_at": "2019-08-30",
        "value": "10.00",
        "usage_counter": "0",
        "usage_sum": "0.00",
        "type": "$",
        "value_start": "10.00",
        "value_end": "100.00",
        "usage_sum_limit": "10.00",
        "usage_counter_limit": "0",
        "coupon_type": "loja",
        "local_application": "loja",
        "freight_application": "nao_aplicavel",
        "usage_counter_limit_customer": "10",
        "cumulative_discount": "1"
    }
}
</pre>

### CONSULTA DO CUPOM BÁSICO + LIMITAÇÕES (2/3/4/5/6)

## Clientes Relacionados ao Cupom#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/customer_relationship/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/customer_relationship/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/customer_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/customer_relationship/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/discount_coupons/customer_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cupom

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 2,
        "page": 1,
        "offset": 0,
        "limit": 30,
        "maxLimit": 50
    },
    "DiscountCouponCustomers": [
        {
            "DiscountCouponCustomer": {
                "customer_id": "1"
            }
        },
        {
            "DiscountCouponCustomer": {
                "customer_id": "20"
            }
        }
    ]
}
</pre>

## Produtos Relacionados ao Cupom#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/product_relationship/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/product_relationship/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/product_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/product_relationship/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/discount_coupons/product_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cupom

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
    "DiscountCouponProducts": [
        {
            "DiscountCouponProduct": {
                "product_id": "10"
            }
        },
        {
            "DiscountCouponProduct": {
                "product_id": "20"
            }
        },
        {
            "DiscountCouponProduct": {
                "product_id": "30"
            }
        }
    ]
}
</pre>

## Categorias Relacionadas ao Cupom#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/category_relationship/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/category_relationship/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/category_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/category_relationship/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/discount_coupons/category_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cupom

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 2,
        "page": 1,
        "offset": 0,
        "limit": 30,
        "maxLimit": 50
    },
    "DiscountCouponCategories": [
        {
            "DiscountCouponCategory": {
                "category_id": "3"
            }
        },
        {
            "DiscountCouponCategory": {
                "category_id": "11"
            }
        }
    ]
}
</pre>

## Marcas Relacionadas ao Cupom#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/brand_relationship/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/brand_relationship/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/brand_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/brand_relationship/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/discount_coupons/brand_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cupom

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 2,
        "page": 1,
        "offset": 0,
        "limit": 30,
        "maxLimit": 50
    },
    "DiscountCouponBrands": [
        {
            "DiscountCouponBrand": {
                "brand_id": "6"
            }
        },
        {
            "DiscountCouponBrand": {
                "brand_id": "24"
            }
        }
    ]
}
</pre>

## Fretes Relacionados ao Cupom#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/shipping_relationship/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/shipping_relationship/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/shipping_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/shipping_relationship/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/discount_coupons/shipping_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cupom

### Retorno em caso de sucesso (status code 200 ou 201)

> Retornos de Sucessos:

> Exemplo do Frete Grátis:

<pre>
{
    "DiscountCouponShippings": [
        {
            "DiscountCouponShipping": {
                "shipping_id": "1"
            }
        },
        {
            "DiscountCouponShipping": {
                "shipping_id": "2"
            }
        },
        {
            "DiscountCouponShipping": {
                "shipping_id": "52"
            }
        },
        {
            "DiscountCouponShipping": {
                "shipping_id": "20"
            }
        }
    ]
}
</pre>

> Exemplo do Desconto no Frete:

<pre>
{
    "DiscountCouponShippings": [
        {
            "DiscountCouponShipping": {
                "value": "20.00"
            }
        }
    ]
}
</pre>

Como foi visto, temos retorno em separado para os Gets de Clientes relacionados, Produtos, Marca, Categoria e Frete. Para que não seja necessário a consulta em todas as APIs, ao realizar o GET principal ( /discount_coupons?access_token=) é retornado o campos " coupon_type" e " local_application", onde informa qual o tipo de cupom e assim qual API deve ser chamada para obter o restante dos dados.

Exemplo: Caso o " coupon_type" esteja com o valor "clientes", então teremos cliente relacionados e assim é necessário realizar um GET na API de customers para visualizar os clientes relacionados.

Valores possíveis:

* coupon_type: loja, cliente ou troca;
* local_application: loja, produtos, marcas, categorias;
* freight_application: nao_aplicavel, desconto, frete_gratis.

## Cadastrar Cupom#post

Requisição para inclusão de um cupom. Deverá enviar o JSON com os dados do cupom para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/?access_token={{access_token}}' \
--data-urlencode '["DiscountCoupon"]["code"]=123' \
--data-urlencode '["DiscountCoupon"]["description"]=Cupom criado pela API' \
--data-urlencode '["DiscountCoupon"]["starts_at"] =2019-01-10' \
--data-urlencode '["DiscountCoupon"]["ends_at"]=2019-01-20' \
--data-urlencode '["DiscountCoupon"]["value"]=10.00' \
--data-urlencode '["DiscountCoupon"]["type"]=$' \
--data-urlencode '["DiscountCoupon"]["value_start"]=10.00' \
--data-urlencode '["DiscountCoupon"]["value_end"]=100.00' \
--data-urlencode '["DiscountCoupon"]["usage_sum_limit"]=10.00' \
--data-urlencode '["DiscountCoupon"]["usage_counter_limit"]=' \
--data-urlencode '["DiscountCoupon"]["usage_counter_limit_customer"]=10' \
--data-urlencode '["DiscountCoupon"]["cumulative_discount"]=1'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["DiscountCoupon"]["code"]' => '123',
  '["DiscountCoupon"]["description"]' => 'Cupom criado pela API',
  '["DiscountCoupon"]["starts_at"] ' => '2019-01-10',
  '["DiscountCoupon"]["ends_at"]' => '2019-01-20',
  '["DiscountCoupon"]["value"]' => '10.00',
  '["DiscountCoupon"]["type"]' => '$',
  '["DiscountCoupon"]["value_start"]' => '10.00',
  '["DiscountCoupon"]["value_end"]' => '100.00',
  '["DiscountCoupon"]["usage_sum_limit"]' => '10.00',
  '["DiscountCoupon"]["usage_counter_limit"]' => '',
  '["DiscountCoupon"]["usage_counter_limit_customer"]' => '10',
  '["DiscountCoupon"]["cumulative_discount"]' => '1'
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
var client = new RestClient("https://{api_address}/discount_coupons/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"DiscountCoupon\"][\"code\"]", "123");
request.AddParameter("[\"DiscountCoupon\"][\"description\"]", "Cupom criado pela API");
request.AddParameter("[\"DiscountCoupon\"][\"starts_at\"] ", "2019-01-10");
request.AddParameter("[\"DiscountCoupon\"][\"ends_at\"]", "2019-01-20");
request.AddParameter("[\"DiscountCoupon\"][\"value\"]", "10.00");
request.AddParameter("[\"DiscountCoupon\"][\"type\"]", "$");
request.AddParameter("[\"DiscountCoupon\"][\"value_start\"]", "10.00");
request.AddParameter("[\"DiscountCoupon\"][\"value_end\"]", "100.00");
request.AddParameter("[\"DiscountCoupon\"][\"usage_sum_limit\"]", "10.00");
request.AddParameter("[\"DiscountCoupon\"][\"usage_counter_limit\"]", "");
request.AddParameter("[\"DiscountCoupon\"][\"usage_counter_limit_customer\"]", "10");
request.AddParameter("[\"DiscountCoupon\"][\"cumulative_discount\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"DiscountCoupon\"][\"code\"]=123&[\"DiscountCoupon\"][\"description\"]=Cupom criado pela API&[\"DiscountCoupon\"][\"starts_at\"] =2019-01-10&[\"DiscountCoupon\"][\"ends_at\"]=2019-01-20&[\"DiscountCoupon\"][\"value\"]=10.00&[\"DiscountCoupon\"][\"type\"]=$&[\"DiscountCoupon\"][\"value_start\"]=10.00&[\"DiscountCoupon\"][\"value_end\"]=100.00&[\"DiscountCoupon\"][\"usage_sum_limit\"]=10.00&[\"DiscountCoupon\"][\"usage_counter_limit\"]=&[\"DiscountCoupon\"][\"usage_counter_limit_customer\"]=10&[\"DiscountCoupon\"][\"cumulative_discount\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/discount_coupons/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCoupon	|JSON|	Dados do cupom
code	|String|	Nome do cupom. Obs: Neste campo não é aceito espaço e acentuação nas palavras
description	|String|	Descrição do cupom
starts_at	|Date|	Data de início da validade do cupom 0000-00-00
ends_at	|Date|	Data final da validade do cupom 0000-00-00
value	|Decimal|	Valor de desconto do cupom
type	|String|	Tipo de desconto em reais ou percentual. Tabela A
value_start	|Decimal|	Valor mínimo do produto para ser aplicado o desconto
value_end	|Decimal|	Valor máximo do produto para ser aplicado o desconto
usage_sum_limit	|Decimal|	Limita o valor do cupom
usage_counter_limit	|String|	Limita a quantidade de vezes que o cupom poderá ser usado no geral
usage_counter_limit_customer	|String|	Limita a quantidade de vezes que o cupom poderá ser utilizado por cliente
cumulative_discount	|Number|	Permitir que o cupom acumule o desconto com o desconto progressivo. Tabela B

**Observação: Ao utilizar somente o CUPOM GENÉRICO, sem realizar nenhum outro POST relacinando a clientes/produtos/categorias/marcas, o cupom poderá ser aplicado à toda a loja e à todos os clientes**

> Estrutura de Json:

<pre>
{
  "DiscountCoupon": {
      "code": "123",
      "description": "Cupom criado pela API",
      "starts_at": "2019-01-10",
      "ends_at": "2019-01-20",
      "value": "10.00",
      "type": "$",
      "value_start": "10",
      "value_end": "100.00",
      "usage_sum_limit": "",
      "usage_counter_limit": "",
      "usage_counter_limit_customer": "10",
      "cumulative_discount": "1"
  }
}
</pre>

Observação: Caso não deseje limitar o valor do produto, para que o cupom seja aplicado a todos os produtos de quaisquer valores, você poderá enviar os campos "value_start", "value_end" vazios.

Se não desejar limitar a quantidade de uso do cupom, poderá também enviar esses campos vazios "usage_counter_limit", "usage_counter_limit_customer".

Esses campos `"usage_counter_limit":`, `"usage_counter_limit_customer":` precisam estar alinhados, pois um limita a quantidade em que o cupom poderá ser utilizado e outro limita quantas vezes o cupom poderá ser utilizado pelo mesmo cliente. Se desejar que o mesmo cliente utilize o cupom por duas vezes, o campo `"usage_counter_limit":` deverá conter a mesma quantidade, no caso 2, ou então ser enviado vazio, para não dar conflito na hora do consumidor aplicar o cupom.

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "message": "Created",
  "id": "1",
  "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cupom
code	|Number|	Código do retorno (201)

### CUPOM BÁSICO + LIMITAÇÕES (2/3/4/5/6/7/8)

## Relacionando Cliente no Cupom#post

O envio dos dados dentro do json, é limitado a 100 registros por POST. Dessa forma caso tenha 200 registros, será necessários enviar dois POST com 100 registros cada. Cada id dentro das chaves, representará um registro de informação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}' \
--data-raw '{
  "DiscountCouponCustomer": [
    {
      "customer_id": "10"
    },
    {
      "customer_id": "20"
    }
  ]
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n  "DiscountCouponCustomer": [\n    {\n      "customer_id": "10"\n    },\n    {\n      "customer_id": "20"\n    }\n  ]\n}');
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
var client = new RestClient("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n  \"DiscountCouponCustomer\": [\n    {\n      \"customer_id\": \"10\"\n    },\n    {\n      \"customer_id\": \"20\"\n    }\n  ]\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n  \"DiscountCouponCustomer\": [\n    {\n      \"customer_id\": \"10\"\n    },\n    {\n      \"customer_id\": \"20\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCouponCustomer	|JSON|	Dados do cupom
customer_id	|String|	Id do cliente

> Estrutura de Json:

<pre>
{
  "DiscountCouponCustomer": [
    {
      "customer_id": "10"
    },
    {
      "customer_id": "20"
    }
  ]
}
</pre>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "1",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cupom
code	|Number|	Código do retorno (201)

## Relacionando Produtos no Cupom#post

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}' \
--data-raw '{
  "DiscountCouponProduct": [
    {
      "product_id": "10"
    },
    {
      "product_id": "20"
    }
  ]
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n  "DiscountCouponProduct": [\n    {\n      "product_id": "10"\n    },\n    {\n      "product_id": "20"\n    }\n  ]\n}');
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
var client = new RestClient("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n  \"DiscountCouponProduct\": [\n    {\n      \"product_id\": \"10\"\n    },\n    {\n      \"product_id\": \"20\"\n    }\n  ]\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n  \"DiscountCouponProduct\": [\n    {\n      \"product_id\": \"10\"\n    },\n    {\n      \"product_id\": \"20\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCouponCustomer	|JSON|	Dados do cupom
product_id	|String|	Id do produto

> Estrutura de Json:

<pre>
{
  "DiscountCouponProduct": [
    {
      "product_id": "10"
    },
    {
      "product_id": "20"
    }
  ]
}
</pre>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "1",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cupom
code	|Number|	Código do retorno (201)

## Relacionando Categorias no Cupom#post

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}' \
--data-raw '{
  "DiscountCouponCategory": [
    {
      "category_id": "10"
    },
    {
      "category_id": "20"
    }
  ]
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n  "DiscountCouponCategory": [\n    {\n      "category_id": "10"\n    },\n    {\n      "category_id": "20"\n    }\n  ]\n}');
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
var client = new RestClient("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n  \"DiscountCouponCategory\": [\n    {\n      \"category_id\": \"10\"\n    },\n    {\n      \"category_id\": \"20\"\n    }\n  ]\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n  \"DiscountCouponCategory\": [\n    {\n      \"category_id\": \"10\"\n    },\n    {\n      \"category_id\": \"20\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

O envio dos dados dentro do json, é limitado a 100 registros por POST. Dessa forma caso tenha 200 registros, será necessários enviar dois POST com 100 registros cada. Cada id dentro das chaves, representará um registro de informação.

### Método POST
`https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCouponCategory	|JSON|	Dados do cupom
category_id	|String|	Id da categoria

> Estrutura de Json:

<pre>
{
  "DiscountCouponCategory": [
    {
      "category_id": "10"
    },
    {
      "category_id": "20"
    }
  ]
}
</pre>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "1",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cupom
code	|Number|	Código do retorno (201)

## Relacionando Marcas no Cupom#post

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}' \
--data-raw '{
  "DiscountCouponBrand": [
    {
      "brand_id": "10"
    },
    {
      "brand_id": "20"
    }
  ]
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n  "DiscountCouponBrand": [\n    {\n      "brand_id": "10"\n    },\n    {\n      "brand_id": "20"\n    }\n  ]\n}');
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
var client = new RestClient("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n  \"DiscountCouponBrand\": [\n    {\n      \"brand_id\": \"10\"\n    },\n    {\n      \"brand_id\": \"20\"\n    }\n  ]\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n  \"DiscountCouponBrand\": [\n    {\n      \"brand_id\": \"10\"\n    },\n    {\n      \"brand_id\": \"20\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

O envio dos dados dentro do json, é limitado a 100 registros por POST. Dessa forma caso tenha 200 registros, será necessários enviar dois POST com 100 registros cada. Cada id dentro das chaves, representará um registro de informação.

### Método POST
`https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCouponBrand	|JSON|	Dados do cupom
brand_id	|String|	Id da marca

> Estrutura de Json:

<pre>
{
  "DiscountCouponBrand": [
    {
      "brand_id": "10"
    },
    {
      "brand_id": "20"
    }
  ]
}
</pre>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "1",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cupom
code	|Number|	Código do retorno (201)

## Relacionando Frete Grátis no Cupom#post

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}' \
--data-raw '{
  "DiscountCouponShipping": [
    {
      "shipping_id": "10"
    },
    {
      "shipping_id": "20"
    }
  ]
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n  "DiscountCouponShipping": [\n    {\n      "shipping_id": "10"\n    },\n    {\n      "shipping_id": "20"\n    }\n  ]\n}');
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
var client = new RestClient("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n  \"DiscountCouponShipping\": [\n    {\n      \"shipping_id\": \"10\"\n    },\n    {\n      \"shipping_id\": \"20\"\n    }\n  ]\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n  \"DiscountCouponShipping\": [\n    {\n      \"shipping_id\": \"10\"\n    },\n    {\n      \"shipping_id\": \"20\"\n    }\n  ]\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

O envio dos dados dentro do json, é limitado a 100 registros por POST. Dessa forma caso tenha 200 registros, será necessários enviar dois POST com 100 registros cada. Cada id dentro das chaves, representará um registro de informação. Para informar o id do frete, você poderá capturar através dessa API: [https://traydevelopers.zendesk.com/hc/pt-br/articles/360012934234-Listagem-de-Formas-de-Envio](https://traydevelopers.zendesk.com/hc/pt-br/articles/360012934234-Listagem-de-Formas-de-Envio).

### Método POST
`https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCouponShipping	|JSON|	Dados do cupom
shipping_id	|String|	Id da forma de envio do frete

> Estrutura de Json:

<pre>
{
  "DiscountCouponShipping": [
    {
      "shipping_id": "10"
    },
    {
      "shipping_id": "20"
    }
  ]
}
</pre>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "1",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cupom
code	|Number|	Código do retorno (201)

## Relacionando Desconto no Frete no Cupom#post

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}' \
--data-raw '{
  "DiscountCouponShipping": {
    "value": "10"
  }
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n  "DiscountCouponShipping": {\n    "value": "10"\n  }\n}');
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
var client = new RestClient("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n  \"DiscountCouponShipping\": {\n    \"value\": \"10\"\n  }\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n  \"DiscountCouponShipping\": {\n    \"value\": \"10\"\n  }\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

O desconto no frete sempre será em reais, nunca será em percentual, mesmo que no cupom genérico o tipo de desconto no campo "type" tenha sido em percentual.

### Método POST
`https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCouponShipping	|JSON|	Dados do cupom
value	|String|	Valor do desconto

> Estrutura de Json:

<pre>
{
  "DiscountCouponShipping": {
    "value": "10"
  }
}
</pre>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "1",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cupom
code	|Number|	Código do retorno (201)

## Cupom de Troca#post

```shell
curl --location -g --request POST 'https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}' \
--data-raw '{
  "DiscountCouponCustomer": {
    "order_id": "10"
  }
}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n  "DiscountCouponCustomer": {\n    "order_id": "10"\n  }\n}');
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
var client = new RestClient("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n  \"DiscountCouponCustomer\": {\n    \"order_id\": \"10\"\n  }\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n  \"DiscountCouponCustomer\": {\n    \"order_id\": \"10\"\n  }\n}");
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

Após criar o “CUPOM GENÉRICO - BÁSICO”, é possível apenas enviar o código do pedido nos dados do json e o cupom será automaticamente relacionado ao cliente e o desconto será com base no valor do pedido.

### Método POST
`https://{api_address}/discount_coupons/create_relationship/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
DiscountCouponShipping	|JSON|	Dados do cupom
value	|String|	Valor do desconto

> Estrutura de Json:

<pre>
{
  "DiscountCouponCustomer": {
    "order_id": "10"
  }
}
</pre>

### Tabelas Auxiliares de Cupons

### Tabela A - Tipo de desconto em reais ou percentual (campo type)
Valor|Descrição
-----|---------
$|	Desconto em reais
%|	Desconto em percentual

### Tabela B - Permitir que o cupom acumule o desconto com o desconto progressivo (campo cumulative_discount)
Valor|Descrição
-----|---------
0|Desconto não acumulativo
1|Desconto acumulativo

## Exclusão do Cupom Genérico#delete

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/discount_coupons/:id/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/discount_coupons/:id/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/discount_coupons/:id/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/discount_coupons/:id/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método Delete
`https://{api_address}/discount_coupons/:id/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cupom

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
id	|Number|	Código do cliente
code	|Number|	Código do retorno (200)

## Exclusão do cupom que contenha produtos específicos, categorias, marcas, clientes ou fretes associados#delete

Para excluir um produto que esteja relacionado ao produto, categoria, marca, cliente ou frete, é possível através dos métodos abaixo:

### Método Delete
`https://{api_address}/delete_relationship/:id/?access_token={{access_token}}`

> Exemplo de remoção de cliente:

<pre>
{
    "DiscountCouponCustomer": [
        {
        "customer_id": "10"
    },
    {
        "customer_id": "20"
    }
    ]
}
</pre>

> Exemplo de remoção de TODOS os clientes:

<pre>
{
    "DiscountCouponCustomer":
        {
        "delete": "all"
    }
}
</pre>

> Exemplo de remoção de produtos:

<pre>
{
    "DiscountCouponProduct": [
        {
        "product_id": "10"
    },
    {
        "product_id": "20"
    }
    ]
}
</pre>

> Exemplo de remoção de todos os produtos:

<pre>
{
    "DiscountCouponProduct":
        {
        "delete": "all"
    }
}
</pre>

> Exemplo remoção de categorias:

<pre>
{
    "DiscountCouponCategory": [
        {
        "category_id": "10"
    },
    {
        "category_id": "20"
    }
    ]
}
</pre>

> Exemplo de remoção de todas as categorias:

<pre>
{
    "DiscountCouponCategory":
        {
        "delete": "all"
    }
}
</pre>

> Exemplo de remoção de marcas:

<pre>
{
    "DiscountCouponBrand": [
        {
        "brand_id": "10"
    },
    {
        "brand_id": "20"
    }
    ]
}
</pre>

> Exemplo de remoção de todas as marcas:

<pre>
{
    "DiscountCouponBrand":
        {
        "delete": "all"
    }
}
</pre>

> Exemplo de remoção de fretes ou desconto no frete:

<pre>
{
    "DiscountCouponShipping": [
        {
        "shipping_id": "10"
    },
    {
        "shipping_id": "20"
    }
    ]
}
</pre>

> Exemplo de remoção de todos os desconto de frete:

<pre>
{
    "DiscountCouponShipping":
        {
        "delete": "all"
    }
}
</pre>
