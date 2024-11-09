

export default function UserPage() {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="photoNews" placeholder="Фото новости" onChange={handleChangeFile}/>
                <button className="login" type="submit">Загрузить аватарку</button>
            </form>
        </>
    )
}