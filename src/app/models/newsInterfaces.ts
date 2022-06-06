export interface NavigatorInterface {
    content: string,
    link: string
}

export interface HeroInterface {
    subtitle: string;
    picture: PictureInterface
}

export interface GalleryInterface{
    title: string
    news: SuperheroInterface[];
}


export interface SuperheroInterface{
    headline: string,
    strapline: string,
    location: string,
    newsdate: number,
    theme: string,
    picture: PictureInterface,
    featurednews: boolean,
}

export interface PictureInterface {
    src: string;
    alt: string
}

export interface FooterInterface{
    copyright: string
}