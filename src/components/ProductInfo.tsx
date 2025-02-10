

interface ProductInfoProps {
  readonly title: string;
  readonly description: string;
}

function ProductInfo({ title, description }: ProductInfoProps) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-zinc-500 py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg text-zinc-500">
        {description}
      </p>
    </div>
  )
}

export default ProductInfo