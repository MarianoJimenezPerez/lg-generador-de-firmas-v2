'use strict';

/**
 * employed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employed.employed');
