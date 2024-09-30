const initialState = {
  products: [
      {id: 1, title: 'Сергей', family: 'Митрофанов', father: 'Сергеевич', image: 'https://sun9-63.userapi.com/s/v1/if1/R2GIQ7I8k7hIg4Lg2Os_S_ce9I27Ed4f4g1wKv2mSzyGbEm_PajDciXhVFqctK119PMEn98g.jpg?size=1280x949&quality=96&type=album', age: 21, exp: 36, speciality: "программная инженерия", tags: "IT, development, senior", git: "https://github.com/LebedevDanila", amount: 1},
      {id: 2, title: 'Данила', family: 'Широков', father: 'Дмитриевич', image: 'https://sun9-12.userapi.com/s/v1/if1/QaBtQNE_TjJAl07k1Gm2OYVRtrOEc85p_659fk_frTFsDZnPLtuh6P_9YQBBYGFpA655GbtZ.jpg?size=720x866&quality=96&type=album', age: 21, exp: 3, speciality: "прикладная информатика", tags: "IT, development, junior", git: "https://github.com/LebedevDanila", amount: 1},
      {id: 3, title: 'Ксения', family: 'Тюгаева', father: 'Алексеевна', image: 'https://sun9-84.userapi.com/s/v1/if2/d2HNrB5ZHoy_EX6B8j_Qpo9MV01GVtT9EvnEgTLJ11XjhToExT1Oj1Y1yqxuIhsAju0N_cWo5u22IIUp6TQTuDRR.jpg?size=1280x1085&quality=95&type=album', age: 19, exp: 40, speciality:"вычислительная техника", tags: "IT, development, middle", git: "https://github.com/LebedevDanila", amount: 1},
      {id: 4, title: 'Степан', family: 'Гущин', father: 'Иванович', image: 'https://sun9-10.userapi.com/s/v1/if1/-_UF0K0I39W9J6AvxpI9GoFlSszXThM0RxS3MDHL8xvamkfHEXE6imL_y7oCvTjDva31mbMF.jpg?size=807x540&quality=96&type=album', age:  '21 год', exp: 5,  speciality:"Применение специальных систем", tags: "IT, development, middle", git: "https://github.com/LebedevDanila", amount: 1},
      {id: 5, title: 'Денис', family: 'Достин', father: 'Константинович', image: 'https://ic.pics.livejournal.com/imhotype/24051864/433166/433166_original.png', age: 21, exp: 3, speciality:"Дизайн ландшафтов", tags: "IT, development", git: "https://github.com/LebedevDanila", amount: 1},
      {id: 6, title: 'Аяз', family: 'Шабтудинов', father: 'Карлович', image: 'https://salid.ru/sites/default/files/author/shabutdinov-ayaz-foto.png', age: 31, exp: 9, speciality:"Бизнес коуч", tags: "IT, middle", git: "https://github.com/LebedevDanila", amount: 1}
  ]
};

const productReducer = (state = initialState, action) => {

    return state;
};

export default productReducer;