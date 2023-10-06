import Image from 'next/image';

type AvatarProps = {
  imageUrl?: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return imageUrl ? <Image src={imageUrl} width={100} height={100} alt='avatar' /> : null;
};

export default Avatar;

