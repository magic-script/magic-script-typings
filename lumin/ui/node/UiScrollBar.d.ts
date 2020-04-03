declare module 'lumin' {
  namespace ui {

    /**
     * UiScrollBar - This node represents a scrollable view.
     */
    class UiScrollBar extends ui.UiNode {

      /**
       * Creates a UiScrollBar element with default settings.
       *
       * @param prism - The prism to create this node for.
       * @param width - The length of the scrollbar. This is a little bit longer than the scroll range (which is the range the thumb will run)
       * @param height `default = 0.0`<br/> - This is how wide the scrollbar will be. A user should normally not care about this unless they intend to change the skin of an app
       * @return The new UiScrollBar node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, width: number /* float */, height?: number /* float */): ui.UiScrollBar | null

      /**
       * Sets the size of the thumb.
       * This function is called in particular by UiScrollBar to update the size of the thumb according to the size of
       * the scroll bound in respect to that of the scroll content. If the ratio is out of the range 0-1, the thumb is hidden.
       *
       * @param value The ratio of scroll bound width/height over the scroll content width/height.
       *
       * @priv none
       */
      setThumbSize(value: number /* float */): void

      /**
       * Gets an indication between 0 and 1 for the size of the thumb in respect to the track.
       * It returns 1 to mean the thumb is as long as its track.
       * It returns a value of .5f to mean the thumb is half as long as its track.
       *
       * @return The indication for the size of the thumb.
       *
       * @priv none
       */
      getThumbSize(): number /* float */

      /**
       * Sets the position of the thumb along the track according to the value passed.
       * A value of 0 will place the thumb at the left/upper most possible position along the track.
       * A value of 1 will place the thumb at the right/bottom most possible position along the track.
       * This value must reflect the position of the UiScrollView's scroll bound in respect to UiScrollView's scroll content.
       *
       * @param value a normalized value between 0 and 1, according to which the thumb will be placed along the track.
       *
       * @priv none
       */
      setThumbPosition(value: number /* float */): void

      /**
       * Gets an indication between 0 and 1 for the position of the thumb along the track.
       * It returns 0 to mean the thumb is at the left/upper most possible position along the track.
       * It returns 1 to mean the thumb is at the right/bottom most possible position along the track.
       *
       * @return The indication of where the thumb is along its track.
       *
       * @priv none
       */
      getThumbPosition(): number /* float */
    }
  }
}
