# Controle_curricular_bio
Site para controle curricular do curso de Ciências Biológicas da UFSC

## 0. Objetivo

Criar uma ferramenta online, de rápido acesso por parte dos alunos, para checar pré-requisitos e auxiliar no processo de matrícula e escolha de disciplinas. Esta ideia partiu de ferramentas anteriormente criadas, as quais provavelmente algum veterano do curso já usou e não lembro dos criadores, mas fica aqui os devidos créditos.

## 1 Criadores

Este site foi criado pelos alunos de graduação em Ciências Biológicas da UFSC: Alisson Willms Corrêa e Vilmar Filho.


## 2 Funções
#### Para futuras atualizações da ferramenta

As funções estão disponíveis no arquivo scripts.js e caso futuras atualizações sejam necessárias (alterações de pré-requisitos), basta atualizar os argumentos das mesmas, não sendo necessário reprogramar o site.

**Importante:** Todas as matérias que possuem algum pré-requisito, com excessão de horas, possuem o argumento "disabled" em sua label, a função apropriada a ativará. Para os pré-requisitos de horas, a solução encontrada foi alterar o hover dos checkboxes, informando ao usuário que existe esta limitação.


#### 2.1 Das Funções

As funções estão divididas em seções, com blocos comentados. Os blocos serão tratados a seguir. As funções devem ser implementadas no "onchange"/"onclick" das labels das matérias, passando como argumento, as ids das matérias de interesse no modelo abaixo para cada situação.

##### 2.1.1 - PRE-REQUISITOS

Nesta seção encontram-se as funções: determined_list; double_determined_list; triple_determined_list.
Todas têm o mesmo objetivo: liberar uma matéria que possui pré-requisito. 

###### determined_list: função que libera matérias que possuem apenas um pré-requisito.
	usage: determined_list(pre_requisito, materias_liberadas_por_ele_separadas_por_virgula) 
			
###### double_determined_list: função que libera matérias que possuem 2 pré-requisitos.
	usage: determined_list(pre_requisito1, pre_requisito_2, materias_liberadas_por_eles_separadas_por_virgula) 
			
###### triple_determined_list: função que libera matérias que possuem 3 pré-requisitos.
	usage: determined_list(pre_requisito1, pre_requisito_2, pre_requisito_3, materias_liberadas_por_eles_separadas_por_virgula) 
	
##### 2.1.2 - DESATIVAR CHECKBOX

Esta seção possui apenas uma função, que se encarrega de desativar todas as matérias ativadas por um pre-requisito (e as ativadas pela matéria que ele libera) em uma reação em cadeia. 

Exemplo: Todas as matérias estão com checkbox == true, e o usuário desativa a matéria BEG7012 - Biologia Celular. Com esta ação, são desativados todas as matérias que dependem de BEG7012 e também as matérias que dependem de pré-requisitos ativados por ela. Esta função deve ser aplicada a **todas** as matérias que são pré-requisito para alguma outra matéria, e devem incluir todas as matérias que ela ativa, em primeiro, ou em segundo, ou em terceiro ou [...] grau.

###### off_other: desativa todas as matérias com relação (direta ou indireta) com a matéria inativada.
	usage: off_other(id_materia, materias_relacionadas_por_esta_separadas_por_virgula) 
	
	
##### 2.1.3 - CONTROLE DE HORAS

Esta seção inclui duas funções, com a mesma ação: contabilizar as horas obrigatórias das matérias ativas. Uma do bacharel e outra da licenciatura. Isto é realizado pela classa a qual todas as matérias estão incluídas, que corresponde à "product" para bacharel e "product_lic" para licenciatura

###### totalIt: Contabiliza e soma todas as horas das matérias ativas do bacharel, armazenando na variável *"mandatory_total"* presente no topo do tab_content do bacharel, classe total_board_count.

A função atualiza este valor cada vez que uma matéria é ativada ou desativada.

	usage: off_other(id_materia, materias_relacionadas_por_esta_separadas_por_virgula) 
	
###### totalIt_lic: Contabiliza e soma todas as horas das matérias ativas da licenciatura, armazenando na variável *"mandatory_total_lic"* presente no topo do tab_content do licenciatura, classe total_board_count. 

A função atualiza este valor cada vez que uma matéria é ativada ou desativada.

	usage: off_other(id_materia, materias_relacionadas_por_esta_separadas_por_virgula) 
		
	
##### 2.1.4 - ARMAZENAMENTO EM BROWSER

Estas funções dependem das constantes implementadas, que refletem **Todas** as matérias do bacharel (bach_disciplinas) da licenciatura (lic_disciplinas)

###### checkboxStorage: Armazena em cache todos os estados das disciplinas, assim ao dar refresh na página, não se perde o progresso.
	usage: checkboxStorage(); *Não necessita de argumento, checa todas as disciplinas cada vez que **alguma** for atualizada*


##### 2.1.4 - BOTÕES DE SELEÇÃO

Esta seção contém 3 funções que controlam os botões de ativação de várias máterias. Há um em cada fase, são do tipo switch e ativam/desativam todas as matérias. 

As funções **selectAll e off_all_button** devem estar presente **apenas** na label do botão all de cada fase, presente logo abaixo do início da seção (1 fase; 2 fase; [...]). A função **update_all** deve estar presente em **todas** as matérias da fase de ativação do botão all. 

Botões da licenciatura e bacharel possuem diferença.

###### selectAll: Ativa todas as matérias daquela fase.
	usage: selectAall(id_do_botao, todas_as_materias_incluidas_na_fase_separados_por_virgula)

###### update_all: Ativa/desativa o botão all de cada fase, caso todas as matérias estjam ativadas/desativadas;
	usage: selectAall(id_do_botao, todas_as_materias_incluidas_na_fase_separados_por_virgula);

##### 2.1.5 - GERENCIAMENTO DE TABS

Uma função controla o *switch* das abas, de bacharel, licenciatura e "sobre". É executada, na *nav* do html, alternando as classes  "tab_content" com mesmo nome dos botões. A aba default é Bacharel. Caso outros botões sejam adicionados, devem ser incluídos nesta função, bem como atualização do *nav* do html

###### openTab: é repassada no onclick dos botões da classe "tab_button" no nav do html, segue o padrão:
	openTab(event, nome_do_tab_content_que_varia_de_bacharel_/licenciatura/_sobre)

## 3 CSS

A única exclusividade do css é a utilização do pacote **pretty-checkbox** para estilizar os botões, alterações podem ser efetuadas utlizando o pacote e apenas alterando a classe, seguindo os modelos do desenvolvedor: 
https://lokesh-coder.github.io/pretty-checkbox/

Todos os parâmetros deste pacote estão importados no css, mesmo os não utilizados, garantindo a liberdade de alterção, modificando apneas o html.

Qualquer outra alterção de estilo css é de responsabilidade do desenvolvedor haja vista que difere do estilo inicialmente implementado pelos atuais responsáveis.

## 4 SUPORTE

Este projeto só é possível graças ao apoio do professor Dr. Glauber Wagner, responsável pelo laboratório de Bioinformática da UFSC, que permitiu alocar o site em um dos servidores do laborátorio.

Fica aqui um agradecimento a todos que trabalham para manter esta infraestrurura!









##### Bioinformatics is both an engineering art and a science. - N. Goodman, 2002




