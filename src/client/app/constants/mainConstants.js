const mainConstants = {
  hostNumbers: [
    {value: 1, label: 1}, {value: 2, label: 2}, {value: 3, label: 3}, {value: 4, label: 4}, {value: 5, label: 5},
    {value: 6, label: 6}, {value: 7, label: 7}, {value: 8, label: 8}, {value: 9, label: 9}, {value: 10, label: 10},
    {value: 20, label: 'entre 10 e 20'},{value: 50, label: 'entre 20 e 50'},{value: 100, label: 'entre 50 e 100'},
    {value: 150, label: 'entre 100 e 150'},{value: 200, label: 'entre 150 e 200'},
    {value: 250, label: 'entre 200 e 250'},{value: 300, label: 'entre 250 e 300'},
    {value: 400, label: 'mais de 300'}
  ],
  hostOptions: [
    {value: 'site', label: 'Site'},{value: 'store', label: 'Loja virtual'},
    {value: 'app', label: 'App'}, {value: 'email', label: 'E-mail'}
  ],
  pluralHostOptions: [
    {value: 'site', label: 'Sites'},{value: 'store', label: 'Lojas virtuais'},
    {value: 'app', label: 'Apps'}, {value: 'email', label: 'E-mails'}
  ]
};

export default mainConstants;
