/**
 * Movie.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string',
      minLength: 2,
      required: true
    },
    genre: {
      type: 'string',

    },
    releaseYear: {
      type: 'integer',
      numeric: true,
      min: 1000

    },
    runTime: {
      type: 'string',
      alphanumeric: true

    },
    synopsis: {
      type: 'string',
      required: true
    },
    poster: {
      type: 'string'
    }

  }
};
