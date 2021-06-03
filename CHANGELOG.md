Changelog
=========

## [21.0.0](https://github.com/ckeditor/ckeditor5/compare/v20.0.0...v21.0.0) (2020-07-28)

### Release highlights

We are happy to announce the release of CKEditor 5 v21.0.0.

This release packs quite a few all-around improvements, including:

* [A convenient UI for changing the image width to a predefined size](https://github.com/ckeditor/ckeditor5/issues/5201).
* [Autolinking URLs and e-mails in the editor content](https://github.com/ckeditor/ckeditor5/issues/4715).
* [Distinguishing between the inside and the outside of `<code>`](https://github.com/ckeditor/ckeditor5/issues/6722).
* [Better experience when replacing (typing over) a link text](https://github.com/ckeditor/ckeditor5/issues/4762).

We have also fixed a handful of bugs, for example:

* Calling the [`editor.setData()` method will now also clear the undo stack](https://github.com/ckeditor/ckeditor5/issues/4060).
* [Linking to a part of a to-do list item](https://github.com/ckeditor/ckeditor5/issues/5779).
* [Automatic link decorators in case of a linked image](https://github.com/ckeditor/ckeditor5/issues/7519).

Finally, we also took care of some of the developer experience-oriented improvements:

* [We changed marker conversion so that it does not break the HTML structure in some cases](https://github.com/ckeditor/ckeditor5/issues/7556).
* Introduced a new [`RawElement`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_rawelement-RawElement.html) class to make it simpler to [implement features like "embedding raw HTML"](https://github.com/ckeditor/ckeditor5/issues/4469).

Please note that there are some **major breaking changes**. Be sure to review them before upgrading.

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v21.0.0-with-autolink-and-export-to-word-released/

### Collaboration features

The CKEditor 5 Collaboration features changelog can be found here: https://ckeditor.com/collaboration/changelog.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* The `editor.setData()` method now clears the undo and redo stacks.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The [`Text#is()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_text-Text.html#function-is) and [`TextProxy#is()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_textproxy-TextProxy.html#function-is) methods (in the model and the view) now expect to be called with `'$text'` instead of `'text'` and `'$textProxy'` instead of `'textProxy'`.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `is()` method (e.g. [`Element#is()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_element-Element.html#function-is), [`Text#is()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_text-Text.html#function-is), [`AttributeElement#is()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_attributeelement-AttributeElement.html#function-is) or [`ContainerElement#is()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_containerelement-ContainerElement.html#function-is)) in both the model and the view no longer treats the first argument as an element name. To check the element name, use the second argument instead (`node.is( 'element', 'paragraph' )` instead of `node.is( 'paragraph' )`).
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The marker-to-data conversion was revamped. The data format changed, the new conversion helpers were introduced and a new rule was implemented that a comma (`,`) is not allowed in the marker name. See the GitHub issue for a [walkthrough and example migration path](https://github.com/ckeditor/ckeditor5/issues/7556#issuecomment-665579653).
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DomConverter#getParentUIElement()` method was renamed to [`DomConverter#getHostViewElement()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_domconverter-DomConverter.html#function-getHostViewElement) because now it supports both `UIElement` and `RawElement` (see [#4469](https://github.com/ckeditor/ckeditor5/issues/4469)).

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `bindTwoStepCaretToAttribute()` utility function was removed. Use `editor.plugins.get( TwoStepCaretMovement ).registerAttribute()` instead.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `findAncestor()` utility function was removed.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The parameters of `TableUtils#createTable()` have changed. Use the `options` object to pass the number of `rows` and `columns`.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `removeEmptyRows()` and `removeEmptyRowsColumns()` utility functions do not require the `batch` parameter anymore.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `downcastTableHeadingRowsChange()` downcast converter was removed. It is no longer possible to override the `headingRows` attribute change in a single converter. This behavior can be customized using the table downcast converter. See [#7601](https://github.com/ckeditor/ckeditor5/issues/7601).

### Features

* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Block autoformat can also be triggered in blocks other than a paragraph. Closes [#6170](https://github.com/ckeditor/ckeditor5/issues/6170). ([commit](https://github.com/ckeditor/ckeditor5/commit/5866d4199dad1b70b5329c83dd4b3974716f04a5))
* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Enabled the autoformatting feature also for blocks that are not empty. ([commit](https://github.com/ckeditor/ckeditor5/commit/5866d4199dad1b70b5329c83dd4b3974716f04a5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Implemented the view `RawElement`. Added the `DowncastWriter#createRawElement()` method. Closes [#4469](https://github.com/ckeditor/ckeditor5/issues/4469). ([commit](https://github.com/ckeditor/ckeditor5/commit/bff38e366517a2801ffdd136bcff3afbfe671fd6))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DataController#set()` method is now decorated so plugins can listen to `editor.setData()` calls. ([commit](https://github.com/ckeditor/ckeditor5/commit/4a12d38094803f62d351e467a37ecba2b9c957fd))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced new marker conversion helpers that produce semantic HTML data output. See `DowncastHelpers#markerToData()` and `UpcastHelpers#dataToMarker()`. Closes [#7556](https://github.com/ckeditor/ckeditor5/issues/7556). ([commit](https://github.com/ckeditor/ckeditor5/commit/b68d310d7ca779c2e6da5072e46fb5a13fb1e4f0))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added model `Position#findAncestor()` and `Element#findAncestor()` methods. Closes [#3233](https://github.com/ckeditor/ckeditor5/issues/3233). ([commit](https://github.com/ckeditor/ckeditor5/commit/a349af57c6a0ceeea1f7cfebf28a138065f15189))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Changed the visibility scope of `Mapper#findPositionIn()` from `private` to `public`. ([commit](https://github.com/ckeditor/ckeditor5/commit/3d260151f833e84cbdccc9deeff6415ae8b0c6e1))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the `Range#getJoined()` method for joining ranges. ([commit](https://github.com/ckeditor/ckeditor5/commit/1264e63947c88123fdb2b9a8c301d100476e83a8))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Introduced the UI for manual image resizing via a dropdown or standalone buttons. Closes [#5201](https://github.com/ckeditor/ckeditor5/issues/5201). ([commit](https://github.com/ckeditor/ckeditor5/commit/70e0b4102511a272cfef710379e8fcde40e53ac6))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Introduced the UI for restoring the original image size.  Closes [#5197](https://github.com/ckeditor/ckeditor5/issues/5197). ([commit](https://github.com/ckeditor/ckeditor5/commit/70e0b4102511a272cfef710379e8fcde40e53ac6))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Added an icon in the top-right corner of an image indicating that the image is linked. Closes [#7457](https://github.com/ckeditor/ckeditor5/issues/7457). ([commit](https://github.com/ckeditor/ckeditor5/commit/9887b7fcf148a72ad393c05f7278cf572c62a31a))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Typing over the selected link will not remove the link itself. Instead, the typed text will replace the link text. Closes [#4762](https://github.com/ckeditor/ckeditor5/issues/4762). ([commit](https://github.com/ckeditor/ckeditor5/commit/de476bb365aabb17d81f18cbe27d47b4baa32a0d))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Added the `AutoLink` feature which replaces a plain text with a URL or e-mail address if the typed or pasted content is a link. Closes [#4715](https://github.com/ckeditor/ckeditor5/issues/4715). ([commit](https://github.com/ckeditor/ckeditor5/commit/c3f307848dbefdd943376d06dcdc750e1f97eed9))
* **[page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break)**: Added support for pasting page breaks from Microsoft Word. Closes [#2508](https://github.com/ckeditor/ckeditor5/issues/2508). ([commit](https://github.com/ckeditor/ckeditor5/commit/d921aabf5e57e0daafec4e0be086b4ff18493c2d))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added an option to set heading rows and columns for the `insertTable` command and `TableUtils#createTable()`. Closes [#6768](https://github.com/ckeditor/ckeditor5/issues/6768). ([commit](https://github.com/ckeditor/ckeditor5/commit/392f61ffd1681ad6c5d7994d2339f46e317064bb))
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Introduced the `TwoStepCaretMovement` plugin. See [#7444](https://github.com/ckeditor/ckeditor5/issues/7444). ([commit](https://github.com/ckeditor/ckeditor5/commit/d40bd5832084821b54c6962462ec909e47e28168))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Introduced the `Collection#addMany()` method for adding multiple items in a single call. Closes [#7627](https://github.com/ckeditor/ckeditor5/issues/7627). ([commit](https://github.com/ckeditor/ckeditor5/commit/a1f0efd3c09fe52b73dca92107ef035175704d31))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Introduced the `Collection#change` event. See [#7627](https://github.com/ckeditor/ckeditor5/issues/7627). ([commit](https://github.com/ckeditor/ckeditor5/commit/a1f0efd3c09fe52b73dca92107ef035175704d31))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Made it possible to disable the `WidgetTypeAround` plugin on the fly. Closes [#6774](https://github.com/ckeditor/ckeditor5/issues/6774). ([commit](https://github.com/ckeditor/ckeditor5/commit/8cecf39f064647aa8a5c54e062f729cb981c1d67))

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed incorrect selection fixing in some multi-cell selection scenarios. Closes [#7659](https://github.com/ckeditor/ckeditor5/issues/7659). ([commit](https://github.com/ckeditor/ckeditor5/commit/43862d6e57bf4359f0d328c878b97888b6c1f9dd))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: After backspacing into a link, the caret should still stay outside the link. Closes [#7521](https://github.com/ckeditor/ckeditor5/issues/7521). ([commit](https://github.com/ckeditor/ckeditor5/commit/c175e1c62d358a58dddd24e048cf71aa1603781e))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Manual and automatic decorators will work properly with a link on an image. Closes [#7519](https://github.com/ckeditor/ckeditor5/issues/7519). ([commit](https://github.com/ckeditor/ckeditor5/commit/d38b5e526709d69024df3bc1ca0ebf7cf10306b0))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Fake visual selection should not be added to the editor's data. Closes [#7614](https://github.com/ckeditor/ckeditor5/issues/7614). ([commit](https://github.com/ckeditor/ckeditor5/commit/84e2042181fdff0d60d97e6bcbf0a6d26a9c9f41))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The editor should not crash on the <kbd>Enter</kbd> keypress inside a to-do list item containing soft-breaks. Closes [#5866](https://github.com/ckeditor/ckeditor5/issues/5866), [#6585](https://github.com/ckeditor/ckeditor5/issues/6585). ([commit](https://github.com/ckeditor/ckeditor5/commit/3d260151f833e84cbdccc9deeff6415ae8b0c6e1))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Links inside a to-do list item should be properly converted to HTML. Closes [#5779](https://github.com/ckeditor/ckeditor5/issues/5779). ([commit](https://github.com/ckeditor/ckeditor5/commit/3d260151f833e84cbdccc9deeff6415ae8b0c6e1))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: The editor's placeholder should disappear after inserting media into an empty editor. Closes [#1684](https://github.com/ckeditor/ckeditor5/issues/1684). ([commit](https://github.com/ckeditor/ckeditor5/commit/bff38e366517a2801ffdd136bcff3afbfe671fd6))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Pasting a table into an existing table should not set the multi-cell selection if the `TableSelection` plugin is disabled. Closes [#7486](https://github.com/ckeditor/ckeditor5/issues/7486). ([commit](https://github.com/ckeditor/ckeditor5/commit/e50a4e19ddbdf2e90f08da0f568916d117f1fdea))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Pasting a table into an existing table with headings should not break the table layout. Closes [#7453](https://github.com/ckeditor/ckeditor5/issues/7453). ([commit](https://github.com/ckeditor/ckeditor5/commit/df4485fb17e28f2ddb2d3c24253c2b23c9e11249))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table structure should not be changed when removing the heading row. Closes [#7454](https://github.com/ckeditor/ckeditor5/issues/7454), [#7601](https://github.com/ckeditor/ckeditor5/issues/7601). ([commit](https://github.com/ckeditor/ckeditor5/commit/8b83c9bcdd09e5d66c66df35fd2ee8252cecc26e))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Merging cells of multiple whole rows or columns should not crash the editor. ([commit](https://github.com/ckeditor/ckeditor5/commit/8b83c9bcdd09e5d66c66df35fd2ee8252cecc26e))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Removing the first hidden (grouped) toolbar button should not throw an exception. Closes [#7655](https://github.com/ckeditor/ckeditor5/issues/7655). ([commit](https://github.com/ckeditor/ckeditor5/commit/266dfda77fe51ca824195e22d84ad7517840777d))
* **[undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo)**: Undo/redo stacks should be cleared on `DataController#set()`. Closes [#4060](https://github.com/ckeditor/ckeditor5/issues/4060). ([commit](https://github.com/ckeditor/ckeditor5/commit/4a12d38094803f62d351e467a37ecba2b9c957fd))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: `Resizer#redraw()` should not change the editing view unless a different size should be set. Closes [#7633](https://github.com/ckeditor/ckeditor5/issues/7633). ([commit](https://github.com/ckeditor/ckeditor5/commit/978dd711c9db4022cfc89eff4a1de4f148bd65c8))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Triple-clicking inside an image caption should not crash the editor in Firefox. Closes [#7542](https://github.com/ckeditor/ckeditor5/issues/7542). ([commit](https://github.com/ckeditor/ckeditor5/commit/ef4b1f92dbd5a816a6be49f997726df1fd7d6eae))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Triple-clicking a link inside an image caption should not crash the editor in Safari. Closes [#6021](https://github.com/ckeditor/ckeditor5/issues/6021). ([commit](https://github.com/ckeditor/ckeditor5/commit/ef4b1f92dbd5a816a6be49f997726df1fd7d6eae))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The resizing mechanism will not trigger other `view.Document#mousedown` events. Thanks to that, when resizing an image inside a cell, the mouse will not trigger the table's actions. Closes [#6755](https://github.com/ckeditor/ckeditor5/issues/6755). ([commit](https://github.com/ckeditor/ckeditor5/commit/27fce4e3c37bd52da6cad913defa6571618bd350))

### Other changes

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Added icons that represent different sizes of an object (`object-size-*.svg`) (see [#7559](https://github.com/ckeditor/ckeditor5/issues/7559)). ([commit](https://github.com/ckeditor/ckeditor5/commit/565628a6e6faa0efdeb4aee7c6a9b63e8a429dd7))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `Editor`, `CommandCollection` and `MultiCommand`'s `execute()` method will return the result of the called `command.execute()`. Closes [#7647](https://github.com/ckeditor/ckeditor5/issues/7647). ([commit](https://github.com/ckeditor/ckeditor5/commit/152ffc911c5345c8a5ac8536a48458847414c72c))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Changed arguments of the `Element#is()`, `Text#is()`, `TextProxy#is()`, `AttributeElement#is()`, `ContainerElement#is()`, `EditableElement#is()`, `EmptyElement#is()`, `UIElement#is()` methods and all their usages. Closes [#7608](https://github.com/ckeditor/ckeditor5/issues/7608). ([commit](https://github.com/ckeditor/ckeditor5/commit/dbee47989aad166fff054e55cd294446772153af))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the `model.Schema` instance to the downcast conversion API, available under `conversionApi.schema`. ([commit](https://github.com/ckeditor/ckeditor5/commit/b68d310d7ca779c2e6da5072e46fb5a13fb1e4f0))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `UpcastHelpers#elementToMarker()` is now deprecated. Use `UpcastHelpers#dataToMarker()` instead. `DowncastHelpers#markerToElement()` should only be used for editing downcast. ([commit](https://github.com/ckeditor/ckeditor5/commit/b68d310d7ca779c2e6da5072e46fb5a13fb1e4f0))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Table cells should not be filled with single spaces when pasting a table with empty cells. Closes [#7487](https://github.com/ckeditor/ckeditor5/issues/7487). ([commit](https://github.com/ckeditor/ckeditor5/commit/284c7c1b4f3fba9d4133db273706a15db7454725))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `bindTwoStepCaretToAttribute()` engine's utility was removed. See [#7444](https://github.com/ckeditor/ckeditor5/issues/7444). ([commit](https://github.com/ckeditor/ckeditor5/commit/d40bd5832084821b54c6962462ec909e47e28168))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Allow to configure `ImageResize` in a more granular way. For example, by combining `ImageResizeEditing` with `ImageResizeHandles` or `ImageResizeButtons` to resize an image with handles or with the image toolbar UI components (dropdown or standalone buttons) respectively. Closes [#7579](https://github.com/ckeditor/ckeditor5/issues/7579). ([commit](https://github.com/ckeditor/ckeditor5/commit/3396d4e4c0e481b6c7927c73b88e065d61e81e49))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Image alignment styles (`alignLeft`, `alignCenter` and `alignRight`) no longer set `max-width: 50%` of the `<figure>` element.  If you wish them to still do so, add [these styles](https://github.com/ckeditor/ckeditor5/pull/7625/files#diff-960e3b5e24794dab54cce5dd955c2db2L11-L16) to your content styles. ([commit](https://github.com/ckeditor/ckeditor5/commit/a4cbcf11c0f387ad815a94b6a39b8932387d9ec8))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Restoring the document selection to the ranges as they were before undoing table cells merge. Closes [#6639](https://github.com/ckeditor/ckeditor5/issues/6639). ([commit](https://github.com/ckeditor/ckeditor5/commit/1264e63947c88123fdb2b9a8c301d100476e83a8))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Improved toolbar rendering time when multiple items are added or removed at once (e.g. during the editor initialization). Closes [#6194](https://github.com/ckeditor/ckeditor5/issues/6194). ([commit](https://github.com/ckeditor/ckeditor5/commit/266dfda77fe51ca824195e22d84ad7517840777d))
* Link's attribute element highlight is now `inlineHighlight()` - a public utility. ([commit](https://github.com/ckeditor/ckeditor5/commit/fc59dc4f9790c709fda493e00e6db41f4a1ae6be))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v20.0.0 => v21.0.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v20.0.0 => v21.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v20.0.0 => v21.0.0

Other releases:

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v20.0.0 => v21.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v20.0.0 => v21.0.0
</details>


## [20.0.0](https://github.com/ckeditor/ckeditor5/compare/v19.1.1...v20.0.0) (2020-06-24)

### Release highlights

We are happy to announce the release of CKEditor 5 v20.0.0.

This release brings some highly anticipated features:

* Support for [linking images](https://github.com/ckeditor/ckeditor5/issues/702).
* [Typing around widgets](https://github.com/ckeditor/ckeditor5/issues/407).
* An option to [automatically set the link protocol](https://github.com/ckeditor/ckeditor5/issues/4858).
* [Improved selection handling when working with links](https://github.com/ckeditor/ckeditor5/issues/1016).

New features were also accompanied by a set of bug fixes, to name a few:

* [Autoformatting will no longer change formatting when typing in an inline code](https://github.com/ckeditor/ckeditor5/issues/1239).
* The editor will no longer [crash if there is an HTML comment in the source data](https://github.com/ckeditor/ckeditor5/issues/5734).

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v20.0.0-with-linking-images-and-multi-cell-comments-released/

### Collaboration features

The CKEditor 5 Collaboration features changelog can be found here: https://ckeditor.com/collaboration/changelog.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[ckeditor5](https://www.npmjs.com/package/ckeditor5)**: Node `>=12.0.0` is required now.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `TableNavigation` plugin was renamed to `TableKeyboard`.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The values returned by the `TableWalker` iterator have changed. See [#6785](https://github.com/ckeditor/ckeditor5/issues/6785).
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Removed the `getWidgetTypeAroundPositions()` helper since the "Insert new paragraph" buttons are now visible regardless of the widget location in the document
* The `isTableWidget()` and `toTableWidget()` utility functions were removed.
* The functions `getSelectedTableWidget()` and `getTableWidgetAncestor()` from `table/utils` module were moved to the `table/utils/widget` module.
* The functions `getSelectedTableCells()`, `getTableCellsContainingSelection()`, `getSelectionAffectedTableCells()`, `getRowIndexes()`, `getColumnIndexes()`, and `isSelectionRectangular()` from `table/utils` module were moved to `table/utils/selection` module.
* The functions `getVerticallyOverlappingCells()`, `splitHorizontally()`, `getHorizontallyOverlappingCells()`, and `splitVertically()` from `table/utils` module were moved to `table/utils/structure` module.
* The functions `findAncestor()`, `updateNumericAttribute()`, `createEmptyTableCell()`, and `isHeadingColumnCell()` from `table/commands/utils` module were moved to `table/utils/common` module.
* The functions `getSingleValue()` and `addDefaultUnitToNumericValue()` from `table/commands/utils` module were moved to `table/utils/table-properties` module.
* The functions `cropTableToDimensions()` and `trimTableCellIfNeeded()` from `table/tableselection/croptable` module were moved to `table/utils/structure` module.
* The functions `repositionContextualBalloon()`, `getBalloonTablePositionData()`, and `getBalloonCellPositionData()` from `table/ui/utils` module were moved to `table/utils/ui/contextualballoon` module.
* The functions `getBorderStyleLabels()`, `getLocalizedColorErrorText()`, `getLocalizedLengthErrorText()`, `colorFieldValidator()`, `lengthFieldValidator()`, `lineWidthFieldValidator()`, `getBorderStyleDefinitions()`, `fillToolbar()`, and `getLabeledColorInputCreator()` from `table/ui/utils` module were moved to `table/utils/ui/table-properties` module.
* The `defaultColors` constant from `table/ui/utils` module was moved to `table/utils/ui/table-properties` module.

### Features

* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Introduced the linking images feature. Closes [#7330](https://github.com/ckeditor/ckeditor5/issues/7330). ([commit](https://github.com/ckeditor/ckeditor5/commit/cc0e69478e00012089857ba9ddf871aefa065677))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Introduced the `LinkImageUI` plugin that brings a UI to wrap images in links. Closes [#7331](https://github.com/ckeditor/ckeditor5/issues/7331). ([commit](https://github.com/ckeditor/ckeditor5/commit/878257e43d9b0135aacec841ed5e085ca8b5c3df))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: A fake caret (selection) should be displayed in the content when the link input has focus and the browser does not render the native caret (selection). Closes [#4721](https://github.com/ckeditor/ckeditor5/issues/4721). ([commit](https://github.com/ckeditor/ckeditor5/commit/ffac139a3e16dd013b68dfc1da34aba7bbd5b685))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Introduced the `config.link.defaultProtocol` option for adding it automatically to the links when it's not provided by the user in the link form. Closes [#4858](https://github.com/ckeditor/ckeditor5/issues/4858). ([commit](https://github.com/ckeditor/ckeditor5/commit/76c762e5a6549cb20de4331046bd324c992e95a0))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: Added styles for the fake link caret (selection) (see [#4721](https://github.com/ckeditor/ckeditor5/issues/4721)). ([commit](https://github.com/ckeditor/ckeditor5/commit/ffac139a3e16dd013b68dfc1da34aba7bbd5b685))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: Added styles for a "fake caret" brought by the `WidgetTypeAround` plugin (see [#6693](https://github.com/ckeditor/ckeditor5/issues/6693)). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb8dd9f0e616cd5d15c3dc673508679d3061f547))
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Created a public `isNonTypingKeystroke()` helper (see [#6693](https://github.com/ckeditor/ckeditor5/issues/6693)). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb8dd9f0e616cd5d15c3dc673508679d3061f547))
* **[upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload)**: Introduced the `config.simpleUpload.withCredentials` request configuration. Closes [#7282](https://github.com/ckeditor/ckeditor5/issues/7282). ([commit](https://github.com/ckeditor/ckeditor5/commit/5a34216fadebeaf3acc5b88002eec4b841a1b17d))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Created `isArrowKeyCode()`, `getLocalizedArrowKeyCodeDirection()`, and `isForwardArrowKeyCode()` helpers (see [#6693](https://github.com/ckeditor/ckeditor5/issues/6693)). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb8dd9f0e616cd5d15c3dc673508679d3061f547))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Implemented keyboard support for inserting paragraphs around block widgets using a "fake horizontal caret" (`WidgetTypeAround`). Both "Insert new paragraph" buttons are now always displayed for all block widgets regardless of their location in the document. Closes [#6693](https://github.com/ckeditor/ckeditor5/issues/6693), [#6825](https://github.com/ckeditor/ckeditor5/issues/6825), [#6694](https://github.com/ckeditor/ckeditor5/issues/6694). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb8dd9f0e616cd5d15c3dc673508679d3061f547))

### Bug fixes

* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Autoformatting should not occur inside an existing text with a model `code` attribute. Closes [#1239](https://github.com/ckeditor/ckeditor5/issues/1239). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad3562a2d3b6d5a1e8de276e7f032371ba260d63))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The editor should not crash when the initial data includes HTML comments. Closes [#5734](https://github.com/ckeditor/ckeditor5/issues/5734). ([commit](https://github.com/ckeditor/ckeditor5/commit/377d142d9089e92a83d27eb386a3ef722fce847f))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The model selection post-fixer should not set a new selection if the ranges before and after post-fixing are the same (see [#6693](https://github.com/ckeditor/ckeditor5/issues/6693)). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb8dd9f0e616cd5d15c3dc673508679d3061f547))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Backspace will no longer change the type of the trailing block. Closes [#6680](https://github.com/ckeditor/ckeditor5/issues/6680). ([commit](https://github.com/ckeditor/ckeditor5/commit/a87b364cce3fc70412031243ea0123333a91b821))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: The Font Family feature should apply the complete family value from the configuration when `config.fontFamily.supportAllValues` is `true`. Closes [#7285](https://github.com/ckeditor/ckeditor5/issues/7285). ([commit](https://github.com/ckeditor/ckeditor5/commit/c7b8f037891b885ae9d5d8c483747550ea8d6bd9))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The widget toolbar won't be shown if an empty collection of items was provided in the editor's configuration. Closes [#5857](https://github.com/ckeditor/ckeditor5/issues/5857). ([commit](https://github.com/ckeditor/ckeditor5/commit/64e53153737458bb0e64db16049b581e0ff8aae9))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The `src` and `alt` attributes for the image element will be always added to the editor's data. Even if they are empty. Closes [#5033](https://github.com/ckeditor/ckeditor5/issues/5033). ([commit](https://github.com/ckeditor/ckeditor5/commit/e81cbbba4bd0ccddc4ce0e59260c8f733bf12ca4))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Table multi-cell selection should not be possible with the keystrokes when the `TableSelection` plugin is disabled. Closes [#7483](https://github.com/ckeditor/ckeditor5/issues/7483). ([commit](https://github.com/ckeditor/ckeditor5/commit/2fee736a59ee6e1da2b85aff429398d96fd5c57b))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Copied and pasted table fragment should maintain the proper structure when the fragment contains merged table cells. Closes [#7245](https://github.com/ckeditor/ckeditor5/issues/7245). ([commit](https://github.com/ckeditor/ckeditor5/commit/17d7bd7390aeae841f6d2116a3528ea288367b3f))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Removing empty rows will no longer produce an invalid table model in certain scenarios. Closes [#6609](https://github.com/ckeditor/ckeditor5/issues/6609). ([commit](https://github.com/ckeditor/ckeditor5/commit/11d69fc808b4db5184ff90e0d0a2756761db4707))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The `BalloonToolbar` should not show up when multiple objects (for instance, table cells) are selected at a time. Closes [#6443](https://github.com/ckeditor/ckeditor5/issues/6443). ([commit](https://github.com/ckeditor/ckeditor5/commit/6036d4a4983aba4f5e43704300dc38aeba7369f3))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the `ignoreMarkers` option to the `Model#hasContent()` method. ([commit](https://github.com/ckeditor/ckeditor5/commit/61a6110dc204717bce88367b94a0287cc9d57816))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added Writer#cloneElement(). Closes [#6819](https://github.com/ckeditor/ckeditor5/issues/6819). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c7114014afcfd06a304183a3b077d84dec6db3e))
* **[horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line)**: Improved the look of horizontal lines in the editor content. Closes [#7418](https://github.com/ckeditor/ckeditor5/issues/7418). ([commit](https://github.com/ckeditor/ckeditor5/commit/e8bff81931d31fb341cd88f87977d6ef7db45a74))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The selection after inserting a link will land after the inserted element. Thanks to that a user will be able to type directly after the link without extending the link element. Closes [#1016](https://github.com/ckeditor/ckeditor5/issues/1016). ([commit](https://github.com/ckeditor/ckeditor5/commit/0bf66e47ee02484d694d786023cc153312409287))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: After clicking at the beginning or end of the link element, the selection will land before/after the clicked element. Thanks to that a user will be able to typing before or after the link element as normal text without extending the link. See [#1016](https://github.com/ckeditor/ckeditor5/issues/1016). ([commit](https://github.com/ckeditor/ckeditor5/commit/0bf66e47ee02484d694d786023cc153312409287))
* **[paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph)**: The `InsertParagraphCommand` should split ancestors of the `Position` to find a parent that allows `'paragraph'` (see [#6693](https://github.com/ckeditor/ckeditor5/issues/6693)). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb8dd9f0e616cd5d15c3dc673508679d3061f547))
* **[select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all)**: Improved the select-all feature so that it includes more and more content if the selection was anchored in a nested editable. Closes [#6621](https://github.com/ckeditor/ckeditor5/issues/6621). ([commit](https://github.com/ckeditor/ckeditor5/commit/6f59c78eb88335cabf0d39612b40c3b50fade41f))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Removed `options.asWidget` from most of the table converters which are never run in data pipeline. ([commit](https://github.com/ckeditor/ckeditor5/commit/b127f41163559b4c12ccf100be309c0dbf7c2355))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Marker on table cells should be downcasted to CSS classes on cells (instead of wrapping the content). Closes [#7360](https://github.com/ckeditor/ckeditor5/issues/7360). ([commit](https://github.com/ckeditor/ckeditor5/commit/48d80cb955eecae9e9f0afad51ac1c5cdc7c00c1))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Pasting a table into a table is more tolerant for whitespaces around a pasted table. Closes [#7379](https://github.com/ckeditor/ckeditor5/issues/7379). ([commit](https://github.com/ckeditor/ckeditor5/commit/669d54f688bf1017cb6c09c557cee084ea01be90))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Extracted `TableMouse` plugin from `TableSelection` plugin. Closes [#6757](https://github.com/ckeditor/ckeditor5/issues/6757). ([commit](https://github.com/ckeditor/ckeditor5/commit/4d2f5f9b9f298601b332f304da66333c52673cb8))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Refactor values returned by the `TableWalker` iterator. Closes [#6785](https://github.com/ckeditor/ckeditor5/issues/6785). ([commit](https://github.com/ckeditor/ckeditor5/commit/65cfa13ec9a3f983b94a27b5a86e031687fad25d))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Add `row`, `startColumn`, and `endColumn` options to `TableWalker` constructor. See [#6785](https://github.com/ckeditor/ckeditor5/issues/6785). ([commit](https://github.com/ckeditor/ckeditor5/commit/65cfa13ec9a3f983b94a27b5a86e031687fad25d))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v19.1.0 => v20.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v19.1.0 => v20.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v19.1.0 => v20.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v19.1.0 => v20.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v19.0.2 => v20.0.0

Other releases:

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v19.0.2 => v20.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v19.0.2 => v20.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v19.0.2 => v20.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v19.0.2 => v20.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v19.0.2 => v20.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v19.1.0 => v20.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v19.0.2 => v20.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v19.0.1 => v20.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v19.0.1 => v20.0.0
</details>


## [19.1.1](https://github.com/ckeditor/ckeditor5/compare/v19.1.0...v19.1.1) (2020-05-29)

### Bug fixes

* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: The paste from Office feature should retain background and font styles when pasting tables. Closes [#7275](https://github.com/ckeditor/ckeditor5/issues/7275). ([commit](https://github.com/ckeditor/ckeditor5/commit/67a469a555a47d9d29ddeab64bebfda9a9998bcc))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v19.0.1 => v19.0.2
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v19.0.1 => v19.0.2
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v19.0.1 => v19.0.2
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v19.0.1 => v19.0.2
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v19.0.1 => v19.0.2
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v19.0.1 => v19.0.2
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v19.0.1 => v19.0.2
</details>


## [19.1.0](https://github.com/ckeditor/ckeditor5/compare/v19.0.0...v19.1.0) (2020-05-27)

### Release highlights

We are happy to announce the release of CKEditor 5 v19.1.0.

This release further refines the table feature, brings a helper for convenient typing in tight places before or after widgets (such as images or tables) and brings a major change in our code infrastructure. Most notable enhancements are:

* Pasting a table into a selected table fragment &mdash; which marks the end of the [Table selection stage III](https://github.com/ckeditor/ckeditor5/issues/6297) task.
* A new [widget feature that allows typing before or after a widget](https://github.com/ckeditor/ckeditor5/issues/6689) when there is no space around it.
* [Project migration to a monorepo architecture](https://github.com/ckeditor/ckeditor5/issues/6466).

But we did not stop there, as the release comes with several bug fixes, too:

* [Entities handling in code blocks](https://github.com/ckeditor/ckeditor5/issues/5901).
* [Potential editor crash when removing a column](https://github.com/ckeditor/ckeditor5/issues/6789).
* [Editor crash when inserting a table row or column with another widget selected in the cell](https://github.com/ckeditor/ckeditor5/issues/6607).

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v19.1.1-with-table-enhancements-typing-around-widgets-and-print-to-PDF-feature/

### Collaboration features

The CKEditor 5 collaboration features changelog can be found here: https://ckeditor.com/collaboration/changelog.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: The `MediaEmbedUI#form` property was removed from the API.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `cropTable()` utility method was removed. Use the [`cropTableToDimensions()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_table_tableselection_croptable.html#static-function-cropTableToDimensions) method instead.
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: A new custom `--ck-color-focus-border-coordinates` CSS property was added and the existing `--ck-color-focus-border` property now uses it internally. If your integration overrides the latter, we recommend you update the former to avoid compatibility issues with various editor UI features.

### Features

* **[paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph)**: Implemented the [`InsertParagraphCommand`](https://ckeditor.com/docs/ckeditor5/latest/api/module_paragraph_insertparagraphcommand-InsertParagraphCommand.html) registered as `'insertParagraph'` in the editor. Closes [#6823](https://github.com/ckeditor/ckeditor5/issues/6823), [#7229](https://github.com/ckeditor/ckeditor5/issues/7229). ([commit](https://github.com/ckeditor/ckeditor5/commit/126701895d2bff8fb0ded7b4f4bf5e26d36ba7d7))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Introduced support for pasting tables into a selected table fragment. Closes [#6120](https://github.com/ckeditor/ckeditor5/issues/6120). ([commit](https://github.com/ckeditor/ckeditor5/commit/1b426397f9e2d6762681abdef5e99e6e101e25fa))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Introduced table cell selection using keyboard. Closes [#6115](https://github.com/ckeditor/ckeditor5/issues/6115), [#3203](https://github.com/ckeditor/ckeditor5/issues/3203). ([commit](https://github.com/ckeditor/ckeditor5/commit/b567de402d1438790c3e7314d5b7ed330b308d9d))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: Brought styles for the feature allowing users to type in tight spots around block widgets (see [#407](https://github.com/ckeditor/ckeditor5/issues/407)). ([commit](https://github.com/ckeditor/ckeditor5/commit/dbf24a29ac64f52bceb2efc106b50c736c16f1c3))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Brought the feature allowing users to type in tight spots around block widgets where web browsers do not allow the caret to be placed (see [#407](https://github.com/ckeditor/ckeditor5/issues/407)). Closes [#6740](https://github.com/ckeditor/ckeditor5/issues/6740), [#6688](https://github.com/ckeditor/ckeditor5/issues/6688), [#6689](https://github.com/ckeditor/ckeditor5/issues/6689), [#6695](https://github.com/ckeditor/ckeditor5/issues/6695). ([commit](https://github.com/ckeditor/ckeditor5/commit/dbf24a29ac64f52bceb2efc106b50c736c16f1c3))

### Bug fixes

* **[cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services)**: A `Token` instance will be destroyed by the `CloudServices` context plugin. Closes [#7248](https://github.com/ckeditor/ckeditor5/issues/7248). ([commit](https://github.com/ckeditor/ckeditor5/commit/6b60cb630b72105577696b6ccc291c17cf230c40))
* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: Fixed conversion of some entities (like `&nbsp;`, `&amp;`) in a code block. Closes [#5901](https://github.com/ckeditor/ckeditor5/issues/5901). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad227917a6b85edbc41dca314d9d4caec97b56f5))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: Made it possible to use the `mediaEmbed` button more than once (in more than one toolbar). Closes [#6333](https://github.com/ckeditor/ckeditor5/issues/6333). ([commit](https://github.com/ckeditor/ckeditor5/commit/3011e37768225dfe928f3e3321753fc04ca58ff2))
* **[media-mebed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-mebed)**: The media widget conversion will no longer discard widget internals (drag or resize handlers, buttons to insert paragraphs, etc.) injected by other features when converting the URL (see [#407](https://github.com/ckeditor/ckeditor5/issues/407)). ([commit](https://github.com/ckeditor/ckeditor5/commit/dbf24a29ac64f52bceb2efc106b50c736c16f1c3))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Setting the column as a header will now properly split column-spanned cells. Closes [#6658](https://github.com/ckeditor/ckeditor5/issues/6658). ([commit](https://github.com/ckeditor/ckeditor5/commit/9531af43623b6e15aff27872a83ac1dd22ea8654))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table properties balloon should always be visible if a table is bigger than the visible viewport. Closes [#6190](https://github.com/ckeditor/ckeditor5/issues/6190). ([commit](https://github.com/ckeditor/ckeditor5/commit/75d6912a3e667ef075f4283ec2d45de05d4da8b6))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: When the state is restored or the user enters a color value manually, the color input will now properly match the color label (if any is available). Closes [#6791](https://github.com/ckeditor/ckeditor5/issues/6791). ([commit](https://github.com/ckeditor/ckeditor5/commit/f18f4fd31e16a11b32dd433d3f40fd0933e2bf26))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The editor will not crash when removing columns next to row-spanned cells. Closes [#6789](https://github.com/ckeditor/ckeditor5/issues/6789). ([commit](https://github.com/ckeditor/ckeditor5/commit/84e3310c33c770489777906bc36fd037b5afc86b))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table properties button should not be enabled if all the property commands are disabled. Closes [#6679](https://github.com/ckeditor/ckeditor5/issues/6679). ([commit](https://github.com/ckeditor/ckeditor5/commit/056e06e1e552a609aaad4108e51272cf4a2644c0))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Table heading rows should be properly updated after removing rows as a side effect of merging cells. Closes [#6667](https://github.com/ckeditor/ckeditor5/issues/6667). ([commit](https://github.com/ckeditor/ckeditor5/commit/72f6491b8dfd72f897904fbfad54310a0d2ef9b8))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Empty table rows are properly handled during the conversion and layout post-fixing. Closes [#3274](https://github.com/ckeditor/ckeditor5/issues/3274). ([commit](https://github.com/ckeditor/ckeditor5/commit/fb5fe8b8950cf11700d691bd4369b8bb8aa12cf2))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: <kbd>Shift</kbd>+click will now use an anchor cell if there is any. Closes [#6453](https://github.com/ckeditor/ckeditor5/issues/6453). ([commit](https://github.com/ckeditor/ckeditor5/commit/d799b9d148f2e8a10784e0cf5fd7ea3a69b93bd1))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Fixed insert table row/column commands when a widget is selected inside a table cell. Closes [#6607](https://github.com/ckeditor/ckeditor5/issues/6607). ([commit](https://github.com/ckeditor/ckeditor5/commit/3d85aca751f45be923210edfe598780eccacd0dc))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Table keyboard navigation should not alter the native <kbd>Shift</kbd>+Arrow behavior inside a table cell. Closes [#6641](https://github.com/ckeditor/ckeditor5/issues/6641). ([commit](https://github.com/ckeditor/ckeditor5/commit/88543374bc1cac78e6bbc917759aa6a512cfad47))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Merging cells no longer wraps the text in a `<span>` element rather than paragraph in a certain scenario. Closes [#6260](https://github.com/ckeditor/ckeditor5/issues/6260). ([commit](https://github.com/ckeditor/ckeditor5/commit/fbec6b2af7a8a45c189388b537ed48d223b9f18a))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The widget toolbar should always be visible even if the widget is bigger than the visible viewport (see [#6190](https://github.com/ckeditor/ckeditor5/issues/6190)). ([commit](https://github.com/ckeditor/ckeditor5/commit/75d6912a3e667ef075f4283ec2d45de05d4da8b6))

### Other changes

* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Renamed `MentionAttribute._uid` to a `MentionAttribute.uid` as it needs to be used by integrators when implementing custom converters. Closes [#6587](https://github.com/ckeditor/ckeditor5/issues/6587). ([commit](https://github.com/ckeditor/ckeditor5/commit/94a6952a6a07146e5ac6daad8e836262d2381664))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Adding a new row in the table copies the structure of the selected row. Closes [#6549](https://github.com/ckeditor/ckeditor5/issues/6549). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f2091158ed8bfaba5ddf91f89308023a345351c))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Display a human readable color value in the color input field. Closes [#6241](https://github.com/ckeditor/ckeditor5/issues/6241). ([commit](https://github.com/ckeditor/ckeditor5/commit/af7928f1febebeef1f4b0243169dd01415531c1d))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Changed the insert row above/below buttons order in the table dropdown. Closes [#6702](https://github.com/ckeditor/ckeditor5/issues/6702). ([commit](https://github.com/ckeditor/ckeditor5/commit/a78bca8806064ca7acdd969222bb11b853ca4f0c))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v19.0.0 => v19.1.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v19.0.0 => v19.1.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v19.0.0 => v19.1.0

Releases containing new features:

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v19.0.0 => v19.1.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v19.0.0 => v19.1.0

Other releases:

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v19.0.0 => v19.0.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v19.0.0 => v19.0.1
</details>


## [19.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v18.0.0...v19.0.0) (2020-04-29)

We are happy to announce the release of CKEditor 5 v19.0.0.

Refer to the [main changelog](https://github.com/ckeditor/ckeditor5/releases/tag/v19.0.0) to find out about all the new features, improvements and possible breaking changes.

Blog post coming soon...

### Dependencies

New packages:

* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): [v19.0.0](https://github.com/ckeditor/ckeditor5-select-all/releases/tag/v19.0.0)

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v19.0.0)

Major releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v19.0.0)

Major releases (dependencies of those packages have breaking changes):

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor-cloud-services-core/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-indent/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v19.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v18.0.0 => [v19.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v19.0.0)


## [18.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v17.0.0...v18.0.0) (2020-03-19)

We are happy to announce the release of CKEditor 5 v18.0.0.

Refer to the [main changelog](https://github.com/ckeditor/ckeditor5/releases/tag/v18.0.0) to find out about all the new features, improvements and possible breaking changes.

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v18.0.0-with-custom-table-selection-and-pasting-nested-lists-from-Word/

### Features

Besides new features introduced by the dependencies, this version also introduces the following features:

* Added the [Automatic text transformation](https://ckeditor.com/docs/ckeditor5/latest/features/text-transformation.html) feature to the build. See [ckeditor/ckeditor5#6304](https://github.com/ckeditor/ckeditor5/issues/6304). ([21ca070](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/21ca070))

### Dependencies

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v18.0.0)

Major releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v18.0.0)

Major releases (dependencies of those packages have breaking changes):

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor-cloud-services-core/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-indent/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v18.0.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v17.0.0 => [v18.0.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v18.0.0)


## [17.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v16.0.0...v17.0.0) (2020-02-19)

We are happy to announce the release of CKEditor 5 v17.0.0.

Refer to the [main changelog](https://github.com/ckeditor/ckeditor5/releases/tag/v17.0.0) to find out about all the new features, improvements and possible breaking changes.

https://ckeditor.com/blog/CKEditor-5-v17.0.0-with-table-styles-special-characters-and-performance-improvements/

### BREAKING CHANGES

The document editor build does not contain the highlight feature anymore. It was replaced with the font color and font background color features.

If you expect that the highlight feature has already been used by the users of the editor, either use the [simple highlight to font color conversion plugin](https://codepen.io/ckeditor/pen/oNXzGeO?editors=1010) or install the highlight feature back. Otherwise the markup created in the past by that feature will be filtered out the next time it is loaded into the editor. If you would like to migrate the existing content yourself, you need to replace `<span>` elements created by the highlight feature with `<span style="color:?">` or `<span style="background-color:?">`, depending on the configured highlight markers.

### Other changes

* Added font color and font background color features and removed the highlight feature. Closes [ckeditor/ckeditor5#5886](https://github.com/ckeditor/ckeditor5/issues/5886). ([1f334e3](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/1f334e3))

### Dependencies

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v17.0.0)

Major releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v17.0.0)

Releases containing new features:

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v17.0.0)

Major releases (dependencies of these packages have breaking changes):

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor-cloud-services-core/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-indent/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v17.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v16.0.0 => [v17.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v17.0.0)


## [16.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v15.0.0...v16.0.0) (2019-12-04)

We are happy to announce the release of CKEditor 5 v16.0.0. This release introduces one of the most community-requested features: [code blocks](https://ckeditor.com/docs/ckeditor5/latest/features/code-blocks.html). We included a new [restricted editing](https://ckeditor.com/docs/ckeditor5/latest/features/restricted-editing.html) plugin, too.

We also did some changes in the default UI colors to improve accessibility. In addition to that, as always, the release contains many [more improvements and bug fixes](https://github.com/ckeditor/ckeditor5/issues?q=is%3Aissue+milestone%3A%22iteration+28%22+is%3Aclosed+-label%3Atype%3Adocs+-label%3Atype%3Atask+-label%3Apackage%3Arestricted-editing+-label%3Apackage%3Acode-block+-label%3Atype%3Afeature).

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v16.0.0-with-code-blocks-and-restricted-editing/

### Other changes

* Replaced UglifyJS with Terser. See [ckeditor/ckeditor5#1353](https://github.com/ckeditor/ckeditor5/issues/1353). ([3d3d2fa](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/3d3d2fa))

### Dependencies

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v16.0.0)

Major releases (dependencies of those packages have breaking changes):

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor-cloud-services-core/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-indent/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v16.0.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v15.0.0 => [v16.0.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v16.0.0)


## [15.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v12.4.0...v15.0.0) (2019-10-23)

We are happy to announce the release of CKEditor 5 v15.0.0. This editor version introduces support for inserting [horizontal lines](https://ckeditor.com/docs/ckeditor5/latest/features/horizontal-line.html), [page breaks](https://ckeditor.com/docs/ckeditor5/latest/features/page-break.html) and [SVG images](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imageupload-ImageUploadConfig.html#member-types) into the WYSIWYG editor. It also allows you to define the [document title section](https://ckeditor.com/docs/ckeditor5/latest/features/title.html) thanks to the new title plugin. The editor toolbar is now responsive which improves the UX, especially for mobile devices.

Regarding the build itself, we added the [indentation](https://ckeditor.com/docs/ckeditor5/latest/features/indent.html) button to the build's default setup. See [ckeditor/ckeditor5#1844](https://github.com/ckeditor/ckeditor5/issues/1844). ([dc715cd](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/dc715cd))

From other news, we changed the versioning policy. Now, all packages will have the same major version, hence, we needed to release this one as v15.0.0 (we skipped versions 13.0.0 and 14.0.0). Read more about the [new versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html).

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v15.0.0-with-horizontal-line-page-break-responsive-toolbar-and-SVG-upload-support/

### Dependencies

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v14.0.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v14.0.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v12.1.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v14.0.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v11.1.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v15.0.0)

Major releases (dependencies of those packages have breaking changes):

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v3.0.1 => [v15.0.0](https://github.com/ckeditor/ckeditor-cloud-services-core/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v11.2.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v11.1.4 => [v15.0.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v11.1.3 => [v15.0.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v12.0.2 => [v15.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v12.3.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v12.2.2 => [v15.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v11.1.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v11.2.2 => [v15.0.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v10.1.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-indent/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v11.1.2 => [v15.0.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v11.1.4 => [v15.0.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v11.1.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v14.0.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v14.2.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v12.2.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v11.0.5 => [v15.0.0](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v12.0.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v15.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v14.0.0 => [v15.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v15.0.0)


## [12.4.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v12.3.1...v12.4.0) (2019-08-26)

This release brings a huge set of new features: [image resizing](https://ckeditor.com/ckeditor5/build/docs/ckeditor5/latest/features/image.html#resizing-images), [to-do lists](https://ckeditor.com/ckeditor5/build/docs/ckeditor5/latest/features/todo-lists.html), [support for RTL languages](https://ckeditor.com/ckeditor5/build/docs/ckeditor5/latest/features/ui-language.html), [simple upload adapter](https://ckeditor.com/ckeditor5/build/docs/ckeditor5/latest/features/image-upload/simple-upload-adapter.html), [support for pasting from Google Docs](https://ckeditor.com/ckeditor5/build/docs/ckeditor5/latest/features/paste-from-office/paste-from-google-docs.html), [mathematic formulas](https://ckeditor.com/ckeditor5/build/docs/ckeditor5/latest/features/mathtype.html), and [spelling and grammar checking](https://ckeditor.com/ckeditor5/build/docs/ckeditor5/latest/features/spell-checker.html). In addition to that, as always, it contains many improvements and bug fixes.

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v13.2.1 => [v14.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v14.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v13.1.2 => [v14.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v14.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v13.0.2 => [v14.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v14.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v13.0.2 => [v14.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v14.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v11.1.1 => [v12.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v13.0.1 => [v14.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v14.0.0)

Minor releases:

* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v11.1.3 => [v11.2.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v11.2.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v12.2.1 => [v12.3.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v12.3.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v11.0.4 => [v11.1.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v12.0.4 => [v12.1.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v12.1.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v11.0.4 => [v11.1.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v14.1.1 => [v14.2.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v14.2.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v12.1.1 => [v12.2.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v12.2.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v11.0.4 => [v11.1.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v11.1.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v11.1.3 => [v11.1.4](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v11.1.4)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v11.1.2 => [v11.1.3](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v11.1.3)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v12.0.1 => [v12.0.2](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v12.0.2)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v12.2.1 => [v12.2.2](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v12.2.2)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v11.2.1 => [v11.2.2](https://github.com/ckeditor/ckeditor5-font/releases/tag/v11.2.2)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v11.1.1 => [v11.1.2](https://github.com/ckeditor/ckeditor5-link/releases/tag/v11.1.2)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v11.1.3 => [v11.1.4](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v11.1.4)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v11.0.5)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v11.0.4 => [v11.0.5](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v11.0.5)

### Other changes

* Bumped style-loader to v1.0.0. Aligned the webpack config to the new loader API. See [ckeditor/ckeditor5#1945](https://github.com/ckeditor/ckeditor5/issues/1945). ([218070b](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/218070b))
* The issue tracker for this package was moved to https://github.com/ckeditor/ckeditor5/issues. See [ckeditor/ckeditor5#1988](https://github.com/ckeditor/ckeditor5/issues/1988). ([0931639](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/0931639))


## [12.3.1](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v12.3.0...v12.3.1) (2019-07-10)

We are happy to report the release of CKEditor 5 v12.3.0 (and v12.3.1 with a small fix). This release introduces several new features ([word count](https://ckeditor.com/docs/ckeditor5/latest/features/word-count.html), [automatic text transformations](https://ckeditor.com/docs/ckeditor5/latest/features/text-transformation.html), [ability to control link attributes such as `target`](https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators) and [block indentation](https://ckeditor.com/docs/ckeditor5/latest/features/indent.html)). It also brings improvements to existing features (e.g. the ["document colors" section](https://ckeditor.com/docs/ckeditor5/latest/features/font.html#documents-colors) in the font color picker dropdowns) and many bug fixes.

### Dependencies

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v11.1.2 => [v11.1.3](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v11.1.3)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v11.1.2 => [v11.1.3](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v11.1.3)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v11.1.1 => [v11.1.2](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v11.1.2)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v12.0.0 => [v12.0.1](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v12.0.1)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v12.2.0 => [v12.2.1](https://github.com/ckeditor/ckeditor5-core/releases/tag/v12.2.1)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v12.2.0 => [v12.2.1](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v12.2.1)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v13.2.0 => [v13.2.1](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v13.2.1)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v11.2.0 => [v11.2.1](https://github.com/ckeditor/ckeditor5-font/releases/tag/v11.2.1)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v13.1.1 => [v13.1.2](https://github.com/ckeditor/ckeditor5-image/releases/tag/v13.1.2)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v11.1.0 => [v11.1.1](https://github.com/ckeditor/ckeditor5-link/releases/tag/v11.1.1)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v12.0.3 => [v12.0.4](https://github.com/ckeditor/ckeditor5-list/releases/tag/v12.0.4)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v11.1.2 => [v11.1.3](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v11.1.3)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v13.0.1 => [v13.0.2](https://github.com/ckeditor/ckeditor5-table/releases/tag/v13.0.2)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v14.1.0 => [v14.1.1](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v14.1.1)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v12.1.0 => [v12.1.1](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v12.1.1)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v13.0.1 => [v13.0.2](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v13.0.2)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v11.0.4)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v11.1.0 => [v11.1.1](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v11.1.1)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v13.0.0 => [v13.0.1](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v13.0.1)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v11.0.3 => [v11.0.4](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v11.0.4)


## [12.3.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v12.2.0...v12.3.0) (2019-07-04)

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v11.0.2 => [v12.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v12.1.1 => [v13.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v13.0.0)

Minor releases:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v12.1.1 => [v12.2.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v12.2.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v12.1.1 => [v12.2.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v12.2.0)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v13.1.1 => [v13.2.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v13.2.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v11.0.2 => [v11.1.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v14.0.0 => [v14.1.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v14.1.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v12.0.2 => [v12.1.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v12.1.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v11.0.2 => [v11.1.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v11.1.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v11.1.1 => [v11.1.2](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v11.1.2)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v11.1.1 => [v11.1.2](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v11.1.2)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v11.1.0 => [v11.1.1](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v11.1.1)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v11.1.1 => [v11.1.2](https://github.com/ckeditor/ckeditor5-font/releases/tag/v11.1.2)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v13.1.0 => [v13.1.1](https://github.com/ckeditor/ckeditor5-image/releases/tag/v13.1.1)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v12.0.2 => [v12.0.3](https://github.com/ckeditor/ckeditor5-list/releases/tag/v12.0.3)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v11.1.1 => [v11.1.2](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v11.1.2)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v13.0.0 => [v13.0.1](https://github.com/ckeditor/ckeditor5-table/releases/tag/v13.0.1)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v13.0.0 => [v13.0.1](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v13.0.1)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v11.0.3)


## [12.2.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v12.1.0...v12.2.0) (2019-06-05)

We are happy to report the release of CKEditor 5 v12.2.0. This is a minor release with many bug fixes and a new UI feature which allows to navigating between multiple balloons.

**Note:** The `config.table.toolbar` property that had been deprecated last year has now been completely removed. Use [`config.table.contentToolbar`](https://ckeditor.com/docs/ckeditor5/latest/api/module_table_table-TableConfig.html#member-contentToolbar) instead.

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v12.0.1 => [v13.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v13.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v13.0.1 => [v14.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v14.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v12.1.0 => [v13.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v13.0.0)

Minor releases:

* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v11.0.1 => [v11.1.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v13.0.1 => [v13.1.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v13.1.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v11.1.0 => [v11.1.1](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v11.1.1)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v11.1.0 => [v11.1.1](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v11.1.1)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v12.1.0 => [v12.1.1](https://github.com/ckeditor/ckeditor5-core/releases/tag/v12.1.1)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v12.1.0 => [v12.1.1](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v12.1.1)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v13.1.0 => [v13.1.1](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v13.1.1)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v11.1.0 => [v11.1.1](https://github.com/ckeditor/ckeditor5-font/releases/tag/v11.1.1)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-link/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v12.0.1 => [v12.0.2](https://github.com/ckeditor/ckeditor5-list/releases/tag/v12.0.2)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v11.1.0 => [v11.1.1](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v11.1.1)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v12.0.1 => [v12.0.2](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v12.0.2)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v12.1.0 => [v12.1.1](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v12.1.1)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v11.0.2)


## [12.1.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v12.0.0...v12.1.0) (2019-04-10)

We are happy to report the release of CKEditor 5 v12.1.0. This release introduces 3 new features ([mentions](https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html), [font color and background color](https://ckeditor.com/docs/ckeditor5/latest/features/font.html) and [remove format](https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html)).

Check out the linked guides for information how to install and configure those features in your editor.

### Dependencies

Minor releases:

* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v11.0.0 => [v11.1.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v11.0.0 => [v11.1.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v12.0.0 => [v12.1.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v12.1.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v12.0.0 => [v12.1.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v12.1.0)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v13.0.0 => [v13.1.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v13.1.0)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v11.0.0 => [v11.1.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v11.0.0 => [v11.1.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v12.0.0 => [v12.1.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v12.1.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v12.0.0 => [v12.1.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v12.1.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v13.0.0 => [v13.0.1](https://github.com/ckeditor/ckeditor5-image/releases/tag/v13.0.1)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-link/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v12.0.0 => [v12.0.1](https://github.com/ckeditor/ckeditor5-list/releases/tag/v12.0.1)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v12.0.0 => [v12.0.1](https://github.com/ckeditor/ckeditor5-table/releases/tag/v12.0.1)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v13.0.0 => [v13.0.1](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v13.0.1)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v12.0.0 => [v12.0.1](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v12.0.1)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v11.0.1)


## [12.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v11.2.0...v12.0.0) (2019-02-28)

We are happy to report the release of CKEditor 5 v12.0.0. This release introduces a new editor (called "[Balloon block editor](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/balloon-block-editor.html)"), the [editor content placeholder](https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html) and support for inline widgets (watch [this PR](https://github.com/ckeditor/ckeditor5/pull/1587) for updates). In addition to that we enabled media embeds and images in tables and resolved the issue where `editor.getData()` returned `<p>&nbsp;</p>` for empty content (now it returns an empty string in this case).

Besides new features, this release contains many improvements to stability, [performance](https://github.com/ckeditor/ckeditor5-utils/issues/269) and API. The last group of changes contain many breaking ones. Make sure to read the [main package's changelog](https://github.com/ckeditor/ckeditor5/releases/tag/v12.0.0).

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v10.1.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v10.1.1 => [v11.0.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v10.0.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v10.1.1 => [v11.0.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v11.1.0 => [v12.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v11.0.2 => [v12.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v12.0.0 => [v13.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v13.0.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v10.1.3 => [v11.0.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v10.1.3 => [v11.0.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v10.1.1 => [v11.0.0](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v12.0.0 => [v13.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v13.0.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v10.1.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v11.0.3 => [v12.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v10.1.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v10.0.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v11.0.1 => [v12.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v12.0.0 => [v13.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v13.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v11.0.2 => [v12.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v11.2.0 => [v12.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v10.0.4 => [v11.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v11.1.0 => [v12.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v10.3.1 => [v11.0.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v11.0.0)

### BREAKING CHANGES

* Upgraded minimal versions of Node to `8.0.0` and npm to `5.7.1`. See: [ckeditor/ckeditor5#1507](https://github.com/ckeditor/ckeditor5/issues/1507). ([612ea3c](https://github.com/ckeditor/ckeditor5-cloud-services/commit/612ea3c))


## [11.2.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v11.1.1...v11.2.0) (2018-12-05)

We are happy to report the release of CKEditor 5 v11.2.0. This editor version brings the long-awaited [support for paste from Office](https://ckeditor.com/docs/ckeditor5/latest/features/paste-from-word.html) (e.g. from Microsoft Word), [integration with CKFinder file manager](https://ckeditor.com/docs/ckeditor5/latest/features/ckfinder.html), improved [image upload documentation](https://ckeditor.com/docs/ckeditor5/latest/features/image-upload.html), improved [editor UI on mobile devices](https://github.com/ckeditor/ckeditor5/issues/416#issuecomment-430246472), as well as many smaller features and improvements.

Blog post is comming soon...

### Dependencies

New packages:

* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): [v10.0.0](https://github.com/ckeditor/ckeditor5-ckfinder/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): [v10.0.0](https://github.com/ckeditor/ckeditor5-paste-from-office/releases/tag/v10.0.0)

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v11.0.0 => [v12.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v11.0.0 => [v12.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v12.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v11.1.0 => [v12.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v12.0.0)

Minor releases:

* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v10.0.3 => [v10.1.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v11.0.1 => [v11.1.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v10.0.4 => [v10.1.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-media-embed/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v11.1.0 => [v11.2.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v11.2.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v11.0.0 => [v11.1.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v11.1.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v10.1.0 => [v10.1.1](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v10.1.1)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v10.1.0 => [v10.1.1](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v10.1.1)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v10.1.2 => [v10.1.3](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v10.1.3)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v10.1.2 => [v10.1.3](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v10.1.3)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-font/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v10.1.0 => [v10.1.1](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v10.1.1)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v11.0.2 => [v11.0.3](https://github.com/ckeditor/ckeditor5-list/releases/tag/v11.0.3)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-table/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v10.3.0 => [v10.3.1](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v10.3.1)


## [11.1.1](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v11.1.0...v11.1.1) (2018-10-11)

This releases fixes the README of this package on npm.


## [11.1.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v11.0.1...v11.1.0) (2018-10-08)

This is a minor release. Besides updating all used CKEditor 5 packages to their latest versions it brings the [Media embed](https://ckeditor.com/docs/ckeditor5/latest/features/media-embed.html) feature which is now enabled in this build by default.

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v11.1.0-released/

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v10.2.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v10.2.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v10.1.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v11.0.0)

Minor releases:

* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v10.0.2 => [v10.1.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v11.0.0 => [v11.1.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v11.0.0 => [v11.1.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v11.1.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v10.2.0 => [v10.3.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v10.3.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-core/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v10.1.1 => [v10.1.2](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v10.1.2)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v10.1.1 => [v10.1.2](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v10.1.2)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-font/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v10.0.3 => [v10.0.4](https://github.com/ckeditor/ckeditor5-link/releases/tag/v10.0.4)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v11.0.1 => [v11.0.2](https://github.com/ckeditor/ckeditor5-list/releases/tag/v11.0.2)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v10.2.1 => [v10.2.2](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v10.2.2)

### Features

Besides new features introduced by the dependencies, this version also introduces the following features:

* Added the table and media embed features to the build. See [ckeditor/ckeditor5#1247](https://github.com/ckeditor/ckeditor5/issues/1247). ([ed02fb2](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/ed02fb2))


## [11.0.1](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v11.0.0...v11.0.1) (2018-07-18)

Internal changes only (updated dependencies, documentation, etc.).


## [11.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v10.1.0...v11.0.0) (2018-07-18)

### Release notes

This is a major releases that introduces many smaller features, dozens of bug fixes and a couple of infrastructure changes (an upgrade to `webpack@4`, simplified structure of the build repository). Additionally, the `DecoupledEditor#element` property was renamed to `DecoupledEditor#sourceElement`.

If you maintain a [custom build of CKEditor 5](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) or [integrate CKEditor 5 from source](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#scenario-2-building-from-source), we recommend reading the [migration guide](https://github.com/ckeditor/ckeditor5/issues/1136).

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v11.0.0-released/

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v10.1.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v10.0.2 => [v11.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v10.1.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v10.0.1 => [v11.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v11.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v10.1.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v11.0.0)

Minor releases:

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v10.1.0 => [v10.2.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v10.2.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v10.1.0 => [v10.2.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v10.2.0)
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v10.1.0 => [v10.2.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v10.2.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v10.1.0 => [v10.2.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v10.2.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v10.1.0 => [v10.1.1](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v10.1.1)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v10.1.0 => [v10.1.1](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v10.1.1)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-font/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v10.0.2 => [v10.0.3](https://github.com/ckeditor/ckeditor5-link/releases/tag/v10.0.3)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v11.0.0 => [v11.0.1](https://github.com/ckeditor/ckeditor5-list/releases/tag/v11.0.1)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v10.0.2)

### Other changes

* Changed the structure of the build repository. Closes [ckeditor/ckeditor5#1038](https://github.com/ckeditor/ckeditor5/issues/1038). ([cd72eca](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/cd72eca))
* Updated `webpack` to version 4 (applies to custom builds only). ([dfdde57](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/dfdde57))

### BREAKING CHANGES

If you maintain a custom build, we recommend reading the [migration guide](https://github.com/ckeditor/ckeditor5/issues/1136). Closes [ckeditor/ckeditor5#1038](https://github.com/ckeditor/ckeditor5/issues/1038).

* CKEditor 5 environment was updated to use `webpack@4`. `webpack@4` introduced major changes in its configuration and plugin system. CKEditor 5 tools and build configuration were updated to work with `webpack@4` and will not work with `webpack@3`.
* The structure of the build repository was changed. The `build-config.js` file was removed and the build configuration is now kept only in the `src/ckeditor.js` file.


## [10.1.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v10.0.1...v10.1.0) (2018-06-21)

This is a minor release that introduces many bug fixes and new features. Most notable ones are the table plugin and support for inserting soft breaks with <kbd>Shift</kbd>+<kbd>Enter</kbd>.

You can read more in the [blog post](https://ckeditor.com/blog/CKEditor-5-v10.1.0-released/).

### Dependencies

New packages:

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): [v10.0.0](https://github.com/ckeditor/ckeditor5-table/releases/tag/v10.0.0)

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v10.0.0 => [v11.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v11.0.0)

Minor releases:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v10.1.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v10.0.0 => [v10.1.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v10.1.0)

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-font/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v10.0.1 => [v10.0.2](https://github.com/ckeditor/ckeditor5-link/releases/tag/v10.0.2)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v10.0.1)

### Features

Besides new features introduced by the dependencies, this version also introduces the following features:

* Added the table feature to the build. Closes [#12](https://github.com/ckeditor/ckeditor5-build-decoupled-document/issues/12). ([58bfd46](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/58bfd46))


## [10.0.1](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v10.0.0...v10.0.1) (2018-05-22)

### Dependencies

Patch releases (bug fixes, internal changes):

* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v10.0.1)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v10.0.0 => [v10.0.1](https://github.com/ckeditor/ckeditor5-link/releases/tag/v10.0.1)


## [10.0.0](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v1.0.0-beta.4...v10.0.0) (2018-04-25)

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-core/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-font/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-image/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-link/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-list/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v10.0.0)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v1.0.0-beta.4 => [v10.0.0](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v10.0.0)

### Other changes

* Changed the license to GPL2+ only. See [ckeditor/ckeditor5#991](https://github.com/ckeditor/ckeditor5/issues/991). ([f5147e8](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/f5147e8))

### BREAKING CHANGES

* The license under which CKEditor 5 is released has been changed from a triple GPL, LGPL and MPL license to a GPL2+ only. See [ckeditor/ckeditor5#991](https://github.com/ckeditor/ckeditor5/issues/991) for more information.


## [1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2018-04-19)

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-core/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-font/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-image/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-link/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-list/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v1.0.0-beta.4)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v1.0.0-beta.2 => [v1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v1.0.0-beta.4)

### Other changes

* Image styles's default configuration has been changed to: left-aligned, right-aligned image and full-size image (instead of the typical: side-image and full-size image). This change makes content previously created with this build incompatible with the new setup.

   You can [configure image styles](https://ckeditor.com/docs/ckeditor5/latest/features/image.html#image-styles) in order to bring back the old setting (`[ 'full', 'side' ]`).

   Closes [#10](https://github.com/ckeditor/ckeditor5-build-decoupled-document/issues/10). ([75855d9](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/75855d9))

### BREAKING CHANGES

* The default image styles configuration has been changed (see the section above for more information).


## [1.0.0-beta.3](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2018-04-10)

### NOTE

This release followed `v1.0.0-beta.2` immediately to fix the issue mentioned below. Therefore, when upgrading from `v1.0.0-beta.1` make sure to also check [`v1.0.0-beta.2` release notes](https://github.com/ckeditor/ckeditor5-build-decoupled-document/releases/tag/v1.0.0-beta.2).

### Bug fixes

* Translations should work when CKEditor was loaded using RequireJS. See [ckeditor/ckeditor5#914](https://github.com/ckeditor/ckeditor5/issues/914). ([df3620e](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/df3620e))


## [1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2018-04-10)

**Note:** Make sure to see the BREAKING CHANGES section below.

### Dependencies

Major releases (contain breaking changes):

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-adapter-ckfinder/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-alignment/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-autoformat/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-basic-styles/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-block-quote/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-clipboard/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-cloud-services/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-core/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-easy-image/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-editor-decoupled/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-engine/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-enter/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-essentials/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-font/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-heading/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-highlight/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-image/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-link/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-list/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-paragraph/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-theme-lark/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-typing/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-ui/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-undo/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-upload/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-utils/releases/tag/v1.0.0-beta.2)
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v1.0.0-beta.1 => [v1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-widget/releases/tag/v1.0.0-beta.2)

### Other changes

* Renamed the export name from `DecoupledDocumentEditor` to `DecoupledEditor`. Closes [#6](https://github.com/ckeditor/ckeditor5-build-decoupled-document/issues/6). ([bc9da6a](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/bc9da6a))
* Updated the build to the latest `DecoupledEditor` class API (see [ckeditor/ckeditor5-editor-decoupled#10](https://github.com/ckeditor/ckeditor5-editor-decoupled/issues/10)). ([7b4aef1](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/7b4aef1))

### BREAKING CHANGES

* The global variable exported by the build is now called `DecoupledEditor` instead of `DecoupledDocumentEditor`. See [#6](https://github.com/ckeditor/ckeditor5-build-decoupled-document/issues/6).
* The config options `config.toolbarContainer` and `config.editableContainer` have been removed. Please refer to the `DecoupledEditor` class API documentation to learn about possible methods of bootstrapping the UI.


## [1.0.0-beta.1](https://github.com/ckeditor/ckeditor5-build-decoupled-document/compare/v0.0.1...v1.0.0-beta.1) (2018-03-15)

### Features

* Implemented the document editor build on top of the decoupled editor. Closes [#1](https://github.com/ckeditor/ckeditor5-build-decoupled-document/issues/1). ([5bf2a07](https://github.com/ckeditor/ckeditor5-build-decoupled-document/commit/5bf2a07))
