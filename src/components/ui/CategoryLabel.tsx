import { Link } from "@tanstack/react-router"

const CategoryLabel = ({ label, slug }: { label: string, slug: string }) => {
  return (
    <Link
        to={"/explore/" + slug}
        className="bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-lg cursor-pointer w-70 px-5 py-4 flex items-center"
    >
        <span className="font-semibold">{label}</span>
    </Link>
  )
}

export default CategoryLabel