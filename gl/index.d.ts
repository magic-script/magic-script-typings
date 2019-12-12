/// <reference path="./typegen.d.ts"/>

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

    /**
     * glActiveTexture(texture);
     */
    export function activeTexture(texture: GLenum): void;

    /**
     * glAttachShader(program, shader);
     */
    export function attachShader(program: GLuint, shader: GLuint): void;

    /**
     * glBindAttribLocation(program, index, name);
     */
    export function bindAttribLocation(program: GLuint, index: GLuint, name: cstring): void;

    /**
     * glBindBuffer(target, buffer);
     */
    export function bindBuffer(target: GLenum, buffer: GLuint): void;

    /**
     * glBindFramebuffer(target, framebuffer);
     */
    export function bindFramebuffer(target: GLenum, framebuffer: GLuint): void;

    /**
     * glBindRenderbuffer(target, renderbuffer);
     */
    export function bindRenderbuffer(target: GLenum, renderbuffer: GLuint): void;

    /**
     * glBindTexture(target, texture);
     */
    export function bindTexture(target: GLenum, texture: GLuint): void;

    /**
     * glBlendColor(red, green, blue, alpha);
     */
    export function blendColor(red: GLfloat, green: GLfloat, blue: GLfloat, alpha: GLfloat): void;

    /**
     * glBlendEquation(mode);
     */
    export function blendEquation(mode: GLenum): void;

    /**
     * glBlendEquationSeparate(modeRGB, modeAlpha);
     */
    export function blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;

    /**
     * glBlendFunc(sfactor, dfactor);
     */
    export function blendFunc(sfactor: GLenum, dfactor: GLenum): void;

    /**
     * glBlendFuncSeparate(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
     */
    export function blendFuncSeparate(sfactorRGB: GLenum, dfactorRGB: GLenum, sfactorAlpha: GLenum, dfactorAlpha: GLenum): void;

    /**
     * glBufferData(target, buffer.size(), buffer.data(), usage);
     */
    export function bufferData(target: GLenum, buffer: binary, usage: GLenum): void;

    /**
     * glBufferSubData(target, offset, srcData.size(), srcData.data());
     */
    export function bufferSubData(target: GLenum, offset: GLintptr, srcData: binary): void;

    /**
     * return_value = glCheckFramebufferStatus(target);
     */
    export function checkFramebufferStatus(target: GLenum): GLenum;

    /**
     * glClear(mask);
     */
    export function clear(mask: GLbitfield): void;

    /**
     * glClearColor(red, green, blue, alpha);
     */
    export function clearColor(red: GLfloat, green: GLfloat, blue: GLfloat, alpha: GLfloat): void;

    /**
     * glClearDepthf(depth);
     */
    export function clearDepth(depth: GLfloat): void;

    /**
     * glClearStencil(s);
     */
    export function clearStencil(s: GLint): void;

    /**
     * glColorMask(red, green, blue, alpha);
     */
    export function colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;

    /**
     * glCompileShader(shader);
     */
    export function compileShader(shader: GLuint): void;

    /**
     * glCompressedTexImage2D(
     *   target, level, internalformat, width, height, border,
     *   pixels.size(), pixels.data()
     * );
     */
    export function compressedTexImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei,
        border: GLsizei, pixels: binary): void;

    /**
     * glCompressedTexSubImage2D(
     *   target, level, xoffset, yoffset, width, height,
     *   format, pixels.size(), pixels.data()
     * );
     */
    export function compressedTexSubImage2D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei,
        format: GLenum, pixels: binary): void;

    /**
     * return_value.alpha = true;
     * return_value.depth = true;
     */
    export function getContextAttributes(): { alpha: boolean, depth: boolean };

    /**
     * return_value.resize(0);
     */
    export function getSupportedExtensions(): boolean[];

    /**
     * // TODO: how can we support extensions?
     */
    export function getExtension(name: string): null;

    /**
     * glCopyTexImage2D(target, level, internalformat, x, y, width, height, border);
     */
    export function copyTexImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei,
        border: GLint): void;

    /**
     * glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
     */
    export function copyTexSubImage2D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint,
        x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    /**
     * glGenBuffers(1, &return_value);
     */
    export function createBuffer(): GLuint;

    /**
     * glGenFramebuffers(1, &return_value);
     */
    export function createFramebuffer(): GLuint;

    /**
     * return_value = glCreateProgram();
     */
    export function createProgram(): GLuint;

    /**
     * glGenRenderbuffers(1, &return_value);
     */
    export function createRenderbuffer(): GLuint;

    /**
     * return_value = glCreateShader(shaderType);
     */
    export function createShader(shaderType: GLenum): GLuint;

    /**
     * glGenTextures(1, &return_value);
     */
    export function createTexture(): GLuint;

    /**
     * glCullFace(mode);
     */
    export function cullFace(mode: GLenum): void;

    /**
     * glDeleteBuffers(1, &buffer);
     */
    export function deleteBuffer(buffer: GLuint): void;

    /**
     * glDeleteFramebuffers(1, &framebuffer);
     */
    export function deleteFramebuffer(framebuffer: GLuint): void;

    /**
     * glDeleteProgram(program);
     */
    export function deleteProgram(program: GLuint): void;

    /**
     * glDeleteRenderbuffers(1, &renderbuffer);
     */
    export function deleteRenderbuffer(renderbuffer: GLuint): void;

    /**
     * glDeleteShader(shader);
     */
    export function deleteShader(shader: GLuint): void;

    /**
     * glDeleteTextures(1, &texture);
     */
    export function deleteTexture(texture: GLuint): void;

    /**
     * glDepthFunc(func);
     */
    export function depthFunc(func: GLenum): void;

    /**
     * glDepthMask(flag);
     */
    export function depthMask(flag: GLboolean): void;

    /**
     * glDepthRangef(zNear, zFar);
     */
    export function depthRange(zNear: GLfloat, zFar: GLfloat): void;

    /**
     * glDetachShader(program, shader);
     */
    export function detachShader(program: GLuint, shader: GLuint): void;

    /**
     * glDisable(cap);
     */
    export function disable(cap: GLenum): void;

    /**
     * glDisableVertexAttribArray(index);
     */
    export function disableVertexAttribArray(index: GLuint): void;

    /**
     * glDrawArrays(mode, first, count);
     */
    export function drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;

    /**
     * glDrawElements(mode, count, type, (const void*)offset);
     */
    export function drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;

    /**
     * glEnable(cap);
     */
    export function enable(cap: GLenum): void;

    /**
     * glEnableVertexAttribArray(index);
     */
    export function enableVertexAttribArray(index: GLuint): void;

    /**
     * glFinish();
     */
    export function finish(): void;

    /**
     * glFlush();
     */
    export function flush(): void;

    /**
     * glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer);
     */
    export function framebufferRenderbuffer(
        target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: GLuint): void;

    /**
     * glFramebufferTexture2D(target, attachment, textarget, texture, level);
     */
    export function framebufferTexture2D(
        target: GLenum, attachment: GLenum, textarget: GLenum, texture: GLuint, level: GLint): void;

    /**
     * glFrontFace(mode);
     */
    export function frontFace(mode: GLenum): void;

    /**
     * glGenerateMipmap(target);
     */
    export function generateMipmap(target: GLenum): void;

    /**
     * GLsizei length;
     * char name[256];
     * glGetActiveAttrib(program, index, 256, &length, &return_value.size, &return_value.type, name);
     * return_value.name = std::string(name, length);
     */
    export function getActiveAttrib(program: GLuint, index: GLuint): WebGLActiveInfo;

    /**
     * GLsizei length;
     * char name[256];
     * glGetActiveUniform(program, index, 256, &length, &return_value.size, &return_value.type, name);
     * return_value.name = std::string(name, length);
     */
    export function getActiveUniform(program: GLuint, index: GLuint): WebGLActiveInfo
        ;
    /**
     * return_value.reserve(16);
     * GLsizei count;
     * glGetAttachedShaders(program, 16, &count, return_value.data());
     * return_value.resize(count);
     */
    export function getAttachedShaders(program: GLuint): GLuint[];

    /**
     * return_value = glGetAttribLocation(program, name);
     */
    export function getAttribLocation(program: GLuint, name: cstring): GLint;

    /**
     * glGetBufferParameteriv(target, pname, &return_value);
     */
    export function getBufferParameter(target: GLenum, pname: GLenum): GLint;

    /**
     * return_value = glGetError();
     */
    export function getError(): GLenum;

    /**
     * glGetFramebufferAttachmentParameteriv(target, attachment, pname, &return_value);
     */
    export function getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): GLint;

    /**
     * GLboolean value;
     * glGetBooleanv(pname, &value);
     * return_value = value;
     */
    function getBoolean(pname: GLenum): GLboolean;

    /**
     * glGetFloatv(pname, &return_value);
     */
    function getFloat(pname: GLenum): GLfloat;

    /**
     * glGetIntegerv(pname, &return_value);
     */
    function getInteger(pname: GLenum): GLint;

    /**
     * glGetInteger64v(pname, &return_value);
     */
    function getInteger64(pname: GLenum): GLint64;

    /**
     * return_value = reinterpret_cast<const char*>(glGetString(pname));
     */
    function getString(pname: GLenum): cstring;

    /**
     * switch (pname) {
     *   case GL_RENDERER:
     *   case GL_SHADING_LANGUAGE_VERSION:
     *   case GL_VENDOR:
     *   case GL_VERSION:
     *     return getString(args);
     *   case GL_BLEND:
     *   case GL_CULL_FACE:
     *   case GL_DEPTH_TEST:
     *   case GL_DEPTH_WRITEMASK:
     *   case GL_DITHER:
     *   case GL_POLYGON_OFFSET_FILL:
     *   case GL_RASTERIZER_DISCARD:
     *   case GL_SAMPLE_ALPHA_TO_COVERAGE:
     *   case GL_SAMPLE_COVERAGE:
     *   case GL_SAMPLE_COVERAGE_INVERT:
     *   case GL_SCISSOR_TEST:
     *   case GL_STENCIL_TEST:
     *   case GL_TRANSFORM_FEEDBACK_ACTIVE:
     *   case GL_TRANSFORM_FEEDBACK_PAUSED:
     *   //case GL_UNPACK_FLIP_Y_WEBGL:
     *   //case GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL:
     *     return getBoolean(args);
     *   case GL_DEPTH_CLEAR_VALUE:
     *   case GL_LINE_WIDTH:
     *   case GL_MAX_TEXTURE_LOD_BIAS:
     *   case GL_POLYGON_OFFSET_FACTOR:
     *   case GL_POLYGON_OFFSET_UNITS:
     *   case GL_SAMPLE_COVERAGE_VALUE:
     *     return getFloat(args);
     *   //case GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL:
     *   case GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS:
     *   case GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:
     *   case GL_MAX_ELEMENT_INDEX:
     *   case GL_MAX_SERVER_WAIT_TIMEOUT:
     *   case GL_MAX_UNIFORM_BLOCK_SIZE:
     *     return getInteger64(args);
     *   case GL_ACTIVE_TEXTURE:
     *   case GL_BLEND_DST_ALPHA:
     *   case GL_BLEND_DST_RGB:
     *   case GL_BLEND_EQUATION_ALPHA:
     *   case GL_BLEND_EQUATION_RGB:
     *   case GL_BLEND_SRC_ALPHA:
     *   case GL_BLEND_SRC_RGB:
     *   case GL_CULL_FACE_MODE:
     *   case GL_DEPTH_FUNC:
     *   // case GL_DRAW_BUFFER:
     *   case GL_FRAGMENT_SHADER_DERIVATIVE_HINT:
     *   case GL_FRONT_FACE:
     *   case GL_GENERATE_MIPMAP_HINT:
     *   case GL_IMPLEMENTATION_COLOR_READ_FORMAT:
     *   case GL_IMPLEMENTATION_COLOR_READ_TYPE:
     *   case GL_READ_BUFFER:
     *   case GL_STENCIL_BACK_FAIL:
     *   case GL_STENCIL_BACK_FUNC:
     *   case GL_STENCIL_BACK_PASS_DEPTH_FAIL:
     *   case GL_STENCIL_BACK_PASS_DEPTH_PASS:
     *   case GL_STENCIL_FAIL:
     *   case GL_STENCIL_FUNC:
     *   case GL_STENCIL_PASS_DEPTH_FAIL:
     *   case GL_STENCIL_PASS_DEPTH_PASS:
     *   // case GL_UNPACK_COLORSPACE_CONVERSION_WEBGL:
     *   case GL_ALPHA_BITS:
     *   case GL_BLUE_BITS:
     *   case GL_DEPTH_BITS:
     *   case GL_GREEN_BITS:
     *   case GL_MAX_3D_TEXTURE_SIZE:
     *   case GL_MAX_ARRAY_TEXTURE_LAYERS:
     *   case GL_MAX_COLOR_ATTACHMENTS:
     *   case GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS:
     *   case GL_MAX_COMBINED_UNIFORM_BLOCKS:
     *   case GL_MAX_CUBE_MAP_TEXTURE_SIZE:
     *   case GL_MAX_DRAW_BUFFERS:
     *   case GL_MAX_ELEMENTS_INDICES:
     *   case GL_MAX_ELEMENTS_VERTICES:
     *   case GL_MAX_FRAGMENT_INPUT_COMPONENTS:
     *   case GL_MAX_FRAGMENT_UNIFORM_BLOCKS:
     *   case GL_MAX_FRAGMENT_UNIFORM_COMPONENTS:
     *   case GL_MAX_FRAGMENT_UNIFORM_VECTORS:
     *   case GL_MAX_PROGRAM_TEXEL_OFFSET:
     *   case GL_MAX_RENDERBUFFER_SIZE:
     *   case GL_MAX_SAMPLES:
     *   case GL_MAX_TEXTURE_IMAGE_UNITS:
     *   case GL_MAX_TEXTURE_SIZE:
     *   case GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS:
     *   case GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS:
     *   case GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS:
     *   case GL_MAX_UNIFORM_BUFFER_BINDINGS:
     *   case GL_MAX_VARYING_COMPONENTS:
     *   case GL_MAX_VARYING_VECTORS:
     *   case GL_MAX_VERTEX_ATTRIBS:
     *   case GL_MAX_VERTEX_OUTPUT_COMPONENTS:
     *   case GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS:
     *   case GL_MAX_VERTEX_UNIFORM_BLOCKS:
     *   case GL_MAX_VERTEX_UNIFORM_COMPONENTS:
     *   case GL_MAX_VERTEX_UNIFORM_VECTORS:
     *   case GL_MIN_PROGRAM_TEXEL_OFFSET:
     *   case GL_PACK_ALIGNMENT:
     *   case GL_PACK_ROW_LENGTH:
     *   case GL_PACK_SKIP_PIXELS:
     *   case GL_PACK_SKIP_ROWS:
     *   case GL_RED_BITS:
     *   case GL_SAMPLE_BUFFERS:
     *   case GL_SAMPLES:
     *   case GL_STENCIL_BACK_REF:
     *   case GL_STENCIL_BITS:
     *   case GL_STENCIL_CLEAR_VALUE:
     *   case GL_STENCIL_REF:
     *   case GL_SUBPIXEL_BITS:
     *   case GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT:
     *   case GL_UNPACK_ALIGNMENT:
     *   case GL_UNPACK_IMAGE_HEIGHT:
     *   case GL_UNPACK_ROW_LENGTH:
     *   case GL_UNPACK_SKIP_IMAGES:
     *   case GL_UNPACK_SKIP_PIXELS:
     *   case GL_UNPACK_SKIP_ROWS:
     *   case GL_ARRAY_BUFFER_BINDING:
     *   case GL_COPY_READ_BUFFER_BINDING:
     *   case GL_COPY_WRITE_BUFFER_BINDING:
     *   case GL_CURRENT_PROGRAM:
     *   // case GL_DRAW_FRAMEBUFFER_BINDING:
     *   case GL_ELEMENT_ARRAY_BUFFER_BINDING:
     *   case GL_FRAMEBUFFER_BINDING:
     *   case GL_PIXEL_PACK_BUFFER_BINDING:
     *   case GL_PIXEL_UNPACK_BUFFER_BINDING:
     *   case GL_READ_FRAMEBUFFER_BINDING:
     *   case GL_RENDERBUFFER_BINDING:
     *   case GL_SAMPLER_BINDING:
     *   case GL_STENCIL_BACK_VALUE_MASK:
     *   case GL_STENCIL_BACK_WRITEMASK:
     *   case GL_STENCIL_VALUE_MASK:
     *   case GL_STENCIL_WRITEMASK:
     *   case GL_TEXTURE_BINDING_2D:
     *   case GL_TEXTURE_BINDING_2D_ARRAY:
     *   case GL_TEXTURE_BINDING_3D:
     *   case GL_TEXTURE_BINDING_CUBE_MAP:
     *   case GL_TRANSFORM_FEEDBACK_BINDING:
     *   case GL_TRANSFORM_FEEDBACK_BUFFER_BINDING:
     *   case GL_UNIFORM_BUFFER_BINDING:
     *   case GL_VERTEX_ARRAY_BINDING:
     *     return getInteger(args);
     *   default:
     *     printf("pname=%x\n", pname);
     *     ThrowTypeError(args.GetIsolate(), "GetParameter pname not supported");
     *     return;
     * }
     */
    export function getParameter(pname: GLenum): any;

    /**
     * glGetProgramiv(program, pname, &return_value);
     */
    export function getProgramParameter(program: GLuint, pname: GLenum): GLint;

    /**
     * GLint length;
     * glGetProgramiv(program, GL_INFO_LOG_LENGTH, &length);
     * std::vector<char> log(length);
     * glGetProgramInfoLog(program, length, nullptr, log.data());
     * return_value = std::string(log.data(), length);
     */
    export function getProgramInfoLog(program: GLuint): string;

    /**
     * glGetRenderbufferParameteriv(target, pname, &return_value);
     */
    export function getRenderbufferParameter(target: GLenum, pname: GLenum): GLint;

    /**
     * glGetShaderiv(shader, pname, &return_value);
     */
    export function getShaderParameter(shader: GLuint, pname: GLenum): GLint;

    /**
     * GLint length;
     * glGetShaderiv(shader, GL_INFO_LOG_LENGTH, &length);
     * std::vector<char> log(length);
     * glGetShaderInfoLog(shader, length, nullptr, log.data());
     * return_value = std::string(log.data(), length);
     */
    export function getShaderInfoLog(shader: GLuint): string;

    /**
     * GLint ranges[2];
     * glGetShaderPrecisionFormat(shaderType, precisionType, ranges, &return_value.precision);
     * return_value.rangeMin = ranges[0];
     * return_value.rangeMax = ranges[1];
     */
    export function getShaderPrecisionFormat(shaderType: GLenum, precisionType: GLenum): WebGLShaderPrecisionFormat;

    /**
     * GLint length;
     * glGetShaderiv(shader, GL_SHADER_SOURCE_LENGTH, &length);
     * std::vector<char> source(length);
     * glGetShaderSource(shader, length, nullptr, source.data());
     * return_value = std::string(source.data(), length);
     */
    export function getShaderSource(shader: GLuint): string;

    /**
     * switch (pname) {
     *   case GL_TEXTURE_MAX_LOD: // GLfloat
     *   case GL_TEXTURE_MIN_LOD: // GLfloat
     *   {
     *     GLfloat result;
     *     glGetTexParameterfv(target, pname, &result);
     *     return_value = result;
     *     break;
     *   }
     *   default: {
     *     GLint result;
     *     glGetTexParameteriv(target, pname, &result);
     *     return_value = result;
     *   }
     * }
     */
    export function getTexParameter(target: GLenum, pname: GLenum): number;

    /**
     * // This one is hard, we might need to switch to objects for uniform locations to embed
     * // metadata about the shape of the uniform.
     * printf("gl.getUniform(program=%d,location=%d)\n", program, location);
     * ThrowTypeError(args.GetIsolate(), "TODO: Implement getUniform()"); return;
     */
    export function getUniform(program: GLuint, location: GLuint): any;

    /**
     * return_value = glGetUniformLocation(program, name);
     */
    export function getUniformLocation(program: GLuint, name: cstring): GLuint;

    /**
     * int32_t return_value;
     * switch (pname) {
     *   case GL_VERTEX_ATTRIB_ARRAY_SIZE: // GLint
     *   case GL_VERTEX_ATTRIB_ARRAY_STRIDE: // GLint
     *   case GL_VERTEX_ATTRIB_ARRAY_TYPE: // GLenum
     *   case GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: // WebGLBuffer
     *     glGetVertexAttribiv(index, pname, &return_value);
     *     args.GetReturnValue().Set(return_value);
     *     return;
     *   case GL_VERTEX_ATTRIB_ARRAY_ENABLED: // GLboolean
     *   case GL_VERTEX_ATTRIB_ARRAY_NORMALIZED: // GLboolean
     *     glGetVertexAttribiv(index, pname, &return_value);
     *     args.GetReturnValue().Set(static_cast<bool>(return_value));
     *     return;
     *   case GL_CURRENT_VERTEX_ATTRIB: // Float32Array (with 4 elements)
     *     ThrowTypeError(args.GetIsolate(), "TODO: Implement returning Float32Array from getVertexAttrib");
     *     return;
     *   default:
     *     ThrowTypeError(args.GetIsolate(), "Unsupported pname in gl.getVertexAttrib()");
     *     return;
     * }
     */
    export function getVertexAttrib(index: GLuint, pname: GLenum): any;

    /**
     * void* ptr;
     * glGetVertexAttribPointerv(index, pname, &ptr);
     * return_value = reinterpret_cast<GLintptr>(ptr);
     */
    export function getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;

    /**
     * glHint(target, mode);
     */
    export function hint(target: GLenum, mode: GLenum): void;

    /**
     * return_value = glIsBuffer(buffer);
     */
    export function isBuffer(buffer: GLuint): GLboolean;

    /**
     * return_value = glIsEnabled(cap);
     */
    export function isEnabled(cap: GLenum): GLboolean;

    /**
     * return_value = glIsFramebuffer(framebuffer);
     */
    export function isFramebuffer(framebuffer: GLuint): GLboolean;

    /**
     * return_value = glIsProgram(program);
     */
    export function isProgram(program: GLuint): GLboolean;

    /**
     * return_value = glIsRenderbuffer(renderbuffer);
     */
    export function isRenderbuffer(renderbuffer: GLuint): GLboolean;

    /**
     * return_value = glIsShader(shader);
     */
    export function isShader(shader: GLuint): GLboolean;

    /**
     * return_value = glIsTexture(texture);
     */
    export function isTexture(texture: GLuint): GLboolean;

    /**
     * glLineWidth(width);
     */
    export function lineWidth(width: GLfloat): void;

    /**
     * glLinkProgram(program);
     */
    export function linkProgram(program: GLuint): void;

    /**
     * if (pname == 0x9240) UNPACK_FLIP_Y_WEBGL = param;
     * else if (pname == 0x9241) UNPACK_PREMULTIPLY_ALPHA_WEBGL = param;
     * else if (pname == 0x9243) UNPACK_COLORSPACE_CONVERSION_WEBGL = param;
     * else glPixelStorei(pname, param);
     */
    export function pixelStorei(pname: GLenum, param: GLint): void;

    /**
     * glPolygonOffset(factor, units);
     */
    export function polygonOffset(factor: GLfloat, units: GLfloat): void;

    /**
     * glReadPixels(x, y, width, height, format, type, pixels.data());
     */
    export function readPixels(
        x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: binary): void;

    /**
     * if (internalFormat == GL_DEPTH_STENCIL) internalFormat = GL_DEPTH24_STENCIL8;
     * else if (internalFormat == GL_DEPTH_COMPONENT) internalFormat = GL_DEPTH_COMPONENT24;
     * glRenderbufferStorage(target, internalFormat, width, height);
     */
    export function renderbufferStorage(target: GLenum, internalFormat: GLenum, width: GLsizei, height: GLsizei): void;

    /**
     * glSampleCoverage(value, invert);
     */
    export function sampleCoverage(value: GLclampf, invert: GLboolean): void;

    /**
     * glScissor(x, y, width, height);
     */
    export function scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    /**
     * GLint len = source.size();
     * GLchar* data = source.data();
     * glShaderSource(shader, 1, &data, &len);
     */
    export function shaderSource(shader: GLuint, source: string): void;

    /**
     * glStencilFunc(func, ref, mask);
     */
    export function stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;

    /**
     * glStencilFuncSeparate(face, func, ref, mask);
     */
    export function stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;

    /**
     * glStencilMask(mask);
     */
    export function stencilMask(mask: GLuint): void;

    /**
     * glStencilMaskSeparate(face, mask);
     */
    export function stencilMaskSeparate(face: GLenum, mask: GLuint): void;

    /**
     * glStencilOp(fail, zfail, zpass);
     */
    export function stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;

    /**
     * glStencilOpSeparate(face, fail, zfail, zpass);
     */
    export function stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;

    /**
     * glTexParameterf(target, pname, param);
     */
    export function texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;

    /**
     * glTexParameteri(target, pname, param);
     */
    export function texParameteri(target: GLenum, pname: GLenum, param: GLint): void;

    /**
     * glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels.data());
     */
    export function texImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei,
        border: GLint, format: GLenum, type: GLenum, pixels: binary): void;

    /**
     * std::vector<uint8_t> flip;
     * size_t original_size = img.width * img.height * img.bpp;
     * if (img.pixels.size() < original_size) {
     *   ThrowTypeError(args.GetIsolate(), "pixels in img too small"); return;
     * }
     * if (UNPACK_FLIP_Y_WEBGL) {
     *   size_t row_bytes = img.width * img.bpp;
     *   flip.resize(original_size);
     *   for (size_t y = 0; y < original_size; y += row_bytes) {
     *     for (size_t x = 0; x < row_bytes; x++) {
     *       flip[y + x] = img.pixels[original_size - row_bytes - y + x];
     *     }
     *   }
     *   img.pixels = flip;
     * }
     * if (UNPACK_PREMULTIPLY_ALPHA_WEBGL) {
     *   printf("TODO: implement UNPACK_PREMULTIPLY_ALPHA_WEBGL\n");
     * }
     * if (UNPACK_COLORSPACE_CONVERSION_WEBGL) {
     *   printf("TODO: implement UNPACK_COLORSPACE_CONVERSION_WEBGL\n");
     * }
     * std::vector<uint8_t> reformat;
     * if ((format == GL_RGB && img.bpp != 3) || (format == GL_RGBA && img.bpp != 4)) {
     *   int new_bpp = format == GL_RGB ? 3 : 4;
     *   size_t new_size = img.width * img.height * new_bpp;
     *   reformat.resize(new_size);
     *   size_t j = 0, i = 0;
     *   if (img.bpp < 1) {
     *     ThrowTypeError(args.GetIsolate(), "TODO: Implement upsampling from bits?"); return;
     *   }
     *   while (i < original_size && j < new_size) {
     *     reformat[j++] = img.pixels[img.bpp >= 1 ? i++ : i];
     *     reformat[j++] = img.pixels[img.bpp >= 2 ? i++ : i];
     *     reformat[j++] = img.pixels[img.bpp >= 3 ? i++ : i];
     *     if (new_bpp >= 4) {
     *       reformat[j++] = img.pixels[img.bpp >= 4 ? i++ : i];
     *     } else if (img.bpp >= 4) {
     *       i++;
     *     }
     *   }
     *   img.pixels = reformat;
     * }
     * glTexImage2D(target, level, internalformat, img.width, img.height, 0, format, type, img.pixels.data());
     */
    export function texImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, format: GLenum, type: GLenum, img: ImageData): void;

    /**
     * format = img.bpp == 3 ? GL_RGB : img.bpp == 4 ? GL_RGBA : 0;
     * glTexSubImage2D(target, level, xoffset, yoffset, img.width, img.height, format, type, img.pixels.data());
     */
    export function texSubImage2D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, img: ImageData): void;

    /**
     * glUniform1f(location, v0);
     */
    export function uniform1f(location: GLuint, v0: f32): void;

    /**
     * glUniform1fv(location, 1, value.data());
     */
    export function uniform1fv(location: GLuint, value: Float32Array): void;

    /**
     * glUniform1i(location, v0);
     */
    export function uniform1i(location: GLuint, v0: GLint): void;

    /**
     * glUniform1iv(location, 1, value.data());
     */
    export function uniform1iv(location: GLuint, value: Int32Array): void;

    /**
     * glUniform2f(location, v0, v1);
     */
    export function uniform2f(location: GLuint, v0: f32, v1: f32): void;

    /**
     * glUniform2fv(location, 1, value.data());
     */
    export function uniform2fv(location: GLuint, value: Float32Array): void;

    /**
     * glUniform2i(location, v0, v1);
     */
    export function uniform2i(location: GLuint, v0: i32, v1: i32): void;

    /**
     * glUniform2iv(location, 1, value.data());
     */
    export function uniform2iv(location: GLuint, value: Int32Array): void;

    /**
     * glUniform3f(location, v0, v1, v2);
     */
    export function uniform3f(location: GLuint, v0: f32, v1: f32, v2: f32): void;

    /**
     * glUniform3fv(location, 1, value.data());
     */
    export function uniform3fv(location: GLuint, value: Float32Array): void;

    /**
     * glUniform3i(location, v0, v1, v2);
     */
    export function uniform3i(location: GLuint, v0: i32, v1: i32, v2: i32): void;

    /**
     * glUniform3iv(location, 1, value.data());
     */
    export function uniform3iv(location: GLuint, value: Int32Array): void;

    /**
     * glUniform4f(location, v0, v1, v2, v3);
     */
    export function uniform4f(location: GLuint, v0: f32, v1: f32, v2: f32, v3: f32): void;

    /**
     * glUniform4fv(location, 1, value.data());
     */
    export function uniform4fv(location: GLuint, value: Float32Array): void;

    /**
     * glUniform4i(location, v0, v1, v2, v3);
     */
    export function uniform4i(location: GLuint, v0: i32, v1: i32, v2: i32, v3: i32): void;

    /**
     * glUniform4iv(location, 1, value.data());
     */
    export function uniform4iv(location: GLuint, value: Int32Array): void;

    /**
     * glUniformMatrix2fv(location, 1, transpose, value.data());
     */
    export function uniformMatrix2fv(location: GLuint, transpose: GLboolean, value: Float32Array): void;

    /**
     * glUniformMatrix3fv(location, 1, transpose, value.data());
     */
    export function uniformMatrix3fv(location: GLuint, transpose: GLboolean, value: Float32Array): void;

    /**
     * glUniformMatrix4fv(location, 1, transpose, value.data());
     */
    export function uniformMatrix4fv(location: GLuint, transpose: GLboolean, value: Float32Array): void;

    /**
     * glUseProgram(program);
     */
    export function useProgram(program: GLuint): void;

    /**
     * glValidateProgram(program);
     */
    export function validateProgram(program: GLuint): void;

    /**
     * glVertexAttrib1f(index, v0);
     */
    export function vertexAttrib1f(index: GLuint, v0: f32): void;

    /**
     * glVertexAttrib1fv(index, value.data());
     */
    export function vertexAttrib1fv(index: GLuint, value: Float32Array): void;

    /**
     * glVertexAttrib2f(index, v0, v1);
     */
    export function vertexAttrib2f(index: GLuint, v0: f32, v1: f32): void;

    /**
     * glVertexAttrib2fv(index, value.data());
     */
    export function vertexAttrib2fv(index: GLuint, value: Float32Array): void;

    /**
     * glVertexAttrib3f(index, v0, v1, v2);
     */
    export function vertexAttrib3f(index: GLuint, v0: f32, v1: f32, v2: f32): void;

    /**
     * glVertexAttrib3fv(index, value.data());
     */
    export function vertexAttrib3fv(index: GLuint, value: Float32Array): void;

    /**
     * glVertexAttrib4f(index, v0, v1, v2, v3);
     */
    export function vertexAttrib4f(index: GLuint, v0: f32, v1: f32, v2: f32, v3: f32): void;

    /**
     * glVertexAttrib4fv(index, value.data());
     */
    export function vertexAttrib4fv(index: GLuint, value: Float32Array): void;

    /**
     * glVertexAttribPointer(index, size, type, normalized, stride, reinterpret_cast<void*>(offset));
     */
    export function vertexAttribPointer(
        index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;

    /**
     * glViewport(x, y, width, height);
     */
    export function viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    ///////////////////////////////////////////////////////////////////////////////
    // WebGL 2.0 Functions
    ///////////////////////////////////////////////////////////////////////////////

    /**
     * glCopyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size);
     */
    export function copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizei): void;

    /**
     * printf("gl.getBufferSubData(target=%d, srcByteOffset=%ld, dstData=(%p/%lu), dstOffset=%d, length=%d",
     *   target, srcByteOffset, dstData.data(), dstData.size(), dstOffset, length);
     * ThrowTypeError(args.GetIsolate(), "TODO: Implement getBufferSubData()"); return;
     */
    export function getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstData: binary, dstOffset: GLuint, length: GLuint): void;

    /**
     * glBlitFramebuffer(
     *   srcX0, srcY0, srcX1, srcY1,
     *   dstX0, dstY0, dstX1, dstY1,
     *   mask, filter);
     */
    export function blitFramebuffer(
        srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint,
        dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint,
        mask: GLbitfield, filter: GLenum): void;

    /**
     * glFramebufferTextureLayer(target, attachment, texture, level, layer);
     */
    export function framebufferTextureLayer(
        target: GLenum, attachment: GLenum, texture: GLuint, level: GLint, layer: GLint): void;

    /**
     * glGetInternalformativ(target, internalformat, pname, 1, &return_value);
     */
    export function getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): GLint;

    /**
     * glInvalidateFramebuffer(target, attachments.size(), attachments.data());
     */
    export function invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;

    /**
     * glInvalidateSubFramebuffer(target, attachments.size(), attachments.data(), x, y, width, height);
     */
    export function invalidateSubFramebuffer(
        target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    /**
     * glReadBuffer(src);
     */
    export function readBuffer(src: GLenum): void;

    /**
     * glRenderbufferStorageMultisample(target, samples, internalFormat, width, height);
     */
    export function renderbufferStorageMultisample(
        target: GLenum, samples: GLsizei, internalFormat: GLenum, width: GLsizei, height: GLsizei): void;

    /**
     * glTexStorage2D(target, levels, internalformat, width, height);
     */
    export function texStorage2D(
        target: GLenum, levels: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei): void;

    /**
     * glTexStorage3D(target, levels, internalformat, width, height, depth);
     */
    export function texStorage3D(
        target: GLenum, levels: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;

    /**
     * glTexImage3D(target, level, internalformat, width, height, depth, border, format, type, reinterpret_cast<void*>(offset));
     */
    export function texImage3D(
        target: GLenum, level: GLint, internalformat: GLenum,
        width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint,
        format: GLenum, type: GLenum, offset: GLintptr): void;

    /**
     * glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData.data() + srcOffset);
     */
    export function texSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, type: GLenum,
        srcData: binary, srcOffset: GLintptr
    ): void;

    /**
     * glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, img.pixels.data());
     */
    export function texSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, type: GLenum,
        img: ImageData
    ): void;

    /**
     * glCopyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height);
     */
    export function copyTexSubImage3D(
        target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

    /**
     * glCompressedTexImage2D(
     *   target, level, internalformat, width, height, border,
     *   imageSize, reinterpret_cast<void*>(offset));
     */
    export function compressedTexImage2D(
        target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei,
        border: GLsizei, imageSize: GLsizei, offset: GLintptr): void;

    /**
     * glCompressedTexImage3D(target, level, internalformat, width, height, depth, border, imageSize, reinterpret_cast<void*>(offset));
     */
    export function compressedTexImage3D(
        target: GLenum, level: GLint, internalformat: GLenum,
        width: GLsizei, height: GLsizei, depth: GLsizei, border: GLsizei,
        imageSize: GLsizei, offset: GLintptr): void;

    /**
     * glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, reinterpret_cast<void*>(offset));
     */
    export function compressedTexSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, imageSize: GLint, offset: GLintptr): void;

    /**
     * glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcLengthOverride, srcData.data() + srcOffset);
     */
    export function compressedTexSubImage3D(
        target: GLenum, level: GLint,
        xoffset: GLint, yoffset: GLint, zoffset: GLint,
        width: GLsizei, height: GLsizei, depth: GLsizei,
        format: GLenum, srcData: binary, srcOffset: GLintptr, srcLengthOverride: GLsizei): void;

    /**
     * return_value = glGetFragDataLocation(program, name);
     */
    export function getFragDataLocation(program: GLuint, name: cstring): GLint;

    /**
     * glUniform1ui(location, v0);
     */
    export function uniform1ui(location: GLuint, v0: GLuint): void;

    /**
     * glUniform2ui(location, v0, v1);
     */
    export function uniform2ui(location: GLuint, v0: GLuint, v1: GLuint): void;

    /**
     * glUniform3ui(location, v0, v1, v2);
     */
    export function uniform3ui(location: GLuint, v0: GLuint, v1: GLuint, v2: GLuint): void;

    /**
     * glUniform4ui(location, v0, v1, v2, v3);
     */
    export function uniform4ui(location: GLuint, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;

    /**
     * glUniform1uiv(location, 1, value.data());
     */
    export function uniform1uiv(location: GLuint, value: Uint32Array): void;

    /**
     * glUniform2uiv(location, 1, value.data());
     */
    export function uniform2uiv(location: GLuint, value: Uint32Array): void;
    /**
     * glUniform3uiv(location, 1, value.data());
     */
    export function uniform3uiv(location: GLuint, value: Uint32Array): void;
    /**
     * glUniform4uiv(location, 1, value.data());
     */
    export function uniform4uiv(location: GLuint, value: Uint32Array): void;
    /**
     * glUniformMatrix2x3fv(location, 1, transpose, data.data() + srcOffset);
     */
    export function uniformMatrix2x3fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    /**
     * glUniformMatrix3x2fv(location, 1, transpose, data.data() + srcOffset);
     */
    export function uniformMatrix3x2fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    /**
     * glUniformMatrix2x4fv(location, 1, transpose, data.data() + srcOffset);
     */
    export function uniformMatrix2x4fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    /**
     * glUniformMatrix4x2fv(location, 1, transpose, data.data() + srcOffset);
     */
    export function uniformMatrix4x2fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    /**
     * glUniformMatrix3x4fv(location, 1, transpose, data.data() + srcOffset);
     */
    export function uniformMatrix3x4fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    /**
     * glUniformMatrix4x3fv(location, 1, transpose, data.data() + srcOffset);
     */
    export function uniformMatrix4x3fv(location: GLuint, transpose: boolean, data: Float32Array, srcOffset: GLintptr): void;

    /**
     * glVertexAttribI4i(index, x, y, z, w);
     */
    export function vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;

    /**
     * glVertexAttribI4iv(index, value.data());
     */
    export function vertexAttribI4iv(index: GLuint, value: Int32Array): void;

    /**
     * glVertexAttribI4ui(index, x, y, z, w);
     */
    export function vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;

    /**
     * glVertexAttribI4uiv(index, value.data());
     */
    export function vertexAttribI4uiv(index: GLuint, value: Uint32Array): void;

    /**
     * glVertexAttribIPointer(index, size, type, stride, reinterpret_cast<void*>(offset));
     */
    export function vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;

    /**
     * glVertexAttribDivisor(index, divisor);
     */
    export function vertexAttribDivisor(index: GLuint, divisor: GLuint): void;

    /**
     * glDrawArraysInstanced(mode, first, count, instanceCount);
     */
    export function drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;

    /**
     * glDrawElementsInstanced(mode, count, type, reinterpret_cast<void*>(offset), instanceCount);
     */
    export function drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;

    /**
     * glDrawRangeElements(mode, start, end, count, type, reinterpret_cast<void*>(offset));
     */
    export function drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;

    /**
     * glDrawBuffers(buffers.size(), buffers.data());
     */
    export function drawBuffers(buffers: GLenum[]): void;

    /**
     * glClearBufferiv(buffer, drawbuffer, values.data());
     */
    export function clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: GLint[]): void;

    /**
     * glClearBufferuiv(buffer, drawbuffer, values.data());
     */
    export function clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: GLuint[]): void;

    /**
     * glClearBufferfv(buffer, drawbuffer, values.data());
     */
    export function clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: GLfloat[]): void;

    /**
     * glClearBufferfi(buffer, drawbuffer, depth, stencil);
     */
    export function clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;

    /**
     * glGenQueries(1, &return_value);
     */
    export function createQuery(): GLuint;

    /**
     * glDeleteQueries(1, &query);
     */
    export function deleteQuery(query: GLuint): void;

    /**
     * return_value = glIsQuery(query);
     */
    export function isQuery(query: GLuint): boolean;

    /**
     * glBeginQuery(target, query);
     */
    export function beginQuery(target: GLenum, query: GLuint): void;

    /**
     * glEndQuery(target);
     */
    export function endQuery(target: GLenum): void;

    /**
     * glGetQueryiv(target, pname, &return_value);
     */
    export function getQuery(target: GLenum, pname: GLenum): GLint;

    /**
     * glGetQueryObjectuiv(query, pname, &return_value);
     */
    export function getQueryParameter(query: GLuint, pname: GLenum): GLuint;

    /**
     * glGenSamplers(1, &return_value);
     */
    export function createSampler(): GLuint;

    /**
     * glDeleteSamplers(1, &sampler);
     */
    export function deleteSampler(sampler: GLuint): void;

    /**
     * return_value = glIsSampler(sampler);
     */
    export function isSampler(sampler: GLuint): boolean;

    /**
     * glBindSampler(unit, sampler);
     */
    export function bindSampler(unit: GLuint, sampler: GLuint): void;

    /**
     * glSamplerParameteri(sampler, pname, param);
     */
    export function samplerParameteri(sampler: GLuint, pname: GLenum, param: GLint): void;

    /**
     * glSamplerParameterf(sampler, pname, param);
     */
    export function samplerParameterf(sampler: GLuint, pname: GLenum, param: GLfloat): void;

    /**
     * switch (pname) {
     *   case GL_TEXTURE_COMPARE_FUNC: // GLenum
     *   case GL_TEXTURE_COMPARE_MODE: // GLenum
     *   case GL_TEXTURE_MAG_FILTER: // GLenum
     *   case GL_TEXTURE_MIN_FILTER: // GLenum
     *   case GL_TEXTURE_WRAP_R: // GLenum
     *   case GL_TEXTURE_WRAP_S: // GLenum
     *   case GL_TEXTURE_WRAP_T: // GLenum
     *   {
     *     GLint param;
     *     glGetSamplerParameteriv(sampler, pname, &param);
     *     return_value = param;
     *     break;
     *   }
     *   case GL_TEXTURE_MAX_LOD: // GLfloat
     *   case GL_TEXTURE_MIN_LOD: // GLfloat
     *   {
     *     GLfloat param;
     *     glGetSamplerParameterfv(sampler, pname, &param);
     *     return_value = param;
     *     break;
     *   }
     *   default:
     *     ThrowTypeError(args.GetIsolate(), "Unknown pname in gl.getSamplerParameter");
     *     return;
     * }
     */
    export function getSamplerParameter(sampler: GLuint, pname: GLenum): number;

    /**
     * glFenceSync(condition, flags);
     */
    export function fenceSync(condition: GLenum, flags: GLbitfield): void;

    /**
     * return_value = glIsSync(static_cast<GLsync>(sync));
     */
    export function isSync(sync: GLsync): boolean;

    /**
     * glDeleteSync(static_cast<GLsync>(sync));
     */
    export function deleteSync(sync: GLsync): void;

    /**
     * glClientWaitSync(static_cast<GLsync>(sync), flags, timeout);
     */
    export function clientWaitSync(sync: GLsync, flags: GLbitfield, timeout: GLint64): void;

    /**
     * glWaitSync(static_cast<GLsync>(sync), flags, timeout);
     */
    export function waitSync(sync: GLsync, flags: GLbitfield, timeout: GLint64): void;

    /**
     * glGetSynciv(static_cast<GLsync>(sync), pname, sizeof(return_value), nullptr, &return_value);
     */
    export function getSyncParameter(sync: GLsync, pname: GLenum): GLint;

    /**
     * glGenTransformFeedbacks(1, &return_value);
     */
    export function createTransformFeedback(): GLuint;

    /**
     * glDeleteTransformFeedbacks(1, &transformFeedback);
     */
    export function deleteTransformFeedback(transformFeedback: GLuint): void;

    /**
     * return_value = glIsTransformFeedback(transformFeedback);
     */
    export function isTransformFeedback(transformFeedback: GLuint): boolean;

    /**
     * glBindTransformFeedback(target, transformFeedback);
     */
    export function bindTransformFeedback(target: GLenum, transformFeedback: GLuint): void;

    /**
     * glBeginTransformFeedback(primitiveMode);
     */
    export function beginTransformFeedback(primitiveMode: GLenum): void;

    /**
     * glEndTransformFeedback();
     */
    export function endTransformFeedback(): void;

    /**
     * glTransformFeedbackVaryings(program, varyings.size(), varyings.data(), bufferMode);
     */
    export function transformFeedbackVaryings(program: GLuint, varyings: cstring[], bufferMode: GLenum): void;

    /**
     * GLsizei length;
     * char name[256];
     * glGetTransformFeedbackVarying(program, index, 256, &length, &return_value.size, &return_value.type, name);
     * return_value.name = std::string(name, length);
     */
    export function getTransformFeedbackVarying(program: GLuint, index: GLuint): WebGLActiveInfo;

    /**
     * glPauseTransformFeedback();
     */
    export function pauseTransformFeedback(): void;

    /**
     * glResumeTransformFeedback();
     */
    export function resumeTransformFeedback(): void;

    /**
     * glBindBufferBase(target, index, buffer);
     */
    export function bindBufferBase(target: GLenum, index: GLuint, buffer: GLuint): void;

    /**
     * glBindBufferRange(target, index, buffer, offset, size);
     */
    export function bindBufferRange(
        target: GLenum, index: GLuint, buffer: GLuint, offset: GLintptr, size: GLsizeiptr): void;

    /**
     * switch(target) {
     *   case GL_TRANSFORM_FEEDBACK_BUFFER_BINDING: // WebGLBuffer
     *   case GL_UNIFORM_BUFFER_BINDING: // WebGLBuffer
     *   {
     *     GLint data;
     *     glGetIntegeri_v(target, index, &data);
     *     return_value = data;
     *     break;
     *   }
     *   case GL_TRANSFORM_FEEDBACK_BUFFER_SIZE: // GLsizeiptr
     *   case GL_UNIFORM_BUFFER_SIZE: // GLsizeiptr
     *   case GL_TRANSFORM_FEEDBACK_BUFFER_START: // GLintptr
     *   case GL_UNIFORM_BUFFER_START: // GLintptr
     *   {
     *     GLint64 data;
     *     glGetInteger64i_v(target, index, &data);
     *     return_value = data;
     *     break;
     *   }
     *   default:
     *     ThrowTypeError(args.GetIsolate(), "Unknown target in getIndexedParameter"); return;
     * }
     */
    export function getIndexedParameter(target: GLenum, index: GLuint): i64;

    /**
     * return_value.reserve(uniformNames.size());
     * return_value.resize(uniformNames.size());
     * glGetUniformIndices(program, uniformNames.size(), uniformNames.data(), return_value.data());
     */
    export function getUniformIndices(program: GLuint, uniformNames: cstring[]): GLuint[];

    /**
     * return_value.reserve(uniformIndices.size());
     * return_value.resize(uniformIndices.size());
     * glGetActiveUniformsiv(program, uniformIndices.size(), uniformIndices.data(), pname, return_value.data());
     */
    export function getActiveUniforms(program: GLuint, uniformIndices: GLuint[], pname: GLenum): GLint[];

    /**
     * return_value = glGetUniformBlockIndex(program, uniformBlockName);
     */
    export function getUniformBlockIndex(program: GLuint, uniformBlockName: cstring): GLuint;

    /**
     * glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, &return_value);
     */
    export function getActiveUniformBlockParameter(program: GLuint, uniformBlockIndex: GLuint, pname: GLenum): GLint;

    /**
     * char name[256];
     * GLsizei length;
     * glGetActiveUniformBlockName(program, uniformBlockIndex, 256, &length, name);
     * return_value = name;
     */
    export function getActiveUniformBlockName(program: GLuint, uniformBlockIndex: GLuint): cstring;
    /**
     * glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding);
     */
    export function uniformBlockBinding(program: GLuint, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;

    /**
     * glGenVertexArrays(1, &return_value);
     */
    export function createVertexArray(): GLuint;

    /**
     * glDeleteVertexArrays(1, &vertexArray);
     */
    export function deleteVertexArray(vertexArray: GLuint): void;

    /**
     * return_value = glIsVertexArray(vertexArray);
     */
    export function isVertexArray(vertexArray: GLuint): boolean;

    /**
     * glBindVertexArray(vertexArray);
     */
    export function bindVertexArray(vertexArray: GLuint): void;

    ///////////////////////////////////////////////////////////////////////////////
    // WebGL 1.0 Constants
    ///////////////////////////////////////////////////////////////////////////////

    /**
     * GL_DEPTH_BUFFER_BIT
     */
    export const DEPTH_BUFFER_BIT: i32;
    /**
     * GL_STENCIL_BUFFER_BIT
     */
    export const STENCIL_BUFFER_BIT: i32;
    /**
     * GL_COLOR_BUFFER_BIT
     */
    export const COLOR_BUFFER_BIT: i32;
    /**
     * GL_POINTS
     */
    export const POINTS: i32;
    /**
     * GL_LINES
     */
    export const LINES: i32;
    /**
     * GL_LINE_LOOP
     */
    export const LINE_LOOP: i32;
    /**
     * GL_LINE_STRIP
     */
    export const LINE_STRIP: i32;
    /**
     * GL_TRIANGLES
     */
    export const TRIANGLES: i32;
    /**
     * GL_TRIANGLE_STRIP
     */
    export const TRIANGLE_STRIP: i32;
    /**
     * GL_TRIANGLE_FAN
     */
    export const TRIANGLE_FAN: i32;
    /**
     * GL_ZERO
     */
    export const ZERO: i32;
    /**
     * GL_ONE
     */
    export const ONE: i32;
    /**
     * GL_SRC_COLOR
     */
    export const SRC_COLOR: i32;
    /**
     * GL_ONE_MINUS_SRC_COLOR
     */
    export const ONE_MINUS_SRC_COLOR: i32;
    /**
     * GL_SRC_ALPHA
     */
    export const SRC_ALPHA: i32;
    /**
     * GL_ONE_MINUS_SRC_ALPHA
     */
    export const ONE_MINUS_SRC_ALPHA: i32;
    /**
     * GL_DST_ALPHA
     */
    export const DST_ALPHA: i32;
    /**
     * GL_ONE_MINUS_DST_ALPHA
     */
    export const ONE_MINUS_DST_ALPHA: i32;
    /**
     * GL_DST_COLOR
     */
    export const DST_COLOR: i32;
    /**
     * GL_ONE_MINUS_DST_COLOR
     */
    export const ONE_MINUS_DST_COLOR: i32;
    /**
     * GL_SRC_ALPHA_SATURATE
     */
    export const SRC_ALPHA_SATURATE: i32;
    /**
     * GL_FUNC_ADD
     */
    export const FUNC_ADD: i32;
    /**
     * GL_BLEND_EQUATION
     */
    export const BLEND_EQUATION: i32;
    /**
     * GL_BLEND_EQUATION_RGB
     */
    export const BLEND_EQUATION_RGB: i32;
    /**
     * GL_BLEND_EQUATION_ALPHA
     */
    export const BLEND_EQUATION_ALPHA: i32;
    /**
     * GL_FUNC_SUBTRACT
     */
    export const FUNC_SUBTRACT: i32;
    /**
     * GL_FUNC_REVERSE_SUBTRACT
     */
    export const FUNC_REVERSE_SUBTRACT: i32;
    /**
     * GL_BLEND_DST_RGB
     */
    export const BLEND_DST_RGB: i32;
    /**
     * GL_BLEND_SRC_RGB
     */
    export const BLEND_SRC_RGB: i32;
    /**
     * GL_BLEND_DST_ALPHA
     */
    export const BLEND_DST_ALPHA: i32;
    /**
     * GL_BLEND_SRC_ALPHA
     */
    export const BLEND_SRC_ALPHA: i32;
    /**
     * GL_CONSTANT_COLOR
     */
    export const CONSTANT_COLOR: i32;
    /**
     * GL_ONE_MINUS_CONSTANT_COLOR
     */
    export const ONE_MINUS_CONSTANT_COLOR: i32;
    /**
     * GL_CONSTANT_ALPHA
     */
    export const CONSTANT_ALPHA: i32;
    /**
     * GL_ONE_MINUS_CONSTANT_ALPHA
     */
    export const ONE_MINUS_CONSTANT_ALPHA: i32;
    /**
     * GL_BLEND_COLOR
     */
    export const BLEND_COLOR: i32;
    /**
     * GL_ARRAY_BUFFER
     */
    export const ARRAY_BUFFER: i32;
    /**
     * GL_ELEMENT_ARRAY_BUFFER
     */
    export const ELEMENT_ARRAY_BUFFER: i32;
    /**
     * GL_ARRAY_BUFFER_BINDING
     */
    export const ARRAY_BUFFER_BINDING: i32;
    /**
     * GL_ELEMENT_ARRAY_BUFFER_BINDING
     */
    export const ELEMENT_ARRAY_BUFFER_BINDING: i32;
    /**
     * GL_STREAM_DRAW
     */
    export const STREAM_DRAW: i32;
    /**
     * GL_STATIC_DRAW
     */
    export const STATIC_DRAW: i32;
    /**
     * GL_DYNAMIC_DRAW
     */
    export const DYNAMIC_DRAW: i32;
    /**
     * GL_BUFFER_SIZE
     */
    export const BUFFER_SIZE: i32;
    /**
     * GL_BUFFER_USAGE
     */
    export const BUFFER_USAGE: i32;
    /**
     * GL_CURRENT_VERTEX_ATTRIB
     */
    export const CURRENT_VERTEX_ATTRIB: i32;
    /**
     * GL_FRONT
     */
    export const FRONT: i32;
    /**
     * GL_BACK
     */
    export const BACK: i32;
    /**
     * GL_FRONT_AND_BACK
     */
    export const FRONT_AND_BACK: i32;
    /**
     * GL_TEXTURE_2D
     */
    export const TEXTURE_2D: i32;
    /**
     * GL_CULL_FACE
     */
    export const CULL_FACE: i32;
    /**
     * GL_BLEND
     */
    export const BLEND: i32;
    /**
     * GL_DITHER
     */
    export const DITHER: i32;
    /**
     * GL_STENCIL_TEST
     */
    export const STENCIL_TEST: i32;
    /**
     * GL_DEPTH_TEST
     */
    export const DEPTH_TEST: i32;
    /**
     * GL_SCISSOR_TEST
     */
    export const SCISSOR_TEST: i32;
    /**
     * GL_POLYGON_OFFSET_FILL
     */
    export const POLYGON_OFFSET_FILL: i32;
    /**
     * GL_SAMPLE_ALPHA_TO_COVERAGE
     */
    export const SAMPLE_ALPHA_TO_COVERAGE: i32;
    /**
     * GL_SAMPLE_COVERAGE
     */
    export const SAMPLE_COVERAGE: i32;
    /**
     * GL_NO_ERROR
     */
    export const NO_ERROR: i32;
    /**
     * GL_INVALID_ENUM
     */
    export const INVALID_ENUM: i32;
    /**
     * GL_INVALID_VALUE
     */
    export const INVALID_VALUE: i32;
    /**
     * GL_INVALID_OPERATION
     */
    export const INVALID_OPERATION: i32;
    /**
     * GL_OUT_OF_MEMORY
     */
    export const OUT_OF_MEMORY: i32;
    /**
     * GL_CW
     */
    export const CW: i32;
    /**
     * GL_CCW
     */
    export const CCW: i32;
    /**
     * GL_LINE_WIDTH
     */
    export const LINE_WIDTH: i32;
    /**
     * GL_ALIASED_POINT_SIZE_RANGE
     */
    export const ALIASED_POINT_SIZE_RANGE: i32;
    /**
     * GL_ALIASED_LINE_WIDTH_RANGE
     */
    export const ALIASED_LINE_WIDTH_RANGE: i32;
    /**
     * GL_CULL_FACE_MODE
     */
    export const CULL_FACE_MODE: i32;
    /**
     * GL_FRONT_FACE
     */
    export const FRONT_FACE: i32;
    /**
     * GL_DEPTH_RANGE
     */
    export const DEPTH_RANGE: i32;
    /**
     * GL_DEPTH_WRITEMASK
     */
    export const DEPTH_WRITEMASK: i32;
    /**
     * GL_DEPTH_CLEAR_VALUE
     */
    export const DEPTH_CLEAR_VALUE: i32;
    /**
     * GL_DEPTH_FUNC
     */
    export const DEPTH_FUNC: i32;
    /**
     * GL_STENCIL_CLEAR_VALUE
     */
    export const STENCIL_CLEAR_VALUE: i32;
    /**
     * GL_STENCIL_FUNC
     */
    export const STENCIL_FUNC: i32;
    /**
     * GL_STENCIL_FAIL
     */
    export const STENCIL_FAIL: i32;
    /**
     * GL_STENCIL_PASS_DEPTH_FAIL
     */
    export const STENCIL_PASS_DEPTH_FAIL: i32;
    /**
     * GL_STENCIL_PASS_DEPTH_PASS
     */
    export const STENCIL_PASS_DEPTH_PASS: i32;
    /**
     * GL_STENCIL_REF
     */
    export const STENCIL_REF: i32;
    /**
     * GL_STENCIL_VALUE_MASK
     */
    export const STENCIL_VALUE_MASK: i32;
    /**
     * GL_STENCIL_WRITEMASK
     */
    export const STENCIL_WRITEMASK: i32;
    /**
     * GL_STENCIL_BACK_FUNC
     */
    export const STENCIL_BACK_FUNC: i32;
    /**
     * GL_STENCIL_BACK_FAIL
     */
    export const STENCIL_BACK_FAIL: i32;
    /**
     * GL_STENCIL_BACK_PASS_DEPTH_FAIL
     */
    export const STENCIL_BACK_PASS_DEPTH_FAIL: i32;
    /**
     * GL_STENCIL_BACK_PASS_DEPTH_PASS
     */
    export const STENCIL_BACK_PASS_DEPTH_PASS: i32;
    /**
     * GL_STENCIL_BACK_REF
     */
    export const STENCIL_BACK_REF: i32;
    /**
     * GL_STENCIL_BACK_VALUE_MASK
     */
    export const STENCIL_BACK_VALUE_MASK: i32;
    /**
     * GL_STENCIL_BACK_WRITEMASK
     */
    export const STENCIL_BACK_WRITEMASK: i32;
    /**
     * GL_VIEWPORT
     */
    export const VIEWPORT: i32;
    /**
     * GL_SCISSOR_BOX
     */
    export const SCISSOR_BOX: i32;
    /**
     * GL_COLOR_CLEAR_VALUE
     */
    export const COLOR_CLEAR_VALUE: i32;
    /**
     * GL_COLOR_WRITEMASK
     */
    export const COLOR_WRITEMASK: i32;
    /**
     * GL_UNPACK_ALIGNMENT
     */
    export const UNPACK_ALIGNMENT: i32;
    /**
     * GL_PACK_ALIGNMENT
     */
    export const PACK_ALIGNMENT: i32;
    /**
     * GL_MAX_TEXTURE_SIZE
     */
    export const MAX_TEXTURE_SIZE: i32;
    /**
     * GL_MAX_VIEWPORT_DIMS
     */
    export const MAX_VIEWPORT_DIMS: i32;
    /**
     * GL_SUBPIXEL_BITS
     */
    export const SUBPIXEL_BITS: i32;
    /**
     * GL_RED_BITS
     */
    export const RED_BITS: i32;
    /**
     * GL_GREEN_BITS
     */
    export const GREEN_BITS: i32;
    /**
     * GL_BLUE_BITS
     */
    export const BLUE_BITS: i32;
    /**
     * GL_ALPHA_BITS
     */
    export const ALPHA_BITS: i32;
    /**
     * GL_DEPTH_BITS
     */
    export const DEPTH_BITS: i32;
    /**
     * GL_STENCIL_BITS
     */
    export const STENCIL_BITS: i32;
    /**
     * GL_POLYGON_OFFSET_UNITS
     */
    export const POLYGON_OFFSET_UNITS: i32;
    /**
     * GL_POLYGON_OFFSET_FACTOR
     */
    export const POLYGON_OFFSET_FACTOR: i32;
    /**
     * GL_TEXTURE_BINDING_2D
     */
    export const TEXTURE_BINDING_2D: i32;
    /**
     * GL_SAMPLE_BUFFERS
     */
    export const SAMPLE_BUFFERS: i32;
    /**
     * GL_SAMPLES
     */
    export const SAMPLES: i32;
    /**
     * GL_SAMPLE_COVERAGE_VALUE
     */
    export const SAMPLE_COVERAGE_VALUE: i32;
    /**
     * GL_SAMPLE_COVERAGE_INVERT
     */
    export const SAMPLE_COVERAGE_INVERT: i32;
    /**
     * GL_COMPRESSED_TEXTURE_FORMATS
     */
    export const COMPRESSED_TEXTURE_FORMATS: i32;
    /**
     * GL_DONT_CARE
     */
    export const DONT_CARE: i32;
    /**
     * GL_FASTEST
     */
    export const FASTEST: i32;
    /**
     * GL_NICEST
     */
    export const NICEST: i32;
    /**
     * GL_GENERATE_MIPMAP_HINT
     */
    export const GENERATE_MIPMAP_HINT: i32;
    /**
     * GL_BYTE
     */
    export const BYTE: i32;
    /**
     * GL_UNSIGNED_BYTE
     */
    export const UNSIGNED_BYTE: i32;
    /**
     * GL_SHORT
     */
    export const SHORT: i32;
    /**
     * GL_UNSIGNED_SHORT
     */
    export const UNSIGNED_SHORT: i32;
    /**
     * GL_INT
     */
    export const INT: i32;
    /**
     * GL_UNSIGNED_INT
     */
    export const UNSIGNED_INT: i32;
    /**
     * GL_FLOAT
     */
    export const FLOAT: i32;
    /**
     * GL_DEPTH_COMPONENT
     */
    export const DEPTH_COMPONENT: i32;
    /**
     * GL_ALPHA
     */
    export const ALPHA: i32;
    /**
     * GL_RGB
     */
    export const RGB: i32;
    /**
     * GL_RGBA
     */
    export const RGBA: i32;
    /**
     * GL_LUMINANCE
     */
    export const LUMINANCE: i32;
    /**
     * GL_LUMINANCE_ALPHA
     */
    export const LUMINANCE_ALPHA: i32;
    /**
     * GL_UNSIGNED_SHORT_4_4_4_4
     */
    export const UNSIGNED_SHORT_4_4_4_4: i32;
    /**
     * GL_UNSIGNED_SHORT_5_5_5_1
     */
    export const UNSIGNED_SHORT_5_5_5_1: i32;
    /**
     * GL_UNSIGNED_SHORT_5_6_5
     */
    export const UNSIGNED_SHORT_5_6_5: i32;
    /**
     * GL_FRAGMENT_SHADER
     */
    export const FRAGMENT_SHADER: i32;
    /**
     * GL_VERTEX_SHADER
     */
    export const VERTEX_SHADER: i32;
    /**
     * GL_MAX_VERTEX_ATTRIBS
     */
    export const MAX_VERTEX_ATTRIBS: i32;
    /**
     * GL_MAX_VERTEX_UNIFORM_VECTORS
     */
    export const MAX_VERTEX_UNIFORM_VECTORS: i32;
    /**
     * GL_MAX_VARYING_VECTORS
     */
    export const MAX_VARYING_VECTORS: i32;
    /**
     * GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS
     */
    export const MAX_COMBINED_TEXTURE_IMAGE_UNITS: i32;
    /**
     * GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS
     */
    export const MAX_VERTEX_TEXTURE_IMAGE_UNITS: i32;
    /**
     * GL_MAX_TEXTURE_IMAGE_UNITS
     */
    export const MAX_TEXTURE_IMAGE_UNITS: i32;
    /**
     * GL_MAX_FRAGMENT_UNIFORM_VECTORS
     */
    export const MAX_FRAGMENT_UNIFORM_VECTORS: i32;
    /**
     * GL_SHADER_TYPE
     */
    export const SHADER_TYPE: i32;
    /**
     * GL_DELETE_STATUS
     */
    export const DELETE_STATUS: i32;
    /**
     * GL_LINK_STATUS
     */
    export const LINK_STATUS: i32;
    /**
     * GL_VALIDATE_STATUS
     */
    export const VALIDATE_STATUS: i32;
    /**
     * GL_ATTACHED_SHADERS
     */
    export const ATTACHED_SHADERS: i32;
    /**
     * GL_ACTIVE_UNIFORMS
     */
    export const ACTIVE_UNIFORMS: i32;
    /**
     * GL_ACTIVE_ATTRIBUTES
     */
    export const ACTIVE_ATTRIBUTES: i32;
    /**
     * GL_SHADING_LANGUAGE_VERSION
     */
    export const SHADING_LANGUAGE_VERSION: i32;
    /**
     * GL_CURRENT_PROGRAM
     */
    export const CURRENT_PROGRAM: i32;
    /**
     * GL_NEVER
     */
    export const NEVER: i32;
    /**
     * GL_LESS
     */
    export const LESS: i32;
    /**
     * GL_EQUAL
     */
    export const EQUAL: i32;
    /**
     * GL_LEQUAL
     */
    export const LEQUAL: i32;
    /**
     * GL_GREATER
     */
    export const GREATER: i32;
    /**
     * GL_NOTEQUAL
     */
    export const NOTEQUAL: i32;
    /**
     * GL_GEQUAL
     */
    export const GEQUAL: i32;
    /**
     * GL_ALWAYS
     */
    export const ALWAYS: i32;
    /**
     * GL_KEEP
     */
    export const KEEP: i32;
    /**
     * GL_REPLACE
     */
    export const REPLACE: i32;
    /**
     * GL_INCR
     */
    export const INCR: i32;
    /**
     * GL_DECR
     */
    export const DECR: i32;
    /**
     * GL_INVERT
     */
    export const INVERT: i32;
    /**
     * GL_INCR_WRAP
     */
    export const INCR_WRAP: i32;
    /**
     * GL_DECR_WRAP
     */
    export const DECR_WRAP: i32;
    /**
     * GL_VENDOR
     */
    export const VENDOR: i32;
    /**
     * GL_RENDERER
     */
    export const RENDERER: i32;
    /**
     * GL_VERSION
     */
    export const VERSION: i32;
    /**
     * GL_NEAREST
     */
    export const NEAREST: i32;
    /**
     * GL_LINEAR
     */
    export const LINEAR: i32;
    /**
     * GL_NEAREST_MIPMAP_NEAREST
     */
    export const NEAREST_MIPMAP_NEAREST: i32;
    /**
     * GL_LINEAR_MIPMAP_NEAREST
     */
    export const LINEAR_MIPMAP_NEAREST: i32;
    /**
     * GL_NEAREST_MIPMAP_LINEAR
     */
    export const NEAREST_MIPMAP_LINEAR: i32;
    /**
     * GL_LINEAR_MIPMAP_LINEAR
     */
    export const LINEAR_MIPMAP_LINEAR: i32;
    /**
     * GL_TEXTURE_MAG_FILTER
     */
    export const TEXTURE_MAG_FILTER: i32;
    /**
     * GL_TEXTURE_MIN_FILTER
     */
    export const TEXTURE_MIN_FILTER: i32;
    /**
     * GL_TEXTURE_WRAP_S
     */
    export const TEXTURE_WRAP_S: i32;
    /**
     * GL_TEXTURE_WRAP_T
     */
    export const TEXTURE_WRAP_T: i32;
    /**
     * GL_TEXTURE
     */
    export const TEXTURE: i32;
    /**
     * GL_TEXTURE_CUBE_MAP
     */
    export const TEXTURE_CUBE_MAP: i32;
    /**
     * GL_TEXTURE_BINDING_CUBE_MAP
     */
    export const TEXTURE_BINDING_CUBE_MAP: i32;
    /**
     * GL_TEXTURE_CUBE_MAP_POSITIVE_X
     */
    export const TEXTURE_CUBE_MAP_POSITIVE_X: i32;
    /**
     * GL_TEXTURE_CUBE_MAP_NEGATIVE_X
     */
    export const TEXTURE_CUBE_MAP_NEGATIVE_X: i32;
    /**
     * GL_TEXTURE_CUBE_MAP_POSITIVE_Y
     */
    export const TEXTURE_CUBE_MAP_POSITIVE_Y: i32;
    /**
     * GL_TEXTURE_CUBE_MAP_NEGATIVE_Y
     */
    export const TEXTURE_CUBE_MAP_NEGATIVE_Y: i32;
    /**
     * GL_TEXTURE_CUBE_MAP_POSITIVE_Z
     */
    export const TEXTURE_CUBE_MAP_POSITIVE_Z: i32;
    /**
     * GL_TEXTURE_CUBE_MAP_NEGATIVE_Z
     */
    export const TEXTURE_CUBE_MAP_NEGATIVE_Z: i32;
    /**
     * GL_MAX_CUBE_MAP_TEXTURE_SIZE
     */
    export const MAX_CUBE_MAP_TEXTURE_SIZE: i32;
    /**
     * GL_TEXTURE0
     */
    export const TEXTURE0: i32;
    /**
     * GL_TEXTURE1
     */
    export const TEXTURE1: i32;
    /**
     * GL_TEXTURE2
     */
    export const TEXTURE2: i32;
    /**
     * GL_TEXTURE3
     */
    export const TEXTURE3: i32;
    /**
     * GL_TEXTURE4
     */
    export const TEXTURE4: i32;
    /**
     * GL_TEXTURE5
     */
    export const TEXTURE5: i32;
    /**
     * GL_TEXTURE6
     */
    export const TEXTURE6: i32;
    /**
     * GL_TEXTURE7
     */
    export const TEXTURE7: i32;
    /**
     * GL_TEXTURE8
     */
    export const TEXTURE8: i32;
    /**
     * GL_TEXTURE9
     */
    export const TEXTURE9: i32;
    /**
     * GL_TEXTURE10
     */
    export const TEXTURE10: i32;
    /**
     * GL_TEXTURE11
     */
    export const TEXTURE11: i32;
    /**
     * GL_TEXTURE12
     */
    export const TEXTURE12: i32;
    /**
     * GL_TEXTURE13
     */
    export const TEXTURE13: i32;
    /**
     * GL_TEXTURE14
     */
    export const TEXTURE14: i32;
    /**
     * GL_TEXTURE15
     */
    export const TEXTURE15: i32;
    /**
     * GL_TEXTURE16
     */
    export const TEXTURE16: i32;
    /**
     * GL_TEXTURE17
     */
    export const TEXTURE17: i32;
    /**
     * GL_TEXTURE18
     */
    export const TEXTURE18: i32;
    /**
     * GL_TEXTURE19
     */
    export const TEXTURE19: i32;
    /**
     * GL_TEXTURE20
     */
    export const TEXTURE20: i32;
    /**
     * GL_TEXTURE21
     */
    export const TEXTURE21: i32;
    /**
     * GL_TEXTURE22
     */
    export const TEXTURE22: i32;
    /**
     * GL_TEXTURE23
     */
    export const TEXTURE23: i32;
    /**
     * GL_TEXTURE24
     */
    export const TEXTURE24: i32;
    /**
     * GL_TEXTURE25
     */
    export const TEXTURE25: i32;
    /**
     * GL_TEXTURE26
     */
    export const TEXTURE26: i32;
    /**
     * GL_TEXTURE27
     */
    export const TEXTURE27: i32;
    /**
     * GL_TEXTURE28
     */
    export const TEXTURE28: i32;
    /**
     * GL_TEXTURE29
     */
    export const TEXTURE29: i32;
    /**
     * GL_TEXTURE30
     */
    export const TEXTURE30: i32;
    /**
     * GL_TEXTURE31
     */
    export const TEXTURE31: i32;
    /**
     * GL_ACTIVE_TEXTURE
     */
    export const ACTIVE_TEXTURE: i32;
    /**
     * GL_REPEAT
     */
    export const REPEAT: i32;
    /**
     * GL_CLAMP_TO_EDGE
     */
    export const CLAMP_TO_EDGE: i32;
    /**
     * GL_MIRRORED_REPEAT
     */
    export const MIRRORED_REPEAT: i32;
    /**
     * GL_FLOAT_VEC2
     */
    export const FLOAT_VEC2: i32;
    /**
     * GL_FLOAT_VEC3
     */
    export const FLOAT_VEC3: i32;
    /**
     * GL_FLOAT_VEC4
     */
    export const FLOAT_VEC4: i32;
    /**
     * GL_INT_VEC2
     */
    export const INT_VEC2: i32;
    /**
     * GL_INT_VEC3
     */
    export const INT_VEC3: i32;
    /**
     * GL_INT_VEC4
     */
    export const INT_VEC4: i32;
    /**
     * GL_BOOL
     */
    export const BOOL: i32;
    /**
     * GL_BOOL_VEC2
     */
    export const BOOL_VEC2: i32;
    /**
     * GL_BOOL_VEC3
     */
    export const BOOL_VEC3: i32;
    /**
     * GL_BOOL_VEC4
     */
    export const BOOL_VEC4: i32;
    /**
     * GL_FLOAT_MAT2
     */
    export const FLOAT_MAT2: i32;
    /**
     * GL_FLOAT_MAT3
     */
    export const FLOAT_MAT3: i32;
    /**
     * GL_FLOAT_MAT4
     */
    export const FLOAT_MAT4: i32;
    /**
     * GL_SAMPLER_2D
     */
    export const SAMPLER_2D: i32;
    /**
     * GL_SAMPLER_CUBE
     */
    export const SAMPLER_CUBE: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_ENABLED
     */
    export const VERTEX_ATTRIB_ARRAY_ENABLED: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_SIZE
     */
    export const VERTEX_ATTRIB_ARRAY_SIZE: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_STRIDE
     */
    export const VERTEX_ATTRIB_ARRAY_STRIDE: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_TYPE
     */
    export const VERTEX_ATTRIB_ARRAY_TYPE: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_NORMALIZED
     */
    export const VERTEX_ATTRIB_ARRAY_NORMALIZED: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_POINTER
     */
    export const VERTEX_ATTRIB_ARRAY_POINTER: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING
     */
    export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: i32;
    /**
     * GL_IMPLEMENTATION_COLOR_READ_TYPE
     */
    export const IMPLEMENTATION_COLOR_READ_TYPE: i32;
    /**
     * GL_IMPLEMENTATION_COLOR_READ_FORMAT
     */
    export const IMPLEMENTATION_COLOR_READ_FORMAT: i32;
    /**
     * GL_COMPILE_STATUS
     */
    export const COMPILE_STATUS: i32;
    /**
     * GL_LOW_FLOAT
     */
    export const LOW_FLOAT: i32;
    /**
     * GL_MEDIUM_FLOAT
     */
    export const MEDIUM_FLOAT: i32;
    /**
     * GL_HIGH_FLOAT
     */
    export const HIGH_FLOAT: i32;
    /**
     * GL_LOW_INT
     */
    export const LOW_INT: i32;
    /**
     * GL_MEDIUM_INT
     */
    export const MEDIUM_INT: i32;
    /**
     * GL_HIGH_INT
     */
    export const HIGH_INT: i32;
    /**
     * GL_FRAMEBUFFER
     */
    export const FRAMEBUFFER: i32;
    /**
     * GL_RENDERBUFFER
     */
    export const RENDERBUFFER: i32;
    /**
     * GL_RGBA4
     */
    export const RGBA4: i32;
    /**
     * GL_RGB5_A1
     */
    export const RGB5_A1: i32;
    /**
     * GL_RGB565
     */
    export const RGB565: i32;
    /**
     * GL_DEPTH_COMPONENT16
     */
    export const DEPTH_COMPONENT16: i32;
    /**
     * GL_STENCIL_INDEX8
     */
    export const STENCIL_INDEX8: i32;
    /**
     * GL_DEPTH_STENCIL
     */
    export const DEPTH_STENCIL: i32;
    /**
     * GL_RENDERBUFFER_WIDTH
     */
    export const RENDERBUFFER_WIDTH: i32;
    /**
     * GL_RENDERBUFFER_HEIGHT
     */
    export const RENDERBUFFER_HEIGHT: i32;
    /**
     * GL_RENDERBUFFER_INTERNAL_FORMAT
     */
    export const RENDERBUFFER_INTERNAL_FORMAT: i32;
    /**
     * GL_RENDERBUFFER_RED_SIZE
     */
    export const RENDERBUFFER_RED_SIZE: i32;
    /**
     * GL_RENDERBUFFER_GREEN_SIZE
     */
    export const RENDERBUFFER_GREEN_SIZE: i32;
    /**
     * GL_RENDERBUFFER_BLUE_SIZE
     */
    export const RENDERBUFFER_BLUE_SIZE: i32;
    /**
     * GL_RENDERBUFFER_ALPHA_SIZE
     */
    export const RENDERBUFFER_ALPHA_SIZE: i32;
    /**
     * GL_RENDERBUFFER_DEPTH_SIZE
     */
    export const RENDERBUFFER_DEPTH_SIZE: i32;
    /**
     * GL_RENDERBUFFER_STENCIL_SIZE
     */
    export const RENDERBUFFER_STENCIL_SIZE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE
     */
    export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME
     */
    export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL
     */
    export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE
     */
    export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: i32;
    /**
     * GL_COLOR_ATTACHMENT0
     */
    export const COLOR_ATTACHMENT0: i32;
    /**
     * GL_DEPTH_ATTACHMENT
     */
    export const DEPTH_ATTACHMENT: i32;
    /**
     * GL_STENCIL_ATTACHMENT
     */
    export const STENCIL_ATTACHMENT: i32;
    /**
     * GL_DEPTH_STENCIL_ATTACHMENT
     */
    export const DEPTH_STENCIL_ATTACHMENT: i32;
    /**
     * GL_NONE
     */
    export const NONE: i32;
    /**
     * GL_FRAMEBUFFER_COMPLETE
     */
    export const FRAMEBUFFER_COMPLETE: i32;
    /**
     * GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT
     */
    export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT: i32;
    /**
     * GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT
     */
    export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: i32;
    /**
     * GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS
     */
    export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS: i32;
    /**
     * GL_FRAMEBUFFER_UNSUPPORTED
     */
    export const FRAMEBUFFER_UNSUPPORTED: i32;
    /**
     * GL_FRAMEBUFFER_BINDING
     */
    export const FRAMEBUFFER_BINDING: i32;
    /**
     * GL_RENDERBUFFER_BINDING
     */
    export const RENDERBUFFER_BINDING: i32;
    /**
     * GL_MAX_RENDERBUFFER_SIZE
     */
    export const MAX_RENDERBUFFER_SIZE: i32;
    /**
     * GL_INVALID_FRAMEBUFFER_OPERATION
     */
    export const INVALID_FRAMEBUFFER_OPERATION: i32;
    /**
     * 0x9240
     */
    export const UNPACK_FLIP_Y_WEBGL: i32;
    /**
     * 0x9241
     */
    export const UNPACK_PREMULTIPLY_ALPHA_WEBGL: i32;
    /**
     * 0x9242
     */
    export const CONTEXT_LOST_WEBGL: i32;
    /**
     * 0x9243
     */
    export const UNPACK_COLORSPACE_CONVERSION_WEBGL: i32;
    /**
     * 0x9244
     */
    export const BROWSER_DEFAULT_WEBGL: i32;

    ///////////////////////////////////////////////////////////////////////////////
    // WebGL 2.0 Constants
    ///////////////////////////////////////////////////////////////////////////////

    /**
     * GL_READ_BUFFER
     */
    export const READ_BUFFER: i32;
    /**
     * GL_UNPACK_ROW_LENGTH
     */
    export const UNPACK_ROW_LENGTH: i32;
    /**
     * GL_UNPACK_SKIP_ROWS
     */
    export const UNPACK_SKIP_ROWS: i32;
    /**
     * GL_UNPACK_SKIP_PIXELS
     */
    export const UNPACK_SKIP_PIXELS: i32;
    /**
     * GL_PACK_ROW_LENGTH
     */
    export const PACK_ROW_LENGTH: i32;
    /**
     * GL_PACK_SKIP_ROWS
     */
    export const PACK_SKIP_ROWS: i32;
    /**
     * GL_PACK_SKIP_PIXELS
     */
    export const PACK_SKIP_PIXELS: i32;
    /**
     * GL_COLOR
     */
    export const COLOR: i32;
    /**
     * GL_DEPTH
     */
    export const DEPTH: i32;
    /**
     * GL_STENCIL
     */
    export const STENCIL: i32;
    /**
     * GL_RED
     */
    export const RED: i32;
    /**
     * GL_RGB8
     */
    export const RGB8: i32;
    /**
     * GL_RGBA8
     */
    export const RGBA8: i32;
    /**
     * GL_RGB10_A2
     */
    export const RGB10_A2: i32;
    /**
     * GL_TEXTURE_BINDING_3D
     */
    export const TEXTURE_BINDING_3D: i32;
    /**
     * GL_UNPACK_SKIP_IMAGES
     */
    export const UNPACK_SKIP_IMAGES: i32;
    /**
     * GL_UNPACK_IMAGE_HEIGHT
     */
    export const UNPACK_IMAGE_HEIGHT: i32;
    /**
     * GL_TEXTURE_3D
     */
    export const TEXTURE_3D: i32;
    /**
     * GL_TEXTURE_WRAP_R
     */
    export const TEXTURE_WRAP_R: i32;
    /**
     * GL_MAX_3D_TEXTURE_SIZE
     */
    export const MAX_3D_TEXTURE_SIZE: i32;
    /**
     * GL_UNSIGNED_INT_2_10_10_10_REV
     */
    export const UNSIGNED_INT_2_10_10_10_REV: i32;
    /**
     * GL_MAX_ELEMENTS_VERTICES
     */
    export const MAX_ELEMENTS_VERTICES: i32;
    /**
     * GL_MAX_ELEMENTS_INDICES
     */
    export const MAX_ELEMENTS_INDICES: i32;
    /**
     * GL_TEXTURE_MIN_LOD
     */
    export const TEXTURE_MIN_LOD: i32;
    /**
     * GL_TEXTURE_MAX_LOD
     */
    export const TEXTURE_MAX_LOD: i32;
    /**
     * GL_TEXTURE_BASE_LEVEL
     */
    export const TEXTURE_BASE_LEVEL: i32;
    /**
     * GL_TEXTURE_MAX_LEVEL
     */
    export const TEXTURE_MAX_LEVEL: i32;
    /**
     * GL_MIN
     */
    export const MIN: i32;
    /**
     * GL_MAX
     */
    export const MAX: i32;
    /**
     * GL_DEPTH_COMPONENT24
     */
    export const DEPTH_COMPONENT24: i32;
    /**
     * GL_MAX_TEXTURE_LOD_BIAS
     */
    export const MAX_TEXTURE_LOD_BIAS: i32;
    /**
     * GL_TEXTURE_COMPARE_MODE
     */
    export const TEXTURE_COMPARE_MODE: i32;
    /**
     * GL_TEXTURE_COMPARE_FUNC
     */
    export const TEXTURE_COMPARE_FUNC: i32;
    /**
     * GL_CURRENT_QUERY
     */
    export const CURRENT_QUERY: i32;
    /**
     * GL_QUERY_RESULT
     */
    export const QUERY_RESULT: i32;
    /**
     * GL_QUERY_RESULT_AVAILABLE
     */
    export const QUERY_RESULT_AVAILABLE: i32;
    /**
     * GL_STREAM_READ
     */
    export const STREAM_READ: i32;
    /**
     * GL_STREAM_COPY
     */
    export const STREAM_COPY: i32;
    /**
     * GL_STATIC_READ
     */
    export const STATIC_READ: i32;
    /**
     * GL_STATIC_COPY
     */
    export const STATIC_COPY: i32;
    /**
     * GL_DYNAMIC_READ
     */
    export const DYNAMIC_READ: i32;
    /**
     * GL_DYNAMIC_COPY
     */
    export const DYNAMIC_COPY: i32;
    /**
     * GL_MAX_DRAW_BUFFERS
     */
    export const MAX_DRAW_BUFFERS: i32;
    /**
     * GL_DRAW_BUFFER0
     */
    export const DRAW_BUFFER0: i32;
    /**
     * GL_DRAW_BUFFER1
     */
    export const DRAW_BUFFER1: i32;
    /**
     * GL_DRAW_BUFFER2
     */
    export const DRAW_BUFFER2: i32;
    /**
     * GL_DRAW_BUFFER3
     */
    export const DRAW_BUFFER3: i32;
    /**
     * GL_DRAW_BUFFER4
     */
    export const DRAW_BUFFER4: i32;
    /**
     * GL_DRAW_BUFFER5
     */
    export const DRAW_BUFFER5: i32;
    /**
     * GL_DRAW_BUFFER6
     */
    export const DRAW_BUFFER6: i32;
    /**
     * GL_DRAW_BUFFER7
     */
    export const DRAW_BUFFER7: i32;
    /**
     * GL_DRAW_BUFFER8
     */
    export const DRAW_BUFFER8: i32;
    /**
     * GL_DRAW_BUFFER9
     */
    export const DRAW_BUFFER9: i32;
    /**
     * GL_DRAW_BUFFER10
     */
    export const DRAW_BUFFER10: i32;
    /**
     * GL_DRAW_BUFFER11
     */
    export const DRAW_BUFFER11: i32;
    /**
     * GL_DRAW_BUFFER12
     */
    export const DRAW_BUFFER12: i32;
    /**
     * GL_DRAW_BUFFER13
     */
    export const DRAW_BUFFER13: i32;
    /**
     * GL_DRAW_BUFFER14
     */
    export const DRAW_BUFFER14: i32;
    /**
     * GL_DRAW_BUFFER15
     */
    export const DRAW_BUFFER15: i32;
    /**
     * GL_MAX_FRAGMENT_UNIFORM_COMPONENTS
     */
    export const MAX_FRAGMENT_UNIFORM_COMPONENTS: i32;
    /**
     * GL_MAX_VERTEX_UNIFORM_COMPONENTS
     */
    export const MAX_VERTEX_UNIFORM_COMPONENTS: i32;
    /**
     * GL_SAMPLER_3D
     */
    export const SAMPLER_3D: i32;
    /**
     * GL_SAMPLER_2D_SHADOW
     */
    export const SAMPLER_2D_SHADOW: i32;
    /**
     * GL_FRAGMENT_SHADER_DERIVATIVE_HINT
     */
    export const FRAGMENT_SHADER_DERIVATIVE_HINT: i32;
    /**
     * GL_PIXEL_PACK_BUFFER
     */
    export const PIXEL_PACK_BUFFER: i32;
    /**
     * GL_PIXEL_UNPACK_BUFFER
     */
    export const PIXEL_UNPACK_BUFFER: i32;
    /**
     * GL_PIXEL_PACK_BUFFER_BINDING
     */
    export const PIXEL_PACK_BUFFER_BINDING: i32;
    /**
     * GL_PIXEL_UNPACK_BUFFER_BINDING
     */
    export const PIXEL_UNPACK_BUFFER_BINDING: i32;
    /**
     * GL_FLOAT_MAT2x3
     */
    export const FLOAT_MAT2x3: i32;
    /**
     * GL_FLOAT_MAT2x4
     */
    export const FLOAT_MAT2x4: i32;
    /**
     * GL_FLOAT_MAT3x2
     */
    export const FLOAT_MAT3x2: i32;
    /**
     * GL_FLOAT_MAT3x4
     */
    export const FLOAT_MAT3x4: i32;
    /**
     * GL_FLOAT_MAT4x2
     */
    export const FLOAT_MAT4x2: i32;
    /**
     * GL_FLOAT_MAT4x3
     */
    export const FLOAT_MAT4x3: i32;
    /**
     * GL_SRGB
     */
    export const SRGB: i32;
    /**
     * GL_SRGB8
     */
    export const SRGB8: i32;
    /**
     * GL_SRGB8_ALPHA8
     */
    export const SRGB8_ALPHA8: i32;
    /**
     * GL_COMPARE_REF_TO_TEXTURE
     */
    export const COMPARE_REF_TO_TEXTURE: i32;
    /**
     * GL_RGBA32F
     */
    export const RGBA32F: i32;
    /**
     * GL_RGB32F
     */
    export const RGB32F: i32;
    /**
     * GL_RGBA16F
     */
    export const RGBA16F: i32;
    /**
     * GL_RGB16F
     */
    export const RGB16F: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_INTEGER
     */
    export const VERTEX_ATTRIB_ARRAY_INTEGER: i32;
    /**
     * GL_MAX_ARRAY_TEXTURE_LAYERS
     */
    export const MAX_ARRAY_TEXTURE_LAYERS: i32;
    /**
     * GL_MIN_PROGRAM_TEXEL_OFFSET
     */
    export const MIN_PROGRAM_TEXEL_OFFSET: i32;
    /**
     * GL_MAX_PROGRAM_TEXEL_OFFSET
     */
    export const MAX_PROGRAM_TEXEL_OFFSET: i32;
    /**
     * GL_MAX_VARYING_COMPONENTS
     */
    export const MAX_VARYING_COMPONENTS: i32;
    /**
     * GL_TEXTURE_2D_ARRAY
     */
    export const TEXTURE_2D_ARRAY: i32;
    /**
     * GL_TEXTURE_BINDING_2D_ARRAY
     */
    export const TEXTURE_BINDING_2D_ARRAY: i32;
    /**
     * GL_R11F_G11F_B10F
     */
    export const R11F_G11F_B10F: i32;
    /**
     * GL_UNSIGNED_INT_10F_11F_11F_REV
     */
    export const UNSIGNED_INT_10F_11F_11F_REV: i32;
    /**
     * GL_RGB9_E5
     */
    export const RGB9_E5: i32;
    /**
     * GL_UNSIGNED_INT_5_9_9_9_REV
     */
    export const UNSIGNED_INT_5_9_9_9_REV: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_BUFFER_MODE
     */
    export const TRANSFORM_FEEDBACK_BUFFER_MODE: i32;
    /**
     * GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS
     */
    export const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_VARYINGS
     */
    export const TRANSFORM_FEEDBACK_VARYINGS: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_BUFFER_START
     */
    export const TRANSFORM_FEEDBACK_BUFFER_START: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_BUFFER_SIZE
     */
    export const TRANSFORM_FEEDBACK_BUFFER_SIZE: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN
     */
    export const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: i32;
    /**
     * GL_RASTERIZER_DISCARD
     */
    export const RASTERIZER_DISCARD: i32;
    /**
     * GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS
     */
    export const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: i32;
    /**
     * GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS
     */
    export const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: i32;
    /**
     * GL_INTERLEAVED_ATTRIBS
     */
    export const INTERLEAVED_ATTRIBS: i32;
    /**
     * GL_SEPARATE_ATTRIBS
     */
    export const SEPARATE_ATTRIBS: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_BUFFER
     */
    export const TRANSFORM_FEEDBACK_BUFFER: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_BUFFER_BINDING
     */
    export const TRANSFORM_FEEDBACK_BUFFER_BINDING: i32;
    /**
     * GL_RGBA32UI
     */
    export const RGBA32UI: i32;
    /**
     * GL_RGB32UI
     */
    export const RGB32UI: i32;
    /**
     * GL_RGBA16UI
     */
    export const RGBA16UI: i32;
    /**
     * GL_RGB16UI
     */
    export const RGB16UI: i32;
    /**
     * GL_RGBA8UI
     */
    export const RGBA8UI: i32;
    /**
     * GL_RGB8UI
     */
    export const RGB8UI: i32;
    /**
     * GL_RGBA32I
     */
    export const RGBA32I: i32;
    /**
     * GL_RGB32I
     */
    export const RGB32I: i32;
    /**
     * GL_RGBA16I
     */
    export const RGBA16I: i32;
    /**
     * GL_RGB16I
     */
    export const RGB16I: i32;
    /**
     * GL_RGBA8I
     */
    export const RGBA8I: i32;
    /**
     * GL_RGB8I
     */
    export const RGB8I: i32;
    /**
     * GL_RED_INTEGER
     */
    export const RED_INTEGER: i32;
    /**
     * GL_RGB_INTEGER
     */
    export const RGB_INTEGER: i32;
    /**
     * GL_RGBA_INTEGER
     */
    export const RGBA_INTEGER: i32;
    /**
     * GL_SAMPLER_2D_ARRAY
     */
    export const SAMPLER_2D_ARRAY: i32;
    /**
     * GL_SAMPLER_2D_ARRAY_SHADOW
     */
    export const SAMPLER_2D_ARRAY_SHADOW: i32;
    /**
     * GL_SAMPLER_CUBE_SHADOW
     */
    export const SAMPLER_CUBE_SHADOW: i32;
    /**
     * GL_UNSIGNED_INT_VEC2
     */
    export const UNSIGNED_INT_VEC2: i32;
    /**
     * GL_UNSIGNED_INT_VEC3
     */
    export const UNSIGNED_INT_VEC3: i32;
    /**
     * GL_UNSIGNED_INT_VEC4
     */
    export const UNSIGNED_INT_VEC4: i32;
    /**
     * GL_INT_SAMPLER_2D
     */
    export const INT_SAMPLER_2D: i32;
    /**
     * GL_INT_SAMPLER_3D
     */
    export const INT_SAMPLER_3D: i32;
    /**
     * GL_INT_SAMPLER_CUBE
     */
    export const INT_SAMPLER_CUBE: i32;
    /**
     * GL_INT_SAMPLER_2D_ARRAY
     */
    export const INT_SAMPLER_2D_ARRAY: i32;
    /**
     * GL_UNSIGNED_INT_SAMPLER_2D
     */
    export const UNSIGNED_INT_SAMPLER_2D: i32;
    /**
     * GL_UNSIGNED_INT_SAMPLER_3D
     */
    export const UNSIGNED_INT_SAMPLER_3D: i32;
    /**
     * GL_UNSIGNED_INT_SAMPLER_CUBE
     */
    export const UNSIGNED_INT_SAMPLER_CUBE: i32;
    /**
     * GL_UNSIGNED_INT_SAMPLER_2D_ARRAY
     */
    export const UNSIGNED_INT_SAMPLER_2D_ARRAY: i32;
    /**
     * GL_DEPTH_COMPONENT32F
     */
    export const DEPTH_COMPONENT32F: i32;
    /**
     * GL_DEPTH32F_STENCIL8
     */
    export const DEPTH32F_STENCIL8: i32;
    /**
     * GL_FLOAT_32_UNSIGNED_INT_24_8_REV
     */
    export const FLOAT_32_UNSIGNED_INT_24_8_REV: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING
     */
    export const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE
     */
    export const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE
     */
    export const FRAMEBUFFER_ATTACHMENT_RED_SIZE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE
     */
    export const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE
     */
    export const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE
     */
    export const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE
     */
    export const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE
     */
    export const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: i32;
    /**
     * GL_FRAMEBUFFER_DEFAULT
     */
    export const FRAMEBUFFER_DEFAULT: i32;
    /**
     * GL_UNSIGNED_INT_24_8
     */
    export const UNSIGNED_INT_24_8: i32;
    /**
     * GL_DEPTH24_STENCIL8
     */
    export const DEPTH24_STENCIL8: i32;
    /**
     * GL_UNSIGNED_NORMALIZED
     */
    export const UNSIGNED_NORMALIZED: i32;
    /**
     * GL_DRAW_FRAMEBUFFER_BINDING
     */
    export const DRAW_FRAMEBUFFER_BINDING: i32;
    /**
     * GL_READ_FRAMEBUFFER
     */
    export const READ_FRAMEBUFFER: i32;
    /**
     * GL_DRAW_FRAMEBUFFER
     */
    export const DRAW_FRAMEBUFFER: i32;
    /**
     * GL_READ_FRAMEBUFFER_BINDING
     */
    export const READ_FRAMEBUFFER_BINDING: i32;
    /**
     * GL_RENDERBUFFER_SAMPLES
     */
    export const RENDERBUFFER_SAMPLES: i32;
    /**
     * GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER
     */
    export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: i32;
    /**
     * GL_MAX_COLOR_ATTACHMENTS
     */
    export const MAX_COLOR_ATTACHMENTS: i32;
    /**
     * GL_COLOR_ATTACHMENT1
     */
    export const COLOR_ATTACHMENT1: i32;
    /**
     * GL_COLOR_ATTACHMENT2
     */
    export const COLOR_ATTACHMENT2: i32;
    /**
     * GL_COLOR_ATTACHMENT3
     */
    export const COLOR_ATTACHMENT3: i32;
    /**
     * GL_COLOR_ATTACHMENT4
     */
    export const COLOR_ATTACHMENT4: i32;
    /**
     * GL_COLOR_ATTACHMENT5
     */
    export const COLOR_ATTACHMENT5: i32;
    /**
     * GL_COLOR_ATTACHMENT6
     */
    export const COLOR_ATTACHMENT6: i32;
    /**
     * GL_COLOR_ATTACHMENT7
     */
    export const COLOR_ATTACHMENT7: i32;
    /**
     * GL_COLOR_ATTACHMENT8
     */
    export const COLOR_ATTACHMENT8: i32;
    /**
     * GL_COLOR_ATTACHMENT9
     */
    export const COLOR_ATTACHMENT9: i32;
    /**
     * GL_COLOR_ATTACHMENT10
     */
    export const COLOR_ATTACHMENT10: i32;
    /**
     * GL_COLOR_ATTACHMENT11
     */
    export const COLOR_ATTACHMENT11: i32;
    /**
     * GL_COLOR_ATTACHMENT12
     */
    export const COLOR_ATTACHMENT12: i32;
    /**
     * GL_COLOR_ATTACHMENT13
     */
    export const COLOR_ATTACHMENT13: i32;
    /**
     * GL_COLOR_ATTACHMENT14
     */
    export const COLOR_ATTACHMENT14: i32;
    /**
     * GL_COLOR_ATTACHMENT15
     */
    export const COLOR_ATTACHMENT15: i32;
    /**
     * GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE
     */
    export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: i32;
    /**
     * GL_MAX_SAMPLES
     */
    export const MAX_SAMPLES: i32;
    /**
     * GL_HALF_FLOAT
     */
    export const HALF_FLOAT: i32;
    /**
     * GL_RG
     */
    export const RG: i32;
    /**
     * GL_RG_INTEGER
     */
    export const RG_INTEGER: i32;
    /**
     * GL_R8
     */
    export const R8: i32;
    /**
     * GL_RG8
     */
    export const RG8: i32;
    /**
     * GL_R16F
     */
    export const R16F: i32;
    /**
     * GL_R32F
     */
    export const R32F: i32;
    /**
     * GL_RG16F
     */
    export const RG16F: i32;
    /**
     * GL_RG32F
     */
    export const RG32F: i32;
    /**
     * GL_R8I
     */
    export const R8I: i32;
    /**
     * GL_R8UI
     */
    export const R8UI: i32;
    /**
     * GL_R16I
     */
    export const R16I: i32;
    /**
     * GL_R16UI
     */
    export const R16UI: i32;
    /**
     * GL_R32I
     */
    export const R32I: i32;
    /**
     * GL_R32UI
     */
    export const R32UI: i32;
    /**
     * GL_RG8I
     */
    export const RG8I: i32;
    /**
     * GL_RG8UI
     */
    export const RG8UI: i32;
    /**
     * GL_RG16I
     */
    export const RG16I: i32;
    /**
     * GL_RG16UI
     */
    export const RG16UI: i32;
    /**
     * GL_RG32I
     */
    export const RG32I: i32;
    /**
     * GL_RG32UI
     */
    export const RG32UI: i32;
    /**
     * GL_VERTEX_ARRAY_BINDING
     */
    export const VERTEX_ARRAY_BINDING: i32;
    /**
     * GL_R8_SNORM
     */
    export const R8_SNORM: i32;
    /**
     * GL_RG8_SNORM
     */
    export const RG8_SNORM: i32;
    /**
     * GL_RGB8_SNORM
     */
    export const RGB8_SNORM: i32;
    /**
     * GL_RGBA8_SNORM
     */
    export const RGBA8_SNORM: i32;
    /**
     * GL_SIGNED_NORMALIZED
     */
    export const SIGNED_NORMALIZED: i32;
    /**
     * GL_COPY_READ_BUFFER
     */
    export const COPY_READ_BUFFER: i32;
    /**
     * GL_COPY_WRITE_BUFFER
     */
    export const COPY_WRITE_BUFFER: i32;
    /**
     * GL_COPY_READ_BUFFER_BINDING
     */
    export const COPY_READ_BUFFER_BINDING: i32;
    /**
     * GL_COPY_WRITE_BUFFER_BINDING
     */
    export const COPY_WRITE_BUFFER_BINDING: i32;
    /**
     * GL_UNIFORM_BUFFER
     */
    export const UNIFORM_BUFFER: i32;
    /**
     * GL_UNIFORM_BUFFER_BINDING
     */
    export const UNIFORM_BUFFER_BINDING: i32;
    /**
     * GL_UNIFORM_BUFFER_START
     */
    export const UNIFORM_BUFFER_START: i32;
    /**
     * GL_UNIFORM_BUFFER_SIZE
     */
    export const UNIFORM_BUFFER_SIZE: i32;
    /**
     * GL_MAX_VERTEX_UNIFORM_BLOCKS
     */
    export const MAX_VERTEX_UNIFORM_BLOCKS: i32;
    /**
     * GL_MAX_FRAGMENT_UNIFORM_BLOCKS
     */
    export const MAX_FRAGMENT_UNIFORM_BLOCKS: i32;
    /**
     * GL_MAX_COMBINED_UNIFORM_BLOCKS
     */
    export const MAX_COMBINED_UNIFORM_BLOCKS: i32;
    /**
     * GL_MAX_UNIFORM_BUFFER_BINDINGS
     */
    export const MAX_UNIFORM_BUFFER_BINDINGS: i32;
    /**
     * GL_MAX_UNIFORM_BLOCK_SIZE
     */
    export const MAX_UNIFORM_BLOCK_SIZE: i32;
    /**
     * GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS
     */
    export const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: i32;
    /**
     * GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS
     */
    export const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: i32;
    /**
     * GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT
     */
    export const UNIFORM_BUFFER_OFFSET_ALIGNMENT: i32;
    /**
     * GL_ACTIVE_UNIFORM_BLOCKS
     */
    export const ACTIVE_UNIFORM_BLOCKS: i32;
    /**
     * GL_UNIFORM_TYPE
     */
    export const UNIFORM_TYPE: i32;
    /**
     * GL_UNIFORM_SIZE
     */
    export const UNIFORM_SIZE: i32;
    /**
     * GL_UNIFORM_BLOCK_INDEX
     */
    export const UNIFORM_BLOCK_INDEX: i32;
    /**
     * GL_UNIFORM_OFFSET
     */
    export const UNIFORM_OFFSET: i32;
    /**
     * GL_UNIFORM_ARRAY_STRIDE
     */
    export const UNIFORM_ARRAY_STRIDE: i32;
    /**
     * GL_UNIFORM_MATRIX_STRIDE
     */
    export const UNIFORM_MATRIX_STRIDE: i32;
    /**
     * GL_UNIFORM_IS_ROW_MAJOR
     */
    export const UNIFORM_IS_ROW_MAJOR: i32;
    /**
     * GL_UNIFORM_BLOCK_BINDING
     */
    export const UNIFORM_BLOCK_BINDING: i32;
    /**
     * GL_UNIFORM_BLOCK_DATA_SIZE
     */
    export const UNIFORM_BLOCK_DATA_SIZE: i32;
    /**
     * GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS
     */
    export const UNIFORM_BLOCK_ACTIVE_UNIFORMS: i32;
    /**
     * GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES
     */
    export const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: i32;
    /**
     * GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER
     */
    export const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: i32;
    /**
     * GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER
     */
    export const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: i32;
    /**
     * GL_INVALID_INDEX
     */
    export const INVALID_INDEX: i32;
    /**
     * GL_MAX_VERTEX_OUTPUT_COMPONENTS
     */
    export const MAX_VERTEX_OUTPUT_COMPONENTS: i32;
    /**
     * GL_MAX_FRAGMENT_INPUT_COMPONENTS
     */
    export const MAX_FRAGMENT_INPUT_COMPONENTS: i32;
    /**
     * GL_MAX_SERVER_WAIT_TIMEOUT
     */
    export const MAX_SERVER_WAIT_TIMEOUT: i32;
    /**
     * GL_OBJECT_TYPE
     */
    export const OBJECT_TYPE: i32;
    /**
     * GL_SYNC_CONDITION
     */
    export const SYNC_CONDITION: i32;
    /**
     * GL_SYNC_STATUS
     */
    export const SYNC_STATUS: i32;
    /**
     * GL_SYNC_FLAGS
     */
    export const SYNC_FLAGS: i32;
    /**
     * GL_SYNC_FENCE
     */
    export const SYNC_FENCE: i32;
    /**
     * GL_SYNC_GPU_COMMANDS_COMPLETE
     */
    export const SYNC_GPU_COMMANDS_COMPLETE: i32;
    /**
     * GL_UNSIGNALED
     */
    export const UNSIGNALED: i32;
    /**
     * GL_SIGNALED
     */
    export const SIGNALED: i32;
    /**
     * GL_ALREADY_SIGNALED
     */
    export const ALREADY_SIGNALED: i32;
    /**
     * GL_TIMEOUT_EXPIRED
     */
    export const TIMEOUT_EXPIRED: i32;
    /**
     * GL_CONDITION_SATISFIED
     */
    export const CONDITION_SATISFIED: i32;
    /**
     * GL_WAIT_FAILED
     */
    export const WAIT_FAILED: i32;
    /**
     * GL_SYNC_FLUSH_COMMANDS_BIT
     */
    export const SYNC_FLUSH_COMMANDS_BIT: i32;
    /**
     * GL_VERTEX_ATTRIB_ARRAY_DIVISOR
     */
    export const VERTEX_ATTRIB_ARRAY_DIVISOR: i32;
    /**
     * GL_ANY_SAMPLES_PASSED
     */
    export const ANY_SAMPLES_PASSED: i32;
    /**
     * GL_ANY_SAMPLES_PASSED_CONSERVATIVE
     */
    export const ANY_SAMPLES_PASSED_CONSERVATIVE: i32;
    /**
     * GL_SAMPLER_BINDING
     */
    export const SAMPLER_BINDING: i32;
    /**
     * GL_RGB10_A2UI
     */
    export const RGB10_A2UI: i32;
    /**
     * GL_INT_2_10_10_10_REV
     */
    export const INT_2_10_10_10_REV: i32;
    /**
     * GL_TRANSFORM_FEEDBACK
     */
    export const TRANSFORM_FEEDBACK: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_PAUSED
     */
    export const TRANSFORM_FEEDBACK_PAUSED: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_ACTIVE
     */
    export const TRANSFORM_FEEDBACK_ACTIVE: i32;
    /**
     * GL_TRANSFORM_FEEDBACK_BINDING
     */
    export const TRANSFORM_FEEDBACK_BINDING: i32;
    /**
     * GL_TEXTURE_IMMUTABLE_FORMAT
     */
    export const TEXTURE_IMMUTABLE_FORMAT: i32;
    /**
     * GL_MAX_ELEMENT_INDEX
     */
    export const MAX_ELEMENT_INDEX: i32;
    /**
     * GL_TEXTURE_IMMUTABLE_LEVELS
     */
    export const TEXTURE_IMMUTABLE_LEVELS: i32;
    /**
     * -1
     */
    export const TIMEOUT_IGNORED: i32;
    /**
     * 0x9247
     */
    export const MAX_CLIENT_WAIT_TIMEOUT_WEBGL: i32;

}