import { ElementType, Suspense } from "react";

type PropTypes = object;

const Loadable = (Component: ElementType) => (props: PropTypes) => {
  return (
    <Suspense fallback={"loading..."}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
