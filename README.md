# tokenization-study

### poc 1 Utilizando o vaulty

https://docs.vaulty.co/reference/actions/

Gostei do conceito do vaulty, mas me preocupa o fato de não ser um lib opensource mantida por uma boa comunidade, tbm o tipo de criptografia ser aesgcm não consegui achar uma forma de verificar se o valor ja existe em nossa base.

Pontos fortes:
    1 - Integra com redis
    2 - Integra com o KMS
    3 - Faz tokenização e salva os dados no redis criptografados
    4 - Faz a tokenização e destokenização
    5 - Faz criptografia e descriptografia
    6 - Repassa dados hasheados com SHA-256
    7 - Muito fácil o uso

Pontos fracos:
    1 - Não tem comunidade ativa oferecendo suporte
    2 - Ultimo commit no repo foi em Commits on Sep 24, 2021
    3 - Não consigo pensar em uma forma no modelo de tokenização de validar se um valor ja existe em nossa base

Tem outras opções opensource que oferecem algo parecido? 

Caso não, um api-gateway que trate o request e o response pode atender a necessidade de tokenização?


### poc 2 simulando modelo do vaulty com node.