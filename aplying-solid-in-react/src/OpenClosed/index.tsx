import { FC, PropsWithChildren } from "react";

type Props = {
  title: string;
  type: "default" | "withLinkButton" | "withNormalButton";
  href?: string;
  buttonText?: string;
  onClick?: () => void;
};

type TitleProps = {
  title: string;

}
const Title: FC<PropsWithChildren<TitleProps>> = ({ title, children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>{title}</h1>;
      {children}
    </div>
  );
};

const OpenClosed: FC<Props> = ({ title, type, href, buttonText, onClick }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>{title}</h1>

      {type === "withLinkButton" && (
        <div onClick={onClick}>
          <a href={href}>{buttonText}</a>
        </div>
      )}

      {type === "withNormalButton" && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
};
export default OpenClosed;
