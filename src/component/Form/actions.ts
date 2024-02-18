'use server'

export async function createdTodo(formData: FormData) {
    // this will content everthing what will do no server 

    const name = formData.get('name')
    console.log("🚀 ~ name:", name)
    const price = formData.get('price')
    console.log("🚀 ~ price:", price)
    const des = formData.get('des')
    console.log("🚀 ~ des:", des)
}