function _visualTemplate (

  component,
  label,
  type,
  value,
  initialSize,
  props,
  resize,
  zIndex
) {
  /**
   * component: React component
   * label: label for the component property sheet
   * type: type of the component(number or char)
   * value: default value 
   * initialSize: initial size of the component{width: 200, height: 30}
   * props: props for the component ( a javascript object with calculations)
   * resize: allowed resize direction in designer (h, v, n = horizonatal, vertical, both)
   * zIndex: z-index for the component ( the default is 2. used primarily for the border component)
   */
  let r ={
    component: component,
    label: label,
    type: type,
    grow: resize,
    zIndex: zIndex == null ? 2 : zIndex,
    value: value,
    width: initialSize.width,
    height: initialSize.height,
    props: { name: " ", label: " ", ...props }
  };
  return r;
}
export default _visualTemplate;