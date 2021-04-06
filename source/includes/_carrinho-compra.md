# APIs de Carrinho de Compra

As APIs de Carrinho de Compras disponibiliza a manutenção dos carrinhos de compra dentro da plataforma Tray, possibilitando criar, atualizar e excluir algum carrinho de compra por aplicações externas. Para essas APIs é necessário realizar a autorização da aplicação, para mais informações veja os passos iniciais para a integração.

## Consultar Dados do Carrinho#get

Requisição para a consulta de dados de um carrinho de compra.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/carts/{{session_id}}?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/carts/{{session_id}}?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/carts/{{session_id}}?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/carts/{{session_id}}?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/carts/:session_id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:session_id	|String|	Código da sessão do carrinho

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "Cart": {
    "email": "",
    "variants_kit": "",
    "additional_info_kit": "",
    "session_id": "123ABC456DEF789GHI",
    "product_id": "2",
    "product_name": "Produto de Teste",
    "quantity": "4",
    "price": "100.00",
    "weight": "1000",
    "date": "2018-10-18",
    "variant_id": "0",
    "additional_information": "",
    "user_id": "0",
    "customer_id": "0",
    "user_cod": "0",
    "hour": "07:54:06",
    "product_url": {
        "http": "http://ulrdaloja.com.br/categoria/produto",
        "https": "https://urldaloja.com.br/categoria/produto"
    },
    "product_image": {
        "http": "http://images.tcdn.com.br/img/img_prod/produto_exemplo_6_12_1_20180716141523.jpg",
        "https": "https://images.tcdn.com.br/img/img_prod/produto_exemplo_6_12_1_20180716141523.jpg",
        "thumbs": {
        "30": {
            "http": "http://images.tcdn.com.br/img/img_prod/30_produto_exemplo_6_12_1_20180716141523.jpg",
            "https": "https://images.tcdn.com.br/img/img_prod/30_produto_exemplo_6_12_1_20180716141523.jpg"
            },
        "90": {
            "http": "http://images.tcdn.com.br/img/img_prod/90_produto_exemplo_6_12_1_20180716141523.jpg",
            "https": "https://images.tcdn.com.br/img/img_prod90_produto_exemplo_6_12_1_20180716141523.jpg"
            },
        "180": {
            "http": "http://images.tcdn.com.br/img/img_prod/180_produto_exemplo_6_12_1_20180716141523.jpg",
            "https": "https://images.tcdn.com.br/img/img_prod/180_produto_exemplo_6_12_1_20180716141523.jpg"
                }
            }
        }
        }
    },
    {
    "Cart": {
        "email": "",
        "variants_kit": "",
        "additional_info_kit": "",
        "session_id": "123ABC456DEF789GHI",
        "product_id": "20",
        "product_name": "Produto Teste 2",
        "quantity": "1",
        "price": "100.00",
        "weight": "1000",
        "date": "2018-10-18",
        "variant_id": "0",
        "additional_information": "",
        "user_id": "0",
        "customer_id": "0",
        "user_cod": "0",
        "hour": "07:54:56",
        "product_url": {
        "http": "http://ulrdaloja.com.br/categoria/produto",
        "https": "https://ulrdaloja.com.br/categoria/produto"
        },
        "product_image": {
        "http": "http://images.tcdn.com.br/img/img_prod/produto_exemplo_10_20_1_20180716141527.jpg",
        "https": "https://images.tcdn.com.br/img/img_prod/produto_exemplo_10_20_1_20180716141527.jpg",
            "thumbs": {
                "30": {
                "http": "http://images.tcdn.com.br/img/img_prod/30_produto_exemplo_10_20_1_20180716141527.jpg",
                "https": "https://images.tcdn.com.br/img/img_prod/30_produto_exemplo_10_20_1_20180716141527.jpg"
                },
                "90": {
                "http": "http://images.tcdn.com.br/img/img_prod/90_produto_exemplo_10_20_1_20180716141527.jpg",
                "https": "https://images.tcdn.com.br/img/img_prod/90_produto_exemplo_10_20_1_20180716141527.jpg"
                },
                "180": {
                "http": "http://images.tcdn.com.br/img/img_prod/180_produto_exemplo_10_20_1_20180716141527.jpg",
                "https": "https://images.tcdn.com.br/img/img_prod/180_produto_exemplo_10_20_1_20180716141527.jpg"
                }
            }
        }
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Cart	|Object[ ]|	Dados do carrinho de compra
email	|Number|	Email do cliente
variants_kit	|Number|	
additional_info_kit	|Number|	
session_id	|String|	Código da sessão do carrinho
product_id	|String|	Código do produto
product_name	|String|	Nome do produto
quantity	|String|	Quantidade do produto
price	|String|	Preço do produto
weight	|Date|	Peso do produto
date	|Number|	Data do produto no carrinho
variant_id	|String|	Código da variação do produto
additional_information	|String|	Informações adicionais
customer_id	|Number|	Código do cliente
user_cod	|Number|	Código do cliente
hour	|Number|	Hora do produto no carrinho
product_url	|Object[ ]|	Contém as URLs do produto
http	|String|	Contém a URL HTTP do produto
https	|String|	Contém a URL HTTPS do produto
product_image	|Object[ ]|	Contém as URLs dos imagens do produto
http	|String|	Contém a URL HTTP do imagem do produto
https	|String|	Contém a URL HTTPS do imagem do produto
thumbs	|Object[ ]|	Contém a URL dos thumbs do produto
30	|Object[ ]|	Contém aa URLa dos thumbs 30 px do produto
http	|String|	Contém a URL HTTP do thumb 30 px do produto
https	|String|	Contém a URL HTTPS do thumb 30 px do produto
90	|Object[ ]|	Contém aa URLa dos thumbs 90 px do produto
http	|String|	Contém a URL HTTP do thumb 90 px do produto
https	|String|	Contém a URL HTTPS do thumb 90 px do produto
180	|Object[ ]|	Contém aa URLa dos thumbs 180 px do produto
http	|String|	Contém a URL HTTP do thumb 180 px do produto
https	|String|	Contém a URL HTTPS do thumb 180 px do produto

## Consultar Carrinho Completo#get

Requisição para consultar os dados completos do carrinho.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/carts/{{session_id}}/complete?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/carts/{{session_id}}/complete?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/carts/{{session_id}}/complete?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/carts/{{session_id}}/complete?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/carts/:session_id/complete?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:session_id	|String|	Código da sessão do carrinho

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "Cart": {
     "session_id": "5kgnpd4cc6ehgo029odv65utk1",
     "customer_id": "0",
     "previous_url": "http://redsene.commercesuite.com.br",
     "progressive_discount": "0",
     "coupon_discount": "0",
     "order_discount": "0",
     "use_taxes": "1",
     "Products": [
        {
           "id": "8",
           "quantity": "3",
           "price": "100.00",
           "variant_id": "0",
           "additional_information": "",
           "name": "Produto com Embalagem",
           "bought_together_id": "0",
           "cart_id": "237",
           "text_variant": "",
           "id_campaign": "",
           "PaymentMethodByProduct": [],
           "Category": {
               "id": "12",
               "name": "Blusas"
           },
           "ProductImage": [
             {
              "http": "http://images.tcdn.com.br/img/img_prod/558228/produto_exemplo_4_8_1_20180716141522.jpg",
              "https": "https://images.tcdn.com.br/img/img_prod/558228/produto_exemplo_4_8_1_20180716141522.jpg",
              "thumbs": {
                  "30": {
                      "http": "http://images.tcdn.com.br/img/img_prod/558228/30_produto_exemplo_4_8_1_20180716141522.jpg",
                      "https": "https://images.tcdn.com.br/img/img_prod/558228/30_produto_exemplo_4_8_1_20180716141522.jpg"
                  },
                  "90": {
                      "http": "http://images.tcdn.com.br/img/img_prod/558228/90_produto_exemplo_4_8_1_20180716141522.jpg",
                      "https": "https://images.tcdn.com.br/img/img_prod/558228/90_produto_exemplo_4_8_1_20180716141522.jpg"
                  },
                  "180": {
                      "http": "http://images.tcdn.com.br/img/img_prod/558228/180_produto_exemplo_4_8_1_20180716141522.jpg",
                      "https": "https://images.tcdn.com.br/img/img_prod/558228/180_produto_exemplo_4_8_1_20180716141522.jpg"
                      }
                  }
              }
          ],
          "url": {
            "http": "http://redsene.commercesuite.com.br/blusas/produto-exemplo-4",
            "https": "https://redsene.commercesuite.com.br/blusas/produto-exemplo-4"
           },
          "ncm": "0",
          "stock": "100",
          "available": "1",
          "brand": "",
          "Variant": [],
          "can_be_wrapped": "1",
          "Tax": [],
           "sub_total": "300.00"
       }
   ],
   "Store": {
        "id": "558228",
        "name": "redsene",
        "url": "https://redsene.commercesuite.com.br"
   },
    "Coupon": [],
    "Extensions": {
    "AdditionalProductInfo": [
           {
                "product_id": "4",
                 "product_name": "Produto Informação Adicional",
                 "variant_id": "0",
                 "information": "nome: asas"
             }
         ]
     },
     "partner_id": "",
     "partner_name": "",
     "tax_name": "Emissão de Nota Fiscal",
     "Tax": {
         "name": "Emissão de Nota Fiscal",
          "value": "0"
      },
     "total": "1005.00",
     "sub_total": "1005.00"
   }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Cart	|Object|	Dados do carrinho de compra
session_id	|String|	Código da sessão do carrinho
customer_id	|Number|	Código do cliente
previous_url	|String|	URL da loja
progressive_discount	|Number|	Desconto progressivo
coupon_discount	|Number|	Cupom de desconto
order_discount	|Number|	Desconto do pedido
use_taxes	|Number|	Taxas
Products	|Object[ ]|	Dados dos produtos
id	|Number|	Código do produto
quantity	|Number|	Quantidade do produto no carrinho
price	Decimal	Preço do produto
variant_id	|Number|	Código da variação do produto
additional_information	|String|	Informações adicionais do produto
name	|String|	Nome do produto
bought_together_id	|Number|	Id do compre junto
cart_id	|Number|	Id do carrinho
text_variant	|Number|	Texto de variação
id_campaign	|Number|	Id da campanha
PaymentMethodByProduct	|Object[ ]|	Forma de pagamento por produto
payment_method_id	|Number|	Código da forma de pagamento
blocked	|Number|	Forma de pagamento bloqueada (Veja Tabela A)
max_plots	|Number|	Máximo de parcelas por forma de pagamento
Category	|Object|	Dados da categoria
id	|Number|	Código da categoria
name	|String|	Nome da categoria
ProductImage	|Object[ ]|	Imagens do produto
http	|String|	URL da imagem do produto
https	|String|	URL segura da imagem do produto
thumbs	|Object|	Miniaturas da imagem do produto
30	|Object|	Miniaturas da imagem do produto (30px)
http	|String|	URL da miniaturas da imagem do produto (30px)
https	|String|	URL segura da miniaturas da imagem do produto (30px)
90	|Object|	Miniaturas da imagem do produto (90px)
http	|String|	URL da miniaturas da imagem do produto (90px)
https	|String|	URL segura da miniaturas da imagem do produto (90px)
180	|Object|	Miniaturas da imagem do produto (180px)
http	|String|	URL da miniaturas da imagem do produto (180px)
https	|String|	URL segura da miniaturas da imagem do produto (180px)
url	|Object|	Dados da URL da loja
http	|String|	URL da loja
https	|String|	URL segura da loja
stock	|Number|	Quantidade em estoque do produto
available	|Number|	Disponibilidade do Produto (verdadeiro ou falso)
brand	|String|	Marca do produto
Variant	|Object|	Variações do produto
can_be_wrapped	|Object|	Embrulho para presente
Tax	|Object|	Taxas
sub_total	|Number|	Subtotal
Store	|Object|	Dados da LOja
id	|Number|	Código da loja
name	|String|	Nome da loja
url	|String|	URL da loja
Coupon	|Object|	Cupom aplicado
Extensions	|Object|	Extensões do Produto
AdditionalProductInfo	|Object|	Informações adicionais do produto
product_id	|Number|	Id do produto
product_name	|String|	Nome do produto
variant_id	|String|	Id da variação
information	|String|	Informação adicional
partner_id	|Number|	Id do parceiro
partner_name	|String|	Nome do parceiro
tax_name	|String|	Descrição de acréscimo / taxa
Tax	|Object|	Taxa/Acrécimo
name	|String|	Descrição de acréscimo / taxa
value	|String|	Valor de acréscimo / taxa
total	|String|	Total do carrinho
sub_total	|String|	Subtotal do carrinho

## Criar Novo Carrinho#post

Requisição para criação de um carrinho de compras. Deverá enviar o JSON com os dados do carrinho para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/carts/?access_token={{access_token}}' \
--data-urlencode '["Cart"]["session_id"]=123ABC456DEF789GHI' \
--data-urlencode '["Cart"]["product_id"]=123' \
--data-urlencode '["Cart"]["variant_id"]=""' \
--data-urlencode '["Cart"]["quantity"]=1' \
--data-urlencode '["Cart"]["price"]=50.00' \
--data-urlencode '["Cart"]["additional_information"]=Informações adicionais' \
--data-urlencode '["Cart"]["Shipping"]["id_shipping"]=123' \
--data-urlencode '["Cart"]["Shipping"]["name"]=Sedex' \
--data-urlencode '["Cart"]["Shipping"]["min_period"]=1' \
--data-urlencode '["Cart"]["Shipping"]["max_period"]=3' \
--data-urlencode '["Cart"]["Shipping"]["zip_code"]=04001001' \
--data-urlencode '["Cart"]["Shipping"]["price"]=16.45' \
--data-urlencode '["Cart"]["Shipping"]["tax_name"]=Acréscimo' \
--data-urlencode '["Cart"]["Shipping"]["tax_value"]=2.00' \
--data-urlencode '["Cart"]["Shipping"]["city"]=São Paulo' \
--data-urlencode '["Cart"]["Shipping"]["state"]=SP'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/carts/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Cart"]["session_id"]' => '123ABC456DEF789GHI',
  '["Cart"]["product_id"]' => '123',
  '["Cart"]["variant_id"]' => '""',
  '["Cart"]["quantity"]' => '1',
  '["Cart"]["price"]' => '50.00',
  '["Cart"]["additional_information"]' => 'Informações adicionais',
  '["Cart"]["Shipping"]["id_shipping"]' => '123',
  '["Cart"]["Shipping"]["name"]' => 'Sedex',
  '["Cart"]["Shipping"]["min_period"]' => '1',
  '["Cart"]["Shipping"]["max_period"]' => '3',
  '["Cart"]["Shipping"]["zip_code"]' => '04001001',
  '["Cart"]["Shipping"]["price"]' => '16.45',
  '["Cart"]["Shipping"]["tax_name"]' => 'Acréscimo',
  '["Cart"]["Shipping"]["tax_value"]' => '2.00',
  '["Cart"]["Shipping"]["city"]' => 'São Paulo',
  '["Cart"]["Shipping"]["state"]' => 'SP'
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
var client = new RestClient("https://{api_address}/carts/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Cart\"][\"session_id\"]", "123ABC456DEF789GHI");
request.AddParameter("[\"Cart\"][\"product_id\"]", "123");
request.AddParameter("[\"Cart\"][\"variant_id\"]", "\"\"");
request.AddParameter("[\"Cart\"][\"quantity\"]", "1");
request.AddParameter("[\"Cart\"][\"price\"]", "50.00");
request.AddParameter("[\"Cart\"][\"additional_information\"]", "Informações adicionais");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"id_shipping\"]", "123");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"name\"]", "Sedex");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"min_period\"]", "1");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"max_period\"]", "3");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"zip_code\"]", "04001001");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"price\"]", "16.45");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"tax_name\"]", "Acréscimo");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"tax_value\"]", "2.00");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"city\"]", "São Paulo");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"state\"]", "SP");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Cart\"][\"session_id\"]=123ABC456DEF789GHI&[\"Cart\"][\"product_id\"]=123&[\"Cart\"][\"variant_id\"]=\"\"&[\"Cart\"][\"quantity\"]=1&[\"Cart\"][\"price\"]=50.00&[\"Cart\"][\"additional_information\"]=Informações adicionais&[\"Cart\"][\"Shipping\"][\"id_shipping\"]=123&[\"Cart\"][\"Shipping\"][\"name\"]=Sedex&[\"Cart\"][\"Shipping\"][\"min_period\"]=1&[\"Cart\"][\"Shipping\"][\"max_period\"]=3&[\"Cart\"][\"Shipping\"][\"zip_code\"]=04001001&[\"Cart\"][\"Shipping\"][\"price\"]=16.45&[\"Cart\"][\"Shipping\"][\"tax_name\"]=Acréscimo&[\"Cart\"][\"Shipping\"][\"tax_value\"]=2.00&[\"Cart\"][\"Shipping\"][\"city\"]=São Paulo&[\"Cart\"][\"Shipping\"][\"state\"]=SP");
Request request = new Request.Builder()
  .url("https://{api_address}/carts/?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "Cart": {
        "session_id": "123ABC456DEF789GHI", 
        "product_id": "123", 
        "variant_id": "",
        "quantity": "1", 
        "price": "50.00", 
        "additional_information": "Informações adicionais", 
        "Shipping": {
            "id_shipping": "123", 
            "name": "Sedex", 
            "min_period": "1", 
            "max_period": "3",
            "zip_code": "04001001", 
            "price": "16.85", 
            "tax_name": "Acréscimo",
            "tax_value": "2.00", 
            "city": "São Paulo", 
            "state": "SP"
        }
    }
}
</pre>

### Método POST
`https://{api_address}/carts/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Cart	|JSON|	Dados do carrinho de compra
session_id	|String|	Código da sessão do carrinho
product_id	|Number	Código do produto
variant_id	|Number	Código da variação
quantity	|Number	Quantidade do produto no carrinho
price	|Decimal|	Preço do produto
additional_information	|String|	Informações adicionais
id_shipping	|Number	Código da forma de envio
name	|String|	Nome do destinatário
min_period	|Number	Período mínimo para envio
max_period	|Number	Período máximo para envio
zip_code	|String|	CEP
price	|Decimal|	Valor do envio
tax_name	|String|	Descrição de acréscimo / taxa
tax_value	|Decimal|	Valor de acréscimo / taxa
city	|String|	Cidade de entrega
state	|String|	Sigla do estado de entrega

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created",
    "id": "123",
    "session_id": "123ABC456DEF789GHI",
    "cart_url": "http://loja.commercesuite.com.br/loja/carrinho.php?loja=123123&transID=123ABC456DEF789GHI&hash=",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do carrinho
session_id	|String|	Código da sessão do carrinho
cart_url	|String|	URL do carrinho
code	|Number|	Código do retorno (201)

## Atualizar Dados do Carrinho#put

Requisição para alterar os dados de um carrinho. Deverá enviar o JSON com os dados do carrinho para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/carts/?access_token={{access_token}}' \
--data-urlencode '["Cart"]["email"]=email@email.com.br' \
--data-urlencode '["Cart"]["variants_kit"]=""' \
--data-urlencode '["Cart"]["date"]=2021-04-05' \
--data-urlencode '["Cart"]["additional_info_kit"]=""' \
--data-urlencode '["Cart"]["user_id"]=2' \
--data-urlencode '["Cart"]["user_code"]=2' \
--data-urlencode '["Cart"]["hour"]=16:16:02' \
--data-urlencode '["Cart"]["Shipping"]["id_shipping"]=123' \
--data-urlencode '["Cart"]["Shipping"]["name"]=Sedex' \
--data-urlencode '["Cart"]["Shipping"]["min_period"]=1' \
--data-urlencode '["Cart"]["Shipping"]["max_period"]=3' \
--data-urlencode '["Cart"]["Shipping"]["zip_code"]=04001001' \
--data-urlencode '["Cart"]["Shipping"]["price"]=16.45' \
--data-urlencode '["Cart"]["Shipping"]["tax_name"]=Acréscimo' \
--data-urlencode '["Cart"]["Shipping"]["tax_value"]=2.00' \
--data-urlencode '["Cart"]["Shipping"]["city"]=São Paulo' \
--data-urlencode '["Cart"]["Shipping"]["state"]=SP'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/carts/?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Cart"]["email"]' => 'email@email.com.br',
  '["Cart"]["variants_kit"]' => '""',
  '["Cart"]["date"]' => '2021-04-05',
  '["Cart"]["additional_info_kit"]' => '""',
  '["Cart"]["user_id"]' => '2',
  '["Cart"]["user_code"]' => '2',
  '["Cart"]["hour"]' => '16:16:02',
  '["Cart"]["Shipping"]["id_shipping"]' => '123',
  '["Cart"]["Shipping"]["name"]' => 'Sedex',
  '["Cart"]["Shipping"]["min_period"]' => '1',
  '["Cart"]["Shipping"]["max_period"]' => '3',
  '["Cart"]["Shipping"]["zip_code"]' => '04001001',
  '["Cart"]["Shipping"]["price"]' => '16.45',
  '["Cart"]["Shipping"]["tax_name"]' => 'Acréscimo',
  '["Cart"]["Shipping"]["tax_value"]' => '2.00',
  '["Cart"]["Shipping"]["city"]' => 'São Paulo',
  '["Cart"]["Shipping"]["state"]' => 'SP'
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
var client = new RestClient("https://{api_address}/carts/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"Cart\"][\"email\"]", "email@email.com.br");
request.AddParameter("[\"Cart\"][\"variants_kit\"]", "\"\"");
request.AddParameter("[\"Cart\"][\"date\"]", "2021-04-05");
request.AddParameter("[\"Cart\"][\"additional_info_kit\"]", "\"\"");
request.AddParameter("[\"Cart\"][\"user_id\"]", "2");
request.AddParameter("[\"Cart\"][\"user_code\"]", "2");
request.AddParameter("[\"Cart\"][\"hour\"]", "16:16:02");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"id_shipping\"]", "123");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"name\"]", "Sedex");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"min_period\"]", "1");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"max_period\"]", "3");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"zip_code\"]", "04001001");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"price\"]", "16.45");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"tax_name\"]", "Acréscimo");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"tax_value\"]", "2.00");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"city\"]", "São Paulo");
request.AddParameter("[\"Cart\"][\"Shipping\"][\"state\"]", "SP");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Cart\"][\"email\"]=email@email.com.br&[\"Cart\"][\"variants_kit\"]=\"\"&[\"Cart\"][\"date\"]=2021-04-05&[\"Cart\"][\"additional_info_kit\"]=\"\"&[\"Cart\"][\"user_id\"]=2&[\"Cart\"][\"user_code\"]=2&[\"Cart\"][\"hour\"]=16:16:02&[\"Cart\"][\"Shipping\"][\"id_shipping\"]=123&[\"Cart\"][\"Shipping\"][\"name\"]=Sedex&[\"Cart\"][\"Shipping\"][\"min_period\"]=1&[\"Cart\"][\"Shipping\"][\"max_period\"]=3&[\"Cart\"][\"Shipping\"][\"zip_code\"]=04001001&[\"Cart\"][\"Shipping\"][\"price\"]=16.45&[\"Cart\"][\"Shipping\"][\"tax_name\"]=Acréscimo&[\"Cart\"][\"Shipping\"][\"tax_value\"]=2.00&[\"Cart\"][\"Shipping\"][\"city\"]=São Paulo&[\"Cart\"][\"Shipping\"][\"state\"]=SP");
Request request = new Request.Builder()
  .url("https://{api_address}/carts/?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

> Estrutura do Json:

<pre>
{
    "Cart": {
    	"email": "teste@teste.com.br",
    	"variants_kit":"5",
    	"additional_info_kit": "",
        "date": "2018-11-13",
        "user_id": "22",
        "user_cod": "2",
        "hour": "16:16:02",
        "Shipping": {
            "id_shipping": "321", 
            "name": "Sedex", 
            "min_period": "1", 
            "max_period": "3",
            "zip_code": "040010011", 
            "price": "16.81", 
            "tax_name": "Acréscimo",
            "tax_value": "2.0", 
            "city": "São Paulo", 
            "state": "SP"
        }
    }
}
</pre>

### Método PUT
`https://{api_address}/carts/?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Cart	|JSON|	Dados do carrinho de compra
email	|String|	Email do cliente
variants_kit	|Number|	 
additional_info_kit	|Number|	 
date	|String|	Data de criação
user_id	|Decimal|	ID do usuario
user_cod	|Decimal|	Códico do usuario
hour	|String|	Hora de criação
Shipping	|String|	Informações adicionais
id_shipping	|Number|	Código da forma de envio
name	|String|	Nome do destinatário
min_period	|Number|	Período mínimo para envio
max_period	|Number|	Período máximo para envio
zip_code	|String|	CEP
price	|Decimal|	Valor do envio
tax_name	|String|	Descrição de acréscimo / taxa
tax_value	|Decimal|	Valor de acréscimo / taxa
city	|String|	Cidade de entrega
state	|String|	Sigla do estado de entrega

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Created"
    "session_id": "123ABC456DEF789GHI",
    "cart_url": "http://loja.commercesuite.com.br/loja/carrinho.php?loja=123123&transID=123ABC456DEF789GHI&hash=",
    "code": 201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
session_id	|String|	Código da sessão do carrinho
cart_url	|String|	URL do carrinho
code	|Number|	Código do retorno (201)

## Excluir Carrinho#delete

Requisição para excluir um carrinho de compra.

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/carts/{{session_id}}?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/carts/{{session_id}}?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/carts/{{session_id}}?access_token={{access_token}}");
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
  .url("https://{api_address}/carts/{{session_id}}?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/carts/:session_id?access_token={{access_token}}`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:session_id	|String|	Códiga sessão do carrinho

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "message": "Deleted",
    "session_id": "123ABC456DEF789GHI",
    "cart_url": "http://loja.commercesuite.com.br/loja/carrinho.php?loja=123123&transID=123ABC456DEF789GHI&hash=",
    "code": 200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
session_id	|String|	Código da sessão do carrinho
cart_url	|String|	URL do carrinho
code	|Number|	Código do retorno (200)

### Tabela Auxiliar de Carrinho de Compra

### Tabela A - Bloqueio de forma de pagamento (campo blocked)
Valor|Descrição
-----|---------
0|	Forma de pagamento desbloqueada
1|	Forma de pagamento bloqueada