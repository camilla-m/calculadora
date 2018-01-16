const siteConstants = {
  hostNumbers: [
    {value: 1, label: 1}, {value: 2, label: 2}, {value: 3, label: 3}, {value: 4, label: 4}, {value: 5, label: 5},
    {value: 6, label: 6}, {value: 7, label: 7}, {value: 8, label: 8}, {value: 9, label: 9}, {value: 10, label: 10},
    {value: 'bt10and20', label: 'entre 10 e 20'},{value: 'bt20and50', label: 'entre 20 e 50'},
    {value: 'bt50and100', label: 'entre 50 e 100'},{value: 'bt100and150', label: 'entre 100 e 150'},
    {value: 'bt200and250', label: 'entre 250 e 300'},{value: 'morethan300', label: 'mais de 300'},
  ],
  hostOptions: [
    {value: 'site', label: 'Site'},{value: 'store', label: 'Loja virtual'}, {value: 'app', label: 'App'}, {value: 'email', label: 'E-mail'}
  ],
  pluralHostOptions: [
    {value: 'site', label: 'Sites'},{value: 'store', label: 'Lojas virtuais'}, {value: 'app', label: 'Apps'}, {value: 'email', label: 'E-mails'}
  ],
  purposeOptions: [
    {value: 'personal', label: 'uso pessoal'},{value: 'clients', label: 'uso dos meus clientes'}
  ],
  programmingLanguages: [
    {value: 'php', label: 'PHP'},{value: 'net', label: '.NET'},
    {value: 'other', label: 'Outra linguagem'},{value: 'none', label: 'Não utiliza / não sei a plataforma'}
  ],
  platforms: [
    {value: 'wordpress', label: 'WordPress'},{value: 'joomla', label: 'Joomla'},{value: 'drupal', label: 'Drupal'},
    {value: 'opencart', label: 'OpenCart'},{value: 'prestashop', label: 'PrestaShop'},{value: 'laravel', label: 'Laravel'},
    {value: 'none', label: 'Não utiliza / não sei a plataforma'}
  ],
  environments: [
    {value: 'shared', label: 'compartilhado'},{value: 'dedicated', label: 'dedicado'}
  ],
  databaseNumbers: [
    {value: 1, label: '1 banco'}, {value: 2, label: '2 bancos'}, {value: 3, label: '3 bancos'}, {value: 4, label: '4 bancos'},
    {value: 5, label: '5 bancos'}, {value: 10, label: 'até 10'}, {value: 25, label: 'até 25'}, {value: 50, label: 'mais de 50'}
  ],
  databases: [
    {value: 'mysql', label: 'MySQL Server'},{value: 'sql', label: 'SQL Server'}
  ],
  periods: [
    {value: 1, label: 'Mês'},{value: 30, label: 'Day'}
  ],
  complements: [
    {value: 'each', label: 'cada um deles'},{value: 'all', label: 'todos eles'}
  ],
  sitePlans: [
    {title: 'Site Pro', price: 6, branchPrice: 34},{title: 'Cloud Sites PP', price: 60, branchPrice: 273},
    {title: 'Cloud Sites P', price: 120, branchPrice: 454},{title: 'Cloud Sites M', price: 240, branchPrice: 640},
    {title: 'Cloud Sites G', price: 480, branchPrice: 640},{title: 'Cloud Sites GG', price: 960, branchPrice: 1259}
  ],
  extraSitePrices: {mysql1: 0, mysql2: 10, sql: 15}
};

export default siteConstants;
