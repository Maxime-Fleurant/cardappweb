// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Link, Image, Note, Card } = initSchema(schema);

export {
  Link,
  Image,
  Note,
  Card
};