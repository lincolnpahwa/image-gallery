import EmberObject from '@ember/object';
import ImageBaseMixin from 'photo-gallery/mixins/image-base';
import { module, test } from 'qunit';

module('Unit | Mixin | image-base', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ImageBaseObject = EmberObject.extend(ImageBaseMixin);
    let subject = ImageBaseObject.create();
    assert.ok(subject);
  });
});
