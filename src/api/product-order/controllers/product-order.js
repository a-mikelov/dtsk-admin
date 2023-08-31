'use strict';

/**
 * product-order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const axios = require('axios');

module.exports = createCoreController('api::product-order.product-order', ({ strapi }) => ({
    async create(ctx) {

        const response = await super.create(ctx);

        const { data, meta } = response

        axios.get(process.env.BITRIX_URL, {
            params: {
                'fields[TITLE]': `Заказ товара ${data.attributes.name}`,
                'fields[NAME]': data.attributes.name,
                'fields[PHONE][0][VALUE_TYPE]': 'WORK',
                'fields[PHONE][0][VALUE]': data.attributes.client.phone,
                'fields[EMAIL][0][VALUE_TYPE]': 'WORK',
                'fields[EMAIL][0][VALUE]': data.attributes.client.email,
                'fields[SOURCE_ID]': 'UC_AILEWA',
                'fields[SOURCE_DESCRIPTION]': data.attributes.note,
            }
        })
            .then((response) => {
                console.log('bitrix product response', response)
            })
            .catch((error) => {
                console.log('bitrix product error', error)
            })

        return response;
    }
}));
