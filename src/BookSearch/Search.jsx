import './BookSearch.css'

export default function Search() {
    return(
        <>
            <div className="search-container">
                <h1>Поиск книг, статей и многого другого</h1>
                <form className="searchbar">
                    <div className="searchbar-input-container">
                        <input className="searchbar-input" type="text" placeholder="Поиск"/>
                    </div>
                </form>
                <div className="search-filter-container">
                    <h2>Уточните свой поиск</h2>
                </div>
            </div>
        </>
    )
}