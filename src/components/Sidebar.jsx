import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const Sidebar = (props) => {
    const { selectedCategory, setSelectedCategory } = props;

    const handleClick = (category) => {
        setSelectedCategory(category)
    }

    return (
        <Stack direction="row"
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { sm: 'row', md: 'column' },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    style={{
                        backgroundColor: category.name === selectedCategory && '#FC1503',
                        color: "white"
                    }}
                    key={category.name}
                    onClick={() => handleClick(category.name)}
                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? 'white' : 'red',
                            marginRight: '15px'
                        }}>
                        {category.icon}
                    </span>
                    <span style={{
                        opacity: category.name === selectedCategory ? '1' : '0.8'
                    }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}


export default Sidebar