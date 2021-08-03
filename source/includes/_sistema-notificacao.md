# APIs de Sistema de Notificação(Webhook)

## API DE SISTEMA DE NOTIFICAÇÃO (WEBHOOK)

### Documentação – Sistema de Notificações

A Tray disponibiliza atualmente o sistema de Webhook, que possui a finalidade de agregar agilidade no fluxo das APIs.

Exemplo de caso: se a loja possui 1000 pedidos e foram alterados 50 pedidos e criados mais 50, ao invés do Integrador reprocessar todos os mil pedidos, com o webhook informando quais ids de pedidos foram alterados/criados, você irá consultar apenas 100 pedidos.

### Ativação da Notificação:

Para ativar as notificações, é necessário informar uma URL de Notificação, onde será cadastrada em seu aplicativo que já esteja credenciado junto a Tray.

Sendo assim, favor abrir um chamado através deste link: [https://atendimento.tray.com.br/hc/pt-br/requests/new](https://atendimento.tray.com.br/hc/pt-br/requests/new) e em: Precisa de ajuda com sua loja virtual? escolher o escopo: "TRAY DESENVOLVEDORES" > "INTEGRAÇÕES API" e informar o nome do aplicativo e url de notificação para iniciar o processo de ativação.

### Funcionalidade:

A Tray irá realizar o envio dos parâmetros (scope_name | scope_id | seller_id | act) via POST, para a url de notificação cadastrada no aplicativo.

Esta url deverá estar disponível, para receber os parâmetros que a Tray vai enviar.

No caso, a url de notificação deve ser uma url externa preparada para receber requisições via POST, ou seja, deve ser disponibilizada de forma externa e deve conseguir interpretar as notificações enviadas pela Tray.

### Notificações:

Estas notificações serão realizadas para uma URL do aplicativo, através de uma requisição via POST, onde o aplicativo irá receber essas notificações quando ocorrer alguma inserção, atualização ou exclusão de informações na plataforma, referente ao escopo que estiver habilitado, para o recebimento dessas notificações.

Atualmente, a notificações dos escopos só ocorrem a partir de novas ações, ou seja, começaram a ser notificados a partir do momento em que o aplicativo aderiu ao sistema de Webhook, desse momento em diante, qualquer ação nova será notificada.

Não será notificado nenhum escopo do qual já tenha ocorrido uma ação passada, antes de aderir ao sistema de notificação.

Dessa forma, para ter acesso as informações que ocorreram antes de aderir as notificações do Webhook, será necessário consultar diretamente as APIs respectivas, em que deseja saber.

### Tempo de Notificação:

O tempo do envio das notificações da Tray para a url de notificação, ocorre em questão de minutos, sendo enviadas no mesmo instante.

É possível, por uma questão pontual, ocorrer um atraso no processo do envio.

O processo do envio das notificações podem ocorrem da seguinte forma:

A Tray realiza o primeiro envio das informações para a url de notificação, se houver alguma falha em sua url neste recebimento, a Tray irá realizar um segundo envio das informações, no entanto, se no primeiro envio, ocorreu em questão de minutos, o segundo envio irá ocorrer dentro de meio hora, e assim se sucederá aumentando o espaçamento do envio, até que a Tray consiga realizar os envios de todas as informações necessárias para a url de notificação.

Dessa forma é necessário que a url de notificação sempre esteja disponível e livre de impedimentos para receber as notificações da Tray, pois caso ocorra uma tentativa excessiva e impacte nosso banco, ficará passível do nosso time de infra, bloquear o serviço. E não, não conseguimos informar qual é o limite máximo das retentativas, pois tudo irá depender do processamento interno de nossa fila.

### Recomendações de Implementação:

São recomendados dois tratamentos para utilização do sistem de notificação que são, armazenar as notificações e agrupar as notificações idênticas antes de gerar qualquer ação.

Desta forma, pode-se evitar diversas requisições ao mesmo escopo, visto que um produto pode sofrer diversas atualizações em um curto interválo de tempo, assim como o pedido pode sofrer alterações rápidas.

Exemplo de envio do payload:

Segue exemplo abaixo de payload, sobre o que é enviado via POST da Tray para a url do Webhook, dessa forma, é necessário realizar a captura dessas informações via código e então implementar as configurações dentro do sistema, de acordo com a necessidade do aplicativo.

`{ "seller_id"=>391250, "scope_id"=>4375797, "scope_name"=>"order", "act"=>"update", "app_code"=>"718", "url_notification"=>"https://suaurldenotificacao" }`

### É possível habilitar o webhook para lojas específicas ou desabilitar de lojas específicas?
Não. Atualmente o serviço disponibilizado atua sobre o aplicativo e não sobre as lojas, ou seja, qualquer loja integrada ao app, o Integrador receberá as notificações das mesmas, sendo assim, para não receber as notificações de determinada loja, somente realizando a desinstalação do app dentro dessa loja.

### É possível receber outros tipos de notificações, conforme demostrando no exemplo do playload?
Não. Atualmente não é possível. Caso deseje receber outros tipos de notificações, você poderá enviar uma solicitação para o nosso canal de SUGESTÕES.

Segue o link: [https://clientes.tray.com.br/sugestao-tray/](https://clientes.tray.com.br/sugestao-tray/)

### Exclusão do serviço em caso de desinstalação do aplicativo?
(será o mesmo comportamento para troca de url de notificação)

Por um período de 20 dias, é provável que sua url ainda receba notificações da loja que realizou a desinstalação do seu aplicativo, pois o nosso sistema irá realizar a tentativa de entregas das notificações pendentes, até o momento em que o app foi desinstalado. Sendo assim, enquanto nosso sistema receber o status do HTTP da URL diferente de 200, continuaremos enviando diversas retentativas de envio das notificações até que esse esse resíduo de notificações retorne com o HTTP Code 200, o que poderá perdurar por aproximadamente 20 dias.

### Parâmetros da Notificação

Para identificar o tipo de dado e qual a informação que foi atualizada, são enviados alguns parâmetros via POST no momento da notificação. Esses parâmetros são:

Parâmetros de envio | Descrição
--------|-----------
scope_name |	Nome do escopo notificado.
scope_id |	Código do escopo da notificação.
seller_id |	Código do vendedor.
act |	Ação realizada.

### Abaixo os escopos disponíveis na notificação:

Lembrando que, inicialmente realizamos a liberação somente do escopo de "PEDIDOS", caso deseje realizar a liberação dos demais escopos, ou até mesmo de todos eles, isso deverá ser informado via chamado, no momento do envio da url.

> Exemplo de código:

<pre>
php
    $sellerID = $_POST["seller_id"]; //Código da Loja

    switch($_POST["scope_name"] . "_" . $_POST["act"] ){
        case "product_insert":
            // Tratamento da atualização produto
            $productID = $_POST["scope_id"]; // Código do produto
        break;
        case "product_update":
            // Tratamento da atualização do produto
            $productID = $_POST["scope_id"]; // Código do produto
        case "variant_stock_update":
            // Tratamento da atualização de estoque de uma variação de produto
            $variantID = $_POST["scope_id"]; // Código da variação do produto
        break;
        case "order_insert":
            // Tratamento da insersão de um novo pedido
            $orderID = $_POST["scope_id"]; // Código do pedido
        break;
        case "customer_delete":
            // Tratamento da exclusão de um cliente
            $customerID = $_POST["scope_id"]; // Código do cliente
        break;
    }

</pre>

Tipos de Escopos de Notificação|Descrição
-------------------------------|---------
product|	Notificação de produto.
product_price|	Notificação de preço de produto.
product_stock|	Notificação de estoque de produto.
variant|	Notificação de variação do produto.
variant_price|	Notificação de preço da variação.
variant_stock|	Notificação de estoque da variação.
order	|Notificação de pedido.
customer	|Notificação de cliente.

As ações disponíveis na notificação são localizadas abaixo:

Tipos de Ações|Descrição
--------------|---------
insert|	Inserção de um novo registro.
update|	Atualizaçao de um registro.
delete|	Exclusão de um registro.