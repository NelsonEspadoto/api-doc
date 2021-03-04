# Autorização

## Gerar Chaves de Acesso#post
> api_address: "urldaloja.com.br/web_api"

```shell
curl --location -g --request POST '{{api_address}}/auth' \
--data-urlencode 'consumer_key={{consumer_key}}' \
--data-urlencode 'consumer_secret={{consumer_secret}}' \
--data-urlencode 'code={{code}}'
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{api_address}}/auth');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  'consumer_key' => '{{consumer_key}}',
  'consumer_secret' => '{{consumer_secret}}',
  'code' => '{{code}}'
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
var client = new RestClient("{{api_address}}/auth");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("consumer_key", "{{consumer_key}}");
request.AddParameter("consumer_secret", "{{consumer_secret}}");
request.AddParameter("code", "{{code}}");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "consumer_key={{consumer_key}}&consumer_secret={{consumer_secret}}&code={{code}}");
Request request = new Request.Builder()
  .url("{{api_address}}/auth")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

A Chave de Acesso é a crêdencial utilizada para acessar os recursos protegidos do cliente. 

Essa chave representa a autorização emitida pelo cliente no servidor de autorização do Tray Commerce. 

É possível gerar a Chave de Acesso utilizando as chaves disponibilizados para o aplicativo (`consumer key` e `consumer secret`) e o código de autorização (`code`), resgatado após a permissão do usuário, sendo realizada esta solicitação para a API de Gerar Chave de Acesso.

### Método POST

`https://{api_address}/auth`
<br/><br/>
Parâmetros de envio:

Campo | Tipo | Descrição
------|------|-----------
consumer_key | String | Chave da aplicação
consumer_secret | String | Chave secreta da aplicação
code | String | Código de autorização  

<br/>
> Exemplo de retorno:

<pre>
  {
    "message": "Created tokens",
    "code": "200",
    "access_token": "APP_ID-9999-4c78abce105a578987987987987987asdasd4c14ec98eeca880dc9aa76ed118372ae4",
    "refresh_token": "86188asd456asd456asd9c192721dbdc03851a791a9cd6d3568a0dcb6a87080e229",
    "date_expiration_access_token": "2021-03-02 14:58:21",
    "date_expiration_refresh_token": "2021-04-01 11:58:21",
    "date_activated": "2021-03-02 11:58:21",
    "api_host": "https://urldaloja.com.br/web_api",
    "store_id": "123456"
  }
</pre>

### Retorno em caso de sucesso (status code 200 ou 201):  

Campo | Tipo | Descrição
------|------|-----------
code | Number | Código de status de retorno
message | String | Mensagem de retorno
access_token | String | Chave de acesso
refresh_token | String | Chave para atualização
date_expiration_access_token | Datetime | Data de expiração da chave de acesso
date_expiration_refresh_token | Datetime | Data de expiração da chave de atualização
date_activated | Datetime | Data de ativação da chave de acesso
api_host | String | URL da API para a loja
store_id | Number | Código da loja 

## Atualizar Chave de Acesso#get

### Método GET

> api_address: "urldaloja.com.br/web_api"

```shell
curl --location -g --request GET '{{api_address}}/auth?refresh_token={{refresh_token}}'
```

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('{{api_address}}/auth?refresh_token={{refresh_token}}');
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
var client = new RestClient("{{api_address}}/auth?refresh_token={{refresh_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("{{api_address}}/auth?refresh_token={{refresh_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

`https://{api_address}/auth`
<br/>

### Parâmetros enviados:

Field|Type|Description
-----|----|-----------
refresh_token |	String | Chave para atualização

> Exemplo de retorno:

<pre>
  {
    "message": "Refreshed tokens",
    "code": "200",
    "access_token": "APP_ID-9999-4c78abce105a578987987987987987asdasd4c14ec98eeca880dc9aa76ed118372ae4",
    "refresh_token": "86188asd456asd456asd9c192721dbdc03851a791a9cd6d3568a0dcb6a87080e229",
    "date_expiration_access_token": "2021-03-02 14:58:21",
    "date_expiration_refresh_token": "2021-04-01 11:58:21",
    "date_activated": "2021-03-02 11:58:21",
    "api_host": "https://urldaloja.com.br/web_api",
    "store_id": "123456"
  }
</pre>

### Retorno em caso de sucesso (status code 200 ou 201):

Campo|Tipo|Descrição
-----|----|---------
code	| Number	| Código de status de retorno
message |String |Mensagem de retorno
access_token |String |Chave de acesso
refresh_token |String |Chave para atualização
date_expiration_access_token |Datetime |Data de expiração da chave de acesso
date_expiration_refresh_token |Datetime |Data de expiração da chave de atualização
date_activated |Datetime |Data de ativação da chave de acesso
api_host |String |URL da API para a loja
store_id | Number | Código da loja