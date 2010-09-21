/* -*- tab-width:4 -*- */

/*
 * Copyright (c) 2010 Eamonn O'Brien-Strain, eob@well.com
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which is available at http://www.eclipse.org/legal/epl-v10.html
 */

/*jslint devel: true */
/* declare globals to keep JSLint happy */
var describe, it, expect, spyOn, jasmine;  //jasmine test framework 
//DECLARE YOUR MODEL CLASSES HERE

//REPLACE FOLLOWING WITH YOUR OWN TEST
it('should increment a variable', function () {
  var foo = 0;            // set up the world
  foo++;                  // call your application code

  expect(foo).toEqual(1); // passes because foo == 1
});