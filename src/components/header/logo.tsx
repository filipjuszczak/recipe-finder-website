import Image from 'next/image';
import logoImg from '@/../public/img/logo.svg';

export function Logo() {
  return (
    <Image src={logoImg} alt="Healthy Recipe Finder logo" preload={true} />
  );
}
