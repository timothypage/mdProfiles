/**
 * @module mdProfile
 */

import full from '../resources/profiles/full.json';
import basic from '../resources/profiles/basic.json';
import project from '../resources/profiles/project.json';
import product from '../resources/profiles/product.json';
import core from '../resources/profiles/core.json';
import geologic from '../resources/profiles/geologic.json';
import image from '../resources/profiles/image.json';
import invertebrate from '../resources/profiles/invertebrate.json';
import vertebrate from '../resources/profiles/vertebrate.json';

import schema from '../resources/profile-schema.json';
import pkg from '../package.json';

const version = pkg.version;

function asArray() {
  return [
    full,
    basic,
    project,
    product,
    core,
    geologic,
    image,
    invertebrate,
    vertebrate
  ];
}

export default {
  full,
  basic,
  project,
  product,
  core,
  geologic,
  image,
  invertebrate,
  vertebrate,
  schema,
  asArray,
  version
};
