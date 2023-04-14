import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  
  data = [{
    id: 1,
    name: 'Bácsi-kápolna',
    location: 'Káptalantóti',
    description: 'Káptalantótitól másfél kilométerre, a Tapolcai- és a Káli-medence találkozásánál találjuk a Szűz Mária tiszteletére építtetett Bácsi-kápolnát. A szőlők között magasló épület melletti kis tisztásról csodálatos panoráma tárul elénk, a Tapolcai-medence tanúhegyei és a szigligeti vár is tisztán látszik a távolban.',
    img: 'bacsi-kapolna.jpg',
    embedMapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=17.526586353778843%2C46.86492447290758%2C17.528989613056186%2C46.86620634088371&amp;layer=mapnik'

  },
  {
    id: 2,
    name: 'Bazaltorgonák tanösvény',
    location: 'Raposka',
    description: 'A Balaton környékét számos tanösvényen keresztül megismerhetjük, ezek közül az egyik leggyönyörűbb területen vezet végig a Szent György-hegyi Bazaltorgonák tanösvény. A közel 4 km hosszú, hétállomásos, magyar és német nyelvű tanösvény egy könnyed körtúrára invitálja a kirándulókat, amely során megismerkedhetünk a hegy és a környék földtörténetével, kőzeteivel és élővilágával, nem utolsósorban pedig a névadó bazaltorgonákról is mindent megtudhatunk.',
    img: 'tanosveny.jpg',
    embedMapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=17.38818168640137%2C46.82449601026205%2C17.46508598327637%2C46.86553148430553&amp;layer=mapnik'
  },
  {
    id: 3,
    name: 'Béke-sztúpa',
    location: 'Zalaszántó',
    description: 'Zalaszántón építették meg Európa egyik legnagyobb sztúpáját, amit 1993-ban felszentelt a Dalai Láma. A hatalmas épület belsejében Buddha tanításait, ereklyéit és egy 24 méteres életfát helyeztek el, ezeket őrzi a Béke-sztúpa. A fákkal övezett terület maga a nyugalom szigete, ahol még meditálni is lehet.',
    img: 'sztupa.jpg',
    embedMapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=19.740629196166996%2C47.961005300572616%2C19.75024223327637%2C47.96602696416119&amp;layer=mapnik'
  }];
}
