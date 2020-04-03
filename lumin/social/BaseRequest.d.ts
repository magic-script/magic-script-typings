declare module 'lumin' {
  class BaseRequest {

    /**
     * Get the ID of the request
     * @return the request ID
     */
    getRequestID(): number /* int32_t */

    /**
     * Get the status of the request
     * @return the request status
     */
    getStatus(): RequestStatus
  }
}
