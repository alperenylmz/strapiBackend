import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LogosCoinPlaces extends Struct.ComponentSchema {
  collectionName: 'components_logos_coin_places';
  info: {
    displayName: 'coinPlaces';
    description: '';
  };
  attributes: {
    coinPlaces: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface LayoutVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_video_sections';
  info: {
    displayName: 'Video Section';
    description: '';
  };
  attributes: {
    brnBackgroundGif: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LayoutStrategicPriorities extends Struct.ComponentSchema {
  collectionName: 'components_layout_strategic_priorities';
  info: {
    displayName: 'strategicPriorities';
    description: '';
  };
  attributes: {
    strategicTitle: Schema.Attribute.String;
    strategicDescription: Schema.Attribute.Blocks;
    strategicBlock: Schema.Attribute.Component<'blocks.strategic-blocks', true>;
  };
}

export interface LayoutOurPartners extends Struct.ComponentSchema {
  collectionName: 'components_layout_our_partners';
  info: {
    displayName: 'ourPartners';
    description: '';
  };
  attributes: {
    ourPartners: Schema.Attribute.String;
    ourPartnerDescription: Schema.Attribute.Blocks;
    ourPartnersBlocks: Schema.Attribute.Component<'blocks.partner-block', true>;
  };
}

export interface LayoutMailSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_mail_sections';
  info: {
    displayName: 'mailSection';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.Blocks;
    Description: Schema.Attribute.Blocks;
  };
}

export interface LayoutAbout extends Struct.ComponentSchema {
  collectionName: 'components_layout_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    coinSites: Schema.Attribute.Component<'logos.coin-places', true>;
    brnTitle: Schema.Attribute.String;
    brnDescription: Schema.Attribute.Blocks;
    totalSupply: Schema.Attribute.Integer;
    maxSupply: Schema.Attribute.Integer;
    lineGraph: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface BlocksStrategicBlocks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_strategic_blocks';
  info: {
    displayName: 'strategicBlocks';
    description: '';
  };
  attributes: {
    strategicIcon: Schema.Attribute.Media<'images' | 'files'>;
    strategicTitle: Schema.Attribute.String;
    strategicDescription: Schema.Attribute.Blocks;
  };
}

export interface BlocksPartnerBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_partner_blocks';
  info: {
    displayName: 'partnerBlock';
    description: '';
  };
  attributes: {
    partnerIcon: Schema.Attribute.Media<'images' | 'files'>;
    partnerDescription: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'logos.coin-places': LogosCoinPlaces;
      'layout.video-section': LayoutVideoSection;
      'layout.strategic-priorities': LayoutStrategicPriorities;
      'layout.our-partners': LayoutOurPartners;
      'layout.mail-section': LayoutMailSection;
      'layout.about': LayoutAbout;
      'blocks.strategic-blocks': BlocksStrategicBlocks;
      'blocks.partner-block': BlocksPartnerBlock;
    }
  }
}
