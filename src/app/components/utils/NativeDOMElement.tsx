const NativeDOMElement = (props: any) => {
  return <div ref={(ref: any) => ref?.appendChild(props.child)} />;
};
export default NativeDOMElement;
