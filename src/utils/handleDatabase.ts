import { db } from './db'

export async function getData() {
    const data = await db.query('SELECT * FROM quotes')
    return data.rows
}

export async function saveData(quote: string, author: string) {
    try {
        await db.query("INSERT INTO quotes(author, quote) VALUES ($1, $2)", [author, quote])
        return 'Saved Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function updateData(id: string, author: string, quote: string) {
    try {
        await db.query("UPDATE quotes SET author = $1, quote = $2 WHERE id = $3", [author, quote, id])
        return 'Updated Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function deleteData(id: string) {
    try {
        await db.query("DELETE FROM quotes WHERE id = $1", [id])
        return 'Deleted Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function incrementLikes(id: string) {
    try {
        await db.query("UPDATE quotes SET likes = likes + 1 WHERE id = $1", [id])
        return 'Liked Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function decrementLikes(id: string) {
    try {
        await db.query("UPDATE quotes SET likes = likes - 1 WHERE id = $1", [id])
        return 'Disliked Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}