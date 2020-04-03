/// <reference path="./typegen.d.ts"/>

/**
 * Bindings to OpenGL-ES that aim to be compatible with WebGL APIs.
 * This can be used to help run webgl applications using either PlanarResource or Exclusive mode.
 *
 * The module exports here are the more commonly used functions typically exposed when you get a webgl context in a web browser.
 *
 * See https://github.com/magic-script/magic-script-webgl-prism-controller for an example of how to use this (combined with `egl`, `png` and `jpeg`)
 * to polyfill enough browser APIs to run webgl frameworks like three.js out of the box.
 */
declare module "gl" {

    type GLbitfield = i32;
    type GLboolean = boolean;
    type GLclampf = f32;
    type GLenum = u32;
    type GLfloat = f32;
    type GLint = i32;
    type GLint64 = i64;
    type GLintptr = i64;
    type GLsizei = i32;
    type GLsizeiptr = i64;
    type GLsync = ptr;
    type GLuint = u32;

    type ImageData = {
        width: i32;
        height: i32;
        bpp: i32;
        pixels: binary;
    }

    type WebGLActiveInfo = {
        name: string;
        size: GLint;
        type: GLenum;
    }

    type WebGLShaderPrecisionFormat = {
        rangeMin: GLint;
        rangeMax: GLint;
        precision: GLint;
    }

    ///////////////////////////////////////////////////////////////////////////////
    // WebGL 1.0 Functions
    ///////////////////////////////////////////////////////////////////////////////

    export function activeTexture(texture: GLenum): void;

    export function attachShader(program: GLuint, shader: GLuint): void;

    export function bindAttribLocation(program: GLuint, index: GLuint, name: cstring): void;

    export function bindBuffer(target: GLenum, buffer: GLuint): void;

    export function bindFramebuffer(target: GLenum, framebuffer: GLuint): void;

    export function bindRenderbuffer(target: GLenum, renderbuffer: GLuint): void;

    export function bindTexture(target: GLenum, texture: GLuint): void;

    export function blendColor(red: GLfloat, green: GLfloat, blue: GLfloat, alpha: GLfloat): void;

    export function blendEquation(mode: GLenum): void;

    export function blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;

    export function blendFunc(sfactor: GLenum, dfactor: GLenum): void;

    export function blendFuncSeparate(sfactorRGB: GLenum, dfactorRGB: GLenum, sfactorAlpha: GLenum, dfactorAlpha: GLenum): void;

    export function bufferData(target: GLenum, buffer: binary, usage: GLenum): void;

    export function bufferSubData(target: GLenum, offset: GLintptr, srcData: binary): void;

    export function checkFramebufferStatus(target: GLenum): GLenum;

    export function clear(mask: GLbitfield): void;

    export function clearColor(red: GLfloat, green: GLfloat, blue: GLfloat, alpha: GLfloat): void;

    export function clearDepth(depth: GLfloat): void;

    export function clearStencil(s: GLint): void;

    export function colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;

    export function compileShader(shader: GLuint): void;

    export function compressedTexImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei,
        border: GLsizei, pixels: binary): void;

    export function compressedTexSubImage2D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei,
        format: GLenum, pixels: binary): void;

    export function getContextAttributes(): { alpha: boolean, depth: boolean };

    export function getSupportedExtensions(): boolean[];

    export function getExtension(name: string): null;

    export function copyTexImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei,
        border: GLint): void;

    export function copyTexSubImage2D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint,
        x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    export function createBuffer(): GLuint;

    export function createFramebuffer(): GLuint;

    export function createProgram(): GLuint;

    export function createRenderbuffer(): GLuint;

    export function createShader(shaderType: GLenum): GLuint;

    export function createTexture(): GLuint;

    export function cullFace(mode: GLenum): void;

    export function deleteBuffer(buffer: GLuint): void;

    export function deleteFramebuffer(framebuffer: GLuint): void;

    export function deleteProgram(program: GLuint): void;

    export function deleteRenderbuffer(renderbuffer: GLuint): void;

    export function deleteShader(shader: GLuint): void;

    export function deleteTexture(texture: GLuint): void;

    export function depthFunc(func: GLenum): void;

    export function depthMask(flag: GLboolean): void;

    export function depthRange(zNear: GLfloat, zFar: GLfloat): void;

    export function detachShader(program: GLuint, shader: GLuint): void;

    export function disable(cap: GLenum): void;

    export function disableVertexAttribArray(index: GLuint): void;

    export function drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;

    export function drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;

    export function enable(cap: GLenum): void;

    export function enableVertexAttribArray(index: GLuint): void;

    export function finish(): void;

    export function flush(): void;

    export function framebufferRenderbuffer(
        target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: GLuint): void;

    export function framebufferTexture2D(
        target: GLenum, attachment: GLenum, textarget: GLenum, texture: GLuint, level: GLint): void;

    export function frontFace(mode: GLenum): void;

    export function generateMipmap(target: GLenum): void;

    export function getActiveAttrib(program: GLuint, index: GLuint): WebGLActiveInfo;

    export function getActiveUniform(program: GLuint, index: GLuint): WebGLActiveInfo
        ;
    export function getAttachedShaders(program: GLuint): GLuint[];

    export function getAttribLocation(program: GLuint, name: cstring): GLint;

    export function getBufferParameter(target: GLenum, pname: GLenum): GLint;

    export function getError(): GLenum;

    export function getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): GLint;

    function getBoolean(pname: GLenum): GLboolean;

    function getFloat(pname: GLenum): GLfloat;

    function getInteger(pname: GLenum): GLint;

    function getInteger64(pname: GLenum): GLint64;

    function getString(pname: GLenum): cstring;

    export function getParameter(pname: GLenum): any;

    export function getProgramParameter(program: GLuint, pname: GLenum): GLint;

    export function getProgramInfoLog(program: GLuint): string;

    export function getRenderbufferParameter(target: GLenum, pname: GLenum): GLint;

    export function getShaderParameter(shader: GLuint, pname: GLenum): GLint;

    export function getShaderInfoLog(shader: GLuint): string;

    export function getShaderPrecisionFormat(shaderType: GLenum, precisionType: GLenum): WebGLShaderPrecisionFormat;

    export function getShaderSource(shader: GLuint): string;

    export function getTexParameter(target: GLenum, pname: GLenum): number;

    export function getUniform(program: GLuint, location: GLuint): any;

    export function getUniformLocation(program: GLuint, name: cstring): GLuint;

    export function getVertexAttrib(index: GLuint, pname: GLenum): any;

    export function getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;

    export function hint(target: GLenum, mode: GLenum): void;

    export function isBuffer(buffer: GLuint): GLboolean;

    export function isEnabled(cap: GLenum): GLboolean;

    export function isFramebuffer(framebuffer: GLuint): GLboolean;

    export function isProgram(program: GLuint): GLboolean;

    export function isRenderbuffer(renderbuffer: GLuint): GLboolean;

    export function isShader(shader: GLuint): GLboolean;

    export function isTexture(texture: GLuint): GLboolean;

    export function lineWidth(width: GLfloat): void;

    export function linkProgram(program: GLuint): void;

    export function pixelStorei(pname: GLenum, param: GLint): void;

    export function polygonOffset(factor: GLfloat, units: GLfloat): void;

    export function readPixels(
        x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: binary): void;

    export function renderbufferStorage(target: GLenum, internalFormat: GLenum, width: GLsizei, height: GLsizei): void;

    export function sampleCoverage(value: GLclampf, invert: GLboolean): void;

    export function scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    export function shaderSource(shader: GLuint, source: string): void;

    export function stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;

    export function stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;

    export function stencilMask(mask: GLuint): void;

    export function stencilMaskSeparate(face: GLenum, mask: GLuint): void;

    export function stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;

    export function stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;

    export function texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;

    export function texParameteri(target: GLenum, pname: GLenum, param: GLint): void;

    export function texImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei,
        border: GLint, format: GLenum, type: GLenum, pixels: binary): void;

    export function texImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, format: GLenum, type: GLenum, img: ImageData): void;

    export function texSubImage2D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, img: ImageData): void;

    export function uniform1f(location: GLuint, v0: f32): void;

    export function uniform1fv(location: GLuint, value: Float32Array): void;

    export function uniform1i(location: GLuint, v0: GLint): void;

    export function uniform1iv(location: GLuint, value: Int32Array): void;

    export function uniform2f(location: GLuint, v0: f32, v1: f32): void;

    export function uniform2fv(location: GLuint, value: Float32Array): void;

    export function uniform2i(location: GLuint, v0: i32, v1: i32): void;

    export function uniform2iv(location: GLuint, value: Int32Array): void;

    export function uniform3f(location: GLuint, v0: f32, v1: f32, v2: f32): void;

    export function uniform3fv(location: GLuint, value: Float32Array): void;

    export function uniform3i(location: GLuint, v0: i32, v1: i32, v2: i32): void;

    export function uniform3iv(location: GLuint, value: Int32Array): void;

    export function uniform4f(location: GLuint, v0: f32, v1: f32, v2: f32, v3: f32): void;

    export function uniform4fv(location: GLuint, value: Float32Array): void;

    export function uniform4i(location: GLuint, v0: i32, v1: i32, v2: i32, v3: i32): void;

    export function uniform4iv(location: GLuint, value: Int32Array): void;

    export function uniformMatrix2fv(location: GLuint, transpose: GLboolean, value: Float32Array): void;

    export function uniformMatrix3fv(location: GLuint, transpose: GLboolean, value: Float32Array): void;

    export function uniformMatrix4fv(location: GLuint, transpose: GLboolean, value: Float32Array): void;

    export function useProgram(program: GLuint): void;

    export function validateProgram(program: GLuint): void;

    export function vertexAttrib1f(index: GLuint, v0: f32): void;

    export function vertexAttrib1fv(index: GLuint, value: Float32Array): void;

    export function vertexAttrib2f(index: GLuint, v0: f32, v1: f32): void;

    export function vertexAttrib2fv(index: GLuint, value: Float32Array): void;

    export function vertexAttrib3f(index: GLuint, v0: f32, v1: f32, v2: f32): void;

    export function vertexAttrib3fv(index: GLuint, value: Float32Array): void;

    export function vertexAttrib4f(index: GLuint, v0: f32, v1: f32, v2: f32, v3: f32): void;

    export function vertexAttrib4fv(index: GLuint, value: Float32Array): void;

    export function vertexAttribPointer(
        index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;

    export function viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    ///////////////////////////////////////////////////////////////////////////////
    // WebGL 2.0 Functions
    ///////////////////////////////////////////////////////////////////////////////

    export function copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizei): void;

    export function getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstData: binary, dstOffset: GLuint, length: GLuint): void;

    export function blitFramebuffer(
        srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint,
        dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint,
        mask: GLbitfield, filter: GLenum): void;

    export function framebufferTextureLayer(
        target: GLenum, attachment: GLenum, texture: GLuint, level: GLint, layer: GLint): void;

    export function getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): GLint;

    export function invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;

    export function invalidateSubFramebuffer(
        target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    export function readBuffer(src: GLenum): void;

    export function renderbufferStorageMultisample(
        target: GLenum, samples: GLsizei, internalFormat: GLenum, width: GLsizei, height: GLsizei): void;

    export function texStorage2D(
        target: GLenum, levels: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei): void;

    export function texStorage3D(
        target: GLenum, levels: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;

    export function texImage3D(
        target: GLenum, level: GLint, internalformat: GLenum,
        width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint,
        format: GLenum, type: GLenum, offset: GLintptr): void;

    export function texSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, type: GLenum,
        srcData: binary, srcOffset: GLintptr
    ): void;

    export function texSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, type: GLenum,
        img: ImageData
    ): void;

    export function copyTexSubImage3D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    export function compressedTexImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei,
        border: GLsizei, imageSize: GLsizei, offset: GLintptr): void;

    export function compressedTexImage3D(
        target: GLenum, level: GLint, internalformat: GLenum,
        width: GLsizei, height: GLsizei, depth: GLsizei, border: GLsizei,
        imageSize: GLsizei, offset: GLintptr): void;

    export function compressedTexSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, imageSize: GLint, offset: GLintptr): void;

    export function compressedTexSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, srcData: binary, srcOffset: GLintptr, srcLengthOverride: GLsizei): void;

    export function getFragDataLocation(program: GLuint, name: cstring): GLint;

    export function uniform1ui(location: GLuint, v0: GLuint): void;

    export function uniform2ui(location: GLuint, v0: GLuint, v1: GLuint): void;

    export function uniform3ui(location: GLuint, v0: GLuint, v1: GLuint, v2: GLuint): void;

    export function uniform4ui(location: GLuint, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;

    export function uniform1uiv(location: GLuint, value: Uint32Array): void;

    export function uniform2uiv(location: GLuint, value: Uint32Array): void;
    export function uniform3uiv(location: GLuint, value: Uint32Array): void;
    export function uniform4uiv(location: GLuint, value: Uint32Array): void;
    export function uniformMatrix2x3fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    export function uniformMatrix3x2fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    export function uniformMatrix2x4fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    export function uniformMatrix4x2fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    export function uniformMatrix3x4fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    export function uniformMatrix4x3fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    export function vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;

    export function vertexAttribI4iv(index: GLuint, value: Int32Array): void;

    export function vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;

    export function vertexAttribI4uiv(index: GLuint, value: Uint32Array): void;

    export function vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;

    export function vertexAttribDivisor(index: GLuint, divisor: GLuint): void;

    export function drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;

    export function drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;

    export function drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;

    export function drawBuffers(buffers: GLenum[]): void;

    export function clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: GLint[]): void;

    export function clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: GLuint[]): void;

    export function clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: GLfloat[]): void;

    export function clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;

    export function createQuery(): GLuint;

    export function deleteQuery(query: GLuint): void;

    export function isQuery(query: GLuint): boolean;

    export function beginQuery(target: GLenum, query: GLuint): void;

    export function endQuery(target: GLenum): void;

    export function getQuery(target: GLenum, pname: GLenum): GLint;

    export function getQueryParameter(query: GLuint, pname: GLenum): GLuint;

    export function createSampler(): GLuint;

    export function deleteSampler(sampler: GLuint): void;

    export function isSampler(sampler: GLuint): boolean;

    export function bindSampler(unit: GLuint, sampler: GLuint): void;

    export function samplerParameteri(sampler: GLuint, pname: GLenum, param: GLint): void;

    export function samplerParameterf(sampler: GLuint, pname: GLenum, param: GLfloat): void;

    export function getSamplerParameter(sampler: GLuint, pname: GLenum): number;

    export function fenceSync(condition: GLenum, flags: GLbitfield): void;

    export function isSync(sync: GLsync): boolean;

    export function deleteSync(sync: GLsync): void;

    export function clientWaitSync(sync: GLsync, flags: GLbitfield, timeout: GLint64): void;

    export function waitSync(sync: GLsync, flags: GLbitfield, timeout: GLint64): void;

    export function getSyncParameter(sync: GLsync, pname: GLenum): GLint;

    export function createTransformFeedback(): GLuint;

    export function deleteTransformFeedback(transformFeedback: GLuint): void;

    export function isTransformFeedback(transformFeedback: GLuint): boolean;

    export function bindTransformFeedback(target: GLenum, transformFeedback: GLuint): void;

    export function beginTransformFeedback(primitiveMode: GLenum): void;

    export function endTransformFeedback(): void;

    export function transformFeedbackVaryings(program: GLuint, varyings: cstring[], bufferMode: GLenum): void;

    export function getTransformFeedbackVarying(program: GLuint, index: GLuint): WebGLActiveInfo;

    export function pauseTransformFeedback(): void;

    export function resumeTransformFeedback(): void;

    export function bindBufferBase(target: GLenum, index: GLuint, buffer: GLuint): void;

    export function bindBufferRange(
        target: GLenum, index: GLuint, buffer: GLuint, offset: GLintptr, size: GLsizeiptr): void;

    export function getIndexedParameter(target: GLenum, index: GLuint): i64;

    export function getUniformIndices(program: GLuint, uniformNames: cstring[]): GLuint[];

    export function getActiveUniforms(program: GLuint, uniformIndices: GLuint[], pname: GLenum): GLint[];

    export function getUniformBlockIndex(program: GLuint, uniformBlockName: cstring): GLuint;

    export function getActiveUniformBlockParameter(program: GLuint, uniformBlockIndex: GLuint, pname: GLenum): GLint;

    export function getActiveUniformBlockName(program: GLuint, uniformBlockIndex: GLuint): cstring;
    export function uniformBlockBinding(program: GLuint, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;

    export function createVertexArray(): GLuint;

    export function deleteVertexArray(vertexArray: GLuint): void;

    export function isVertexArray(vertexArray: GLuint): boolean;

    export function bindVertexArray(vertexArray: GLuint): void;

    ///////////////////////////////////////////////////////////////////////////////
    // WebGL 1.0 Constants
    ///////////////////////////////////////////////////////////////////////////////

    export const DEPTH_BUFFER_BIT: i32;
    export const STENCIL_BUFFER_BIT: i32;
    export const COLOR_BUFFER_BIT: i32;
    export const POINTS: i32;
    export const LINES: i32;
    export const LINE_LOOP: i32;
    export const LINE_STRIP: i32;
    export const TRIANGLES: i32;
    export const TRIANGLE_STRIP: i32;
    export const TRIANGLE_FAN: i32;
    export const ZERO: i32;
    export const ONE: i32;
    export const SRC_COLOR: i32;
    export const ONE_MINUS_SRC_COLOR: i32;
    export const SRC_ALPHA: i32;
    export const ONE_MINUS_SRC_ALPHA: i32;
    export const DST_ALPHA: i32;
    export const ONE_MINUS_DST_ALPHA: i32;
    export const DST_COLOR: i32;
    export const ONE_MINUS_DST_COLOR: i32;
    export const SRC_ALPHA_SATURATE: i32;
    export const FUNC_ADD: i32;
    export const BLEND_EQUATION: i32;
    export const BLEND_EQUATION_RGB: i32;
    export const BLEND_EQUATION_ALPHA: i32;
    export const FUNC_SUBTRACT: i32;
    export const FUNC_REVERSE_SUBTRACT: i32;
    export const BLEND_DST_RGB: i32;
    export const BLEND_SRC_RGB: i32;
    export const BLEND_DST_ALPHA: i32;
    export const BLEND_SRC_ALPHA: i32;
    export const CONSTANT_COLOR: i32;
    export const ONE_MINUS_CONSTANT_COLOR: i32;
    export const CONSTANT_ALPHA: i32;
    export const ONE_MINUS_CONSTANT_ALPHA: i32;
    export const BLEND_COLOR: i32;
    export const ARRAY_BUFFER: i32;
    export const ELEMENT_ARRAY_BUFFER: i32;
    export const ARRAY_BUFFER_BINDING: i32;
    export const ELEMENT_ARRAY_BUFFER_BINDING: i32;
    export const STREAM_DRAW: i32;
    export const STATIC_DRAW: i32;
    export const DYNAMIC_DRAW: i32;
    export const BUFFER_SIZE: i32;
    export const BUFFER_USAGE: i32;
    export const CURRENT_VERTEX_ATTRIB: i32;
    export const FRONT: i32;
    export const BACK: i32;
    export const FRONT_AND_BACK: i32;
    export const TEXTURE_2D: i32;
    export const CULL_FACE: i32;
    export const BLEND: i32;
    export const DITHER: i32;
    export const STENCIL_TEST: i32;
    export const DEPTH_TEST: i32;
    export const SCISSOR_TEST: i32;
    export const POLYGON_OFFSET_FILL: i32;
    export const SAMPLE_ALPHA_TO_COVERAGE: i32;
    export const SAMPLE_COVERAGE: i32;
    export const NO_ERROR: i32;
    export const INVALID_ENUM: i32;
    export const INVALID_VALUE: i32;
    export const INVALID_OPERATION: i32;
    export const OUT_OF_MEMORY: i32;
    export const CW: i32;
    export const CCW: i32;
    export const LINE_WIDTH: i32;
    export const ALIASED_POINT_SIZE_RANGE: i32;
    export const ALIASED_LINE_WIDTH_RANGE: i32;
    export const CULL_FACE_MODE: i32;
    export const FRONT_FACE: i32;
    export const DEPTH_RANGE: i32;
    export const DEPTH_WRITEMASK: i32;
    export const DEPTH_CLEAR_VALUE: i32;
    export const DEPTH_FUNC: i32;
    export const STENCIL_CLEAR_VALUE: i32;
    export const STENCIL_FUNC: i32;
    export const STENCIL_FAIL: i32;
    export const STENCIL_PASS_DEPTH_FAIL: i32;
    export const STENCIL_PASS_DEPTH_PASS: i32;
    export const STENCIL_REF: i32;
    export const STENCIL_VALUE_MASK: i32;
    export const STENCIL_WRITEMASK: i32;
    export const STENCIL_BACK_FUNC: i32;
    export const STENCIL_BACK_FAIL: i32;
    export const STENCIL_BACK_PASS_DEPTH_FAIL: i32;
    export const STENCIL_BACK_PASS_DEPTH_PASS: i32;
    export const STENCIL_BACK_REF: i32;
    export const STENCIL_BACK_VALUE_MASK: i32;
    export const STENCIL_BACK_WRITEMASK: i32;
    export const VIEWPORT: i32;
    export const SCISSOR_BOX: i32;
    export const COLOR_CLEAR_VALUE: i32;
    export const COLOR_WRITEMASK: i32;
    export const UNPACK_ALIGNMENT: i32;
    export const PACK_ALIGNMENT: i32;
    export const MAX_TEXTURE_SIZE: i32;
    export const MAX_VIEWPORT_DIMS: i32;
    export const SUBPIXEL_BITS: i32;
    export const RED_BITS: i32;
    export const GREEN_BITS: i32;
    export const BLUE_BITS: i32;
    export const ALPHA_BITS: i32;
    export const DEPTH_BITS: i32;
    export const STENCIL_BITS: i32;
    export const POLYGON_OFFSET_UNITS: i32;
    export const POLYGON_OFFSET_FACTOR: i32;
    export const TEXTURE_BINDING_2D: i32;
    export const SAMPLE_BUFFERS: i32;
    export const SAMPLES: i32;
    export const SAMPLE_COVERAGE_VALUE: i32;
    export const SAMPLE_COVERAGE_INVERT: i32;
    export const COMPRESSED_TEXTURE_FORMATS: i32;
    export const DONT_CARE: i32;
    export const FASTEST: i32;
    export const NICEST: i32;
    export const GENERATE_MIPMAP_HINT: i32;
    export const BYTE: i32;
    export const UNSIGNED_BYTE: i32;
    export const SHORT: i32;
    export const UNSIGNED_SHORT: i32;
    export const INT: i32;
    export const UNSIGNED_INT: i32;
    export const FLOAT: i32;
    export const DEPTH_COMPONENT: i32;
    export const ALPHA: i32;
    export const RGB: i32;
    export const RGBA: i32;
    export const LUMINANCE: i32;
    export const LUMINANCE_ALPHA: i32;
    export const UNSIGNED_SHORT_4_4_4_4: i32;
    export const UNSIGNED_SHORT_5_5_5_1: i32;
    export const UNSIGNED_SHORT_5_6_5: i32;
    export const FRAGMENT_SHADER: i32;
    export const VERTEX_SHADER: i32;
    export const MAX_VERTEX_ATTRIBS: i32;
    export const MAX_VERTEX_UNIFORM_VECTORS: i32;
    export const MAX_VARYING_VECTORS: i32;
    export const MAX_COMBINED_TEXTURE_IMAGE_UNITS: i32;
    export const MAX_VERTEX_TEXTURE_IMAGE_UNITS: i32;
    export const MAX_TEXTURE_IMAGE_UNITS: i32;
    export const MAX_FRAGMENT_UNIFORM_VECTORS: i32;
    export const SHADER_TYPE: i32;
    export const DELETE_STATUS: i32;
    export const LINK_STATUS: i32;
    export const VALIDATE_STATUS: i32;
    export const ATTACHED_SHADERS: i32;
    export const ACTIVE_UNIFORMS: i32;
    export const ACTIVE_ATTRIBUTES: i32;
    export const SHADING_LANGUAGE_VERSION: i32;
    export const CURRENT_PROGRAM: i32;
    export const NEVER: i32;
    export const LESS: i32;
    export const EQUAL: i32;
    export const LEQUAL: i32;
    export const GREATER: i32;
    export const NOTEQUAL: i32;
    export const GEQUAL: i32;
    export const ALWAYS: i32;
    export const KEEP: i32;
    export const REPLACE: i32;
    export const INCR: i32;
    export const DECR: i32;
    export const INVERT: i32;
    export const INCR_WRAP: i32;
    export const DECR_WRAP: i32;
    export const VENDOR: i32;
    export const RENDERER: i32;
    export const VERSION: i32;
    export const NEAREST: i32;
    export const LINEAR: i32;
    export const NEAREST_MIPMAP_NEAREST: i32;
    export const LINEAR_MIPMAP_NEAREST: i32;
    export const NEAREST_MIPMAP_LINEAR: i32;
    export const LINEAR_MIPMAP_LINEAR: i32;
    export const TEXTURE_MAG_FILTER: i32;
    export const TEXTURE_MIN_FILTER: i32;
    export const TEXTURE_WRAP_S: i32;
    export const TEXTURE_WRAP_T: i32;
    export const TEXTURE: i32;
    export const TEXTURE_CUBE_MAP: i32;
    export const TEXTURE_BINDING_CUBE_MAP: i32;
    export const TEXTURE_CUBE_MAP_POSITIVE_X: i32;
    export const TEXTURE_CUBE_MAP_NEGATIVE_X: i32;
    export const TEXTURE_CUBE_MAP_POSITIVE_Y: i32;
    export const TEXTURE_CUBE_MAP_NEGATIVE_Y: i32;
    export const TEXTURE_CUBE_MAP_POSITIVE_Z: i32;
    export const TEXTURE_CUBE_MAP_NEGATIVE_Z: i32;
    export const MAX_CUBE_MAP_TEXTURE_SIZE: i32;
    export const TEXTURE0: i32;
    export const TEXTURE1: i32;
    export const TEXTURE2: i32;
    export const TEXTURE3: i32;
    export const TEXTURE4: i32;
    export const TEXTURE5: i32;
    export const TEXTURE6: i32;
    export const TEXTURE7: i32;
    export const TEXTURE8: i32;
    export const TEXTURE9: i32;
    export const TEXTURE10: i32;
    export const TEXTURE11: i32;
    export const TEXTURE12: i32;
    export const TEXTURE13: i32;
    export const TEXTURE14: i32;
    export const TEXTURE15: i32;
    export const TEXTURE16: i32;
    export const TEXTURE17: i32;
    export const TEXTURE18: i32;
    export const TEXTURE19: i32;
    export const TEXTURE20: i32;
    export const TEXTURE21: i32;
    export const TEXTURE22: i32;
    export const TEXTURE23: i32;
    export const TEXTURE24: i32;
    export const TEXTURE25: i32;
    export const TEXTURE26: i32;
    export const TEXTURE27: i32;
    export const TEXTURE28: i32;
    export const TEXTURE29: i32;
    export const TEXTURE30: i32;
    export const TEXTURE31: i32;
    export const ACTIVE_TEXTURE: i32;
    export const REPEAT: i32;
    export const CLAMP_TO_EDGE: i32;
    export const MIRRORED_REPEAT: i32;
    export const FLOAT_VEC2: i32;
    export const FLOAT_VEC3: i32;
    export const FLOAT_VEC4: i32;
    export const INT_VEC2: i32;
    export const INT_VEC3: i32;
    export const INT_VEC4: i32;
    export const BOOL: i32;
    export const BOOL_VEC2: i32;
    export const BOOL_VEC3: i32;
    export const BOOL_VEC4: i32;
    export const FLOAT_MAT2: i32;
    export const FLOAT_MAT3: i32;
    export const FLOAT_MAT4: i32;
    export const SAMPLER_2D: i32;
    export const SAMPLER_CUBE: i32;
    export const VERTEX_ATTRIB_ARRAY_ENABLED: i32;
    export const VERTEX_ATTRIB_ARRAY_SIZE: i32;
    export const VERTEX_ATTRIB_ARRAY_STRIDE: i32;
    export const VERTEX_ATTRIB_ARRAY_TYPE: i32;
    export const VERTEX_ATTRIB_ARRAY_NORMALIZED: i32;
    export const VERTEX_ATTRIB_ARRAY_POINTER: i32;
    export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: i32;
    export const IMPLEMENTATION_COLOR_READ_TYPE: i32;
    export const IMPLEMENTATION_COLOR_READ_FORMAT: i32;
    export const COMPILE_STATUS: i32;
    export const LOW_FLOAT: i32;
    export const MEDIUM_FLOAT: i32;
    export const HIGH_FLOAT: i32;
    export const LOW_INT: i32;
    export const MEDIUM_INT: i32;
    export const HIGH_INT: i32;
    export const FRAMEBUFFER: i32;
    export const RENDERBUFFER: i32;
    export const RGBA4: i32;
    export const RGB5_A1: i32;
    export const RGB565: i32;
    export const DEPTH_COMPONENT16: i32;
    export const STENCIL_INDEX8: i32;
    export const DEPTH_STENCIL: i32;
    export const RENDERBUFFER_WIDTH: i32;
    export const RENDERBUFFER_HEIGHT: i32;
    export const RENDERBUFFER_INTERNAL_FORMAT: i32;
    export const RENDERBUFFER_RED_SIZE: i32;
    export const RENDERBUFFER_GREEN_SIZE: i32;
    export const RENDERBUFFER_BLUE_SIZE: i32;
    export const RENDERBUFFER_ALPHA_SIZE: i32;
    export const RENDERBUFFER_DEPTH_SIZE: i32;
    export const RENDERBUFFER_STENCIL_SIZE: i32;
    export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: i32;
    export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: i32;
    export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: i32;
    export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: i32;
    export const COLOR_ATTACHMENT0: i32;
    export const DEPTH_ATTACHMENT: i32;
    export const STENCIL_ATTACHMENT: i32;
    export const DEPTH_STENCIL_ATTACHMENT: i32;
    export const NONE: i32;
    export const FRAMEBUFFER_COMPLETE: i32;
    export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT: i32;
    export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: i32;
    export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS: i32;
    export const FRAMEBUFFER_UNSUPPORTED: i32;
    export const FRAMEBUFFER_BINDING: i32;
    export const RENDERBUFFER_BINDING: i32;
    export const MAX_RENDERBUFFER_SIZE: i32;
    export const INVALID_FRAMEBUFFER_OPERATION: i32;
    export const UNPACK_FLIP_Y_WEBGL: i32;
    export const UNPACK_PREMULTIPLY_ALPHA_WEBGL: i32;
    export const CONTEXT_LOST_WEBGL: i32;
    export const UNPACK_COLORSPACE_CONVERSION_WEBGL: i32;
    export const BROWSER_DEFAULT_WEBGL: i32;

    ///////////////////////////////////////////////////////////////////////////////
    // WebGL 2.0 Constants
    ///////////////////////////////////////////////////////////////////////////////

    export const READ_BUFFER: i32;
    export const UNPACK_ROW_LENGTH: i32;
    export const UNPACK_SKIP_ROWS: i32;
    export const UNPACK_SKIP_PIXELS: i32;
    export const PACK_ROW_LENGTH: i32;
    export const PACK_SKIP_ROWS: i32;
    export const PACK_SKIP_PIXELS: i32;
    export const COLOR: i32;
    export const DEPTH: i32;
    export const STENCIL: i32;
    export const RED: i32;
    export const RGB8: i32;
    export const RGBA8: i32;
    export const RGB10_A2: i32;
    export const TEXTURE_BINDING_3D: i32;
    export const UNPACK_SKIP_IMAGES: i32;
    export const UNPACK_IMAGE_HEIGHT: i32;
    export const TEXTURE_3D: i32;
    export const TEXTURE_WRAP_R: i32;
    export const MAX_3D_TEXTURE_SIZE: i32;
    export const UNSIGNED_INT_2_10_10_10_REV: i32;
    export const MAX_ELEMENTS_VERTICES: i32;
    export const MAX_ELEMENTS_INDICES: i32;
    export const TEXTURE_MIN_LOD: i32;
    export const TEXTURE_MAX_LOD: i32;
    export const TEXTURE_BASE_LEVEL: i32;
    export const TEXTURE_MAX_LEVEL: i32;
    export const MIN: i32;
    export const MAX: i32;
    export const DEPTH_COMPONENT24: i32;
    export const MAX_TEXTURE_LOD_BIAS: i32;
    export const TEXTURE_COMPARE_MODE: i32;
    export const TEXTURE_COMPARE_FUNC: i32;
    export const CURRENT_QUERY: i32;
    export const QUERY_RESULT: i32;
    export const QUERY_RESULT_AVAILABLE: i32;
    export const STREAM_READ: i32;
    export const STREAM_COPY: i32;
    export const STATIC_READ: i32;
    export const STATIC_COPY: i32;
    export const DYNAMIC_READ: i32;
    export const DYNAMIC_COPY: i32;
    export const MAX_DRAW_BUFFERS: i32;
    export const DRAW_BUFFER0: i32;
    export const DRAW_BUFFER1: i32;
    export const DRAW_BUFFER2: i32;
    export const DRAW_BUFFER3: i32;
    export const DRAW_BUFFER4: i32;
    export const DRAW_BUFFER5: i32;
    export const DRAW_BUFFER6: i32;
    export const DRAW_BUFFER7: i32;
    export const DRAW_BUFFER8: i32;
    export const DRAW_BUFFER9: i32;
    export const DRAW_BUFFER10: i32;
    export const DRAW_BUFFER11: i32;
    export const DRAW_BUFFER12: i32;
    export const DRAW_BUFFER13: i32;
    export const DRAW_BUFFER14: i32;
    export const DRAW_BUFFER15: i32;
    export const MAX_FRAGMENT_UNIFORM_COMPONENTS: i32;
    export const MAX_VERTEX_UNIFORM_COMPONENTS: i32;
    export const SAMPLER_3D: i32;
    export const SAMPLER_2D_SHADOW: i32;
    export const FRAGMENT_SHADER_DERIVATIVE_HINT: i32;
    export const PIXEL_PACK_BUFFER: i32;
    export const PIXEL_UNPACK_BUFFER: i32;
    export const PIXEL_PACK_BUFFER_BINDING: i32;
    export const PIXEL_UNPACK_BUFFER_BINDING: i32;
    export const FLOAT_MAT2x3: i32;
    export const FLOAT_MAT2x4: i32;
    export const FLOAT_MAT3x2: i32;
    export const FLOAT_MAT3x4: i32;
    export const FLOAT_MAT4x2: i32;
    export const FLOAT_MAT4x3: i32;
    export const SRGB: i32;
    export const SRGB8: i32;
    export const SRGB8_ALPHA8: i32;
    export const COMPARE_REF_TO_TEXTURE: i32;
    export const RGBA32F: i32;
    export const RGB32F: i32;
    export const RGBA16F: i32;
    export const RGB16F: i32;
    export const VERTEX_ATTRIB_ARRAY_INTEGER: i32;
    export const MAX_ARRAY_TEXTURE_LAYERS: i32;
    export const MIN_PROGRAM_TEXEL_OFFSET: i32;
    export const MAX_PROGRAM_TEXEL_OFFSET: i32;
    export const MAX_VARYING_COMPONENTS: i32;
    export const TEXTURE_2D_ARRAY: i32;
    export const TEXTURE_BINDING_2D_ARRAY: i32;
    export const R11F_G11F_B10F: i32;
    export const UNSIGNED_INT_10F_11F_11F_REV: i32;
    export const RGB9_E5: i32;
    export const UNSIGNED_INT_5_9_9_9_REV: i32;
    export const TRANSFORM_FEEDBACK_BUFFER_MODE: i32;
    export const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: i32;
    export const TRANSFORM_FEEDBACK_VARYINGS: i32;
    export const TRANSFORM_FEEDBACK_BUFFER_START: i32;
    export const TRANSFORM_FEEDBACK_BUFFER_SIZE: i32;
    export const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: i32;
    export const RASTERIZER_DISCARD: i32;
    export const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: i32;
    export const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: i32;
    export const INTERLEAVED_ATTRIBS: i32;
    export const SEPARATE_ATTRIBS: i32;
    export const TRANSFORM_FEEDBACK_BUFFER: i32;
    export const TRANSFORM_FEEDBACK_BUFFER_BINDING: i32;
    export const RGBA32UI: i32;
    export const RGB32UI: i32;
    export const RGBA16UI: i32;
    export const RGB16UI: i32;
    export const RGBA8UI: i32;
    export const RGB8UI: i32;
    export const RGBA32I: i32;
    export const RGB32I: i32;
    export const RGBA16I: i32;
    export const RGB16I: i32;
    export const RGBA8I: i32;
    export const RGB8I: i32;
    export const RED_INTEGER: i32;
    export const RGB_INTEGER: i32;
    export const RGBA_INTEGER: i32;
    export const SAMPLER_2D_ARRAY: i32;
    export const SAMPLER_2D_ARRAY_SHADOW: i32;
    export const SAMPLER_CUBE_SHADOW: i32;
    export const UNSIGNED_INT_VEC2: i32;
    export const UNSIGNED_INT_VEC3: i32;
    export const UNSIGNED_INT_VEC4: i32;
    export const INT_SAMPLER_2D: i32;
    export const INT_SAMPLER_3D: i32;
    export const INT_SAMPLER_CUBE: i32;
    export const INT_SAMPLER_2D_ARRAY: i32;
    export const UNSIGNED_INT_SAMPLER_2D: i32;
    export const UNSIGNED_INT_SAMPLER_3D: i32;
    export const UNSIGNED_INT_SAMPLER_CUBE: i32;
    export const UNSIGNED_INT_SAMPLER_2D_ARRAY: i32;
    export const DEPTH_COMPONENT32F: i32;
    export const DEPTH32F_STENCIL8: i32;
    export const FLOAT_32_UNSIGNED_INT_24_8_REV: i32;
    export const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: i32;
    export const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: i32;
    export const FRAMEBUFFER_ATTACHMENT_RED_SIZE: i32;
    export const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: i32;
    export const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: i32;
    export const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: i32;
    export const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: i32;
    export const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: i32;
    export const FRAMEBUFFER_DEFAULT: i32;
    export const UNSIGNED_INT_24_8: i32;
    export const DEPTH24_STENCIL8: i32;
    export const UNSIGNED_NORMALIZED: i32;
    export const DRAW_FRAMEBUFFER_BINDING: i32;
    export const READ_FRAMEBUFFER: i32;
    export const DRAW_FRAMEBUFFER: i32;
    export const READ_FRAMEBUFFER_BINDING: i32;
    export const RENDERBUFFER_SAMPLES: i32;
    export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: i32;
    export const MAX_COLOR_ATTACHMENTS: i32;
    export const COLOR_ATTACHMENT1: i32;
    export const COLOR_ATTACHMENT2: i32;
    export const COLOR_ATTACHMENT3: i32;
    export const COLOR_ATTACHMENT4: i32;
    export const COLOR_ATTACHMENT5: i32;
    export const COLOR_ATTACHMENT6: i32;
    export const COLOR_ATTACHMENT7: i32;
    export const COLOR_ATTACHMENT8: i32;
    export const COLOR_ATTACHMENT9: i32;
    export const COLOR_ATTACHMENT10: i32;
    export const COLOR_ATTACHMENT11: i32;
    export const COLOR_ATTACHMENT12: i32;
    export const COLOR_ATTACHMENT13: i32;
    export const COLOR_ATTACHMENT14: i32;
    export const COLOR_ATTACHMENT15: i32;
    export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: i32;
    export const MAX_SAMPLES: i32;
    export const HALF_FLOAT: i32;
    export const RG: i32;
    export const RG_INTEGER: i32;
    export const R8: i32;
    export const RG8: i32;
    export const R16F: i32;
    export const R32F: i32;
    export const RG16F: i32;
    export const RG32F: i32;
    export const R8I: i32;
    export const R8UI: i32;
    export const R16I: i32;
    export const R16UI: i32;
    export const R32I: i32;
    export const R32UI: i32;
    export const RG8I: i32;
    export const RG8UI: i32;
    export const RG16I: i32;
    export const RG16UI: i32;
    export const RG32I: i32;
    export const RG32UI: i32;
    export const VERTEX_ARRAY_BINDING: i32;
    export const R8_SNORM: i32;
    export const RG8_SNORM: i32;
    export const RGB8_SNORM: i32;
    export const RGBA8_SNORM: i32;
    export const SIGNED_NORMALIZED: i32;
    export const COPY_READ_BUFFER: i32;
    export const COPY_WRITE_BUFFER: i32;
    export const COPY_READ_BUFFER_BINDING: i32;
    export const COPY_WRITE_BUFFER_BINDING: i32;
    export const UNIFORM_BUFFER: i32;
    export const UNIFORM_BUFFER_BINDING: i32;
    export const UNIFORM_BUFFER_START: i32;
    export const UNIFORM_BUFFER_SIZE: i32;
    export const MAX_VERTEX_UNIFORM_BLOCKS: i32;
    export const MAX_FRAGMENT_UNIFORM_BLOCKS: i32;
    export const MAX_COMBINED_UNIFORM_BLOCKS: i32;
    export const MAX_UNIFORM_BUFFER_BINDINGS: i32;
    export const MAX_UNIFORM_BLOCK_SIZE: i32;
    export const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: i32;
    export const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: i32;
    export const UNIFORM_BUFFER_OFFSET_ALIGNMENT: i32;
    export const ACTIVE_UNIFORM_BLOCKS: i32;
    export const UNIFORM_TYPE: i32;
    export const UNIFORM_SIZE: i32;
    export const UNIFORM_BLOCK_INDEX: i32;
    export const UNIFORM_OFFSET: i32;
    export const UNIFORM_ARRAY_STRIDE: i32;
    export const UNIFORM_MATRIX_STRIDE: i32;
    export const UNIFORM_IS_ROW_MAJOR: i32;
    export const UNIFORM_BLOCK_BINDING: i32;
    export const UNIFORM_BLOCK_DATA_SIZE: i32;
    export const UNIFORM_BLOCK_ACTIVE_UNIFORMS: i32;
    export const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: i32;
    export const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: i32;
    export const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: i32;
    export const INVALID_INDEX: i32;
    export const MAX_VERTEX_OUTPUT_COMPONENTS: i32;
    export const MAX_FRAGMENT_INPUT_COMPONENTS: i32;
    export const MAX_SERVER_WAIT_TIMEOUT: i32;
    export const OBJECT_TYPE: i32;
    export const SYNC_CONDITION: i32;
    export const SYNC_STATUS: i32;
    export const SYNC_FLAGS: i32;
    export const SYNC_FENCE: i32;
    export const SYNC_GPU_COMMANDS_COMPLETE: i32;
    export const UNSIGNALED: i32;
    export const SIGNALED: i32;
    export const ALREADY_SIGNALED: i32;
    export const TIMEOUT_EXPIRED: i32;
    export const CONDITION_SATISFIED: i32;
    export const WAIT_FAILED: i32;
    export const SYNC_FLUSH_COMMANDS_BIT: i32;
    export const VERTEX_ATTRIB_ARRAY_DIVISOR: i32;
    export const ANY_SAMPLES_PASSED: i32;
    export const ANY_SAMPLES_PASSED_CONSERVATIVE: i32;
    export const SAMPLER_BINDING: i32;
    export const RGB10_A2UI: i32;
    export const INT_2_10_10_10_REV: i32;
    export const TRANSFORM_FEEDBACK: i32;
    export const TRANSFORM_FEEDBACK_PAUSED: i32;
    export const TRANSFORM_FEEDBACK_ACTIVE: i32;
    export const TRANSFORM_FEEDBACK_BINDING: i32;
    export const TEXTURE_IMMUTABLE_FORMAT: i32;
    export const MAX_ELEMENT_INDEX: i32;
    export const TEXTURE_IMMUTABLE_LEVELS: i32;
    export const TIMEOUT_IGNORED: i32;
    export const MAX_CLIENT_WAIT_TIMEOUT_WEBGL: i32;

}