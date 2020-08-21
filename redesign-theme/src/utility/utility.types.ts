import { UnitInterface } from '../unit';
import { BorderInterface } from '../border';
import { ElevateInterface } from '../elevate';
import { RadiusInterface } from '../radius';
export interface AliasInterface {
  [key: string]: string;
}

export interface UtilityInterface {
  margin: (value: string | number) => { margin: string };
  marginTop: (value: string | number) => { marginTop: string };
  marginRight: (value: string | number) => { marginRight: string };
  marginBottom: (value: string | number) => { marginBottom: string };
  marginLeft: (value: string | number) => { marginLeft: string };
  marginX: (
    value: string | number
  ) => { marginRight: string; marginLeft: string };
  marginY: (
    value: string | number
  ) => { marginTop: string; marginBottom: string };
  margin0: (value: string) => { margin: string };
  margin1: (value: string) => { margin: string };
  margin2: (value: string) => { margin: string };
  margin3: (value: string) => { margin: string };
  margin4: (value: string) => { margin: string };
  margin5: (value: string) => { margin: string };
  margin6: (value: string) => { margin: string };
  margin7: (value: string) => { margin: string };
  margin8: (value: string) => { margin: string };
  margin9: (value: string) => { margin: string };
  margin10: (value: string) => { margin: string };
  m: (value: string | number) => { margin: string };
  mt: (value: string | number) => { marginTop: string };
  mr: (value: string | number) => { marginRight: string };
  mb: (value: string | number) => { marginBottom: string };
  ml: (value: string | number) => { marginLeft: string };
  mx: (value: string | number) => { marginRight: string; marginLeft: string };
  my: (value: string | number) => { marginTop: string; marginBottom: string };
  m0: (value: string) => { margin: string };
  m1: (value: string) => { margin: string };
  m2: (value: string) => { margin: string };
  m3: (value: string) => { margin: string };
  m4: (value: string) => { margin: string };
  m5: (value: string) => { margin: string };
  m6: (value: string) => { margin: string };
  m7: (value: string) => { margin: string };
  m8: (value: string) => { margin: string };
  m9: (value: string) => { margin: string };
  m10: (value: string) => { margin: string };

  padding: (value: string | number) => { padding: string };
  paddingTop: (value: string | number) => { paddingTop: string };
  paddingRight: (value: string | number) => { paddingRight: string };
  paddingBottom: (value: string | number) => { paddingBottom: string };
  paddingLeft: (value: string | number) => { paddingLeft: string };
  paddingX: (
    value: string | number
  ) => { paddingRight: string; paddingLeft: string };
  paddingY: (
    value: string | number
  ) => { paddingTop: string; paddingBottom: string };
  padding0: (value: string) => { padding: string };
  padding1: (value: string) => { padding: string };
  padding2: (value: string) => { padding: string };
  padding3: (value: string) => { padding: string };
  padding4: (value: string) => { padding: string };
  padding5: (value: string) => { padding: string };
  padding6: (value: string) => { padding: string };
  padding7: (value: string) => { padding: string };
  padding8: (value: string) => { padding: string };
  padding9: (value: string) => { padding: string };
  padding10: (value: string) => { padding: string };
  p: (value: string | number) => { padding: string };
  pTop: (value: string | number) => { paddingTop: string };
  pRight: (value: string | number) => { paddingRight: string };
  pBottom: (value: string | number) => { paddingBottom: string };
  pLeft: (value: string | number) => { paddingLeft: string };
  pX: (value: string) => { paddingRight: string; paddingLeft: string };
  pY: (value: string) => { paddingTop: string; paddingBottom: string };
  p0: (value: string) => { padding: string };
  p1: (value: string) => { padding: string };
  p2: (value: string) => { padding: string };
  p3: (value: string) => { padding: string };
  p4: (value: string) => { padding: string };
  p5: (value: string) => { padding: string };
  p6: (value: string) => { padding: string };
  p7: (value: string) => { padding: string };
  p8: (value: string) => { padding: string };
  p9: (value: string) => { padding: string };
  p10: (value: string) => { padding: string };

  border: (border: BorderInterface) => (value: string) => { border: string };
  borderBottom: (
    border: BorderInterface
  ) => (value: string) => { borderBottom: string };
  borderLeft: (
    border: BorderInterface
  ) => (value: string) => { borderLeft: string };
  borderRight: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string };
  borderTop: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string };
  borderX: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string; borderLeft: string };
  borderY: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string; borderBottom: string };
  b: (border: BorderInterface) => (value: string) => { border: string };
  bb: (border: BorderInterface) => (value: string) => { borderBottom: string };
  bl: (border: BorderInterface) => (value: string) => { borderLeft: string };
  br: (border: BorderInterface) => (value: string) => { borderRight: string };
  bt: (border: BorderInterface) => (value: string) => { borderTop: string };
  bx: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string; borderLeft: string };
  by: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string; borderBottom: string };

  radius: (
    radius: RadiusInterface
  ) => (value: string) => { borderRadius: string };
  borderBottomRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderBottomRadius: string };
  borderLeftRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderLeftRadius: string };
  borderRightRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderRightRadius: string };
  borderTopRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderTopRadius: string };
  borderXRadius: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { borderRightRadius: string; borderLeftRadius: string };
  borderYRadius: (
    radius: RadiusInterface
  ) => (
    radius: string
  ) => { borderTopRadius: string; borderBottomRadius: string };
  r: (radius: RadiusInterface) => (value: string) => { borderRadius: string };
  rb: (
    radius: RadiusInterface
  ) => (value: string) => { borderBottomRadius: string };
  rl: (
    radius: RadiusInterface
  ) => (value: string) => { borderLeftRadius: string };
  rr: (
    radius: RadiusInterface
  ) => (value: string) => { borderRightRadius: string };
  rt: (
    radius: RadiusInterface
  ) => (value: string) => { borderTopRadius: string };
  rx: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { borderRightRadius: string; borderLeftRadius: string };
  ry: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { borderTopRadius: string; borderBottomRadius: string };

  flex: (value: string) => { flex: string };
  flexGrow: (value: string) => { flexGrow: string };
  order: (value: string) => { order: string };
  display: (value: string) => { display: string };
  f: (value: string) => { flex: string };
  fg: (value: string) => { flexGrow: string };
  o: (value: string) => { order: string };
  d: (value: string) => { display: string };

  elevate: (
    elevate: ElevateInterface
  ) => (value: string) => { boxShadow: string };
  e: (value: string) => { boxShadow: string };

  centered: () => { margin: string };
  c: () => { margin: string };

  heightSize: (unit: UnitInterface) => (value: string) => { width: string };
  h: (unit: UnitInterface) => (value: string) => { width: string };
  widthSize: (value: string) => { width: string };
  w: (unit: UnitInterface) => (value: string) => { width: string };
}

export interface PartialUtilityInterface extends Partial<UtilityInterface> {}
