import ExpressPlatby from 'expressplatby';

async function handleRequest(request, env) {
    const expressPlatby = ExpressPlatby(env.EXPRESSPLATBY_API_KEY, {
        // Cloudflare Workers use the Fetch API for their API requests.
        httpClient: ExpressPlatby.createFetchHttpClient(),
    });
    /*
     * Sample checkout integration which redirects a customer to a checkout page
     * for the specified line items.
     *
     * See https://expressplatby.cz/docs/payments/accept-a-payment?integration=checkout.
     */
    const session = await expressPlatby.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });

    return Response.redirect(session.url, 303);
}

export default {
    fetch: handleRequest,
};
