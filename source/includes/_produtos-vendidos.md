# APIs de Produtos Vendidos

## Listagem de Produtos Vendidos#get

Requisição para consultar os dados dos produtos vendidos.

### Método GET
`https://{api_address}/products_solds/:id`

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products_solds/'
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products_solds/');
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
var client = new RestClient("https://{api_address}/products_solds/");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products_solds/")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Parâmetros enviados
Campo|Tipo|Descrição
-----|----|---------
access_token|String|Chave de acesso
:id|Number|Código do produto vendido

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso

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
        "id",
        "product_id"
    ],
    "appliedFilters": [],
    "ProductsSolds": [
        {
            "ProductsSold": {
                "id": "123",
                "product_id": "456",
                "order_id": "789",
                "name": "Produto de Teste",
                "price": "51.80",
                "original_price": "50.00",
                "quantity": "1",
                "model": "Modelo de Teste",
                "reference": "REF0001",
                "variant_id": "0",
                "additional_information": ""
            }
        }
    ]
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
paging	|Object|	Dados de paginação
total	|Number|	Total de registros
page	|Number|	Páginas corrente
offset	|Number|	Registro inicial da página
limit	|Number|	Limite de registros
maxLimit	|Number|	Máximo de registros
sort	|Object|	Ordenação
availableFilters	|String|	Filtros disponíveis
appliedFilters	|String|	Filtros utilizados
ProductsSolds	|Object|	Lista de produtos vendidos
ProductsSold	|Object|	Dados do produto vendido
id	|Number|	Código do produto vendido
product_id	|Number|	Código do produto
order_id	|Number|	Código do pedido
name	|String|	Nome do produto
price	|Decimal|	Valor de venda
original_price	|Decimal|	Valor original
quantity	|Number|	Quantidade vendida
model	|String|	Modelo
reference	|String|	Código de referência
variant_id	|Number|	Código da variação
additional_information	|String|	Informações adicionais