/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */

 function optCode(ObjType, APPENV) {
   let pgm = `
   set <str> PRODUCTS;
 	   set <str> FACILITIES init {};
     set <str, str> FIXED;

 	   num demand {PRODUCTS};
 	   num fixed_cost {FACILITIES};
 	   num close_cost {FACILITIES};
 	   num x{FACILITIES};
 	   num y{FACILITIES};
 	   num var_cost {PRODUCTS, FACILITIES};
 	   num viable_flg {PRODUCTS, FACILITIES};
     num Obj_Type=${ObjType};


 	   read data ${APPENV.WORKLIBNAME}.${APPENV.OPTABLENAME} into PRODUCTS=[Product_Name] demand;
     read data ${APPENV.WORKLIBNAME}.${APPENV.OPTABLENAME} into FIXED=[Product_Name facility_name];
 	   read data ${APPENV.WORKLIBNAME}.${APPENV.SITETABLENAME} into FACILITIES=[facility_name] close_cost fixed_cost x y;
 	   read data ${APPENV.WORKLIBNAME}.${APPENV.COSTTABLENAME}	into [Product_Name facility_name] var_cost viable_flg;

 	   var Assign {PRODUCTS, FACILITIES} binary;
 	   var Close {FACILITIES} binary;

 	   min VarCost
 	       = sum {i in PRODUCTS, j in FACILITIES} var_cost[i,j] * Assign[i,j];

 	   min FixedCost
 	   		= sum {j in FACILITIES} (fixed_cost[j]*(1-Close[j]) + close_cost[j]*Close[j]);

 	   min TotalCost
 	       = VarCost + FixedCost;

 	   /* Constraints */

 	  /* PRODUCTS demand needs to be satisfied */
 	  con Demand_Con {i in PRODUCTS}:
 	  	sum {j in FACILITIES} Assign[i,j] >= demand[i];

 	   /* each site can handle at most 1 operation */
 	   con Capacity_Con {j in FACILITIES}:
 	      sum {i in PRODUCTS} Assign[i,j] <= 1;

 	   /* if operation i assigned to site j, then facility must not be closed at j */
     con If_Used_Then_Not_Closed {j in FACILITIES}:
        sum {i in PRODUCTS} Assign[i,j] = (1-Close[j]);

 	   /*not viable assignemnts*/
 	   con Viable_Assignemnts {i in PRODUCTS, j in FACILITIES}:
 	   	  Assign[i,j] <= viable_flg[i,j];

    con Fixed_Assignments {<i,j> in FIXED}: Assign[i,j] = 1;

 	   /* solve the MILP */
     if Obj_Type=1 then do;
      solve obj VarCost with milp;
     end;

     else if Obj_Type=2 then do;
      solve obj FixedCost with milp;
     end;

     else if Obj_Type=3 then do;
      solve obj TotalCost with milp;
     end;


 	   /* clean up the solution */
	   for {i in PRODUCTS, j in FACILITIES} Assign[i,j] = round(Assign[i,j]);
     for {j in FACILITIES} Close[j] = round(Close[j]);

 	   num siteTotalCost {j in FACILITIES}=
 	   	sum{i in PRODUCTS} var_cost[i,j] * Assign[i,j].Sol + (fixed_cost[j]*(1-Close[j].Sol) + close_cost[j]*Close[j].Sol);


 	   /* create output */
 	   create data ${APPENV.WORKLIBNAME}.${APPENV.OUTPUTCOSTTABLENAME} from
 	      [product site]={i in PRODUCTS, j in FACILITIES: Assign[i,j] = 1}
 	      var_cost Assign.sol;

 	   create data ${APPENV.WORKLIBNAME}.${APPENV.OUTPUTSITETABLENAME} from
 	      [site]={j in FACILITIES}
 	      x y Close.sol siteTotalCost;
    `;
  return pgm;
 }

export default optCode;
