import { Component, OnInit } from '@angular/core';
import { GalleryInterface } from 'src/app/models/newsInterfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public galleryInfo: GalleryInterface;
  constructor() {
    this.galleryInfo = {
      title: 'News Gallery',
      news: [
        {
          featurednews: true,
          headline: 'Johnson vows to cut tax as he fights for survival',
          strapline: 'PM defends No 10 leaving drinks as he pleads for Tories’ support',
          location: 'Almendralejo',
          newsdate: 20220510,
          theme: 'Sucesos',
          picture: {
            src: '//www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F65775422-e59c-11ec-9b02-3f136f233710.jpg',
            alt: 'Los bomberos hacen su trabajo',
          },
        },
        {
          featurednews: false,
          headline: 'Titular de la noticia 2',
          strapline:'',
          location: 'Almendralejo',
          newsdate: 20220510,
          theme: 'Sucesos',
          picture: {
            src: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/06/04/16543543367282.jpg',
            alt: 'Los bomberos hacen su trabajo',
          },
        },
        {
          featurednews: false,
          headline: 'Titular de la noticia 3',
          strapline:'',
          location: 'Almendralejo',
          newsdate: 20220510,
          theme: 'Sucesos',
          picture: {
            src: 'https://www.elperiodic.com/archivos/imagenes/noticias/2022/06/06/foto-1_md.jpg',
            alt: 'Los bomberos hacen su trabajo',
          },
        },
        {
          featurednews: false,
          headline: 'Titular de la noticia 4',
          strapline:'',
          location: 'Almendralejo',
          newsdate: 20220510,
          theme: 'Sucesos',
          picture: {
            src: 'https://www.latribunadealbacete.es/media/IMGPortada/2022/96C2296D-A138-5DD6-58352BA39A26A8A3.JPG',
            alt: 'Los bomberos hacen su trabajo',
          },
        },
        {
          featurednews: false,
          headline: 'Titular de la noticia 5',
          strapline:'',
          location: 'Almendralejo',
          newsdate: 20220510,
          theme: 'Sucesos',
          picture: {
            src: 'https://static.lasprovincias.es/www/multimedia/202205/24/media/cortadas/arlandis%20(2)-kZf--984x552@Las%20Provincias.jpg',
            alt: 'Los bomberos hacen su trabajo',
          },
        },
        {
          featurednews: false,
          headline: 'Titular de la noticia 6',
          strapline:'',
          location: 'Almendralejo',
          newsdate: 20220510,
          theme: 'Sucesos',
          picture: {
            src: 'https://static.lasprovincias.es/www/multimedia/202205/24/media/cortadas/arlandis%20(2)-kZf--984x552@Las%20Provincias.jpg',
            alt: 'Los bomberos hacen su trabajo',
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
