import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly TagCards?: (TagCard | null)[];
  readonly TagLinks?: (TagLink | null)[];
  readonly TagNotes?: (TagNote | null)[];
  readonly TagImages?: (TagImage | null)[];
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

export declare class TagCard {
  readonly id: string;
  readonly tag: Tag;
  readonly card: Card;
  constructor(init: ModelInit<TagCard>);
  static copyOf(source: TagCard, mutator: (draft: MutableModel<TagCard>) => MutableModel<TagCard> | void): TagCard;
}

export declare class Card {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly coverImage?: string;
  readonly cardParentId?: string;
  readonly cardParent?: Card;
  readonly child?: (Card | null)[];
  readonly Notes?: (Note | null)[];
  readonly Images?: (Image | null)[];
  readonly Links?: (Link | null)[];
  readonly tags?: (TagCard | null)[];
  constructor(init: ModelInit<Card>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}

export declare class Note {
  readonly id: string;
  readonly text: string;
  readonly cardID: string;
  readonly title?: string;
  readonly tags?: (TagNote | null)[];
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

export declare class TagNote {
  readonly id: string;
  readonly tag: Tag;
  readonly note: Note;
  constructor(init: ModelInit<TagNote>);
  static copyOf(source: TagNote, mutator: (draft: MutableModel<TagNote>) => MutableModel<TagNote> | void): TagNote;
}

export declare class Image {
  readonly id: string;
  readonly image: string;
  readonly cardID: string;
  readonly tags?: (TagImage | null)[];
  constructor(init: ModelInit<Image>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

export declare class TagImage {
  readonly id: string;
  readonly tag: Tag;
  readonly image: Image;
  constructor(init: ModelInit<TagImage>);
  static copyOf(source: TagImage, mutator: (draft: MutableModel<TagImage>) => MutableModel<TagImage> | void): TagImage;
}

export declare class Link {
  readonly id: string;
  readonly link: string;
  readonly cardID: string;
  readonly img?: string;
  readonly title?: string;
  readonly tags?: (TagLink | null)[];
  constructor(init: ModelInit<Link>);
  static copyOf(source: Link, mutator: (draft: MutableModel<Link>) => MutableModel<Link> | void): Link;
}

export declare class TagLink {
  readonly id: string;
  readonly tag: Tag;
  readonly link: Link;
  constructor(init: ModelInit<TagLink>);
  static copyOf(source: TagLink, mutator: (draft: MutableModel<TagLink>) => MutableModel<TagLink> | void): TagLink;
}