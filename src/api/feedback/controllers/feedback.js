'use strict';

/**
 * feedback controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const axios = require('axios');

module.exports = createCoreController('api::feedback.feedback', ({ strapi }) => ({
    async create(ctx) {

        const response = await super.create(ctx);

        const { data, meta } = response

        axios.get(process.env.BITRIX_URL, {
            params: {
                'fields[TITLE]': `Обратная связь ${data.attributes.name}`,
                'fields[NAME]': data.attributes.name,
                'fields[PHONE][0][VALUE_TYPE]': 'WORK',
                'fields[PHONE][0][VALUE]': data.attributes.phone,
                'fields[EMAIL][0][VALUE_TYPE]': 'WORK',
                'fields[EMAIL][0][VALUE]': data.attributes.email,
                'fields[SOURCE_ID]': 'UC_AILEWA',
                'fields[SOURCE_DESCRIPTION]': data.attributes.message,
            }
        })
            .then((response) => {
                console.log('bitrix feedback response', response)
            })
            .catch((error) => {
                console.log('bitrix feedback error', error)
            })

        return response;
    }
}));
