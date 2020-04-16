import React from 'react'
import { Icon, Input } from 'semantic-ui-react'

const Search = (props) => {

    const handleChange = (e) => {
        props.handleSearchTerm(e.target.value)
    }

    return (
        <div>
            <Input
                icon={<Icon name='search' inverted circular link />}
                placeholder="Search..." 
                type="text" 
                name="searchTerm"
                value={props.searchTerm}
                onChange={handleChange}
            />
        </div>
    )

}

export default Search