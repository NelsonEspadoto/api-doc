# APIs de Pedidos

## Listagem de Pedidos#get

Requisição para consultar os dados das categorias de forma estruturada.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/orders'
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders');
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
var client = new RestClient("https://{api_address}/orders");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/orders")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```


### Método GET
`https://{api_address}/orders`

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
id	|Number|	Código do pedido
status	|String|	Status do pedido
partner_id	|String|	Código do parceiro
limit	|Number|	Limite de registros
page	|Number|	Página corrente
sort	|String|	Ordenação ex.: [campo]_[asc/desc]
modified	|Date|	Filtro de data de modificação, ex.: [start], [end] Formato: aaaa-mm-dd

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  {
    "paging": {
        "total": 7,
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
        "status",
        "partner_id",
        "session_id",
        "sending_code",
        "customer_id",
        "shipment",
        "point_sale",
        "payment_form",
        "access_code",
        "external_code",
        "has_payment",
        "has_invoice",
        "has_shipment",
        "with_statuses",
        "printed",
        "payment_method_id",
        "store_note",
        "discount_coupon",
        "modified",
        "date",
        "shipment_date",
        "payment_date"
    ],
    "appliedFilters": [],
    "Orders": [
      {
        "Order": {
            "status": "A ENVIAR",
            "id": "5",
            "date": "2020-12-07",
            "customer_id": "5",
            "partial_total": "35999.00",
            "taxes": "0.00",
            "discount": "0.00",
            "point_sale": "LOJA VIRTUAL",
            "shipment": "Correios Expresso",
            "shipment_value": "28.35",
            "shipment_date": "",
            "store_note": "07/12/2020 11:55:22 Pedido em 1 vez de R$ 27,027.60 através do Boleto - Yapay - Boleto",
            "discount_coupon": "natal25/8999.75",
            "payment_method_rate": "0.00",
            "value_1": "0.00",
            "payment_form": "Boleto - Yapay",
            "sending_code": "",
            "session_id": "rdlq7ogripa61r33p75bei8cj2",
            "total": "27027.60",
            "payment_date": "0000-00-00",
            "access_code": "DB91EEA5D671CA2",
            "progressive_discount": "0.00",
            "shipping_progressive_discount": "0.00",
            "shipment_integrator": "Frete Fácil",
            "modified": "2020-12-21 11:21:52",
            "printed": "",
            "interest": "0.00",
            "id_quotation": "3220",
            "estimated_delivery_date": "2020-12-22",
            "external_code": "",
            "has_payment": "0",
            "has_shipment": "0",
            "has_invoice": "1",
            "total_comission_user": "0.00",
            "total_comission": "0.00",
            "coupon": {
                "code": "natal25",
                "discount": "8999.75"
            },
            "is_traceable": "",
            "OrderStatus": {
                "id": "1",
                "default": "1",
                "type": "open",
                "show_backoffice": "1",
                "allow_edit_order": "0",
                "description": "",
                "status": "A ENVIAR",
                "show_status_central": "",
                "background": "#CAFAD1"
            },
            "PickupLocation": [],
            "ProductsSold": [
                {
                    "id": "5"
                }
            ],
            "Payment": [],
            "OrderInvoice": [
                {
                    "id": "7",
                    "link": ""
                }
            ],
            "MlOrder": [],
            "OrderTransactions": [],
            "MarketplaceOrder": [],
            "Extensions": []
        }
    }
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
Orders	|Object|	Lista de produtos
Order	|Object|	Dados do pedido
id	|Number|	Código do pedido
status	|String|	Status do pedido
date	|Date|	Data do pedido
customer_id	|Number|	Código do cliente
partial_total	|Decimal|	Valor parcial do pedido
taxes	|Decimal|	Valor de acréscimo / taxa
discount	|Decimal|	Valor de desconto
shipment_value	|Decimal|	Valor de frete
shipment_date	|Date|	Data de envio do pedido
discount_coupon	|Decimal|	Código do cupom de desconto
payment_method_rate	|Decimal|	Taxa do meio de pagamento
value_1	|Decimal|	Valor
payment_form	|String|	Forma de pagamento do pedido
sending_code	|String|	Código de Envio
session_id	|Number|	Código da sessão
total	|Number|	Valor total do pedido
payment_date	|Date|	Data de Pagamento
access_code	|String|	Código de acesso
shipment_integrator	|String|	Integrador de Envio
modified	|Date|	Data de Modificação
printed	|String|	"se o retorno for 1 - o pedido já foi impresso se o retorno for vazio """" - o pedido ainda não foi impresso"
interest	|Decimal|	Valor do Juros do Pedido
id_quotation	|Number|	Código externo de cotação de frete (Gateway de Frete)
estimated_delivery_date	|Number|	Tempo estimado de entrega
total_comission_user	|Decimal|	Comissão por usuario
total_comission	|Decimal|	Total de comissão
is_traceable	|Number|	É rastreavel
OrderStatus	|Object|	Detalhes de status do pedido
ProductsSold	|Object|	Lista de produtos do pedido
id	|Number|	Código dos produtos do pedido
Payment	|Object|	Informações de pagamento do pedido
id	|Number|	Código de pagamento do pedido
OrderInvoice	|Object|	Informações da nota fiscal do pedido
id	|Number|	Código da nota fiscal do pedido


## Dados do Pedido#get

Requisição para consultar os dados das categorias de forma estruturada.

### Método GET
`https://{api_address}/orders/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|Chave de acesso
:id	|Number|Código do pedido

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "Order": {
      "status": "FINALIZADO",
      "id": "15",
      "date": "2021-02-10",
      "hour": "11:28:21",
      "customer_id": "1",
      "partial_total": "59900.00",
      "taxes": "0.00",
      "discount": "0.00",
      "point_sale": "LOJA VIRTUAL",
      "shipment": "Correios Expresso",
      "shipment_value": "38.91",
      "shipment_date": "",
      "delivered": "",
      "shipping_cancelled": "",
      "store_note": "10/02/2021 11:28:28 Pedido em 1 vez de R$ 62,935.86 através do Boleto - Yapay - Boleto Link da transação: https://intermediador.yapay.com.br/orders/billet/17471d7cd90f7d3ee4643e1da0f15",
      "customer_note": "",
      "partner_id": "0",
      "discount_coupon": "",
      "payment_method_rate": "2996.95",
      "installment": "1",
      "value_1": "0.00",
      "sending_code": "",
      "sending_date": "0000-00-00",
      "billing_address": "0",
      "delivery_time": "3",
      "payment_method_id": "80",
      "payment_method": "Boleto - Yapay",
      "session_id": "k8ku3icuvb5uge2qj7u8gbtli6",
      "total": "62935.86",
      "payment_date": "2021-02-10",
      "access_code": "38D071AEFEF4960",
      "shipment_integrator": "Frete Fácil",
      "modified": "2021-05-06 10:38:45",
      "printed": "",
      "interest": "0.00",
      "id_quotation": "3220",
      "estimated_delivery_date": "2021-02-15",
      "is_traceable": "",
      "external_code": "",
      "tracking_url": "",
      "has_payment": "0",
      "has_shipment": "0",
      "has_invoice": "0",
      "total_comission_user": "0.00",
      "total_comission": "0.00",
      "OrderStatus": {
          "id": "69",
          "default": "1",
          "type": "closed",
          "show_backoffice": "1",
          "allow_edit_order": "0",
          "description": "",
          "status": "FINALIZADO",
          "show_status_central": "",
          "background": "#85CC8D"
      },
      "PickupLocation": [],
      "ProductsSold": [
          {
              "id": "17"
          }
      ],
      "Payment": [],
      "OrderInvoice": [],
      "MlOrder": [],
      "OrderTransactions": [
          {
              "url_payment": "https://intermediador.yapay.com.br/orders/billet/17471d7cd3ee4643e1da0f15"
          }
      ],
      "MarketplaceOrder": [],
      "Extensions": [],
      "CustomerAddress": {
          "id": "7"
      },
      "payments_notification": {
          "notification": "https://trayparceiros.commercesuite.com.br/loja/retorno_pagamento.php?loja=391250&gateway=5&codigoAcesso=38D071AEFEF4960&notification=true"
      },
      "partner_name": ""
  }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Order	|Object|	Dados do pedido
id	|Number|	Código do pedido
status	|String|	Status do pedido
date	|Date|	Data do pedido
hour	|Hour|	Horário do pedido
customer_id	|Number|	Código do cliente
partial_total	|Decimal|	Valor parcial do pedido
taxes	|Decimal|	Valor de acréscimo / taxa
discount	|Decimal|	Valor de desconto
point_sale	|String|	Local de venda
shipment	|String|	Tipo de frete
shipment_value	|Decimal|	Valor de frete
shipment_date	|Date|	Data de envio do pedido
delivered	|Number|	Pedido enviado (Veja Tabela A)
store_note	|String|	Informações adicionais da loja
customer_note	|String|	Informações adicionais do cliente
partner_id	|Number|	Código do parceiro
discount_coupon	|Decimal|	Código do cupom de desconto
payment_method_rate	|Decimal|	Taxa do meio de pagamento
installment	|Number|	Quantidade de parcelas
value_1	|Decimal|	Valor
sending_code	|String|	Código de envio
sending_date	|Date|	Data de envio
billing_address	|Number|	Código do endereço de cobrança
delivery_time	|String|	Tempo de entrega
payment_method_id	|Number|	Código do meio de pagamento
payment_method	|Number|	Meio de pagamento
session_id	|Number|	Código da sessão
total	|Number|	Valor total do pedido
access_code	|String|	Código de acesso
shipment_integrator	|String|	Integrador de envio
modified	|Date|	Data de Moticação
id_quotation	|Number|	Código externo de cotação de frete (Gateway de Frete)
estimated_delivery_date	|Number|	Tempo estimado de entrega
is_traceable	|Number|	É rastreavel
external_code	|String|	codigo externo
has_payment	|String|	"se o retorno for 1 - existe pagamento efetuado se o retorno for 0 - não há pagamento confirmado"
has_shipment	|String|	"se o retorno for 1 - existe forma de envio se o retorno for 0 - não há forma de envio"
has_invoice	|String|	"se o retorno for 1 - existe dados fiscais se o retorno for 0 - ainda não há dados fiscais"
printed	|String|	"se o retorno for 1 - o pedido já foi impresso se o retorno for vazio """" - o pedido ainda não foi impresso"
interest	|Decimal|	Valor do Juros do Pedido
total_comission_user	|String|	Total de commisão por Usuario
total_comission	|String|	Total de commisão
OrderStatus	|Object|	Detalhes do status do pedido
ProductsSold	|Object|	Lista de produtos do pedido
id	|Number|	Código dos produtos do pedido
Payment	|Object|	Informações de pagamento do pedido
id	|Number|	Código de pagamento do pedido
OrderInvoice	|Object|	Informações da nota fiscal do pedido
id	|Number|	Código da nota fiscal do pedido
CustomerAddress	|Object|	Informações de endereço do cliente
id	|Number|	Código de endereço do cliente
payments_notification	|Object|	Informações de notificação do pedido
notification	|String|	URL de notificação do pedido

## Dados Completo do Pedido#get

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/orders/:id/complete'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/:id/complete');
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
var client = new RestClient("https://{api_address}/orders/:id/complete");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/orders/:id/complete")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

Requisição para consultar os dados das categorias de forma estruturada.

### Método GET
`https://{api_address}/orders/:id/complete`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|Chave de acesso
:id	|Number|Código do pedido

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
  "Order": {
      "status": "FINALIZADO",
      "id": "15",
      "date": "2021-02-10",
      "hour": "11:28:21",
      "customer_id": "1",
      "partial_total": "59900.00",
      "taxes": "0.00",
      "discount": "0.00",
      "point_sale": "LOJA VIRTUAL",
      "shipment": "Correios Expresso",
      "shipment_value": "38.91",
      "shipment_date": "",
      "delivered": "",
      "shipping_cancelled": "",
      "store_note": "10/02/2021 11:28:28 Pedido em 1 vez de R$ 62,935.86 através do Boleto - Yapay - Boleto Link da transação: https://intermediador.yapay.com.br/orders/billet/17471d7cd90fd3ee4643e1da0f15",
      "customer_note": "",
      "partner_id": "0",
      "discount_coupon": "",
      "payment_method_rate": "2996.95",
      "installment": "1",
      "value_1": "0.00",
      "sending_code": "",
      "sending_date": "0000-00-00",
      "billing_address": "0",
      "delivery_time": "3",
      "payment_method_id": "80",
      "payment_method": "Boleto - Yapay",
      "session_id": "k8ku3icuvb5uge2qj7u8gbtli6",
      "total": "62935.86",
      "payment_date": "2021-02-10",
      "access_code": "38D071AEFEF4960",
      "shipment_integrator": "Frete Fácil",
      "modified": "2021-05-06 10:38:45",
      "printed": "",
      "interest": "0.00",
      "id_quotation": "3220",
      "estimated_delivery_date": "2021-02-15",
      "is_traceable": "",
      "external_code": "",
      "tracking_url": "",
      "has_payment": "0",
      "has_shipment": "0",
      "has_invoice": "0",
      "total_comission_user": "0.00",
      "total_comission": "0.00",
      "OrderStatus": {
          "id": "69",
          "default": "1",
          "type": "closed",
          "show_backoffice": "1",
          "allow_edit_order": "0",
          "description": "",
          "status": "FINALIZADO",
          "show_status_central": "",
          "background": "#85CC8D"
      },
      "PickupLocation": [],
      "cost": "0",
      "urls": {
          "payment": "https://trayparceiros.commercesuite.com.br/loja/pagamento.php?loja=391250&pedido=38D071AEFEF4960"
      },
      "payment_method_type": "bank_billet",
      "Customer": {
          "cnpj": "",
          "newsletter": "0",
          "created": "0000-00-00 00:00:00",
          "terms": "0000-00-00 00:00:00",
          "id": "1",
          "name": "Nome Cliente",
          "registration_date": "2008-10-14",
          "rg": "",
          "cpf": "12442673177",
          "phone": "1434546185",
          "cellphone": "",
          "birth_date": "0000-00-00",
          "gender": "0",
          "email": "email@tray.com.br",
          "nickname": "",
          "token": "0BBB15A404B6BA1",
          "total_orders": "0",
          "observation": "Teste 2",
          "type": "0",
          "company_name": "",
          "state_inscription": "",
          "reseller": "0",
          "discount": "0.000",
          "blocked": "",
          "credit_limit": "0.00",
          "indicator_id": "0",
          "profile_customer_id": "1",
          "last_sending_newsletter": "0000-00-00",
          "last_purchase": "2021-02-23",
          "last_visit": "2021-02-25",
          "last_modification": "0000-00-00 00:00:00",
          "address": "Rua Teste",
          "zip_code": "17500-000",
          "number": "55",
          "complement": "Casa 26",
          "neighborhood": "Centro",
          "city": "Marília",
          "state": "SP",
          "country": "Brasil",
          "modified": "2021-04-05 09:33:59",
          "Extensions": {
              "Profile": {
                  "id": "1",
                  "name": "Padrao"
              },
              "Profiles": [
                  {
                      "id": "1",
                      "price_list_id": "0",
                      "name": "Padrao",
                      "approves_registration": "0",
                      "show_price": "",
                      "theme_id": "0",
                      "selected": "1"
                  }
              ]
          },
          "CustomerAddresses": [
              {
                  "CustomerAddress": {
                      "id": "7",
                      "customer_id": "1",
                      "address": "Rua Teste",
                      "number": "55",
                      "complement": "Casa 26",
                      "neighborhood": "Centro",
                      "city": "Marília",
                      "state": "SP",
                      "zip_code": "17500-000",
                      "country": "Brasil",
                      "type": "1",
                      "active": "1",
                      "description": "Residencial",
                      "recipient": "",
                      "type_delivery": "1",
                      "not_list": "0"
                  }
              }
          ]
      },
      "ProductsSold": [
          {
              "ProductsSold": {
                  "product_kit_id": "0",
                  "product_kit_id_kit": "0",
                  "id_campaign": "0",
                  "product_id": "13",
                  "quantity": "1",
                  "id": "17",
                  "order_id": "15",
                  "name": "Notebook Alienware Gamer,
                  "original_name": "Notebook Alienware Gamer",
                  "virtual_product": "0",
                  "ean": "",
                  "Sku": [
                      {
                        "type": "Voltagem",
                        "value": "110v"
                      }
                  ],
                  "price": "59900.00",
                  "cost_price": "0.00",
                  "original_price": "59900.00",
                  "weight": "3000",
                  "weight_cubic": "15000",
                  "brand": "Dell Alienware",
                  "model": "area51m",
                  "reference": "",
                  "length": "40",
                  "width": "45",
                  "height": "40",
                  "variant_id": "25",
                  "additional_information": "",
                  "text_variant": "",
                  "warranty": "",
                  "bought_together_id": "0",
                  "ncm": "",
                  "included_items": "",
                  "release_date": "",
                  "commissioner_value": "0.00",
                  "comissao": "0.00",
                  "ProductSoldImage": [
                      {
                        "http": "http://images.tcdn.com.br/img/img_prod/391250/notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png",
                        "https": "https://images.tcdn.com.br/img/img_prod/391250/notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png",
                        "thumbs": {
                            "30": {
                                "http": "http://images.tcdn.com.br/img/img_prod/391250/30_notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png",
                                "https": "https://images.tcdn.com.br/img/img_prod/391250/30_notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png"
                            },
                            "90": {
                                "http": "http://images.tcdn.com.br/img/img_prod/391250/90_notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png",
                                "https": "https://images.tcdn.com.br/img/img_prod/391250/90_notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png"
                            },
                            "180": {
                                "http": "http://images.tcdn.com.br/img/img_prod/391250/180_notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png",
                                "https": "https://images.tcdn.com.br/img/img_prod/391250/180_notebook_alienware_gamer_13_1_8396502fb367dd214dd15f06782390c3.png"
                            }
                          }
                      }
                  ],
                  "Category": [
                      {
                        "id": "5",
                        "name": "Notebooks",
                        "main_category": "0"
                      },
                      {
                        "id": "15",
                        "name": "Gamer",
                        "main_category": "1"
                      }
                  ],
                  "is_giveaway": "",
                  "BoughtTogether": [],
                  "url": {
                    "http": "http://trayparceiros.commercesuite.com.br/notebooks/gamer/notebook-alienware-gamer",
                    "https": "https://trayparceiros.commercesuite.com.br/notebooks/gamer/notebook-alienware-gamer"
                  },
                  "Discount": [],
                  "Stock": {
                    "id": "1",
                    "name": "Loja"
                  }
              }
          }
      ],
      "OrderInvoice": [],
      "Payment": [],
      "MlOrder": [],
      "MarketplaceOrder": [
            {
                "MarketplaceOrder": {
                    "order_id": "123456",
                    "marketplace_name": "Dafiti",
                    "marketplace_seller_name": "Loja",
                    "marketplace_seller_id": "",
                    "marketplace_document": "1154987592",
                    "payment_responsible_document": "11200456549",
                    "marketplace_order_id": "987654",
                    "marketplace_shipping_id": "",
                    "marketplace_shipping_type": "",
                    "marketplace_internal_status": "",
                    "created": "2021-06-11 10:00:51",
                    "updated": "2021-06-11 10:00:51"
                }
            }
        ],
      "OrderTransactions": [
          {
            "url_payment": "https://intermediador.yapay.com.br/orders/billet/17471d7cd90f3ee4643e1da0f15"
          }
      ],
      "OrderInvoiceAmount": [],
      "PaymentMethodMessage": {
        "text": "",
        "text_pag": "",
        "text_confirm": "",
        "confirmation": "0"
      },
      "payments_notification": {
        "notification": "https://trayparceiros.commercesuite.com.br/loja/retorno_pagamento.php?loja=391250&gateway=5&codigoAcesso=38D071AEFEF4960&notification=true"
      },
      "partner_name": ""
  },
  "Extensions": [],
  "User": [],
  "Confirmation": []
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Order	|Object|	Dados do pedido
id	|Number|	Código do pedido
status	|String|	Status do pedido
date	|Date|	Data do pedido
hour	|Hour|	Horário do pedido
customer_id	|Number|	Id do usuario
partial_total	|Decimal|	Valor parcial do pedido
taxes	|Decimal|	Valor de acréscimo / taxa
discount	|Decimal|	Valor de desconto
point_sale	|String|	Local de venda
shipment	|String|	Tipo de frete
shipment_value	|Decimal|	Valor de frete
shipment_date	|Date|	Data de envio do pedido
delivered	|Number|	Pedido enviado (Veja Tabela A)
store_note	|String|	Informações adicionais da loja
customer_note	|String|	Informações adicionais do cliente
partner_id	|Number|	Código do parceiro
discount_coupon	|Decimal|	Código do cupom de desconto
PickupLocation	|String|	Dados referente ao ponto de coleta dos Correios
shipping_id	|Number|	Id da modalidade de frete selecionada
code	|Number|	Código da agência no sistema dos Correios em que o produto será retirado
name	|String|	Nome da agência dos Correios em que o produto será retirado
address	|String|	Dados do endereço da agência dos Correios onde o produto será retirado
value	|Number|	Valor do frete
information	|String|	Dados gerais sobre a retirada do produto
cellphone	|Number|	Telefone para contato da agência
payment_method_rate	|Decimal|	Taxa do meio de pagamento
installment	|Number|	Quantidade de parcelas
sending_code	|String|	Código de envio
sending_date	|Date|	Data de envio
billing_address	|Number|	Código do endereço de cobrança
delivery_time	|String|	Tempo de entrega
payment_method_id	|Number|	Código do meio de pagamento
payment_method	|Number|	Meio de pagamento
session_id	|Number|	Código da sessão
total	|Number|	Valor total do pedido
modified	|Number|	Data de modificação do pedido
id_quotation	|Number|	Código externo de cotação de frete (Gateway de Frete)
estimated_delivery_date	|Number|	Tempo estimado de entrega
has_payment	|String|	"se o retorno for 1 - existe pagamento efetuado se o retorno for 0 - não há pagamento confirmado"
has_shipment	|String|	"se o retorno for 1 - existe forma de envio se o retorno for 0 - não há forma de envio"
has_invoice	|String|	"se o retorno for 1 - existe dados fiscais se o retorno for 0 - ainda não há dados fiscais"
printed	|String|	"se o retorno for 1 - o pedido já foi impresso se o retorno for vazio """" - o pedido ainda não foi impresso"
interest	|Decimal|	Valor do Juros do Pedido
cupom	|Object|	Dados do cupom de desconto
code	|Object|	Código do cupom de desconto
discount	|Object|	Valor de desconto
Customer	|Object|	Dados do cliente
id	|Number|	Código do cliente
name	|String|	Nome
rg	|String|	RG
cpf	|String|	CPF
phone	|String|	Telefone fixo
cellphone	|String|	Telefone celular
birth_date	|Date|	Data de aniversário
gender	|Number|	Sexo (Veja Tabela C)
email	|String|	E-mail
nickname	|String|	Apelido
token	|String|	Chave única do cliente
total_orders	|Number|	Total de pedidos
observation	|String|	Informações sobre o cliente
type	|Number|	Tipo de cliente (Veja Tabela B)
cnpj	|String|	CNPJ
company_name	|String|	Razão social
state_inscription	|String|	Inscrição estatual
reseller	|Number|	Cliente revendedor
discount	|Decimal|	Valor de desconto
blocked	|Number|	Cliente bloqueado (Veja Tabela F)
credit_limit	|Decimal|	Valor de crédito
indicator_id	|Number|	Código de indicação
profile_customer_id	|Number|	Código do perfil do cliente
last_sending_newsletter	|Date|	Data do último envio de newsletter
last_purchase	|Date|	Data da última compra
last_visit	|Date|	Data da última visita
last_modification	|Date|	Data de modificação
address	|String|	Logradouro
zip_code	|String|	CEP
Number	|Number|	Número do endereço
complement	|String|	Complemento
neighborhood	|String|	Bairro
city	|String|	Cidade
state	|String|	Sigla do estado
newsletter	|Number|	Newsletter ativa
registration_date	|Date|	Data de registro
modified	|Date|	Data de modificação
CustomerAddresses	|Object|	Lista de endereços do cliente
CustomerAddress	|Object|	Endereços do cliente
id	|String|	Código do endereço do cliente
customer_id	|String|	Código do cliente
recipient	|String|	Nome do cliente
address	|String|	Logradouro
Number	|Number|	Número do endereço
complement	|String|	Complemento
neighborhood	|String|	Bairro
city	|String|	Cidade
state	|String|	Sigla do estado
zip_code	|String|	CEP
country	|String|	País
type	|Number|	Tipo de endereço (Veja Tabela D)
active	|Number|	Endereço ativo (Veja Tabela E)
description	|String|	Descrição do Endereço
ProductsSolds	|Object|	Lista de produtos vendidos
ProductsSold	|Object|	Dados do produto vendido
id	|Number|	Código do produto vendido
product_id	|Number|	Código do produto
order_id	|Number|	Código do pedido
name	|String|	Nome do produto
original_price	|Decimal|	Valor original
weight	|Number|	Peso
weight_cubic	|Number|	Peso cúbico
quantity	|Number|	Quantidade vendida
model	|String|	Modelo
reference	|String|	Código de referência
length	|String|	Comprimento do produto
width	|String|	Largura do produto
height	|String|	Altura do produto
variant_id	|Number|	Código da variação
additional_information	|String|	Informações adicionais
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
cfop	|Number|	Código CFOP
order_invoice_id	|Number|	Código da nota fiscal
Payment	|Object|	Informações de pagamento do pedido
Payment	|Object|	Informações de pagamento do pedido
id	|Number|	Código do pagamento do pedido
order_id	|Number|	Código do pedido
payment_method_id	|Number|	Código da forma de pagamento
method	|String|	Nome da forma de pagamento
payment_place	|String|	Local do pagamento
value	|Decimal|	Valor do pagamento
date	|Date|	Data do pagamento
note	|String|	Observação do pagamento
created	|Date|	Data de criação do pagamento
modified	|Date|	Data de modificação do pagamento
MlOrder	|Object|	"Lista de Dados do Mercado Livre *verificar retorno dos campos do ML no rodapé"
MlOrder	|Object|	"Dados do Mercado Livre *verificar retorno dos campos do ML no rodapé"
marketplace_name |String| Nome do Marketplace
marketplace_seller_name |String| Nome do Seller junto ao marketplace
marketplace_seller_id |String| Id do vendedor junto ao marketplace
marketplace_document |String| CNPJ do marketplace
payment_responsible_document |String| CNPJ do intermediador de pagamento que processou o pagamento
marketplace_order_id |String| Id do pedido junto ao marketplace
marketplace_shipping_id |String| Id do envio junto ao marketplace (OBS. Não é o código de rastreio)
marketplace_shipping_type |String| Tipo de envio do marketplace
marketplace_internal_status |String| Status do pedido dentro do marketplace
id	|Number|	Codigo interno
created	|Date|	Data de criação
updated	|Date|	Data de atualização
cliente_id	|Number|	Código interno do cliente
codigo	|Number|	Código do Mercado Livre
item_id	|String|	Código do item
user_id	|Number|	Código do usuário no Mercado Livre
nickname	|String|	Apelido do usuário
mercado_envio	|String|	Código do mercado envio
shipment_id	|Number|	Código do envio
status_frete_ml	|String|	Status de frete do Mercado Livre
substatus_frete_ml	|String|	Substatus de frete do Mercado Livre
ml_coleta	|Number|	Coleta do Mercado Livre
romaneio_id	|Number|	Código do romaneio
invoice_data_id	|Number|	Código da data da fatura
service_id	|Number|	Código do serviço
order_id	|Number|	Código interno do pedido
ml_collect	|Number|	Coletado pelo Mercado Livre
shipping_mode	|String|	Modo de envio
payments_notification	|Object|	Informações de notificação do pedido
notification	|String|	URL de notificação do pedido

## Cadastrar Pedido#post

Requisição para consultar os dados das categorias de forma estruturada.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/orders?access_token={{access_token}}' \
--data-urlencode '["Order"]["point_sale"]=PARTICULAR' \
--data-urlencode '["Order"]["session_id"]=0BBB15A404B6BA1' \
--data-urlencode '["Order"]["shipment"] =Sedex' \
--data-urlencode '["Order"]["shipment_value"]=10.44' \
--data-urlencode '["Order"]["payment_form"]=Boleto - TrayCheckout' \
--data-urlencode '["Order"]["Customer"]["type"]=0' \
--data-urlencode '["Order"]["Customer"]["name"]=Nome do Cliente' \
--data-urlencode '["Order"]["Customer"]["cpf"]=00000000000' \
--data-urlencode '["Order"]["Customer"]["email"]=email@docliente.com' \
--data-urlencode '["Order"]["Customer"]["rg"]=00.000.000-X' \
--data-urlencode '["Order"]["Customer"]["gender"]=M' \
--data-urlencode '["Order"]["Customer"]["phone"]=1133330001' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["address"]=Endereço do Cliente' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["zip_code"]=04001001' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["number"]=123' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["complement"]=Sala 123' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["neighborhood"] =Bairro do Cliente' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["city"]=Cidade do Cliente' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["state"]=SP' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["country"]=BRASIL' \
--data-urlencode '["Order"]["Customer"]["CustomerAddress"][0]["type"]=1' \
--data-urlencode '["Order"]["Customer"]["ProductsSold"][0]["product_id"]=1' \
--data-urlencode '["Order"]["Customer"]["ProductsSold"][0]["variant_id"]=12' \
--data-urlencode '["Order"]["Customer"]["ProductsSold"][0]["price"]=42.90' \
--data-urlencode '["Order"]["Customer"]["ProductsSold"][0]["original_price"]=42.90' \
--data-urlencode '["Order"]["Customer"]["ProductsSold"][0]["quantity"]=1' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_name"]=Mercado Livre' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_seller_name"]=1234567890' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_seller_id"]=273480425' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_document"]=0000000000000' \
--data-urlencode '["Order"]["MarketplaceOrder""]["payment_responsible_document"]=0000000000000' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_order_id"]=4429804558' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_shipping_id"]=40457395268' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_shipping_type"]=me2' \
--data-urlencode '["Order"]["MarketplaceOrder""]["marketplace_internal_status"]=shipping'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Order"]["point_sale"]' => 'PARTICULAR',
  '["Order"]["session_id"] ' => '0BBB15A404B6BA1',
  '["Order"]["shipment"] ' => 'Sedex',
  '["Order"]["shipment_value"]' => '10.44',
  '["Order"]["payment_form"]' => 'Boleto - TrayCheckout',
  '["Order"]["Customer"]["type"]' => '0',
  '["Order"]["Customer"]["name"]' => 'Nome do Cliente',
  '["Order"]["Customer"]["cpf"]' => '00000000000',
  '["Order"]["Customer"]["email"]' => 'email@docliente.com',
  '["Order"]["Customer"]["rg"]' => '00.000.000-X',
  '["Order"]["Customer"]["gender"]' => 'M',
  '["Order"]["Customer"]["phone"]' => '1133330001',
  '["Order"]["Customer"]["CustomerAddress"][0]["address"]' => 'Endereço do Cliente',
  '["Order"]["Customer"]["CustomerAddress"][0]["zip_code"]' => '04001001',
  '["Order"]["Customer"]["CustomerAddress"][0]["number"]' => '123',
  '["Order"]["Customer"]["CustomerAddress"][0]["complement"]' => 'Sala 123',
  '["Order"]["Customer"]["CustomerAddress"][0]["neighborhood"] ' => 'Bairro do Cliente',
  '["Order"]["Customer"]["CustomerAddress"][0]["city"]' => 'Cidade do Cliente',
  '["Order"]["Customer"]["CustomerAddress"][0]["state"]' => 'SP',
  '["Order"]["Customer"]["CustomerAddress"][0]["country"]' => 'BRASIL',
  '["Order"]["Customer"]["CustomerAddress"][0]["type"]' => '1',
  '["Order"]["Customer"]["ProductsSold"][0]["product_id"]' => '1',
  '["Order"]["Customer"]["ProductsSold"][0]["variant_id"]' => '12',
  '["Order"]["Customer"]["ProductsSold"][0]["price"]' => '42.90',
  '["Order"]["Customer"]["ProductsSold"][0]["original_price"]' => '42.90',
  '["Order"]["Customer"]["ProductsSold"][0]["quantity"]' => '1',
  '["Order"]["MarketplaceOrder""]["marketplace_name"]' => 'Mercado Livre',
  '["Order"]["MarketplaceOrder""]["marketplace_seller_name"]' => '1234567890',
  '["Order"]["MarketplaceOrder""]["marketplace_seller_id"]' => '273480425',
  '["Order"]["MarketplaceOrder""]["marketplace_document"]' => '0000000000000',
  '["Order"]["MarketplaceOrder""]["payment_responsible_document"]' => '0000000000000',
  '["Order"]["MarketplaceOrder""]["marketplace_order_id"]' => '4429804558',
  '["Order"]["MarketplaceOrder""]["marketplace_shipping_id"]' => '40457395268',
  '["Order"]["MarketplaceOrder""]["marketplace_shipping_type"]' => 'me2',
  '["Order"]["MarketplaceOrder""]["marketplace_internal_status"]' => 'shipping'
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
var client = new RestClient("https://{api_address}/orders?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Order\"][\"point_sale\"]", "PARTICULAR");
request.AddParameter("[\"Order\"][\"session_id\"]", "0BBB15A404B6BA1");
request.AddParameter("[\"Order\"][\"shipment\"] ", "Sedex");
request.AddParameter("[\"Order\"][\"shipment_value\"]", "10.44");
request.AddParameter("[\"Order\"][\"payment_form\"]", "Boleto - TrayCheckout");
request.AddParameter("[\"Order\"][\"Customer\"][\"type\"]", "0");
request.AddParameter("[\"Order\"][\"Customer\"][\"name\"]", "Nome do Cliente");
request.AddParameter("[\"Order\"][\"Customer\"][\"cpf\"]", "00000000000");
request.AddParameter("[\"Order\"][\"Customer\"][\"email\"]", "email@docliente.com");
request.AddParameter("[\"Order\"][\"Customer\"][\"rg\"]", "00.000.000-X");
request.AddParameter("[\"Order\"][\"Customer\"][\"gender\"]", "M");
request.AddParameter("[\"Order\"][\"Customer\"][\"phone\"]", "1133330001");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"address\"]", "Endereço do Cliente");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"zip_code\"]", "04001001");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"number\"]", "123");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"complement\"]", "Sala 123");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"neighborhood\"] ", "Bairro do Cliente");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"city\"]", "Cidade do Cliente");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"state\"]", "SP");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"country\"]", "BRASIL");
request.AddParameter("[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"type\"]", "1");
request.AddParameter("[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"product_id\"]", "1");
request.AddParameter("[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"variant_id\"]", "12");
request.AddParameter("[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"price\"]", "42.90");
request.AddParameter("[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"original_price\"]", "42.90");
request.AddParameter("[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"quantity\"]", "1");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_name\"]", "Mercado Livre");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_seller_name\"]", "1234567890");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_seller_id\"]", "273480425");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_document\"]", "0000000000000");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"payment_responsible_document\"]", "0000000000000");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_order_id\"]", "4429804558");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_shipping_id\"]", "40457395268");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_shipping_type\"]", "me2");
request.AddParameter("[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_internal_status\"]", "shipping");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Order\"][\"point_sale\"]=PARTICULAR&[\"Order\"][\"session_id\"]=0BBB15A404B6BA1&[\"Order\"][\"shipment\"] =Sedex&[\"Order\"][\"shipment_value\"]=10.44&[\"Order\"][\"payment_form\"]=Boleto - TrayCheckout&[\"Order\"][\"Customer\"][\"type\"]=0&[\"Order\"][\"Customer\"][\"name\"]=Nome do Cliente&[\"Order\"][\"Customer\"][\"cpf\"]=00000000000&[\"Order\"][\"Customer\"][\"email\"]=email@docliente.com&[\"Order\"][\"Customer\"][\"rg\"]=00.000.000-X&[\"Order\"][\"Customer\"][\"gender\"]=M&[\"Order\"][\"Customer\"][\"phone\"]=1133330001&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"address\"]=Endereço do Cliente&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"zip_code\"]=04001001&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"number\"]=123&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"complement\"]=Sala 123&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"neighborhood\"] =Bairro do Cliente&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"city\"]=Cidade do Cliente&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"state\"]=SP&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"country\"]=BRASIL&[\"Order\"][\"Customer\"][\"CustomerAddress\"][0][\"type\"]=1&[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"product_id\"]=1&[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"variant_id\"]=12&[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"price\"]=42.90&[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"original_price\"]=42.90&[\"Order\"][\"Customer\"][\"ProductsSold\"][0][\"quantity\"]=1&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_name\"]=Mercado Livre&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_seller_name\"]=1234567890&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_seller_id\"]=273480425&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_document\"]=0000000000000&[\"Order\"][\"MarketplaceOrder\"\"][\"payment_responsible_document\"]=0000000000000&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_order_id\"]=4429804558&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_shipping_id\"]=40457395268&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_shipping_type\"]=me2&[\"Order\"][\"MarketplaceOrder\"\"][\"marketplace_internal_status\"]=shipping");
Request request = new Request.Builder()
  .url("https://{api_address}/orders?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/orders?access_token={{access_token}}`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
    "Order":{
      "point_sale":"PARTICULAR",
      "session_id": "0BBB15A404B6BA1",
      "shipment":"Sedex",
      "shipment_value":"10.44",
      "payment_form":"Boleto - TrayCheckout",
      "Customer":{"type":"0",
      "name":"Nome do Cliente",
      "cpf":"00000000000",
      "email":"email@docliente.com",
      "rg":"00.000.000-X",
      "gender":"M",
      "phone":"1133330001",
      "CustomerAddress":[{
          "address":"Endereço do Cliente",
          "zip_code":"04001001",
          "number":"123",
          "complement":"Sala 123",
          "neighborhood":"Bairro do Cliente",
          "city":"Cidade do Cliente",
          "state":"SP",
          "country":"BRA",
          "type":"1"
          }
      ]},
      "ProductsSold":[{
          "product_id":1,
          "variant_id":12,
          "price":"42.90",
          "original_price":"42.90",
          "quantity":1  
        }
      ],
      "MarketplaceOrder": [{
          "marketplace_name": "Mercado Livre",
          "marketplace_seller_name": "1234567890",
          "marketplace_seller_id": "273480425",
          "marketplace_document": "0000000000000",
          "payment_responsible_document": "0000000000000",
          "marketplace_order_id": "4429804558",
          "marketplace_shipping_id": "40457395268",
          "marketplace_shipping_type": "me2",
          "marketplace_internal_status": "shipping"
        }
      ]
    }    
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Order	|JSON|	Dados do pedido
point_sale	|String (45)|	Local de venda
session_id|String|Sessão do Pedido
shipment	|String (100)|	Tipo de frete
shipment_value	|Decimal (9)|	Valor de frete
payment_form	|String (50)|	Forma de pagamento
Customer	|Object|	Informações do cliente
type	|Object|	Tipo do cliente (Veja Tabela B)
name	|Object (300)|	Nome completo do cliente
cpf	|Object|	CPF do cliente
email	|Object (100)|	E-mail do cliente
rg	|Object|	RG do cliente
gender	|Object (1)|	Sexo do cliente (Veja Tabela C)
phone	|Object|	Telefone do cliente
CustomerAddress	|Object (200)|	Informações de endereços do cliente
address	|Number (9)|	Logradouro
zip_code	|Number (8)|	CEP
number	|Number (9)|	Número
complement	|Number (60)|	Complemento
neighborhood	|Number (100)|	Bairro
city	|Number (200)|	Cidade
state	|Number (2)|	Sigla do estado
country	|Number (3)|	Sigla do país
type	|Number|	Tipo de endereço (Veja Tabela D)
ProductsSold	|Object|	Lista de produtos do pedido
product_id	|Number|	Código do produto
variant_id	|Number|	Código da variação do produto
price	|Number|	Preço do produto
original_price	|Number|	Valor original do produto
quantity	|Number|	Quantidade vendida do produto
marketplace_name |String| Nome do Marketplace
marketplace_seller_name |String| Nome do Seller junto ao marketplace
marketplace_seller_id |String| Id do vendedor junto ao marketplace
marketplace_document |String| CNPJ do marketplace
payment_responsible_document |String| CNPJ do intermediador de pagamento que processou o pagamento
marketplace_order_id |String| Id do pedido junto ao marketplace
marketplace_shipping_id |String| Id do envio junto ao marketplace (OBS. Não é o código de rastreio)
marketplace_shipping_type |String| Tipo de envio do marketplace
marketplace_internal_status |String| Status do pedido dentro do marketplace

### Retorno em caso de sucesso (status code 200 ou 201):

> Retorno de Sucesso:

<pre>
{       
    "message":"Created",    
    "id":"123",    
    "code":201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do pedido
code	|Number|	Código do retorno (201)

## Atualizar Dados do Pedido#put

Requisição para alterar os dados de um pedido. Deverá enviar o JSON com os dados do pedido para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/orders/:id?access_token={{access_token}}' \
--data-urlencode '["Order"]["status_id"]=16' \
--data-urlencode '["Order"]["taxes"]=0.01' \
--data-urlencode '["Order"]["shipment"]=Sedex' \
--data-urlencode '["Order"]["shipment_value"]=5.58' \
--data-urlencode '["Order"]["discount"]=0.01' \
--data-urlencode '["Order"]["sending_code"]=123456' \
--data-urlencode '["Order"]["sending_date"]=2015-04-20' \
--data-urlencode '["Order"]["store_note"]=Pedido em 1 vez de R$ 51,85 através do Boleto.' \
--data-urlencode '["Order"]["customer_note"]=' \
--data-urlencode '["Order"]["partner_id"]=2'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Order"]["status_id"]' => '16',
  '["Order"]["taxes"]' => '0.01',
  '["Order"]["shipment"]' => 'Sedex',
  '["Order"]["shipment_value"]' => '5.58',
  '["Order"]["discount"]' => '0.01',
  '["Order"]["sending_code"]' => '123456',
  '["Order"]["sending_date"]' => '2015-04-20',
  '["Order"]["store_note"]' => 'Pedido em 1 vez de R$ 51,85 através do Boleto.',
  '["Order"]["customer_note"]' => '',
  '["Order"]["partner_id"]' => '2'
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
var client = new RestClient("https://{api_address}/orders/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"Order\"][\"status_id\"]", "16");
request.AddParameter("[\"Order\"][\"taxes\"]", "0.01");
request.AddParameter("[\"Order\"][\"shipment\"]", "Sedex");
request.AddParameter("[\"Order\"][\"shipment_value\"]", "5.58");
request.AddParameter("[\"Order\"][\"discount\"]", "0.01");
request.AddParameter("[\"Order\"][\"sending_code\"]", "123456");
request.AddParameter("[\"Order\"][\"sending_date\"]", "2015-04-20");
request.AddParameter("[\"Order\"][\"store_note\"]", "Pedido em 1 vez de R$ 51,85 através do Boleto.");
request.AddParameter("[\"Order\"][\"customer_note\"]", "");
request.AddParameter("[\"Order\"][\"partner_id\"]", "2");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Order\"][\"status_id\"]=16&[\"Order\"][\"taxes\"]=0.01&[\"Order\"][\"shipment\"]=Sedex&[\"Order\"][\"shipment_value\"]=5.58&[\"Order\"][\"discount\"]=0.01&[\"Order\"][\"sending_code\"]=123456&[\"Order\"][\"sending_date\"]=2015-04-20&[\"Order\"][\"store_note\"]=Pedido em 1 vez de R$ 51,85 através do Boleto.&[\"Order\"][\"customer_note\"]=&[\"Order\"][\"partner_id\"]=2");
Request request = new Request.Builder()
  .url("https://{api_address}/orders/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método PUT
`https://{api_address}/orders/:id`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
    "Order": {
        "status_id": "16",
        "taxes": "0.01",
        "shipment": "Sedex",
        "shipment_value": "0.01",
        "discount": "0.01",
        "sending_code": "123456",
        "sending_date": "2015-04-20",
        "store_note": "Pedido em 1 vez de R$ 51,85 através do Boleto.",
        "customer_note": "",
        "partner_id": "2"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pedido
Order	|JSON|	Dados do pedido
status_id	|Number|	Código de status do pedido
taxes	|Decimal|	Valor de acréscimo / taxa
shipment	|Decimal|	Tipo de frete
shipment_value	|Decimal|	Valor de frete
discount	|Decimal|	Valor de desconto
sending_code	|String|	Código de envio
sending_date	|Date|	Data de envio
store_note	|String|	Informações adicionais da loja
customer_note	|String|	Informações adicionais do cliente
partner_id	|Number|	Código do parceiro

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{       
    "message":"Saved",    
    "id":"123",    
    "code":200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do pedido
code	|Number|	Código do retorno (201)

## Cancelar Pedido#put

Requisição para cancelar um pedido.

### Método PUT
`https://{api_address}/orders/cancel/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do pedido

### Retorno em caso de sucesso(status code 200 ou 201):

> Retorno de Sucesso:

<pre>
{       
    "message":"Saved",    
    "id":"123",    
    "code":200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
id	|Number|	Código do pedido
code	|Number|	Código do retorno (201)

## Incluir Produtos no Pedido#post

Requisição para inclusão de um produto no pedido. Deverá enviar o JSON com os dados do produto para inclusão do mesmo no pedido.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/orders/includeProduct/:order_id?access_token={{access_token}}' \
--data-urlencode '["ProductsSold"]["product_id"]=9999' \
--data-urlencode '["ProductsSold"]["variant_id"]=123' \
--data-urlencode '["ProductsSold"]["price"]=55.80' \
--data-urlencode '["ProductsSold"]["original_price"]=55.80' \
--data-urlencode '["ProductsSold"]["quantity"]=1'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/includeProduct/:order_id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["ProductsSold"]["product_id"]' => '9999',
  '["ProductsSold"]["variant_id"]' => '123',
  '["ProductsSold"]["price"]' => '55.80',
  '["ProductsSold"]["original_price"]' => '55.80',
  '["ProductsSold"]["quantity"]' => '1'
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
var client = new RestClient("https://{api_address}/orders/includeProduct/:order_id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"ProductsSold\"][\"product_id\"]", "9999");
request.AddParameter("[\"ProductsSold\"][\"variant_id\"]", "123");
request.AddParameter("[\"ProductsSold\"][\"price\"]", "55.80");
request.AddParameter("[\"ProductsSold\"][\"original_price\"]", "55.80");
request.AddParameter("[\"ProductsSold\"][\"quantity\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"ProductsSold\"][\"product_id\"]=9999&[\"ProductsSold\"][\"variant_id\"]=123&[\"ProductsSold\"][\"price\"]=55.80&[\"ProductsSold\"][\"original_price\"]=55.80&[\"ProductsSold\"][\"quantity\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/orders/includeProduct/:order_id?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/orders/includeProduct/{order_id}`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
    "ProductsSold": {
        "product_id": "9999",
        "variant_id": "123",
        "price": "55.80",
        "original_price": "55.80",
        "quantity": "1"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Token de acesso
:order_id	|String|	Código do pedido
ProductsSold	|JSON|	Dados do Produto
product_id	|Number|	Código produto
variant_id	|Number|	Código da variação
price	|Decimal|	Valor de venda do produto / variação
original_price	|Decimal|	Valor original do produto / variação
quantity	|Number|	Quantidade do roduto / variação

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{       
    "message":"Success",    
    "id":"123",    
    "code":201
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
order_id	|Number|	Código do pedido
code	|Number|	Código do retorno (201)

## Excluir Produto do Pedido#put

Requisição para excluir um produto do pedido.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/orders/excludeProduct/:order_id/:product_id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/orders/excludeProduct/:order_id/:product_id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/orders/excludeProduct/:order_id/:product_id?access_token={{access_token}}");
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
  .url("https://{api_address}/orders/excludeProduct/:order_id/:product_id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método PUT
`https://{api_address}/orders/excludeProduct/:order_id/:product_id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Token de acesso
:order_id	|String|	Código do pedido
:product_id	|String|	Código do produto

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{       
    "message":"Success",    
    "id":"123",    
    "code":200
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
message	|String|	Mensagem de retorno
order_id	|Number|	Código do pedido
code	|Number|	Código do retorno (201)

### Tabelas Auxiliares de Pedidos

### Tabela A - Confirmação de pedido enviado (campo delivered)
Campo|Tipo
-----|----
0 | Pedido não enviado
1 | Pedido enviado

### Tabela B - Tipo do cliente (campo Customer.type)
Campo|Tipo
-----|----
0 | Pessoa física
1 | Pessoa jurídica

### Tabela C - Sexo do cliente (campo Customer.gender)
Campo|Tipo
-----|----
0 | Masculino
1 | Feminino

### Tabela D - Tipo de endereço do cliente (campo Customer.CustomerAddress.type)
Campo|Tipo
-----|----
0 | Endereço de cobrança
1 | Endereço de entrega

### Tabela E - Tipo de status do pedido (campo OrderStatus.default)
Campo|Tipo
-----|----
0 | Status padrão
1 | Status adicional

### Tabela F - Bloqueio do cliente (campo blocked)
Campo|Tipo
-----|----
0 | Cliente desbloqueada
1 | Cliente bloqueada

### Tabela G - Tipo de arquivo da etiqueta (campo type)
Campo|Tipo
-----|----
0 | Arquivo ZPL2
1 | Arquivo PDF


### Retorno da API dentro de Pedidos Completo, quando á venda ocorrer no Mercado Livre

### Retorno dos campos:

> Exemplo de retorno do MLorder:

<pre>
{

    "MlOrder": [
        {
        "MlOrder": {
            "id": "1919191111",
            "created": "2020-08-03 17:05:11",
            "updated": "2020-08-03 17:05:11",
            "pedido_id": "9874566666",
            "cliente_id": "664654",
            "codigo": "9415263",
            "item_id": "MLB1111111111",
            "item_quantity": "1",
            "item_title": "Nome do produto",
            "user_id": "2222222",
            "nickname": "APELIDO",
            "mercado_envio": "me2",
            "shipment_id": "44444444444",
            "pack_id": "",
            "status_frete_ml": "shipped",
            "substatus_frete_ml": "out_for_delivery",
            "ml_coleta": "1",
            "romaneio_id": "0",
            "invoice_data_id": "161616166",
            "service_id": "151515",
            "logistic_type": "fulfillment",
            "messages_locked_by": "",
            "date_delivered": "0000-00-00",
            "estimated_delivery_time": "2020-08-04",
            "estimated_handling_limit": "2020-08-03",
            "shipping_option_id": "3133133133",
            "pickup_id": "",
            "order_id": "88888",
            "ml_collect": "1",
            "shipping_mode": "me2",
            "shipping_status": "shipped",
            "shipping_substatus": "out_for_delivery"
        }
    }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
MlOrder	|String|	Retorno dos dados do Mercado Livre
id	|String|	Id do pedido no MLorders - Controle Tray
created	|String|	Data da criação do pedido na Tray
updated	|String|	Data da ultima atualização do pedido
pedido_id	|String|	ID do pedido na Tray
cliente_id	|String|	ID do cliente na Tray
codigo	|String|	Código da venda no Mercado Livre
item_id	|String|	Anúncio do Mercado Livre comprado
item_quantity	|String|	Quantidade do anúncio que foi comprado
item_title	|String|	Nome do produto comprado
user_id	|String|	ID do apelido que teve venda
nickname	|String|	Nome do apelido que teve venda
mercado_envio	|String|	Tipo de envio da venda.
shipment_id	|String|	Código que identifica o envio no ML
pack_id	|String|	ID do carrinho, quando ocorre venda de mais de 1 produto.
status_frete_ml	|String|	Status do shipments no ML
substatus_frete_ml	|String|	Substatus do shipments no ML
ml_coleta	|String|	Se é um serviço de coleta do ML (0 ou 1)
romaneio_id	|String|	Não é mais utilizado, não precisa ser mais considerado no fluxo da aplicação
invoice_data_id	|String|	ID da nota fiscal no ML.
service_id	|String|	Identificação do ID de serviço no ML.
logistic_type	|String|	Tipo de logistica do envio. Dado com base na API do ML
messages_locked_by	|String|	Campo interno Tray. É utilizado pra controlar qual usuario ta enviando mensagens nesse pedido no momento, para que outro usuario não tente mandar ao mesmo tempo
date_delivered	|String|	Data quando foi entregue o pedido.
estimated_delivery_time	|String|	Estimativa de entrega
estimated_handling_limit	|String|	Data-limite para o vendedor encaminhar
shipping_option_id	|String|	Id do shipments option da API do ML
pickup_id	|String|	ID do pickup quando existente
order_id	|String|	ID do pedido na Tray
ml_collect	|String|	Se é um serviço de coleta do ML (0 ou 1)
shipping_mode	|String|	Tipo de entrega no ML
shipping_status	|String|	Status do shipments no ML
shipping_substatus	|String|	Substatus do shipments no ML