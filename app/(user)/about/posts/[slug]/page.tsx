type Props = {
  params: {
    slug: string;
  };
};
export default function Page({ params: { slug } }: Props) {
  return <div>Post: {slug}</div>;
}
