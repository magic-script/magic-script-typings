
/**
 * This is minimal bindings to openssl needed by polyfills to implement TLS and HTTPS.
 * See usage here:  https://github.com/magic-script/magic-script-polyfills/blob/1a622a8f843e7c89ccd22e3cda25baffc463143a/src/tls-wrap.js
 */
declare module "ssl" {
    class Ssl {
        /**
         * Expose `SSL_set_tlsext_host_name` to set SNI hostname .
         */
        setHostname(name: string): void;

        /** Expose `SSL_do_handshake` and forward return value to JS. */
        doHandshake(): number;

        /** Expose `SSL_get_verify_result` and forward return value to JS. */
        getVerify(): boolean;

        /** 
         * Expose `BIO_read`. 
         * Read outgoing encrypted data to be sent directly to server 
         */
        bioRead(): ArrayBuffer;

        /**
         * Expose `SSL_read` and forward return value to JS.
         * Read unencrypted data out of the SSL resource into an array buffer 
         */
        sslRead(buf: ArrayBuffer): number;

        /**
         * Expose `BIO_write` and forward return value to JS.
         * Write incoming encrypted data to our SSL resource.
         */
        bioWrite(data: ArrayBuffer | string): number;


        /**
         * Expose `SSL_write` and forward return value to JS.
         * Write unencrypted data out of the SSL resource.
         */
        sslWrite(data: ArrayBuffer | string): number;

        /**
         * Expose `SSL_shutdown` and forward return value to JS.
         */
        sslShutdown(): number;

        /**
         * Use `SSL_get_error` to convert an error code into a string.
         */
        getError(returnCode: number): string;
    }
}
