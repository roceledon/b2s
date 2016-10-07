'use strict';

angular.module('b2s.version', [
  'b2s.version.interpolate-filter',
  'b2s.version.version-directive'
])

.value('version', '0.1');
