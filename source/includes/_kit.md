# API de Kit

## Atualizar Dados do Kit#put

Atualmente o vínculo de produtos ao kit não tem PUT, apenas POST. Dessa forma caso deseje alterar os dados do kit, será necessário efetuar a exclusão e posteriormente realizar um novo POST.

## Listagem Geral de Kits#get

Requisição para a consultar dados do kit.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products/kits/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/kits/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/kits/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products/kits/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/products/kits/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

### Retorno em caso de sucesso (status code 200 ou 201)

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
    "sort": [
        {
            "id": "asc"
        }
    ],
    "availableFilters": [
        "product_parent_id",
        "product_id"
    ],
    "appliedFilters": [],
    "ProductKits": [
        {
            "ProductKit": {
                "id": "1",
                "product_parent_id": "7035",
                "product_id": "7037",
                "quantity": "1",
                "price": "98.05",
                "price_rule": "1",
                "discount_type": "$",
                "discount_value": "1.95",
                "brand": "",
                "warranty": "",
                "availability_days": "0",
                "ProductVariantKit": []
            }
        },
        {
            "ProductKit": {
                "id": "3",
                "product_parent_id": "7035",
                "product_id": "7037",
                "quantity": "1",
                "price": "98.05",
                "price_rule": "1",
                "discount_type": "$",
                "discount_value": "1.95",
                "brand": "",
                "warranty": "",
                "availability_days": "0",
                "ProductVariantKit": []
            }
        }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
ProductKit	|JSON|	Dados do kit
id	|String|	id do kit
product_parent_id	|String|	Será o id do produto principal, que irá compor o kit
product_id	|String|	Será o id do produto que irá compor o kit
quantity	|String|	Quantidade
price	|String|	Valor do kit
price_rule	|String|	Valor do produto
discount_type	|String|	Valor do desconto em reais ou percentual
discount_value |String|	Valor de desconto do kit
brand	|String|	Marca
warranty	|String|	Dados da garantia do kit
availability_days	|Number|	Disponbilidade em dias do kit
ProductVariantKit	|String|	Variação do kit

## Consultar Dados do Kit#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products/kits/?access_token={{access_token}}&product_parent_id=:id'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/kits/?access_token={{access_token}}&product_parent_id=:id');
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
var client = new RestClient("https://{api_address}/products/kits/?access_token={{access_token}}&product_parent_id=:id");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products/kits/?access_token={{access_token}}&product_parent_id=:id")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/products/kits/?access_token={token}&product_parent_id=:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
product_parent_id	|String|	id

> Retorno em caso de sucesso (status code 200 ou 201)

<pre>
{
    "paging": {
        "total": 1,
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
        "product_parent_id",
        "product_id"
    ],
    "appliedFilters": {
        "ProductKit.product_parent_id": "7069"
    },
    "ProductKits": [
        {
            "ProductKit": {
                "id": "9",
                "product_parent_id": "7069",
                "product_id": "44",
                "quantity": "1",
                "price": "218.05",
                "price_rule": "1",
                "discount_type": "$",
                "discount_value": "1.95",
                "brand": "",
                "warranty": "",
                "availability_days": "0",
                "ProductVariantKit": []
            }
        }
    ]
}
</pre>

## Cadastrar Kit#post

Requisição para inclusão de um kit. Deverá enviar o JSON com os dados do kit para a criação.

Primeiramente, para trabalhar com kit, é necessário que esse recurso esteja habilitado na loja, caso contrário será necessário entrar em contato diretamente com a equipe de atendimento para efetuar a liberação.

Inicialmente será necessário criar um produto utilizando a mesma estrutura da API de Produtos, no entanto, no json você deverá vincular o campo is_kit=1

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/products/?access_token={{access_token}}' \
--data-urlencode '["Product"]["is_kit"]=1' \
--data-urlencode '["Product"]["name"]=Produto Kit Teste API' \
--data-urlencode '["Product"]["description"]=Descrição do Produto de Teste da API' \
--data-urlencode '["Product"]["description_small"]=Produto de Teste da API' \
--data-urlencode '["Product"]["price"]=3' \
--data-urlencode '["Product"]["stock"]=3' \
--data-urlencode '["Product"]["category_id"]=3' \
--data-urlencode '["Product"]["available"]=1' \
--data-urlencode '["Product"]["reference"]=111' \
--data-urlencode '["Product"]["related_categories"]=[]' \
--data-urlencode '["Product"]["release_date"]=' \
--data-urlencode '["Product"]["picture_source_1"]=http://bancodeimagens/imagem1.jpg'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Product"]["is_kit"]' => '1',
  '["Product"]["name"]' => 'Produto Kit Teste API',
  '["Product"]["description"]' => 'Descrição do Produto de Teste da API',
  '["Product"]["description_small"]' => 'Produto de Teste da API',
  '["Product"]["price"]' => '3',
  '["Product"]["stock"]' => '3',
  '["Product"]["category_id"]' => '3',
  '["Product"]["available"]' => '1',
  '["Product"]["reference"]' => '111',
  '["Product"]["related_categories"]' => '[]',
  '["Product"]["release_date"]' => '',
  '["Product"]["picture_source_1"]' => 'http://bancodeimagens/imagem1.jpg'
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
var client = new RestClient("https://{api_address}/products/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Product\"][\"is_kit\"]", "1");
request.AddParameter("[\"Product\"][\"name\"]", "Produto Kit Teste API");
request.AddParameter("[\"Product\"][\"description\"]", "Descrição do Produto de Teste da API");
request.AddParameter("[\"Product\"][\"description_small\"]", "Produto de Teste da API");
request.AddParameter("[\"Product\"][\"price\"]", "3");
request.AddParameter("[\"Product\"][\"stock\"]", "3");
request.AddParameter("[\"Product\"][\"category_id\"]", "3");
request.AddParameter("[\"Product\"][\"available\"]", "1");
request.AddParameter("[\"Product\"][\"reference\"]", "111");
request.AddParameter("[\"Product\"][\"related_categories\"]", "[]");
request.AddParameter("[\"Product\"][\"release_date\"]", "");
request.AddParameter("[\"Product\"][\"picture_source_1\"]", "http://bancodeimagens/imagem1.jpg");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Product\"][\"is_kit\"]=1&[\"Product\"][\"name\"]=Produto Kit Teste API&[\"Product\"][\"description\"]=Descrição do Produto de Teste da API&[\"Product\"][\"description_small\"]=Produto de Teste da API&[\"Product\"][\"price\"]=3&[\"Product\"][\"stock\"]=3&[\"Product\"][\"category_id\"]=3&[\"Product\"][\"available\"]=1&[\"Product\"][\"reference\"]=111&[\"Product\"][\"related_categories\"]=[]&[\"Product\"][\"release_date\"]=&[\"Product\"][\"picture_source_1\"]=http://bancodeimagens/imagem1.jpg");
Request request = new Request.Builder()
  .url("https://{api_address}/products/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/products/?access_token={{access_token}}`

Para efetuar a criação do kit via API, é necessário que os produtos já existam na loja, para então criar o kit, na criação do produto tipo kit, deverá ser vinculado o is_kit = 1 no produto considerado como o principal na formação do kit, o que irá acompanhar os demais id de produtos para compor o kit.
E deverá ser informado is_kit = 0 para os produtos que servirão como parte do kit, porém não será a peça principal.

### 1 - Criar o produto através do método POST, utilizando a API de Cadastrar Produto

### Parâmetros enviados:

> Estrutura de Json:

<pre>
{
    "Product":{
        "is_kit": 1,
        "name":"Produto Kit Teste API",
        "description":"Descrição do Produto de Teste da API",
        "description_small":"Produto de Teste da API",
       "price": 10.00,
       "stock": 3,
 		"category_id":"3",
        "available":1,
        "reference":"111",
        "related_categories":[],
        "release_date":"",
        "picture_source_1":"http://bancodeimagens/imagem1.jpg",
        "picture_source_2":"http://bancodeimagens/imagem2.jpg",
        "picture_source_3":"http://bancodeimagens/imagem3.jpg"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Product	|JSON|	Dados do produto
is_kit	|Number|	Produto possui kit (Veja Tabela A)
name	|String (200)|	Nome do produto
description	|String (4800)|	Descrição do produto
description_small	|String (500)|	Descrição resumida do produto
price	|Number|	Descrição resumida do produto
stock	|String|	Descrição resumida do produto
category_id	|Number|	Código da categoria principal do produto
available	|Number|	Produto disponível (Veja Tabela B)
reference	|String (120)|	Referência do produto
related_categories	|Number|	Categorias adicionais do produto (separados por vírgula)
release_date	|Date|	Data de lançamento do produto (Formato: aaaa-mm-dd)
picture_source_1	|String|	Imagem principal do produto (Informar a URL para cadastro)
picture_source_2	|String|	Imagem do produto - imagem 2 (Informar a URL para cadastro)
picture_source_3	|String|	Imagem do produto - imagem 3 (Informar a URL para cadastro)
picture_source_4	|String|	Imagem do produto - imagem 4 (Informar a URL para cadastro)
picture_source_5	|String|	Imagem do produto - imagem 5 (Informar a URL para cadastro)
picture_source_6	|String|	Imagem do produto - imagem 6 (Informar a URL para cadastro)

<aside class="warning">OBS: price precisa ser passado como 0 mesmo, pois o preço do kit é um cálculo dos produtos que compõe o kit</aside>

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "7035",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do cliente
code	|Number|	Código do retorno (201)

### 2 - Criar o kit (vínculo do produto is_kit com os produtos que compõe o kit), por meio do método POST.

### Método POST
`https://{api_address}/products/kits/?access_token={token}`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
    [  
        {  
            "product_parent_id":"799",
            "product_id":"6",
            "quantity":"1",
            "price_rule":"1",
            "discount_type":"$",
            "discount_value":1.95
        },
        {  
            "product_parent_id":"799",
            "product_id":"2",
            "quantity":"1",
            "price_rule":"2",
            "discount_type":"%",
            "discount_value":3
        },
        {  
            "product_parent_id":"799",
            "product_id":"87",
            "quantity":"1",
            "price_rule":"1",
            "discount_type":"%",
            "discount_value":3
        }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
product_parent_id	|String|	Será o id do produto principal, que irá compor o kit, inclusive o mesmo deverá ter sido cadastrado com is_kit = 1
product_id	|String|	Será o id do produto que irá compor o kit, o mesmo deverá ter sido cadastrado com is_kit = 0
quantity	|String|	Quantidade do produto para compor o kit
price_rule	|String|	Valor do produto (Veja Tabela C)
discount_type	|String|	Valor do desconto em reais ou percentual (Veja Tabela D)
discount_value	|Number|	Valor do desconto

Dessa forma, se um kit for composto por 3 produtos, o produto pai deverá ser carregado no campo `"product_parent_id"` e os demais produtos deverá ser informado no campo `"product_id"`, sendo um produto em cada nó.

No caso, na exemplificação abaixo, os produtos de id: 6;2;87 serão componentes para a criação do kit do produto 799.

Lembrando que para a formação do kit, é necessário que o mesmo seja formado por três produtos no total e possua no mínimo dois nós.
Em caso de ser um kit formado somente de um id de produto "pai" e um id de produto "filho", o kit deverá ser formado então com uma peça do produto pai e duas peças do produto filho, sendo representados em dois nós distintos, mesmo o produto filho sendo o mesmo em cada nó.

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

A visualização dos produtos dentro do painel administrativo seguirá da seguinte forma:

Visualização de produto kit "pai" (is_kit = 1) = Será visualizado através do caminho **Produtos > Kit de Produtos**
Visualização de produto que apenas compõe o kit "filho" (is_kit = 0) = Será visualizado através do caminho **Produtos > Produtos cadastrados**

### Tabelas Auxiliares de kits

### Tabela A - Kit do produto (campo is_kit)
Valor|Descrição
-----|---------
0|Produto não possui kit
1|Produto possui kit

### Tabela B - Disponibilidade do produto (campo available)
Valor|Descrição
-----|---------
0|Produto indisponível
1|Produto disponível

### Tabela C - Valor do produto (campo price_rule)
Valor|Descrição
-----|---------
1|Preço igual da loja
2|Preço com desconto

### Tabela D - Valor do desconto (campo discount_type)
Valor|Descrição
-----|---------
$|	Valor do desconto em reais
%|Valor do desconto em percentual

