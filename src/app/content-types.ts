import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeContactListingFields {
    title?: Contentful.EntryFields.Text;
    value?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    link?: Contentful.EntryFields.Text;
    /*
    organization?: Contentful.EntryFields.Symbol;
    date?: Contentful.EntryFields.Date;
    skills?: Contentful.EntryFields.Symbol[];*/
}

export interface TypeTitleContentListingFields {
    title?: Contentful.EntryFields.Text;
    content?: CFRichTextTypes.Block | CFRichTextTypes.Inline;    
    
}

export type TypeContactListing = Contentful.Entry<TypeContactListingFields>;
export type TypeTitleContentListing = Contentful.Entry<TypeTitleContentListingFields>;