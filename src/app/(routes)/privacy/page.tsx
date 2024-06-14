import Link from "next/link";

const Privacy = () => {
  return (
    <section className="w-full h-full flex flex-col items-center py-4">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          Política de Privacidade
        </h1>
        <p className="w-[80%]">
          A HARMONIZAÇÃO PRONTUÁRIOS tem compromisso firmado com a segurança dos
          seus dados. Quando você acessa o nosso site e quando faz uma compra
          neste site, você nos fornece alguns dados pessoais com o objetivo de
          viabilizar a sua operação.
        </p>
        <p className="w-[80%]">
          Somos a GUEDESBAMPI PUBLICAÇÕES E CENTRO DE TREINAMENTOS LTDA , nome
          fantasia HARMONIZAÇÃO PRONTUÁRIOS, inscrita no CNPJ
          48.044.177/0001-16, com sede na Rua Bertha Loforte Gonçalvez, 80/08 -
          Vila Nova, CEP 91720-230, na cidade de Porto Alegre - RS e seremos a
          controladora das suas informações, ou seja, somos os responsáveis pelo
          que acontece com os seus dados e pela proteção deles, conforme
          definição da Lei Geral de Proteção de Dados “LGPD” (Lei Federal nº
          13.709.2018).
        </p>
        <p className="w-[80%]">
          Este documento é dedicado a te explicar como os seus dados pessoais
          serão tratados pela HARMONIZAÇÃO PRONTUÁRIOS e quais são as medidas
          que aplicamos para mantê-los seguros.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          Para facilitar a compreensão desta política:
        </h1>
        <p className="w-[80%]">
          Qualquer informação relacionada a uma pessoa que a identifique como um
          indivíduo é o que chamamos de dados pessoais.
        </p>
        <p className="w-[80%]">
          Quando citarmos os termos “HARMONIZAÇÃO PRONTUÁRIOS”, “GUEDESBAMPI
          PUBLICAÇÕES”, “nós” ou “nossos”, estamos nos referindo a controladora
          dos seus dados pessoais, ou seja, a GUEDESBAMPI PUBLICAÇÕES E CENTRO
          DE TREINAMENTOS LTDA;
        </p>
        <p className="w-[80%]">
          Todas as vezes que ler “usuário”, “você”, “titular”, “cliente”, “seu”
          ou “sua”, nos referimos a você, nosso cliente ou usuário do nosso
          site, o titular dos dados.
        </p>
        <p className="w-[80%]">
          O consentimento é a autorização clara e objetiva que você dá para o
          tratamento de seus dados pessoais, com a finalidade destacada neste
          consentimento.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          {" "}
          QUAIS DADOS SÃO COLETADOS PELA HARMONIZAÇÃO PRONTUÁRIOS?
        </h1>
        <p className="w-[80%]">
          Durante sua navegação no nosso site, diferentes tipos de dados
          pessoais poderão ser coletados, de forma automática ou fornecidas
          diretamente por você, como por exemplo para a realização de seu
          cadastro.
        </p>
        <h2 className="text-lg font-bold text-black w-[80%] text-left py-4">
          Dados pessoais que nós podemos coletar
        </h2>
        <ul className="w-[77%] flex   flex-col ">
          <li className="list-disc">Pessoa física</li>
          <li className="list-disc">Nome completo</li>
          <li className="list-disc">E-mail</li>
          <li className="list-disc">CNPJ</li>
        </ul>
        <h2 className="text-lg font-bold text-black w-[80%] text-left py-4">
          Ao preencher o local de entrega e a forma de pagamento:
        </h2>
        <ul className="w-[77%] flex   flex-col">
          <li className="list-disc">Endereço de cobrança</li>
          <li className="list-disc">Endereço de entrega</li>
          <li className="list-disc">
            Dados do cartão de crédito (se essa for a forma de pagamento
            escolhida)
          </li>
          <li className="list-disc">
            Durante a análise e o monitoramento de suas compras ou outras
            transações financeiras
          </li>
          <li className="list-disc">Dados cadastrais</li>
          <li className="list-disc">Produto comprado</li>
          <li className="list-disc">Quantidade</li>
          <li className="list-disc">Valor da mercadoria</li>
          <li className="list-disc">Valor total da compra</li>
          <li className="list-disc">Natureza da transação financeira</li>
        </ul>
      </div>

      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          {" "}
          Informações que podem ser coletadas mesmo que o Usuário não se
          cadastre no site da HARMONIZAÇÃO PRONTUÁRIOS
        </h1>

        <ul className="w-[77%] flex   flex-col gap-2 ">
          <li className="list-disc">IP</li>
          <li className="list-disc">
            Dispositivo utilizado para a navegação; Itens e categorias
            pesquisados ou visualizados; Número de visualizações; Páginas
            visitadas em outros sites. Outras informações que poderão ser
            coletadas:
          </li>
          <li className="list-disc">
            {" "}
            Caso o cadastro seja realizado através de login por uma rede social,
            serão coletadas informações provenientes da rede social; Informações
            públicas sobre você, ou que estejam disponíveis publicamente;
            Informações coletadas através de terceiros, complementos dos seus
            dados cadastrais (nome, nome dos pais, data de nascimento, CPF,
            número de telefone, entre outros), score em agências de crédito, se
            você faz parte de alguma lista de Pessoa Exposta Politicamente ou de
            alguma lista de alerta;
          </li>
          <li className="list-disc">
            Informações fornecidas por você, voluntariamente, por meio de
            comunicações com a HARMONIZAÇÃO PRONTUÁRIOS em redes sociais ou em
            comentários e avaliações de produtos;
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          COMO A HARMONIZAÇÃO PRONTUÁRIOS UTILIZA OS SEUS DADOS?
        </h1>
        <p className="w-[80%]">
          Os dados pessoais são utilizados para fornecer, personalizar e
          melhorar a experiência do usuário. Segue uma lista das possíveis
          finalidades para as quais os dados poderão ser utilizados:
        </p>
        <ul className="w-[77%] flex   flex-col gap-2">
          <li className="list-disc">
            Realizar a prestação dos serviços disponíveis em nosso site;
          </li>
          <li className="list-disc">Realizar a identificação do Usuário;</li>
          <li className="list-disc">Enviar os produtos adquiridos;</li>
          <li className="list-disc">
            Entrar em contato com o usuário, caso necessário
          </li>
          <li className="list-disc">
            Auxiliar no diagnóstico e solução de problemas técnicos (RMA –
            Garantia);
          </li>
          <li className="list-disc">
            Desenvolver novas funcionalidades e melhorias;
          </li>
          <li className="list-disc">
            Consultar informações junto as agências de crédito (Serasa, SPC,
            etc);
          </li>
          <li className="list-disc">
            Garantir o cumprimento de obrigação legal ou garantir o exercício
            regular de direitos da HARMONIZAÇÃO PRONTUÁRIOS. Nesses casos,
            podemos, inclusive, apresentar as informações em processos judiciais
            e administrativos, caso necessário;
          </li>
          <li className="list-disc">
            Cumprir ordem judicial, de autoridade competente ou de órgão
            fiscalizador.
          </li>
          <li className="list-disc">Geolocalização:</li>
          <li className="list-disc">
            Segmentar anúncios ou ofertas personalizadas;
          </li>
          <li className="list-disc">
            Para auxiliar nas análises que possam ser utilizadas para proteger
            sua conta e aumentar o nível de segurança dos seus dados cadastrais
            ou, ainda, prevenir possíveis fraudes.
          </li>
          <li className="list-disc">Dados de Navegação:</li>
          <li className="list-disc">
            Para auxiliar no diagnóstico e solução de problema técnicos.
          </li>
          <li className="list-disc">
            Para desenvolver novas funcionalidades e melhorias, melhorando a sua
            experiência com nossos serviços disponíveis.
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          COM QUEM A HARMONIZAÇÃO PRONTUÁRIOS COMPARTILHA OS SEUS DADOS?
        </h1>
        <p className="w-[80%]">
          Sempre que necessário, para executar as atividades acima mencionadas,
          a HARMONIZAÇÃO PRONTUÁRIOS poderá compartilhar os seus dados pessoais
          com prestadores de serviço, parceiros ou com órgãos reguladores. Seus
          dados jamais serão comercializados.
        </p>
        <p className="w-[80%]">
          Segue um resumo dos possíveis cenários em que a HARMONIZAÇÃO
          PRONTUÁRIOS poderá compartilhar os seus dados:
        </p>
        <p className="w-[80%]">
          Prestadores de serviço: para comercializar os produtos vendidos no
          website, a HARMONIZAÇÃO PRONTUÁRIOS conta com a colaboração de
          diferentes prestadores de serviços. Tais prestadores atuam em nome da
          HARMONIZAÇÃO PRONTUÁRIOS, atuando para: realizar a verificação
          antifraude nas compras, intermediar pagamentos, armazenamento na
          nuvem, dentre outros.
        </p>
        <p className="w-[80%]">
          {" "}
          Autoridades judiciais, policiais ou governamentais: caso necessário, a
          HARMONIZAÇÃO PRONTUÁRIOS -poderá fornecer dados pessoais dos Usuários,
          para atender ordem judicial, solicitações de autoridades
          administrativas, obrigação legal ou regulatória, bem como para agir de
          forma colaborativa com autoridades governamentais, em geral em
          investigações envolvendo atos ilícitos.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          ARMAZENAMENTO E TRANSFERÊNCIA INTERNACIONAL DE DADOS
        </h1>
        <p className="w-[80%]">
          Os dados coletados pela HARMONIZAÇÃO PRONTUÁRIOS são armazenados tanto
          no Brasil quanto no exterior. Os dados que são armazenados no exterior
          também seguem as medidas adotadas pela Lei Geral de Proteção de Dados,
          e estão em conformidade com ela, estando os dados armazenados de forma
          segura.{" "}
        </p>
        <p className="w-[80%]">
          A HARMONIZAÇÃO PRONTUÁRIOS adota as melhores técnicas para proteger os
          dados pessoais, inclusive com criptografia, mas é importante deixar
          claro que nenhuma plataforma é 100% segura.
        </p>
        <p className="w-[80%]">
          Caso você esteja preocupado com a integridade dos seus dados, entre em
          contato conosco que iremos lhe auxiliar da melhor forma possível.
        </p>
        <p className="w-[80%]">
          Os seus dados serão mantidos enquanto você for um cliente ativo da
          HARMONIZAÇÃO PRONTUÁRIOS.
        </p>
        <p className="w-[80%]">
          Podemos armazenar os seus dados por um período adicional para caso
          ocorra alguma auditoria, possibilitando a HARMONIZAÇÃO PRONTUÁRIOS
          cumprir com suas obrigações legais e/ou regulatórias. A retenção dos
          dados será feita pelo prazo necessário, respeitando a legislação
          aplicável.{" "}
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          O QUE SÃO COOKIES E TECNOLOGIAS DE MONITORAMENTO? COMO ELES SÃO
          UTILIZADOS?
        </h1>
        <p className="w-[80%]">
          A HARMONIZAÇÃO PRONTUÁRIOS poderá usar tecnologias de monitoramento
          para coletar as informações das atividades realizadas no nosso site,
          caso você aceite.
        </p>
        <p className="w-[80%]">
          Tais informações podem ser utilizadas para identificar problemas no
          uso, captar o comportamento do Usuário para personalizar a sua
          experiência de forma geral, coletando dados de impressão de conteúdo.
        </p>
        <h1 className="font-bold text-xl text-black py-4">
          Veja abaixo algumas das tecnologias que poderão estar presentes no
          site da HARMONIZAÇÃO PRONTUÁRIOS:
        </h1>
        <p className="w-[80%]">
          Cookies: são pequenos arquivos ou informações que podem ser
          armazenadas no seu dispositivo de acesso. A HARMONIZAÇÃO PRONTUÁRIOS
          poderá utilizar cookies para facilitar o uso e adaptar o site aos seus
          interesses e necessidades, bem como para auxiliar a melhoraria dos
          nossos produtos e serviços. Apesar de ficar localizado no seu
          dispositivo, o cookie não dá acesso ao computador em si, nem mesmo
          revela informações além dos dados que o usuário escolhe compartilhar
          conosco. Os cookies simplesmente analisam o tráfego de internet.
        </p>
        <p className="w-[80%]">
          Pixels: os pixels fazem parte do código JavaScript, e possuem a
          finalidade de rastrear e coletar informações sobre as atividades dos
          usuários, permitindo a identificação dos seus padrões de acesso,
          navegação, interesse e compras de produtos, otimizando utilizados para
          otimizar o direcionamento de conteúdo.
        </p>

        <p className="w-[80%]">
          Ferramentas de analytics: são ferramentas que podem coletar
          informações sobre a forma como os Usuários visitam o site da
          HARMONIZAÇÃO PRONTUÁRIOS, quais páginas eles visitam e quando visitam
          tais páginas, outros sites que foram visitados antes, entre outras.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-bold text-xl text-black py-4">
          Caso deseje remover os Cookies, siga os procedimentos indicados pelos
          navegadores mais populares:
        </h1>
        <p className="w-[80%] flex  ">
      <span className="w-[140px]">
        Google Chrome:{" "}
      </span>
        <Link
          href={"https://support.google.com/chrome/answer/95647?hl=pt-BR"}
          target="_blank"
          className="border-b-2 border-blue-300"
        >
          Suporte Google
        </Link>
      </p>
      <p className="w-[80%] flex py-4">
      <span className="w-[140px]">
      
        Internet Explorer:
      </span>
        <Link
          href={
            "http://windows.microsoft.com/pt-br/internet-explorer/delete-manage-cookies#ie=ie-11"
          }
          target="_blank"
          className="border-b-2 border-blue-300"
        >
          Suporte Internet Explorer
        </Link>
      </p>
      <p className="w-[80%] flex">
      <span className="w-[140px]">
        Microsoft Edge:
        </span>
        <Link
          href={
            "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
          }
          target="_blank"
          className="border-b-2 border-blue-300"
        >
        Suporte Microsoft Edge
        </Link>
      
      </p>
      <p className="w-[80%] flex py-4">
      <span className="w-[140px]">
       Mozilla Firefox:
        </span>
       
        <Link
          href={
            "https://support.mozilla.org/pt-BR/kb/limpe-cookies-e-dados-de-sites-no-firefox"
          }
          target="_blank"
          className="border-b-2 border-blue-300"
        >
          Suporte Mozilla Firefox
          </Link>
        
      </p>
      <p className="w-[80%] flex">
        <span className="w-[140px]">

        Safari: 
        </span>
        <Link
          href={
            "https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
          }
          target="_blank"
          className="border-b-2 border-blue-300"
        >
          Suporte Safari
          </Link>
      </p>
      <p className="w-[80%] flex py-4">
        <span className="w-[140px]">

        Opera: 
        </span>
        <Link
          href={
            "https://help.opera.com/en/latest/web-preferences/#cookies"
          }
          target="_blank"
          className="border-b-2 border-blue-300 "
        >
          Suporte Opera
          </Link>
      </p>
      <p className="w-[80%]">
        As informações acima são fornecidas pelos sites oficiais dos próprios
        navegadores. A HARMONIZAÇÃO PRONTUÁRIOS Informática não se
        responsabiliza por danos ou perdas de informações geradas pelo uso
        desses procedimentos.
      </p>
      </div>

      <div className="flex items-center justify-center flex-col gap-2">
      <h1  className="font-bold text-xl text-black py-4">QUAIS SÃO OS DIREITOS DO TITULAR DOS DADOS PESSOAIS?</h1>
      <p className="w-[80%]">
        Conforme previsto na legislação, a HARMONIZAÇÃO PRONTUÁRIOS garante ao
        Usuário os seguintes direitos referentes ao tratamento de seus dados
        pessoais:
      </p>
      <p className="w-[80%]">A confirmação da existência de tratamento de seus dados pessoais;</p>
      <p className="w-[80%]">O acesso aos dados coletados pela HARMONIZAÇÃO PRONTUÁRIOS;</p>
      <p className="w-[80%]">
        A correção de seus dados, caso estes estejam incompletos, inexatos ou
        desatualizados;
      </p>
      <p className="w-[80%]">
        A portabilidade de seus dados pessoais, através da solicitação expressa
        pelo Usuário, conforme previsto na legislação aplicável;A informação
        sobre a possibilidade de não fornecer o seu consentimento, bem como de
        ser informado sobre as consequências, em caso de negativa;
      </p>
      <p className="w-[80%]">
        A informação sobre as entidades públicas e privadas com quem seus dados
        foram compartilhados;
      </p>
      <p className="w-[80%]">
        A possibilidade de revogar o consentimento para tratamento de
        determinados dados pessoais, bem como de solicitar a eliminação dos
        dados tratados com base no consentimento.
      </p>
      <p className="w-[80%]">
        {" "}
        Atenção: caso o Usuário solicite a eliminação de determinados dados, ou
        revogue seu consentimento, o acesso e utilização de determinadas
        funcionalidades da HARMONIZAÇÃO PRONTUÁRIOS, bem como o acesso aos
        serviços prestados poderão ser dificultados ou inviabilizados, caso os
        dados eliminados sejam necessários ao regular processamento dos serviços
        ou das funcionalidades do site.{" "}
      </p>
      <p className="w-[80%]">
        Se a HARMONIZAÇÃO PRONTUÁRIOS enviar ao Usuário mensagens de publicidade
        eletrônica na forma permitida pela legislação aplicável, o Usuário
        poderá, a qualquer momento, retirar o seu consentimento ou declarar a
        sua recusa.{" "}
      </p>
      <p className="w-[80%]">
        As mensagens de publicidade eletrônica que o Usuário recebe da
        HARMONIZAÇÃO PRONTUÁRIOS, como as enviadas por meio de e-mail, incluem
        um mecanismo de recusa dentro da própria mensagem, por exemplo, um link
        para cancelamento da inscrição nos e-mails que lhe enviamos.{" "}
      </p>
      <p className="w-[80%]">CONSERVAÇÃO E EXCLUSÃO DE DADOS</p>
      <p>
        Conservamos os dados pessoais do Usuário enquanto for necessário para
        prestar os serviços da HARMONIZAÇÃO PRONTUÁRIOS.
      </p>
      <p className="w-[80%]">
        A pedido do usuário, vamos eliminar os dados, exceto se for legalmente
        permitido ou obrigatório manter determinados dados, incluindo situações
        como as seguintes:
      </p>
      <p className="w-[80%]">
        Se a HARMONIZAÇÃO PRONTUÁRIOS for obrigada a manter os dados pessoais
        para cumprir com obrigações jurídicas, fiscais, de auditoria e
        contabilidade, retendo os dados pessoais necessários pelo período
        exigido pela legislação aplicável;
      </p>
      <p className="w-[80%]">
        Os dados serão tratados com elevados níveis de proteção e garantindo sua
        privacidade, durante todo o período que você for nosso cliente,
        navegando em nosso site e utilizando nossos produtos, ou potencial
        cliente com quem dividimos nossas ofertas.
      </p>
      <p className="w-[80%]">
        Quando aplicável, e mesmo se você optar por excluir seus dados pessoais
        da nossa base de cadastro, a HARMONIZAÇÃO PRONTUÁRIOS poderá reter
        alguns ou todos os seus dados pessoais por períodos adicionais para
        cumprimento de obrigações legais ou regulatórias, para o exercício
        regular de direitos da HARMONIZAÇÃO PRONTUÁRIOS, eventuais ações
        judiciais, fins de auditoria de diversas naturezas, ou outros prazos
        definidos e fundamentados por bases legais que justifiquem a retenção
        destes dados.{" "}
      </p>
      </div>
      
      <div className="flex items-center justify-center flex-col gap-2">
      <h1 className="font-bold text-xl text-black py-4">
        {" "}
        DÚVIDAS E COMO CONTATAR O ENCARREGADO DE DADOS DA HARMONIZAÇÃO
        PRONTUÁRIOS
      </h1>
      <p className="w-[80%]">
        Se você tiver alguma dúvida sobre esta Política de Privacidade, você
        pode contatar a HARMONIZAÇÃO PRONTUÁRIOS por meio dos nossos canais de
        atendimento disponíveis em{" "}
       
          <Link href={"/contact"} className="font-bold cursor-pointer" target="_blank">Atendimento</Link>
     
        , solicitando as opções sobre a privacidade dos seus dados pessoais, ou,
      </p>
      <p className="w-[80%]">
        Caso queira contatar nosso encarregado da proteção de dados, que é o
        responsável escolhido pela HARMONIZAÇÃO PRONTUÁRIOS para atuar como
        canal de comunicação entre a HARMONIZAÇÃO PRONTUÁRIOS, os usuários e a
        Autoridade Nacional de Proteção de Dados (ANPD), envie um e-mail para:
       
        <Link href={"mailto:suporte@harmonizacaoprontuarios.com.br"} className="font-bold cursor-pointer" target="_blank">suporte@harmonizacao.com</Link>
       
      </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
      <h1 className="font-bold text-xl text-black py-4">
        A HARMONIZAÇÃO PRONTUÁRIOS está à disposição para esclarecer suas
        dúvidas.
      </h1>
      <p className="w-[80%] text-left"> LEGISLAÇÃO E FORO</p>
      <p className="w-[80%] text-base ">
        Esta política será regida de acordo com a Legislação brasileira,
        especialmente a Lei nº 13.709/2018, sendo competente o foro de domicílio
        do Usuário para dirimir qualquer dúvida decorrente deste documento.
      </p>
      <p className="w-[80%]">ÚLTIMA ATUALIZAÇÃO</p>
      <p className="w-[80%] font-bold">Última atualização: 11 de junho de 2021.</p>
      </div>
      
    </section>
  );
};

export default Privacy;
