import { Tinytest } from "meteor/tinytest";

import { name as packageName } from "meteor/autoform-image-select";

Tinytest.add('autoform-image-select - example', function (test) {
  test.equal(packageName, "autoform-image-select");
});
