import {CryptoProvider} from '../crypto/CryptoProvider.js';
import {HttpClient} from '../net/HttpClient.js';
import {PlatformFunctions} from './PlatformFunctions.js';
import {ExpressPlatbyEmitter} from '../ExpressPlatbyEmitter.js';
import {BufferedFile, MultipartRequestData, RequestData} from '../Types.js';

/**
 * Specializes WebPlatformFunctions using APIs available in Web workers.
 */
export class WebPlatformFunctions extends PlatformFunctions {
    /** @override */
    getUname(): Promise<string | null> {
        return Promise.resolve(null);
    }

    /** @override */
    createEmitter(): ExpressPlatbyEmitter {
        return new ExpressPlatbyEmitter();
    }

    /** @override */
    tryBufferData(
        data: MultipartRequestData
    ): Promise<RequestData | BufferedFile> {
        if (data.file.data instanceof ReadableStream) {
            throw new Error(
                'Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/expressplatby/expressplatby-node if you use this, detailing your use-case.'
            );
        }
        return Promise.resolve(data);
    }

    /** @override */
    createNodeHttpClient(): HttpClient {
        throw new Error(
            'ExpressPlatby: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.'
        );
    }

    /** @override */
    createDefaultHttpClient(): HttpClient {
        return super.createFetchHttpClient();
    }

    /** @override */
    createNodeCryptoProvider(): CryptoProvider {
        throw new Error(
            'ExpressPlatby: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.'
        );
    }

    /** @override */
    createDefaultCryptoProvider(): CryptoProvider {
        return this.createSubtleCryptoProvider();
    }
}
