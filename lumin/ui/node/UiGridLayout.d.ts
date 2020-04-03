declare module 'lumin' {
  namespace ui {

    /**
     * UiGridLayout provides for automatic layout of elements
     * in a grid.
     *
     * The UiGridLayout will grow to accommodate items as they
     * are added based on the row and column settings.  Setting
     * the number of rows or columns to be non-zero will lock
     * that grid dimension to the provided value while the other
     * dimension grows to fit content.  If both are set to be
     * non-zero, the columns will take precedence.
     */
    class UiGridLayout extends ui.UiLayout {

      /**
       * Creates a new UiGridLayout.
       *
       * @param prism The prism to create this node for.
       * @return New UiGridLayout on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null): ui.UiGridLayout | null

      /**
       * Sets the number of columns for the grid.
       *
       * The default value of 0 indicates the number of columns
       * can grow to fit items as they are added.  Setting the
       * value above 0 will lock the grid column dimension.
       *
       * If both rows and columns are set, columns will take
       * precedence.
       *
       * If neither rows or columns are set, the grid layout will
       * have 1 row and add columns as needed.
       *
       * When the number of columns is set, the grid will lay
       * items in row-major order.
       *
       * @param columns the number of columns for the grid layout.
       *
       * @priv none
       */
      setColumns(columns: number /* unsigned int */): void

      /**
       * Gets the number of columns set for the grid.
       *
       * @return the number of set columns.
       *
       * @priv none
       */
      getColumns(): number /* unsigned int */

      /**
       * Gets the current calculated columns based on row and column
       * settings and the number of items currently added.
       *
       * @priv none
       */
      getCurrentColumns(): number /* unsigned int */

      /**
       * Sets the number of rows for the grid.
       *
       * The default value of 0 indicates the number of rows
       * can grow to fit items as they are added.  Setting the
       * value above 0 will lock the grid row dimension.
       *
       * If both rows and columns are set, columns will take
       * precedence.
       *
       * If neither rows or columns are set, the grid layout will
       * have 1 row and add columns as needed.
       *
       * When the number of rows is set (and columns is 0), the
       * grid will lay items in column-major order.
       *
       * @param rows the number of rows for the grid layout.
       *
       * @priv none
       */
      setRows(rows: number /* unsigned int */): void

      /**
       * Gets the number of rows set for the grid.
       *
       * @return the number of set rows.
       *
       * @priv none
       */
      getRows(): number /* unsigned int */

      /**
       * Gets the current calculated rows based on row and column
       * settings and the number of items currently added.
       *
       * @priv none
       */
      getCurrentRows(): number /* unsigned int */

      /**
       * Sets the default padding of each item within the grid,
       * in scene units.  The default is no padding (0,0,0,0).
       *
       * The padding order is:  top, right, bottom, left
       *
       * This will be set for any new items that are added that
       * aren't explicitly specifying padding. The padding of each
       * individual item can still be set later if needed.
       * Note that padding in a dimension will work only for items
       * smaller in that dimension than the cell they are in.
       * Large horizontal padding for an item will also contribute
       * to the width of the column the item is in.
       * The same applies for large vertical padding vis-a-vis
       * the height of the row the item is in.
       *
       * @param padding the padding vector for the 4 sides.
       *
       * @priv none
       */
      setDefaultItemPadding(padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the default padding for items within the linear layout.
       *
       * @return the padding.
       *
       * @priv none
       */
      getDefaultItemPadding(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the default item alignment within the grid.
       *
       * Default item alignments are TOP_LEFT.
       *
       * This will be set for any new items that are added that
       * aren't explicitly specifying alignment. The alignment of each
       * individual item can still be set later if needed.
       * Note that for the right and the bottom alignments
       * to kick in, the containing cell should be, respectively,
       * wider and higher than its content.
       *
       * @param alignment The default item alignment.
       *
       * @priv none
       */
      setDefaultItemAlignment(alignment: ui.Alignment): void

      /**
       * Gets the default item alignment within the list.
       *
       * @return The default item alignment.
       *
       * @priv none
       */
      getDefaultItemAlignment(): ui.Alignment

      /**
       * Gets the number of items in the grid.
       *
       * @return Item count.
       *
       * @priv none
       */
      getItemCount(): number /* unsigned int */

      /**
       * Adds an item to the grid.
       *
       * @param item The node hierarchy to add to the grid.
       *
       * @priv none
       */
      addItem(item: TransformNode | null): void

      /**
       * Adds an item to the grid.
       *
       * Note that padding in a dimension will work only for items
       * smaller in that dimension than the cell they are in.
       * Large horizontal padding for an item will also contribute
       * to the width of the column the item is in.
       * The same applies for large vertical padding vis-a-vis
       * the height of the row the item is in.
       *
       * @param item The node hierarchy to add to the grid.
       * @param padding The item padding within the grid.
       *
       * @priv none
       */
      addItem(item: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Adds an item to the grid.
       *
       * Note that padding in a dimension will work only for items
       * smaller in that dimension than the cell they are in.
       * Large horizontal padding for an item will also contribute
       * to the width of the column the item is in.
       * The same applies for large vertical padding vis-a-vis
       * the height of the row the item is in.
       * Also for the right and the bottom alignments
       * to kick in, the containing cell should be, respectively,
       * wider and higher than its content.
       *
       * @param item The node hierarchy to add to the grid.
       * @param padding The item padding within the grid.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      addItem(item: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */, alignment: ui.Alignment): void

      /**
       * Adds an item to the grid at the specific index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the grid.
       *
       * @priv none
       */
      addItemAt(index: number /* unsigned int */, item: TransformNode | null): void

      /**
       * Adds an item to the grid at the specified index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       * Note that padding in a dimension will work only for items
       * smaller in that dimension than the cell they are in.
       * Large horizontal padding for an item will also contribute
       * to the width of the column the item is in.
       * The same applies for large vertical padding vis-a-vis
       * the height of the row the item is in.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the grid.
       * @param padding The item padding within the grid.
       *
       * @priv none
       */
      addItemAt(index: number /* unsigned int */, item: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Adds an item to the grid at the specified index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       * Note that padding in a dimension will work only for items
       * smaller in that dimension than the cell they are in.
       * Large horizontal padding for an item will also contribute
       * to the width of the column the item is in.
       * The same applies for large vertical padding vis-a-vis
       * the height of the row the item is in.
       * Also for the right and the bottom alignments
       * to kick in, the containing cell should be, respectively,
       * wider and higher than its content.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the grid.
       * @param padding The item padding within the grid.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      addItemAt(index: number /* unsigned int */, item: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */, alignment: ui.Alignment): void

      /**
       * Sets the item padding at the specified row and col position.
       *
       * Note that padding in a dimension will work only for items
       * smaller in that dimension than the cell they are in.
       * Large horizontal padding for an item will also contribute
       * to the width of the column the item is in.
       * The same applies for large vertical padding vis-a-vis
       * the height of the row the item is in.
       *
       * @param row The row position of the item (zero-based).
       * @param col The column position of the item (zero-based).
       * @param padding The item padding.
       *
       * @priv none
       */
      setItemPadding(row: number /* unsigned int */, col: number /* unsigned int */, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Sets the item padding.
       *
       * Note that padding in a dimension will work only for items
       * smaller in that dimension than the cell they are in.
       * Large horizontal padding for an item will also contribute
       * to the width of the column the item is in.
       * The same applies for large vertical padding vis-a-vis
       * the height of the row the item is in.
       *
       * @param item Pointer to the item Node.
       * @param padding The item padding.
       *
       * @priv none
       */
      setItemPadding(item: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the item padding at the specified row and col position.
       *
       * @param row The row position of the item (zero-based).
       * @param col The column position of the item (zero-based).
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemPadding(row: number /* unsigned int */, col: number /* unsigned int */): [number, number, number, number] | null /* std::optional<glm::vec4> */

      /**
       * Gets the item padding.
       *
       * @param item Pointer to the item Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemPadding(item: TransformNode | null): [number, number, number, number] | null /* std::optional<glm::vec4> */

      /**
       * Sets the item alignment at the specified row and col position.
       *
       * Note that for the right and the bottom alignments
       * to kick in, the containing cell should be, respectively,
       * wider and higher than its content.
       *
       * @param row The row position of the item (zero-based).
       * @param col The column position of the item (zero-based).
       * @param alignment The item alignment.
       *
       * @priv none
       */
      setItemAlignment(row: number /* unsigned int */, col: number /* unsigned int */, alignment: ui.Alignment): void

      /**
       * Sets the item alignment.
       *
       * Note that for the right and the bottom alignments
       * to kick in, the containing cell should be, respectively,
       * wider and higher than its content.
       *
       * @param item Pointer to the item Node.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      setItemAlignment(item: TransformNode | null, alignment: ui.Alignment): void

      /**
       * Gets the item alignment at the specified row and col position.
       *
       * @param row The row position of the item (zero-based).
       * @param col The column position of the item (zero-based).
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemAlignment(row: number /* unsigned int */, col: number /* unsigned int */): ui.Alignment | null /* std::optional<Alignment> */

      /**
       * Gets the item alignment.
       *
       * @param item Pointer to the item Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemAlignment(item: TransformNode | null): ui.Alignment | null /* std::optional<Alignment> */

      /**
       * Gets the item found at the zero-based index,
       * regardless whether it's visible or not.
       *
       * If the index is out of bounds, nullptr will be returned.
       *
       * @param index The position of the item (zero-based).
       * @return Item node pointer.
       *
       * @priv none
       */
      getItem(index: number /* unsigned int */): TransformNode | null

      /**
       * Gets the item at the row and col position.
       *
       * Invisible items in the grid will not be considered
       * if the grid is set to skip invisble items.
       * If the row and column are out of bounds, nullptr will be returned.
       *
       * @param row The row position of the item (zero-based).
       * @param col The column position of the item (zero-based).
       * @return Item node pointer.
       *
       * @priv none
       */
      getItem(row: number /* unsigned int */, col: number /* unsigned int */): TransformNode | null

      /**
       * Removes the item at the row and col position.
       *
       * Removing an item from the grid can alter the grid position
       * of other items based on the grid's row and column settings.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * If the row and column are out of bounds, nothing happens.
       *
       * @param row The row position of the item (zero-based).
       * @param col The column position of the item (zero-based).
       * @return Item node pointer.
       *
       * @priv none
       */
      removeItem(row: number /* unsigned int */, col: number /* unsigned int */): TransformNode | null

      /**
       * Replaces the item in the grid at (row, col).
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * If (row, col) is out of bounds, nothing happens.
       *
       * @param row The row of the item to be replaced.
       * @param col The column of the item to be replaced.
       * @param newItem The new item replacing the Node at (row, col)
       * @return replaced Node's pointer.
       */
      replaceItem(row: number /* unsigned int */, col: number /* unsigned int */, newItem: TransformNode | null): TransformNode | null

      /**
       * Replaces an existing item in the grid with a new item
       *
       * If either of the Node's are invalid - Null or not contained in the grid -
       * nothing happens.
       *
       * @param oldItem The pointer for the grid item you would like to replace
       * @param newItem The pointer for the new item replacing the oldItem in the grid
       * @return true if the newItem has successfully replaced the oldItem
       */
      replaceItem(oldItem: TransformNode | null, newItem: TransformNode | null): boolean

      /**
       * Swap two items in the grid.
       *
       * If either of the row and column pair's are out of bounds, nothing will happen.
       *
       * @param row1 row for item1
       * @param col1 col for item1
       * @param row2 row for item2
       * @param col2 col for item2
       * @return true if the two Nodes at (row1, col1) and (row2, col2) have been sucessfully swapped
       */
      swapItems(row1: number /* unsigned int */, col1: number /* unsigned int */, row2: number /* unsigned int */, col2: number /* unsigned int */): boolean

      /**
       * Swap two items in the grid.
       *
       * If the Node's are the same or invalid - Null or not contained in the grid -
       * nothing happens.
       *
       * @param item1 The pointer for a valid item in the grid
       * @param item2 The pointer for a valid item in the grid
       * @return true if item1 and item2 have successfully been swapped
       */
      swapItems(item1: TransformNode | null, item2: TransformNode | null): boolean

      /**
       * Skips invisble items.
       *
       * Setting this value true will cause the layout to skip over any
       * invisible items.  The layout will check the visibility of
       * each top-level item Node added and if invisible, along with
       * inherited visibility, will skip that Node for layout.
       *
       * Using this setting will affect the displayed grid layout by collapsing
       * the location of invisible items in the grid while the remaining, visible
       * items adjust to fill in those absent locations.  Using this setting
       * also affects the getItemCount() and calcualted rows and colums returned
       * by getCurrentRows(), getCurrentColumns(), and any of the methods using
       * row and column locations will access the visible item at that location,
       * not any invisible item no longer shown at that location.
       * Using this setting effectively alters the grid content and properties
       * to be only the visible items while still allowing the invisble items
       * to be held by the layout.
       *
       * @param skip Flag indicating whether to skip invis items or not.
       *
       * @priv none
       */
      setSkipInvisibleItems(skip: boolean): void

      /**
       * Gets whether this layout skips invisible items or not.
       *
       * @return true if the layout skips invisible items, false if not.
       *
       * @priv none
       */
      getSkipInvisibleItems(): boolean
    }
  }
}
