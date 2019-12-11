declare module 'lumin' {

  /**
   * Class that encapsulates information about a file argument.
   */
  class FileInfo {

    /**
     * Creates an empty FileInfo object.
     */
    constructor()

    /**
     * Returns the file descriptor.
     *
     * @return the file descriptor.
     * @priv none
     */
    getFileDescriptor(): number /* int */

    /**
     * Returns the name of the file.
     *
     * The file can be accessed only via the enclosed file descriptor
     * and not using this name. This is for information only.
     *
     * @return the file name.
     * @priv none
     */
    getFileName(): string

    /**
     * Returns the mime type of the file.
     *
     * @return the file's mime type.
     * @priv none
     */
    getMimeType(): string

    /**
     * Sets the file descriptor.
     *
     * @param fd the file descriptor.
     * @priv none
     */
    setFileDescriptor(fd: number /* int */): void

    /**
     * Sets the name of the file.
     *
     * The file can be accessed only via the enclosed file descriptor
     * and not using this name. This is for information only.
     *
     * @param filename the file name (for information only).
     * @priv none
     */
    setFileName(filename: string): void

    /**
     * Sets the mime type of the file.
     *
     * @param mimeType the file's mime type.
     * @priv none
     */
    setMimeType(mimeType: string): void
  }
}
