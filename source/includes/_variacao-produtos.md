# APIs de Variação de Produtos

## Listagem de Variações#get

Requisição para consultar os dados de diversas variações.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products/variants/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/variants/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/variants/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products/variants/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/products/variants/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
id	|Number|	Código da variação
product_id	|Number|	Código do produto principal
ean	|String|	EAN da variação
price	|Decimal|	Preço da variação
promotional_price	|Decimal|	Preço promocional da variação
stock	|Number|	Estoque da variação
minimum_stock	|Number|	Estoque mínimo da variação
modified	|Date|	Data de modificação (Pode-se enviar um intervalo de data, ex.: [start], [end] (Formato: aaaa-mm-dd))
sort	|String|	Ordenação de listagem (ex.: [campo]_[asc/desc])
limit	|Number|	Quantidade de registros (max. 50)
page	|Number|	Número da página da consulta

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 55,
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
        "product_id",
        "ean",
        "price",
        "promotional_price",
        "stock",
        "minimum_stock",
        "value_1",
        "reference",
        "value_2",
        "type_1",
        "type_2",
        "modified"
    ],
    "appliedFilters": [],
    "Variants": [
        {
            "Variant": {
                "id": "1233",
                "ean": "123",
                "order": "1",
                "product_id": "18",
                "price": "12.50",
                "cost_price": "10.00",
                "stock": "51",
                "minimum_stock": "1",
                "reference": "THR016-1",
                "weight": "21",
                "length": "21",
                "width": "21",
                "height": "21",
                "start_promotion": "2019-01-01",
                "end_promotion": "2019-01-10",
                "promotional_price": "10.00",
                "payment_option": "R$ 11,25 à vista com desconto Boleto - Yapay",
                "payment_option_details": [
                    {
                        "display_name": "Boleto - Yapay",
                        "type": "bank_billet",
                        "plots": "1",
                        "value": "11.25",
                        "tax": "0.00"
                    }
                ],
                "available": "1",
                "illustrative_image": {
                    "http": "http://urldaimagem/img/img_prod/123/123.png",
                    "https": "https://urldaimagem/img/img_prod/123/123.png"
                },
                "quantity_sold": "10",
                "color_id_1": "2",
                "color_id_2": "0",
                "cubic_weight": "1930",
                "Sku": [
                    {
                        "type": "Cor",
                        "value": "Azul",
                        "image": "http://urldaimagem/img/img_prod/123/cor_2.png?20160622100723",
                        "image_secure": "https://urldaimagem/img/img_prod/123/cor_2.png?20160622100723"
                    },
                    {
                        "type": "Tamanho",
                        "value": "38"
                    }
                ],
                "VariantImage": [
                    {
                        "http": "http://urldaimagem/img/img_prod/123/123.png",
                        "https": "https://urldaimagem/img/img_prod/123/123.png",
                        "thumbs": {
                            "30": {
                                "http": "http://urldaimagem/img/img_prod/123/30_123.png",
                                "https": "https://urldaimagem/img/img_prod/123/30_123.png"
                            },
                            "90": {
                                "http": "http://urldaimagem/img/img_prod/123/90_123.png",
                                "https": "https://urldaimagem/img/img_prod/123/90_123.png"
                            },
                            "180": {
                                "http": "http://urldaimagem/img/img_prod/123/180_123.png",
                                "https": "https://urldaimagem/img/img_prod/123/180_123.png"
                            }
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
access_token	|String|	Chave de acesso
paging	|Object|	Dados de raginação
total	|Number|	Total de tegistros
page	|Number|	Páginas corrente
offset	|Number|	Registro inicial da página
limit	|Number|	Limite de registros
maxLimit	|Number|	Máximo de registros
sort	|Object[ ]|	Ordenação
availableFilters	|String[ ]|	Filtros disponíveis
appliedFilters	|String[ ]|	Filtros utilizados
Variants	|Object[ ]|	Dados da variações dos produtos
Variant	|Object|	Dados da variação
id	|Number|	Código da variação
ean	|String|	Código EAN da variação
order	|String|	Ordem da visualização da variação
product_id	|Number|	Código
price	|Decimal|	Preço da variação
cost_price	|Decimal|	Preço da variação de custo da variação
stock	|Number|	Estoque da variação
minimum_stock	|Number|	Estoque mínimo da variação
reference	|String|	Referência da variação
weight	|Decimal|	Peso da variação
cubic_weight	|Decimal|	Peso cubico da variação
length	|Decimal|	Comprimento da variação
width	|Decimal|	Largura da variação
height	|Decimal|	Altura da variação
start_promotion	|Date|	Data de início de promoção da variação
end_promotion	|Date|	Data de termino de promoção da variação
promotional_price	|Decimal|	Preço promocional da variação
payment_option	|String|	Detalhes/Opções de pagamento da variação
payment_option_details	|Object[ ]|	Detalhes/Opções separadas de pagamento da variação
display_name	|String|	Nome da forma de pagamento da variação
type	|String|	Typo da forma de pagamento da variação
plots	|Number|	Quantidade de parcelas da forma de pagamento da variação
value	|Decimal|	Valor da parcela da forma de pagamento da variação
tax	|Decimal|	Taxa da parcela da forma de pagamento da variação
available	|Number|	Variação disponível (Veja Tabela A)
illustrative_image	|String|	Imagem ilustrativa da variação
color_id_1	|String|	Código da cor primária da variação
color_id_2	|String|	Código da cor secundaria da variação
type	|String|	Tipo de SKU da variação
value	|String|	Valor do SKU da variação
image	|String|	URL da imagem do SKU da variação
image_secure	|String|	URL segura da imagem do SKU da variação
VariantImage	|Object[ ]|	Imagens da variação
http	|String|	URL da imagem da variação
https	|String|	URL segura da imagem da variação
thumbs	|Object|	Miniaturas da imagem da variação
30	|Object|	Miniaturas da imagem da variação (30px)
http	|String|	URL da miniaturas da imagem da variação (30px)
https	|String|	URL segura da miniaturas da imagem da variação (30px)
90	|Object|	Miniaturas da imagem (90px)
http	|String|	URL da miniaturas da imagem da variação (90px)
https	|String|	URL segura da miniaturas da imagem da variação (90px)
180	|Object|	Miniaturas da imagem da variação (180px)
http	|String|	URL da miniaturas da imagem da variação (180px)
https	|String|	URL segura da miniaturas da imagem da variação (180px)

## Consultar Dados da Variação#get

Requisição para consultar os dados de uma variação do produto.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products/variants/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/variants/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/variants/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products/variants/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/products/variants/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da Variação do produto

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "Variant": {
        "id": "255",
        "ean": "125",
        "order": "1",
        "product_id": "18",
        "price": "12.50",
        "cost_price": "10.00",
        "stock": "51",
        "minimum_stock": "1",
        "reference": "THR016-2",
        "weight": "21",
        "cubic_weight": "1930",
        "length": "21",
        "width": "21",
        "height": "21",
        "start_promotion": "2019-01-01",
        "end_promotion": "2019-01-10",
        "promotional_price": "10.00",
        "payment_option": "R$ 11,25 à vista com desconto Boleto - Yapay",
        "payment_option_details": [
            {
                "display_name": "Boleto - Yapay",
                "type": "bank_billet",
                "plots": "1",
                "value": "11.25",
                "tax": "0.00"
            }
        ],
        "available": "1",
        "illustrative_image": "",
        "Sku": [
            {
                "type": "Cor",
                "value": "Preta"
            },
            {
                "type": "Tamanho",
                "value": "40"
            }
        ],
        "quantity_sold": "10",
        "color_id_1": "23",
        "color_id_2": "0",
        "VariantImage": [
            {
                "http": "http://images.tcdn.com.br/img/img_prod/406562/18_123.jpg",
                "https": "https://images.tcdn.com.br/img/img_prod/406562/18_123.jpg",
                "thumbs": {
                    "30": {
                        "http": "http://images.tcdn.com.br/img/img_prod/123/30_123.jpg",
                        "https": "https://images.tcdn.com.br/img/img_prod/123/30_123.jpg"
                    },
                    "90": {
                        "http": "http://images.tcdn.com.br/img/img_prod/123/90_123.jpg",
                        "https": "https://images.tcdn.com.br/img/img_prod/123/90_123.jpg"
                    },
                    "180": {
                        "http": "http://images.tcdn.com.br/img/img_prod/123/180_123.jpg",
                        "https": "https://images.tcdn.com.br/img/img_prod/123/180_123.jpg"
                    }
                }
            }
        ]
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Variant	|Object|	Dados da variação
id	|Number|	Código da variação
ean	|String|	Código EAN da variação
order	|String|	Ordem da visualização da variação
product_id	|Number|	Código da variação
price	|Decimal|	Preço da variação
cost_price	|Decimal|	Preço da variação de custo da variação
stock	|Number|	Estoque da variação
minimum_stock	|Number|	Estoque mínimo da variação
reference	|String|	Referência da variação
weight	|Decimal|	Peso da variação
cubic_weight	|Decimal|	Peso cubico da variação
length	|Decimal|	Comprimento da variação
width	|Decimal|	Largura da variação
height	|Decimal|	Altura da variação
start_promotion	|Date|	Data de início de promoção da variação
end_promotion	|Date|	Data de termino de promoção da variação
promotional_price	|Decimal|	Preço promocional da variação
payment_option	|String|	Detalhes/Opções de pagamento da variação
payment_option_details	|Object[ ]|	Detalhes/Opções separadas de pagamento da variação
display_name	|String|	Nome da forma de pagamento da variação
type	|String|	Tipo da forma de pagamento da variação
plots	|Number|	Quantidade de parcelas da forma de pagamento da variação
value	|Decimal|	Valor da parcela de pagamento da variação
tax	|Decimal|	Valor da taxa da parcela da forma de pagamento da variação
available	|Number|	Variação disponível (Veja Tabela A)
illustrative_image	|String|	Imagem ilustrativa da variação
color_id_1	|String|	Código da cor primária da variação
color_id_2	|String|	Código da cor secundaria da variação
Sku	|String|	SKU da variação
type	|String|	Tipo de SKU da variação
value	|String|	Valor do SKU da variação
image	|String|	URL da imagem do SKU da variação
image_secure	|String|	URL segura da imagem do SKU da variação
VariantImage	|Object[ ]|	Imagens da variação
http	|String|	URL da imagem da variação
https	|String|	URL segura da imagem da variação
thumbs	|Object|	Miniaturas da imagem da variação
30	|Object|	Miniaturas da imagem da variação (30px)
http	|String|	URL da miniaturas da imagem da variação (30px)
https	|String|	URL segura da miniaturas da imagem da variação (30px)
90	|Object|	Miniaturas da imagem (90px)
http	|String|	URL da miniaturas da imagem da variação (90px)
https	|String|	URL segura da miniaturas da imagem da variação (90px)
180	|Object|	Miniaturas da imagem da variação (180px)
http	|String|	URL da miniaturas da imagem da variação (180px)
https	|String|	URL segura da miniaturas da imagem da variação (180px)

## Cadastrar Variação#post

Requisição para inclusão de variação do produto. Deverá enviar o JSON com os dados da variação para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/products/variants/?access_token={{access_token}}' \
--data-urlencode '["Variant"]["product_id"]=123' \
--data-urlencode '["Variant"]["ean"]=ABC' \
--data-urlencode '["Variant"]["order"]=1' \
--data-urlencode '["Variant"]["price"]=12.00' \
--data-urlencode '["Variant"]["cost_price"]=10.00' \
--data-urlencode '["Variant"]["stock"]=200' \
--data-urlencode '["Variant"]["minimum_stock"]=10' \
--data-urlencode '["Variant"]["reference"]=THR016' \
--data-urlencode '["Variant"]["weight"]=21' \
--data-urlencode '["Variant"]["length"]=21' \
--data-urlencode '["Variant"]["width"]=21' \
--data-urlencode '["Variant"]["height"]=21' \
--data-urlencode '["Variant"]["start_promotion"]=2021-01-01' \
--data-urlencode '["Variant"]["end_promotion"]=2021-02-01' \
--data-urlencode '["Variant"]["promotional_price"]=10.00' \
--data-urlencode '["Variant"]["promotional_price"]=10.00' \
--data-urlencode '["Variant"]["promotional_price"]=10.00' \
--data-urlencode '["Variant"]["Sku"][0]["type"]=Cor' \
--data-urlencode '["Variant"]["Sku"][0]["value"]=Azul' \
--data-urlencode '["Variant"]["Sku"][1]["type"]=Tamanho' \
--data-urlencode '["Variant"]["Sku"][1]["value"]=38' \
--data-urlencode '["Variant"]["quantity_sold"]=10'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/variants/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Variant"]["product_id"]' => '123',
  '["Variant"]["ean"]' => 'ABC',
  '["Variant"]["order"]' => '1',
  '["Variant"]["price"]' => '12.00',
  '["Variant"]["cost_price"]' => '10.00',
  '["Variant"]["stock"]' => '200',
  '["Variant"]["minimum_stock"]' => '10',
  '["Variant"]["reference"]' => 'THR016',
  '["Variant"]["weight"]' => '21',
  '["Variant"]["length"]' => '21',
  '["Variant"]["width"]' => '21',
  '["Variant"]["height"]' => '21',
  '["Variant"]["start_promotion"]' => '2021-01-01',
  '["Variant"]["end_promotion"]' => '2021-02-01',
  '["Variant"]["promotional_price"]' => '10.00',
  '["Variant"]["promotional_price"]' => '10.00',
  '["Variant"]["promotional_price"]' => '10.00',
  '["Variant"]["Sku"][0]["type"]' => 'Cor',
  '["Variant"]["Sku"][0]["value"]' => 'Azul',
  '["Variant"]["Sku"][1]["type"]' => 'Tamanho',
  '["Variant"]["Sku"][1]["value"]' => '38',
  '["Variant"]["quantity_sold"]' => '10'
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
var client = new RestClient("https://{api_address}/products/variants/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Variant\"][\"product_id\"]", "123");
request.AddParameter("[\"Variant\"][\"ean\"]", "ABC");
request.AddParameter("[\"Variant\"][\"order\"]", "1");
request.AddParameter("[\"Variant\"][\"price\"]", "12.00");
request.AddParameter("[\"Variant\"][\"cost_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"stock\"]", "200");
request.AddParameter("[\"Variant\"][\"minimum_stock\"]", "10");
request.AddParameter("[\"Variant\"][\"reference\"]", "THR016");
request.AddParameter("[\"Variant\"][\"weight\"]", "21");
request.AddParameter("[\"Variant\"][\"length\"]", "21");
request.AddParameter("[\"Variant\"][\"width\"]", "21");
request.AddParameter("[\"Variant\"][\"height\"]", "21");
request.AddParameter("[\"Variant\"][\"start_promotion\"]", "2021-01-01");
request.AddParameter("[\"Variant\"][\"end_promotion\"]", "2021-02-01");
request.AddParameter("[\"Variant\"][\"promotional_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"promotional_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"promotional_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"Sku\"][0][\"type\"]", "Cor");
request.AddParameter("[\"Variant\"][\"Sku\"][0][\"value\"]", "Azul");
request.AddParameter("[\"Variant\"][\"Sku\"][1][\"type\"]", "Tamanho");
request.AddParameter("[\"Variant\"][\"Sku\"][1][\"value\"]", "38");
request.AddParameter("[\"Variant\"][\"quantity_sold\"]", "10");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Variant\"][\"product_id\"]=123&[\"Variant\"][\"ean\"]=ABC&[\"Variant\"][\"order\"]=1&[\"Variant\"][\"price\"]=12.00&[\"Variant\"][\"cost_price\"]=10.00&[\"Variant\"][\"stock\"]=200&[\"Variant\"][\"minimum_stock\"]=10&[\"Variant\"][\"reference\"]=THR016&[\"Variant\"][\"weight\"]=21&[\"Variant\"][\"length\"]=21&[\"Variant\"][\"width\"]=21&[\"Variant\"][\"height\"]=21&[\"Variant\"][\"start_promotion\"]=2021-01-01&[\"Variant\"][\"end_promotion\"]=2021-02-01&[\"Variant\"][\"promotional_price\"]=10.00&[\"Variant\"][\"promotional_price\"]=10.00&[\"Variant\"][\"promotional_price\"]=10.00&[\"Variant\"][\"Sku\"][0][\"type\"]=Cor&[\"Variant\"][\"Sku\"][0][\"value\"]=Azul&[\"Variant\"][\"Sku\"][1][\"type\"]=Tamanho&[\"Variant\"][\"Sku\"][1][\"value\"]=38&[\"Variant\"][\"quantity_sold\"]=10");
Request request = new Request.Builder()
  .url("https://{api_address}/products/variants/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "Variant": {
        "product_id": "18",
        "ean": "125",
        "order": "1",
        "price": "12.50",
        "cost_price": "10.00",
        "stock": "51",
        "minimum_stock": "1",
        "reference": "THR016-2",
        "weight": "21",
        "length": "21",
        "width": "21",
        "height": "21",
        "start_promotion": "2019-01-01",
        "end_promotion": "2019-01-10",
        "promotional_price": "10.00",
        "type_1": "Cor",
        "value_1": "Preta"
        "type_2": "Tamanho",
        "value_2": "40"
        "quantity_sold": "10",
        "picture_source_1": "http://urldaimagem.com.br/img/imagem1.jpg",
        "picture_source_2": "http://urldaimagem.com.br/img/imagem2.jpg",
        "picture_source_3": "http://urldaimagem.com.br/img/imagem3.jpg",
        "picture_source_4": "http://urldaimagem.com.br/img/imagem4.jpg",
        "picture_source_5": "http://urldaimagem.com.br/img/imagem5.jpg",
        "picture_source_6": "http://urldaimagem.com.br/img/imagem6.jpg"
    }
}
</pre>

### Método POST
`https://{api_address}/products/variants/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Variant	|JSON|	Dados da variação
product_id	|Number|	Código do produto principal
ean	|String|	EAN da variação
order	|Number|	Ordem da visualização da variação
price	|Decimal|	Preço da variação
cost_price	|Decimal|	Preço de custo da variação
stock	|Number|	Estoque da variação
minimum_stock	|Number|	Estoque mínimo da variação
reference	|String|	Referência da variação
weight	|Number|	Peso da variação
length	|Number|	Comprimento da variação
width	|Number|	Largura da variação
height	|Number|	Altura da variação
start_promotion	Date	Data de início da promoção da variação (Formato: aaaa-mm-dd)
end_promotion	Date	Data de termino da promoção da variação (Formato: aaaa-mm-dd)
promotional_price	|Decimal|	Preço promocional da variação
type	|String|	Tipo de sku da variação
value	|String|	Valor de sku da variação
picture_source_1	|String|	Imagem principal do produto (URL da imagem) (Obrigatório enviar o product_id)
picture_source_2	|String|	Imagem do produto - imagem 2 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_3	|String|	Imagem do produto - imagem 3 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_4	|String|	Imagem do produto - imagem 4 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_5	|String|	Imagem do produto - imagem 5 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_6	|String|	Imagem do produto - imagem 6 (URL da imagem) (Obrigatório enviar o product_id)
quantity_sold	|Number|	Quantidade vendida da variação

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
id	|Number|	Código da variação
code	|Number|	Código do retorno (201)

## Atualizar Dados da Variação#put

Requisição para alterar os dados da variação. Deverá enviar o JSON com os dados da variação para alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/products/variants/?access_token={{access_token}}' \
--data-urlencode '["Variant"]["product_id"]=123' \
--data-urlencode '["Variant"]["ean"]=ABC' \
--data-urlencode '["Variant"]["order"]=1' \
--data-urlencode '["Variant"]["price"]=12.00' \
--data-urlencode '["Variant"]["cost_price"]=10.00' \
--data-urlencode '["Variant"]["stock"]=200' \
--data-urlencode '["Variant"]["minimum_stock"]=10' \
--data-urlencode '["Variant"]["reference"]=THR016' \
--data-urlencode '["Variant"]["weight"]=21' \
--data-urlencode '["Variant"]["length"]=21' \
--data-urlencode '["Variant"]["width"]=21' \
--data-urlencode '["Variant"]["height"]=21' \
--data-urlencode '["Variant"]["start_promotion"]=2021-01-01' \
--data-urlencode '["Variant"]["end_promotion"]=2021-02-01' \
--data-urlencode '["Variant"]["promotional_price"]=10.00' \
--data-urlencode '["Variant"]["promotional_price"]=10.00' \
--data-urlencode '["Variant"]["promotional_price"]=10.00' \
--data-urlencode '["Variant"]["Sku"][0]["type"]=Cor' \
--data-urlencode '["Variant"]["Sku"][0]["value"]=Azul' \
--data-urlencode '["Variant"]["Sku"][1]["type"]=Tamanho' \
--data-urlencode '["Variant"]["Sku"][1]["value"]=38' \
--data-urlencode '["Variant"]["quantity_sold"]=10'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/variants/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Variant"]["product_id"]' => '123',
  '["Variant"]["ean"]' => 'ABC',
  '["Variant"]["order"]' => '1',
  '["Variant"]["price"]' => '12.00',
  '["Variant"]["cost_price"]' => '10.00',
  '["Variant"]["stock"]' => '200',
  '["Variant"]["minimum_stock"]' => '10',
  '["Variant"]["reference"]' => 'THR016',
  '["Variant"]["weight"]' => '21',
  '["Variant"]["length"]' => '21',
  '["Variant"]["width"]' => '21',
  '["Variant"]["height"]' => '21',
  '["Variant"]["start_promotion"]' => '2021-01-01',
  '["Variant"]["end_promotion"]' => '2021-02-01',
  '["Variant"]["promotional_price"]' => '10.00',
  '["Variant"]["promotional_price"]' => '10.00',
  '["Variant"]["promotional_price"]' => '10.00',
  '["Variant"]["Sku"][0]["type"]' => 'Cor',
  '["Variant"]["Sku"][0]["value"]' => 'Azul',
  '["Variant"]["Sku"][1]["type"]' => 'Tamanho',
  '["Variant"]["Sku"][1]["value"]' => '38',
  '["Variant"]["quantity_sold"]' => '10'
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
var client = new RestClient("https://{api_address}/products/variants/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"Variant\"][\"product_id\"]", "123");
request.AddParameter("[\"Variant\"][\"ean\"]", "ABC");
request.AddParameter("[\"Variant\"][\"order\"]", "1");
request.AddParameter("[\"Variant\"][\"price\"]", "12.00");
request.AddParameter("[\"Variant\"][\"cost_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"stock\"]", "200");
request.AddParameter("[\"Variant\"][\"minimum_stock\"]", "10");
request.AddParameter("[\"Variant\"][\"reference\"]", "THR016");
request.AddParameter("[\"Variant\"][\"weight\"]", "21");
request.AddParameter("[\"Variant\"][\"length\"]", "21");
request.AddParameter("[\"Variant\"][\"width\"]", "21");
request.AddParameter("[\"Variant\"][\"height\"]", "21");
request.AddParameter("[\"Variant\"][\"start_promotion\"]", "2021-01-01");
request.AddParameter("[\"Variant\"][\"end_promotion\"]", "2021-02-01");
request.AddParameter("[\"Variant\"][\"promotional_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"promotional_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"promotional_price\"]", "10.00");
request.AddParameter("[\"Variant\"][\"Sku\"][0][\"type\"]", "Cor");
request.AddParameter("[\"Variant\"][\"Sku\"][0][\"value\"]", "Azul");
request.AddParameter("[\"Variant\"][\"Sku\"][1][\"type\"]", "Tamanho");
request.AddParameter("[\"Variant\"][\"Sku\"][1][\"value\"]", "38");
request.AddParameter("[\"Variant\"][\"quantity_sold\"]", "10");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Variant\"][\"product_id\"]=123&[\"Variant\"][\"ean\"]=ABC&[\"Variant\"][\"order\"]=1&[\"Variant\"][\"price\"]=12.00&[\"Variant\"][\"cost_price\"]=10.00&[\"Variant\"][\"stock\"]=200&[\"Variant\"][\"minimum_stock\"]=10&[\"Variant\"][\"reference\"]=THR016&[\"Variant\"][\"weight\"]=21&[\"Variant\"][\"length\"]=21&[\"Variant\"][\"width\"]=21&[\"Variant\"][\"height\"]=21&[\"Variant\"][\"start_promotion\"]=2021-01-01&[\"Variant\"][\"end_promotion\"]=2021-02-01&[\"Variant\"][\"promotional_price\"]=10.00&[\"Variant\"][\"promotional_price\"]=10.00&[\"Variant\"][\"promotional_price\"]=10.00&[\"Variant\"][\"Sku\"][0][\"type\"]=Cor&[\"Variant\"][\"Sku\"][0][\"value\"]=Azul&[\"Variant\"][\"Sku\"][1][\"type\"]=Tamanho&[\"Variant\"][\"Sku\"][1][\"value\"]=38&[\"Variant\"][\"quantity_sold\"]=10");
Request request = new Request.Builder()
  .url("https://{api_address}/products/variants/?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "Variant": {
        "ean": "123",
        "order": "2",
        "price": "12.50",
        "cost_price": "10.00",
        "stock": "51",
        "minimum_stock": "1",
        "reference": "THR016-1",
        "weight": "21",
        "length": "21",
        "width": "21",
        "height": "21",
        "start_promotion": "2019-01-01",
        "end_promotion": "2019-01-10",
        "promotional_price": "10.00",
        "Sku": [
            {
                "type": "Cor",
                "value": "Azul"
            },
            {
                "type": "Tamanho",
                "value": "38"
            }
        ],
        "quantity_sold": "10",
        "picture_source_1": "http://urldaimagem.com.br/img/imagem1.jpg",
        "picture_source_2": "http://urldaimagem.com.br/img/imagem2.jpg",
        "picture_source_3": "http://urldaimagem.com.br/img/imagem3.jpg",
        "picture_source_4": "http://urldaimagem.com.br/img/imagem4.jpg",
        "picture_source_5": "http://urldaimagem.com.br/img/imagem5.jpg",
        "picture_source_6": "http://urldaimagem.com.br/img/imagem6.jpg"
    }
}
</pre>

### Método PUT
`https://{api_address}/products/variants/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da variação
Variant	|JSON|	Dados da variação
ean	|String|	EAN da variação
order	|Number|	Ordem da visualização da variação
price	|Decimal|	Preço da variação
cost_price	|Decimal|	Preço de custo da variação
stock	|Number|	Estoque da variação
minimum_stock	|Number|	Estoque mínimo da variação
reference	|String|	Referência da variação
weight	|Number|	Peso da variação
length	|Number|	Comprimento da variação
width	|Number|	Largura da variação
height	|Number|	Altura da variação
start_promotion	|Date|	Data de início da promoção da variação (Formato: aaaa-mm-dd)
end_promotion	|Date|	Data de termino da promoção da variação (Formato: aaaa-mm-dd)
promotional_price	|Decimal|	Preço promocional da variação
Sku	|Object[ ]|	Sku da variação
type	|String|	Tipo de sku da variação
value	|String|	Valor de sku da variação
picture_source_1	|String|	Imagem principal do produto (URL da imagem) (Obrigatório enviar o product_id)
picture_source_2	|String|	Imagem do produto - imagem 2 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_3	|String|	Imagem do produto - imagem 3 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_4	|String|	Imagem do produto - imagem 4 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_5	|String|	Imagem do produto - imagem 5 (URL da imagem) (Obrigatório enviar o product_id)
picture_source_6	|String|	Imagem do produto - imagem 6 (URL da imagem) (Obrigatório enviar o product_id)
quantity_sold	|Number|	Quantidade vendida da variação

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
id	|Number|	Código da variação
code	|Number|	Código do retorno (200)

## Excluir Variação#delete

Requisição para excluir uma variação do produto.

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/products/variants/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/variants/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/variants/:id?access_token={{access_token}}");
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
  .url("https://{api_address}/products/variants/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/products/variants/:id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cliente

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
id	|Number|	Código da variação
code	|Number|	Código do retorno (200)

### Tabelas Auxiliares de Produtos

### Tabela A - Disponibilidade do produto (campo available)
Valor|Descrição
-----|---------
0|Produto indisponível
1|Produto disponível