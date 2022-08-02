/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { useContext } from 'react';
import DataEditorContext from './DataeEditorContext';

function useDataEditorContext () {
	const context = useContext(DataEditorContext);
	return context;
}
export default useDataEditorContext;
