declare module 'lumin' {
  class Contact {

    /**
     * Get the ID of the contact
     * @return the ID
     */
    getID(): string

    /**
     * Get the avatar of the contact
     * @return the avatar
     */
    getAvatar(): string

    /**
     * Get the user name of the contact
     * @return the user name
     */
    getUsername(): string

    /**
     * Get the user status of the contact
     * @return the user status
     */
    getStatus(): UserStatus
  }
}
