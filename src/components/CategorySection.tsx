import type { CategoryDataType } from "../../types"
import CategoryLabel from "./ui/CategoryLabel"

type CategorySectionProps = {
    categoryData: CategoryDataType
}

const CategorySection = ({ categoryData }: CategorySectionProps) => {
  return (
    <div className="flex flex-row gap-10">
        <span className="text-6xl font-bold">{categoryData.letter}</span>

        <div className="grid grid-cols-4 gap-5">
            {categoryData.categories.map(data => (
                <CategoryLabel slug={data.slug} label={data.name} />
            ))}
        </div>
    </div>
  )
}

export default CategorySection