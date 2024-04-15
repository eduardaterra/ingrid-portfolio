"use client";
import { HTMLAttributes, useState } from "react";
import styled from "./styles.module.scss";
import classNames from "classnames";

const Input = ({
  placeholder,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  placeholder: string;
  cb?: (val: unknown) => void;
}) => {
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className={classNames(styled.wrapper, className)} {...props}>
      <div className={styled.container}>
        <input
          className={styled.input}
          onChange={(e) => setMessage(e.currentTarget.value)}
          onFocus={() => setActive(true)}
          onBlur={(e) =>
            !(e.currentTarget.value.length > 0) && setActive(false)
          }
        />
        <span className={styled.placeholder} data-active={String(active)}>
          {placeholder}
        </span>
      </div>
      <a
        href={`https://api.whatsapp.com/send?phone=${encodeURIComponent("981502568")}&text=${encodeURIComponent(message)}`}
        className={styled.button}
        target="_blank"
        rel="noreferrer noopener"
      >
        Enviar
      </a>
    </div>
  );
};

export default Input;

