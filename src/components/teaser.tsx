export interface TeaserProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
}

export const Teaser = ({
  title,
  description,
  link,
  linkText,
  image,
}: TeaserProps) => {
  return <div>test</div>;
};
