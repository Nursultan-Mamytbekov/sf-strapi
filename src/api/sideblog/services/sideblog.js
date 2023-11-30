'use strict';

/**
 * sideblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sideblog.sideblog');
