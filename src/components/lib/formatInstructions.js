/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function formatInstructions(instructions) {
  let inst = `
  Format all responses as html using the instructions here.
  Format the response as a html table if the content of the response is one of the following schema:

  - a comma-delimited format 
  - this schema{a: {a1:10, bx:20, c: {cx:3, az: 4}} }, {d: {d1:10, d2:20},...}
  - this schema [{a1:1,b1:1}, {a1:1, b1:2}. ...}]
  
  if the cell data is numeric then right-align the cell data.
  Below is an example of a  html table format with nested table

      '<table>     
         <tr>     
           <th>Name</th>     
           <th>Value</th>     
         </tr>     
         <tr>     
           <td>a</td>     
           <td>     
             <table>     
               <tr>     
                 <th>Name</th>     
                 <th>Value</th>     
               </tr>     
               <tr>     
                 <td>a1</td>     
                 <td>10</td>     
               </tr>     
               <tr>     
                 <td>bx</td>     
                 <td>20</td>     
               </tr>     
               <tr>     
                 <td>c</td>     
                 <td>     
                   <table>     
                     <tr>     
                       <th>Name</th>     
                       <th>Value</th>     
                     </tr>     
                     <tr>     
                       <td>cx</td>     
                       <td>3</td>     
                     </tr>     
                     <tr>     
                       <td>az</td>     
                       <td>4</td>     
                     </tr>     
                   </table>     
                 </td>     
               </tr>     
             </table>     
           </td>     
         </tr>     
         <tr>     
           <td>d</td>     
           <td>     
             <table>     
               <tr>     
                 <th>Name</th>     
                 <th>Value</th>     
               </tr>     
               <tr>     
                 <td>d1</td>     
                 <td>10</td>     
               </tr>     
               <tr>     
                 <td>d2</td>     
                 <td>20</td>     
               </tr>     
             </table>     
           </td>     
         </tr>     
       </table>     
     '

  if the response from a tool is of the form  like ['a','b','c', ...] or [1,11,8, ...] or
  ['- a','- b','- c', ...] or ['1. xxx', '2. yyy', '3. zzz']
  then format it as  html ordered or unordered list element
  Below is a sample html list format.
  '<ul>
    <li>a</li>
    <li>b</li>
    <li>3</li>
  </ul>'


  if the response from a tool is of the form {a:1,b:2} then format it as  html table with a single column.
  '<table>
  <tr>
  <th>Name</th>
  <th>Value</th>
  </tr>
    <tr>
      <td>a</td>
      <td>1</td>
    </tr>
    <tr>
      <td>b</td>
      <td>1</td>
    </tr>

  </table>'

  The suggested styling for the html table is as follows:
    The html table should have a light blue background for the column headers.
    Use a border width of 1px and solid style for the table.

  
  `;
  return instructions + ' ' +  inst;
}
export default formatInstructions;