# APIs de Informações da Loja

## Consultar Informações da Loja#get

Requisição para consultar os dados de diversas formas de envio.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/info/?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/info/?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/info/?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/info/?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/info/`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "id": "123",
    "name": "Nome da Loja",
    "company_name": "Razão Social da Loja LTDA",
    "cnpj": "00.000.000/0000-00",
    "address": "Endereço da loja, 123",
    "postal_code": "04001-001",
    "city": "São Paulo",
    "state": "SP",
    "country": "Brasil",
    "phone_number_1": "(11)3333-0000",
    "phone_number_2": "(11)99999-0000",
    "phone_number_3": "",
    "email_1": "emailda@loja.com.br",
    "email_2": "",
    "office_hour": "",
    "uri": "http://loja.commercesuite.com.br",
    "secure_uri": "https://loja.commercesuite.com.br",
    "logo": {
        "http": "http://images.tcdn.com.br/img/img_prod/123/123_logotipo.png",
        "https": "https://images.tcdn.com.br/img/img_prod/123/123_logotipo.png"
    },
    "logo_mobile": {
        "http": "http://images.tcdn.com.br/img/arquivos/123/themed/img/123_logotipo-mobile.png",
        "https": "https://images.tcdn.com.br/img/arquivos/123/themed/img/123_logotipo-mobile.png"
    },
    "user": "",
    "internal_status": "ativa",
    "favicon": {
        "http": "http://images.tcdn.com.br/img/img_prod/123/123_favicon.ico",
        "https": "https://images.tcdn.com.br/img/img_prod/123/123_favicona.ico"
    },
    "messages": {
        "footer": "Mensagem do rodapé da loja."
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
id	|Number|	Código da loja
name	|String|	Nome da loja
company_name	|String|	Razão social
cnpj	|String|	CNPJ
address	|String|	Logradouro
postal_code	|String|	CEP
city	|String|	Cidade
state	|String|	Estado
country	|String|	País
phone_number_1	|String|	Número de telefone 1
phone_number_2	|String|	Número de telefone 2
phone_number_3	|String|	Número de telefone 3
email_1	|String|	Email 1
email_2	|String|	Email 2
office_hour	|String|	Horário de operação
uri	|String|	URL da loja
secure_uri	|String|	URL segura da loja
logo	|Object|	Logo da loja
http	|String|	URL do logo da loja
https	|String|	URL segura do logo da loja
logo_mobile	|Object|	Logo da loja (mobile)
http	|String|	URL do logo da loja (mobile)
https	|String|	URL segura do logo da loja (mobile)
user	|String|	Usuário
internal_status	|String|	Status da loja
favicon	|Object|	Favicon da loja
http	|String|	URL do favicon da loja
https	|String|	URL segura do favicon da loja
messages	|Object|	Mensagens da loja
footer	|String|	Mensagem do rodapé