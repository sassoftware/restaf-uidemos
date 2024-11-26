/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function isMissing (val) {
  return (val == null || val.trim().length === 0) ? true : false;
} 
export default isMissing; 