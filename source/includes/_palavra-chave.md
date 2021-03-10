# APIs de Palavras-Chave

## Listagem de Palavras-Chave#get

Requisição para a consulta de diversas palavras-chave.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/words?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/words?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/words?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/words?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/words`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 1,
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
    "availableFilters": [
        "id",
        "keyword"
    ],
    "appliedFilters": [],
    "Words": [
        {
            "Word":{
                "id": "123",
                "keyword": "palavra-chave",
                "qty": "3"
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
Words	|Object|	Lista de palavras-chave
Word	|Object|	Dados do palavra-chave
id	|Number|	Código da palavra-chave
keyword	|String|	Palavra-chave
qty	|Number|	Quantidade da palavra-chave

## Consultar Palavra-Chave#get

Requisição para a consulta de dados de uma palavra-chave.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/words/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/words/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/words/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/words/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/words/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código da palavra-chave

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "Word":{
        "id": "123",
        "keyword": "palavra-chave",
        "qty": "3"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Word	|Object|	Dados do palavra-chave
id	|Number|	Código da palavra-chave
keyword	|String|	Palavra-chave
qty	|Number|	Quantidade da palavra-chav