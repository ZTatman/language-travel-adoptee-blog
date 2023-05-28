type Prop = {
  category: Category;
};

export default function Category({ category }: Prop) {
  return <div className="rounded-full bg-teal-600 px-2 py-1 text-xs text-white drop-shadow-sm">{category.title}</div>;
}
