class PlatformHelper {
    readonly isBrowser = typeof window !== 'undefined';

    readonly isServer = typeof window === 'undefined';
}

export default new PlatformHelper();
