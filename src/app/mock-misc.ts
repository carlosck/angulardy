import { CommonCardDataItem }from './common-card/common-card-data-item';

export const MiscItems : CommonCardDataItem[]=[
  {
    title: 'Dark Path',
    link: 'https://rdy.mx/darkpath/',
    image: 'https://www.rdy.mx/images/nextImageExportOptimizer/darkpath-opt-828.WEBP',
    content: [
      'Unity Webgl',
    ]
  },
  {
    title: 'Flutter App',
    link: 'https://github.com/carlosck/caprishop',
    image: 'https://www.rdy.mx/images/nextImageExportOptimizer/flutter-opt-828.WEBP',
    content: [
      'Flutter IOS Android ',
    ]
  },
  {
    title: 'Android App',
    link: 'https://play.google.com/store/apps/details?id=mx.rdy.glucosemonitoring',
    image: 'https://www.rdy.mx/images/nextImageExportOptimizer/androidglucose-opt-828.WEBP',
    content: [
      'Java Android',
    ]
  },

  ];
/*
https://graphql.contentful.com/content/v1/spaces/9u9xxi5g73b9/environments/master
query {
  sectionCollection{
    items{
      title      
      cardsCollection(limit: 10){
        items{
          ...on Card{
            title,
            link,
            imageurl,
            content{
              json
            }
          }
        }
      }
    }
  }
}
*/