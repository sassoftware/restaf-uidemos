/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function  visualTemplate() {
  return {
    id: 0,
    name: ' ',
    component: ' ',
    label: ' ',
    hide: false,
    custom: true,
    props: {
      name: '',
      type: 'char',
      value: 'text',
      label: ' ',
      length: 12,
      dataProps: '',
      onEdit: '',
      style: '',
      handlerType: 'sync',
      handlers: {
        style: null,
        dataProps: null,
        onEdit: null,
      }
    },
    propDetails:{}
    }
  }
export default visualTemplate;
