# API de Produtos

## Listagem de Produtos#get

Requisição para a consulta de uma lista produtos.

### Método GET
`https://{api_address}/products`

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token|String|Chave de acesso
id|Number|Código do produto
name|String|Nome do produto
reference|String|Referência do produto
category_id|Number|Código da categoria principal do produto
ean|String|Código EAN do produto
price|Decimal|Preço do produto
price_range|String|Faixa de preço do produto
brand|String|Marca do produto
available|Number|Produto disponível (Veja Tabela A)
stock|Number|Estoque do produto
promotion|Number|Produto em promoção (Veja Tabela B)
free_shipping|Number|Produto com frete grátis (Veja Tabela C)
release|Number|Produto em lançamento (Veja Tabela D)
hot|Number|Produto em destaque (Veja Tabela E)
quantity_sold|Number|Quantidade vendida do produto
release_date|Date|Data de lançamento do produto (Formato: aaaa-mm-dd)
rand|Number|Ordem aleatória
sort|String|Ordenação
limit|Number|Limite de Registros
page|Number|Página corrente
attrs|String|Atributos do produto
created|Date|Filtro de data de criação, ex.: (Formato: aaaa-mm-dd)
modified|Date|Filtro de data de modificação, ex.: (Formato: aaaa-mm-dd)

### Retorno em caso de sucesso (status code 200 ou 201)

> Exemplo de retorno:

<pre>
{
    "paging": {
        "total": 108,
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
        "category_id",
        "ean",
        "available",
        "price",
        "brand",
        "model",
        "hot",
        "quantity_sold",
        "release",
        "free_shipping",
        "weight",
        "image",
        "release_date",
        "stock",
        "promotion",
        "reference",
        "has_buy_together",
        "has_free_gift",
        "has_description",
        "brand_id",
        "additional_button",
        "virtual_product",
        "has_ean",
        "is_kit",
        "has_title",
        "has_meta_description",
        "has_keywords",
        "has_variations",
        "has_brand",
        "has_model",
        "has_dimension",
        "has_weight",
        "property_name",
        "property_id",
        "property_value",
        "property_value_id",
        "activation_date",
        "deactivation_date",
        "show_properties",
        "kit_has_variation",
        "modified",
        "created",
        "price_range",
        "current_price_range",
        "date_range",
        "date_range_deactivation",
        "current_price"
    ],
    "appliedFilters": [],
    "Products": [
        {
            "Product": {
                "modified": "2018-12-26 13:46:12",
                "ean": "",
                "is_kit": "0",
                "slug": "produto-teste",
                "ncm": "0",
                "activation_date": "0000-00-00",
                "deactivation_date": "0000-00-00",
                "id": "0",
                "name": "PRODUTO TESTE",
                "price": "139.00",
                "cost_price": "0.00",
                "dollar_cost_price": "0.00",
                "promotional_price": "0.00",
                "start_promotion": "0000-00-00",
                "end_promotion": "0000-00-00",
                "brand": "",
                "brand_id": "",
                "model": "",
                "weight": "958",
                "length": "0",
                "width": "0",
                "height": "0",
                "stock": "51",
                "category_id": "25",
                "available": "1",
                "availability": "",
                "reference": "016301",
                "hot": "0",
                "release": "0",
                "additional_button": "0",
                "has_variation": "0",
                "rating": "0",
                "count_rating": "0",
                "quantity_sold": "0",
                "url": {
                    "http": "http://{dominio_da_loja}/categoria/produto-de-teste",
                    "https": "https://{dominio_da_loja}/categoria/produto-de-teste"
                },
                "created": "2016-10-19 09:30:12",
                "Properties": [],
                "payment_option": "R$ 125,10 à vista com desconto Boleto - Yapay ou 12x de R$ 13,14 com juros",
                "payment_option_details": [
                    {
                        "display_name": "Boleto - Yapay",
                        "type": "bank_billet",
                        "plots": "1",
                        "value": "125.10",
                        "tax": "0.00"
                    },
                    {
                        "display_name": "Cartão MasterCard - Yapay",
                        "type": "credit_card",
                        "plots": "12",
                        "value": "13.14",
                        "tax": "1.99"
                    }
                ],
                "related_categories": [],
                "release_date": "2016-12-21",
                "shortcut": "produto-test",
                "virtual_product": "",
                "minimum_stock": "0",
                "minimum_stock_alert": "0",
                "free_shipping": "0",
                "video": "",
                "metatag": [],
                "payment_option_html": " ",
                "upon_request": "0",
                "available_for_purchase": "1",
                "all_categories": "0",
                "ProductImage": [],
                "Variant": [],
                "AdditionalInfos": []
            }
        }
}
</pre>

Campo|Tipo|	Descrição
-----|----|----------
paging|Object|Dados de paginação
total|Number|Total de registros
page|Number|Página corrente
offset|Number|Registro inicial da página
limit|Number|Limite de registros
maxLimit|Number|Máximo de registros
sort|Object|Ordenação
availableFilters|String|Filtros disponíveis
appliedFilters|String|Filtros utilizados
Products|Object|Dados do produto
Product|Object|Dados do produto
id|	Number|Código do produto
ean|String|Código EAN do produto
modifield|Date|Data de modificação do produto
slug|String|Final da url do produto
ncm	|String	|Código NCM do produto
name|String|Nome do produto
is_kit|Number|O produto possui kit
payment_options_details|String	|Detalhes das opções de pagamento do produto
additionalInfos|String|Informações adicionais do produto
price|Decimal|Preço do produto
cost_price|Decimal|Preço de custo do produto
promotional_price|Decimal|Preço promocional do produto
start_promotion|Date|Data de início da promoção do produto
end_promotion|Date|Data de termino da promoção do produto
brand|String|Marca do produto
model|String|Modelo do produto
weight|Number|Peso do produto
length|Number|Comprimento do produto
width|Number|Largura do produto
height|Number|Altura do produto
cubic_weight|Number|Peso cúbico do produto
stock|Number|Estoque do produto
category_id|Number|Código da categoria principal do produto
available|Number|Produto disponível (Veja Tabela A)
availability|String|Disponibilidade do produto
reference|String|Referência do produto
hot|Number|Produto em destaque (Veja Tabela E)
release|Number|Produto lançamento (Veja Tabela D)
additional_button|Number|Botão adicional do produto
has_variation|Number|Produto com variação (Veja Tabela F)
brand_id|Number|Código da marca do produto
all_categories|String|Todas as categorias do produto
rating|Number|Classificação do produto
count_rating|Number|Valor da classificação do produto
quantity_sold|Number|Quantidade vendida do produto
ProductImage|Object|Imagens do produto
http|String|URL da imagem do produto
https|String|URL segura da imagem do produto
thumbs|Object|Miniaturas da imagem do produto
30|Object|Miniaturas da imagem do produto (30px)
http|String|URL da miniaturas da imagem do produto (30px)
https|String|URL segura da miniaturas da imagem do produto (30px)
90|Object|Miniaturas da imagem do produto (90px)
http|String|URL da miniaturas da imagem do produto (90px)
https|String|URL segura da miniaturas da imagem do produto (90px)
180|Object|Miniaturas da imagem do produto (180px)
http|String	|URL da miniaturas da imagem do produto (180px)
https|String|URL segura da miniaturas da imagem do produto (180px)
image|Number|Produto com imagem
url|Object|URLs do produto
http|String|URL do produto
https|String|URL segura do produto
created|Date|Data de criação do produto
Properties|Object|Propriedades do produto
_type_|String|Tipo da propriedade do produto (cor, tamanho, ...)
payment_option|String|Detalhes/Opções de pagamento do produto
related_categories|Number|Categorias adicionais do produto
release_date|Date|Data de lançamento do produto
shortcut|String|Atalho do produto
virtual_product|Number|Produto virtual (Veja Tabela I)
minimum_stock|Number|Estoque mínimo do produto
minimum_stock_alert|Number|Aviso de estoque mínimo do produto
upon_request|Number|Produto sob consulta
related_products|Number|Produtos relacionados
free_shipping|Number|Produto com frete grátis (Veja Tabela C)
payment_options_html|String|Opções de pagamento do produto em HTML
metatag|Object|Objeto
type|String|Tipo da metatag, só recebe keywords
Description	|String	|Descrição da metatag
video|String|Vídeo do produto
activation_date|Date|Data de ativação do produto
deactivation_date|Date|Data de desativação do produto
dollar_cost_price|Number|Preço de custo do produto em dollar
Variant|Object|Variação do produto
id|Number|Código da variação do produto

### Tabelas Auxiliares de Produtos

### Tabela A - Disponibilidade do produto (campo available)
Valor|Descrição
-----|---------
0|Produto indisponível
1|Produto disponível

### Tabela B - Produto promocional (campo promotion)
Valor|Descrição
-----|---------
0|Produto não promocional
1|Produto promocional

### Tabela C - Produto com frete grátis (campo free_shipping)
Valor|Descrição
-----|---------
0|Produto sem frete grátis
1|Produto com frete grátis

### Tabela D - Lançamento de produto (campo release)
Valor|Descrição
-----|---------
0|Produto já lançado
1|Produto em lançamento

### Tabela E - Produto em destaque (campo hot)
Valor|Descrição
-----|---------
0|Produto normal
1|Produto em destaque

### Tabela F - Produto com variação (campo has_variation)
Valor|Descrição
-----|---------
0|Produto sem variação
1|Produto com variação

### Tabela G - Produto em destaque (campo has_acceptance_terms)
Valor|Descrição
-----|---------
0|Produto sem termo de aceite
1|Produto com termo de aceite

### Tabela H - Produto em destaque (campo has_buy_together)
Valor|Descrição
-----|---------
0|Produto sem compre junto
1|Produto com compre junto

### Tabela I - Produto em destaque (campo virtual_product)
Valor|Descrição
-----|---------
0|Produto normal
1|Produto virtual

## Consultar Dados do Produto#get

Requisição para a consulta de dados de um produto.

### Método GET
`https://{api_address}/products/:id`

> Código de Exemplo:

```shell


curl --location -g --request GET '{{api_address}}/products/:id?access_token={{access_token}}'
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{api_address}}/products/:id?access_token={{access_token}}');
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


var client = new RestClient("{{api_address}}/products/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("{{api_address}}/products/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Parâmetros enviados
Campo|Tipo|Descrição
-----|----|---------
access_token|String|Chave de acesso
:id|Number|Código do produto

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso

<pre>
{
    "Product": {
        "ean": "",
        "modified": "2019-01-21 09:22:21",
        "is_kit": "0",
        "slug": "produto-teste",
        "ncm": "90221991",
        "activation_date": "0000-00-00",
        "deactivation_date": "2018-07-10",
        "id": "8",
        "name": "Produto Teste",
        "title": "Titulo blablabla",
        "description": "",
        "description_small": "Descrição blablabla",
        "price": "30.00",
        "cost_price": "25.00",
        "dollar_cost_price": "0.00",
        "promotional_price": "10.00",
        "start_promotion": "2019-01-20",
        "end_promotion": "2019-02-01",
        "brand": "Dragon Shield",
        "brand_id": "4",
        "model": "MTESTEM",
        "weight": "2",
        "length": "1",
        "width": "10",
        "height": "15",
        "stock": "682",
        "category_id": "14",
        "category_name": "Playmat",
        "available": "1",
        "availability": "Disponível em 3 dia útil",
        "reference": "M01",
        "hot": "1",
        "release": "1",
        "additional_button": "0",
        "has_variation": "1",
        "has_acceptance_terms": "0",
        "has_buy_together": "1",
        "additional_message": "Informação Adicional 3",
        "warranty": "",
        "rating": "0",
        "count_rating": "0",
        "quantity_sold": "2",
        "ProductImage": [
            {
                "http": "http://images3.tcdn.com.br/img/img_prod/123/1_1_123.jpg",
                "https": "https://images.tcdn.com.br/img/img_prod/123/1_1_123.jpg",
                "thumbs": {
                    "30": {
                        "http": "http://images.tcdn.com.br/img/img_prod/123/30_1_1_123.jpg",
                        "https": "https://images2.tcdn.com.br/img/img_prod/123/30_1_1_123.jpg"
                    },
                    "90": {
                        "http": "http://images1.tcdn.com.br/img/img_prod/123/90_1_1_123.jpg",
                        "https": "https://images1.tcdn.com.br/img/img_prod/123/90_1_1_123.jpg"
                    },
                    "180": {
                        "http": "http://images3.tcdn.com.br/img/img_prod/123/180_1_1_123.jpg",
                        "https": "https://images4.tcdn.com.br/img/img_prod/123/180_1_1_123.jpg"
                    }
                }
            },
            {
                "http": "http://images1.tcdn.com.br/img/img_prod/123/1_2_123.jpg",
                "https": "https://images2.tcdn.com.br/img/img_prod/123/1_2_123.jpg",
                "thumbs": {
                    "30": {
                        "http": "http://images4.tcdn.com.br/img/img_prod/123/30_1_2_123.jpg",
                        "https": "https://images4.tcdn.com.br/img/img_prod/123/30_1_2_123.jpg"
                    },
                    "90": {
                        "http": "http://images4.tcdn.com.br/img/img_prod/123/90_1_2_123.jpg",
                        "https": "https://images1.tcdn.com.br/img/img_prod/123/90_1_2_123.jpg"
                    },
                    "180": {
                        "http": "http://images4.tcdn.com.br/img/img_prod/123/180_1_2_123.jpg",
                        "https": "https://images.tcdn.com.br/img/img_prod/123/180_1_2_123.jpg"
                    }
                }
            }
        ],
        "image": "1",
        "url": {
            "http": "http://{dominio_da_loja}/categoria/produto-de-teste",
            "https": "https://{dominio_da_loja}/categoria/produto-de-teste"
        },
        "created": "0000-00-00 00:00:00",
        "Properties": {
            "Teste Caracteristica": [
                "PP"
            ]
        },
        "payment_option": "R$ 9,70 à vista com desconto Boleto - Yapay",
        "payment_option_details": [
            {
                "display_name": "Boleto - Yapay",
                "type": "bank_billet",
                "plots": "1",
                "value": "9.70",
                "tax": "0.00"
            }
        ],
        "related_categories": [
            "2"
        ],
        "release_date": "",
        "shortcut": "produto-teste",
        "virtual_product": "",
        "minimum_stock": "0",
        "minimum_stock_alert": "0",
        "promotion_id": "4",
        "included_items": "Informação Adicional 2",
        "related_products": [
            "6",
            "8",
            "27",
            "29"
        ],
        "free_shipping": "1",
        "current_price": "10.00",
        "ipi": "0.110000",
        "acceptance_term_option": "2",
        "acceptance_term": "",
        "warranty_days": "0",
        "availability_days": "0",
        "cubic_weight": "32",
        "video": "",
        "metatag": [
            {
                "type": "description",
                "content": "Informação Adicional Teste"
            },
            {
                "type": "description",
                "content": ""
            },
            {
                "type": "keywords",
                "content": ""
            }
        ],
        "payment_option_html": " ",
        "percentage_discount": "-66.666667",
        "upon_request": "0",
        "available_for_purchase": "1",
        "all_categories": [
            "2",
            "8",
            "14"
        ],
        "Variant": [
            {
                "id": "204"
            }
        ],
        "AdditionalInfos": [
            {
                "id": "2",
                "info_id": "1",
                "type": "select",
                "display_as": "galery",
                "name": "Puxadores",
                "display_value": "1",
                "required": "1",
                "add_total": "1",
                "options": [
                    {
                        "id": "6",
                        "name": "ima",
                        "image": {
                            "http": "http://images.tcdn.com.br/img/img_prod/406562/imagem_6_2819240856c4c18e82e87.jpg",
                            "https": "https://images.tcdn.com.br/img/img_prod/406562/imagem_6_2819240856c4c18e82e87.jpg"
                        },
                        "value": "0.12"
                    }
                ],
                "active": "1",
                "deadline": "0"
            },
            {
                "id": "14",
                "info_id": "2",
                "type": "text",
                "name": "Data do Curso",
                "display_value": "1",
                "required": "1",
                "add_total": "0",
                "max_length": "0",
                "value": "0.00",
                "active": "1",
                "deadline": "0"
            }
        ]
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Product	|Object|	Dados do produto
id	|Number|	Código do produto
ean	|String|	Código EAN do produto
modifield	|Date	|Data de modificação do produto
slug	|String	|Final da url do produto
ncm	|String|	Código NCM do produto
name	|String	|Nome do produto
title	|String	|Titulo do produto
description	|String|	Descrição do produto
description_small	|String|	Descrição resumida do produto
price	|Decimal	|Preço do produto
cost_price	|Decimal|	Preço de custo do produto
promotional_price	|Decimal|	Preço promocional do produto
start_promotion	|Date|	Data de início da promoção do produto
end_promotion	|Date|	Data de termino da promoção do produto
brand	|String|	Marca do produto
model	|String|	Modelo do produto
weight	|Number|	Peso do produto
length	|Number|	Comprimento do produto
width	|Number|	Largura do produto
height	|Number|	Altura do produto
cubic_weight	|Number|	Peso cúbico do produto
stock	|Number|	Estoque do produto
category_id	|Number|	Código da categoria principal do produto
available	|Number|	Produto disponível (Veja Tabela A)
availability	|String|	Disponibilidade do produto
reference	|String|	Referência do produto
hot	|Number|	Produto em destaque (Veja Tabela E)
release	|Number|	Produto lançamento (Veja Tabela D)
additional_button	|Number|	Botão adicional do produto
has_variation	|Number|	Produto com variação (Veja Tabela F)
has_acceptance_terms	|Number|	Produto com termo de aceitação (Veja Tabela G)
has_buy_together	|Number|	Produto com compre junto (Veja Tabela H)
additional_message	|String|	Mensagem adicional do produto
warranty	|String|	Garantia do produto
rating	|Number|	Classificação do produto
count_rating	|Number|	Valor da classificação do produto
quantity_sold	|Number|	Quantidade vendida do produto
ProductImage	|Object|	Imagens do produto
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
image	|Number|	Produto com imagem
url	|Object|	URLs do produto
http	|String|	URL do produto
https	|String|	URL segura do produto
created	|Date|	Data de criação do produto
Properties	|Object|	Propriedades do produto
_type_	|String|	Tipo da propriedade do produto (cor, tamanho, ...)
payment_option	|String|	Detalhes/Opções de pagamento do produto
related_categories	|Number|	Categorias adicionais do produto
release_date	|Date|	Data de lançamento do produto
shortcut	|String|	Atalho do produto
virtual_product	|Number|	Produto virtual (Veja Tabela I)
minimum_stock	|Number|	Estoque mínimo do produto
minimum_stock_alert	|Number|	Aviso de estoque mínimo do produto
promotion_id	|Number|	Código da promoção do produto
included_items	|String|	Itens inclusos do produto
related_products	|Number|	Produtos relacionados
free_shipping	|Number|	Produto com frete grátis (Veja Tabela C)
current_price	|Decimal|	Preço do produto
ipi	|Decimal|	IPI do produto
acceptance_term_option	|Number|	Opção do termo de aceitação do produto
acceptance_term	|Number|	Termo de aceitação do produto
warranty_days	|Number|	Dias de garantia do produto
availability_days	|Number|	Dias de disponibilidade do produto
metatag	|Object|	Metatag
type	|Object|	Tipo da metatag só recebe keywords
content	|Object|	Valor da metatag
Variant	|Object|	Variação do produto
id	|Number|	Código da variação do produto
is_kit	|Number|	O produto possui kit
activation_date	|Date|	Data de ativação do produto
deactivation_date	|Date|	Data de desativação do produto
dollar_cost_price	|Number|	Preço de custo do produto em dollar
brand_id	|Number|	Código da marca do produto
category_name	|String|	Nome da categoria do produto
payment_options_details	|String|	Detalhes das opções de pagamento do produto
cubic_weight	|Number|	Peso cúbico do produto
video	|String|	Vídeo do produto
percentage_discount	|Number|	Desconto percentual do produto
upon_request	|Number|	Produto sob consulta
available_for_purchase	|String|	Produto disponível para compra
all_categories	|String|	Todas as categorias do produto
additionalInfos	|String|	Informações adicionais do produto

### Tabelas Auxiliares de Produtos

### Tabela A - Disponibilidade do produto (campo available)
Valor|Descrição
-----|---------
0|Produto indisponível
1|Produto disponível

### Tabela B - Produto promocional (campo promotion)
Valor|Descrição
-----|---------
0|Produto não promocional
1|Produto promocional

### Tabela C - Produto com frete grátis (campo free_shipping)
Valor|Descrição
-----|---------
0|Produto sem frete grátis
1|Produto com frete grátis

### Tabela D - Lançamento de produto (campo release)
Valor|Descrição
-----|---------
0|Produto já lançado
1|Produto em lançamento

### Tabela E - Produto em destaque (campo hot)
Valor|Descrição
-----|---------
0|Produto normal
1|Produto em destaque

### Tabela F - Produto com variação (campo has_variation)
Valor|Descrição
-----|---------
0|Produto sem variação
1|Produto com variação

### Tabela G - Produto em destaque (campo has_acceptance_terms)
Valor|Descrição
-----|---------
0|Produto sem termo de aceite
1|Produto com termo de aceite

### Tabela H - Produto em destaque (campo has_buy_together)
Valor|Descrição
-----|---------
0|Produto sem compre junto
1|Produto com compre junto

### Tabela I - Produto em destaque (campo virtual_product)
Valor|Descrição
-----|---------
0|Produto normal
1|Produto virtual

## Cadastrar Produto#post

Requisição para inclusão de um produto. Deverá enviar o JSON com os dados do produto para a criação.

### Método POST
`https://{api_address}/products`

> Código de Exemplo:

```shell


curl --location -g --request POST '{{api_address}}/products?access_token={{access_token}}' \
--data-raw '{
    "Product":	{
        "ean":"9999",
        "name":"Produto Teste API",
        "ncm":"99999999",
        "description":"Descrição do Produto de Teste da API",
        "description_small":"Produto de Teste da API",
        "price":0.01,
    	"cost_price":0.01,
        "promotional_price":0.01,
        "start_promotion":"2019-03-01",
        "end_promotion":"2019-09-01",
    	"ipi_value": 12,
        "brand":"marca",
        "model":"Modelo",
        "weight":1000,
        "length":10,
        "width":10,
        "height":10,
        "stock":100,
        "category_id":"2",
        "available":1,
        "availability":"Disponível em 3 dias",
        "availability_days":3,
        "reference":"111",
        "related_categories":[],
        "release_date":"",
        "picture_source_1":"http://bancodeimagens/imagem1.jpg",
        "picture_source_2":"http://bancodeimagens/imagem2.jpg",
        "picture_source_3":"http://bancodeimagens/imagem3.jpg",
        "picture_source_4":"http://bancodeimagens/imagem4.jpg",
        "picture_source_5":"http://bancodeimagens/imagem5.jpg",
        "picture_source_6":"http://bancodeimagens/imagem6.jpg",
        "metatag":[{"type":"keywords",
        "content":"Key1, Key2, Key3",
        "local":1}],
        "virtual_product":"0"
    }
}'
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{api_address}}/products?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('{\n    "Product":	{\n        "ean":"9999",\n        "name":"Produto Teste API",\n        "ncm":"99999999",\n        "description":"Descrição do Produto de Teste da API",\n        "description_small":"Produto de Teste da API",\n        "price":0.01,\n    	"cost_price":0.01,\n        "promotional_price":0.01,\n        "start_promotion":"2019-03-01",\n        "end_promotion":"2019-09-01",\n    	"ipi_value": 12,\n        "brand":"marca",\n        "model":"Modelo",\n        "weight":1000,\n        "length":10,\n        "width":10,\n        "height":10,\n        "stock":100,\n        "category_id":"2",\n        "available":1,\n        "availability":"Disponível em 3 dias",\n        "availability_days":3,\n        "reference":"111",\n        "related_categories":[],\n        "release_date":"",\n        "picture_source_1":"http://bancodeimagens/imagem1.jpg",\n        "picture_source_2":"http://bancodeimagens/imagem2.jpg",\n        "picture_source_3":"http://bancodeimagens/imagem3.jpg",\n        "picture_source_4":"http://bancodeimagens/imagem4.jpg",\n        "picture_source_5":"http://bancodeimagens/imagem5.jpg",\n        "picture_source_6":"http://bancodeimagens/imagem6.jpg",\n        "metatag":[{"type":"keywords",\n        "content":"Key1, Key2, Key3",\n        "local":1}],\n        "virtual_product":"0"\n    }\n}');
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


var client = new RestClient("{{api_address}}/products?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("text/plain", "{\n    \"Product\":\t{\n        \"ean\":\"9999\",\n        \"name\":\"Produto Teste API\",\n        \"ncm\":\"99999999\",\n        \"description\":\"Descrição do Produto de Teste da API\",\n        \"description_small\":\"Produto de Teste da API\",\n        \"price\":0.01,\n    \t\"cost_price\":0.01,\n        \"promotional_price\":0.01,\n        \"start_promotion\":\"2019-03-01\",\n        \"end_promotion\":\"2019-09-01\",\n    \t\"ipi_value\": 12,\n        \"brand\":\"marca\",\n        \"model\":\"Modelo\",\n        \"weight\":1000,\n        \"length\":10,\n        \"width\":10,\n        \"height\":10,\n        \"stock\":100,\n        \"category_id\":\"2\",\n        \"available\":1,\n        \"availability\":\"Disponível em 3 dias\",\n        \"availability_days\":3,\n        \"reference\":\"111\",\n        \"related_categories\":[],\n        \"release_date\":\"\",\n        \"picture_source_1\":\"http://bancodeimagens/imagem1.jpg\",\n        \"picture_source_2\":\"http://bancodeimagens/imagem2.jpg\",\n        \"picture_source_3\":\"http://bancodeimagens/imagem3.jpg\",\n        \"picture_source_4\":\"http://bancodeimagens/imagem4.jpg\",\n        \"picture_source_5\":\"http://bancodeimagens/imagem5.jpg\",\n        \"picture_source_6\":\"http://bancodeimagens/imagem6.jpg\",\n        \"metatag\":[{\"type\":\"keywords\",\n        \"content\":\"Key1, Key2, Key3\",\n        \"local\":1}],\n        \"virtual_product\":\"0\"\n    }\n}",  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "{\n    \"Product\":\t{\n        \"ean\":\"9999\",\n        \"name\":\"Produto Teste API\",\n        \"ncm\":\"99999999\",\n        \"description\":\"Descrição do Produto de Teste da API\",\n        \"description_small\":\"Produto de Teste da API\",\n        \"price\":0.01,\n    \t\"cost_price\":0.01,\n        \"promotional_price\":0.01,\n        \"start_promotion\":\"2019-03-01\",\n        \"end_promotion\":\"2019-09-01\",\n    \t\"ipi_value\": 12,\n        \"brand\":\"marca\",\n        \"model\":\"Modelo\",\n        \"weight\":1000,\n        \"length\":10,\n        \"width\":10,\n        \"height\":10,\n        \"stock\":100,\n        \"category_id\":\"2\",\n        \"available\":1,\n        \"availability\":\"Disponível em 3 dias\",\n        \"availability_days\":3,\n        \"reference\":\"111\",\n        \"related_categories\":[],\n        \"release_date\":\"\",\n        \"picture_source_1\":\"http://bancodeimagens/imagem1.jpg\",\n        \"picture_source_2\":\"http://bancodeimagens/imagem2.jpg\",\n        \"picture_source_3\":\"http://bancodeimagens/imagem3.jpg\",\n        \"picture_source_4\":\"http://bancodeimagens/imagem4.jpg\",\n        \"picture_source_5\":\"http://bancodeimagens/imagem5.jpg\",\n        \"picture_source_6\":\"http://bancodeimagens/imagem6.jpg\",\n        \"metatag\":[{\"type\":\"keywords\",\n        \"content\":\"Key1, Key2, Key3\",\n        \"local\":1}],\n        \"virtual_product\":\"0\"\n    }\n}");
Request request = new Request.Builder()
  .url("{{api_address}}/products?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Product	|JSON|	Dados do produto
ean	|String (120)|	Código EAN do produto
name	|String (200)|	Nome do produto
ncm	|String (8)|	Código NCM do produto
description	|String (4800)|	Descrição do produto
description_small	|String (500)|	Descrição resumida do produto
price	|Decimal (9)|	Preço do produto
cost_price	|Decimal (9)|	Preço de custo do produto
promotional_price	|Decimal (9)|	Preço promocional do produto
start_promotion	|Date|	Data de início da promoção do produto (Formato: aaaa-mm-dd)
end_promotion	|Date|	Data de termino da promoção do produto (Formato: aaaa-mm-dd)
ipi_value	|Decimal|	IPI do produto
brand	|String (120)|	Marca do produto
model	|String (150)|	Modelo do produto
weight	|Number (9)|	Peso do produto
length	|Number (9)|	Comprimento do produto
width	|Number (9)|	Largura do produto
height	|Number (9)|	Altura do produto
stock	|Number (9)|	Estoque do produto
category_id	|Number|	Código da categoria principal do produto
available	|Number|	Produto disponível (Veja Tabela A)
availability	|String|	Disponibilidade do produto
availability_days	|Number|	Dias de disponibilidade do produto
reference	|String (120)|	Referência do produto
related_categories	|Number|	Categorias adicionais do produto (separados por vírgula)
release_date	|Date|	Data de lançamento do produto (Formato: aaaa-mm-dd)
picture_source_1	|String|	"Imagem principal do produto (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_2	|String|	"Imagem do produto - imagem 2 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_3	|String|	"Imagem do produto - imagem 3 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_4	|String|	"Imagem do produto - imagem 4 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_5	|String|	"Imagem do produto - imagem 5 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_6	|String|	"Imagem do produto - imagem 6 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
metatag	|Object|	Metatags
type	|String|	Tipo da metatag (Informar o valor keywords)
content	|String|	Dados da metatag
local	|Number|	Local da metatag (Informar p valor 1)
virtual_product	|String|	Se for um produto virtual, significa que ele não possui o envio físico. Produto virtual (Veja Tabela I)

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno com Sucesso:

<pre>
{
  "message":"Created",
  "id":"123",
  "code":201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message|String|Mensagem de retorno
:id|Number|Código do produto
code|Number|Código do retorno(201)

### Tabelas Auxiliares de Produtos

### Tabela A - Disponibilidade do produto (campo available)
Valor|Descrição
-----|---------
0|Produto indisponível
1|Produto disponível

### Tabela B - Produto em destaque (campo virtual_product)
Valor|Descrição
-----|---------
0|Produto normal
1|Produto virtual


## Atualizar Dados do Produto#put

Requisição para alterar os dados de um produto. Deverá enviar o JSON com os dados do produto para a alteração.

### Método PUT
`https://{api_address}/products/:id`

### Parâmetros enviados

<pre>
{
    "Product": {
        "ean": "9999",
        "name": "Produto Teste API",
        "ncm": "99999999",
        "description": "Descrição do Produto de Teste da API",
        "description_small": "Produto de Teste da API",
        "price": 0.01,
        "cost_price": 0.01,
        "promotional_price": 0.01,
        "start_promotion": "2019-03-01",
        "end_promotion": "2019-09-01",
        "brand": "marca",
        "model": "Modelo",
        "weight": 1000,
        "length": 10,
        "width": 10,
        "availability": "",
        "height": 10,
        "stock": 100,
        "category_id": "2",
        "available": 1,
        "warranty":"",
        "reference": "111",
        "picture_source_1": "http://bancodeimagens/imagem1.jpg",
        "picture_source_2": "http://bancodeimagens/imagem2.jpg",
        "picture_source_3": "http://bancodeimagens/imagem3.jpg",
        "picture_source_4": "http://bancodeimagens/imagem4.jpg",
        "picture_source_5": "http://bancodeimagens/imagem5.jpg",
        "picture_source_6": "http://bancodeimagens/imagem6.jpg",
        "metatag": [
            {
                "type": "keywords",
                "content": "Key1, Key2, Key3",
                "local": 1
            }
        ],
        "related_categories": [],
        "release_date": ""
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do produto
Product	|JSON|	Dados do produto
ean	|String|	Código EAN do produto
name	|String|	Nome do produto
ncm	|String|	Código NCM do produto
description	|String|	Descrição do produto
description_small	|String|	Descrição resumida do produto
price	|Decimal|	Preço do produto
cost_price	|Decimal|	Preço de custo do produto
promotional_price	|Decimal|	Preço promocional do produto
start_promotion	|Date|	Data de início da promoção do produto (Formato: aaaa-mm-dd)
end_promotion	|Date|	Data de termino da promoção do produto (Formato: aaaa-mm-dd)
brand	|String|	Marca do produto
model	|String|	Modelo do produto
weight	|Number|	Peso do produto
length	|Number|	Comprimento do produto
width	|Number|	Largura do produto
height	|Number|	Altura do produto
stock	|Number|	Estoque do produto
category_id	|Number|	Código da categoria principal do produto
availability	|Number|	prazo de disponibilidade do produto
available	|Number|	Produto disponível (Veja Tabela A)
warranty	|String|	Tempo de garantia do produto
reference	|String|	Referência do produto
picture_source_1	|String|	"Imagem principal do produto (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé."
picture_source_2	|String|	"Imagem do produto - imagem 2 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_3	|String|	"Imagem do produto - imagem 3 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_4	|String|	"Imagem do produto - imagem 4 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_5	|String|	"Imagem do produto - imagem 5 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé"
picture_source_6	|String|	"Imagem do produto - imagem 6 (Informar a URL para cadastro) *vide especificações de como fazer o envio da imagem no rodapé."
metatag	|Object|	Metatags
type	|String|	Tipo da metatag (Informar o valor keywords)
content	|String|	Dados da metatag
local	|Number|	Local da metatag (Informar p valor 1)
related_categories	|Number|	Categorias adicionais do produto (separados por vírgula)
release_date	|Date|	Data de lançamento do produto (Formato: aaaa-mm-dd)

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno com Sucesso:

<pre>
{
  "message":"Saved",
  "id":"123",
  "code":200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message|String|Mensagem de retorno
:id|Number|Código do produto
code|Number|Código do retorno(200)

### Tabelas Auxiliares de Produtos

### Tabela A - Disponibilidade do produto (campo available)
Valor|Descrição
-----|---------
0|Produto indisponível
1|Produto disponível

## Exclusão de Produtos#delete

Requisição para excluir um Produto ou um Kit

> Código de Exemplo:

```shell


curl --location -g --request DELETE 'https://{api_address}/products/:id/?access_token={token}'
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/:id/?access_token={token}');
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


var client = new RestClient("https://{api_address}/products/:id/?access_token={token}");
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
  .url("https://{api_address}/products/:id/?access_token={token}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/products/:id/?access_token={token}`

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
id	|Number|	Código do produto

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno com Sucesso:

<pre>
{
  "message":"Deleted",
  "id":"123",
  "code":200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message|String|Mensagem de retorno
:id|Number|Código do produto
code|Number|Código do retorno(200)

## Exclusão de Kit#delete

### Método DELETE
`https://{api_address}/products/product_parent_id/?access_token={token}`

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno com Sucesso:

<pre>
{
  "message":"Deleted",
  "id":"123",
  "code":200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message|String|Mensagem de retorno
:id|Number|Código do produto is_kit=1
code|Number|Código do retorno(200)

### Especificações para o envio das imagens na API

Via API é possível enviar somente até 6 imagens, utilizando os campos citados acima do picture_source. Hoje, nossa plataforma recebe a url da imagem enviada na requisição, efetua o download e processa para a nossa cdn.

Dessa forma, para que a nossa plataforma possa realizar o processamento da imagem no envio via API, é necessário se atentar a especificações abaixo:

- A imagem deve ser uma url externa;
- A url ao inserir em qualquer navegador, precisa ser visualizada de forma pública;
- Deverá possuir uma extensão no final da url;
- A imagem deverá possuir uma dessas extensões JPG, JPEG e PNG;
- O tamanho deverá ser de até 350 Kb;
- E dimensão até 2000x2000 pixels;
- A imagem não poderá possuir uma extensão renomeada;
- E o nome do conteúdo da url, não pode haver espaços e nem caractere especial;
 

Gestão no envio das imagens
Precisamos que seja realizado do lado ERP, uma gestão no envio dessas imagens, contemplando no fluxo da rotina do ERP, as seguintes situações:

Cadastro de um novo produto:

- Realizar o envio somente das imagens do novo produto que está sendo cadastrado e não realizar o envio das novas imagens + imagens que já foram refletidas de outros produtos

Atualização de imagem:

- Realizar o envio somente das imagens que sofrerão alteração e não realizar o envio das imagens que vão ser alteradas + todas as outras imagens que já constam na loja

**Não realizar o envio de imagens repetidas com a mesma url.**

**E não realizar o envio de imagens repetidas só alterando o nome da url.**

### PONTO DE ATENÇÃO

Para excluir uma imagem, hoje não disponibilizamos um endpoint específico para fazer uso do protocolo Delet, dessa forma, para excluir uma imagem via API, você deverá enviar um PUT, passando o campo vazio com espaço "", segue exemplo abaixo:

"picture_source_1": " ",<br/>
"picture_source_2": " ",<br/>
"picture_source_3": " ",<br/>
"picture_source_4": " ",<br/>
"picture_source_5": " ",<br/>
"picture_source_6": " "

> Exemplo 1:

<pre>
{
    "Product": {
        "picture_source_2": "http://imagem/imagem2.jpg"
    }
}
</pre>

Caso o produto possua 6 imagens cadastradas e você deseje alterar apenas uma imagem, você deverá passar o campo somente daquela imagem. Conforme **exemplo 1** ao lado:

> Exemplo 2:

<pre>
{
    "Product": {
        "picture_source_1": " ",
        "picture_source_2": "http://imagem/imagem2.jpg",
        "picture_source_3": " ",
        "picture_source_4": " ",
        "picture_source_5": " ",
        "picture_source_6": " "
    }
}
</pre>

Pois caso passe dessa forma, **exemplo 2** ao lado, as demais imagens serão deletadas e mesmo passando a imagem na posição dois, ela será considerado como posição 1, devido as outras terem sido excluídas.

*Caso as imagens não tenham sido refletidas e no log do produto não conste nenhum reject, informando que houve falha, recomendamos que realize novamente o envio das imagens, através do PUT.*