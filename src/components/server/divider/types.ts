type Thickness = 1 | 2 | 3;
export interface DividerProps extends React.ComponentPropsWithoutRef<"hr"> {
  thickness?: Thickness;
}
