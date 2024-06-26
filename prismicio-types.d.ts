// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Filter Button documents
 */
interface FilterButtonDocumentData {
  /**
   * Value field in *Filter Button*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: filter_button.value
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  value: prismic.SelectField<
    | "Privatfest"
    | "Formel Fest"
    | "Offentligt Event"
    | "Nord-Midtjylland"
    | "Syddanmark"
    | "Sjælland"
    | "Pop"
    | "Classics"
    | "Elektronisk"
    | "Jazz"
  >;

  /**
   * Description field in *Filter Button*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: filter_button.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Filter Button document from Prismic
 *
 * - **API ID**: `filter_button`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FilterButtonDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<FilterButtonDocumentData>,
    "filter_button",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | IntroductionSlice
  | StepsSlice
  | ResultsSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContactFormSlice
  | GetOnListSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Result → Locations*
 */
export interface ResultDocumentDataLocationsItem {
  /**
   * Location field in *Result → Locations*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: result.locations[].location
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  location: prismic.SelectField<"Nord-Midtjylland" | "Syddanmark" | "Sjælland">;
}

/**
 * Item in *Result → Music Styles*
 */
export interface ResultDocumentDataMusicStylesItem {
  /**
   * Music Style field in *Result → Music Styles*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: result.music_styles[].music_style
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  music_style: prismic.SelectField<"Pop" | "Classics" | "Elektronisk" | "Jazz">;
}

/**
 * Item in *Result → Occasions*
 */
export interface ResultDocumentDataOccasionItem {
  /**
   * Occasion field in *Result → Occasions*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: result.occasion[].occasion
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  occasion: prismic.SelectField<
    "Privatfest" | "Formel Fest" | "Offentligt Event"
  >;
}

/**
 * Content for Result documents
 */
interface ResultDocumentData {
  /**
   * Image field in *Result*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: result.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Result*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: result.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Price field in *Result*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: result.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Button Link field in *Result*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: result.button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Locations field in *Result*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: result.locations[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  locations: prismic.GroupField<Simplify<ResultDocumentDataLocationsItem>>;

  /**
   * Music Styles field in *Result*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: result.music_styles[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  music_styles: prismic.GroupField<Simplify<ResultDocumentDataMusicStylesItem>>;

  /**
   * Occasions field in *Result*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: result.occasion[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  occasion: prismic.GroupField<Simplify<ResultDocumentDataOccasionItem>>;
}

/**
 * Result document from Prismic
 *
 * - **API ID**: `result`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ResultDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ResultDocumentData>, "result", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Item in *Step → Filter Buttons*
 */
export interface StepDocumentDataFilterButtonsItem {
  /**
   * Filter Button field in *Step → Filter Buttons*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: step.filter_buttons[].filter_button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  filter_button: prismic.ContentRelationshipField<"filter_button">;
}

/**
 * Content for Step documents
 */
interface StepDocumentData {
  /**
   * Type field in *Step*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: step.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"Anledning" | "Lokation" | "Budget" | "Musik">;

  /**
   * Question field in *Step*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: step.question
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.TitleField;

  /**
   * Filter Buttons field in *Step*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: step.filter_buttons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  filter_buttons: prismic.GroupField<
    Simplify<StepDocumentDataFilterButtonsItem>
  >;
}

/**
 * Step document from Prismic
 *
 * - **API ID**: `step`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StepDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<StepDocumentData>, "step", Lang>;

export type AllDocumentTypes =
  | FilterButtonDocument
  | HomepageDocument
  | PageDocument
  | ResultDocument
  | SettingsDocument
  | StepDocument;

/**
 * Primary content in *ContactForm → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
  /**
   * Heading field in *ContactForm → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Outro field in *ContactForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.outro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  outro: prismic.RichTextField;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;

/**
 * Primary content in *GetOnList → Primary*
 */
export interface GetOnListSliceDefaultPrimary {
  /**
   * Heading1 field in *GetOnList → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.heading1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading1: prismic.TitleField;

  /**
   * Body1 field in *GetOnList → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.body1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body1: prismic.RichTextField;

  /**
   * Heading2 field in *GetOnList → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.heading2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading2: prismic.TitleField;

  /**
   * Body2 field in *GetOnList → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.body2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body2: prismic.RichTextField;

  /**
   * Heading3 field in *GetOnList → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.heading3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading3: prismic.TitleField;

  /**
   * Body3 field in *GetOnList → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.body3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body3: prismic.RichTextField;

  /**
   * Heading4 field in *GetOnList → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.heading4
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading4: prismic.TitleField;

  /**
   * Body4 field in *GetOnList → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.primary.body4
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body4: prismic.RichTextField;
}

/**
 * Primary content in *GetOnList → Items*
 */
export interface GetOnListSliceDefaultItem {
  /**
   * Code field in *GetOnList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.items[].code
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  code: prismic.KeyTextField;

  /**
   * Link field in *GetOnList → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Link Text field in *GetOnList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_on_list.items[].link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;
}

/**
 * Default variation for GetOnList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GetOnListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GetOnListSliceDefaultPrimary>,
  Simplify<GetOnListSliceDefaultItem>
>;

/**
 * Slice variation for *GetOnList*
 */
type GetOnListSliceVariation = GetOnListSliceDefault;

/**
 * GetOnList Shared Slice
 *
 * - **API ID**: `get_on_list`
 * - **Description**: GetOnList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GetOnListSlice = prismic.SharedSlice<
  "get_on_list",
  GetOnListSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceNoButtonPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * No Button variation for Hero Slice
 *
 * - **API ID**: `noButton`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceNoButton = prismic.SharedSliceVariation<
  "noButton",
  Simplify<HeroSliceNoButtonPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceNoButton;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Introduction → Primary*
 */
export interface IntroductionSliceDefaultPrimary {
  /**
   * Heading field in *Introduction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Introduction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Introduction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Introduction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Introduction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroductionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Introduction → Primary*
 */
export interface IntroductionSliceImageFirstPrimary {
  /**
   * Image field in *Introduction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Heading field in *Introduction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Introduction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Introduction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Image First variation for Introduction Slice
 *
 * - **API ID**: `imageFirst`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSliceImageFirst = prismic.SharedSliceVariation<
  "imageFirst",
  Simplify<IntroductionSliceImageFirstPrimary>,
  never
>;

/**
 * Slice variation for *Introduction*
 */
type IntroductionSliceVariation =
  | IntroductionSliceDefault
  | IntroductionSliceImageFirst;

/**
 * Introduction Shared Slice
 *
 * - **API ID**: `introduction`
 * - **Description**: Introduction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSlice = prismic.SharedSlice<
  "introduction",
  IntroductionSliceVariation
>;

/**
 * Primary content in *Results → Items*
 */
export interface ResultsSliceDefaultItem {
  /**
   * Result field in *Results → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: results.items[].result
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  result: prismic.ContentRelationshipField<"result">;
}

/**
 * Default variation for Results Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ResultsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ResultsSliceDefaultItem>
>;

/**
 * Slice variation for *Results*
 */
type ResultsSliceVariation = ResultsSliceDefault;

/**
 * Results Shared Slice
 *
 * - **API ID**: `results`
 * - **Description**: Results
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ResultsSlice = prismic.SharedSlice<
  "results",
  ResultsSliceVariation
>;

/**
 * Primary content in *Steps → Items*
 */
export interface StepsSliceDefaultItem {
  /**
   * Step field in *Steps → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: steps.items[].step
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  step: prismic.ContentRelationshipField<"step">;
}

/**
 * Default variation for Steps Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<StepsSliceDefaultItem>
>;

/**
 * Slice variation for *Steps*
 */
type StepsSliceVariation = StepsSliceDefault;

/**
 * Steps Shared Slice
 *
 * - **API ID**: `steps`
 * - **Description**: Steps
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StepsSlice = prismic.SharedSlice<"steps", StepsSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FilterButtonDocument,
      FilterButtonDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ResultDocument,
      ResultDocumentData,
      ResultDocumentDataLocationsItem,
      ResultDocumentDataMusicStylesItem,
      ResultDocumentDataOccasionItem,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      StepDocument,
      StepDocumentData,
      StepDocumentDataFilterButtonsItem,
      AllDocumentTypes,
      ContactFormSlice,
      ContactFormSliceDefaultPrimary,
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      GetOnListSlice,
      GetOnListSliceDefaultPrimary,
      GetOnListSliceDefaultItem,
      GetOnListSliceVariation,
      GetOnListSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceNoButtonPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceNoButton,
      IntroductionSlice,
      IntroductionSliceDefaultPrimary,
      IntroductionSliceImageFirstPrimary,
      IntroductionSliceVariation,
      IntroductionSliceDefault,
      IntroductionSliceImageFirst,
      ResultsSlice,
      ResultsSliceDefaultItem,
      ResultsSliceVariation,
      ResultsSliceDefault,
      StepsSlice,
      StepsSliceDefaultItem,
      StepsSliceVariation,
      StepsSliceDefault,
    };
  }
}
