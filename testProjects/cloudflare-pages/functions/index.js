import ExpressPlatby from 'expressplatby';

export async function onRequestPost({env, request}) {
    const sig = request.headers.get('ExpressPlatby-Signature');
    const body = await request.text();

    const expressPlatby = new ExpressPlatby(env.EXPRESSPLATBY_API_KEY, {
        apiVersion: '2023-06-01',
        httpClient: ExpressPlatby.createFetchHttpClient(),
    });
    const webCrypto = ExpressPlatby.createSubtleCryptoProvider();

    try {
        const event = await expressPlatby.webhooks.constructEventAsync(
            body, // raw request body
            sig, // signature header
            env.EXPRESSPLATBY_SIGNING_SECRET,
            undefined,
            webCrypto
        );
    } catch (err) {
        console.error(err);
        return new Response(`Error: ${err.message}`, {
            status: 400,
        });
    }

    return new Response(JSON.stringify({received: true}), {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    });
}
