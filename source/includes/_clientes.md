# API de Clientes

## Listagem de Clientes#get

Requisição para a consulta de clientes.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/customers?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/customers?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/customers?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/customers`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
email	|String|	Email do cliente
attrs	|String|	Atributos do cliente
limit	|Number|	Limite de registros
page	|Number|	Página corrente
sort	|String|	Ordenação ex.: [campo]_[asc/desc]

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
   "paging":{
      "total":6,
      "page":1,
      "offset":0,
      "limit":1,
      "maxLimit":50
   },
   "sort":[
      {
         "id":"desc"
      }
   ],
   "availableFilters":[
      "id",
      "name",
      "email",
      "cpf",
      "cnpj",
      "created",
      "modified"
   ],
   "appliedFilters":[
      
   ],
   "Customers":[
      {
         "Customer":{
            "id":"123",
            "name":"Nome do Cliente",
            "cpf":"00000000000",
            "birth_date":"0000-00-00",
            "gender":"0",
            "email":"emaildo@cliente.com.br",
            "cnpj":"00.000.000/0000-00",
            "last_visit":"2016-08-15",
            "city":"Cidade do Cliente",
            "state":"SP",
            "newsletter":"1",
            "created":"2008-10-14 18:17:23",
            "registration_date":"2008-10-14",
            "modified":"2016-08-15 18:17:23",
            "CustomerAddress":[
               {
                  "id":"1"
               },
               {
                  "id":"2"
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
page	|Number|	Página corrente
offset	|Number|	Registro inicial da página
limit	|Number|	Limite de registros
maxLimit	|Number|	Máximo de registros
sort	|Object|	Ordenação
availableFilters	|String|	Filtros disponíveis
appliedFilters	|String|	Filtros utilizados
Customers	|Object|	Lista de clientes
Customer	|Object|	Dados do cliente
id	|Number|	Código do cliente
name	|String|	Nome
cpf	|String|	CPF
birth_date	|Date|	Data de aniversário
gender	|Number|	Sexo (Veja Tabela A)
email	|String|	E-mail
cnpj	|String|	CNPJ
last_visit	|Date|	Data da última visita
city	|String|	Cidade
state	|String|	Sigla do estado
newsletter	|Number|	Newsletter ativa
created	|Date|	Data de criação
registration_date	|Date|	Data de registro
modified	|Date|	Data de modificação
CustomerAddress	|Object|	Endereços do cliente
id	|Number|	Código do endereço do cliente

## Consultar Dados do Cliente#get

Requisição para a consulta de dados de um cliente.

> Código de Exemplo:

```shell
curl --location -g --request GET 'https://{api_address}/customers/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/customers/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/customers/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/customers/:id`

### Parâmetros enviados:

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cliente

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "Customer": {
        "id": "123",
        "name": "Nome do Cliente",
        "rg": "00.000.000-0",
        "cpf": "00000000000",
        "phone": "1133330000",
        "cellphone": "11999990000",
        "birth_date": "0000-00-00",
        "gender": "0",
        "email": "emaildo@cliente.com.br",
        "nickname": "",
        "token": "123QWE123QWE123ASD",
        "total_orders": "8",
        "observation": "",
        "type": "1",
        "cnpj": "00.000.000/0000-00",
        "company_name": "Razão Social do Cliente",
        "state_inscription": "Isento",
        "reseller": "0",
        "discount": "0.00",
        "blocked": "0",
        "credit_limit": "10.00",
        "indicator_id": "0",
        "profile_customer_id": "1",
        "last_sending_newsletter": "2016-08-02",
        "last_purchase": "2016-08-02",
        "last_visit": "2016-08-15",
        "last_modification": "0000-00-00 00:00:00",
        "address": "Endereço do Cliente",
        "zip_code": "04001-001",
        "number": "123",
        "complement": "Sala 123",
        "neighborhood": "Bairro do Cliente",
        "city": "Cidade do Cliente",
        "state": "SP",
        "newsletter": "1",
        "created": "2008-10-14 18:17:23",
        "registration_date": "2008-10-14",
        "modified": "2016-08-15 18:17:23",
        "CustomerAddress": [
            {
                "id": "1"
            },
            {
                "id": "2"
            }
        ]
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
Customer	|Object|	Dados do cliente
id	|Number|	Código do cliente
name	|String|	Nome
rg	|String|	RG
cpf	|String|	CPF
phone	|String|	Telefone fixo
cellphone	|String|	Telefone celular
birth_date	|Date|	Data de aniversário
gender	|Number|	Sexo (Veja Tabela A)
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
blocked	|Number|	Cliente bloqueado (Veja Tabela C)
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
created	|Date|	Data de criação
registration_date	|Date|	Data de registro
modified	|Date|	Data de modificação
CustomerAddress	|Object|	Endereços do cliente
id	|Number|	Código do endereço do cliente

## Cadastrar Cliente#post

Requisição para inclusão de um cliente. Deverá enviar o JSON com os dados do cliente para a criação.

> Código de Exemplo:

```shell
curl --location -g --request POST 'https://{api_address}/customers?access_token={{access_token}}' \
--data-urlencode '["Customer"]["name"]=Nome do Cliente' \
--data-urlencode '["Customer"]["rg"]=00.000.000-0' \
--data-urlencode '["Customer"]["cpf"]=00000000000' \
--data-urlencode '["Customer"]["phone"]=1133330000' \
--data-urlencode '["Customer"]["cellphone"] =11998877665' \
--data-urlencode '["Customer"]["birth_date"]=0000-00-00' \
--data-urlencode '["Customer"]["gender"] =0' \
--data-urlencode '["Customer"]["email"] =emaildo@cliente.com.br' \
--data-urlencode '["Customer"]["nickname"]=""' \
--data-urlencode '["Customer"]["observation"]=""' \
--data-urlencode '["Customer"]["type"]=1' \
--data-urlencode '["Customer"]["company_name"]=Razão Social do Cliente' \
--data-urlencode '["Customer"]["cnpj"]=00.000.000/0000-00' \
--data-urlencode '["Customer"]["state_inscription"]=Isento' \
--data-urlencode '["Customer"]["reseller"]=0' \
--data-urlencode '["Customer"]["discount"]=0' \
--data-urlencode '["Customer"]["blocked"]=0' \
--data-urlencode '["Customer"]["credit_limit"]=0' \
--data-urlencode '["Customer"]["indicator_id"]=0' \
--data-urlencode '["Customer"]["profile_customer_id"]=1' \
--data-urlencode '["Customer"]["address"]=Endereço do Cliente' \
--data-urlencode '["Customer"]["zip_code"]=04001-001' \
--data-urlencode '["Customer"]["number"]=123' \
--data-urlencode '["Customer"]["complement"]=Sala 123' \
--data-urlencode '["Customer"]["neighborhood"]=Bairro do Cliente' \
--data-urlencode '["Customer"]["city"]=Cidade do Cliente' \
--data-urlencode '["Customer"]["state"]=SP' \
--data-urlencode '["Customer"]["newsletter"]=1' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["recipient"]=Nome do Cliente' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["address"]=Outro Endereço do Cliente' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["number"]=456' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["complement"]=Sala 456' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["neighborhood"]=Bairro do Cliente' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["city"]=Cidade do Cliente' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["state"]=SP' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["zip_code"]=04001-001' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["country"]=BRA' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["type"]=1' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["active"]=1' \
--data-urlencode '["Customer"]["CustomerAddress"][0]["description"]=""'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Customer"]["name"]' => 'Nome do Cliente',
  '["Customer"]["rg"]' => '00.000.000-0',
  '["Customer"]["cpf"]' => '00000000000',
  '["Customer"]["phone"]' => '1133330000',
  '["Customer"]["cellphone"] ' => '11998877665',
  '["Customer"]["birth_date"]' => '0000-00-00',
  '["Customer"]["gender"] ' => '0',
  '["Customer"]["email"] ' => 'emaildo@cliente.com.br',
  '["Customer"]["nickname"]' => '""',
  '["Customer"]["observation"]' => '""',
  '["Customer"]["type"]' => '1',
  '["Customer"]["company_name"]' => 'Razão Social do Cliente',
  '["Customer"]["cnpj"]' => '00.000.000/0000-00',
  '["Customer"]["state_inscription"]' => 'Isento',
  '["Customer"]["reseller"]' => '0',
  '["Customer"]["discount"]' => '0',
  '["Customer"]["blocked"]' => '0',
  '["Customer"]["credit_limit"]' => '0',
  '["Customer"]["indicator_id"]' => '0',
  '["Customer"]["profile_customer_id"]' => '1',
  '["Customer"]["address"]' => 'Endereço do Cliente',
  '["Customer"]["zip_code"]' => '04001-001',
  '["Customer"]["number"]' => '123',
  '["Customer"]["complement"]' => 'Sala 123',
  '["Customer"]["neighborhood"]' => 'Bairro do Cliente',
  '["Customer"]["city"]' => 'Cidade do Cliente',
  '["Customer"]["state"]' => 'SP',
  '["Customer"]["newsletter"]' => '1',
  '["Customer"]["CustomerAddress"][0]["recipient"]' => 'Nome do Cliente',
  '["Customer"]["CustomerAddress"][0]["address"]' => 'Outro Endereço do Cliente',
  '["Customer"]["CustomerAddress"][0]["number"]' => '456',
  '["Customer"]["CustomerAddress"][0]["complement"]' => 'Sala 456',
  '["Customer"]["CustomerAddress"][0]["neighborhood"]' => 'Bairro do Cliente',
  '["Customer"]["CustomerAddress"][0]["city"]' => 'Cidade do Cliente',
  '["Customer"]["CustomerAddress"][0]["state"]' => 'SP',
  '["Customer"]["CustomerAddress"][0]["zip_code"]' => '04001-001',
  '["Customer"]["CustomerAddress"][0]["country"]' => 'BRA',
  '["Customer"]["CustomerAddress"][0]["type"]' => '1',
  '["Customer"]["CustomerAddress"][0]["active"]' => '1',
  '["Customer"]["CustomerAddress"][0]["description"]' => '""'
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
var client = new RestClient("https://{api_address}/customers?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"Customer\"][\"name\"]", "Nome do Cliente");
request.AddParameter("[\"Customer\"][\"rg\"]", "00.000.000-0");
request.AddParameter("[\"Customer\"][\"cpf\"]", "00000000000");
request.AddParameter("[\"Customer\"][\"phone\"]", "1133330000");
request.AddParameter("[\"Customer\"][\"cellphone\"] ", "11998877665");
request.AddParameter("[\"Customer\"][\"birth_date\"]", "0000-00-00");
request.AddParameter("[\"Customer\"][\"gender\"] ", "0");
request.AddParameter("[\"Customer\"][\"email\"] ", "emaildo@cliente.com.br");
request.AddParameter("[\"Customer\"][\"nickname\"]", "\"\"");
request.AddParameter("[\"Customer\"][\"observation\"]", "\"\"");
request.AddParameter("[\"Customer\"][\"type\"]", "1");
request.AddParameter("[\"Customer\"][\"company_name\"]", "Razão Social do Cliente");
request.AddParameter("[\"Customer\"][\"cnpj\"]", "00.000.000/0000-00");
request.AddParameter("[\"Customer\"][\"state_inscription\"]", "Isento");
request.AddParameter("[\"Customer\"][\"reseller\"]", "0");
request.AddParameter("[\"Customer\"][\"discount\"]", "0");
request.AddParameter("[\"Customer\"][\"blocked\"]", "0");
request.AddParameter("[\"Customer\"][\"credit_limit\"]", "0");
request.AddParameter("[\"Customer\"][\"indicator_id\"]", "0");
request.AddParameter("[\"Customer\"][\"profile_customer_id\"]", "1");
request.AddParameter("[\"Customer\"][\"address\"]", "Endereço do Cliente");
request.AddParameter("[\"Customer\"][\"zip_code\"]", "04001-001");
request.AddParameter("[\"Customer\"][\"number\"]", "123");
request.AddParameter("[\"Customer\"][\"complement\"]", "Sala 123");
request.AddParameter("[\"Customer\"][\"neighborhood\"]", "Bairro do Cliente");
request.AddParameter("[\"Customer\"][\"city\"]", "Cidade do Cliente");
request.AddParameter("[\"Customer\"][\"state\"]", "SP");
request.AddParameter("[\"Customer\"][\"newsletter\"]", "1");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"recipient\"]", "Nome do Cliente");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"address\"]", "Outro Endereço do Cliente");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"number\"]", "456");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"complement\"]", "Sala 456");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"neighborhood\"]", "Bairro do Cliente");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"city\"]", "Cidade do Cliente");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"state\"]", "SP");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"zip_code\"]", "04001-001");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"country\"]", "BRA");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"type\"]", "1");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"active\"]", "1");
request.AddParameter("[\"Customer\"][\"CustomerAddress\"][0][\"description\"]", "\"\"");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Customer\"][\"name\"]=Nome do Cliente&[\"Customer\"][\"rg\"]=00.000.000-0&[\"Customer\"][\"cpf\"]=00000000000&[\"Customer\"][\"phone\"]=1133330000&[\"Customer\"][\"cellphone\"] =11998877665&[\"Customer\"][\"birth_date\"]=0000-00-00&[\"Customer\"][\"gender\"] =0&[\"Customer\"][\"email\"] =emaildo@cliente.com.br&[\"Customer\"][\"nickname\"]=\"\"&[\"Customer\"][\"observation\"]=\"\"&[\"Customer\"][\"type\"]=1&[\"Customer\"][\"company_name\"]=Razão Social do Cliente&[\"Customer\"][\"cnpj\"]=00.000.000/0000-00&[\"Customer\"][\"state_inscription\"]=Isento&[\"Customer\"][\"reseller\"]=0&[\"Customer\"][\"discount\"]=0&[\"Customer\"][\"blocked\"]=0&[\"Customer\"][\"credit_limit\"]=0&[\"Customer\"][\"indicator_id\"]=0&[\"Customer\"][\"profile_customer_id\"]=1&[\"Customer\"][\"address\"]=Endereço do Cliente&[\"Customer\"][\"zip_code\"]=04001-001&[\"Customer\"][\"number\"]=123&[\"Customer\"][\"complement\"]=Sala 123&[\"Customer\"][\"neighborhood\"]=Bairro do Cliente&[\"Customer\"][\"city\"]=Cidade do Cliente&[\"Customer\"][\"state\"]=SP&[\"Customer\"][\"newsletter\"]=1&[\"Customer\"][\"CustomerAddress\"][0][\"recipient\"]=Nome do Cliente&[\"Customer\"][\"CustomerAddress\"][0][\"address\"]=Outro Endereço do Cliente&[\"Customer\"][\"CustomerAddress\"][0][\"number\"]=456&[\"Customer\"][\"CustomerAddress\"][0][\"complement\"]=Sala 456&[\"Customer\"][\"CustomerAddress\"][0][\"neighborhood\"]=Bairro do Cliente&[\"Customer\"][\"CustomerAddress\"][0][\"city\"]=Cidade do Cliente&[\"Customer\"][\"CustomerAddress\"][0][\"state\"]=SP&[\"Customer\"][\"CustomerAddress\"][0][\"zip_code\"]=04001-001&[\"Customer\"][\"CustomerAddress\"][0][\"country\"]=BRA&[\"Customer\"][\"CustomerAddress\"][0][\"type\"]=1&[\"Customer\"][\"CustomerAddress\"][0][\"active\"]=1&[\"Customer\"][\"CustomerAddress\"][0][\"description\"]=\"\"");
Request request = new Request.Builder()
  .url("https://{api_address}/customers?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/customers`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
    "Customer": {
        "name": "Nome do Cliente",
        "rg": "00.000.000-0",
        "cpf": "00000000000",
        "phone": "1133330000",
        "cellphone": "11999990000",
        "birth_date": "0000-00-00",
        "gender": "0",
        "email": "emaildo@cliente.com.br",
        "nickname": "",
        "observation": "",
        "type": "1",
        "company_name": "Razão Social do Cliente",
        "cnpj": "00.000.000/0000-00",
        "state_inscription": "Isento",
        "reseller": "0",
        "discount": "0",
        "blocked": "0",
        "credit_limit": "0",
        "indicator_id": "0",
        "profile_customer_id": "1",
        "address": "Endereço do Cliente",
        "zip_code": "04001-001",
        "number": "123",
        "complement": "Sala 123",
        "neighborhood": "Bairro do Cliente",
        "city": "Cidade do Cliente",
        "state": "SP",
        "newsletter": "1",
        "CustomerAddress": [
            {
                "recipient": "Nome do Cliente",
                "address": "Outro Endereço do Cliente",
                "number": "456",
                "complement": "Sala 456",
                "neighborhood": "Bairro do Cliente",
                "city": "Cidade do Cliente",
                "state": "SP",
                "zip_code": "04001-001",
                "country": "BRA",
                "type": "1",
                "active": "1",
                "description": ""
            }
        ]
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
Customer	|JSON|	Dados do cliente
name	|String|	Nome
rg	|String|	RG
cpf	|String|	CPF
phone	|String|	Telefone fixo
cellphone	|String|	Telefone celular
birth_date	|Date|	Data de aniversário
gender	|Number|	Sexo (Veja Tabela A)
email	|String|	E-mail
nickname	|String|	Apelido
observation	|String|	Informações sobre o cliente
type	|Number|	Tipo de cliente (Veja Tabela B)
company_name	|String|	Razão social
cnpj	|String|	CNPJ
state_inscription	|String|	Inscrição estatual
reseller	|Number|	Cliente revendedor
discount	|Decimal|	Valor de desconto
blocked	|Number|	Cliente bloqueado (Veja Tabela C)
credit_limit	|Decimal|	Valor de crédito
indicator_id	|Number|	Código de indicação
profile_customer_id	|Number|	Código do perfil do cliente
address	|String|	Logradouro
zip_code	|String|	CEP
Number	|Number|	Número do endereço
complement	|String|	Complemento
neighborhood	|String|	Bairro
city	|String|	Cidade
state	|String|	Sigla do estado
newsletter	|Number|	Newsletter ativa
CustomerAddress	|Object|	Endereços do cliente
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
id	|Number|	Código do cliente
code	|Number|	Código do retorno (201)

## Atualizar Dados do Cliente#put

Requisição para alterar os dados de um cliente. Deverá enviar o JSON com os dados do cliente para a alteração.

> Código de Exemplo:

```shell
curl --location -g --request PUT 'https://{api_address}/customers/:id?access_token={{access_token}}' \
--data-urlencode '["Customer"]["name"]=Nome do Cliente' \
--data-urlencode '["Customer"]["rg"]=00.000.000-0' \
--data-urlencode '["Customer"]["cpf"]=00000000000' \
--data-urlencode '["Customer"]["phone"]=1133330000' \
--data-urlencode '["Customer"]["cellphone"] =11998877665' \
--data-urlencode '["Customer"]["birth_date"]=0000-00-00' \
--data-urlencode '["Customer"]["gender"] =0' \
--data-urlencode '["Customer"]["email"] =emaildo@cliente.com.br' \
--data-urlencode '["Customer"]["nickname"]=""' \
--data-urlencode '["Customer"]["observation"]=""' \
--data-urlencode '["Customer"]["type"]=1' \
--data-urlencode '["Customer"]["company_name"]=Razão Social do Cliente' \
--data-urlencode '["Customer"]["cnpj"]=00.000.000/0000-00' \
--data-urlencode '["Customer"]["state_inscription"]=Isento' \
--data-urlencode '["Customer"]["reseller"]=0' \
--data-urlencode '["Customer"]["discount"]=0' \
--data-urlencode '["Customer"]["blocked"]=0' \
--data-urlencode '["Customer"]["credit_limit"]=0' \
--data-urlencode '["Customer"]["indicator_id"]=0' \
--data-urlencode '["Customer"]["profile_customer_id"]=1' \
--data-urlencode '["Customer"]["newsletter"]=1'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers/:id?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_PUT);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["Customer"]["name"]' => 'Nome do Cliente',
  '["Customer"]["rg"]' => '00.000.000-0',
  '["Customer"]["cpf"]' => '00000000000',
  '["Customer"]["phone"]' => '1133330000',
  '["Customer"]["cellphone"] ' => '11998877665',
  '["Customer"]["birth_date"]' => '0000-00-00',
  '["Customer"]["gender"] ' => '0',
  '["Customer"]["email"] ' => 'emaildo@cliente.com.br',
  '["Customer"]["nickname"]' => '""',
  '["Customer"]["observation"]' => '""',
  '["Customer"]["type"]' => '1',
  '["Customer"]["company_name"]' => 'Razão Social do Cliente',
  '["Customer"]["cnpj"]' => '00.000.000/0000-00',
  '["Customer"]["state_inscription"]' => 'Isento',
  '["Customer"]["reseller"]' => '0',
  '["Customer"]["discount"]' => '0',
  '["Customer"]["blocked"]' => '0',
  '["Customer"]["credit_limit"]' => '0',
  '["Customer"]["indicator_id"]' => '0',
  '["Customer"]["profile_customer_id"]' => '1',
  '["Customer"]["newsletter"]' => '1'
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
var client = new RestClient("https://{api_address}/customers/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.PUT);
request.AddParameter("[\"Customer\"][\"name\"]", "Nome do Cliente");
request.AddParameter("[\"Customer\"][\"rg\"]", "00.000.000-0");
request.AddParameter("[\"Customer\"][\"cpf\"]", "00000000000");
request.AddParameter("[\"Customer\"][\"phone\"]", "1133330000");
request.AddParameter("[\"Customer\"][\"cellphone\"] ", "11998877665");
request.AddParameter("[\"Customer\"][\"birth_date\"]", "0000-00-00");
request.AddParameter("[\"Customer\"][\"gender\"] ", "0");
request.AddParameter("[\"Customer\"][\"email\"] ", "emaildo@cliente.com.br");
request.AddParameter("[\"Customer\"][\"nickname\"]", "\"\"");
request.AddParameter("[\"Customer\"][\"observation\"]", "\"\"");
request.AddParameter("[\"Customer\"][\"type\"]", "1");
request.AddParameter("[\"Customer\"][\"company_name\"]", "Razão Social do Cliente");
request.AddParameter("[\"Customer\"][\"cnpj\"]", "00.000.000/0000-00");
request.AddParameter("[\"Customer\"][\"state_inscription\"]", "Isento");
request.AddParameter("[\"Customer\"][\"reseller\"]", "0");
request.AddParameter("[\"Customer\"][\"discount\"]", "0");
request.AddParameter("[\"Customer\"][\"blocked\"]", "0");
request.AddParameter("[\"Customer\"][\"credit_limit\"]", "0");
request.AddParameter("[\"Customer\"][\"indicator_id\"]", "0");
request.AddParameter("[\"Customer\"][\"profile_customer_id\"]", "1");
request.AddParameter("[\"Customer\"][\"newsletter\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"Customer\"][\"name\"]=Nome do Cliente&[\"Customer\"][\"rg\"]=00.000.000-0&[\"Customer\"][\"cpf\"]=00000000000&[\"Customer\"][\"phone\"]=1133330000&[\"Customer\"][\"cellphone\"] =11998877665&[\"Customer\"][\"birth_date\"]=0000-00-00&[\"Customer\"][\"gender\"] =0&[\"Customer\"][\"email\"] =emaildo@cliente.com.br&[\"Customer\"][\"nickname\"]=\"\"&[\"Customer\"][\"observation\"]=\"\"&[\"Customer\"][\"type\"]=1&[\"Customer\"][\"company_name\"]=Razão Social do Cliente&[\"Customer\"][\"cnpj\"]=00.000.000/0000-00&[\"Customer\"][\"state_inscription\"]=Isento&[\"Customer\"][\"reseller\"]=0&[\"Customer\"][\"discount\"]=0&[\"Customer\"][\"blocked\"]=0&[\"Customer\"][\"credit_limit\"]=0&[\"Customer\"][\"indicator_id\"]=0&[\"Customer\"][\"profile_customer_id\"]=1&[\"Customer\"][\"newsletter\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/customers/:id?access_token={{access_token}}")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método PUT
`https://{api_address}/customers/:id`

### Parâmetros enviados:

> Estrutura do Json:

<pre>
{
   "Customer":{
      "name":"Nome do Cliente",
      "rg":"00.000.000-0",
      "cpf":"00000000000",
      "phone":"1133330000",
      "cellphone":"11999990000",
      "birth_date":"0000-00-00",
      "gender":"0",
      "email":"emaildo@cliente.com.br",
      "nickname":"",
      "observation":"",
      "type":"1",
      "company_name":"Razão Social do Cliente",
      "cnpj":"00.000.000/0000-00",
      "state_inscription":"Isento",
      "reseller":"0",
      "discount":"0",
      "blocked":"0",
      "credit_limit":"0",
      "indicator_id":"0",
      "profile_customer_id":"1",
      "newsletter":"1"
   }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do cliente
Customer	|JSON|	Dados do cliente
name	|String|	Nome
rg	|String|	RG
cpf	|String|	CPF
phone	|String|	Telefone fixo
cellphone	|String|	Telefone celular
birth_date	|Date|	Data de aniversário
gender	|Number|	Sexo (Veja Tabela A)
email	|String|	E-mail
nickname	|String|	Apelido
observation	|String|	Informações sobre o cliente
type	|Number|	Tipo de cliente (Veja Tabela B)
company_name	|String|	Razão social
cnpj	|String|	CNPJ
state_inscription	|String|	Inscrição estatual
reseller	|Number|	Cliente revendedor
discount	|Decimal|	Valor de desconto
blocked	|Number|	Cliente bloqueado (Veja Tabela C)
credit_limit	|Decimal|	Valor de crédito
indicator_id	|Number|	Código de indicação
profile_customer_id	|Number|	Código do perfil do cliente
newsletter	|Number|	Newsletter ativa

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
id	|Number|	Código do cliente
code	|Number|	Código do retorno (200)

## Excluir Cliente#delete

Requisição para excluir um cliente.

> Código de Exemplo:

```shell
curl --location -g --request DELETE 'https://{api_address}/customers/:id?access_token={{access_token}}'
```
```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/customers/:id?access_token={{access_token}}");
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
  .url("https://{api_address}/customers/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método DELETE
`https://{api_address}/customers/:id`

### Parâmetros enviados

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
id	|Number|	Código do cliente
code	|Number|	Código do retorno (200)

## Listagem de Endereços de Cliente#get

Requisição para a consulta de diversos endereços do cliente.

> Código de Exemplo:

```shell 
curl --location -g --request GET 'https://{api_address}/customers/addresses?access_token={{access_token}}&sort=id_desc'
```
```php 
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers/addresses?access_token={{access_token}}&sort=id_desc');
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
var client = new RestClient("https://{api_address}/customers/addresses?access_token={{access_token}}&sort=id_desc");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java 
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/customers/addresses?access_token={{access_token}}&sort=id_desc")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/customers/addresses`

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
attrs	|String|	Atributos do endereço do cliente
limit	|Number|	Limite de registros
page	|Number|	Página corrente
sort	|String|	Ordenação ex.: [campo]_[asc/desc]

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "paging": {
        "total": 3,
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
        "customer_id",
        "type",
        "not_list"
    ],
    "appliedFilters": {
        "CustomerAddress.customer_id !=": "0"
    },
    "CustomerAddresses": [
        {
            "CustomerAddress": {
                "id": "1",
                "customer_id": "1",
                "address": "Nome da Rua do Cliente",
                "number": "130",
                "complement": "",
                "neighborhood": "Bairro do Cliente",
                "city": "Cidade do Cliente",
                "state": "SP",
                "zip_code": "04001-001",
                "country": "Brasil",
                "type": "1",
                "active": "0",
                "description": "",
                "recipient": "",
                "type_delivery": "1",
                "not_list": "0"
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
CustomerAddresses	|Object|	Lista de endereços do cliente
CustomerAddress	|Object|	Dados do endereço do cliente
id	|String|	Código do endereço
customer_id	|String|	Código do cliente
address	|String|	Endereço do Cliente
|Number|	|String|	Numero do endereço do Cliente
complement	|String|	Complemento do endereço do Cliente
neighborhood	|String|	Bairro do Cliente
city	|String|	Cidade
state	|String|	Sigla do estado
zip_code	|String|	CEP
country	|String|	País
type	|Number|	Tipo do Endereço. Tabela B
active	|Number|	Endereço ativo (Veja Tabela E)
description	|String|	Descrição do Endereço
recipient	|String|	Nome do Cliente
type_delivery	|Number|	
no_list	|Number|	


## Consultar Dados do Endereço de um Cliente#get

Requisição para a consulta de dados de um endereço do cliente.

> Código de Exemplo:

```shell 
curl --location -g --request GET 'https://{api_address}/customers/addresses/:id?access_token={{access_token}}'
```
```php 
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers/addresses/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/customers/addresses/:id?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java 
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://{api_address}/customers/addresses/:id?access_token={{access_token}}")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/customers/addresses/:id`

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do endereço do cliente

### Retorno em caso de sucesso (status code 200 ou 201)

> Retorno de Sucesso:

<pre>
{
    "CustomerAddress": {
        "id": "123",
        "customer_id": "123",
        "address": "Endereço do Cliente",
        "number": "123",
        "complement": "",
        "neighborhood": "Bairro do Cliente",
        "city": "Cidade do Cliente",
        "state": "SP",
        "zip_code": "04001-001",
        "country": "BRA",
        "type": "1",
        "active": "0",
        "description": "",
        "recipient": "",
        "type_delivery": "1",
        "not_list": "0"
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
CustomerAddress	|Object|	Endereços do cliente
id	|String|	Código do endereço do cliente
customer_id	|String|	Código do cliente
recipient	|String|	Nome do cliente
address	|String|	Logradouro
number	|Number|	Número do endereço
complement	|String|	Complemento
neighborhood	|String|	Bairro
city	|String|	Cidade
state	|String|	Sigla do estado
zip_code	|String|	CEP
country	|String|	País
type	|Number|	Tipo de endereço (Veja Tabela D)
active	|Number|	Endereço ativo (Veja Tabela E)
description	|String|	Descrição do Endereço
type_delivery	|Number|	
not_list	|Number|	

## Cadastrar Endereço#post

Requisição para inclusão de um endereço do cliente. Deverá enviar o JSON com os dados do endereço para a criação.

> Código de Exemplo:

```shell 
curl --location -g --request POST 'https://{api_address}/customers?access_token={{access_token}}' \
--data-urlencode '["CustomerAddress"]["customer_id"]=1' \
--data-urlencode '["CustomerAddress"][0]["recipient"]=Nome do Cliente' \
--data-urlencode '["CustomerAddress"][0]["address"]=Endereço do Cliente' \
--data-urlencode '["CustomerAddress"][0]["number"]=123' \
--data-urlencode '["CustomerAddress"][0]["complement"]=Sala 123' \
--data-urlencode '["CustomerAddress"][0]["neighborhood"]=Bairro do Cliente' \
--data-urlencode '["CustomerAddress"][0]["city"]=Cidade do Cliente' \
--data-urlencode '["CustomerAddress"][0]["state"]=SP' \
--data-urlencode '["CustomerAddress"][0]["zip_code"]=04001-001' \
--data-urlencode '["CustomerAddress"][0]["country"]=BRA' \
--data-urlencode '["CustomerAddress"][0]["type"]=1' \
--data-urlencode '["CustomerAddress"][0]["active"]=1' \
--data-urlencode '["CustomerAddress"][0]["description"]=1'
```
```php 
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers?access_token={{access_token}}');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->addPostParameter(array(
  '["CustomerAddress"]["customer_id"]' => '1',
  '["CustomerAddress"][0]["recipient"]' => 'Nome do Cliente',
  '["CustomerAddress"][0]["address"]' => 'Endereço do Cliente',
  '["CustomerAddress"][0]["number"]' => '123',
  '["CustomerAddress"][0]["complement"]' => 'Sala 123',
  '["CustomerAddress"][0]["neighborhood"]' => 'Bairro do Cliente',
  '["CustomerAddress"][0]["city"]' => 'Cidade do Cliente',
  '["CustomerAddress"][0]["state"]' => 'SP',
  '["CustomerAddress"][0]["zip_code"]' => '04001-001',
  '["CustomerAddress"][0]["country"]' => 'BRA',
  '["CustomerAddress"][0]["type"]' => '1',
  '["CustomerAddress"][0]["active"]' => '1',
  '["CustomerAddress"][0]["description"]' => '1'
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
var client = new RestClient("https://{api_address}/customers?access_token={{access_token}}");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddParameter("[\"CustomerAddress\"][\"customer_id\"]", "1");
request.AddParameter("[\"CustomerAddress\"][0][\"recipient\"]", "Nome do Cliente");
request.AddParameter("[\"CustomerAddress\"][0][\"address\"]", "Endereço do Cliente");
request.AddParameter("[\"CustomerAddress\"][0][\"number\"]", "123");
request.AddParameter("[\"CustomerAddress\"][0][\"complement\"]", "Sala 123");
request.AddParameter("[\"CustomerAddress\"][0][\"neighborhood\"]", "Bairro do Cliente");
request.AddParameter("[\"CustomerAddress\"][0][\"city\"]", "Cidade do Cliente");
request.AddParameter("[\"CustomerAddress\"][0][\"state\"]", "SP");
request.AddParameter("[\"CustomerAddress\"][0][\"zip_code\"]", "04001-001");
request.AddParameter("[\"CustomerAddress\"][0][\"country\"]", "BRA");
request.AddParameter("[\"CustomerAddress\"][0][\"type\"]", "1");
request.AddParameter("[\"CustomerAddress\"][0][\"active\"]", "1");
request.AddParameter("[\"CustomerAddress\"][0][\"description\"]", "1");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```
```java 
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "[\"CustomerAddress\"][\"customer_id\"]=1&[\"CustomerAddress\"][0][\"recipient\"]=Nome do Cliente&[\"CustomerAddress\"][0][\"address\"]=Endereço do Cliente&[\"CustomerAddress\"][0][\"number\"]=123&[\"CustomerAddress\"][0][\"complement\"]=Sala 123&[\"CustomerAddress\"][0][\"neighborhood\"]=Bairro do Cliente&[\"CustomerAddress\"][0][\"city\"]=Cidade do Cliente&[\"CustomerAddress\"][0][\"state\"]=SP&[\"CustomerAddress\"][0][\"zip_code\"]=04001-001&[\"CustomerAddress\"][0][\"country\"]=BRA&[\"CustomerAddress\"][0][\"type\"]=1&[\"CustomerAddress\"][0][\"active\"]=1&[\"CustomerAddress\"][0][\"description\"]=1");
Request request = new Request.Builder()
  .url("https://{api_address}/customers?access_token={{access_token}}")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método POST
`https://{api_address}/customers/addresses`

### Parâmetros enviados

> Estrutura do Json:

<pre>
{	
    "CustomerAddress":{
        "customer_id":"123",
        "recipient":"",
        "address":"Endereço do Cliente",
        "number":"123",
        "complement":"Sala 123",
        "neighborhood":"Bairro do Cliente",
        "city":"Cidade do Cliente",
        "state":"SP",
        "zip_code":"04001-001",
        "country":"BRA",
        "type":"1",
        "active":"0",
        "description":""
    }
}
</pre>

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
CustomerAddress	|JSON|	Endereços do cliente
customer_id	|Number|	Código do cliente
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
id	|Number|	Código do endereço do cliente
code	|Number|	Código do retorno (201)

## Excluir Endereço#delete

Requisição para excluir um endereço do cliente.

> Código de Exemplo:

```shell 
curl --location -g --request DELETE 'https://{api_address}/customers/addresses/:id?access_token={{access_token}}'
```
```php 
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://{api_address}/customers/addresses/:id?access_token={{access_token}}');
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
var client = new RestClient("https://{api_address}/customers/addresses/:id?access_token={{access_token}}");
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
  .url("https://{api_address}/customers/addresses/:id?access_token={{access_token}}")
  .method("DELETE", body)
  .build();
Response response = client.newCall(request).execute();
```

### Método GET
`https://{api_address}/customers/addresses/:id`

### Parâmetros enviados

Campo|Tipo|Descrição
-----|----|---------
access_token	|String|	Chave de acesso
:id	|Number|	Código do endereço do cliente

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
id	|Number|	Código do endereço do cliente
code	|Number|	Código do retorno (200)

## Tabelas Auxiliares de Clientes

### Tabela A - Sexo do cliente (campo gender)
Campo|Tipo
-----|----
0 | Masculino
1 | Feminino

### Tabela B - Tipo do cliente (campo type)
Campo|Tipo
-----|----
0 | Pessoa física
1 | Pessoa jurídica

### Tabela C - Bloqueio do cliente (campo blocked)
Campo|Tipo
-----|----
0 | Cliente desbloqueado
1 | Cliente bloqueado

### Tabela D - Tipo de endereço do cliente (campo CustomerAddress.type)
Campo|Tipo
-----|----
0 | Endereço de cobrança
1 | Endereço de entrega

### Tabela E - Disponibilidade do endereço do cliente (campo CustomerAddress.active)
Campo|Tipo
-----|----
0 | Endereço indisponível
1 | Endereço disponível