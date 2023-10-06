type article = { body: string; id: number; title: string; userId: number };

type author = {
  id: 1;
  name: 'Leanne Graham';
  username: 'Bret';
  email: 'Sincere@april.biz';
  address: {
    street: 'Kulas Light';
    suite: 'Apt. 556';
    city: 'Gwenborough';
    zipcode: '92998-3874';
    geo: {
      lat: '-37.3159';
      lng: '81.1496';
    };
  };
  phone: '1-770-736-8031 x56442';
  website: 'hildegard.org';
  company: {
    name: 'Romaguera-Crona';
    catchPhrase: 'Multi-layered client-server neural-net';
    bs: 'harness real-time e-markets';
  };
};

type photo = {
  id: '0';
  author: 'Alejandro Escamilla';
  width: 5000;
  height: 3333;
  url: 'https://unsplash.com/photos/yC-Yzbqy7PY';
  download_url: 'https://picsum.photos/id/0/5000/3333';
};
