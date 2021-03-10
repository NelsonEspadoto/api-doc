# APIs de Características

## Consultar Características do Produto#get

Requisição para consultar os dados das características dos produtos.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/products/properties?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/properties?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/products/properties?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/products/properties?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/products/properties`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
id	|String|	Código da característica
name	|String|	Nome da característica
position	|String|	Posição da característica
display	|String|	Visível na loja virtual
active_display	|String|	Ativo na loja virtual

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 24,
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
        "position",
        "display",
        "active_display"
    ],
    "appliedFilters": {
        "Property.active_display": "1"
    },
    "Properties": [
        {
            "Property": {
                "id": "2",
                "active_display": "1",
                "name": "Cor",
                "position": "1",
                "display": "1",
                "has_product": "1",
                "PropertyValues": [
                    {
                        "id": "72",
                        "name": "Preto",
                        "property_id": "2",
                        "image": {
                            "http": "http://urldaimagem/img/img_prod/123/cor_4.png?123",
                            "https": "https://urldaimagem/img/img_prod/123/cor_4.png?123"
                        }
                    },
                    {
                        "id": "74",
                        "name": "Vermelho",
                        "property_id": "2",
                        "image": {
                            "http": "http://urldaimagem/img/img_prod/123/cor_12.png?123",
                            "https": "https://urldaimagem/img/img_prod/123/cor_12.png?123"
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
paging	|Object|	Dados de paginação
total	|Number|	Total de registros
page	|Number|	Páginas corrente
offset	|Number|	Registro inicial da página
limit	|Number|	Limite de registros
maxLimit	|Number|	Máximo de registros
sort	|Object|	Ordenação
availableFilters	|String|	Filtros disponíveis
appliedFilters	|String|	Filtros utilizados
Properties	|Object|	Dados das características
Property	|Object|	Dados da característica
id	|Number|	Código da característica
active_display	|Number|	Característica ativa na loja virtual
name	|String|	Nome da característica
position	|Number|	Posição da característica
display	|Number|	Característica visível na loja virtual
has_product	|Number|	Característica com produtos
PropertyValues	|Object|	Valores da característica
id	|Number|	Código do valor da característica
name	|String|	Nome do valor da característica
property_id	|Number|	Código da característica
image	|Object|	Código da característica
http	|Object|	Imagem da característica
https	|Object|	Imagem da característica em ambiente seguro

## Cadastrar Características de Produtos#post

Requisição para cadastro das características dos produtos.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/products/:id/properties?access_token={{access_token}}' \
--data-urlencode '[]=["property_id" => "1", "value" => "Branco"]' \
--data-urlencode '[]=["property_id" => "2", "value" => "220v"]' \
--data-urlencode '[]=["property_id" => "3", "value" => "Teste"]'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/products/:id/properties?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '[]' => '["property_id" => "1", "value" => "Branco"]',
  '[]' => '["property_id" => "2", "value" => "220v"]',
  '[]' => '["property_id" => "3", "value" => "Teste"]'
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
var client = new RestClient("https://{api_address}/products/:id/properties?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[]", "[\"property_id\" => \"1\", \"value\" => \"Branco\"]");
request.AddParameter("[]", "[\"property_id\" => \"2\", \"value\" => \"220v\"]");
request.AddParameter("[]", "[\"property_id\" => \"3\", \"value\" => \"Teste\"]");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[]=[\"property_id\" => \"1\", \"value\" => \"Branco\"]&[]=[\"property_id\" => \"2\", \"value\" => \"220v\"]&[]=[\"property_id\" => \"3\", \"value\" => \"Teste\"]");
Request request = new Request.Builder()
  .url("https://{api_address}/products/:id/properties?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```
> Estrutura do Json:

<pre>
[
    {
        "property_id": "1",
        "value": "Branco"
    },
    {
        "property_id": "2",
        "value": "220v"
        
    },
    {
        "property_id": "3",
        "value": "Teste"
    }
]
</pre>

### Método POST
`https://{api_address}/products/:id/properties`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
property_id	|String|	Código da característica do produto
value |String (100)|	característica do produto

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