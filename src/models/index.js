// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, TagCard, Card, Note, TagNote, Image, TagImage, Link, TagLink } = initSchema(schema);

export {
  Tag,
  TagCard,
  Card,
  Note,
  TagNote,
  Image,
  TagImage,
  Link,
  TagLink
};