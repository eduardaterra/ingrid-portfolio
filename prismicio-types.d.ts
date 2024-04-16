// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = never;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Content for IntroductionBanner documents
 */
interface IntroductionbannerDocumentData {
  /**
   * image field in *IntroductionBanner*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: introductionbanner.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *IntroductionBanner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introductionbanner.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *IntroductionBanner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introductionbanner.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * IntroductionBanner document from Prismic
 *
 * - **API ID**: `introductionbanner`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IntroductionbannerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<IntroductionbannerDocumentData>,
    "introductionbanner",
    Lang
  >;

type JobDocumentDataSlicesSlice = ImageFullSlice | VideoSlice | ImageGridSlice;

/**
 * Content for Job documents
 */
interface JobDocumentData {
  /**
   * Title field in *Job*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: job.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Job*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: job.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * MainImage field in *Job*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: job.mainimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mainimage: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Job*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: job.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<JobDocumentDataSlicesSlice>;
}

/**
 * Job document from Prismic
 *
 * - **API ID**: `job`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type JobDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<JobDocumentData>, "job", Lang>;

/**
 * Item in *Preview → preview*
 */
export interface PreviewDocumentDataPreviewItem {
  /**
   * image field in *Preview → preview*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: preview.preview[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *Preview → preview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preview.preview[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Preview → preview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preview.preview[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * link field in *Preview → preview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preview.preview[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Content for Preview documents
 */
interface PreviewDocumentData {
  /**
   * title field in *Preview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preview.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * preview field in *Preview*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: preview.preview[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  preview: prismic.GroupField<Simplify<PreviewDocumentDataPreviewItem>>;
}

/**
 * Preview document from Prismic
 *
 * - **API ID**: `preview`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PreviewDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PreviewDocumentData>,
    "preview",
    Lang
  >;

/**
 * Item in *Suggestions → suggestionsGroup*
 */
export interface SuggestionsDocumentDataSuggestionsgroupItem {
  /**
   * text field in *Suggestions → suggestionsGroup*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: suggestions.suggestionsgroup[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Content for Suggestions documents
 */
interface SuggestionsDocumentData {
  /**
   * suggestionsGroup field in *Suggestions*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: suggestions.suggestionsgroup[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  suggestionsgroup: prismic.GroupField<
    Simplify<SuggestionsDocumentDataSuggestionsgroupItem>
  >;
}

/**
 * Suggestions document from Prismic
 *
 * - **API ID**: `suggestions`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SuggestionsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SuggestionsDocumentData>,
    "suggestions",
    Lang
  >;

export type AllDocumentTypes =
  | HomeDocument
  | IntroductionbannerDocument
  | JobDocument
  | PreviewDocument
  | SuggestionsDocument;

/**
 * Primary content in *ImageFull → Primary*
 */
export interface ImageFullSliceDefaultPrimary {
  /**
   * Image field in *ImageFull → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_full.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageFull Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageFullSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageFullSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageFull*
 */
type ImageFullSliceVariation = ImageFullSliceDefault;

/**
 * ImageFull Shared Slice
 *
 * - **API ID**: `image_full`
 * - **Description**: ImageFull
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageFullSlice = prismic.SharedSlice<
  "image_full",
  ImageFullSliceVariation
>;

/**
 * Primary content in *ImageGrid → Primary*
 */
export interface ImageGridSliceDefaultPrimary {
  /**
   * FirstImage field in *ImageGrid → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_grid.primary.firstimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  firstimage: prismic.ImageField<never>;

  /**
   * SecondImage field in *ImageGrid → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_grid.primary.secondimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  secondimage: prismic.ImageField<never>;
}

/**
 * Default variation for ImageGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageGrid*
 */
type ImageGridSliceVariation = ImageGridSliceDefault;

/**
 * ImageGrid Shared Slice
 *
 * - **API ID**: `image_grid`
 * - **Description**: ImageGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGridSlice = prismic.SharedSlice<
  "image_grid",
  ImageGridSliceVariation
>;

/**
 * Primary content in *Video → Primary*
 */
export interface VideoSliceDefaultPrimary {
  /**
   * video field in *Video → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: video.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;
}

/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video*
 */
type VideoSliceVariation = VideoSliceDefault;

/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSlice = prismic.SharedSlice<"video", VideoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      IntroductionbannerDocument,
      IntroductionbannerDocumentData,
      JobDocument,
      JobDocumentData,
      JobDocumentDataSlicesSlice,
      PreviewDocument,
      PreviewDocumentData,
      PreviewDocumentDataPreviewItem,
      SuggestionsDocument,
      SuggestionsDocumentData,
      SuggestionsDocumentDataSuggestionsgroupItem,
      AllDocumentTypes,
      ImageFullSlice,
      ImageFullSliceDefaultPrimary,
      ImageFullSliceVariation,
      ImageFullSliceDefault,
      ImageGridSlice,
      ImageGridSliceDefaultPrimary,
      ImageGridSliceVariation,
      ImageGridSliceDefault,
      VideoSlice,
      VideoSliceDefaultPrimary,
      VideoSliceVariation,
      VideoSliceDefault,
    };
  }
}
