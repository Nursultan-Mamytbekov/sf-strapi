import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentContent extends Schema.Component {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface NavigationNavigationItemComponent extends Schema.Component {
  collectionName: 'components_content_navigation_item_components';
  info: {
    displayName: 'NavigationItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    article: Attribute.Relation<
      'navigation.navigation-item-component',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'navigation.navigation-item-component', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.content': ContentContent;
      'navigation.navigation-item-component': NavigationNavigationItemComponent;
      'section.section': SectionSection;
    }
  }
}
