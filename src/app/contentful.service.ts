import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

import { TypeContactListingFields, TypeTitleContentListingFields } from './content-types';
const CONFIG = {
  space: '9u9xxi5g73b9',
  accessToken: 'VXjMYH5hwVA-pD5t9glDLSbDIcveeveI9QtWPSkAhj4',

  contentTypeIds: {
    sections: 'Section',
    contact: 'contact',
    technical: 'technical',
    homeData: 'homeData'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  getSections(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.sections
    }, query))
    .then(res => res.items);
  }

  getContact(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries<TypeContactListingFields>(Object.assign({
      content_type: CONFIG.contentTypeIds.contact
    }, query))
    .then(res => res.items);
  }

  getTechnical(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries<TypeTitleContentListingFields>(Object.assign({
      content_type: CONFIG.contentTypeIds.technical
    }, query))
    .then(res => res.items);
  }

  getHome(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries<TypeTitleContentListingFields>(Object.assign({
      content_type: CONFIG.contentTypeIds.homeData
    }, query))
    .then(res => res.items);
  }
  constructor() { }
}
