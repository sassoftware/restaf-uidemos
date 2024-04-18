/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function formatInstructions(instructions) {
  let inst = `
  Process the output from tools using the following guidelines:

  - Include all the information from the tool output in the response.

  - Always include annotation when information is found in a file.

  - Always report always include annotation when information is found in a file.

  - format comma delimited output as a table.

  
  The suggested styling for the table is as follows:
    The html table should have a light blue background for the column headers.
    Use a border width of 1px and solid style for the table.
`
  return instructions + ' ' +  inst;
}
export default formatInstructions;