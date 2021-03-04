export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  flags?: Maybe<SiteFlags>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteFlags = {
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>
  FAST_DEV?: Maybe<Scalars['Boolean']>
  DEV_SSR?: Maybe<Scalars['Boolean']>
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<Scalars['Boolean']>
  PARALLEL_SOURCING?: Maybe<Scalars['Boolean']>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>
}

export type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF'

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE'

export type ImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION'

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY'

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars['JSON']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  avifOptions?: Maybe<AvifOptions>
  transformOptions?: Maybe<TransformOptions>
  backgroundColor?: Maybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE'

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>
}

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>
  progressive?: Maybe<Scalars['Boolean']>
}

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>
  compressionSpeed?: Maybe<Scalars['Int']>
}

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>
}

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>
  lossless?: Maybe<Scalars['Boolean']>
  speed?: Maybe<Scalars['Int']>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
}

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type MdxFrontmatter = {
  title: Scalars['String']
  team?: Maybe<Team>
  participants?: Maybe<Array<Maybe<Member>>>
  duration?: Maybe<Scalars['Int']>
  startTime?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  topics?: Maybe<Array<Maybe<Scalars['String']>>>
  teamName?: Maybe<Scalars['String']>
}

export type MdxFrontmatterStartTimeArgs = {
  format?: Scalars['String']
}

export type MdxFrontmatterEndTimeArgs = {
  format?: Scalars['String']
}

export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type HeadingsMdx = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type Mdx = Node & {
  rawBody: Scalars['String']
  fileAbsolutePath: Scalars['String']
  frontmatter?: Maybe<MdxFrontmatter>
  slug?: Maybe<Scalars['String']>
  body: Scalars['String']
  excerpt: Scalars['String']
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>
  html?: Maybe<Scalars['String']>
  mdxAST?: Maybe<Scalars['JSON']>
  tableOfContents?: Maybe<Scalars['JSON']>
  timeToRead?: Maybe<Scalars['Int']>
  wordCount?: Maybe<MdxWordCount>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
}

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
}

export type TeamName = 'DataAnalitics' | 'WebDev' | 'Beginner' | 'AppDev'

export type MemberName =
  | 'YutaUra'
  | 'YoshiyukiKobayashi'
  | 'YosukeMuroi'
  | 'MarinMiwa'
  | 'TakashiNemoto'
  | 'FujitaItsuki'
  | 'ShoKohiyama'
  | 'KotaroTakamori'
  | 'TsuyoshiMatsumaru'
  | 'KentaroMorota'
  | 'KakeruSato'
  | 'FujiharuKawahara'
  | 'RenAgo'
  | 'TenichiInaba'

export type Member = Node & {
  name: MemberName
  description?: Maybe<Scalars['String']>
  skills?: Maybe<Array<MemberSkill>>
  teams?: Maybe<Array<TeamMember>>
  contributions?: Maybe<Array<Contribution>>
  belongs: MemberBelongs
  position?: Maybe<Posision>
  isGraduated?: Maybe<Scalars['Boolean']>
  activities?: Maybe<Array<Maybe<Mdx>>>
  nameJa?: Maybe<Scalars['String']>
  joinedAt?: Maybe<Scalars['Date']>
  social?: Maybe<MemberSocial>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MemberJoinedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type MemberSocial = {
  github?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
}

export type Posision = 'Leader' | 'SubLeader' | 'Goblin'

export type Contribution = Node & {
  portfolio: Portfolio
  member: Member
  memberName?: Maybe<Scalars['String']>
  portfolioName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Portfolio = Node & {
  contributors: Array<Contribution>
  name?: Maybe<Scalars['String']>
  nameJa?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MemberBelongs = {
  facultyName: Scalars['String']
  faculty: Faculty
  memberName: MemberName
  member: Member
  grade: Scalars['Int']
}

export type Faculty = Node & {
  members?: Maybe<Array<Member>>
  name?: Maybe<Scalars['String']>
  nameJa?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MemberSkill = Node & {
  skill: Skill
  member: Member
  level?: Maybe<Scalars['Int']>
  skillName?: Maybe<Scalars['String']>
  memberName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Skill = Node & {
  members?: Maybe<Array<MemberSkill>>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type TeamMember = Node & {
  member: Member
  team: Team
  memberName?: Maybe<Scalars['String']>
  leader?: Maybe<Scalars['Boolean']>
  teamName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Team = Node & {
  name: TeamName
  activities?: Maybe<Array<Maybe<Mdx>>>
  members: Array<TeamMember>
  nameJa?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginPluginOptions = {
  alias?: Maybe<SitePluginPluginOptionsAlias>
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>
  name?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  lessBabel?: Maybe<Scalars['Boolean']>
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  root?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  failOnError?: Maybe<Scalars['Boolean']>
  output?: Maybe<Scalars['String']>
  createLinkInHead?: Maybe<Scalars['Boolean']>
  pathCheck?: Maybe<Scalars['Boolean']>
  allExtensions?: Maybe<Scalars['Boolean']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsAlias = {
  _?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  mdx?: Maybe<Mdx>
  allMdx: MdxConnection
  member?: Maybe<Member>
  allMember: MemberConnection
  contribution?: Maybe<Contribution>
  allContribution: ContributionConnection
  portfolio?: Maybe<Portfolio>
  allPortfolio: PortfolioConnection
  faculty?: Maybe<Faculty>
  allFaculty: FacultyConnection
  memberSkill?: Maybe<MemberSkill>
  allMemberSkill: MemberSkillConnection
  skill?: Maybe<Skill>
  allSkill: SkillConnection
  teamMember?: Maybe<TeamMember>
  allTeamMember: TeamMemberConnection
  team?: Maybe<Team>
  allTeam: TeamConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  childrenMdx?: Maybe<MdxFilterListInput>
  childMdx?: Maybe<MdxFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  flags?: Maybe<SiteFlagsFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>
  sort?: Maybe<MdxSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMemberArgs = {
  name?: Maybe<MemberNameQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  skills?: Maybe<MemberSkillFilterListInput>
  teams?: Maybe<TeamMemberFilterListInput>
  contributions?: Maybe<ContributionFilterListInput>
  belongs?: Maybe<MemberBelongsFilterInput>
  position?: Maybe<PosisionQueryOperatorInput>
  isGraduated?: Maybe<BooleanQueryOperatorInput>
  activities?: Maybe<MdxFilterListInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  joinedAt?: Maybe<DateQueryOperatorInput>
  social?: Maybe<MemberSocialFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMemberArgs = {
  filter?: Maybe<MemberFilterInput>
  sort?: Maybe<MemberSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContributionArgs = {
  portfolio?: Maybe<PortfolioFilterInput>
  member?: Maybe<MemberFilterInput>
  memberName?: Maybe<StringQueryOperatorInput>
  portfolioName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContributionArgs = {
  filter?: Maybe<ContributionFilterInput>
  sort?: Maybe<ContributionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPortfolioArgs = {
  contributors?: Maybe<ContributionFilterListInput>
  name?: Maybe<StringQueryOperatorInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPortfolioArgs = {
  filter?: Maybe<PortfolioFilterInput>
  sort?: Maybe<PortfolioSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryFacultyArgs = {
  members?: Maybe<MemberFilterListInput>
  name?: Maybe<StringQueryOperatorInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFacultyArgs = {
  filter?: Maybe<FacultyFilterInput>
  sort?: Maybe<FacultySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMemberSkillArgs = {
  skill?: Maybe<SkillFilterInput>
  member?: Maybe<MemberFilterInput>
  level?: Maybe<IntQueryOperatorInput>
  skillName?: Maybe<StringQueryOperatorInput>
  memberName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMemberSkillArgs = {
  filter?: Maybe<MemberSkillFilterInput>
  sort?: Maybe<MemberSkillSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySkillArgs = {
  members?: Maybe<MemberSkillFilterListInput>
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSkillArgs = {
  filter?: Maybe<SkillFilterInput>
  sort?: Maybe<SkillSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryTeamMemberArgs = {
  member?: Maybe<MemberFilterInput>
  team?: Maybe<TeamFilterInput>
  memberName?: Maybe<StringQueryOperatorInput>
  leader?: Maybe<BooleanQueryOperatorInput>
  teamName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllTeamMemberArgs = {
  filter?: Maybe<TeamMemberFilterInput>
  sort?: Maybe<TeamMemberSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryTeamArgs = {
  name?: Maybe<TeamNameQueryOperatorInput>
  activities?: Maybe<MdxFilterListInput>
  members?: Maybe<TeamMemberFilterListInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllTeamArgs = {
  filter?: Maybe<TeamFilterInput>
  sort?: Maybe<TeamSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  team?: Maybe<TeamFilterInput>
  participants?: Maybe<MemberFilterListInput>
  duration?: Maybe<IntQueryOperatorInput>
  startTime?: Maybe<StringQueryOperatorInput>
  endTime?: Maybe<StringQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  topics?: Maybe<StringQueryOperatorInput>
  teamName?: Maybe<StringQueryOperatorInput>
}

export type TeamFilterInput = {
  name?: Maybe<TeamNameQueryOperatorInput>
  activities?: Maybe<MdxFilterListInput>
  members?: Maybe<TeamMemberFilterListInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type TeamNameQueryOperatorInput = {
  eq?: Maybe<TeamName>
  ne?: Maybe<TeamName>
  in?: Maybe<Array<Maybe<TeamName>>>
  nin?: Maybe<Array<Maybe<TeamName>>>
}

export type TeamMemberFilterListInput = {
  elemMatch?: Maybe<TeamMemberFilterInput>
}

export type TeamMemberFilterInput = {
  member?: Maybe<MemberFilterInput>
  team?: Maybe<TeamFilterInput>
  memberName?: Maybe<StringQueryOperatorInput>
  leader?: Maybe<BooleanQueryOperatorInput>
  teamName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MemberFilterInput = {
  name?: Maybe<MemberNameQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  skills?: Maybe<MemberSkillFilterListInput>
  teams?: Maybe<TeamMemberFilterListInput>
  contributions?: Maybe<ContributionFilterListInput>
  belongs?: Maybe<MemberBelongsFilterInput>
  position?: Maybe<PosisionQueryOperatorInput>
  isGraduated?: Maybe<BooleanQueryOperatorInput>
  activities?: Maybe<MdxFilterListInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  joinedAt?: Maybe<DateQueryOperatorInput>
  social?: Maybe<MemberSocialFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MemberNameQueryOperatorInput = {
  eq?: Maybe<MemberName>
  ne?: Maybe<MemberName>
  in?: Maybe<Array<Maybe<MemberName>>>
  nin?: Maybe<Array<Maybe<MemberName>>>
}

export type MemberSkillFilterListInput = {
  elemMatch?: Maybe<MemberSkillFilterInput>
}

export type MemberSkillFilterInput = {
  skill?: Maybe<SkillFilterInput>
  member?: Maybe<MemberFilterInput>
  level?: Maybe<IntQueryOperatorInput>
  skillName?: Maybe<StringQueryOperatorInput>
  memberName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SkillFilterInput = {
  members?: Maybe<MemberSkillFilterListInput>
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContributionFilterListInput = {
  elemMatch?: Maybe<ContributionFilterInput>
}

export type ContributionFilterInput = {
  portfolio?: Maybe<PortfolioFilterInput>
  member?: Maybe<MemberFilterInput>
  memberName?: Maybe<StringQueryOperatorInput>
  portfolioName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PortfolioFilterInput = {
  contributors?: Maybe<ContributionFilterListInput>
  name?: Maybe<StringQueryOperatorInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MemberBelongsFilterInput = {
  facultyName?: Maybe<StringQueryOperatorInput>
  faculty?: Maybe<FacultyFilterInput>
  memberName?: Maybe<MemberNameQueryOperatorInput>
  member?: Maybe<MemberFilterInput>
  grade?: Maybe<IntQueryOperatorInput>
}

export type FacultyFilterInput = {
  members?: Maybe<MemberFilterListInput>
  name?: Maybe<StringQueryOperatorInput>
  nameJa?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MemberFilterListInput = {
  elemMatch?: Maybe<MemberFilterInput>
}

export type PosisionQueryOperatorInput = {
  eq?: Maybe<Posision>
  ne?: Maybe<Posision>
  in?: Maybe<Array<Maybe<Posision>>>
  nin?: Maybe<Array<Maybe<Posision>>>
}

export type MemberSocialFilterInput = {
  github?: Maybe<StringQueryOperatorInput>
  twitter?: Maybe<StringQueryOperatorInput>
}

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>
}

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___team___name'
  | 'childrenMdx___frontmatter___team___activities'
  | 'childrenMdx___frontmatter___team___members'
  | 'childrenMdx___frontmatter___team___nameJa'
  | 'childrenMdx___frontmatter___team___id'
  | 'childrenMdx___frontmatter___team___children'
  | 'childrenMdx___frontmatter___participants'
  | 'childrenMdx___frontmatter___participants___name'
  | 'childrenMdx___frontmatter___participants___description'
  | 'childrenMdx___frontmatter___participants___skills'
  | 'childrenMdx___frontmatter___participants___teams'
  | 'childrenMdx___frontmatter___participants___contributions'
  | 'childrenMdx___frontmatter___participants___position'
  | 'childrenMdx___frontmatter___participants___isGraduated'
  | 'childrenMdx___frontmatter___participants___activities'
  | 'childrenMdx___frontmatter___participants___nameJa'
  | 'childrenMdx___frontmatter___participants___joinedAt'
  | 'childrenMdx___frontmatter___participants___id'
  | 'childrenMdx___frontmatter___participants___children'
  | 'childrenMdx___frontmatter___duration'
  | 'childrenMdx___frontmatter___startTime'
  | 'childrenMdx___frontmatter___endTime'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___topics'
  | 'childrenMdx___frontmatter___teamName'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___team___name'
  | 'childMdx___frontmatter___team___activities'
  | 'childMdx___frontmatter___team___members'
  | 'childMdx___frontmatter___team___nameJa'
  | 'childMdx___frontmatter___team___id'
  | 'childMdx___frontmatter___team___children'
  | 'childMdx___frontmatter___participants'
  | 'childMdx___frontmatter___participants___name'
  | 'childMdx___frontmatter___participants___description'
  | 'childMdx___frontmatter___participants___skills'
  | 'childMdx___frontmatter___participants___teams'
  | 'childMdx___frontmatter___participants___contributions'
  | 'childMdx___frontmatter___participants___position'
  | 'childMdx___frontmatter___participants___isGraduated'
  | 'childMdx___frontmatter___participants___activities'
  | 'childMdx___frontmatter___participants___nameJa'
  | 'childMdx___frontmatter___participants___joinedAt'
  | 'childMdx___frontmatter___participants___id'
  | 'childMdx___frontmatter___participants___children'
  | 'childMdx___frontmatter___duration'
  | 'childMdx___frontmatter___startTime'
  | 'childMdx___frontmatter___endTime'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___topics'
  | 'childMdx___frontmatter___teamName'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  childrenMdx?: Maybe<MdxFilterListInput>
  childMdx?: Maybe<MdxFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
}

export type SiteFlagsFilterInput = {
  PRESERVE_WEBPACK_CACHE?: Maybe<BooleanQueryOperatorInput>
  FAST_DEV?: Maybe<BooleanQueryOperatorInput>
  DEV_SSR?: Maybe<BooleanQueryOperatorInput>
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<BooleanQueryOperatorInput>
  PARALLEL_SOURCING?: Maybe<BooleanQueryOperatorInput>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'flags___PRESERVE_WEBPACK_CACHE'
  | 'flags___FAST_DEV'
  | 'flags___DEV_SSR'
  | 'flags___PRESERVE_FILE_DOWNLOAD_CACHE'
  | 'flags___PARALLEL_SOURCING'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  flags?: Maybe<SiteFlagsFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ImageSharpConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MdxConnection = {
  totalCount: Scalars['Int']
  edges: Array<MdxEdge>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MdxGroupConnection>
}

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MdxFieldsEnum
}

export type MdxEdge = {
  next?: Maybe<Mdx>
  node: Mdx
  previous?: Maybe<Mdx>
}

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___team___name'
  | 'frontmatter___team___activities'
  | 'frontmatter___team___activities___rawBody'
  | 'frontmatter___team___activities___fileAbsolutePath'
  | 'frontmatter___team___activities___slug'
  | 'frontmatter___team___activities___body'
  | 'frontmatter___team___activities___excerpt'
  | 'frontmatter___team___activities___headings'
  | 'frontmatter___team___activities___html'
  | 'frontmatter___team___activities___mdxAST'
  | 'frontmatter___team___activities___tableOfContents'
  | 'frontmatter___team___activities___timeToRead'
  | 'frontmatter___team___activities___id'
  | 'frontmatter___team___activities___children'
  | 'frontmatter___team___members'
  | 'frontmatter___team___members___memberName'
  | 'frontmatter___team___members___leader'
  | 'frontmatter___team___members___teamName'
  | 'frontmatter___team___members___id'
  | 'frontmatter___team___members___children'
  | 'frontmatter___team___nameJa'
  | 'frontmatter___team___id'
  | 'frontmatter___team___parent___id'
  | 'frontmatter___team___parent___children'
  | 'frontmatter___team___children'
  | 'frontmatter___team___children___id'
  | 'frontmatter___team___children___children'
  | 'frontmatter___team___internal___content'
  | 'frontmatter___team___internal___contentDigest'
  | 'frontmatter___team___internal___description'
  | 'frontmatter___team___internal___fieldOwners'
  | 'frontmatter___team___internal___ignoreType'
  | 'frontmatter___team___internal___mediaType'
  | 'frontmatter___team___internal___owner'
  | 'frontmatter___team___internal___type'
  | 'frontmatter___participants'
  | 'frontmatter___participants___name'
  | 'frontmatter___participants___description'
  | 'frontmatter___participants___skills'
  | 'frontmatter___participants___skills___level'
  | 'frontmatter___participants___skills___skillName'
  | 'frontmatter___participants___skills___memberName'
  | 'frontmatter___participants___skills___id'
  | 'frontmatter___participants___skills___children'
  | 'frontmatter___participants___teams'
  | 'frontmatter___participants___teams___memberName'
  | 'frontmatter___participants___teams___leader'
  | 'frontmatter___participants___teams___teamName'
  | 'frontmatter___participants___teams___id'
  | 'frontmatter___participants___teams___children'
  | 'frontmatter___participants___contributions'
  | 'frontmatter___participants___contributions___memberName'
  | 'frontmatter___participants___contributions___portfolioName'
  | 'frontmatter___participants___contributions___id'
  | 'frontmatter___participants___contributions___children'
  | 'frontmatter___participants___belongs___facultyName'
  | 'frontmatter___participants___belongs___memberName'
  | 'frontmatter___participants___belongs___grade'
  | 'frontmatter___participants___position'
  | 'frontmatter___participants___isGraduated'
  | 'frontmatter___participants___activities'
  | 'frontmatter___participants___activities___rawBody'
  | 'frontmatter___participants___activities___fileAbsolutePath'
  | 'frontmatter___participants___activities___slug'
  | 'frontmatter___participants___activities___body'
  | 'frontmatter___participants___activities___excerpt'
  | 'frontmatter___participants___activities___headings'
  | 'frontmatter___participants___activities___html'
  | 'frontmatter___participants___activities___mdxAST'
  | 'frontmatter___participants___activities___tableOfContents'
  | 'frontmatter___participants___activities___timeToRead'
  | 'frontmatter___participants___activities___id'
  | 'frontmatter___participants___activities___children'
  | 'frontmatter___participants___nameJa'
  | 'frontmatter___participants___joinedAt'
  | 'frontmatter___participants___social___github'
  | 'frontmatter___participants___social___twitter'
  | 'frontmatter___participants___id'
  | 'frontmatter___participants___parent___id'
  | 'frontmatter___participants___parent___children'
  | 'frontmatter___participants___children'
  | 'frontmatter___participants___children___id'
  | 'frontmatter___participants___children___children'
  | 'frontmatter___participants___internal___content'
  | 'frontmatter___participants___internal___contentDigest'
  | 'frontmatter___participants___internal___description'
  | 'frontmatter___participants___internal___fieldOwners'
  | 'frontmatter___participants___internal___ignoreType'
  | 'frontmatter___participants___internal___mediaType'
  | 'frontmatter___participants___internal___owner'
  | 'frontmatter___participants___internal___type'
  | 'frontmatter___duration'
  | 'frontmatter___startTime'
  | 'frontmatter___endTime'
  | 'frontmatter___date'
  | 'frontmatter___topics'
  | 'frontmatter___teamName'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type MdxGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MdxEdge>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MemberConnection = {
  totalCount: Scalars['Int']
  edges: Array<MemberEdge>
  nodes: Array<Member>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MemberGroupConnection>
}

export type MemberConnectionDistinctArgs = {
  field: MemberFieldsEnum
}

export type MemberConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MemberFieldsEnum
}

export type MemberEdge = {
  next?: Maybe<Member>
  node: Member
  previous?: Maybe<Member>
}

export type MemberFieldsEnum =
  | 'name'
  | 'description'
  | 'skills'
  | 'skills___skill___members'
  | 'skills___skill___members___level'
  | 'skills___skill___members___skillName'
  | 'skills___skill___members___memberName'
  | 'skills___skill___members___id'
  | 'skills___skill___members___children'
  | 'skills___skill___name'
  | 'skills___skill___description'
  | 'skills___skill___id'
  | 'skills___skill___parent___id'
  | 'skills___skill___parent___children'
  | 'skills___skill___children'
  | 'skills___skill___children___id'
  | 'skills___skill___children___children'
  | 'skills___skill___internal___content'
  | 'skills___skill___internal___contentDigest'
  | 'skills___skill___internal___description'
  | 'skills___skill___internal___fieldOwners'
  | 'skills___skill___internal___ignoreType'
  | 'skills___skill___internal___mediaType'
  | 'skills___skill___internal___owner'
  | 'skills___skill___internal___type'
  | 'skills___member___name'
  | 'skills___member___description'
  | 'skills___member___skills'
  | 'skills___member___skills___level'
  | 'skills___member___skills___skillName'
  | 'skills___member___skills___memberName'
  | 'skills___member___skills___id'
  | 'skills___member___skills___children'
  | 'skills___member___teams'
  | 'skills___member___teams___memberName'
  | 'skills___member___teams___leader'
  | 'skills___member___teams___teamName'
  | 'skills___member___teams___id'
  | 'skills___member___teams___children'
  | 'skills___member___contributions'
  | 'skills___member___contributions___memberName'
  | 'skills___member___contributions___portfolioName'
  | 'skills___member___contributions___id'
  | 'skills___member___contributions___children'
  | 'skills___member___belongs___facultyName'
  | 'skills___member___belongs___memberName'
  | 'skills___member___belongs___grade'
  | 'skills___member___position'
  | 'skills___member___isGraduated'
  | 'skills___member___activities'
  | 'skills___member___activities___rawBody'
  | 'skills___member___activities___fileAbsolutePath'
  | 'skills___member___activities___slug'
  | 'skills___member___activities___body'
  | 'skills___member___activities___excerpt'
  | 'skills___member___activities___headings'
  | 'skills___member___activities___html'
  | 'skills___member___activities___mdxAST'
  | 'skills___member___activities___tableOfContents'
  | 'skills___member___activities___timeToRead'
  | 'skills___member___activities___id'
  | 'skills___member___activities___children'
  | 'skills___member___nameJa'
  | 'skills___member___joinedAt'
  | 'skills___member___social___github'
  | 'skills___member___social___twitter'
  | 'skills___member___id'
  | 'skills___member___parent___id'
  | 'skills___member___parent___children'
  | 'skills___member___children'
  | 'skills___member___children___id'
  | 'skills___member___children___children'
  | 'skills___member___internal___content'
  | 'skills___member___internal___contentDigest'
  | 'skills___member___internal___description'
  | 'skills___member___internal___fieldOwners'
  | 'skills___member___internal___ignoreType'
  | 'skills___member___internal___mediaType'
  | 'skills___member___internal___owner'
  | 'skills___member___internal___type'
  | 'skills___level'
  | 'skills___skillName'
  | 'skills___memberName'
  | 'skills___id'
  | 'skills___parent___id'
  | 'skills___parent___parent___id'
  | 'skills___parent___parent___children'
  | 'skills___parent___children'
  | 'skills___parent___children___id'
  | 'skills___parent___children___children'
  | 'skills___parent___internal___content'
  | 'skills___parent___internal___contentDigest'
  | 'skills___parent___internal___description'
  | 'skills___parent___internal___fieldOwners'
  | 'skills___parent___internal___ignoreType'
  | 'skills___parent___internal___mediaType'
  | 'skills___parent___internal___owner'
  | 'skills___parent___internal___type'
  | 'skills___children'
  | 'skills___children___id'
  | 'skills___children___parent___id'
  | 'skills___children___parent___children'
  | 'skills___children___children'
  | 'skills___children___children___id'
  | 'skills___children___children___children'
  | 'skills___children___internal___content'
  | 'skills___children___internal___contentDigest'
  | 'skills___children___internal___description'
  | 'skills___children___internal___fieldOwners'
  | 'skills___children___internal___ignoreType'
  | 'skills___children___internal___mediaType'
  | 'skills___children___internal___owner'
  | 'skills___children___internal___type'
  | 'skills___internal___content'
  | 'skills___internal___contentDigest'
  | 'skills___internal___description'
  | 'skills___internal___fieldOwners'
  | 'skills___internal___ignoreType'
  | 'skills___internal___mediaType'
  | 'skills___internal___owner'
  | 'skills___internal___type'
  | 'teams'
  | 'teams___member___name'
  | 'teams___member___description'
  | 'teams___member___skills'
  | 'teams___member___skills___level'
  | 'teams___member___skills___skillName'
  | 'teams___member___skills___memberName'
  | 'teams___member___skills___id'
  | 'teams___member___skills___children'
  | 'teams___member___teams'
  | 'teams___member___teams___memberName'
  | 'teams___member___teams___leader'
  | 'teams___member___teams___teamName'
  | 'teams___member___teams___id'
  | 'teams___member___teams___children'
  | 'teams___member___contributions'
  | 'teams___member___contributions___memberName'
  | 'teams___member___contributions___portfolioName'
  | 'teams___member___contributions___id'
  | 'teams___member___contributions___children'
  | 'teams___member___belongs___facultyName'
  | 'teams___member___belongs___memberName'
  | 'teams___member___belongs___grade'
  | 'teams___member___position'
  | 'teams___member___isGraduated'
  | 'teams___member___activities'
  | 'teams___member___activities___rawBody'
  | 'teams___member___activities___fileAbsolutePath'
  | 'teams___member___activities___slug'
  | 'teams___member___activities___body'
  | 'teams___member___activities___excerpt'
  | 'teams___member___activities___headings'
  | 'teams___member___activities___html'
  | 'teams___member___activities___mdxAST'
  | 'teams___member___activities___tableOfContents'
  | 'teams___member___activities___timeToRead'
  | 'teams___member___activities___id'
  | 'teams___member___activities___children'
  | 'teams___member___nameJa'
  | 'teams___member___joinedAt'
  | 'teams___member___social___github'
  | 'teams___member___social___twitter'
  | 'teams___member___id'
  | 'teams___member___parent___id'
  | 'teams___member___parent___children'
  | 'teams___member___children'
  | 'teams___member___children___id'
  | 'teams___member___children___children'
  | 'teams___member___internal___content'
  | 'teams___member___internal___contentDigest'
  | 'teams___member___internal___description'
  | 'teams___member___internal___fieldOwners'
  | 'teams___member___internal___ignoreType'
  | 'teams___member___internal___mediaType'
  | 'teams___member___internal___owner'
  | 'teams___member___internal___type'
  | 'teams___team___name'
  | 'teams___team___activities'
  | 'teams___team___activities___rawBody'
  | 'teams___team___activities___fileAbsolutePath'
  | 'teams___team___activities___slug'
  | 'teams___team___activities___body'
  | 'teams___team___activities___excerpt'
  | 'teams___team___activities___headings'
  | 'teams___team___activities___html'
  | 'teams___team___activities___mdxAST'
  | 'teams___team___activities___tableOfContents'
  | 'teams___team___activities___timeToRead'
  | 'teams___team___activities___id'
  | 'teams___team___activities___children'
  | 'teams___team___members'
  | 'teams___team___members___memberName'
  | 'teams___team___members___leader'
  | 'teams___team___members___teamName'
  | 'teams___team___members___id'
  | 'teams___team___members___children'
  | 'teams___team___nameJa'
  | 'teams___team___id'
  | 'teams___team___parent___id'
  | 'teams___team___parent___children'
  | 'teams___team___children'
  | 'teams___team___children___id'
  | 'teams___team___children___children'
  | 'teams___team___internal___content'
  | 'teams___team___internal___contentDigest'
  | 'teams___team___internal___description'
  | 'teams___team___internal___fieldOwners'
  | 'teams___team___internal___ignoreType'
  | 'teams___team___internal___mediaType'
  | 'teams___team___internal___owner'
  | 'teams___team___internal___type'
  | 'teams___memberName'
  | 'teams___leader'
  | 'teams___teamName'
  | 'teams___id'
  | 'teams___parent___id'
  | 'teams___parent___parent___id'
  | 'teams___parent___parent___children'
  | 'teams___parent___children'
  | 'teams___parent___children___id'
  | 'teams___parent___children___children'
  | 'teams___parent___internal___content'
  | 'teams___parent___internal___contentDigest'
  | 'teams___parent___internal___description'
  | 'teams___parent___internal___fieldOwners'
  | 'teams___parent___internal___ignoreType'
  | 'teams___parent___internal___mediaType'
  | 'teams___parent___internal___owner'
  | 'teams___parent___internal___type'
  | 'teams___children'
  | 'teams___children___id'
  | 'teams___children___parent___id'
  | 'teams___children___parent___children'
  | 'teams___children___children'
  | 'teams___children___children___id'
  | 'teams___children___children___children'
  | 'teams___children___internal___content'
  | 'teams___children___internal___contentDigest'
  | 'teams___children___internal___description'
  | 'teams___children___internal___fieldOwners'
  | 'teams___children___internal___ignoreType'
  | 'teams___children___internal___mediaType'
  | 'teams___children___internal___owner'
  | 'teams___children___internal___type'
  | 'teams___internal___content'
  | 'teams___internal___contentDigest'
  | 'teams___internal___description'
  | 'teams___internal___fieldOwners'
  | 'teams___internal___ignoreType'
  | 'teams___internal___mediaType'
  | 'teams___internal___owner'
  | 'teams___internal___type'
  | 'contributions'
  | 'contributions___portfolio___contributors'
  | 'contributions___portfolio___contributors___memberName'
  | 'contributions___portfolio___contributors___portfolioName'
  | 'contributions___portfolio___contributors___id'
  | 'contributions___portfolio___contributors___children'
  | 'contributions___portfolio___name'
  | 'contributions___portfolio___nameJa'
  | 'contributions___portfolio___id'
  | 'contributions___portfolio___parent___id'
  | 'contributions___portfolio___parent___children'
  | 'contributions___portfolio___children'
  | 'contributions___portfolio___children___id'
  | 'contributions___portfolio___children___children'
  | 'contributions___portfolio___internal___content'
  | 'contributions___portfolio___internal___contentDigest'
  | 'contributions___portfolio___internal___description'
  | 'contributions___portfolio___internal___fieldOwners'
  | 'contributions___portfolio___internal___ignoreType'
  | 'contributions___portfolio___internal___mediaType'
  | 'contributions___portfolio___internal___owner'
  | 'contributions___portfolio___internal___type'
  | 'contributions___member___name'
  | 'contributions___member___description'
  | 'contributions___member___skills'
  | 'contributions___member___skills___level'
  | 'contributions___member___skills___skillName'
  | 'contributions___member___skills___memberName'
  | 'contributions___member___skills___id'
  | 'contributions___member___skills___children'
  | 'contributions___member___teams'
  | 'contributions___member___teams___memberName'
  | 'contributions___member___teams___leader'
  | 'contributions___member___teams___teamName'
  | 'contributions___member___teams___id'
  | 'contributions___member___teams___children'
  | 'contributions___member___contributions'
  | 'contributions___member___contributions___memberName'
  | 'contributions___member___contributions___portfolioName'
  | 'contributions___member___contributions___id'
  | 'contributions___member___contributions___children'
  | 'contributions___member___belongs___facultyName'
  | 'contributions___member___belongs___memberName'
  | 'contributions___member___belongs___grade'
  | 'contributions___member___position'
  | 'contributions___member___isGraduated'
  | 'contributions___member___activities'
  | 'contributions___member___activities___rawBody'
  | 'contributions___member___activities___fileAbsolutePath'
  | 'contributions___member___activities___slug'
  | 'contributions___member___activities___body'
  | 'contributions___member___activities___excerpt'
  | 'contributions___member___activities___headings'
  | 'contributions___member___activities___html'
  | 'contributions___member___activities___mdxAST'
  | 'contributions___member___activities___tableOfContents'
  | 'contributions___member___activities___timeToRead'
  | 'contributions___member___activities___id'
  | 'contributions___member___activities___children'
  | 'contributions___member___nameJa'
  | 'contributions___member___joinedAt'
  | 'contributions___member___social___github'
  | 'contributions___member___social___twitter'
  | 'contributions___member___id'
  | 'contributions___member___parent___id'
  | 'contributions___member___parent___children'
  | 'contributions___member___children'
  | 'contributions___member___children___id'
  | 'contributions___member___children___children'
  | 'contributions___member___internal___content'
  | 'contributions___member___internal___contentDigest'
  | 'contributions___member___internal___description'
  | 'contributions___member___internal___fieldOwners'
  | 'contributions___member___internal___ignoreType'
  | 'contributions___member___internal___mediaType'
  | 'contributions___member___internal___owner'
  | 'contributions___member___internal___type'
  | 'contributions___memberName'
  | 'contributions___portfolioName'
  | 'contributions___id'
  | 'contributions___parent___id'
  | 'contributions___parent___parent___id'
  | 'contributions___parent___parent___children'
  | 'contributions___parent___children'
  | 'contributions___parent___children___id'
  | 'contributions___parent___children___children'
  | 'contributions___parent___internal___content'
  | 'contributions___parent___internal___contentDigest'
  | 'contributions___parent___internal___description'
  | 'contributions___parent___internal___fieldOwners'
  | 'contributions___parent___internal___ignoreType'
  | 'contributions___parent___internal___mediaType'
  | 'contributions___parent___internal___owner'
  | 'contributions___parent___internal___type'
  | 'contributions___children'
  | 'contributions___children___id'
  | 'contributions___children___parent___id'
  | 'contributions___children___parent___children'
  | 'contributions___children___children'
  | 'contributions___children___children___id'
  | 'contributions___children___children___children'
  | 'contributions___children___internal___content'
  | 'contributions___children___internal___contentDigest'
  | 'contributions___children___internal___description'
  | 'contributions___children___internal___fieldOwners'
  | 'contributions___children___internal___ignoreType'
  | 'contributions___children___internal___mediaType'
  | 'contributions___children___internal___owner'
  | 'contributions___children___internal___type'
  | 'contributions___internal___content'
  | 'contributions___internal___contentDigest'
  | 'contributions___internal___description'
  | 'contributions___internal___fieldOwners'
  | 'contributions___internal___ignoreType'
  | 'contributions___internal___mediaType'
  | 'contributions___internal___owner'
  | 'contributions___internal___type'
  | 'belongs___facultyName'
  | 'belongs___faculty___members'
  | 'belongs___faculty___members___name'
  | 'belongs___faculty___members___description'
  | 'belongs___faculty___members___skills'
  | 'belongs___faculty___members___teams'
  | 'belongs___faculty___members___contributions'
  | 'belongs___faculty___members___position'
  | 'belongs___faculty___members___isGraduated'
  | 'belongs___faculty___members___activities'
  | 'belongs___faculty___members___nameJa'
  | 'belongs___faculty___members___joinedAt'
  | 'belongs___faculty___members___id'
  | 'belongs___faculty___members___children'
  | 'belongs___faculty___name'
  | 'belongs___faculty___nameJa'
  | 'belongs___faculty___id'
  | 'belongs___faculty___parent___id'
  | 'belongs___faculty___parent___children'
  | 'belongs___faculty___children'
  | 'belongs___faculty___children___id'
  | 'belongs___faculty___children___children'
  | 'belongs___faculty___internal___content'
  | 'belongs___faculty___internal___contentDigest'
  | 'belongs___faculty___internal___description'
  | 'belongs___faculty___internal___fieldOwners'
  | 'belongs___faculty___internal___ignoreType'
  | 'belongs___faculty___internal___mediaType'
  | 'belongs___faculty___internal___owner'
  | 'belongs___faculty___internal___type'
  | 'belongs___memberName'
  | 'belongs___member___name'
  | 'belongs___member___description'
  | 'belongs___member___skills'
  | 'belongs___member___skills___level'
  | 'belongs___member___skills___skillName'
  | 'belongs___member___skills___memberName'
  | 'belongs___member___skills___id'
  | 'belongs___member___skills___children'
  | 'belongs___member___teams'
  | 'belongs___member___teams___memberName'
  | 'belongs___member___teams___leader'
  | 'belongs___member___teams___teamName'
  | 'belongs___member___teams___id'
  | 'belongs___member___teams___children'
  | 'belongs___member___contributions'
  | 'belongs___member___contributions___memberName'
  | 'belongs___member___contributions___portfolioName'
  | 'belongs___member___contributions___id'
  | 'belongs___member___contributions___children'
  | 'belongs___member___belongs___facultyName'
  | 'belongs___member___belongs___memberName'
  | 'belongs___member___belongs___grade'
  | 'belongs___member___position'
  | 'belongs___member___isGraduated'
  | 'belongs___member___activities'
  | 'belongs___member___activities___rawBody'
  | 'belongs___member___activities___fileAbsolutePath'
  | 'belongs___member___activities___slug'
  | 'belongs___member___activities___body'
  | 'belongs___member___activities___excerpt'
  | 'belongs___member___activities___headings'
  | 'belongs___member___activities___html'
  | 'belongs___member___activities___mdxAST'
  | 'belongs___member___activities___tableOfContents'
  | 'belongs___member___activities___timeToRead'
  | 'belongs___member___activities___id'
  | 'belongs___member___activities___children'
  | 'belongs___member___nameJa'
  | 'belongs___member___joinedAt'
  | 'belongs___member___social___github'
  | 'belongs___member___social___twitter'
  | 'belongs___member___id'
  | 'belongs___member___parent___id'
  | 'belongs___member___parent___children'
  | 'belongs___member___children'
  | 'belongs___member___children___id'
  | 'belongs___member___children___children'
  | 'belongs___member___internal___content'
  | 'belongs___member___internal___contentDigest'
  | 'belongs___member___internal___description'
  | 'belongs___member___internal___fieldOwners'
  | 'belongs___member___internal___ignoreType'
  | 'belongs___member___internal___mediaType'
  | 'belongs___member___internal___owner'
  | 'belongs___member___internal___type'
  | 'belongs___grade'
  | 'position'
  | 'isGraduated'
  | 'activities'
  | 'activities___rawBody'
  | 'activities___fileAbsolutePath'
  | 'activities___frontmatter___title'
  | 'activities___frontmatter___team___name'
  | 'activities___frontmatter___team___activities'
  | 'activities___frontmatter___team___members'
  | 'activities___frontmatter___team___nameJa'
  | 'activities___frontmatter___team___id'
  | 'activities___frontmatter___team___children'
  | 'activities___frontmatter___participants'
  | 'activities___frontmatter___participants___name'
  | 'activities___frontmatter___participants___description'
  | 'activities___frontmatter___participants___skills'
  | 'activities___frontmatter___participants___teams'
  | 'activities___frontmatter___participants___contributions'
  | 'activities___frontmatter___participants___position'
  | 'activities___frontmatter___participants___isGraduated'
  | 'activities___frontmatter___participants___activities'
  | 'activities___frontmatter___participants___nameJa'
  | 'activities___frontmatter___participants___joinedAt'
  | 'activities___frontmatter___participants___id'
  | 'activities___frontmatter___participants___children'
  | 'activities___frontmatter___duration'
  | 'activities___frontmatter___startTime'
  | 'activities___frontmatter___endTime'
  | 'activities___frontmatter___date'
  | 'activities___frontmatter___topics'
  | 'activities___frontmatter___teamName'
  | 'activities___slug'
  | 'activities___body'
  | 'activities___excerpt'
  | 'activities___headings'
  | 'activities___headings___value'
  | 'activities___headings___depth'
  | 'activities___html'
  | 'activities___mdxAST'
  | 'activities___tableOfContents'
  | 'activities___timeToRead'
  | 'activities___wordCount___paragraphs'
  | 'activities___wordCount___sentences'
  | 'activities___wordCount___words'
  | 'activities___id'
  | 'activities___parent___id'
  | 'activities___parent___parent___id'
  | 'activities___parent___parent___children'
  | 'activities___parent___children'
  | 'activities___parent___children___id'
  | 'activities___parent___children___children'
  | 'activities___parent___internal___content'
  | 'activities___parent___internal___contentDigest'
  | 'activities___parent___internal___description'
  | 'activities___parent___internal___fieldOwners'
  | 'activities___parent___internal___ignoreType'
  | 'activities___parent___internal___mediaType'
  | 'activities___parent___internal___owner'
  | 'activities___parent___internal___type'
  | 'activities___children'
  | 'activities___children___id'
  | 'activities___children___parent___id'
  | 'activities___children___parent___children'
  | 'activities___children___children'
  | 'activities___children___children___id'
  | 'activities___children___children___children'
  | 'activities___children___internal___content'
  | 'activities___children___internal___contentDigest'
  | 'activities___children___internal___description'
  | 'activities___children___internal___fieldOwners'
  | 'activities___children___internal___ignoreType'
  | 'activities___children___internal___mediaType'
  | 'activities___children___internal___owner'
  | 'activities___children___internal___type'
  | 'activities___internal___content'
  | 'activities___internal___contentDigest'
  | 'activities___internal___description'
  | 'activities___internal___fieldOwners'
  | 'activities___internal___ignoreType'
  | 'activities___internal___mediaType'
  | 'activities___internal___owner'
  | 'activities___internal___type'
  | 'nameJa'
  | 'joinedAt'
  | 'social___github'
  | 'social___twitter'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type MemberGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MemberEdge>
  nodes: Array<Member>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MemberSortInput = {
  fields?: Maybe<Array<Maybe<MemberFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContributionConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContributionEdge>
  nodes: Array<Contribution>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContributionGroupConnection>
}

export type ContributionConnectionDistinctArgs = {
  field: ContributionFieldsEnum
}

export type ContributionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContributionFieldsEnum
}

export type ContributionEdge = {
  next?: Maybe<Contribution>
  node: Contribution
  previous?: Maybe<Contribution>
}

export type ContributionFieldsEnum =
  | 'portfolio___contributors'
  | 'portfolio___contributors___portfolio___contributors'
  | 'portfolio___contributors___portfolio___name'
  | 'portfolio___contributors___portfolio___nameJa'
  | 'portfolio___contributors___portfolio___id'
  | 'portfolio___contributors___portfolio___children'
  | 'portfolio___contributors___member___name'
  | 'portfolio___contributors___member___description'
  | 'portfolio___contributors___member___skills'
  | 'portfolio___contributors___member___teams'
  | 'portfolio___contributors___member___contributions'
  | 'portfolio___contributors___member___position'
  | 'portfolio___contributors___member___isGraduated'
  | 'portfolio___contributors___member___activities'
  | 'portfolio___contributors___member___nameJa'
  | 'portfolio___contributors___member___joinedAt'
  | 'portfolio___contributors___member___id'
  | 'portfolio___contributors___member___children'
  | 'portfolio___contributors___memberName'
  | 'portfolio___contributors___portfolioName'
  | 'portfolio___contributors___id'
  | 'portfolio___contributors___parent___id'
  | 'portfolio___contributors___parent___children'
  | 'portfolio___contributors___children'
  | 'portfolio___contributors___children___id'
  | 'portfolio___contributors___children___children'
  | 'portfolio___contributors___internal___content'
  | 'portfolio___contributors___internal___contentDigest'
  | 'portfolio___contributors___internal___description'
  | 'portfolio___contributors___internal___fieldOwners'
  | 'portfolio___contributors___internal___ignoreType'
  | 'portfolio___contributors___internal___mediaType'
  | 'portfolio___contributors___internal___owner'
  | 'portfolio___contributors___internal___type'
  | 'portfolio___name'
  | 'portfolio___nameJa'
  | 'portfolio___id'
  | 'portfolio___parent___id'
  | 'portfolio___parent___parent___id'
  | 'portfolio___parent___parent___children'
  | 'portfolio___parent___children'
  | 'portfolio___parent___children___id'
  | 'portfolio___parent___children___children'
  | 'portfolio___parent___internal___content'
  | 'portfolio___parent___internal___contentDigest'
  | 'portfolio___parent___internal___description'
  | 'portfolio___parent___internal___fieldOwners'
  | 'portfolio___parent___internal___ignoreType'
  | 'portfolio___parent___internal___mediaType'
  | 'portfolio___parent___internal___owner'
  | 'portfolio___parent___internal___type'
  | 'portfolio___children'
  | 'portfolio___children___id'
  | 'portfolio___children___parent___id'
  | 'portfolio___children___parent___children'
  | 'portfolio___children___children'
  | 'portfolio___children___children___id'
  | 'portfolio___children___children___children'
  | 'portfolio___children___internal___content'
  | 'portfolio___children___internal___contentDigest'
  | 'portfolio___children___internal___description'
  | 'portfolio___children___internal___fieldOwners'
  | 'portfolio___children___internal___ignoreType'
  | 'portfolio___children___internal___mediaType'
  | 'portfolio___children___internal___owner'
  | 'portfolio___children___internal___type'
  | 'portfolio___internal___content'
  | 'portfolio___internal___contentDigest'
  | 'portfolio___internal___description'
  | 'portfolio___internal___fieldOwners'
  | 'portfolio___internal___ignoreType'
  | 'portfolio___internal___mediaType'
  | 'portfolio___internal___owner'
  | 'portfolio___internal___type'
  | 'member___name'
  | 'member___description'
  | 'member___skills'
  | 'member___skills___skill___members'
  | 'member___skills___skill___name'
  | 'member___skills___skill___description'
  | 'member___skills___skill___id'
  | 'member___skills___skill___children'
  | 'member___skills___member___name'
  | 'member___skills___member___description'
  | 'member___skills___member___skills'
  | 'member___skills___member___teams'
  | 'member___skills___member___contributions'
  | 'member___skills___member___position'
  | 'member___skills___member___isGraduated'
  | 'member___skills___member___activities'
  | 'member___skills___member___nameJa'
  | 'member___skills___member___joinedAt'
  | 'member___skills___member___id'
  | 'member___skills___member___children'
  | 'member___skills___level'
  | 'member___skills___skillName'
  | 'member___skills___memberName'
  | 'member___skills___id'
  | 'member___skills___parent___id'
  | 'member___skills___parent___children'
  | 'member___skills___children'
  | 'member___skills___children___id'
  | 'member___skills___children___children'
  | 'member___skills___internal___content'
  | 'member___skills___internal___contentDigest'
  | 'member___skills___internal___description'
  | 'member___skills___internal___fieldOwners'
  | 'member___skills___internal___ignoreType'
  | 'member___skills___internal___mediaType'
  | 'member___skills___internal___owner'
  | 'member___skills___internal___type'
  | 'member___teams'
  | 'member___teams___member___name'
  | 'member___teams___member___description'
  | 'member___teams___member___skills'
  | 'member___teams___member___teams'
  | 'member___teams___member___contributions'
  | 'member___teams___member___position'
  | 'member___teams___member___isGraduated'
  | 'member___teams___member___activities'
  | 'member___teams___member___nameJa'
  | 'member___teams___member___joinedAt'
  | 'member___teams___member___id'
  | 'member___teams___member___children'
  | 'member___teams___team___name'
  | 'member___teams___team___activities'
  | 'member___teams___team___members'
  | 'member___teams___team___nameJa'
  | 'member___teams___team___id'
  | 'member___teams___team___children'
  | 'member___teams___memberName'
  | 'member___teams___leader'
  | 'member___teams___teamName'
  | 'member___teams___id'
  | 'member___teams___parent___id'
  | 'member___teams___parent___children'
  | 'member___teams___children'
  | 'member___teams___children___id'
  | 'member___teams___children___children'
  | 'member___teams___internal___content'
  | 'member___teams___internal___contentDigest'
  | 'member___teams___internal___description'
  | 'member___teams___internal___fieldOwners'
  | 'member___teams___internal___ignoreType'
  | 'member___teams___internal___mediaType'
  | 'member___teams___internal___owner'
  | 'member___teams___internal___type'
  | 'member___contributions'
  | 'member___contributions___portfolio___contributors'
  | 'member___contributions___portfolio___name'
  | 'member___contributions___portfolio___nameJa'
  | 'member___contributions___portfolio___id'
  | 'member___contributions___portfolio___children'
  | 'member___contributions___member___name'
  | 'member___contributions___member___description'
  | 'member___contributions___member___skills'
  | 'member___contributions___member___teams'
  | 'member___contributions___member___contributions'
  | 'member___contributions___member___position'
  | 'member___contributions___member___isGraduated'
  | 'member___contributions___member___activities'
  | 'member___contributions___member___nameJa'
  | 'member___contributions___member___joinedAt'
  | 'member___contributions___member___id'
  | 'member___contributions___member___children'
  | 'member___contributions___memberName'
  | 'member___contributions___portfolioName'
  | 'member___contributions___id'
  | 'member___contributions___parent___id'
  | 'member___contributions___parent___children'
  | 'member___contributions___children'
  | 'member___contributions___children___id'
  | 'member___contributions___children___children'
  | 'member___contributions___internal___content'
  | 'member___contributions___internal___contentDigest'
  | 'member___contributions___internal___description'
  | 'member___contributions___internal___fieldOwners'
  | 'member___contributions___internal___ignoreType'
  | 'member___contributions___internal___mediaType'
  | 'member___contributions___internal___owner'
  | 'member___contributions___internal___type'
  | 'member___belongs___facultyName'
  | 'member___belongs___faculty___members'
  | 'member___belongs___faculty___name'
  | 'member___belongs___faculty___nameJa'
  | 'member___belongs___faculty___id'
  | 'member___belongs___faculty___children'
  | 'member___belongs___memberName'
  | 'member___belongs___member___name'
  | 'member___belongs___member___description'
  | 'member___belongs___member___skills'
  | 'member___belongs___member___teams'
  | 'member___belongs___member___contributions'
  | 'member___belongs___member___position'
  | 'member___belongs___member___isGraduated'
  | 'member___belongs___member___activities'
  | 'member___belongs___member___nameJa'
  | 'member___belongs___member___joinedAt'
  | 'member___belongs___member___id'
  | 'member___belongs___member___children'
  | 'member___belongs___grade'
  | 'member___position'
  | 'member___isGraduated'
  | 'member___activities'
  | 'member___activities___rawBody'
  | 'member___activities___fileAbsolutePath'
  | 'member___activities___frontmatter___title'
  | 'member___activities___frontmatter___participants'
  | 'member___activities___frontmatter___duration'
  | 'member___activities___frontmatter___startTime'
  | 'member___activities___frontmatter___endTime'
  | 'member___activities___frontmatter___date'
  | 'member___activities___frontmatter___topics'
  | 'member___activities___frontmatter___teamName'
  | 'member___activities___slug'
  | 'member___activities___body'
  | 'member___activities___excerpt'
  | 'member___activities___headings'
  | 'member___activities___headings___value'
  | 'member___activities___headings___depth'
  | 'member___activities___html'
  | 'member___activities___mdxAST'
  | 'member___activities___tableOfContents'
  | 'member___activities___timeToRead'
  | 'member___activities___wordCount___paragraphs'
  | 'member___activities___wordCount___sentences'
  | 'member___activities___wordCount___words'
  | 'member___activities___id'
  | 'member___activities___parent___id'
  | 'member___activities___parent___children'
  | 'member___activities___children'
  | 'member___activities___children___id'
  | 'member___activities___children___children'
  | 'member___activities___internal___content'
  | 'member___activities___internal___contentDigest'
  | 'member___activities___internal___description'
  | 'member___activities___internal___fieldOwners'
  | 'member___activities___internal___ignoreType'
  | 'member___activities___internal___mediaType'
  | 'member___activities___internal___owner'
  | 'member___activities___internal___type'
  | 'member___nameJa'
  | 'member___joinedAt'
  | 'member___social___github'
  | 'member___social___twitter'
  | 'member___id'
  | 'member___parent___id'
  | 'member___parent___parent___id'
  | 'member___parent___parent___children'
  | 'member___parent___children'
  | 'member___parent___children___id'
  | 'member___parent___children___children'
  | 'member___parent___internal___content'
  | 'member___parent___internal___contentDigest'
  | 'member___parent___internal___description'
  | 'member___parent___internal___fieldOwners'
  | 'member___parent___internal___ignoreType'
  | 'member___parent___internal___mediaType'
  | 'member___parent___internal___owner'
  | 'member___parent___internal___type'
  | 'member___children'
  | 'member___children___id'
  | 'member___children___parent___id'
  | 'member___children___parent___children'
  | 'member___children___children'
  | 'member___children___children___id'
  | 'member___children___children___children'
  | 'member___children___internal___content'
  | 'member___children___internal___contentDigest'
  | 'member___children___internal___description'
  | 'member___children___internal___fieldOwners'
  | 'member___children___internal___ignoreType'
  | 'member___children___internal___mediaType'
  | 'member___children___internal___owner'
  | 'member___children___internal___type'
  | 'member___internal___content'
  | 'member___internal___contentDigest'
  | 'member___internal___description'
  | 'member___internal___fieldOwners'
  | 'member___internal___ignoreType'
  | 'member___internal___mediaType'
  | 'member___internal___owner'
  | 'member___internal___type'
  | 'memberName'
  | 'portfolioName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type ContributionGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContributionEdge>
  nodes: Array<Contribution>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContributionSortInput = {
  fields?: Maybe<Array<Maybe<ContributionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PortfolioConnection = {
  totalCount: Scalars['Int']
  edges: Array<PortfolioEdge>
  nodes: Array<Portfolio>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<PortfolioGroupConnection>
}

export type PortfolioConnectionDistinctArgs = {
  field: PortfolioFieldsEnum
}

export type PortfolioConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PortfolioFieldsEnum
}

export type PortfolioEdge = {
  next?: Maybe<Portfolio>
  node: Portfolio
  previous?: Maybe<Portfolio>
}

export type PortfolioFieldsEnum =
  | 'contributors'
  | 'contributors___portfolio___contributors'
  | 'contributors___portfolio___contributors___memberName'
  | 'contributors___portfolio___contributors___portfolioName'
  | 'contributors___portfolio___contributors___id'
  | 'contributors___portfolio___contributors___children'
  | 'contributors___portfolio___name'
  | 'contributors___portfolio___nameJa'
  | 'contributors___portfolio___id'
  | 'contributors___portfolio___parent___id'
  | 'contributors___portfolio___parent___children'
  | 'contributors___portfolio___children'
  | 'contributors___portfolio___children___id'
  | 'contributors___portfolio___children___children'
  | 'contributors___portfolio___internal___content'
  | 'contributors___portfolio___internal___contentDigest'
  | 'contributors___portfolio___internal___description'
  | 'contributors___portfolio___internal___fieldOwners'
  | 'contributors___portfolio___internal___ignoreType'
  | 'contributors___portfolio___internal___mediaType'
  | 'contributors___portfolio___internal___owner'
  | 'contributors___portfolio___internal___type'
  | 'contributors___member___name'
  | 'contributors___member___description'
  | 'contributors___member___skills'
  | 'contributors___member___skills___level'
  | 'contributors___member___skills___skillName'
  | 'contributors___member___skills___memberName'
  | 'contributors___member___skills___id'
  | 'contributors___member___skills___children'
  | 'contributors___member___teams'
  | 'contributors___member___teams___memberName'
  | 'contributors___member___teams___leader'
  | 'contributors___member___teams___teamName'
  | 'contributors___member___teams___id'
  | 'contributors___member___teams___children'
  | 'contributors___member___contributions'
  | 'contributors___member___contributions___memberName'
  | 'contributors___member___contributions___portfolioName'
  | 'contributors___member___contributions___id'
  | 'contributors___member___contributions___children'
  | 'contributors___member___belongs___facultyName'
  | 'contributors___member___belongs___memberName'
  | 'contributors___member___belongs___grade'
  | 'contributors___member___position'
  | 'contributors___member___isGraduated'
  | 'contributors___member___activities'
  | 'contributors___member___activities___rawBody'
  | 'contributors___member___activities___fileAbsolutePath'
  | 'contributors___member___activities___slug'
  | 'contributors___member___activities___body'
  | 'contributors___member___activities___excerpt'
  | 'contributors___member___activities___headings'
  | 'contributors___member___activities___html'
  | 'contributors___member___activities___mdxAST'
  | 'contributors___member___activities___tableOfContents'
  | 'contributors___member___activities___timeToRead'
  | 'contributors___member___activities___id'
  | 'contributors___member___activities___children'
  | 'contributors___member___nameJa'
  | 'contributors___member___joinedAt'
  | 'contributors___member___social___github'
  | 'contributors___member___social___twitter'
  | 'contributors___member___id'
  | 'contributors___member___parent___id'
  | 'contributors___member___parent___children'
  | 'contributors___member___children'
  | 'contributors___member___children___id'
  | 'contributors___member___children___children'
  | 'contributors___member___internal___content'
  | 'contributors___member___internal___contentDigest'
  | 'contributors___member___internal___description'
  | 'contributors___member___internal___fieldOwners'
  | 'contributors___member___internal___ignoreType'
  | 'contributors___member___internal___mediaType'
  | 'contributors___member___internal___owner'
  | 'contributors___member___internal___type'
  | 'contributors___memberName'
  | 'contributors___portfolioName'
  | 'contributors___id'
  | 'contributors___parent___id'
  | 'contributors___parent___parent___id'
  | 'contributors___parent___parent___children'
  | 'contributors___parent___children'
  | 'contributors___parent___children___id'
  | 'contributors___parent___children___children'
  | 'contributors___parent___internal___content'
  | 'contributors___parent___internal___contentDigest'
  | 'contributors___parent___internal___description'
  | 'contributors___parent___internal___fieldOwners'
  | 'contributors___parent___internal___ignoreType'
  | 'contributors___parent___internal___mediaType'
  | 'contributors___parent___internal___owner'
  | 'contributors___parent___internal___type'
  | 'contributors___children'
  | 'contributors___children___id'
  | 'contributors___children___parent___id'
  | 'contributors___children___parent___children'
  | 'contributors___children___children'
  | 'contributors___children___children___id'
  | 'contributors___children___children___children'
  | 'contributors___children___internal___content'
  | 'contributors___children___internal___contentDigest'
  | 'contributors___children___internal___description'
  | 'contributors___children___internal___fieldOwners'
  | 'contributors___children___internal___ignoreType'
  | 'contributors___children___internal___mediaType'
  | 'contributors___children___internal___owner'
  | 'contributors___children___internal___type'
  | 'contributors___internal___content'
  | 'contributors___internal___contentDigest'
  | 'contributors___internal___description'
  | 'contributors___internal___fieldOwners'
  | 'contributors___internal___ignoreType'
  | 'contributors___internal___mediaType'
  | 'contributors___internal___owner'
  | 'contributors___internal___type'
  | 'name'
  | 'nameJa'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type PortfolioGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PortfolioEdge>
  nodes: Array<Portfolio>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PortfolioSortInput = {
  fields?: Maybe<Array<Maybe<PortfolioFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FacultyConnection = {
  totalCount: Scalars['Int']
  edges: Array<FacultyEdge>
  nodes: Array<Faculty>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FacultyGroupConnection>
}

export type FacultyConnectionDistinctArgs = {
  field: FacultyFieldsEnum
}

export type FacultyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FacultyFieldsEnum
}

export type FacultyEdge = {
  next?: Maybe<Faculty>
  node: Faculty
  previous?: Maybe<Faculty>
}

export type FacultyFieldsEnum =
  | 'members'
  | 'members___name'
  | 'members___description'
  | 'members___skills'
  | 'members___skills___skill___members'
  | 'members___skills___skill___name'
  | 'members___skills___skill___description'
  | 'members___skills___skill___id'
  | 'members___skills___skill___children'
  | 'members___skills___member___name'
  | 'members___skills___member___description'
  | 'members___skills___member___skills'
  | 'members___skills___member___teams'
  | 'members___skills___member___contributions'
  | 'members___skills___member___position'
  | 'members___skills___member___isGraduated'
  | 'members___skills___member___activities'
  | 'members___skills___member___nameJa'
  | 'members___skills___member___joinedAt'
  | 'members___skills___member___id'
  | 'members___skills___member___children'
  | 'members___skills___level'
  | 'members___skills___skillName'
  | 'members___skills___memberName'
  | 'members___skills___id'
  | 'members___skills___parent___id'
  | 'members___skills___parent___children'
  | 'members___skills___children'
  | 'members___skills___children___id'
  | 'members___skills___children___children'
  | 'members___skills___internal___content'
  | 'members___skills___internal___contentDigest'
  | 'members___skills___internal___description'
  | 'members___skills___internal___fieldOwners'
  | 'members___skills___internal___ignoreType'
  | 'members___skills___internal___mediaType'
  | 'members___skills___internal___owner'
  | 'members___skills___internal___type'
  | 'members___teams'
  | 'members___teams___member___name'
  | 'members___teams___member___description'
  | 'members___teams___member___skills'
  | 'members___teams___member___teams'
  | 'members___teams___member___contributions'
  | 'members___teams___member___position'
  | 'members___teams___member___isGraduated'
  | 'members___teams___member___activities'
  | 'members___teams___member___nameJa'
  | 'members___teams___member___joinedAt'
  | 'members___teams___member___id'
  | 'members___teams___member___children'
  | 'members___teams___team___name'
  | 'members___teams___team___activities'
  | 'members___teams___team___members'
  | 'members___teams___team___nameJa'
  | 'members___teams___team___id'
  | 'members___teams___team___children'
  | 'members___teams___memberName'
  | 'members___teams___leader'
  | 'members___teams___teamName'
  | 'members___teams___id'
  | 'members___teams___parent___id'
  | 'members___teams___parent___children'
  | 'members___teams___children'
  | 'members___teams___children___id'
  | 'members___teams___children___children'
  | 'members___teams___internal___content'
  | 'members___teams___internal___contentDigest'
  | 'members___teams___internal___description'
  | 'members___teams___internal___fieldOwners'
  | 'members___teams___internal___ignoreType'
  | 'members___teams___internal___mediaType'
  | 'members___teams___internal___owner'
  | 'members___teams___internal___type'
  | 'members___contributions'
  | 'members___contributions___portfolio___contributors'
  | 'members___contributions___portfolio___name'
  | 'members___contributions___portfolio___nameJa'
  | 'members___contributions___portfolio___id'
  | 'members___contributions___portfolio___children'
  | 'members___contributions___member___name'
  | 'members___contributions___member___description'
  | 'members___contributions___member___skills'
  | 'members___contributions___member___teams'
  | 'members___contributions___member___contributions'
  | 'members___contributions___member___position'
  | 'members___contributions___member___isGraduated'
  | 'members___contributions___member___activities'
  | 'members___contributions___member___nameJa'
  | 'members___contributions___member___joinedAt'
  | 'members___contributions___member___id'
  | 'members___contributions___member___children'
  | 'members___contributions___memberName'
  | 'members___contributions___portfolioName'
  | 'members___contributions___id'
  | 'members___contributions___parent___id'
  | 'members___contributions___parent___children'
  | 'members___contributions___children'
  | 'members___contributions___children___id'
  | 'members___contributions___children___children'
  | 'members___contributions___internal___content'
  | 'members___contributions___internal___contentDigest'
  | 'members___contributions___internal___description'
  | 'members___contributions___internal___fieldOwners'
  | 'members___contributions___internal___ignoreType'
  | 'members___contributions___internal___mediaType'
  | 'members___contributions___internal___owner'
  | 'members___contributions___internal___type'
  | 'members___belongs___facultyName'
  | 'members___belongs___faculty___members'
  | 'members___belongs___faculty___name'
  | 'members___belongs___faculty___nameJa'
  | 'members___belongs___faculty___id'
  | 'members___belongs___faculty___children'
  | 'members___belongs___memberName'
  | 'members___belongs___member___name'
  | 'members___belongs___member___description'
  | 'members___belongs___member___skills'
  | 'members___belongs___member___teams'
  | 'members___belongs___member___contributions'
  | 'members___belongs___member___position'
  | 'members___belongs___member___isGraduated'
  | 'members___belongs___member___activities'
  | 'members___belongs___member___nameJa'
  | 'members___belongs___member___joinedAt'
  | 'members___belongs___member___id'
  | 'members___belongs___member___children'
  | 'members___belongs___grade'
  | 'members___position'
  | 'members___isGraduated'
  | 'members___activities'
  | 'members___activities___rawBody'
  | 'members___activities___fileAbsolutePath'
  | 'members___activities___frontmatter___title'
  | 'members___activities___frontmatter___participants'
  | 'members___activities___frontmatter___duration'
  | 'members___activities___frontmatter___startTime'
  | 'members___activities___frontmatter___endTime'
  | 'members___activities___frontmatter___date'
  | 'members___activities___frontmatter___topics'
  | 'members___activities___frontmatter___teamName'
  | 'members___activities___slug'
  | 'members___activities___body'
  | 'members___activities___excerpt'
  | 'members___activities___headings'
  | 'members___activities___headings___value'
  | 'members___activities___headings___depth'
  | 'members___activities___html'
  | 'members___activities___mdxAST'
  | 'members___activities___tableOfContents'
  | 'members___activities___timeToRead'
  | 'members___activities___wordCount___paragraphs'
  | 'members___activities___wordCount___sentences'
  | 'members___activities___wordCount___words'
  | 'members___activities___id'
  | 'members___activities___parent___id'
  | 'members___activities___parent___children'
  | 'members___activities___children'
  | 'members___activities___children___id'
  | 'members___activities___children___children'
  | 'members___activities___internal___content'
  | 'members___activities___internal___contentDigest'
  | 'members___activities___internal___description'
  | 'members___activities___internal___fieldOwners'
  | 'members___activities___internal___ignoreType'
  | 'members___activities___internal___mediaType'
  | 'members___activities___internal___owner'
  | 'members___activities___internal___type'
  | 'members___nameJa'
  | 'members___joinedAt'
  | 'members___social___github'
  | 'members___social___twitter'
  | 'members___id'
  | 'members___parent___id'
  | 'members___parent___parent___id'
  | 'members___parent___parent___children'
  | 'members___parent___children'
  | 'members___parent___children___id'
  | 'members___parent___children___children'
  | 'members___parent___internal___content'
  | 'members___parent___internal___contentDigest'
  | 'members___parent___internal___description'
  | 'members___parent___internal___fieldOwners'
  | 'members___parent___internal___ignoreType'
  | 'members___parent___internal___mediaType'
  | 'members___parent___internal___owner'
  | 'members___parent___internal___type'
  | 'members___children'
  | 'members___children___id'
  | 'members___children___parent___id'
  | 'members___children___parent___children'
  | 'members___children___children'
  | 'members___children___children___id'
  | 'members___children___children___children'
  | 'members___children___internal___content'
  | 'members___children___internal___contentDigest'
  | 'members___children___internal___description'
  | 'members___children___internal___fieldOwners'
  | 'members___children___internal___ignoreType'
  | 'members___children___internal___mediaType'
  | 'members___children___internal___owner'
  | 'members___children___internal___type'
  | 'members___internal___content'
  | 'members___internal___contentDigest'
  | 'members___internal___description'
  | 'members___internal___fieldOwners'
  | 'members___internal___ignoreType'
  | 'members___internal___mediaType'
  | 'members___internal___owner'
  | 'members___internal___type'
  | 'name'
  | 'nameJa'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type FacultyGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FacultyEdge>
  nodes: Array<Faculty>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FacultySortInput = {
  fields?: Maybe<Array<Maybe<FacultyFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MemberSkillConnection = {
  totalCount: Scalars['Int']
  edges: Array<MemberSkillEdge>
  nodes: Array<MemberSkill>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MemberSkillGroupConnection>
}

export type MemberSkillConnectionDistinctArgs = {
  field: MemberSkillFieldsEnum
}

export type MemberSkillConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MemberSkillFieldsEnum
}

export type MemberSkillEdge = {
  next?: Maybe<MemberSkill>
  node: MemberSkill
  previous?: Maybe<MemberSkill>
}

export type MemberSkillFieldsEnum =
  | 'skill___members'
  | 'skill___members___skill___members'
  | 'skill___members___skill___name'
  | 'skill___members___skill___description'
  | 'skill___members___skill___id'
  | 'skill___members___skill___children'
  | 'skill___members___member___name'
  | 'skill___members___member___description'
  | 'skill___members___member___skills'
  | 'skill___members___member___teams'
  | 'skill___members___member___contributions'
  | 'skill___members___member___position'
  | 'skill___members___member___isGraduated'
  | 'skill___members___member___activities'
  | 'skill___members___member___nameJa'
  | 'skill___members___member___joinedAt'
  | 'skill___members___member___id'
  | 'skill___members___member___children'
  | 'skill___members___level'
  | 'skill___members___skillName'
  | 'skill___members___memberName'
  | 'skill___members___id'
  | 'skill___members___parent___id'
  | 'skill___members___parent___children'
  | 'skill___members___children'
  | 'skill___members___children___id'
  | 'skill___members___children___children'
  | 'skill___members___internal___content'
  | 'skill___members___internal___contentDigest'
  | 'skill___members___internal___description'
  | 'skill___members___internal___fieldOwners'
  | 'skill___members___internal___ignoreType'
  | 'skill___members___internal___mediaType'
  | 'skill___members___internal___owner'
  | 'skill___members___internal___type'
  | 'skill___name'
  | 'skill___description'
  | 'skill___id'
  | 'skill___parent___id'
  | 'skill___parent___parent___id'
  | 'skill___parent___parent___children'
  | 'skill___parent___children'
  | 'skill___parent___children___id'
  | 'skill___parent___children___children'
  | 'skill___parent___internal___content'
  | 'skill___parent___internal___contentDigest'
  | 'skill___parent___internal___description'
  | 'skill___parent___internal___fieldOwners'
  | 'skill___parent___internal___ignoreType'
  | 'skill___parent___internal___mediaType'
  | 'skill___parent___internal___owner'
  | 'skill___parent___internal___type'
  | 'skill___children'
  | 'skill___children___id'
  | 'skill___children___parent___id'
  | 'skill___children___parent___children'
  | 'skill___children___children'
  | 'skill___children___children___id'
  | 'skill___children___children___children'
  | 'skill___children___internal___content'
  | 'skill___children___internal___contentDigest'
  | 'skill___children___internal___description'
  | 'skill___children___internal___fieldOwners'
  | 'skill___children___internal___ignoreType'
  | 'skill___children___internal___mediaType'
  | 'skill___children___internal___owner'
  | 'skill___children___internal___type'
  | 'skill___internal___content'
  | 'skill___internal___contentDigest'
  | 'skill___internal___description'
  | 'skill___internal___fieldOwners'
  | 'skill___internal___ignoreType'
  | 'skill___internal___mediaType'
  | 'skill___internal___owner'
  | 'skill___internal___type'
  | 'member___name'
  | 'member___description'
  | 'member___skills'
  | 'member___skills___skill___members'
  | 'member___skills___skill___name'
  | 'member___skills___skill___description'
  | 'member___skills___skill___id'
  | 'member___skills___skill___children'
  | 'member___skills___member___name'
  | 'member___skills___member___description'
  | 'member___skills___member___skills'
  | 'member___skills___member___teams'
  | 'member___skills___member___contributions'
  | 'member___skills___member___position'
  | 'member___skills___member___isGraduated'
  | 'member___skills___member___activities'
  | 'member___skills___member___nameJa'
  | 'member___skills___member___joinedAt'
  | 'member___skills___member___id'
  | 'member___skills___member___children'
  | 'member___skills___level'
  | 'member___skills___skillName'
  | 'member___skills___memberName'
  | 'member___skills___id'
  | 'member___skills___parent___id'
  | 'member___skills___parent___children'
  | 'member___skills___children'
  | 'member___skills___children___id'
  | 'member___skills___children___children'
  | 'member___skills___internal___content'
  | 'member___skills___internal___contentDigest'
  | 'member___skills___internal___description'
  | 'member___skills___internal___fieldOwners'
  | 'member___skills___internal___ignoreType'
  | 'member___skills___internal___mediaType'
  | 'member___skills___internal___owner'
  | 'member___skills___internal___type'
  | 'member___teams'
  | 'member___teams___member___name'
  | 'member___teams___member___description'
  | 'member___teams___member___skills'
  | 'member___teams___member___teams'
  | 'member___teams___member___contributions'
  | 'member___teams___member___position'
  | 'member___teams___member___isGraduated'
  | 'member___teams___member___activities'
  | 'member___teams___member___nameJa'
  | 'member___teams___member___joinedAt'
  | 'member___teams___member___id'
  | 'member___teams___member___children'
  | 'member___teams___team___name'
  | 'member___teams___team___activities'
  | 'member___teams___team___members'
  | 'member___teams___team___nameJa'
  | 'member___teams___team___id'
  | 'member___teams___team___children'
  | 'member___teams___memberName'
  | 'member___teams___leader'
  | 'member___teams___teamName'
  | 'member___teams___id'
  | 'member___teams___parent___id'
  | 'member___teams___parent___children'
  | 'member___teams___children'
  | 'member___teams___children___id'
  | 'member___teams___children___children'
  | 'member___teams___internal___content'
  | 'member___teams___internal___contentDigest'
  | 'member___teams___internal___description'
  | 'member___teams___internal___fieldOwners'
  | 'member___teams___internal___ignoreType'
  | 'member___teams___internal___mediaType'
  | 'member___teams___internal___owner'
  | 'member___teams___internal___type'
  | 'member___contributions'
  | 'member___contributions___portfolio___contributors'
  | 'member___contributions___portfolio___name'
  | 'member___contributions___portfolio___nameJa'
  | 'member___contributions___portfolio___id'
  | 'member___contributions___portfolio___children'
  | 'member___contributions___member___name'
  | 'member___contributions___member___description'
  | 'member___contributions___member___skills'
  | 'member___contributions___member___teams'
  | 'member___contributions___member___contributions'
  | 'member___contributions___member___position'
  | 'member___contributions___member___isGraduated'
  | 'member___contributions___member___activities'
  | 'member___contributions___member___nameJa'
  | 'member___contributions___member___joinedAt'
  | 'member___contributions___member___id'
  | 'member___contributions___member___children'
  | 'member___contributions___memberName'
  | 'member___contributions___portfolioName'
  | 'member___contributions___id'
  | 'member___contributions___parent___id'
  | 'member___contributions___parent___children'
  | 'member___contributions___children'
  | 'member___contributions___children___id'
  | 'member___contributions___children___children'
  | 'member___contributions___internal___content'
  | 'member___contributions___internal___contentDigest'
  | 'member___contributions___internal___description'
  | 'member___contributions___internal___fieldOwners'
  | 'member___contributions___internal___ignoreType'
  | 'member___contributions___internal___mediaType'
  | 'member___contributions___internal___owner'
  | 'member___contributions___internal___type'
  | 'member___belongs___facultyName'
  | 'member___belongs___faculty___members'
  | 'member___belongs___faculty___name'
  | 'member___belongs___faculty___nameJa'
  | 'member___belongs___faculty___id'
  | 'member___belongs___faculty___children'
  | 'member___belongs___memberName'
  | 'member___belongs___member___name'
  | 'member___belongs___member___description'
  | 'member___belongs___member___skills'
  | 'member___belongs___member___teams'
  | 'member___belongs___member___contributions'
  | 'member___belongs___member___position'
  | 'member___belongs___member___isGraduated'
  | 'member___belongs___member___activities'
  | 'member___belongs___member___nameJa'
  | 'member___belongs___member___joinedAt'
  | 'member___belongs___member___id'
  | 'member___belongs___member___children'
  | 'member___belongs___grade'
  | 'member___position'
  | 'member___isGraduated'
  | 'member___activities'
  | 'member___activities___rawBody'
  | 'member___activities___fileAbsolutePath'
  | 'member___activities___frontmatter___title'
  | 'member___activities___frontmatter___participants'
  | 'member___activities___frontmatter___duration'
  | 'member___activities___frontmatter___startTime'
  | 'member___activities___frontmatter___endTime'
  | 'member___activities___frontmatter___date'
  | 'member___activities___frontmatter___topics'
  | 'member___activities___frontmatter___teamName'
  | 'member___activities___slug'
  | 'member___activities___body'
  | 'member___activities___excerpt'
  | 'member___activities___headings'
  | 'member___activities___headings___value'
  | 'member___activities___headings___depth'
  | 'member___activities___html'
  | 'member___activities___mdxAST'
  | 'member___activities___tableOfContents'
  | 'member___activities___timeToRead'
  | 'member___activities___wordCount___paragraphs'
  | 'member___activities___wordCount___sentences'
  | 'member___activities___wordCount___words'
  | 'member___activities___id'
  | 'member___activities___parent___id'
  | 'member___activities___parent___children'
  | 'member___activities___children'
  | 'member___activities___children___id'
  | 'member___activities___children___children'
  | 'member___activities___internal___content'
  | 'member___activities___internal___contentDigest'
  | 'member___activities___internal___description'
  | 'member___activities___internal___fieldOwners'
  | 'member___activities___internal___ignoreType'
  | 'member___activities___internal___mediaType'
  | 'member___activities___internal___owner'
  | 'member___activities___internal___type'
  | 'member___nameJa'
  | 'member___joinedAt'
  | 'member___social___github'
  | 'member___social___twitter'
  | 'member___id'
  | 'member___parent___id'
  | 'member___parent___parent___id'
  | 'member___parent___parent___children'
  | 'member___parent___children'
  | 'member___parent___children___id'
  | 'member___parent___children___children'
  | 'member___parent___internal___content'
  | 'member___parent___internal___contentDigest'
  | 'member___parent___internal___description'
  | 'member___parent___internal___fieldOwners'
  | 'member___parent___internal___ignoreType'
  | 'member___parent___internal___mediaType'
  | 'member___parent___internal___owner'
  | 'member___parent___internal___type'
  | 'member___children'
  | 'member___children___id'
  | 'member___children___parent___id'
  | 'member___children___parent___children'
  | 'member___children___children'
  | 'member___children___children___id'
  | 'member___children___children___children'
  | 'member___children___internal___content'
  | 'member___children___internal___contentDigest'
  | 'member___children___internal___description'
  | 'member___children___internal___fieldOwners'
  | 'member___children___internal___ignoreType'
  | 'member___children___internal___mediaType'
  | 'member___children___internal___owner'
  | 'member___children___internal___type'
  | 'member___internal___content'
  | 'member___internal___contentDigest'
  | 'member___internal___description'
  | 'member___internal___fieldOwners'
  | 'member___internal___ignoreType'
  | 'member___internal___mediaType'
  | 'member___internal___owner'
  | 'member___internal___type'
  | 'level'
  | 'skillName'
  | 'memberName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type MemberSkillGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MemberSkillEdge>
  nodes: Array<MemberSkill>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MemberSkillSortInput = {
  fields?: Maybe<Array<Maybe<MemberSkillFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SkillConnection = {
  totalCount: Scalars['Int']
  edges: Array<SkillEdge>
  nodes: Array<Skill>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SkillGroupConnection>
}

export type SkillConnectionDistinctArgs = {
  field: SkillFieldsEnum
}

export type SkillConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SkillFieldsEnum
}

export type SkillEdge = {
  next?: Maybe<Skill>
  node: Skill
  previous?: Maybe<Skill>
}

export type SkillFieldsEnum =
  | 'members'
  | 'members___skill___members'
  | 'members___skill___members___level'
  | 'members___skill___members___skillName'
  | 'members___skill___members___memberName'
  | 'members___skill___members___id'
  | 'members___skill___members___children'
  | 'members___skill___name'
  | 'members___skill___description'
  | 'members___skill___id'
  | 'members___skill___parent___id'
  | 'members___skill___parent___children'
  | 'members___skill___children'
  | 'members___skill___children___id'
  | 'members___skill___children___children'
  | 'members___skill___internal___content'
  | 'members___skill___internal___contentDigest'
  | 'members___skill___internal___description'
  | 'members___skill___internal___fieldOwners'
  | 'members___skill___internal___ignoreType'
  | 'members___skill___internal___mediaType'
  | 'members___skill___internal___owner'
  | 'members___skill___internal___type'
  | 'members___member___name'
  | 'members___member___description'
  | 'members___member___skills'
  | 'members___member___skills___level'
  | 'members___member___skills___skillName'
  | 'members___member___skills___memberName'
  | 'members___member___skills___id'
  | 'members___member___skills___children'
  | 'members___member___teams'
  | 'members___member___teams___memberName'
  | 'members___member___teams___leader'
  | 'members___member___teams___teamName'
  | 'members___member___teams___id'
  | 'members___member___teams___children'
  | 'members___member___contributions'
  | 'members___member___contributions___memberName'
  | 'members___member___contributions___portfolioName'
  | 'members___member___contributions___id'
  | 'members___member___contributions___children'
  | 'members___member___belongs___facultyName'
  | 'members___member___belongs___memberName'
  | 'members___member___belongs___grade'
  | 'members___member___position'
  | 'members___member___isGraduated'
  | 'members___member___activities'
  | 'members___member___activities___rawBody'
  | 'members___member___activities___fileAbsolutePath'
  | 'members___member___activities___slug'
  | 'members___member___activities___body'
  | 'members___member___activities___excerpt'
  | 'members___member___activities___headings'
  | 'members___member___activities___html'
  | 'members___member___activities___mdxAST'
  | 'members___member___activities___tableOfContents'
  | 'members___member___activities___timeToRead'
  | 'members___member___activities___id'
  | 'members___member___activities___children'
  | 'members___member___nameJa'
  | 'members___member___joinedAt'
  | 'members___member___social___github'
  | 'members___member___social___twitter'
  | 'members___member___id'
  | 'members___member___parent___id'
  | 'members___member___parent___children'
  | 'members___member___children'
  | 'members___member___children___id'
  | 'members___member___children___children'
  | 'members___member___internal___content'
  | 'members___member___internal___contentDigest'
  | 'members___member___internal___description'
  | 'members___member___internal___fieldOwners'
  | 'members___member___internal___ignoreType'
  | 'members___member___internal___mediaType'
  | 'members___member___internal___owner'
  | 'members___member___internal___type'
  | 'members___level'
  | 'members___skillName'
  | 'members___memberName'
  | 'members___id'
  | 'members___parent___id'
  | 'members___parent___parent___id'
  | 'members___parent___parent___children'
  | 'members___parent___children'
  | 'members___parent___children___id'
  | 'members___parent___children___children'
  | 'members___parent___internal___content'
  | 'members___parent___internal___contentDigest'
  | 'members___parent___internal___description'
  | 'members___parent___internal___fieldOwners'
  | 'members___parent___internal___ignoreType'
  | 'members___parent___internal___mediaType'
  | 'members___parent___internal___owner'
  | 'members___parent___internal___type'
  | 'members___children'
  | 'members___children___id'
  | 'members___children___parent___id'
  | 'members___children___parent___children'
  | 'members___children___children'
  | 'members___children___children___id'
  | 'members___children___children___children'
  | 'members___children___internal___content'
  | 'members___children___internal___contentDigest'
  | 'members___children___internal___description'
  | 'members___children___internal___fieldOwners'
  | 'members___children___internal___ignoreType'
  | 'members___children___internal___mediaType'
  | 'members___children___internal___owner'
  | 'members___children___internal___type'
  | 'members___internal___content'
  | 'members___internal___contentDigest'
  | 'members___internal___description'
  | 'members___internal___fieldOwners'
  | 'members___internal___ignoreType'
  | 'members___internal___mediaType'
  | 'members___internal___owner'
  | 'members___internal___type'
  | 'name'
  | 'description'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SkillGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SkillEdge>
  nodes: Array<Skill>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SkillSortInput = {
  fields?: Maybe<Array<Maybe<SkillFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type TeamMemberConnection = {
  totalCount: Scalars['Int']
  edges: Array<TeamMemberEdge>
  nodes: Array<TeamMember>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<TeamMemberGroupConnection>
}

export type TeamMemberConnectionDistinctArgs = {
  field: TeamMemberFieldsEnum
}

export type TeamMemberConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: TeamMemberFieldsEnum
}

export type TeamMemberEdge = {
  next?: Maybe<TeamMember>
  node: TeamMember
  previous?: Maybe<TeamMember>
}

export type TeamMemberFieldsEnum =
  | 'member___name'
  | 'member___description'
  | 'member___skills'
  | 'member___skills___skill___members'
  | 'member___skills___skill___name'
  | 'member___skills___skill___description'
  | 'member___skills___skill___id'
  | 'member___skills___skill___children'
  | 'member___skills___member___name'
  | 'member___skills___member___description'
  | 'member___skills___member___skills'
  | 'member___skills___member___teams'
  | 'member___skills___member___contributions'
  | 'member___skills___member___position'
  | 'member___skills___member___isGraduated'
  | 'member___skills___member___activities'
  | 'member___skills___member___nameJa'
  | 'member___skills___member___joinedAt'
  | 'member___skills___member___id'
  | 'member___skills___member___children'
  | 'member___skills___level'
  | 'member___skills___skillName'
  | 'member___skills___memberName'
  | 'member___skills___id'
  | 'member___skills___parent___id'
  | 'member___skills___parent___children'
  | 'member___skills___children'
  | 'member___skills___children___id'
  | 'member___skills___children___children'
  | 'member___skills___internal___content'
  | 'member___skills___internal___contentDigest'
  | 'member___skills___internal___description'
  | 'member___skills___internal___fieldOwners'
  | 'member___skills___internal___ignoreType'
  | 'member___skills___internal___mediaType'
  | 'member___skills___internal___owner'
  | 'member___skills___internal___type'
  | 'member___teams'
  | 'member___teams___member___name'
  | 'member___teams___member___description'
  | 'member___teams___member___skills'
  | 'member___teams___member___teams'
  | 'member___teams___member___contributions'
  | 'member___teams___member___position'
  | 'member___teams___member___isGraduated'
  | 'member___teams___member___activities'
  | 'member___teams___member___nameJa'
  | 'member___teams___member___joinedAt'
  | 'member___teams___member___id'
  | 'member___teams___member___children'
  | 'member___teams___team___name'
  | 'member___teams___team___activities'
  | 'member___teams___team___members'
  | 'member___teams___team___nameJa'
  | 'member___teams___team___id'
  | 'member___teams___team___children'
  | 'member___teams___memberName'
  | 'member___teams___leader'
  | 'member___teams___teamName'
  | 'member___teams___id'
  | 'member___teams___parent___id'
  | 'member___teams___parent___children'
  | 'member___teams___children'
  | 'member___teams___children___id'
  | 'member___teams___children___children'
  | 'member___teams___internal___content'
  | 'member___teams___internal___contentDigest'
  | 'member___teams___internal___description'
  | 'member___teams___internal___fieldOwners'
  | 'member___teams___internal___ignoreType'
  | 'member___teams___internal___mediaType'
  | 'member___teams___internal___owner'
  | 'member___teams___internal___type'
  | 'member___contributions'
  | 'member___contributions___portfolio___contributors'
  | 'member___contributions___portfolio___name'
  | 'member___contributions___portfolio___nameJa'
  | 'member___contributions___portfolio___id'
  | 'member___contributions___portfolio___children'
  | 'member___contributions___member___name'
  | 'member___contributions___member___description'
  | 'member___contributions___member___skills'
  | 'member___contributions___member___teams'
  | 'member___contributions___member___contributions'
  | 'member___contributions___member___position'
  | 'member___contributions___member___isGraduated'
  | 'member___contributions___member___activities'
  | 'member___contributions___member___nameJa'
  | 'member___contributions___member___joinedAt'
  | 'member___contributions___member___id'
  | 'member___contributions___member___children'
  | 'member___contributions___memberName'
  | 'member___contributions___portfolioName'
  | 'member___contributions___id'
  | 'member___contributions___parent___id'
  | 'member___contributions___parent___children'
  | 'member___contributions___children'
  | 'member___contributions___children___id'
  | 'member___contributions___children___children'
  | 'member___contributions___internal___content'
  | 'member___contributions___internal___contentDigest'
  | 'member___contributions___internal___description'
  | 'member___contributions___internal___fieldOwners'
  | 'member___contributions___internal___ignoreType'
  | 'member___contributions___internal___mediaType'
  | 'member___contributions___internal___owner'
  | 'member___contributions___internal___type'
  | 'member___belongs___facultyName'
  | 'member___belongs___faculty___members'
  | 'member___belongs___faculty___name'
  | 'member___belongs___faculty___nameJa'
  | 'member___belongs___faculty___id'
  | 'member___belongs___faculty___children'
  | 'member___belongs___memberName'
  | 'member___belongs___member___name'
  | 'member___belongs___member___description'
  | 'member___belongs___member___skills'
  | 'member___belongs___member___teams'
  | 'member___belongs___member___contributions'
  | 'member___belongs___member___position'
  | 'member___belongs___member___isGraduated'
  | 'member___belongs___member___activities'
  | 'member___belongs___member___nameJa'
  | 'member___belongs___member___joinedAt'
  | 'member___belongs___member___id'
  | 'member___belongs___member___children'
  | 'member___belongs___grade'
  | 'member___position'
  | 'member___isGraduated'
  | 'member___activities'
  | 'member___activities___rawBody'
  | 'member___activities___fileAbsolutePath'
  | 'member___activities___frontmatter___title'
  | 'member___activities___frontmatter___participants'
  | 'member___activities___frontmatter___duration'
  | 'member___activities___frontmatter___startTime'
  | 'member___activities___frontmatter___endTime'
  | 'member___activities___frontmatter___date'
  | 'member___activities___frontmatter___topics'
  | 'member___activities___frontmatter___teamName'
  | 'member___activities___slug'
  | 'member___activities___body'
  | 'member___activities___excerpt'
  | 'member___activities___headings'
  | 'member___activities___headings___value'
  | 'member___activities___headings___depth'
  | 'member___activities___html'
  | 'member___activities___mdxAST'
  | 'member___activities___tableOfContents'
  | 'member___activities___timeToRead'
  | 'member___activities___wordCount___paragraphs'
  | 'member___activities___wordCount___sentences'
  | 'member___activities___wordCount___words'
  | 'member___activities___id'
  | 'member___activities___parent___id'
  | 'member___activities___parent___children'
  | 'member___activities___children'
  | 'member___activities___children___id'
  | 'member___activities___children___children'
  | 'member___activities___internal___content'
  | 'member___activities___internal___contentDigest'
  | 'member___activities___internal___description'
  | 'member___activities___internal___fieldOwners'
  | 'member___activities___internal___ignoreType'
  | 'member___activities___internal___mediaType'
  | 'member___activities___internal___owner'
  | 'member___activities___internal___type'
  | 'member___nameJa'
  | 'member___joinedAt'
  | 'member___social___github'
  | 'member___social___twitter'
  | 'member___id'
  | 'member___parent___id'
  | 'member___parent___parent___id'
  | 'member___parent___parent___children'
  | 'member___parent___children'
  | 'member___parent___children___id'
  | 'member___parent___children___children'
  | 'member___parent___internal___content'
  | 'member___parent___internal___contentDigest'
  | 'member___parent___internal___description'
  | 'member___parent___internal___fieldOwners'
  | 'member___parent___internal___ignoreType'
  | 'member___parent___internal___mediaType'
  | 'member___parent___internal___owner'
  | 'member___parent___internal___type'
  | 'member___children'
  | 'member___children___id'
  | 'member___children___parent___id'
  | 'member___children___parent___children'
  | 'member___children___children'
  | 'member___children___children___id'
  | 'member___children___children___children'
  | 'member___children___internal___content'
  | 'member___children___internal___contentDigest'
  | 'member___children___internal___description'
  | 'member___children___internal___fieldOwners'
  | 'member___children___internal___ignoreType'
  | 'member___children___internal___mediaType'
  | 'member___children___internal___owner'
  | 'member___children___internal___type'
  | 'member___internal___content'
  | 'member___internal___contentDigest'
  | 'member___internal___description'
  | 'member___internal___fieldOwners'
  | 'member___internal___ignoreType'
  | 'member___internal___mediaType'
  | 'member___internal___owner'
  | 'member___internal___type'
  | 'team___name'
  | 'team___activities'
  | 'team___activities___rawBody'
  | 'team___activities___fileAbsolutePath'
  | 'team___activities___frontmatter___title'
  | 'team___activities___frontmatter___participants'
  | 'team___activities___frontmatter___duration'
  | 'team___activities___frontmatter___startTime'
  | 'team___activities___frontmatter___endTime'
  | 'team___activities___frontmatter___date'
  | 'team___activities___frontmatter___topics'
  | 'team___activities___frontmatter___teamName'
  | 'team___activities___slug'
  | 'team___activities___body'
  | 'team___activities___excerpt'
  | 'team___activities___headings'
  | 'team___activities___headings___value'
  | 'team___activities___headings___depth'
  | 'team___activities___html'
  | 'team___activities___mdxAST'
  | 'team___activities___tableOfContents'
  | 'team___activities___timeToRead'
  | 'team___activities___wordCount___paragraphs'
  | 'team___activities___wordCount___sentences'
  | 'team___activities___wordCount___words'
  | 'team___activities___id'
  | 'team___activities___parent___id'
  | 'team___activities___parent___children'
  | 'team___activities___children'
  | 'team___activities___children___id'
  | 'team___activities___children___children'
  | 'team___activities___internal___content'
  | 'team___activities___internal___contentDigest'
  | 'team___activities___internal___description'
  | 'team___activities___internal___fieldOwners'
  | 'team___activities___internal___ignoreType'
  | 'team___activities___internal___mediaType'
  | 'team___activities___internal___owner'
  | 'team___activities___internal___type'
  | 'team___members'
  | 'team___members___member___name'
  | 'team___members___member___description'
  | 'team___members___member___skills'
  | 'team___members___member___teams'
  | 'team___members___member___contributions'
  | 'team___members___member___position'
  | 'team___members___member___isGraduated'
  | 'team___members___member___activities'
  | 'team___members___member___nameJa'
  | 'team___members___member___joinedAt'
  | 'team___members___member___id'
  | 'team___members___member___children'
  | 'team___members___team___name'
  | 'team___members___team___activities'
  | 'team___members___team___members'
  | 'team___members___team___nameJa'
  | 'team___members___team___id'
  | 'team___members___team___children'
  | 'team___members___memberName'
  | 'team___members___leader'
  | 'team___members___teamName'
  | 'team___members___id'
  | 'team___members___parent___id'
  | 'team___members___parent___children'
  | 'team___members___children'
  | 'team___members___children___id'
  | 'team___members___children___children'
  | 'team___members___internal___content'
  | 'team___members___internal___contentDigest'
  | 'team___members___internal___description'
  | 'team___members___internal___fieldOwners'
  | 'team___members___internal___ignoreType'
  | 'team___members___internal___mediaType'
  | 'team___members___internal___owner'
  | 'team___members___internal___type'
  | 'team___nameJa'
  | 'team___id'
  | 'team___parent___id'
  | 'team___parent___parent___id'
  | 'team___parent___parent___children'
  | 'team___parent___children'
  | 'team___parent___children___id'
  | 'team___parent___children___children'
  | 'team___parent___internal___content'
  | 'team___parent___internal___contentDigest'
  | 'team___parent___internal___description'
  | 'team___parent___internal___fieldOwners'
  | 'team___parent___internal___ignoreType'
  | 'team___parent___internal___mediaType'
  | 'team___parent___internal___owner'
  | 'team___parent___internal___type'
  | 'team___children'
  | 'team___children___id'
  | 'team___children___parent___id'
  | 'team___children___parent___children'
  | 'team___children___children'
  | 'team___children___children___id'
  | 'team___children___children___children'
  | 'team___children___internal___content'
  | 'team___children___internal___contentDigest'
  | 'team___children___internal___description'
  | 'team___children___internal___fieldOwners'
  | 'team___children___internal___ignoreType'
  | 'team___children___internal___mediaType'
  | 'team___children___internal___owner'
  | 'team___children___internal___type'
  | 'team___internal___content'
  | 'team___internal___contentDigest'
  | 'team___internal___description'
  | 'team___internal___fieldOwners'
  | 'team___internal___ignoreType'
  | 'team___internal___mediaType'
  | 'team___internal___owner'
  | 'team___internal___type'
  | 'memberName'
  | 'leader'
  | 'teamName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type TeamMemberGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<TeamMemberEdge>
  nodes: Array<TeamMember>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type TeamMemberSortInput = {
  fields?: Maybe<Array<Maybe<TeamMemberFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type TeamConnection = {
  totalCount: Scalars['Int']
  edges: Array<TeamEdge>
  nodes: Array<Team>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<TeamGroupConnection>
}

export type TeamConnectionDistinctArgs = {
  field: TeamFieldsEnum
}

export type TeamConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: TeamFieldsEnum
}

export type TeamEdge = {
  next?: Maybe<Team>
  node: Team
  previous?: Maybe<Team>
}

export type TeamFieldsEnum =
  | 'name'
  | 'activities'
  | 'activities___rawBody'
  | 'activities___fileAbsolutePath'
  | 'activities___frontmatter___title'
  | 'activities___frontmatter___team___name'
  | 'activities___frontmatter___team___activities'
  | 'activities___frontmatter___team___members'
  | 'activities___frontmatter___team___nameJa'
  | 'activities___frontmatter___team___id'
  | 'activities___frontmatter___team___children'
  | 'activities___frontmatter___participants'
  | 'activities___frontmatter___participants___name'
  | 'activities___frontmatter___participants___description'
  | 'activities___frontmatter___participants___skills'
  | 'activities___frontmatter___participants___teams'
  | 'activities___frontmatter___participants___contributions'
  | 'activities___frontmatter___participants___position'
  | 'activities___frontmatter___participants___isGraduated'
  | 'activities___frontmatter___participants___activities'
  | 'activities___frontmatter___participants___nameJa'
  | 'activities___frontmatter___participants___joinedAt'
  | 'activities___frontmatter___participants___id'
  | 'activities___frontmatter___participants___children'
  | 'activities___frontmatter___duration'
  | 'activities___frontmatter___startTime'
  | 'activities___frontmatter___endTime'
  | 'activities___frontmatter___date'
  | 'activities___frontmatter___topics'
  | 'activities___frontmatter___teamName'
  | 'activities___slug'
  | 'activities___body'
  | 'activities___excerpt'
  | 'activities___headings'
  | 'activities___headings___value'
  | 'activities___headings___depth'
  | 'activities___html'
  | 'activities___mdxAST'
  | 'activities___tableOfContents'
  | 'activities___timeToRead'
  | 'activities___wordCount___paragraphs'
  | 'activities___wordCount___sentences'
  | 'activities___wordCount___words'
  | 'activities___id'
  | 'activities___parent___id'
  | 'activities___parent___parent___id'
  | 'activities___parent___parent___children'
  | 'activities___parent___children'
  | 'activities___parent___children___id'
  | 'activities___parent___children___children'
  | 'activities___parent___internal___content'
  | 'activities___parent___internal___contentDigest'
  | 'activities___parent___internal___description'
  | 'activities___parent___internal___fieldOwners'
  | 'activities___parent___internal___ignoreType'
  | 'activities___parent___internal___mediaType'
  | 'activities___parent___internal___owner'
  | 'activities___parent___internal___type'
  | 'activities___children'
  | 'activities___children___id'
  | 'activities___children___parent___id'
  | 'activities___children___parent___children'
  | 'activities___children___children'
  | 'activities___children___children___id'
  | 'activities___children___children___children'
  | 'activities___children___internal___content'
  | 'activities___children___internal___contentDigest'
  | 'activities___children___internal___description'
  | 'activities___children___internal___fieldOwners'
  | 'activities___children___internal___ignoreType'
  | 'activities___children___internal___mediaType'
  | 'activities___children___internal___owner'
  | 'activities___children___internal___type'
  | 'activities___internal___content'
  | 'activities___internal___contentDigest'
  | 'activities___internal___description'
  | 'activities___internal___fieldOwners'
  | 'activities___internal___ignoreType'
  | 'activities___internal___mediaType'
  | 'activities___internal___owner'
  | 'activities___internal___type'
  | 'members'
  | 'members___member___name'
  | 'members___member___description'
  | 'members___member___skills'
  | 'members___member___skills___level'
  | 'members___member___skills___skillName'
  | 'members___member___skills___memberName'
  | 'members___member___skills___id'
  | 'members___member___skills___children'
  | 'members___member___teams'
  | 'members___member___teams___memberName'
  | 'members___member___teams___leader'
  | 'members___member___teams___teamName'
  | 'members___member___teams___id'
  | 'members___member___teams___children'
  | 'members___member___contributions'
  | 'members___member___contributions___memberName'
  | 'members___member___contributions___portfolioName'
  | 'members___member___contributions___id'
  | 'members___member___contributions___children'
  | 'members___member___belongs___facultyName'
  | 'members___member___belongs___memberName'
  | 'members___member___belongs___grade'
  | 'members___member___position'
  | 'members___member___isGraduated'
  | 'members___member___activities'
  | 'members___member___activities___rawBody'
  | 'members___member___activities___fileAbsolutePath'
  | 'members___member___activities___slug'
  | 'members___member___activities___body'
  | 'members___member___activities___excerpt'
  | 'members___member___activities___headings'
  | 'members___member___activities___html'
  | 'members___member___activities___mdxAST'
  | 'members___member___activities___tableOfContents'
  | 'members___member___activities___timeToRead'
  | 'members___member___activities___id'
  | 'members___member___activities___children'
  | 'members___member___nameJa'
  | 'members___member___joinedAt'
  | 'members___member___social___github'
  | 'members___member___social___twitter'
  | 'members___member___id'
  | 'members___member___parent___id'
  | 'members___member___parent___children'
  | 'members___member___children'
  | 'members___member___children___id'
  | 'members___member___children___children'
  | 'members___member___internal___content'
  | 'members___member___internal___contentDigest'
  | 'members___member___internal___description'
  | 'members___member___internal___fieldOwners'
  | 'members___member___internal___ignoreType'
  | 'members___member___internal___mediaType'
  | 'members___member___internal___owner'
  | 'members___member___internal___type'
  | 'members___team___name'
  | 'members___team___activities'
  | 'members___team___activities___rawBody'
  | 'members___team___activities___fileAbsolutePath'
  | 'members___team___activities___slug'
  | 'members___team___activities___body'
  | 'members___team___activities___excerpt'
  | 'members___team___activities___headings'
  | 'members___team___activities___html'
  | 'members___team___activities___mdxAST'
  | 'members___team___activities___tableOfContents'
  | 'members___team___activities___timeToRead'
  | 'members___team___activities___id'
  | 'members___team___activities___children'
  | 'members___team___members'
  | 'members___team___members___memberName'
  | 'members___team___members___leader'
  | 'members___team___members___teamName'
  | 'members___team___members___id'
  | 'members___team___members___children'
  | 'members___team___nameJa'
  | 'members___team___id'
  | 'members___team___parent___id'
  | 'members___team___parent___children'
  | 'members___team___children'
  | 'members___team___children___id'
  | 'members___team___children___children'
  | 'members___team___internal___content'
  | 'members___team___internal___contentDigest'
  | 'members___team___internal___description'
  | 'members___team___internal___fieldOwners'
  | 'members___team___internal___ignoreType'
  | 'members___team___internal___mediaType'
  | 'members___team___internal___owner'
  | 'members___team___internal___type'
  | 'members___memberName'
  | 'members___leader'
  | 'members___teamName'
  | 'members___id'
  | 'members___parent___id'
  | 'members___parent___parent___id'
  | 'members___parent___parent___children'
  | 'members___parent___children'
  | 'members___parent___children___id'
  | 'members___parent___children___children'
  | 'members___parent___internal___content'
  | 'members___parent___internal___contentDigest'
  | 'members___parent___internal___description'
  | 'members___parent___internal___fieldOwners'
  | 'members___parent___internal___ignoreType'
  | 'members___parent___internal___mediaType'
  | 'members___parent___internal___owner'
  | 'members___parent___internal___type'
  | 'members___children'
  | 'members___children___id'
  | 'members___children___parent___id'
  | 'members___children___parent___children'
  | 'members___children___children'
  | 'members___children___children___id'
  | 'members___children___children___children'
  | 'members___children___internal___content'
  | 'members___children___internal___contentDigest'
  | 'members___children___internal___description'
  | 'members___children___internal___fieldOwners'
  | 'members___children___internal___ignoreType'
  | 'members___children___internal___mediaType'
  | 'members___children___internal___owner'
  | 'members___children___internal___type'
  | 'members___internal___content'
  | 'members___internal___contentDigest'
  | 'members___internal___description'
  | 'members___internal___fieldOwners'
  | 'members___internal___ignoreType'
  | 'members___internal___mediaType'
  | 'members___internal___owner'
  | 'members___internal___type'
  | 'nameJa'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type TeamGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<TeamEdge>
  nodes: Array<Team>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type TeamSortInput = {
  fields?: Maybe<Array<Maybe<TeamFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime'

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePluginPluginOptionsFilterInput = {
  alias?: Maybe<SitePluginPluginOptionsAliasFilterInput>
  extensions?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  lessBabel?: Maybe<BooleanQueryOperatorInput>
  mediaTypes?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsAliasFilterInput = {
  _?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___alias____'
  | 'pluginOptions___extensions'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___root'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type LogoImageQueryVariables = Exact<{ [key: string]: never }>

export type LogoImageQuery = { file?: Maybe<Pick<File, 'publicURL'>> }

export type MemberIconQueryVariables = Exact<{ [key: string]: never }>

export type MemberIconQuery = {
  allFile: {
    nodes: Array<
      Pick<File, 'name'> & {
        xxs?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        xs?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        sm?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        md?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        lg?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        xl?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
      }
    >
  }
}

export type PageHeaderQueryVariables = Exact<{ [key: string]: never }>

export type PageHeaderQuery = {
  allFile: {
    nodes: Array<
      Pick<File, 'name'> & {
        childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
      }
    >
  }
}

export type TeamIconQueryVariables = Exact<{ [key: string]: never }>

export type TeamIconQuery = {
  svgs: { nodes: Array<Pick<File, 'name' | 'publicURL'>> }
  images: {
    nodes: Array<
      Pick<File, 'name'> & {
        xxs?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        xs?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        sm?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        md?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        lg?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
        xl?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
      }
    >
  }
}

export type CreatePagesQueryVariables = Exact<{ [key: string]: never }>

export type CreatePagesQuery = {
  allMember: { nodes: Array<Pick<Member, 'id' | 'name'>> }
  allTeam: { nodes: Array<Pick<Team, 'id' | 'name'>> }
}

export type AboutPageQueryVariables = Exact<{ [key: string]: never }>

export type AboutPageQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
  aboutJa?: Maybe<{ childMdx?: Maybe<Pick<Mdx, 'body' | 'excerpt'>> }>
  aboutEn?: Maybe<{ childMdx?: Maybe<Pick<Mdx, 'body' | 'excerpt'>> }>
}

export type ActivityLogPageQueryVariables = Exact<{ [key: string]: never }>

export type ActivityLogPageQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
  allFile: {
    nodes: Array<
      Pick<File, 'id'> & {
        childMdx?: Maybe<
          Pick<Mdx, 'body'> & {
            frontmatter?: Maybe<
              Pick<MdxFrontmatter, 'date' | 'title' | 'startTime' | 'endTime'>
            >
          }
        >
      }
    >
  }
}

export type IndexQueryQueryVariables = Exact<{ [key: string]: never }>

export type IndexQueryQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
}

export type MembersPageQueryVariables = Exact<{ [key: string]: never }>

export type MembersPageQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
  activeMemvers: { nodes: Array<MemberInfoFragment> }
  graduatedMembers: { nodes: Array<MemberInfoFragment> }
}

export type MemberInfoFragment = Pick<
  Member,
  'name' | 'position' | 'nameJa' | 'id' | 'joinedAt'
> & {
  belongs: Pick<MemberBelongs, 'grade'> & {
    faculty: Pick<Faculty, 'name' | 'nameJa' | 'id'>
  }
  skills?: Maybe<
    Array<
      Pick<MemberSkill, 'level' | 'id'> & { skill: Pick<Skill, 'name' | 'id'> }
    >
  >
  teams?: Maybe<
    Array<
      Pick<TeamMember, 'id' | 'leader'> & { team: Pick<Team, 'name' | 'id'> }
    >
  >
}

export type PortfoliosPageQueryVariables = Exact<{ [key: string]: never }>

export type PortfoliosPageQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
  allPortfolio: {
    nodes: Array<
      Pick<Portfolio, 'id' | 'name' | 'nameJa'> & {
        contributors: Array<
          Pick<Contribution, 'id'> & { member: Pick<Member, 'name'> }
        >
      }
    >
  }
}

export type TeamsPageQueryVariables = Exact<{ [key: string]: never }>

export type TeamsPageQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
  allTeam: {
    nodes: Array<
      Pick<Team, 'id' | 'name' | 'nameJa'> & {
        members: Array<
          Pick<TeamMember, 'id' | 'leader'> & { member: Pick<Member, 'name'> }
        >
      }
    >
  }
}

export type MemberTemplateQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type MemberTemplateQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
  member?: Maybe<
    Pick<
      Member,
      | 'description'
      | 'isGraduated'
      | 'joinedAt'
      | 'name'
      | 'nameJa'
      | 'position'
    > & {
      belongs: Pick<MemberBelongs, 'grade'> & {
        faculty: Pick<Faculty, 'name' | 'nameJa'>
      }
      contributions?: Maybe<
        Array<
          Pick<Contribution, 'id'> & {
            portfolio: Pick<Portfolio, 'id' | 'name' | 'nameJa'>
          }
        >
      >
      skills?: Maybe<
        Array<
          Pick<MemberSkill, 'level' | 'id'> & {
            skill: Pick<Skill, 'id' | 'description' | 'name'>
          }
        >
      >
      social?: Maybe<Pick<MemberSocial, 'github' | 'twitter'>>
      teams?: Maybe<
        Array<
          Pick<TeamMember, 'leader' | 'id'> & {
            team: Pick<Team, 'name' | 'nameJa'>
          }
        >
      >
      activities?: Maybe<
        Array<
          Maybe<
            Pick<Mdx, 'id'> & {
              frontmatter?: Maybe<
                Pick<MdxFrontmatter, 'title' | 'date'> & {
                  team?: Maybe<Pick<Team, 'name' | 'nameJa' | 'id'>>
                }
              >
            }
          >
        >
      >
    }
  >
}

export type TeamTemplateQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type TeamTemplateQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>
  team?: Maybe<
    Pick<Team, 'name' | 'nameJa'> & {
      members: Array<
        Pick<TeamMember, 'id' | 'leader'> & {
          member: Pick<Member, 'name' | 'nameJa'>
        }
      >
      activities?: Maybe<
        Array<
          Maybe<
            Pick<Mdx, 'id'> & {
              frontmatter?: Maybe<Pick<MdxFrontmatter, 'title' | 'date'>>
            }
          >
        >
      >
    }
  >
}

export type GatsbyImageSharpFixedFragment = Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: ImageSharpFluid['presentationHeight']
  maxWidth: ImageSharpFluid['presentationWidth']
}

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>
