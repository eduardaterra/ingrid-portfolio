import { HTMLAttributes } from "react";
import Link from "next/link";
import styled from "./styles.module.scss";
import Input from "@/app/components/Input";
import Image from "next/image";

const ContactItem = ({
  title,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { title: string }) => {
  return (
    <div className={styled.contactItemContainer} {...props}>
      <span className={styled.contactItemTitle}>{title}</span>
      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <div className={styled.container}>
      <ContactItem title="Redes Sociais">
        <div className={styled.socialMediaWrapper}>
          <a
            href="https://www.linkedin.com/in/ingridpmartins/"
            target="_blank"
            className={styled.socialMediaLink}
            rel="noreferrer noopener"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:ingridpmartins@gmail.com"
            target="_blank"
            className={styled.socialMediaLink}
            rel="noreferrer noopener"
          >
            EMAIL
          </a>
        </div>
      </ContactItem>
      <ContactItem title="Whatsapp">
        <Input placeholder="Envie a sua mensagem" className={styled.input} />
      </ContactItem>
      <ContactItem title="Ouça meu podcast na sua plataforma favorita :)">
        <div className={styled.podcastContainer}>
          <div className={styled.podcastImageWrapper}>
            <Image
              fill
              src="/Sinto.png"
              alt="podcast sinto, logo existo de Ingrid Martins e Amanda Gurgel"
            />
          </div>
          <div className={styled.podcastLinksWrapper}>
            <a
              href="https://open.spotify.com/show/2LkBmBMlcDwgaObFiPRw31"
              target="_blank"
              rel="noreferrer noopener"
              className={styled.podcastLink}
            >
              Spotify
            </a>
            <a
              href="https://deezer.page.link/yrYfF88BABX1T2EQ9"
              target="_blank"
              rel="noreferrer noopener"
              className={styled.podcastLink}
            >
              Deezer
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83NzA3NDhkNC9wb2RjYXN0L3Jzcw"
              target="_blank"
              rel="noreferrer noopener"
              className={styled.podcastLink}
            >
              Google Podcasts
            </a>
            <a
              href="https://podcasts.apple.com/br/podcast/sinto-logo-existo/id1609470588"
              target="_blank"
              rel="noreferrer noopener"
              className={styled.podcastLink}
            >
              Apple Podcasts
            </a>
            <a
              href="https://music.amazon.com.br/podcasts/2873ce0d-9c08-4492-8325-128594ec6db7/sinto-logo-existo"
              target="_blank"
              rel="noreferrer noopener"
              className={styled.podcastLink}
            >
              Amazon Music
            </a>
          </div>
        </div>
      </ContactItem>
    </div>
  );
};

export default Contact;

