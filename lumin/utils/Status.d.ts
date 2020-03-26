declare module 'lumin' {
  namespace utils {
    enum StatusDef {

      /**
       * `value = 0`
       */
      OK,

      /**
       * `value = 0`
       */
      NO_ERROR,

      /**
       * `value = (-2147483647-1)`
       */
      UNKNOWN_ERROR,

      /**
       * `value = -ENOMEM`
       */
      NO_MEMORY,

      /**
       * `value = -ENOSYS`
       */
      INVALID_OPERATION,

      /**
       * `value = -EINVAL`
       */
      BAD_VALUE,

      /**
       * `value = (UNKNOWN_ERROR+1)`
       */
      BAD_TYPE,

      /**
       * `value = -ENOENT`
       */
      NAME_NOT_FOUND,

      /**
       * `value = -EPERM`
       */
      PERMISSION_DENIED,

      /**
       * `value = -ENODEV`
       */
      NO_INIT,

      /**
       * `value = -EEXIST`
       */
      ALREADY_EXISTS,

      /**
       * `value = -EPIPE`
       */
      DEAD_OBJECT,

      /**
       * `value = (UNKNOWN_ERROR+2)`
       */
      FAILED_TRANSACTION,

      /**
       * `value = -EOVERFLOW`
       */
      BAD_INDEX,

      /**
       * `value = -ENODATA`
       */
      NOT_ENOUGH_DATA,

      /**
       * `value = -EWOULDBLOCK`
       */
      WOULD_BLOCK,

      /**
       * `value = -ETIMEDOUT`
       */
      TIMED_OUT,

      /**
       * `value = -EBADMSG`
       */
      UNKNOWN_TRANSACTION,

      /**
       * `value = (UNKNOWN_ERROR+7)`
       */
      FDS_NOT_ALLOWED,

      /**
       * `value = (UNKNOWN_ERROR+8)`
       */
      UNEXPECTED_NULL,

      /**
       * `value = (UNKNOWN_ERROR+9)`
       */
      EXCEEDED_QUOTA,

      /**
       * `value = (UNKNOWN_ERROR+10)`
       */
      NOT_ENOUGH_SPACE,

      /**
       * `value = (UNKNOWN_ERROR+11)`
       */
      KEY_NOT_FOUND,
    }
  }
}
