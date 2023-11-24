import ExpressPayments from 'expresspayments';

export async function onRequestPost({env, request}) {
    const sig = request.headers.get('EP-Signature');
    const body = await request.text();

    const expressPayments = new ExpressPayments(env.EP_API_KEY, {
        apiVersion: '2023-11-01',
        httpClient: ExpressPayments.createFetchHttpClient(),
    });
    const webCrypto = ExpressPayments.createSubtleCryptoProvider();

    try {
        const event = await expressPayments.webhooks.constructEventAsync(
            body, // raw request body
            sig, // signature header
            env.EP_SIGNING_SECRET,
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
