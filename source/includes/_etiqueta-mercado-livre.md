# API de Etiqueta do Mercado Livre

## Consultar Etiquetas do Mercado Livre#get

Requisição para a obter o arquivo das etiquetas do Mercado Livre.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/meli/tracking_labels?access_token={{access_token}}&orders=1,2'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/meli/tracking_labels?access_token={{access_token}}&orders=1,2');
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
var client = new RestClient("https://{api_address}/meli/tracking_labels?access_token={{access_token}}&orders=1,2");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/meli/tracking_labels?access_token={{access_token}}&orders=1,2")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/meli/tracking_labels`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
orders	|String|	Código dos pedidos (separados por virgula)
type	|String|	Tipo de impressão (Veja Tabela A)

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    code:200,
    print_url:"https://php53.docker:9000/mvc/loja/mercado_livre/etiquetas/imprimir/0/zpl2/loja:414159?oids=76b026bc2e333b1561248bfefe7642e3"
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
code	|Number|	Código do retorno (200)
message	|String|	Mensagem de retorno
id	|Number|	Código do cliente

### Tabelas Auxiliares

### Tabela A - Tipo de arquivo da etiqueta (campo type)
Valor|Descrição
-----|---------
zpl2|Arquivo ZPL2
pdf	|Arquivo PDF
