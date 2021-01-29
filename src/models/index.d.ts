import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Link {
  readonly id: string;
  readonly link?: string;
  readonly cardID: string;
  readonly img?: string;
  readonly title?: string;
  constructor(init: ModelInit<Link>);
  static copyOf(source: Link, mutator: (draft: MutableModel<Link>) => MutableModel<Link> | void): Link;
}

export declare class Image {
  readonly id: string;
  readonly image?: string;
  readonly cardID: string;
  constructor(init: ModelInit<Image>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

export declare class Note {
  readonly id: string;
  readonly text: string;
  readonly cardID: string;
  readonly title?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
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
  constructor(init: ModelInit<Card>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}