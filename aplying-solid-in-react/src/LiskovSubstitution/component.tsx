interface Props {
  children: React.ReactNode;
  color?: string;
  size: "xl" | any;
}
const Button = ({ children, color, size }: Props) => {
  return <button style={{ color, fontSize: size === "xl" ? "32px" : "16px" }}>{children}</button>;
};

const RedButton = ({ children, isBig }: any) => {
  return (
    <button style={{ color: "red", fontSize: isBig === "xl" ? "32px" : "16px" }}>{children}</button>
  );
};

const RedButtonSubstituibleByLiskov = ({ children, size }: Props) => {
  return (
    <button style={{ color: "red", fontSize: size === "xl" ? "32px" : "16px" }}>{children}</button>
  );
};

/* return (
  <div>
    <RedButtonSubstituibleByLiskov size="xl">
      Mi botón que funciona
    </RedButtonSubstituibleByLiskov>
  </div>
); */