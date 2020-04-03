
declare const tag: unique symbol;

/**
 * This is minimal bindings to egl APIs needed by webgl polyfills to setup exclusive mode.
 * See this for example:  https://github.com/magic-script/magic-script-samples/blob/master/sample-exclusive/src/app.js
 */
declare module "egl" {
    /** expose EGL_OPENGL_API */
    export const OPENGL_API: number;
    /** expose EGL_OPENGL_ES_API */
    export const OPENGL_ES_API: number;
    /** expose EGL_READ */
    export const READ: number;
    /** expose EGL_DRAW */
    export const DRAW: number;
    /** expose EGL_CONTEXT_MAJOR_VERSION_KHR */
    export const CONTEXT_MAJOR_VERSION_KHR: number;
    /** expose EGL_CONTEXT_MINOR_VERSION_KHR */
    export const CONTEXT_MINOR_VERSION_KHR: number;

    /** Opaque handle to `EGLContext` */
    export type Context = { readonly [tag]: 'EGLContext' };
    /** Opaque handle to `EGLSurface` */
    export type Surface = { readonly [tag]: 'EGLSurface' };

    /**
     * Expose `eglInitialize`.
     * Note this automatically uses `eglGetDisplay(EGL_DEFAULT_DISPLAY)` for display.
     * @param major requested major version
     * @param minor requested minor version
     * @returns actual major/minor versions.
     */
    export function initialize(major: number, minor: number): [number, number];

    /**
     * Expose `eglBindAPI`
     */
    export function bindAPI(api: number): void;

    /**
     * Expose `eglCreateContext`.
     * Note this automatically uses `eglGetDisplay(EGL_DEFAULT_DISPLAY)` for display.
     * The config is auto hard-coded for now and requests:
     * ```
     * EGL_RED_SIZE, 8,
     * EGL_GREEN_SIZE, 8,
     * EGL_BLUE_SIZE, 8,
     * EGL_ALPHA_SIZE, 8,
     * EGL_DEPTH_SIZE, 24,
     * EGL_STENCIL_SIZE, 8,
     * EGL_RENDERABLE_TYPE, EGL_OPENGL_ES3_BIT_KHR,
     * ```
     */
    export function createContext(major: number, minor: number): Context;

    /**
     * Expose `eglMakeCurrent`.
     * @param draw optional surface for draw commands
     * @param read optional surface for read commands
     * @param ctx context to use for commands.
     */
    export function makeCurrent(draw: Surface | null, read: Surface | null, ctx: Context): void;

    /**
     * Expose `eglSwapBuffers`.
     * Note this automatically uses `eglGetDisplay(EGL_DEFAULT_DISPLAY)` for display.
     */
    export function swapBuffers(surface: Surface): void;

    /**
     * Expose `eglDestroyContext`.
     * Note this automatically uses `eglGetDisplay(EGL_DEFAULT_DISPLAY)` for display.
     */
    export function destroyContext(ctx: Context): void;

    /**
     * Expose `eglTerminate`.
     */
    export function terminate(): void;

    /**
     * Expose `eglReleaseThread`.
     */
    export function releaseThread(): void;
}
